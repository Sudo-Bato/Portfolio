// Main JavaScript for Portfolio
// Navigation and Core Functionality

document.addEventListener('DOMContentLoaded', function () {
    // Initialize
    initNavigation();
    initParticles();
    // AOS disabled - user wants no scroll animations
    initScrollEffects();
    initTypingEffect();
    initSkillsAnimation();
});

// ==================== NAVIGATION ====================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Get target section
            const targetId = link.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');

                // Close mobile menu
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');

                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL hash without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;

        // Update active link based on scroll position (scroll spy)
        updateActiveNavLink();
    });

    // Scroll spy function
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 150; // Offset for navbar

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Handle initial hash
    const hash = window.location.hash.slice(1);
    if (hash) {
        const targetLink = document.querySelector(`[data-section="${hash}"]`);
        if (targetLink) {
            setTimeout(() => {
                targetLink.click();
            }, 100);
        }
    }
}

// ==================== PARTICLES.JS ====================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6366f1'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ==================== AOS (Animate On Scroll) ====================
// AOS disabled - user wants instant load without scroll animations

// ==================== SCROLL EFFECTS ====================
function initScrollEffects() {
    // Parallax effect for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        if (scrollIndicator && scrolled < window.innerHeight) {
            scrollIndicator.style.opacity = 1 - (scrolled / 500);
        }
    });

    // Scroll indicator click
    scrollIndicator?.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// ==================== TYPING EFFECT ====================
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.opacity = '1';

    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(type, 500);
}

// ==================== SKILLS ANIMATION ====================
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');

    if (skillItems.length === 0) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const progressBar = skillItem.querySelector('.skill-progress');
                const progressValue = progressBar.getAttribute('data-progress');

                // Add visible class and set width
                skillItem.classList.add('visible');
                progressBar.style.width = progressValue + '%';

                // Stop observing this element
                observer.unobserve(skillItem);
            }
        });
    }, observerOptions);

    // Observe all skill items
    skillItems.forEach(item => {
        observer.observe(item);
    });
}



// ==================== CARD TILT EFFECT ====================
function initCardTilt() {
    // Only apply to project cards, not stage cards
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Reduced intensity: divide by 30 instead of 10 for more subtle effect
            const rotateX = (y - centerY) / 30;
            const rotateY = -(x - centerX) / 30;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Initialize card tilt on desktop only
if (window.innerWidth > 768) {
    initCardTilt();
}

// ==================== SMOOTH REVEAL ON SCROLL ====================
// IntersectionObserver disabled - user wants no scroll animations

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
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

// ==================== ACCESSIBILITY ====================
// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Focus trap for mobile menu
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

document.getElementById('navMenu')?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const menu = e.currentTarget;
        const focusable = menu.querySelectorAll(focusableElements);
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }
});

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    // AOS refresh disabled
});
