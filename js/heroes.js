// Heroes Page JavaScript

// Hero data - In a real application, this would come from an API
const heroesData = [
    {
        id: 'invoker',
        name: 'Invoker',
        title: 'Master of the Elements',
        icon: 'fas fa-magic',
        attribute: 'intelligence',
        roles: ['mid'],
        complexity: 'high',
        description: 'A complex hero with 10 different spells to master',
        stats: {
            strength: 18,
            agility: 14,
            intelligence: 15
        }
    },
    {
        id: 'crystal-maiden',
        name: 'Crystal Maiden',
        title: 'Frost Sorceress',
        icon: 'fas fa-snowflake',
        attribute: 'intelligence',
        roles: ['support'],
        complexity: 'low',
        description: 'A powerful support hero with strong crowd control',
        stats: {
            strength: 16,
            agility: 16,
            intelligence: 18
        }
    },
    {
        id: 'phantom-assassin',
        name: 'Phantom Assassin',
        title: 'Mortal Strike',
        icon: 'fas fa-dagger',
        attribute: 'agility',
        roles: ['carry'],
        complexity: 'medium',
        description: 'A deadly carry hero with critical strike abilities',
        stats: {
            strength: 19,
            agility: 23,
            intelligence: 15
        }
    },
    {
        id: 'axe',
        name: 'Axe',
        title: 'Mogul Khan',
        icon: 'fas fa-axe',
        attribute: 'strength',
        roles: ['offlane'],
        complexity: 'low',
        description: 'A tanky offlaner with strong initiation abilities',
        stats: {
            strength: 25,
            agility: 20,
            intelligence: 18
        }
    },
    {
        id: 'juggernaut',
        name: 'Juggernaut',
        title: 'Yurnero',
        icon: 'fas fa-sword',
        attribute: 'agility',
        roles: ['carry'],
        complexity: 'low',
        description: 'A versatile carry with strong teamfight presence',
        stats: {
            strength: 20,
            agility: 26,
            intelligence: 14
        }
    },
    {
        id: 'lion',
        name: 'Lion',
        title: 'Demon Witch',
        icon: 'fas fa-hand-sparkles',
        attribute: 'intelligence',
        roles: ['support'],
        complexity: 'low',
        description: 'A support hero with powerful disables and nukes',
        stats: {
            strength: 18,
            agility: 15,
            intelligence: 18
        }
    },
    {
        id: 'pudge',
        name: 'Pudge',
        title: 'Butcher',
        icon: 'fas fa-hook',
        attribute: 'strength',
        roles: ['support', 'offlane'],
        complexity: 'medium',
        description: 'A hook-based hero with strong crowd control',
        stats: {
            strength: 25,
            agility: 14,
            intelligence: 16
        }
    },
    {
        id: 'windranger',
        name: 'Windranger',
        title: 'Alleria',
        icon: 'fas fa-bow-arrow',
        attribute: 'intelligence',
        roles: ['support', 'mid'],
        complexity: 'medium',
        description: 'A versatile hero with strong utility and damage',
        stats: {
            strength: 18,
            agility: 17,
            intelligence: 18
        }
    },
    {
        id: 'sven',
        name: 'Sven',
        title: 'Rogue Knight',
        icon: 'fas fa-hammer',
        attribute: 'strength',
        roles: ['carry'],
        complexity: 'low',
        description: 'A powerful carry with cleave and stun abilities',
        stats: {
            strength: 22,
            agility: 21,
            intelligence: 16
        }
    },
    {
        id: 'lina',
        name: 'Lina',
        title: 'Slayer',
        icon: 'fas fa-fire',
        attribute: 'intelligence',
        roles: ['support', 'mid'],
        complexity: 'medium',
        description: 'A fire-based hero with strong magical damage',
        stats: {
            strength: 18,
            agility: 23,
            intelligence: 27
        }
    },
    {
        id: 'shadow-fiend',
        name: 'Shadow Fiend',
        title: 'Nevermore',
        icon: 'fas fa-skull',
        attribute: 'agility',
        roles: ['mid'],
        complexity: 'high',
        description: 'A complex mid hero with soul collection mechanics',
        stats: {
            strength: 19,
            agility: 20,
            intelligence: 18
        }
    },
    {
        id: 'earthshaker',
        name: 'Earthshaker',
        title: 'Raigor Stonehoof',
        icon: 'fas fa-mountain',
        attribute: 'strength',
        roles: ['support'],
        complexity: 'medium',
        description: 'A support hero with powerful area control abilities',
        stats: {
            strength: 22,
            agility: 12,
            intelligence: 16
        }
    }
];

