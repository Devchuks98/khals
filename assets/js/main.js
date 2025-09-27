// Khal Bespoke Shoemaking Website JavaScript - Enhanced with WhatsApp Catalog Integration
document.addEventListener('DOMContentLoaded', function () {
    initializeWebsite();
    setTimeout(initializeCategoryFromURL, 100);
});

// Enhanced Configuration with Catalog Integration
const CONFIG = {
    whatsapp: {
        businessNumber: '2348147994796',
        catalogURL: 'https://wa.me/c/2348147994796',
        messages: {
            default: 'Hello Khal Designs! I am interested in your bespoke shoes.',
            order: 'Hello! I would like to order the {SHOE_NAME}. Could you please provide more details about customization?',
            apprenticeship: 'Hello Khal Designs! I am interested in your apprenticeship program. I would like to know more about the enrollment process and program details.',
            catalog: 'Hello Khal Designs! I want to explore your full catalog. I couldn\'t find what I was looking for on the website.',
            searchHelp: 'Hello! I was searching for "{SEARCH_TERM}" on your website but couldn\'t find it. Do you have similar products in your catalog?'
        }
    },
    email: {
        address: 'vezenachukwu@gmail.com',
        subject: 'Apprenticeship Application - Khal Designs'
    }
};

// Main initialization with catalog integration
function initializeWebsite() {
    // Core setup
    setupEventListeners();
    setActiveNavItem();

    // Feature initialization with optimized timing
    setTimeout(() => {
        initAnimations();
        initCategoryTabs();
        initCatalogIntegration();
    }, 100);

    // Mobile and UX optimizations
    setTimeout(() => {
        initMobileOptimizations();
        initUXEnhancements();
    }, 200);

    setTimeout(() => {
        initImageOptimization();
        initImageErrorHandling();
        initImageViewerKeyboard();
        initTouchGestures();
        measureImageLoadTimes();
    }, 300);

    // WhatsApp integration (delayed for better performance)
    setTimeout(() => {
        initWhatsAppIntegration();
    }, 500);

    // Category initialization from URL
    setTimeout(() => {
        initializeCategoryFromURL();
    }, 300);

    console.log('✅ Khal Designs website initialized successfully');
}

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`🚀 Page load time: ${loadTime}ms`);

                // Track to analytics if available
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_load_time', {
                        'value': loadTime,
                        'custom_parameter': 'site_performance'
                    });
                }
            }, 100);
        });
    }
}

// Event listeners
function setupEventListeners() {
    // Mobile menu
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const nav = document.querySelector('nav');
        const navLinks = document.getElementById('navLinks');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (nav && !nav.contains(event.target) && navLinks?.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu?.classList.remove('active');
        }
    });

    // Scroll effects with throttling
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            handleHeaderScroll();
            animateOnScroll();
        }, 16);
    });

    // Enhanced search functionality that works with categories and catalog
    const catalogueSearch = document.getElementById('catalogueSearch');
    if (catalogueSearch) {
        catalogueSearch.addEventListener('input', debounce(handleCatalogueSearch, 300));
    }

    // Hash change listener for back/forward navigation
    window.addEventListener('hashchange', initializeCategoryFromURL);

    // Orientation change handling
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
            animateOnScroll();
        }, 100);
    });

    // Online/offline status
    window.addEventListener('online', () => showNotification('Connection restored', 'success'));
    window.addEventListener('offline', () => showNotification('Connection lost. Some features may not work properly.', 'error'));
}

// Category Management
function initCategoryTabs() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const catalogueGrid = document.getElementById('catalogueGrid');

    if (!categoryTabs.length || !catalogueGrid) return;

    // Set up event listeners for category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const category = this.dataset.category;
            switchCategory(category);
            updateActiveTab(this);
        });
    });

    // Initialize with 'all' category
    switchCategory('all');
}

