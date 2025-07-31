# API Reference - Investor Relations Website

This document provides comprehensive information about the backend API endpoints and their usage.

## Overview

The API consists of PHP endpoints that handle form submissions, newsletter subscriptions, and data management. All endpoints return JSON responses and implement security measures including rate limiting and input validation.

## Base URL

```
https://yourdomain.com/api/
```

## Authentication

No authentication is required for public endpoints. All endpoints implement rate limiting and spam protection.

## Endpoints

### Contact Form

#### POST /api/contact.php

Handles contact form submissions from the investor relations website.

**Request Headers:**
```
Content-Type: application/x-www-form-urlencoded
```

**Request Body:**
```
name=John%20Doe&email=john@example.com&subject=Investment%20Inquiry&message=Hello...&company=ABC%20Corp&phone=555-123-4567
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Full name of the contact |
| email | string | Yes | Valid email address |
| subject | string | Yes | Subject of the inquiry |
| message | string | Yes | Message content (10-5000 chars) |
| company | string | No | Company name |
| phone | string | No | Phone number |

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will contact you soon."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Email is required, Subject is required"
}
```

**Rate Limiting:**
- 3 requests per 5 minutes per IP address
- Email notifications sent to admin
- Auto-reply sent to user

**Example Usage:**
```javascript
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('email', 'john@example.com');
formData.append('subject', 'Investment Inquiry');
formData.append('message', 'I would like to learn more about...');

fetch('/api/contact.php', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

### Newsletter Subscription

#### POST /api/newsletter.php

Handles newsletter subscription requests.

**Request Headers:**
```
Content-Type: application/x-www-form-urlencoded
```

**Request Body:**
```
email=john@example.com&name=John%20Doe&preferences[]=weekly&preferences[]=earnings
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| email | string | Yes | Valid email address |
| name | string | Yes | Full name |
| preferences | array | No | Newsletter preferences |

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to the newsletter! Please check your email for confirmation.",
  "data": {
    "email": "john@example.com",
    "action": "subscribed",
    "welcome_sent": true
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Email is required, Name is required"
}
```

**Rate Limiting:**
- 5 requests per 5 minutes per IP address
- 2 requests per email address per 5 minutes
- Welcome email sent automatically

**Example Usage:**
```javascript
const formData = new FormData();
formData.append('email', 'john@example.com');
formData.append('name', 'John Doe');
formData.append('preferences[]', 'weekly');
formData.append('preferences[]', 'earnings');