class HeroesManager {
    constructor() {
        this.heroes = heroesData;
        this.filteredHeroes = [...this.heroes];
        this.currentFilters = {
            search: '',
            role: '',
            complexity: '',
            attribute: ''
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderHeroes();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilters.search = e.target.value.toLowerCase();
                this.filterHeroes();
            });
        }

        // Filter functionality
        const roleFilter = document.getElementById('role-filter');
        const complexityFilter = document.getElementById('complexity-filter');
        const attributeFilter = document.getElementById('attribute-filter');

        if (roleFilter) {
            roleFilter.addEventListener('change', (e) => {
                this.currentFilters.role = e.target.value;
                this.filterHeroes();
            });
        }

        if (complexityFilter) {
            complexityFilter.addEventListener('change', (e) => {
                this.currentFilters.complexity = e.target.value;
                this.filterHeroes();
            });
        }

        if (attributeFilter) {
            attributeFilter.addEventListener('change', (e) => {
                this.currentFilters.attribute = e.target.value;
                this.filterHeroes();
            });
        }
    }

    filterHeroes() {
        this.filteredHeroes = this.heroes.filter(hero => {
            // Search filter
            if (this.currentFilters.search) {
                const searchMatch = hero.name.toLowerCase().includes(this.currentFilters.search) ||
                                  hero.title.toLowerCase().includes(this.currentFilters.search) ||
                                  hero.description.toLowerCase().includes(this.currentFilters.search);
                if (!searchMatch) return false;
            }

            // Role filter
            if (this.currentFilters.role) {
                if (!hero.roles.includes(this.currentFilters.role)) return false;
            }

            // Complexity filter
            if (this.currentFilters.complexity) {
                if (hero.complexity !== this.currentFilters.complexity) return false;
            }

            // Attribute filter
            if (this.currentFilters.attribute) {
                if (hero.attribute !== this.currentFilters.attribute) return false;
            }

            return true;
        });

        this.renderHeroes();
    }

    renderHeroes() {
        const heroesGrid = document.getElementById('heroes-grid');
        if (!heroesGrid) return;

        if (this.filteredHeroes.length === 0) {
            heroesGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No heroes found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            `;
            return;
        }

        heroesGrid.innerHTML = this.filteredHeroes.map(hero => this.createHeroCard(hero)).join('');

        // Add click handlers to hero cards
        const heroCards = document.querySelectorAll('.hero-card');
        heroCards.forEach(card => {
            card.addEventListener('click', () => {
                const heroId = card.getAttribute('data-hero');
                this.navigateToHero(heroId);
            });
        });
    }

    createHeroCard(hero) {
        const complexityDots = this.getComplexityDots(hero.complexity);
        const roles = hero.roles.map(role => `<span class="role ${role}">${role}</span>`).join('');
        const attribute = `<div class="attribute ${hero.attribute}">${hero.attribute.charAt(0).toUpperCase()}</div>`;

        return `
            <div class="hero-card" data-hero="${hero.id}">
                <div class="complexity">
                    ${complexityDots}
                </div>
                <div class="hero-card-image">
                    <i class="${hero.icon}"></i>
                </div>
                <div class="hero-card-content">
                    <h3>${hero.name}</h3>
                    <p>${hero.title}</p>
                    <p>${hero.description}</p>
                    <div class="hero-attributes">
                        ${attribute}
                    </div>
                    <div class="hero-roles">
                        ${roles}
                    </div>
                    <div class="hero-stats">
                        <span class="stat">Complexity: ${hero.complexity}</span>
                        <span class="stat">Role: ${hero.roles.join(', ')}</span>
                    </div>
                </div>
            </div>
        `;
    }

    getComplexityDots(complexity) {
        const dots = {
            low: 1,
            medium: 2,
            high: 3
        };

        const dotCount = dots[complexity] || 1;
        let dotsHTML = '';

        for (let i = 0; i < 3; i++) {
            dotsHTML += `<div class="complexity-dot ${i < dotCount ? 'active' : ''}"></div>`;
        }

        return dotsHTML;
    }

    navigateToHero(heroId) {
        // In a real application, this would navigate to a hero detail page
        console.log(`Navigating to hero: ${heroId}`);
        // window.location.href = `heroes/${heroId}.html`;
        
        // For now, show an alert
        const hero = this.heroes.find(h => h.id === heroId);
        if (hero) {
            alert(`Selected: ${hero.name} - ${hero.title}`);
        }
    }

    // Search highlighting
    highlightSearchTerm(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    // Get hero by ID
    getHeroById(id) {
        return this.heroes.find(hero => hero.id === id);
    }

    // Get heroes by role
    getHeroesByRole(role) {
        return this.heroes.filter(hero => hero.roles.includes(role));
    }

    // Get heroes by attribute
    getHeroesByAttribute(attribute) {
        return this.heroes.filter(hero => hero.attribute === attribute);
    }

    // Get heroes by complexity
    getHeroesByComplexity(complexity) {
        return this.heroes.filter(hero => hero.complexity === complexity);
    }

    // Clear all filters
    clearFilters() {
        this.currentFilters = {
            search: '',
            role: '',
            complexity: '',
            attribute: ''
        };

        // Reset form elements
        const searchInput = document.querySelector('.search-input');
        const roleFilter = document.getElementById('role-filter');
        const complexityFilter = document.getElementById('complexity-filter');
        const attributeFilter = document.getElementById('attribute-filter');

        if (searchInput) searchInput.value = '';
        if (roleFilter) roleFilter.value = '';
        if (complexityFilter) complexityFilter.value = '';
        if (attributeFilter) attributeFilter.value = '';

        this.filterHeroes();
    }

    // Get filter summary
    getFilterSummary() {
        const activeFilters = Object.values(this.currentFilters).filter(filter => filter !== '');
        return activeFilters.length > 0 ? `(${activeFilters.length} active filters)` : '';
    }
}

// Initialize heroes manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.heroesManager = new HeroesManager();
    
    // Add clear filters button functionality
    const clearFiltersBtn = document.createElement('button');
    clearFiltersBtn.textContent = 'Clear Filters';
    clearFiltersBtn.className = 'btn btn-secondary';
    clearFiltersBtn.style.marginTop = '1rem';
    clearFiltersBtn.addEventListener('click', () => {
        window.heroesManager.clearFilters();
    });

    const filtersContainer = document.querySelector('.filters');
    if (filtersContainer) {
        filtersContainer.appendChild(clearFiltersBtn);
    }
});

// Export for use in other scripts
window.HeroesManager = HeroesManager;
