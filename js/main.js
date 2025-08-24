// Enhanced Main JavaScript for Dota 2 Heroes Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeMouseEffects();
    initializeScrollEffects();
    initializeInteractiveElements();
    initializePerformanceOptimizations();
    
    console.log('🚀 Dota 2 Heroes website enhanced and ready!');
});

// Enhanced Navigation System
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Mobile Navigation Toggle with enhanced animations
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Add body scroll lock
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Enhanced navbar background on scroll
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.scrollY;
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 16));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Enhanced Animation System
function initializeAnimations() {
    // Scroll-triggered animations with enhanced options
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add stagger effect for lists
                if (entry.target.classList.contains('stagger-container')) {
                    const items = entry.target.querySelectorAll('.stagger-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all animation elements
    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .stagger-container').forEach(el => {
        observer.observe(el);
    });

    // Enhanced floating icons parallax
    const floatingIcons = document.querySelectorAll('.floating-icon');
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        floatingIcons.forEach(icon => {
            const speed = parseFloat(icon.getAttribute('data-speed')) || 1;
            const yPos = -(scrolled * speed * 0.3);
            const xPos = Math.sin(scrolled * 0.001) * 20;
            icon.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    }, 16));

    // Enhanced counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-content h3');
    const statsSection = document.querySelector('.quick-stats');
    
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach((stat, index) => {
                        setTimeout(() => {
                            const target = parseInt(stat.textContent.replace(/\D/g, ''));
                            if (!isNaN(target)) {
                                animateCounter(stat, target);
                            }
                        }, index * 200);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }
}

// Enhanced Mouse Effects
function initializeMouseEffects() {
    // Mouse follow effect
    const mouseFollow = document.createElement('div');
    mouseFollow.className = 'mouse-follow';
    document.body.appendChild(mouseFollow);

    let mouseX = 0, mouseY = 0;
    let followX = 0, followY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth mouse follow animation
    function animateMouseFollow() {
        followX += (mouseX - followX) * 0.1;
        followY += (mouseY - followY) * 0.1;
        
        mouseFollow.style.left = followX - 10 + 'px';
        mouseFollow.style.top = followY - 10 + 'px';
        
        requestAnimationFrame(animateMouseFollow);
    }
    animateMouseFollow();

    // Enhanced hero card hover effects
    const heroCards = document.querySelectorAll('.hero-card');
    heroCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', (x / rect.width) * 100 + '%');
            card.style.setProperty('--mouse-y', (y / rect.height) * 100 + '%');
        });

        card.addEventListener('click', function() {
            const heroName = this.getAttribute('data-hero');
            if (heroName) {
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    window.location.href = `heroes.html#${heroName}`;
                }, 150);
            }
        });
    });

    // Particle effect on button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', createParticleEffect);
    });
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for sections
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16));

    // Progress bar for page scroll
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-fill"></div>';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / height) * 100;
        progressBar.querySelector('.scroll-progress-fill').style.width = progress + '%';
    }, 16));
}

// Enhanced Interactive Elements
function initializeInteractiveElements() {
    // Enhanced tooltip system
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            
            let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
            let top = rect.top - tooltipRect.height - 10;
            
            // Adjust if tooltip goes off screen
            if (left < 10) left = 10;
            if (left + tooltipRect.width > window.innerWidth - 10) {
                left = window.innerWidth - tooltipRect.width - 10;
            }
            if (top < 10) {
                top = rect.bottom + 10;
            }
            
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.classList.add('show');
        });

        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.classList.remove('show');
                setTimeout(() => tooltip.remove(), 200);
            }
        });
    });

    // Enhanced search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = this.value.toLowerCase();
                performSearch(searchTerm);
            }, 300);
        });
    }

    // Theme toggle with enhanced animations
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Add toggle animation
            themeToggle.classList.add('toggled');
            setTimeout(() => themeToggle.classList.remove('toggled'), 300);
        });
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Debounced scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Handle any additional scroll-based logic
        }, 16);
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = [
        'styles/main.css',
        'styles/animations.css',
        'js/main.js'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
}

// Utility Functions
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (target > 100 ? '+' : '');
    }, 30);
}

function createParticleEffect(e) {
    const particles = 8;
    const rect = e.target.getBoundingClientRect();
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = (e.clientX - rect.left) + 'px';
        particle.style.top = (e.clientY - rect.top) + 'px';
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        e.target.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

function performSearch(searchTerm) {
    // Implement search logic here
    console.log('Searching for:', searchTerm);
}

function throttle(func, limit) {
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
}

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

// Enhanced loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loading completion animation
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 500);
    }
});

// Export enhanced functions for use in other scripts
window.DotaHeroes = {
    debounce,
    throttle,
    animateCounter,
    createParticleEffect,
    performSearch
};
