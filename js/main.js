// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Animation des lignes du hamburger
            const hamburgerLines = document.querySelectorAll('.hamburger-line');
            hamburgerLines.forEach(line => line.classList.toggle('active'));
        });
    }
    
    // Navigation active
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // Fermer le menu mobile en cliquant sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                
                const hamburgerLines = document.querySelectorAll('.hamburger-line');
                hamburgerLines.forEach(line => line.classList.remove('active'));
            }
        });
    });
    
    // Formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Ici, vous pourriez ajouter du code pour envoyer les données à un serveur
            console.log('Formulaire soumis:', { name, email, message });
            
            // Affichage d'un message de confirmation
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
            
            // Réinitialisation du formulaire
            contactForm.reset();
        });
    }
    
    // Animation au défilement
    function checkScroll() {
        const elements = document.querySelectorAll('.atelier-card, .veille-article, .competence-category');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialisation des styles pour l'animation
    const animatedElements = document.querySelectorAll('.atelier-card, .veille-article, .competence-category');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    // Vérifier au chargement initial
    checkScroll();
});