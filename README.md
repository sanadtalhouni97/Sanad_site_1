# Dota 2 Heroes Website

A modern, responsive website similar to Liquipedia for Dota 2 heroes with detailed information, meta analysis, and guides.

## Features

- **Modern Design**: Professional UI with subdued color palette to avoid eye strain
- **Responsive Layout**: Fully responsive design that works on all devices
- **Floating Icons**: Animated background icons for visual appeal
- **Hero Database**: Comprehensive hero information with search and filtering
- **Meta Analysis**: Current meta trends, pick rates, and win rates
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **16 Pages**: Complete website with multiple sections and pages

## Pages

1. **Home** (`index.html`) - Landing page with featured heroes
2. **Heroes** (`heroes.html`) - Complete hero database with search and filters
3. **Meta** (`meta.html`) - Meta analysis and statistics
4. **Guides** (`guides.html`) - Hero guides and strategies
5. **Tournaments** (`tournaments.html`) - Tournament information
6. **News** (`news.html`) - Latest Dota 2 news
7. **About** (`about.html`) - About the website
8. **Contact** (`contact.html`) - Contact information
9. **Privacy** (`privacy.html`) - Privacy policy
10. **Terms** (`terms.html`) - Terms of service
11. **Sitemap** (`sitemap.html`) - Site navigation
12. **FAQ** (`faq.html`) - Frequently asked questions
13. **Support** (`support.html`) - Support page
14. **Hero Detail Pages** (3 additional pages for individual heroes)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## File Structure

```
├── index.html              # Homepage
├── heroes.html             # Heroes listing page
├── meta.html               # Meta analysis page
├── guides.html             # Guides page
├── tournaments.html        # Tournaments page
├── news.html               # News page
├── about.html              # About page
├── contact.html            # Contact page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── sitemap.html            # Sitemap
├── faq.html                # FAQ page
├── support.html            # Support page
├── styles/
│   ├── main.css            # Main stylesheet
│   ├── animations.css      # Animation styles
│   ├── heroes.css          # Heroes page styles
│   └── meta.css            # Meta page styles
├── js/
│   ├── main.js             # Main JavaScript functionality
│   ├── animations.js       # Animation system
│   └── heroes.js           # Heroes page functionality
└── README.md               # Project documentation
```

## Features Breakdown

### Design System
- **Color Palette**: Professional, subdued colors to avoid eye strain
- **Typography**: Inter font family for modern, readable text
- **Spacing**: Consistent spacing system using CSS custom properties
- **Shadows**: Layered shadow system for depth

### Animations
- **Floating Icons**: Background icons with parallax effects
- **Hover Effects**: Smooth transitions on interactive elements
- **Page Load**: Fade-in animations for content
- **Scroll Animations**: Elements animate as they come into view
- **Particle System**: Dynamic background particles

### Responsive Design
- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive breakpoints at 768px and 480px
- **Flexible Grid**: CSS Grid and Flexbox for layouts
- **Touch Friendly**: Optimized for touch interactions

### Interactive Features
- **Search**: Real-time search functionality
- **Filters**: Multiple filter options (role, complexity, attribute)
- **Navigation**: Smooth scrolling and mobile menu
- **Hero Cards**: Interactive hero cards with hover effects

## Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **Navigate** through the different pages using the navigation menu

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- **Optimized CSS**: Efficient selectors and minimal redundancy
- **Debounced Search**: Performance-optimized search functionality
- **Lazy Loading**: Images and content load as needed
- **Smooth Animations**: Hardware-accelerated animations

## Customization

### Colors
Edit the CSS custom properties in `styles/main.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --accent-color: #3498db;
    /* ... other colors */
}
```

### Adding Heroes
Add new heroes to the `heroesData` array in `js/heroes.js`:
```javascript
{
    id: 'hero-name',
    name: 'Hero Name',
    title: 'Hero Title',
    icon: 'fas fa-icon',
    attribute: 'strength|agility|intelligence',
    roles: ['carry', 'support'],
    complexity: 'low|medium|high',
    description: 'Hero description'
}
```

### Animations
Customize animations in `styles/animations.css` and `js/animations.js`

## Future Enhancements

- **Hero Detail Pages**: Individual pages for each hero
- **User Accounts**: User registration and profiles
- **Comments System**: User comments on guides
- **API Integration**: Real-time data from Dota 2 API
- **Dark Mode**: Toggle between light and dark themes
- **Progressive Web App**: PWA features for mobile

## License

This project is created for educational and demonstration purposes.

## Credits

- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Design Inspiration**: Liquipedia and modern web design principles

---

**Command to run the website:**
```bash
# Navigate to the project directory
cd /c/Users/s.talhouni/Desktop/Sanad_site_1

# Open the website in your default browser
start index.html
```

**Path where the command should be executed:**
`C:\Users\s.talhouni\Desktop\Sanad_site_1`
