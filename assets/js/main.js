/**
 * INVESTOR RELATIONS WEBSITE - MAIN JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeAnimations();
    initializeParticles();
    initializeMouseFollower();
    initializeScrollEffects();
    initializeFormHandlers();
    initializeMobileMenu();
    initializeStatCounters();
    
    console.log('Investor Relations website initialized');
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Animation initialization
 */
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Trigger staggered animations for child elements
                const children = entry.target.querySelectorAll('[data-animate-delay]');
                children.forEach((child, index) => {
                    const delay = child.dataset.animateDelay || index * 100;
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, delay);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));
    
    // Observe bank cards and info cards
    const bankCards = document.querySelectorAll('.bank-card');
    const infoCards = document.querySelectorAll('.info-card');
    
    bankCards.forEach(card => observer.observe(card));
    infoCards.forEach(card => observer.observe(card));
}

/**
 * Particle system initialization
 */
function initializeParticles() {
    const particleContainer = document.getElementById('luxuryParticles');
    if (!particleContainer) return;
    
    const particleCount = 12;
    const particles = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particleContainer.appendChild(particle);
        particles.push(particle);
    }
    
    // Create floating lines
    for (let i = 0; i < 6; i++) {
        const line = document.createElement('div');
        line.className = 'floating-line';
        line.style.position = 'absolute';
        line.style.width = '1px';
        line.style.height = '80px';
        line.style.background = 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent)';
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.animation = `particleFloat ${Math.random() * 8 + 6}s ease-in-out infinite`;
        line.style.animationDelay = `${Math.random() * 4}s`;
        
        particleContainer.appendChild(line);
    }
    
    // Create floating rings
    for (let i = 0; i < 4; i++) {
        const ring = document.createElement('div');
        ring.className = 'floating-ring';
        ring.style.position = 'absolute';
        ring.style.border = '1px solid rgba(71, 85, 105, 0.1)';
        ring.style.borderRadius = '50%';
        
        const size = Math.random() * 100 + 50;
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        ring.style.left = `${Math.random() * 100}%`;
        ring.style.top = `${Math.random() * 100}%`;
        
        ring.style.animation = `spin ${Math.random() * 30 + 20}s linear infinite, scaleFloat ${Math.random() * 8 + 6}s ease-in-out infinite`;
        
        particleContainer.appendChild(ring);
    }
}

/**
 * Mouse follower effect
 */
function initializeMouseFollower() {
    const mouseFollower = document.getElementById('mouseFollower');
    if (!mouseFollower) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateFollower() {
        const diffX = mouseX - followerX;
        const diffY = mouseY - followerY;
        
        followerX += diffX * 0.1;
        followerY += diffY * 0.1;
        
        mouseFollower.style.left = `${followerX - 192}px`;
        mouseFollower.style.top = `${followerY - 192}px`;
        
        requestAnimationFrame(updateFollower);
    }
    
    updateFollower();
}

/**
 * Scroll effects
 */
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        
        // Update parallax elements
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Update progress indicators
        const progressBars = document.querySelectorAll('.scroll-progress');
        progressBars.forEach(bar => {
            bar.style.width = `${scrollProgress * 100}%`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

/**
 * Form handlers
 */
function initializeFormHandlers() {
    // Contact form
    const contactForms = document.querySelectorAll('form[data-form="contact"]');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactForm);
    });
    
    // Newsletter form
    const newsletterForms = document.querySelectorAll('form[data-form="newsletter"]');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterForm);
    });
    
    // Meeting scheduler
    const meetingButtons = document.querySelectorAll('.meeting-button');
    meetingButtons.forEach(button => {
        button.addEventListener('click', handleMeetingSchedule);
    });
}

/**
 * Handle contact form submission
 */
async function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        const response = await fetch('./api/contact.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('Message sent successfully!', 'success');
            form.reset();
        } else {
            showNotification(result.message || 'Failed to send message', 'error');
        }
    } catch (error) {
        showNotification('Network error. Please try again.', 'error');
        console.error('Form submission error:', error);
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

/**
 * Handle newsletter form submission
 */
async function handleNewsletterForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Subscribing...';
    submitButton.disabled = true;
    
    try {
        const response = await fetch('./api/newsletter.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('Successfully subscribed to newsletter!', 'success');
            form.reset();
        } else {
            showNotification(result.message || 'Failed to subscribe', 'error');
        }
    } catch (error) {
        showNotification('Network error. Please try again.', 'error');
        console.error('Newsletter subscription error:', error);
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

/**
 * Handle meeting schedule
 */
function handleMeetingSchedule(e) {
    e.preventDefault();
    
    // Simple alert for demo - in production, this would open a calendar widget
    showNotification('Meeting scheduler would open here. This is a demo.', 'info');
    
    // In a real implementation, you might integrate with:
    // - Calendly
    // - Google Calendar
    // - Microsoft Bookings
    // - Custom booking system
}

/**
 * Mobile menu functionality
 */
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navItems = document.querySelector('.nav-items');
    
    if (!mobileToggle || !navItems) return;
    
    mobileToggle.addEventListener('click', function() {
        navItems.classList.toggle('mobile-open');
        mobileToggle.classList.toggle('active');
        
        // Update aria-expanded
        const isExpanded = navItems.classList.contains('mobile-open');
        mobileToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close mobile menu when clicking nav items
    const navLinks = navItems.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navItems.classList.remove('mobile-open');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileToggle.contains(e.target) && !navItems.contains(e.target)) {
            navItems.classList.remove('mobile-open');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Animated counters for statistics
 */
function initializeStatCounters() {
    const statValues = document.querySelectorAll('.stat-value');
    
    const animateCounter = (element, target) => {
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format numbers appropriately
            if (target >= 1000000000) {
                element.textContent = (current / 1000000000).toFixed(1) + 'B';
            } else if (target >= 1000000) {
                element.textContent = (current / 1000000).toFixed(1) + 'M';
            } else if (target >= 1000) {
                element.textContent = (current / 1000).toFixed(1) + 'K';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };
    
    // Observer for triggering counter animations
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const text = entry.target.textContent;
                const match = text.match(/[\d.]+/);
                
                if (match) {
                    const number = parseFloat(match[0]);
                    const suffix = text.replace(match[0], '').trim();
                    
                    let multiplier = 1;
                    if (suffix.includes('K')) multiplier = 1000;
                    if (suffix.includes('M')) multiplier = 1000000;
                    if (suffix.includes('B')) multiplier = 1000000000;
                    if (suffix.includes('T')) multiplier = 1000000000000;
                    
                    const target = number * multiplier;
                    entry.target.dataset.animated = 'true';
                    animateCounter(entry.target, target);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => counterObserver.observe(stat));
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-size: 14px;
        font-weight: 500;
        max-width: 400px;
        animation: slideInFromTop 0.3s ease forwards;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/**
 * Utility functions
 */
const utils = {
    // Debounce function
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Format currency
    formatCurrency: function(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    },
    
    // Format large numbers
    formatNumber: function(num) {
        if (num >= 1e12) return (num / 1e12).toFixed(1) + 'T';
        if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
        return num.toString();
    }
};

// Expose utilities globally
window.InvestorRelationsUtils = utils;

// Handle resize events
window.addEventListener('resize', utils.debounce(function() {
    // Recalculate particle positions
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
    });
}, 250));

// Handle visibility change
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when tab becomes visible
        document.body.style.animationPlayState = 'running';
    }
});