function switchCategory(category) {
    const shoeCards = document.querySelectorAll('.shoe-card');
    const catalogueGrid = document.getElementById('catalogueGrid');
    const emptyState = document.getElementById('categoryEmptyState');

    // Add loading state
    catalogueGrid.classList.add('loading');

    setTimeout(() => {
        let visibleCount = 0;

        shoeCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const shouldShow = category === 'all' ? card.dataset.featured === 'true' : cardCategory === category;

            if (shouldShow) {
                card.classList.remove('hidden');
                card.classList.add('visible');
                card.style.display = 'block';
                visibleCount++;

                // Ensure image loads properly when shown
                const img = card.querySelector('.shoe-image');
                if (img && !img.classList.contains('loaded')) {
                    img.classList.add('loaded');
                }
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
                card.style.display = 'none';
            }
        });

        // Handle empty state
        handleCategoryEmptyState(visibleCount, category);

        // Remove loading state
        catalogueGrid.classList.remove('loading');

        // Update URL hash for bookmarking
        if (category !== 'all') {
            history.replaceState(null, null, `#${category}`);
        } else {
            history.replaceState(null, null, window.location.pathname);
        }

        // Trigger scroll animation for visible cards
        setTimeout(() => {
            animateOnScroll();
        }, 100);

    }, 300);
}

function handleCategoryEmptyState(visibleCount, category) {
    const emptyState = document.getElementById('categoryEmptyState');
    const catalogueGrid = document.getElementById('catalogueGrid');

    if (visibleCount === 0 && category !== 'all') {
        const enhancedEmptyState = createEnhancedEmptyState('', category);
        if (emptyState) {
            emptyState.innerHTML = enhancedEmptyState;
            emptyState.style.display = 'block';
        }
        catalogueGrid.style.display = 'none';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        catalogueGrid.style.display = 'grid';
    }
}

function updateActiveTab(activeTab) {
    // Remove active class from all tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to clicked tab
    activeTab.classList.add('active');
}

// Enhanced search functionality that works with categories and catalog
function handleCatalogueSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    const shoeCards = document.querySelectorAll('.shoe-card');
    const emptyState = document.getElementById('categoryEmptyState');
    const catalogueGrid = document.getElementById('catalogueGrid');
    const activeCategory = document.querySelector('.category-tab.active')?.dataset.category || 'all';

    let visibleCount = 0;
    let hasExactMatch = false;

    shoeCards.forEach(card => {
        const shoeName = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const shoeDescription = card.querySelector('.shoe-description')?.textContent.toLowerCase() || '';
        const cardCategory = card.dataset.category;

        // Check both category and search term
        const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
        const matchesSearch = searchTerm === '' || shoeName.includes(searchTerm) || shoeDescription.includes(searchTerm);

        // Check for exact matches
        if (shoeName === searchTerm || shoeDescription.includes(searchTerm)) {
            hasExactMatch = true;
        }

        const shouldShow = matchesCategory && matchesSearch;

        if (shouldShow) {
            card.style.display = 'block';
            card.classList.remove('hidden');
            card.classList.add('visible');
            card.style.animation = 'fadeIn 0.5s ease';
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.add('hidden');
            card.classList.remove('visible');
        }
    });

    // Enhanced empty state handling with catalog integration
    handleEnhancedEmptyState(visibleCount, searchTerm, activeCategory, hasExactMatch);

    // Show search suggestions if no results
    if (visibleCount === 0 && searchTerm) {
        showSearchSuggestions(searchTerm);
    } else {
        hideSearchSuggestions();
    }
}

function handleEnhancedEmptyState(visibleCount, searchTerm, activeCategory, hasExactMatch) {
    const emptyState = document.getElementById('categoryEmptyState');
    const catalogueGrid = document.getElementById('catalogueGrid');

    if (visibleCount === 0) {
        // Replace empty state with enhanced version
        const enhancedEmptyState = createEnhancedEmptyState(searchTerm, activeCategory);

        if (emptyState) {
            emptyState.innerHTML = enhancedEmptyState;
            emptyState.style.display = 'block';
        }

        catalogueGrid.style.display = 'none';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        catalogueGrid.style.display = 'grid';
    }
}

