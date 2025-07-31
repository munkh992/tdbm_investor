# Customization Guide - Investor Relations Website

This guide covers advanced customization options for themes, layouts, animations, and content modifications.

## Color Scheme Customization

### Primary Color System

Edit `assets/css/main.css` to change the primary color scheme:

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #3b82f6;        /* Main blue */
  --color-secondary: #1e40af;      /* Dark blue */
  --color-accent: #06b6d4;         /* Cyan accent */
  
  /* Extended Color Palette */
  --color-blue-400: #60a5fa;
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  
  /* Neutral Colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-900: #111827;
  --color-slate-950: #020617;
}
```

### Corporate Brand Colors

For different corporate identities:

```css
/* Financial Services Blue */
:root {
  --color-primary: #0066cc;
  --color-secondary: #004499;
  --color-accent: #0080ff;
}

/* Investment Banking Green */
:root {
  --color-primary: #10b981;
  --color-secondary: #047857;
  --color-accent: #34d399;
}

/* Traditional Banking Navy */
:root {
  --color-primary: #1e293b;
  --color-secondary: #0f172a;
  --color-accent: #3b82f6;
}
```

### Gradient Customization

Modify gradient effects in `assets/css/components.css`:

```css
/* Hero background gradient */
.hero-section {
  background: linear-gradient(135deg, 
    var(--color-slate-950) 0%, 
    var(--color-blue-950) 50%, 
    var(--color-black) 100%
  );
}

/* Button gradients */
.cta-button {
  background: linear-gradient(135deg, 
    var(--color-primary), 
    var(--color-secondary)
  );
}
```

## Typography Customization

### Font Selection

Replace the default Inter font:

```css
/* In main.css */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Font Sizes and Weights

Customize typography scale:

```css
:root {
  /* Font Sizes */
  --font-size-xs: 0.75rem;     /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 1.875rem;   /* 30px */
  --font-size-4xl: 2.25rem;    /* 36px */
  --font-size-5xl: 3rem;       /* 48px */
  --font-size-6xl: 3.75rem;    /* 60px */
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

### Heading Styles

Customize heading appearance:

```css
/* Custom heading styles */
.hero-title {
  font-family: 'Playfair Display', serif;
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.025em;
}

.section-title {
  font-family: var(--font-family);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
}
```

## Layout Customization

### Grid System

Modify the main content grid:

```css
/* Two-column layout */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
}

/* Three-column layout */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-12);
}

/* Asymmetric layout */
.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-16);
}
```

### Container Widths

Adjust container sizes:

```css
.container {
  max-width: 1200px;  /* Default */
  margin: 0 auto;
  padding: 0 var(--spacing-6);
}

/* Wider layout */
.container-wide {
  max-width: 1400px;
}

/* Narrow layout */
.container-narrow {
  max-width: 800px;
}
```

### Spacing System

Customize spacing values:

```css
:root {
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
  --spacing-20: 5rem;     /* 80px */
  --spacing-24: 6rem;     /* 96px */
  --spacing-32: 8rem;     /* 128px */
}
```

## Animation Customization

### Animation Speeds

Adjust animation timing in `assets/css/animations.css`:

```css
/* Faster animations */
:root {
  --animation-fast: 0.15s;
  --animation-normal: 0.3s;
  --animation-slow: 0.5s;
  --animation-slower: 0.8s;
}

/* Apply to animations */
.fade-in {
  animation: fadeInUp var(--animation-normal) ease forwards;
}
```

### Custom Animations

Create custom animation effects:

```css
/* Custom slide-in animation */
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInFromLeft 0.6s ease forwards;
}

/* Custom rotation animation */
@keyframes gentleRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.gentle-rotate {
  animation: gentleRotate 20s linear infinite;
}
```

### Particle Effects

Customize particle animations:

```css
/* Modify particle behavior */
@keyframes customParticleFloat {
  0%, 100% { 
    transform: translateY(0px) scale(1);
    opacity: 0.4;
  }
  50% { 
    transform: translateY(-40px) scale(1.2);
    opacity: 0.8;
  }
}

.custom-particle {
  animation: customParticleFloat 8s ease-in-out infinite;
}
```

## Component Customization

### Navigation Bar

Customize navigation appearance:

```css
/* Navigation styling */
.navbar {
  backdrop-filter: blur(20px);
  background: rgba(15, 23, 42, 0.95);
  border-bottom: 1px solid rgba(59, 130, 246, 0.3);
}

