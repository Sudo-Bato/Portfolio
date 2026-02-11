// Simplified Animations - No opacity issues
// Only safe animations that don't make content disappear

document.addEventListener('DOMContentLoaded', function () {
    // Only initialize if GSAP is available
    if (typeof gsap !== 'undefined') {
        initSafeAnimations();
    }
});

// ==================== SAFE ANIMATIONS ====================
function initSafeAnimations() {
    // Default GSAP settings
    gsap.defaults({
        ease: 'power2.out',
        duration: 0.6
    });

    // Hero animation removed - user wants instant load without animations

    // Animate scroll indicator
    if (document.querySelector('.scroll-indicator')) {
        gsap.to('.scroll-indicator', {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'power1.inOut'
        });
    }

    // Hover animations for project cards
    document.querySelectorAll('.project-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                gsap.to(icon, {
                    rotation: 360,
                    scale: 1.1,
                    duration: 0.6,
                    ease: 'back.out(1.7)'
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                gsap.to(icon, {
                    rotation: 0,
                    scale: 1,
                    duration: 0.4
                });
            }
        });
    });

    // Hover animation for stage icons
    document.querySelectorAll('.stage-card').forEach(card => {
        const icon = card.querySelector('.stage-icon');
        if (icon) {
            card.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    rotation: 360,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            });
        }
    });

    // Pulse animation for badges
    document.querySelectorAll('.new-badge').forEach(badge => {
        gsap.to(badge, {
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: 'power1.inOut'
        });
    });
}

// Magnetic button effect removed - was too distracting

// Card tilt effect removed - was too intense on large cards

console.log('Simplified animations loaded - no opacity issues');