function createEnhancedEmptyState(searchTerm, activeCategory) {
    const categoryName = formatCategoryName(activeCategory);

    let title, description, searchMessage;

    if (searchTerm && activeCategory !== 'all') {
        title = 'No matches found';
        description = `We couldn't find "${searchTerm}" in ${categoryName} on our website classics.`;
        searchMessage = CONFIG.whatsapp.messages.searchHelp.replace('{SEARCH_TERM}', searchTerm);
    } else if (searchTerm) {
        title = 'Product not found';
        description = `"${searchTerm}" isn't in our website classics, but we might have it in our full catalog.`;
        searchMessage = CONFIG.whatsapp.messages.searchHelp.replace('{SEARCH_TERM}', searchTerm);
    } else {
        title = 'No products in this category';
        description = `No ${categoryName.toLowerCase()} available in our website classics right now.`;
        searchMessage = CONFIG.whatsapp.messages.catalog;
    }

    return `
        <div class="enhanced-empty-state">
            <h3>${title}</h3>
            <p>${description}</p>
            <p><strong>Good news!</strong> Our WhatsApp catalog has 100+ exclusive designs including custom options.</p>
            <div class="catalog-cta-buttons">
                <a href="${CONFIG.whatsapp.catalogURL}" target="_blank" class="whatsapp-catalog-btn" onclick="trackCatalogClick('empty_state_search', '${searchTerm}')">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                    </svg>
                    Browse Full Catalog
                </a>
                ${searchTerm ? '<button class="search-reset-btn" onclick="clearSearch()">Clear Search</button>' : ''}
            </div>
            ${searchTerm ? `<p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">Or <a href="${generateWhatsAppURL(searchMessage)}" target="_blank" style="color: #25D366; font-weight: 600;" onclick="trackCatalogClick('direct_search_help', '${searchTerm}')">ask us directly about "${searchTerm}"</a></p>` : ''}
        </div>
    `;
}

// Initialize category from URL hash on page load
function initializeCategoryFromURL() {
    const hash = window.location.hash.substring(1);
    const validCategories = ['all', 'men-slides', 'women-slides', 'formal', 'casual', 'sandals', 'accessories'];

    if (hash && validCategories.includes(hash)) {
        const targetTab = document.querySelector(`[data-category="${hash}"]`);
        if (targetTab) {
            updateActiveTab(targetTab);
            switchCategory(hash);
        }
    }
}

// Helper function to format category names
function formatCategoryName(category) {
    const categoryNames = {
        'men-slides': 'Men Slides',
        'women-slides': 'Women Slides',
        'formal': 'Formal Shoes',
        'casual': 'Casual Shoes',
        'sandals': 'Sandals',
        'accessories': 'Accessories',
        'all': 'All Categories'
    };
    return categoryNames[category] || category;
}

// WhatsApp Catalog Integration
function initCatalogIntegration() {
    createCatalogPromoBanner();
    enhanceSearchFunctionality();
    setupSearchSuggestions();
    trackCatalogInteractions();
}

function createCatalogPromoBanner() {
    // Add promo banner after category tabs
    const categoryTabs = document.querySelector('.category-tabs');
    if (categoryTabs && !document.querySelector('.catalog-promo-banner')) {
        const promoBanner = document.createElement('div');
        promoBanner.className = 'catalog-promo-banner animate-on-scroll';
        promoBanner.innerHTML = `
            <div class="catalog-promo-content">
                <h3>Can't find what you're looking for?</h3>
                <p>Browse our complete collection with 100+ exclusive designs in our WhatsApp catalog</p>
                <a href="${CONFIG.whatsapp.catalogURL}" target="_blank" class="whatsapp-catalog-btn" id="headerCatalogBtn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                    </svg>
                    Browse Full Catalog
                </a>
            </div>
        `;

        categoryTabs.insertAdjacentElement('afterend', promoBanner);

        // Add click tracking
        document.getElementById('headerCatalogBtn').addEventListener('click', () => {
            trackWhatsAppClick('catalog_promo_banner');
        });
    }
}

function enhanceSearchFunctionality() {
    const catalogueSearch = document.getElementById('catalogueSearch');
    if (!catalogueSearch) return;

    let searchTimeout;
    let lastSearchTerm = '';

    // Add search suggestions container
    const searchContainer = catalogueSearch.parentElement;
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'search-suggestions';
    suggestionsDiv.id = 'searchSuggestions';
    searchContainer.appendChild(suggestionsDiv);
}

function setupSearchSuggestions() {
    // Popular search terms and categories
    const suggestions = {
        popular: ['brogues', 'loafers', 'sneakers', 'boots', 'oxford'],
        materials: ['leather', 'suede', 'canvas', 'patent'],
        occasions: ['formal', 'casual', 'wedding', 'business'],
        styles: ['classic', 'modern', 'vintage', 'contemporary']
    };

    window.searchSuggestions = suggestions;
}

function showSearchSuggestions(searchTerm) {
    const suggestionsDiv = document.getElementById('searchSuggestions');
    if (!suggestionsDiv) return;

    const allSuggestions = Object.values(window.searchSuggestions || {}).flat();
    const relevantSuggestions = allSuggestions.filter(term =>
        term.toLowerCase().includes(searchTerm.toLowerCase()) &&
        term.toLowerCase() !== searchTerm.toLowerCase()
    ).slice(0, 6);

    if (relevantSuggestions.length > 0) {
        suggestionsDiv.innerHTML = `
            <h4>Did you mean:</h4>
            <div class="suggestion-tags">
                ${relevantSuggestions.map(term =>
            `<span class="suggestion-tag" onclick="applySuggestion('${term}')">${term}</span>`
        ).join('')}
            </div>
        `;
        suggestionsDiv.classList.add('active');
    } else {
        hideSearchSuggestions();
    }
}

function hideSearchSuggestions() {
    const suggestionsDiv = document.getElementById('searchSuggestions');
    if (suggestionsDiv) {
        suggestionsDiv.classList.remove('active');
    }
}

function trackCatalogInteractions() {
    // Track when users spend time searching without finding results
    let searchAttempts = 0;
    let noResultsCount = 0;

    const searchInput = document.getElementById('catalogueSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            searchAttempts++;

            setTimeout(() => {
                const visibleCards = document.querySelectorAll('.shoe-card.visible').length;
                if (visibleCards === 0 && this.value.trim()) {
                    noResultsCount++;

                    // Show extra help after 2 unsuccessful searches
                    if (noResultsCount >= 2) {
                        showPersistentCatalogHelper();
                    }
                }
            }, 600);
        });
    }
}

function showPersistentCatalogHelper() {
    // Create a subtle helper that sticks after multiple failed searches
    if (document.querySelector('.persistent-catalog-helper')) return;

    const helper = document.createElement('div');
    helper.className = 'persistent-catalog-helper';
    helper.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: #25D366;
        color: white;
        padding: 12px 16px;
        border-radius: 25px;
        font-size: 0.9rem;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
        z-index: 999;
        cursor: pointer;
        animation: slideInRight 0.5s ease;
        max-width: 250px;
        line-height: 1.3;
    `;

    helper.innerHTML = `
        Try our full catalog?<br>
        <small>100+ exclusive designs</small>
    `;

    helper.addEventListener('click', function () {
        window.open(CONFIG.whatsapp.catalogURL, '_blank');
        trackWhatsAppClick('persistent_helper');
        this.remove();
    });

    document.body.appendChild(helper);

    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (helper.parentElement) helper.remove();
    }, 10000);
}

