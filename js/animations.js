// Advanced Animations for Dota 2 Heroes Website

class AnimationManager {
    constructor() {
        this.animations = new Map();
        this.particles = [];
        this.isRunning = false;
        this.init();
    }

    init() {
        this.setupParticleSystem();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupTypingEffect();
        this.setupParallaxEffects();
    }

    // Particle System
    setupParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '0';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Particle class
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.life = 1;
                this.decay = Math.random() * 0.02 + 0.005;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
                this.opacity = this.life * 0.5;
            }

            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = '#3498db';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new particles
            if (Math.random() < 0.1) {
                this.particles.push(new Particle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                ));
            }

            // Update and draw particles
            this.particles = this.particles.filter(particle => {
                particle.update();
                particle.draw(ctx);
                return particle.life > 0;
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Scroll-triggered animations
    setupScrollAnimations() {
        const elements = document.querySelectorAll('.scroll-animate');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    animateElement(element) {
        const animation = element.getAttribute('data-animation') || 'fadeInUp';
        
        switch (animation) {
            case 'fadeInUp':
                this.fadeInUp(element);
                break;
            case 'fadeInLeft':
                this.fadeInLeft(element);
                break;
            case 'fadeInRight':
                this.fadeInRight(element);
                break;
            case 'scaleIn':
                this.scaleIn(element);
                break;
            case 'slideIn':
                this.slideIn(element);
                break;
        }
    }

    fadeInUp(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        element.animate([
            { opacity: 0, transform: 'translateY(30px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 800,
            easing: 'ease-out',
            fill: 'forwards'
        });
    }

    fadeInLeft(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-30px)';
        
        element.animate([
            { opacity: 0, transform: 'translateX(-30px)' },
            { opacity: 1, transform: 'translateX(0)' }
        ], {
            duration: 800,
            easing: 'ease-out',
            fill: 'forwards'
        });
    }

    fadeInRight(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(30px)';
        
        element.animate([
            { opacity: 0, transform: 'translateX(30px)' },
            { opacity: 1, transform: 'translateX(0)' }
        ], {
            duration: 800,
            easing: 'ease-out',
            fill: 'forwards'
        });
    }

    scaleIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        
        element.animate([
            { opacity: 0, transform: 'scale(0.8)' },
            { opacity: 1, transform: 'scale(1)' }
        ], {
            duration: 600,
            easing: 'ease-out',
            fill: 'forwards'
        });
    }

    slideIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-100%)';
        
        element.animate([
            { opacity: 0, transform: 'translateX(-100%)' },
            { opacity: 1, transform: 'translateX(0)' }
        ], {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });
    }

    // Hover effects
    setupHoverEffects() {
        const hoverElements = document.querySelectorAll('.hover-effect');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.addHoverEffect(element);
            });
            
            element.addEventListener('mouseleave', () => {
                this.removeHoverEffect(element);
            });
        });
    }

    addHoverEffect(element) {
        element.style.transform = 'scale(1.05)';
        element.style.boxShadow = '0 10px 30px rgba(52, 152, 219, 0.3)';
    }

    removeHoverEffect(element) {
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '';
    }

    // Typing effect
    setupTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        
        typingElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid #3498db';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    element.style.borderRight = 'none';
                }
            };
            
            // Start typing when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(element);
        });
    }

    // Parallax effects
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Floating animation for icons
    setupFloatingIcons() {
        const floatingIcons = document.querySelectorAll('.floating-icon');
        
        floatingIcons.forEach((icon, index) => {
            const delay = index * 0.5;
            const duration = 3 + Math.random() * 2;
            
            icon.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        });
    }

    // Ripple effect
    createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Glow effect
    addGlowEffect(element) {
        element.classList.add('glow');
        setTimeout(() => {
            element.classList.remove('glow');
        }, 2000);
    }

    // Shake effect
    addShakeEffect(element) {
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 500);
    }

    // Pulse effect
    addPulseEffect(element) {
        element.classList.add('pulse');
        setTimeout(() => {
            element.classList.remove('pulse');
        }, 1000);
    }

    // Bounce effect
    addBounceEffect(element) {
        element.classList.add('bounce');
        setTimeout(() => {
            element.classList.remove('bounce');
        }, 1000);
    }

    // Rotate effect
    addRotateEffect(element) {
        element.classList.add('rotate');
        setTimeout(() => {
            element.classList.remove('rotate');
        }, 1000);
    }
}

// Initialize animation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.animationManager = new AnimationManager();
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            window.animationManager.createRipple(e);
        });
    });

    // Add floating animation to icons
    window.animationManager.setupFloatingIcons();
});

// Export animation functions
window.Animations = {
    addGlow: (element) => window.animationManager.addGlowEffect(element),
    addShake: (element) => window.animationManager.addShakeEffect(element),
    addPulse: (element) => window.animationManager.addPulseEffect(element),
    addBounce: (element) => window.animationManager.addBounceEffect(element),
    addRotate: (element) => window.animationManager.addRotateEffect(element)
};
