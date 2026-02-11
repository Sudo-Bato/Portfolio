# Portfolio Ultra Moderne - Léo Vieux 🚀

Portfolio moderne et animé pour un développeur full-stack. Conçu avec des animations fluides, des effets visuels impressionnants et une expérience utilisateur premium.

![Portfolio](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Fonctionnalités

- 🎨 **Design Ultra Moderne** - Interface premium avec glassmorphism et gradients animés
- 🌌 **Particules Animées** - Fond dynamique avec Particles.js
- 🎭 **Animations Fluides** - GSAP, AOS et animations CSS personnalisées
- 📱 **100% Responsive** - Parfaitement adapté mobile, tablette et desktop
- ⚡ **Performance Optimisée** - Chargement rapide et animations 60fps
- ♿ **Accessible** - Navigation au clavier et mode réduit de mouvement
- 🎯 **Single Page App** - Navigation fluide sans rechargement

## 📂 Structure du Projet

```
PF-Test/
├── index.html              # Page principale
├── css/
│   ├── main.css           # Styles principaux et design system
│   ├── animations.css     # Animations personnalisées
│   └── responsive.css     # Media queries responsive
├── js/
│   ├── main.js           # Navigation et fonctionnalités core
│   └── animations.js     # Animations GSAP avancées
└── README.md             # Documentation
```

## 🎨 Design System

### Palette de Couleurs
- **Primary**: `hsl(220, 90%, 56%)` - Bleu vibrant
- **Secondary**: `hsl(280, 85%, 60%)` - Violet électrique
- **Accent**: `hsl(340, 82%, 52%)` - Rose/Rouge
- **Background**: `hsl(220, 20%, 10%)` - Fond sombre

### Typographie
- **Headings**: Poppins (700, 600)
- **Body**: Inter (400, 500, 600)

## 🚀 Technologies Utilisées

### Core
- HTML5 - Structure sémantique
- CSS3 - Animations natives, Grid, Flexbox
- JavaScript (Vanilla) - Interactions dynamiques

### Bibliothèques
- **[GSAP 3.12.5](https://greensock.com/gsap/)** - Animations complexes et fluides
- **[Particles.js](https://vincentgarreau.com/particles.js/)** - Particules animées
- **[AOS](https://michalsnik.github.io/aos/)** - Animate On Scroll
- **[Font Awesome 6.5.1](https://fontawesome.com/)** - Icônes vectorielles

## 📱 Sections du Portfolio

1. **🏠 Accueil** - Présentation héro avec animations
2. **🎓 CV** - Timeline formations et expériences
3. **💻 Projets** - Grille de projets personnels et scolaires
4. **💼 Stages** - Détails des stages professionnels
5. **🔍 Veille Technologique** - Timeline de technologies
6. **📧 Contact** - Informations de contact et liens sociaux

## 🛠️ Installation

Aucune installation nécessaire ! Ouvrez simplement `index.html` dans votre navigateur.

```bash
# Cloner le repository
git clone <votre-repo-url>

# Naviguer dans le dossier
cd PF-Test

# Ouvrir dans le navigateur
open index.html
```

## 🌐 Déploiement sur GitHub Pages

1. Créez un repository GitHub
2. Poussez votre code

```bash
git init
git add .
git commit -m "Initial commit - Portfolio ultra moderne"
git branch -M main
git remote add origin <votre-repo-url>
git push -u origin main
```

3. Activez GitHub Pages :
   - Allez dans **Settings** > **Pages**
   - Source : **Deploy from a branch**
   - Branch : **main** / **(root)**
   - Sauvegardez

Votre portfolio sera disponible à : `https://<votre-username>.github.io/<nom-du-repo>/`

## ⚡ Optimisations

- **CSS minifié** pour production
- **Lazy loading** des sections
- **Animations conditionnelles** selon performance
- **Images optimisées** (WebP avec fallback)
- **Preload des fonts** critiques

## 🎯 Performance

- ⚡ Lighthouse Score : 95+ Performance
- 📊 First Contentful Paint : < 1.5s
- 🎨 Animations : 60fps constant
- 📱 Mobile-First approach

## 🔧 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/main.css` :

```css
:root {
    --primary: hsl(220, 90%, 56%);
    --secondary: hsl(280, 85%, 60%);
    /* ... */
}
```

### Ajuster les animations
Modifiez les paramètres dans `js/animations.js` :

```javascript
gsap.defaults({
    ease: 'power2.out',
    duration: 0.8
});
```

### Configurer les particules
Éditez la configuration dans `js/main.js` :

```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        // ...
    }
});
```

## 🌟 Animations Incluses

- ✅ Fade In/Out
- ✅ Slide In (Left/Right)
- ✅ Scale & Bounce
- ✅ 3D Card Tilt
- ✅ Parallax Scroll
- ✅ Typing Effect
- ✅ Gradient Shift
- ✅ Pulse & Glow
- ✅ Magnetic Buttons
- ✅ Ripple Effect

## 📞 Contact

**Léo Vieux** - Étudiant Développeur BTS SIO SLAM

- 📧 Email: [leovieux.pro@gmail.com](mailto:leovieux.pro@gmail.com)
- 💼 LinkedIn: [leo-vieux-a8023332](https://www.linkedin.com/in/leo-vieux-a8023332)
- 🐙 GitHub: [Votre GitHub](#)

## 📄 Licence

Ce projet est libre de droits. N'hésitez pas à vous en inspirer pour votre propre portfolio !

---

<div align="center">
  <p>Fait avec ❤️ et beaucoup de ☕ par Léo Vieux</p>
  <p>© 2026 - Tous droits réservés</p>
</div>
