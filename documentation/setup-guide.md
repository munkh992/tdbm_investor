# Setup Guide - Investor Relations Website

This comprehensive guide will walk you through setting up the Investor Relations website from installation to deployment.

## Prerequisites

### Server Requirements
- Web server (Apache/Nginx)
- PHP 7.4 or higher
- File write permissions for `/api/` directory
- SSL certificate (recommended)

### Development Tools
- Text editor or IDE
- FTP/SFTP client
- Browser developer tools

## Installation Steps

### 1. Download and Extract
```bash
# Download the project files
wget [download-url]
unzip investor-relations-website.zip
cd investor-relations-website
```

### 2. Server Upload
Upload all files to your web server's document root:
```
/public_html/
├── index.html
├── assets/
├── api/
└── documentation/
```

### 3. File Permissions
Set appropriate permissions:
```bash
# Set directory permissions
chmod 755 api/
chmod 755 assets/
chmod 755 documentation/

# Set file permissions
chmod 644 *.html
chmod 644 api/*.php
chmod 644 assets/css/*.css
chmod 644 assets/js/*.js
```

## Configuration

### Email Settings

#### Contact Form Configuration
Edit `api/contact.php`:
```php
// Line 45: Update recipient email
$to = 'investor.relations@yourdomain.com';

// Line 102: Update reply-to email
$auto_reply_headers = [
    'Reply-To: investor.relations@yourdomain.com',
    // ...
];
```

#### Newsletter Configuration
Edit `api/newsletter.php`:
```php
// Line 156: Update admin email
$admin_email = 'investor.relations@yourdomain.com';

// Line 139: Update sender domain
$welcome_headers = [
    'From: investor.relations@yourdomain.com',
    // ...
];
```

### Contact Information
Update contact details in `index.html`:
```html
<!-- Around line 650 -->
<div class="contact-item">
    <span>+1 (555) 123-4567</span> <!-- Your phone -->
</div>
<div class="contact-item">
    <span>investor.relations@yourdomain.com</span> <!-- Your email -->
</div>
<div class="contact-item">
    <span>Your Address, City, State ZIP</span> <!-- Your address -->
</div>
```

### Bank Links Customization
Update bank investor relations links in `index.html`:
```html
<!-- Around line 300 -->
<a href="https://your-preferred-bank-ir.com" target="_blank">
    <!-- Bank card content -->
</a>
```

## Content Customization

### Company Branding
1. **Logo Replacement**
   - Replace logo icon in navigation (line 35)
   - Update company name (line 42)
   - Modify footer branding (line 800)

2. **Color Scheme**
   Edit `assets/css/main.css`:
   ```css
   :root {
     --color-primary: #your-brand-color;
     --color-secondary: #your-secondary-color;
     --color-accent: #your-accent-color;
   }
   ```

3. **Typography**
   Update font settings:
   ```css
   :root {
     --font-family: 'Your-Font', sans-serif;
     --font-size-base: 1rem;
   }
   ```

### Statistics and Metrics
Update hero section statistics (line 200):
```html
<div class="stat-value">50+</div>
<div class="stat-label">Global Banks</div>
```

### Information Sections
Customize the information cards:
1. **Resources & Disclosures** (line 400)
2. **Corporate Governance** (line 500)
3. **Financial Statements** (line 600)
4. **Investor Services** (line 700)

## Testing

### Local Testing
1. Start a local web server:
   ```bash
   php -S localhost:8000
   ```

2. Open `http://localhost:8000` in your browser

3. Test all functionality:
   - Navigation links
   - Contact form submission
   - Newsletter subscription
   - Mobile responsiveness

### Production Testing
1. **Form Testing**
   - Submit contact form
   - Check email delivery
   - Verify auto-reply functionality

2. **Performance Testing**
   - Check page load speed
   - Test on different devices
   - Verify animations work smoothly

3. **Security Testing**
   - Test rate limiting
   - Verify input validation
   - Check for XSS vulnerabilities

## Deployment

### Pre-deployment Checklist
- [ ] All email addresses updated
- [ ] Contact information correct
- [ ] SSL certificate installed
- [ ] File permissions set
- [ ] Forms tested and working
- [ ] Content reviewed and approved

### Production Deployment
1. **Upload Files**
   ```bash
   rsync -avz --exclude='*.git*' ./ user@server:/path/to/document/root/
   ```

2. **Set Up SSL**
   Configure SSL certificate for HTTPS access

3. **Configure Web Server**
   
   **Apache (.htaccess)**:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # Security headers
   Header always set X-Frame-Options DENY
   Header always set X-Content-Type-Options nosniff
   Header always set X-XSS-Protection "1; mode=block"
   ```

   **Nginx**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       return 301 https://$server_name$request_uri;
   }
   
   server {
       listen 443 ssl;
       server_name yourdomain.com;
       
       # SSL configuration
       ssl_certificate /path/to/certificate.crt;
       ssl_certificate_key /path/to/private.key;
       
       # Security headers
       add_header X-Frame-Options DENY;
       add_header X-Content-Type-Options nosniff;
       add_header X-XSS-Protection "1; mode=block";
   }
   ```

## Maintenance

### Regular Updates
- Monitor form submissions
- Update bank links as needed
- Review and update contact information
- Check for security updates

### Log Monitoring
Monitor these log files:
- `api/contact_log.json` - Contact form submissions
- `api/newsletter_log.json` - Newsletter subscriptions
- Server error logs

### Backup
Regular backup schedule:
1. **Database** (if using database storage)
2. **Log files** in `/api/` directory
3. **Configuration files**
4. **Custom content**

## Troubleshooting

### Common Issues

1. **Forms not working**
   - Check PHP version (7.4+)
   - Verify file permissions
   - Check email configuration

2. **Animations not smooth**
   - Ensure modern browser
   - Check CSS file loading
   - Verify JavaScript execution

3. **Mobile display issues**
   - Test responsive CSS
   - Check viewport meta tag
   - Verify touch interactions

### Debug Mode
Enable debug mode in PHP files:
```php
// Add to top of PHP files for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
```

### Performance Optimization
1. **Enable Gzip compression**
2. **Use CDN for assets**
3. **Optimize images**
4. **Minify CSS/JS**

## Analytics Integration

### Google Analytics
Add to `index.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Event Tracking
Add event tracking to forms:
```javascript
// In assets/js/main.js
gtag('event', 'form_submit', {
  'event_category': 'engagement',
  'event_label': 'contact_form'
});
```

## Security Best Practices

1. **Regular Updates**
   - Keep PHP updated
   - Monitor security advisories
   - Update dependencies

2. **Input Validation**
   - Validate all user inputs
   - Sanitize data before processing
   - Use prepared statements

3. **Rate Limiting**
   - Implement per-IP limits
   - Monitor for abuse
   - Block suspicious activity

4. **HTTPS Only**
   - Force HTTPS redirects
   - Use secure headers
   - Implement HSTS

## Support

If you encounter issues:
1. Check this guide first
2. Review the [API Reference](./api-reference.md)
3. Test in a clean environment
4. Contact support with detailed error information

---

**Need help?** Contact our support team with your specific requirements.