// Global functions (attach to window for onclick handlers)
window.applySuggestion = function (term) {
    const searchInput = document.getElementById('catalogueSearch');
    if (searchInput) {
        searchInput.value = term;
        searchInput.dispatchEvent(new Event('input'));
        hideSearchSuggestions();
    }
};

window.clearSearch = function () {
    const searchInput = document.getElementById('catalogueSearch');
    if (searchInput) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        hideSearchSuggestions();
    }
};

window.trackCatalogClick = function (source, searchTerm = '') {
    trackWhatsAppClick(`catalog_${source}`, searchTerm);
};

// WhatsApp Integration
function initWhatsAppIntegration() {
    createFloatingWhatsAppButton();
    updateOrderButtons();
    updateSocialMediaLinks();
    setupApprenticeshipButtons();
}

function createFloatingWhatsAppButton() {
    if (document.querySelector('.whatsapp-float')) return;

    const whatsappButton = document.createElement('a');
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.href = generateWhatsAppURL(getContextualMessage());
    whatsappButton.target = '_blank';
    whatsappButton.rel = 'noopener noreferrer';
    whatsappButton.setAttribute('aria-label', 'Chat with us on WhatsApp');

    whatsappButton.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
    `;

    document.body.appendChild(whatsappButton);

    whatsappButton.addEventListener('click', () => trackWhatsAppClick('floating_button'));
}

// Enhanced Order Button Logic - Replace existing updateOrderButtons function
function updateOrderButtons() {
    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener('click', function (e) {
            e.preventDefault();

            const shoeCard = this.closest('.shoe-card');
            const shoeName = shoeCard?.querySelector('h3')?.textContent || 'Selected Shoe';
            const shoePrice = shoeCard?.querySelector('.shoe-price')?.textContent || '';
            const shoeCategory = shoeCard?.dataset.category || '';

            // Show order options modal
            showOrderOptionsModal(shoeName, shoePrice, shoeCategory);
        });
    });
}

// New function to show order options modal
function showOrderOptionsModal(shoeName, shoePrice, shoeCategory) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.order-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'order-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeOrderModal()">&times;</button>
            <div class="modal-header">
                <h3>Order ${shoeName}</h3>
                ${shoePrice ? `<p class="modal-price">${shoePrice}</p>` : ''}
                ${shoeCategory ? `<span class="modal-category">${formatCategoryName(shoeCategory)}</span>` : ''}
            </div>
            <div class="modal-body">
                <p>Choose your preferred contact method:</p>
                <div class="order-options">
                    <button class="order-option whatsapp-option" onclick="orderViaWhatsApp('${shoeName}', '${shoePrice}', '${shoeCategory}')">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="option-icon">
                            <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                        </svg>
                        <div class="option-text">
                            <strong>WhatsApp</strong>
                            <small>Instant messaging & quick response</small>
                        </div>
                    </button>
                    
                    <button class="order-option email-option" onclick="orderViaEmail('${shoeName}', '${shoePrice}', '${shoeCategory}')">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="option-icon">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <div class="option-text">
                            <strong>Email</strong>
                            <small>Detailed inquiry & formal communication</small>
                        </div>
                    </button>
                </div>
                
                <div class="modal-note">
                    <p><strong>Note:</strong> Both methods will provide detailed product information, and customization options.</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Close modal when clicking overlay
    modal.querySelector('.modal-overlay').addEventListener('click', closeOrderModal);
}

// Order via WhatsApp
function orderViaWhatsApp(shoeName, shoePrice, shoeCategory) {
    const message = CONFIG.whatsapp.messages.order.replace('{SHOE_NAME}', shoeName);
    const categoryText = shoeCategory ? ` (Category: ${formatCategoryName(shoeCategory)})` : '';
    const fullMessage = shoePrice ? `${message} (Price: ${shoePrice})${categoryText}` : message + categoryText;

    // Show loading state
    showOrderProcessing('WhatsApp');

    setTimeout(() => {
        window.open(generateWhatsAppURL(fullMessage), '_blank');
        closeOrderModal();
        trackWhatsAppClick('order_modal', shoeName, shoeCategory);
        showNotification('Redirected to WhatsApp. Your inquiry has been prepared!', 'success');
    }, 800);
}

// Order via Email
function orderViaEmail(shoeName, shoePrice, shoeCategory) {
    const subject = encodeURIComponent(`Order Inquiry - ${shoeName}`);
    const categoryText = shoeCategory ? `\nCategory: ${formatCategoryName(shoeCategory)}` : '';
    const priceText = shoePrice ? `\nPrice: ${shoePrice}` : '';

    const body = encodeURIComponent(`Hello Khal Designs,

I am interested in ordering the following item:

Product: ${shoeName}${priceText}${categoryText}

Please provide me with:
1. Detailed product specifications
2. Available customization options
3. Material and color choices
4. Production timeline
5. Shipping information
6. Payment methods

I would also like to know about:
- Sizing consultation process
- Return/exchange policy
- Care instructions

Please let me know the next steps to proceed with my order.

Best regards,
[Your Name]
[Your Phone Number]
[Your Address]`);

    const mailtoLink = `mailto:${CONFIG.email.address}?subject=${subject}&body=${body}`;

    // Show loading state
    showOrderProcessing('Email');

    setTimeout(() => {
        try {
            window.location.href = mailtoLink;
            closeOrderModal();
            trackEmailClick('order_modal', shoeName);
            showNotification('Email client opened. Please complete and send your inquiry!', 'success');
        } catch (error) {
            closeOrderModal();
            showNotification(`Please send your inquiry to: ${CONFIG.email.address}`, 'info');
        }
    }, 800);
}

// Show processing state
function showOrderProcessing(method) {
    const modal = document.querySelector('.order-modal .modal-content');
    if (modal) {
        modal.innerHTML = `
            <div class="processing-content">
                <div class="processing-spinner"></div>
                <h3>Preparing your ${method} inquiry...</h3>
                <p>Please wait while we set up your order details.</p>
            </div>
        `;
    }
}

// Close modal
function closeOrderModal() {
    const modal = document.querySelector('.order-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Enhanced tracking for email
function trackEmailClick(source, shoeName = '') {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'email_click', {
            'source': source,
            'shoe_name': shoeName
        });
    }
    console.log(`Email clicked from: ${source}`, shoeName ? `for shoe: ${shoeName}` : '');
}

// Expose functions globally
window.closeOrderModal = closeOrderModal;
window.orderViaWhatsApp = orderViaWhatsApp;
window.orderViaEmail = orderViaEmail;

function setupApprenticeshipButtons() {
    // WhatsApp application button
    const whatsappApplyBtn = document.querySelector('.whatsapp-apply-btn');
    if (whatsappApplyBtn) {
        whatsappApplyBtn.addEventListener('click', () => {
            const message = CONFIG.whatsapp.messages.apprenticeship;
            window.open(generateWhatsAppURL(message), '_blank');
            trackWhatsAppClick('apprenticeship_whatsapp');
        });
    }

    // Email application button
    const emailApplyBtn = document.querySelector('.email-apply-btn');
    if (emailApplyBtn) {
        emailApplyBtn.addEventListener('click', () => {
            const subject = encodeURIComponent(CONFIG.email.subject);
            const body = encodeURIComponent(`Hello Khal Designs,

I am interested in applying for your apprenticeship program. Please provide me with:

1. Application requirements and process
2. Available program start dates  
3. Payment plan options
4. Accommodation details

Please let me know the next steps to proceed with my application.

Thank you for your time.

Best regards,
[Your Name]
[Your Phone Number]`);

            const mailtoLink = `mailto:${CONFIG.email.address}?subject=${subject}&body=${body}`;

            // Try to open email client, fallback to showing contact info
            try {
                window.location.href = mailtoLink;
                trackEmailClick('apprenticeship_email');
            } catch (error) {
                showNotification(`Please send an email to: ${CONFIG.email.address}`, 'info');
            }
        });
    }
}

// Enhanced Footer Social Links - Replace updateSocialMediaLinks function
function updateSocialMediaLinks() {
    const socialLinksContainers = document.querySelectorAll('.social-links');

    socialLinksContainers.forEach(container => {
        container.innerHTML = `
            <a href="https://www.facebook.com/share/1Bh5D29qJY/" target="_blank" rel="noopener noreferrer" class="facebook" aria-label="Follow us on Facebook">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.847-.374 1.282v1.767h3.053L15.22 15.71h-2.53v7.98H9.101z"/>
                </svg>
            </a>
            <a href="https://www.instagram.com/khal_designs/" target="_blank" rel="noopener noreferrer" class="instagram" aria-label="Follow us on Instagram">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"/>
                </svg>
            </a>
            <a href="https://www.tiktok.com/@khal_designs?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" class="tiktok" aria-label="Follow us on TikTok">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
            </a>
            <a href="${generateWhatsAppURL('Hello Khal Designs! I found you through your website.')}" target="_blank" rel="noopener noreferrer" class="whatsapp" aria-label="Chat with us on WhatsApp" onclick="trackWhatsAppClick('footer_social')">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                </svg>
            </a>
            <a href="mailto:${CONFIG.email.address}?subject=${encodeURIComponent('Inquiry from Website - Khal Designs')}" class="email" aria-label="Send us an email" onclick="trackEmailClick('footer_social')">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </a>
        `;
    });
}

// Utility functions
function generateWhatsAppURL(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsapp.businessNumber}?text=${encodedMessage}`;
}