.nav-item {
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.nav-item:hover {
  color: var(--color-accent);
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}
```

### Cards and Buttons

Customize card and button styles:

```css
/* Card styling */
.bank-card {
  background: linear-gradient(135deg, 
    rgba(15, 23, 42, 0.95), 
    rgba(30, 41, 59, 0.95)
  );
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: var(--radius-2xl);
  backdrop-filter: blur(16px);
  transition: all 0.3s ease;
}

.bank-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Button styling */
.cta-button {
  background: linear-gradient(135deg, 
    var(--color-primary), 
    var(--color-secondary)
  );
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--spacing-4) var(--spacing-8);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.025em;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
}
```

## Content Customization

### Hero Section

Modify hero section content:

```html
<!-- Custom hero content -->
<div class="hero-content">
  <div class="premium-badge">
    <svg><!-- Custom icon --></svg>
    <span>YOUR CUSTOM BADGE TEXT</span>
  </div>
  
  <h1 class="hero-title">
    <span class="title-line-1">Custom</span>
    <span class="title-line-2">Title Here</span>
  </h1>
  
  <p class="hero-subtitle">
    Your custom subtitle content goes here...
  </p>
</div>
```

### Statistics Section

Customize statistics display:

```html
<!-- Custom statistics -->
<div class="hero-stats">
  <div class="stat-card">
    <div class="stat-icon"><!-- Custom icon --></div>
    <div class="stat-value">100+</div>
    <div class="stat-label">Custom Metric</div>
    <div class="stat-change">+15% growth</div>
  </div>
  <!-- More stat cards -->
</div>
```

### Bank Links

Customize bank link cards:

```html
<!-- Custom bank link -->
<div class="bank-card">
  <a href="https://custom-bank.com" class="bank-link">
    <div class="bank-content">
      <div class="bank-info">
        <div class="bank-logo">🏦</div>
        <div class="bank-details">
          <h3 class="bank-name">Custom Bank Name</h3>
          <div class="bank-meta">
            <span class="bank-region">Region</span>
            <div class="bank-assets">
              <span>$X.XB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</div>
```

## Advanced Customization

### Custom JavaScript

Add custom functionality in `assets/js/main.js`:

```javascript
// Custom animation triggers
function initCustomAnimations() {
  const elements = document.querySelectorAll('.custom-animate');
  
  elements.forEach(element => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });
    
    observer.observe(element);
  });
}

// Custom particle system
function createCustomParticles() {
  const container = document.getElementById('customParticles');
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'custom-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(particle);
  }
}

// Initialize custom features
document.addEventListener('DOMContentLoaded', function() {
  initCustomAnimations();
  createCustomParticles();
});
```

### Custom CSS Classes

Create utility classes for consistency:

```css
/* Custom utility classes */
.text-glow-blue {
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}

.bg-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
}

.gradient-border {
  position: relative;
  background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  border: 1px solid transparent;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

## Responsive Customization

### Mobile-First Approach

Customize responsive breakpoints:

```css
/* Custom breakpoints */
@media (max-width: 480px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
  
  .nav-items {
    display: none;
  }
}

@media (min-width: 1200px) {
  .hero-title {
    font-size: var(--font-size-8xl);
  }
  
  .content-grid {
    gap: var(--spacing-20);
  }
}
```

### Touch Optimization

Optimize for touch devices:

```css
@media (hover: none) and (pointer: coarse) {
  .bank-card {
    min-height: 60px;
  }
  
  .cta-button {
    min-height: 44px;
    min-width: 44px;
  }
  
  .nav-item {
    padding: var(--spacing-4);
  }
}
```

## Performance Optimization

### CSS Optimization

Optimize CSS for better performance:

```css
/* Use transform instead of changing properties */
.animate-element {
  will-change: transform;
  transform: translateZ(0); /* Force GPU acceleration */
}

/* Optimize animations */
.smooth-animation {
  animation: smoothMove 1s ease-out;
  animation-fill-mode: both;
}

@keyframes smoothMove {
  from { transform: translate3d(0, 20px, 0); }
  to { transform: translate3d(0, 0, 0); }
}
```

### JavaScript Optimization

Optimize JavaScript performance:

```javascript
// Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
  // Handle scroll events
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);
```

## Testing Customizations

### Visual Testing

Test customizations across different scenarios:

```javascript
// Test different color schemes
function testColorScheme(scheme) {
  const root = document.documentElement;
  const colors = {
    blue: { primary: '#3b82f6', secondary: '#1e40af' },
    green: { primary: '#10b981', secondary: '#047857' },
    purple: { primary: '#8b5cf6', secondary: '#7c3aed' }
  };
  
  root.style.setProperty('--color-primary', colors[scheme].primary);
  root.style.setProperty('--color-secondary', colors[scheme].secondary);
}

// Test responsive behavior
function testResponsive() {
  const sizes = [320, 768, 1024, 1440];
  sizes.forEach(size => {
    window.resizeTo(size, 800);
    console.log(`Testing at ${size}px width`);
  });
}
```

### Browser Compatibility

Test customizations across browsers:

```css
/* Browser-specific prefixes */
.custom-animation {
  -webkit-animation: fadeIn 0.5s ease;
  -moz-animation: fadeIn 0.5s ease;
  animation: fadeIn 0.5s ease;
}

/* Fallbacks for older browsers */
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Fallback for unsupported browsers */
  color: #3b82f6;
}

@supports (background-clip: text) {
  .gradient-text {
    color: transparent;
  }
}
```

---

**Need help with customization?** Contact our support team for personalized assistance with your specific design requirements.