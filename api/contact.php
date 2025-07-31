<?php
/**
 * Contact Form Handler
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Validate and sanitize input data
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';
$subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';
$company = isset($_POST['company']) ? trim(strip_tags($_POST['company'])) : '';
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($subject)) {
    $errors[] = 'Subject is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// Basic spam protection
if (strlen($message) < 10) {
    $errors[] = 'Message is too short';
}

if (strlen($message) > 5000) {
    $errors[] = 'Message is too long';
}

// Check for spam patterns
$spam_patterns = [
    '/\b(viagra|cialis|casino|poker|lottery|winner)\b/i',
    '/\b(click here|free money|make money|get rich)\b/i',
    '/\b(100% free|guaranteed|no obligation)\b/i'
];

foreach ($spam_patterns as $pattern) {
    if (preg_match($pattern, $message . ' ' . $subject)) {
        $errors[] = 'Message appears to be spam';
        break;
    }
}

// Rate limiting (simple file-based)
$rate_limit_file = __DIR__ . '/rate_limit.json';
$rate_limit_data = [];

if (file_exists($rate_limit_file)) {
    $rate_limit_data = json_decode(file_get_contents($rate_limit_file), true) ?: [];
}

$client_ip = $_SERVER['REMOTE_ADDR'];
$current_time = time();
$rate_limit_window = 300; // 5 minutes
$max_attempts = 3;

// Clean old entries
$rate_limit_data = array_filter($rate_limit_data, function($timestamp) use ($current_time, $rate_limit_window) {
    return ($current_time - $timestamp) < $rate_limit_window;
});

// Check rate limit
$attempts = array_keys($rate_limit_data, $client_ip);
if (count($attempts) >= $max_attempts) {
    $errors[] = 'Too many requests. Please try again later.';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Record this attempt
$rate_limit_data[$current_time] = $client_ip;
file_put_contents($rate_limit_file, json_encode($rate_limit_data));

// Prepare email content
$to = 'investor.relations@globalbank.com'; // Change to your email
$email_subject = 'New Contact Form Submission: ' . $subject;

$email_body = "
New contact form submission:

Name: {$name}
Email: {$email}
Company: {$company}
Phone: {$phone}
Subject: {$subject}

Message:
{$message}

---
Submitted from: {$_SERVER['HTTP_HOST']}
IP Address: {$client_ip}
User Agent: {$_SERVER['HTTP_USER_AGENT']}
Time: " . date('Y-m-d H:i:s') . "
";

$headers = [
    'From: noreply@' . $_SERVER['HTTP_HOST'],
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=utf-8'
];

// Attempt to send email
$mail_sent = false;

try {
    $mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));
} catch (Exception $e) {
    error_log('Contact form mail error: ' . $e->getMessage());
}

// Log submission (optional)
$log_entry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'name' => $name,
    'email' => $email,
    'company' => $company,
    'subject' => $subject,
    'ip' => $client_ip,
    'mail_sent' => $mail_sent
];

$log_file = __DIR__ . '/contact_log.json';
$log_data = [];

if (file_exists($log_file)) {
    $log_data = json_decode(file_get_contents($log_file), true) ?: [];
}

$log_data[] = $log_entry;

// Keep only last 1000 entries
if (count($log_data) > 1000) {
    $log_data = array_slice($log_data, -1000);
}

file_put_contents($log_file, json_encode($log_data, JSON_PRETTY_PRINT));

// Send auto-reply to user
$auto_reply_subject = 'Thank you for contacting Global Investor Relations';
$auto_reply_body = "
Dear {$name},

Thank you for your inquiry. We have received your message and will respond within 24 hours during business days.

Your submission details:
Subject: {$subject}
Submitted: " . date('Y-m-d H:i:s') . "

Best regards,
Global Investor Relations Team
";

$auto_reply_headers = [
    'From: noreply@' . $_SERVER['HTTP_HOST'],
    'Reply-To: investor.relations@globalbank.com',
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=utf-8'
];

// Send auto-reply (optional)
try {
    mail($email, $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));
} catch (Exception $e) {
    // Silently fail auto-reply if there's an issue
    error_log('Auto-reply mail error: ' . $e->getMessage());
}

// Return response
if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully. We will contact you soon.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'There was an error sending your message. Please try again later or contact us directly.'
    ]);
}
?>