function getContextualMessage() {
    const currentPage = getCurrentPage();
    const messages = CONFIG.whatsapp.messages;

    switch (currentPage) {
        case 'catalogue': return 'Hello Khal Designs! I am browsing your catalogue and interested in your bespoke shoes.';
        case 'apprenticeship': return messages.apprenticeship;
        default: return messages.default;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop().split('.')[0];
    return fileName || 'index';
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (navLinks && mobileMenu) {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
}

// Header scroll effects
function handleHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY > 100) {
        Object.assign(header.style, {
            background: 'rgba(74, 44, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.4)'
        });
    } else {
        Object.assign(header.style, {
            background: 'linear-gradient(135deg, var(--dark-color), var(--primary-color))',
            backdropFilter: 'none',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
        });
    }
}

// Animation functions
function initAnimations() {
    animateOnScroll();

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });

        setTimeout(() => {
            document.querySelectorAll('.shoe-image, .preview-image').forEach(img => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                imageObserver.observe(img);
            });
        }, 500);
    }

    if (isHomePage() && window.innerWidth > 768) {
        initTypewriterEffect();
    }
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
    const windowHeight = window.innerHeight;
    const animationOffset = 150;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - animationOffset) {
            element.classList.add('animated');
        }
    });
}

function initTypewriterEffect() {
    setTimeout(() => {
        const heroText = document.querySelector('.hero p');
        if (!heroText) return;

        const originalText = heroText.textContent;
        heroText.textContent = '';
        heroText.style.opacity = '1';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };

        typeWriter();
    }, 1500);
}