fetch('/api/newsletter.php', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

## Data Storage

### Contact Form Data

Contact submissions are logged in `/api/contact_log.json`:

```json
[
  {
    "timestamp": "2025-01-15 10:30:00",
    "name": "John Doe",
    "email": "john@example.com",
    "company": "ABC Corp",
    "subject": "Investment Inquiry",
    "ip": "192.168.1.100",
    "mail_sent": true
  }
]
```

### Newsletter Subscribers

Newsletter subscriptions are stored in `/api/newsletter_subscribers.json`:

```json
[
  {
    "email": "john@example.com",
    "name": "John Doe",
    "preferences": ["weekly", "earnings"],
    "subscribed_at": "2025-01-15 10:30:00",
    "ip_address": "192.168.1.100",
    "user_agent": "Mozilla/5.0...",
    "status": "active",
    "confirmed": false,
    "unsubscribe_token": "abc123def456"
  }
]
```

## Error Handling

### Common Error Codes

| HTTP Code | Description |
|-----------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 405 | Method Not Allowed |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

### Error Response Format

```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Specific error 1", "Specific error 2"]
}
```

## Security Features

### Input Validation

All inputs are validated and sanitized:

```php
// Example validation
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$name = trim(strip_tags($_POST['name']));
```

### Spam Protection

- Pattern matching for common spam phrases
- Message length validation
- Suspicious content detection
- Rate limiting per IP and email

### Rate Limiting

Rate limiting data stored in JSON files:

```json
{
  "1642248600": "192.168.1.100",
  "1642248660": "192.168.1.100",
  "1642248720": "192.168.1.101"
}
```

## Email Configuration

### SMTP Settings

For production use, configure SMTP:

```php
// In contact.php and newsletter.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-email@gmail.com';
$mail->Password = 'your-app-password';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
```

### Email Templates

Contact form auto-reply template:
```
Dear {name},

Thank you for your inquiry. We have received your message and will respond within 24 hours during business days.

Your submission details:
Subject: {subject}
Submitted: {timestamp}

Best regards,
Global Investor Relations Team
```

Newsletter welcome template:
```
Dear {name},

Thank you for subscribing to the Global Investor Relations newsletter!

You will receive:
- Weekly market insights and analysis
- Quarterly earnings updates
- Important regulatory announcements
- Exclusive investor resources

Unsubscribe: {unsubscribe_link}

Best regards,
Global Investor Relations Team
```

## Database Integration (Optional)

For high-volume sites, consider database storage:

### MySQL Schema

```sql
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    preferences JSON,
    status ENUM('active', 'inactive', 'unsubscribed') DEFAULT 'active',
    confirmed BOOLEAN DEFAULT FALSE,
    unsubscribe_token VARCHAR(32) UNIQUE,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT
);
```

### Database Configuration

```php
// api/config/database.php
<?php
$host = 'localhost';
$dbname = 'investor_relations';
$username = 'db_user';
$password = 'db_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
```

## Logging

### Contact Form Logging

```php
$log_entry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'name' => $name,
    'email' => $email,
    'company' => $company,
    'subject' => $subject,
    'ip' => $client_ip,
    'mail_sent' => $mail_sent,
    'user_agent' => $_SERVER['HTTP_USER_AGENT']
];
```

### Newsletter Logging

```php
$log_entry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'action' => 'subscribed',
    'email' => $email,
    'name' => $name,
    'ip' => $client_ip,
    'welcome_sent' => $welcome_sent,
    'total_subscribers' => count($subscribers)
];
```

## Testing

### Unit Tests

```bash
# Test contact form
curl -X POST http://localhost/api/contact.php \
  -d "name=Test User&email=test@example.com&subject=Test&message=This is a test message"

# Test newsletter
curl -X POST http://localhost/api/newsletter.php \
  -d "name=Test User&email=test@example.com"
```

### Integration Tests

```javascript
// Test form submission
async function testContactForm() {
  const formData = new FormData();
  formData.append('name', 'Test User');
  formData.append('email', 'test@example.com');
  formData.append('subject', 'Test Subject');
  formData.append('message', 'This is a test message');

  const response = await fetch('/api/contact.php', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  console.log('Contact form test:', result);
}
```

## Monitoring

### Health Check

Create a simple health check endpoint:

```php
// api/health.php
<?php
header('Content-Type: application/json');

$health = [
    'status' => 'healthy',
    'timestamp' => date('Y-m-d H:i:s'),
    'version' => '1.0.0',
    'php_version' => PHP_VERSION,
    'memory_usage' => memory_get_usage(true),
    'disk_space' => disk_free_space('.'),
    'uptime' => time() - $_SERVER['REQUEST_TIME']
];

echo json_encode($health);
?>
```

### Error Monitoring

```php
// Log errors to file
function logError($message, $level = 'ERROR') {
    $log = date('Y-m-d H:i:s') . " [$level] $message" . PHP_EOL;
    file_put_contents('error.log', $log, FILE_APPEND);
}

// Usage
try {
    // Code that might fail
} catch (Exception $e) {
    logError($e->getMessage());
}
```

## Performance Optimization

### Caching

```php
// Simple file-based caching
function getCache($key) {
    $file = "cache/$key.json";
    if (file_exists($file) && time() - filemtime($file) < 3600) {
        return json_decode(file_get_contents($file), true);
    }
    return null;
}

function setCache($key, $data) {
    $file = "cache/$key.json";
    file_put_contents($file, json_encode($data));
}
```

### Database Optimization

```sql
-- Add indexes for better performance
CREATE INDEX idx_email ON contacts(email);
CREATE INDEX idx_created_at ON contacts(created_at);
CREATE INDEX idx_status ON newsletter_subscribers(status);
```

## Deployment

### Environment Variables

```php
// Use environment variables for sensitive data
$smtp_password = getenv('SMTP_PASSWORD');
$admin_email = getenv('ADMIN_EMAIL');
```

### Production Configuration

```php
// Disable error display in production
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', '/var/log/php_errors.log');
```

---

**Need help?** Contact our support team for additional API assistance.