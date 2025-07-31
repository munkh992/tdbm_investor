<?php
/**
 * Newsletter Subscription Handler
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
$email = isset($_POST['email']) ? trim(strtolower(strip_tags($_POST['email']))) : '';
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$preferences = isset($_POST['preferences']) ? $_POST['preferences'] : [];

// Validation
$errors = [];

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($name)) {
    $errors[] = 'Name is required';
}

// Basic spam protection
if (strlen($name) > 100) {
    $errors[] = 'Name is too long';
}

// Check for spam patterns in name
$spam_patterns = [
    '/\b(viagra|cialis|casino|poker|lottery)\b/i',
    '/\b(click here|free money|make money)\b/i',
    '/\b(100% free|guaranteed|winner)\b/i'
];

foreach ($spam_patterns as $pattern) {
    if (preg_match($pattern, $name)) {
        $errors[] = 'Invalid name provided';
        break;
    }
}

// Rate limiting
$rate_limit_file = __DIR__ . '/newsletter_rate_limit.json';
$rate_limit_data = [];

if (file_exists($rate_limit_file)) {
    $rate_limit_data = json_decode(file_get_contents($rate_limit_file), true) ?: [];
}

$client_ip = $_SERVER['REMOTE_ADDR'];
$current_time = time();
$rate_limit_window = 300; // 5 minutes
$max_attempts = 5;

// Clean old entries
$rate_limit_data = array_filter($rate_limit_data, function($entry) use ($current_time, $rate_limit_window) {
    return ($current_time - $entry['timestamp']) < $rate_limit_window;
});

// Check rate limit for this IP
$ip_attempts = array_filter($rate_limit_data, function($entry) use ($client_ip) {
    return $entry['ip'] === $client_ip;
});

if (count($ip_attempts) >= $max_attempts) {
    $errors[] = 'Too many subscription attempts. Please try again later.';
}

// Check if email already exists in rate limit (prevent duplicate submissions)
$email_attempts = array_filter($rate_limit_data, function($entry) use ($email) {
    return $entry['email'] === $email;
});

if (count($email_attempts) >= 2) {
    $errors[] = 'This email has already been submitted recently.';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Record this attempt
$rate_limit_data[] = [
    'ip' => $client_ip,
    'email' => $email,
    'timestamp' => $current_time
];

file_put_contents($rate_limit_file, json_encode($rate_limit_data));

// Load existing subscribers
$subscribers_file = __DIR__ . '/newsletter_subscribers.json';
$subscribers = [];

if (file_exists($subscribers_file)) {
    $subscribers = json_decode(file_get_contents($subscribers_file), true) ?: [];
}

// Check if email already exists
$existing_subscriber = null;
foreach ($subscribers as $index => $subscriber) {
    if ($subscriber['email'] === $email) {
        $existing_subscriber = $index;
        break;
    }
}

$is_new_subscriber = $existing_subscriber === null;

// Prepare subscriber data
$subscriber_data = [
    'email' => $email,
    'name' => $name,
    'preferences' => is_array($preferences) ? $preferences : [],
    'subscribed_at' => date('Y-m-d H:i:s'),
    'ip_address' => $client_ip,
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
    'status' => 'active',
    'confirmed' => false, // Would require email confirmation in production
    'unsubscribe_token' => bin2hex(random_bytes(16))
];

if ($is_new_subscriber) {
    $subscribers[] = $subscriber_data;
    $action = 'subscribed';
} else {
    // Update existing subscriber
    $subscribers[$existing_subscriber] = array_merge($subscribers[$existing_subscriber], [
        'name' => $name,
        'preferences' => $subscriber_data['preferences'],
        'updated_at' => date('Y-m-d H:i:s'),
        'status' => 'active'
    ]);
    $action = 'updated';
}

// Save subscribers
$save_result = file_put_contents($subscribers_file, json_encode($subscribers, JSON_PRETTY_PRINT));

if ($save_result === false) {
    echo json_encode([
        'success' => false,
        'message' => 'Failed to save subscription. Please try again.'
    ]);
    exit;
}

// Send welcome email
$welcome_subject = 'Welcome to Global Investor Relations Newsletter';
$welcome_body = "
Dear {$name},

Thank you for subscribing to the Global Investor Relations newsletter!

You will receive:
- Weekly market insights and analysis
- Quarterly earnings updates  
- Important regulatory announcements
- Exclusive investor resources

You can update your preferences or unsubscribe at any time by visiting:
https://{$_SERVER['HTTP_HOST']}/unsubscribe?token={$subscriber_data['unsubscribe_token']}

Best regards,
Global Investor Relations Team

---
This email was sent to: {$email}
You subscribed on: " . date('Y-m-d H:i:s') . "
";

$welcome_headers = [
    'From: investor.relations@' . $_SERVER['HTTP_HOST'],
    'Reply-To: investor.relations@globalbank.com',
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=utf-8',
    'List-Unsubscribe: <https://' . $_SERVER['HTTP_HOST'] . '/unsubscribe?token=' . $subscriber_data['unsubscribe_token'] . '>'
];

$welcome_sent = false;
try {
    $welcome_sent = mail($email, $welcome_subject, $welcome_body, implode("\r\n", $welcome_headers));
} catch (Exception $e) {
    error_log('Welcome email error: ' . $e->getMessage());
}

// Send notification to admin (optional)
$admin_email = 'investor.relations@globalbank.com';
$admin_subject = 'New Newsletter Subscription';
$admin_body = "
New newsletter subscription:

Name: {$name}
Email: {$email}
Action: {$action}
Preferences: " . implode(', ', $subscriber_data['preferences']) . "
IP: {$client_ip}
Time: " . date('Y-m-d H:i:s') . "

Total subscribers: " . count($subscribers) . "
";

$admin_headers = [
    'From: noreply@' . $_SERVER['HTTP_HOST'],
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=utf-8'
];

try {
    mail($admin_email, $admin_subject, $admin_body, implode("\r\n", $admin_headers));
} catch (Exception $e) {
    // Silently fail admin notification
    error_log('Admin notification error: ' . $e->getMessage());
}

// Log subscription
$log_entry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'action' => $action,
    'email' => $email,
    'name' => $name,
    'ip' => $client_ip,
    'welcome_sent' => $welcome_sent,
    'total_subscribers' => count($subscribers)
];

$log_file = __DIR__ . '/newsletter_log.json';
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

// Return success response
$response_message = $is_new_subscriber 
    ? 'Successfully subscribed to the newsletter! Please check your email for confirmation.'
    : 'Your subscription has been updated successfully!';

echo json_encode([
    'success' => true,
    'message' => $response_message,
    'data' => [
        'email' => $email,
        'action' => $action,
        'welcome_sent' => $welcome_sent
    ]
]);
?>