// Mobile optimizations
function initMobileOptimizations() {
    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        input.addEventListener('focus', handleMobileInputFocus);
        input.addEventListener('blur', handleMobileInputBlur);
    });

    const interactiveElements = document.querySelectorAll('button, .cta-button, .nav-links a, .order-button');

    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', handleTouchStart, { passive: true });
        element.addEventListener('touchend', handleTouchEnd, { passive: true });
    });
}

function handleMobileInputFocus() {
    if (window.innerWidth < 768) {
        const viewport = document.querySelector('meta[name=viewport]');
        viewport?.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
}

function handleMobileInputBlur() {
    if (window.innerWidth < 768) {
        const viewport = document.querySelector('meta[name=viewport]');
        viewport?.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
}

function handleTouchStart() {
    this.style.transform = 'scale(0.95)';
}

function handleTouchEnd() {
    const self = this;
    setTimeout(() => {
        self.style.transform = '';
    }, 150);
}

// Set active navigation
function setActiveNavItem() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        const shouldBeActive = (currentPage === 'index' || currentPage === '') && href === 'index.html' ||
            href === `pages/${currentPage}.html` || href === `${currentPage}.html` ||
            href === `../${currentPage === 'index' ? 'index.html' : `pages/${currentPage}.html`}` ||
            href === `../index.html` && (currentPage === 'index' || currentPage === '');

        if (shouldBeActive) {
            link.classList.add('active');
        }
    });
}

