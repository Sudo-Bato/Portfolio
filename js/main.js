// js/main.js

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {

    const pageContent = document.getElementById('page-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionsToLoad = [
        'accueil',
        'cv',
        'competences',
        'stage',
        'veille',
        'ateliers',
        'contact'
    ];
    
    // --- 1. Logique d'inclusion dynamique des sections ---
    
    /**
     * Charge tous les fragments HTML et les insère dans le conteneur principal.
     */
    function includeAllSections() {
        // Crée une promesse de récupération pour chaque section
        const fetchPromises = sectionsToLoad.map(pageName => {
            const filePath = `sections/${pageName}.html`;
            return fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erreur de chargement pour la section ${pageName}: ${response.statusText}`);
                    }
                    return response.text();
                })
                .catch(error => {
                    console.error('Erreur lors du chargement de la section:', pageName, error);
                    // Retourne un message d'erreur si la section ne charge pas
                    return `<section id="${pageName}" class="error-section"><h2>Erreur de chargement pour ${pageName}</h2><p>Le contenu n'a pas pu être chargé.</p></section>`;
                });
        });

        // Attend que toutes les promesses soient résolues
        Promise.all(fetchPromises)
            .then(htmlContents => {
                // Injecte tout le contenu chargé dans la balise <main>
                pageContent.innerHTML = htmlContents.join('');
                
                // **** POINT CLÉ : Initialiser la logique qui dépend du contenu après le chargement ****
                initializeContentLogic();
            })
            .catch(error => {
                console.error('Erreur fatale lors du chargement des sections:', error);
            });
    }
    
    // --- 2. Fonctions d'initialisation de la logique existante ---
    
    /**
     * Regroupe toutes les fonctions qui doivent être appelées APRÈS que le contenu ait été injecté.
     */
    function initializeContentLogic() {
        
        // On récupère les sections et éléments animés une fois qu'ils sont dans le DOM
        const sections = document.querySelectorAll('section');
        
        // Navigation Active au Scroll
        window.addEventListener('scroll', () => setActiveNavLink(sections, navLinks));
        setActiveNavLink(sections, navLinks); // Appel initial pour mettre en évidence la section Accueil

        // Fermer le menu mobile en cliquant sur un lien (Relance la logique)
        setupNavLinkClosing();

        // Gère le défilement initial si une ancre est présente dans l'URL
        handleInitialScroll(sections);
        
        // Initialisation de l'animation au défilement
        setupScrollAnimation();
        
        // Ré-attache le gestionnaire du formulaire de contact
        setupContactForm();
    }
    
    
    /**
     * Met en évidence le lien de navigation correspondant à la section visible.
     */
    function setActiveNavLink(sections, navLinks) {
        let currentSection = '';
        
        sections.forEach(section => {
            // Utilise getBoundingClientRect pour une meilleure compatibilité et des calculs basés sur la vue
            const rect = section.getBoundingClientRect();
            // Détermine la section visible lorsque son bord supérieur est au-dessus de 200px du haut
            if (rect.top <= 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Si aucune section n'est encore visible (début de page), on utilise 'accueil'
        if (currentSection === '') {
             currentSection = sections[0] ? sections[0].getAttribute('id') : '';
        }

        // Met à jour la classe 'active'
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Gère le défilement initial vers l'ancre spécifiée dans l'URL (#cv, #contact, etc.)
     */
    function handleInitialScroll(sections) {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                // Ajoute un léger délai pour s'assurer que le navigateur a fini de calculer le layout
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100); 
            }
        } else {
             // Si pas de hash, défilement au tout début de la page
             window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    /**
     * Attache la logique de fermeture du menu mobile lors du clic sur un lien.
     */
    function setupNavLinkClosing() {
        const navList = document.querySelector('.nav-list');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    
                    const hamburgerLines = document.querySelectorAll('.hamburger-line');
                    hamburgerLines.forEach(line => line.classList.remove('active'));
                }
            });
        });
    }
    
    /**
     * Attache la logique du formulaire de contact.
     */
    function setupContactForm() {
        const contactForm = document.querySelector('.contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                console.log('Formulaire soumis:', { name, email, message });
                
                alert('Merci pour votre message ! Je vous répondrai dès que possible.');
                contactForm.reset();
            });
        }
    }
    
    /**
     * Initialisation et gestion de l'animation au défilement.
     */
    function setupScrollAnimation() {
        const animatedElements = document.querySelectorAll('.atelier-card, .veille-article, .competence-category');
        
        // Initialisation des styles pour l'animation
        animatedElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        function checkScroll() {
            animatedElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        window.addEventListener('scroll', checkScroll);
        // Vérifier au chargement initial
        checkScroll();
    }

    // --- 3. Logique du Menu Mobile (conservation du code initial) ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list'); // Utilisé comme main-navigation

    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Animation des lignes du hamburger
            const hamburgerLines = document.querySelectorAll('.hamburger-line');
            hamburgerLines.forEach(line => line.classList.toggle('active'));
        });
    }
    // ------------------------------------------------------------
    
    // DÉMARRAGE : Lancement du chargement de toutes les sections
    includeAllSections();
});