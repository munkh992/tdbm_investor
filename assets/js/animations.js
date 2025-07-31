// AI Insights - Animations JavaScript File

// Animation utilities and effects
class AnimationController {
    constructor() {
        this.observers = new Map();
        this.animations = new Map();
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupParallaxEffects();
        this.setupCounterAnimations();
        this.setupStaggerAnimations();
    }
    
    // Setup intersection observer for scroll animations
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerAnimation(entry.target);
                }
            });
        }, options);
        
        this.observers.set('scroll', observer);
        
        // Observe all animation elements
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Setup scroll-based animations
    setupScrollAnimations() {
        if (this.isReducedMotion) return;
        
        window.addEventListener('scroll', this.throttle(() => {
            const scrollY = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            // Parallax backgrounds
            document.querySelectorAll('.parallax-bg').forEach(el => {
                const speed = el.dataset.speed || 0.5;
                const yPos = -(scrollY * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
            
            // Floating elements
            document.querySelectorAll('.float-on-scroll').forEach(el => {
                const speed = el.dataset.speed || 0.3;
                const yPos = Math.sin(scrollY * 0.001) * 10 * speed;
                el.style.transform = `translateY(${yPos}px)`;
            });
            
            // Update progress indicators
            this.updateScrollProgress();
        }, 16));
    }
    
    // Setup hover effects
    setupHoverEffects() {
        if (this.isReducedMotion) return;
        
        // Magnetic hover effect
        document.querySelectorAll('.magnetic').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const strength = el.dataset.strength || 0.3;
                el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
            });
        });
        
        // Tilt effect
        document.querySelectorAll('.tilt').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * -10;
                const rotateY = (x - centerX) / centerX * 10;
                
                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }
    
    // Setup parallax effects
    setupParallaxEffects() {
        if (this.isReducedMotion) return;
        
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', this.throttle(() => {
            const scrollY = window.pageYOffset;
            
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.speed) || 0.5;
                const yPos = -(scrollY * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        }, 16));
    }
    
    // Setup counter animations
    setupCounterAnimations() {
        document.querySelectorAll('[data-counter]').forEach(el => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(el);
        });
    }
    
    // Setup stagger animations
    setupStaggerAnimations() {
        document.querySelectorAll('[data-stagger]').forEach(container => {
            const children = container.children;
            const delay = parseInt(container.dataset.stagger) || 100;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.staggerChildren(entry.target, delay);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(container);
        });
    }
    
    // Trigger animation based on element's data attributes
    triggerAnimation(element) {
        const animationType = element.dataset.animate;
        const delay = parseInt(element.dataset.delay) || 0;
        const duration = parseInt(element.dataset.duration) || 600;
        
        setTimeout(() => {
            switch (animationType) {
                case 'fade-in':
                    this.fadeIn(element, duration);
                    break;
                case 'slide-up':
                    this.slideUp(element, duration);
                    break;
                case 'slide-down':
                    this.slideDown(element, duration);
                    break;
                case 'slide-left':
                    this.slideLeft(element, duration);
                    break;
                case 'slide-right':
                    this.slideRight(element, duration);
                    break;
                case 'scale-in':
                    this.scaleIn(element, duration);
                    break;
                case 'rotate-in':
                    this.rotateIn(element, duration);
                    break;
                case 'bounce-in':
                    this.bounceIn(element, duration);
                    break;
                default:
                    this.fadeIn(element, duration);
            }
        }, delay);
    }
    
    // Animation methods
    fadeIn(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
    }
    
    slideUp(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    slideDown(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-30px)';
        element.style.transition = `all ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    slideLeft(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(30px)';
        element.style.transition = `all ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }
    
    slideRight(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-30px)';
        element.style.transition = `all ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }
    
    scaleIn(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        element.style.transition = `all ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }
    
    rotateIn(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transform = 'rotate(-180deg)';
        element.style.transition = `all ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'rotate(0deg)';
        });
    }
    
    bounceIn(element, duration = 600) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.3)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }
    
    // Counter animation
    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const duration = parseInt(element.dataset.duration) || 2000;
        const start = parseInt(element.dataset.start) || 0;
        const suffix = element.dataset.suffix || '';
        
        const startTime = performance.now();
        const range = target - start;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + range * easeOutQuart);
            
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    // Stagger children animation
    staggerChildren(container, delay = 100) {
        const children = Array.from(container.children);
        
        children.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('animate-in');
            }, index * delay);
        });
    }
    
    // Update scroll progress
    updateScrollProgress() {
        const scrollProgress = document.querySelector('.scroll-progress');
        if (!scrollProgress) return;
        
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = `${scrollPercent}%`;
    }
    
    // Throttle function
    throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        
        return function (...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    }
    
    // Debounce function
    debounce(func, delay) {
        let timeoutId;
        
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }
    
    // Create ripple effect
    createRipple(element, event) {
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Animate on scroll utility
    animateOnScroll(elements, animation, threshold = 0.1) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animation(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });
        
        elements.forEach(el => observer.observe(el));
    }
    
    // Create floating animation
    createFloatingAnimation(element, intensity = 10, speed = 0.002) {
        if (this.isReducedMotion) return;
        
        let startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const y = Math.sin(elapsed * speed) * intensity;
            
            element.style.transform = `translateY(${y}px)`;
            
            requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
    }
    
    // Create pulse animation
    createPulseAnimation(element, scale = 1.05, duration = 1000) {
        if (this.isReducedMotion) return;
        
        element.style.transition = `transform ${duration}ms ease-in-out`;
        
        setInterval(() => {
            element.style.transform = `scale(${scale})`;
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, duration / 2);
        }, duration);
    }
    
    // Create glow animation
    createGlowAnimation(element, intensity = 0.8, duration = 2000) {
        if (this.isReducedMotion) return;
        
        element.style.transition = `box-shadow ${duration}ms ease-in-out`;
        
        setInterval(() => {
            element.style.boxShadow = `0 0 30px rgba(59, 130, 246, ${intensity})`;
            
            setTimeout(() => {
                element.style.boxShadow = `0 0 15px rgba(59, 130, 246, ${intensity / 2})`;
            }, duration / 2);
        }, duration);
    }
    
    // Cleanup animations
    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.animations.forEach(animation => animation.cancel?.());
    }
}

// Initialize animation controller
const animationController = new AnimationController();

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-ripple') || e.target.closest('.btn-ripple')) {
        const button = e.target.matches('.btn-ripple') ? e.target : e.target.closest('.btn-ripple');
        animationController.createRipple(button, e);
    }
});

// Add floating animation to specific elements
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation to hero elements
    document.querySelectorAll('.hero-logo, .hero-orb').forEach(el => {
        animationController.createFloatingAnimation(el, 5, 0.001);
    });
    
    // Add pulse animation to important buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        animationController.createPulseAnimation(btn, 1.02, 2000);
    });
    
    // Add glow animation to cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            animationController.createGlowAnimation(card, 0.3, 1000);
        });
    });
});

// Export animation controller
window.AnimationController = AnimationController;
window.animationController = animationController;

// Add CSS for animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #06b6d4);
        z-index: 9999;
        transition: width 0.3s ease;
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
    }
`;
document.head.appendChild(animationStyles);