// Utility functions
function isHomePage() {
    const currentPage = getCurrentPage();
    return currentPage === 'index' || currentPage === '';
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

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    // Add notification styles if they don't exist
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                max-width: 400px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
            }
            
            .notification-success {
                border-left: 4px solid #4CAF50;
            }
            
            .notification-error {
                border-left: 4px solid #f44336;
            }
            
            .notification-info {
                border-left: 4px solid var(--accent-color);
            }
            
            .notification-content {
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .notification-message {
                color: var(--text-dark);
                font-size: 0.9rem;
                line-height: 1.4;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: var(--text-light);
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Tracking functions
function trackWhatsAppClick(source, shoeName = '') {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'source': source,
            'shoe_name': shoeName
        });
    }
    console.log(`WhatsApp clicked from: ${source}`, shoeName ? `for shoe: ${shoeName}` : '');
}

function trackEmailClick(source) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'email_click', {
            'source': source
        });
    }
    console.log(`Email clicked from: ${source}`);
}

// Performance optimization - Preload critical images
window.addEventListener('load', function () {
    const criticalImages = [
        './assets/images/shoes/khal.jpg',
        './assets/images/shoes/khal1.jpg',
        './assets/images/shoes/khal5.jpg'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling
window.addEventListener('error', function (event) {
    console.error('JavaScript error:', event.error);
});

// Expose utility functions globally for backward compatibility
window.orderShoe = function (shoeName) {
    const message = CONFIG.whatsapp.messages.order.replace('{SHOE_NAME}', shoeName);
    window.open(generateWhatsAppURL(message), '_blank');
    trackWhatsAppClick('order_function', shoeName);
};

// Global functions for image viewer
window.openImageViewer = function (imageElement, title, price) {
    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    const viewerTitle = document.getElementById('viewerTitle');
    const viewerPrice = document.getElementById('viewerPrice');

    if (!viewer || !viewerImage) return;

    // Set image source and details
    viewerImage.src = imageElement.src;
    viewerImage.alt = imageElement.alt || title;

    if (viewerTitle) viewerTitle.textContent = title || '';
    if (viewerPrice) viewerPrice.textContent = price || '';

    // Show viewer with animation
    viewer.classList.add('active');
    viewer.style.display = 'flex';

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus management for accessibility
    viewer.focus();

    // Track image view for analytics
    if (typeof trackImageView === 'function') {
        trackImageView(title, imageElement.src);
    }

    console.log('Image viewer opened for:', title);
};

window.closeImageViewer = function () {
    const viewer = document.getElementById('imageViewer');

    if (!viewer) return;

    // Hide viewer with animation
    viewer.classList.remove('active');

    setTimeout(() => {
        viewer.style.display = 'none';
    }, 300);

    // Restore body scroll
    document.body.style.overflow = '';

    console.log('Image viewer closed');
};
function initImageOptimization() {
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Load high-quality image if data-src exists
                    if (img.dataset.src && img.dataset.src !== img.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                    }

                    // Add loaded class for smooth transition
                    if (!img.classList.contains('loaded')) {
                        img.classList.add('loaded');
                    }

                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });

        // Observe all shoe images
        setTimeout(() => {
            document.querySelectorAll('.shoe-image').forEach(img => {
                imageObserver.observe(img);
            });
        }, 500);
    }

    // Preload featured images
    preloadFeaturedImages();
}

function preloadFeaturedImages() {
    const featuredCards = document.querySelectorAll('[data-featured="true"] .shoe-image');

    featuredCards.forEach(img => {
        if (img.src) {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        }
    });
}


function handleImageError(imageElement) {
    // Fallback image or placeholder
    imageElement.style.background = 'linear-gradient(135deg, var(--light-color), var(--accent-color))';
    imageElement.style.display = 'flex';
    imageElement.style.alignItems = 'center';
    imageElement.style.justifyContent = 'center';
    imageElement.innerHTML = '<span style="color: var(--text-light); font-size: 0.9rem;">Image not available</span>';

    console.warn('Image failed to load:', imageElement.src);
}

// Add error handling to all images
function initImageErrorHandling() {
    document.querySelectorAll('.shoe-image').forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
}

// ========================================
// KEYBOARD NAVIGATION FOR IMAGE VIEWER
// ========================================

function initImageViewerKeyboard() {
    document.addEventListener('keydown', (event) => {
        const viewer = document.getElementById('imageViewer');

        if (!viewer || !viewer.classList.contains('active')) return;

        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                closeImageViewer();
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                closeImageViewer();
                break;
        }
    });
}

// ========================================
// TOUCH GESTURES FOR MOBILE
// ========================================

function initTouchGestures() {
    let touchStartY = 0;
    let touchEndY = 0;

    const viewer = document.getElementById('imageViewer');
    if (!viewer) return;

    viewer.addEventListener('touchstart', (event) => {
        touchStartY = event.changedTouches[0].screenY;
    }, { passive: true });

    viewer.addEventListener('touchend', (event) => {
        touchEndY = event.changedTouches[0].screenY;

        // Swipe down to close (minimum 100px swipe)
        if (touchStartY - touchEndY < -100) {
            closeImageViewer();
        }
    }, { passive: true });
}
function trackImageView(title, src) {
    // Analytics tracking for image views
    if (typeof gtag !== 'undefined') {
        gtag('event', 'image_view', {
            'item_name': title,
            'item_id': src.split('/').pop(),
            'content_type': 'product_image'
        });
    }

    console.log('Image view tracked:', title);
}

function measureImageLoadTimes() {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            if (entry.name.includes('shoes/')) {
                console.log(`Image load time: ${entry.name.split('/').pop()} - ${entry.duration}ms`);
            }
        });
    });

    observer.observe({ entryTypes: ['resource'] });
}
function getImageDimensions(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.width, height: img.height });
        img.onerror = reject;
        img.src = src;
    });
}

function optimizeImageForDevice(src) {
    // Simple responsive image optimization
    const devicePixelRatio = window.devicePixelRatio || 1;
    const screenWidth = window.innerWidth;

    // For high DPI displays, we might want higher quality
    if (devicePixelRatio > 1 && screenWidth < 768) {
        // Mobile high DPI - might want to serve @2x images
        return src.replace('.jpg', '@2x.jpg').replace('.png', '@2x.png');
    }

    return src;
}


function announceImageChange(title) {
    // Create accessible announcement for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Now viewing ${title}`;

    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Screen reader only class for accessibility
const srOnlyCSS = `
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
`;

// Add SR-only styles
if (!document.querySelector('#sr-only-styles')) {
    const style = document.createElement('style');
    style.id = 'sr-only-styles';
    style.textContent = srOnlyCSS;
    document.head.appendChild(style);
}

// ========================================
// ERROR RECOVERY
// ========================================

function handleImageViewerError() {
    console.error('Image viewer encountered an error');
    closeImageViewer();
    showNotification('Unable to display image. Please try again.', 'error');
}

// Add global error handling
window.addEventListener('error', (event) => {
    if (event.filename && event.filename.includes('main.js') &&
        event.message.toLowerCase().includes('image')) {
        handleImageViewerError();
    }
});