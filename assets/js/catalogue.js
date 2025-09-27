// Complete Catalogue.js - Mobile-Optimized Product Catalog Management Module
// ============================================================================

// Product Data Management - Optimized Structure
const CATALOGUE_DATA = {
    products: [
        // Featured Products - Only these show in "Featured Products" tab
        { name: "Men Slides", price: "₦45,000", image: "men_slides1.jpg", category: "trendy-slides", featured: true, description: "Stylish slides for casual wear." },
        { name: "Classic Brogues", price: "₦200,000", image: "brogues.jpg", category: "brogues", featured: true, description: "Classic brogues featuring decorative perforations and wingtip design." },
        { name: "Comfort Sneakers", price: "₦180,000", image: "casual_shoes.jpg", category: "casual-shoes", featured: true, description: "Everyday comfort, perfect for campus and city strolls." },
        { name: "Classic Loafers", price: "₦150,000", image: "loafers.jpg", category: "loafers", featured: true, description: "Classic slip-on shoes for versatile styling." },
        { name: "Classic Mules", price: "₦90,000", image: "mules.jpg", category: "mules", featured: true, description: "Backless elegance for an effortless and chic look." },
        { name: "Elegant Shoe Sandal", price: "₦100,000", image: "shoe_sandals.jpg", category: "shoe-sandal", featured: true, description: "Elegant open-toe sandals combining comfort with sophisticated styling." },

        // Trendy Slides
        { name: "Men Slides", price: "₦45,000", image: "men_slides.jpg", category: "trendy-slides", description: "Comfortable slip-on slides perfect for casual wear and relaxation." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides2.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides3.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides4.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides5.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides6.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides7.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides8.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides9.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides10.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },
        { name: "Men Slides", price: "₦45,000", image: "men_slides11.jpg", category: "trendy-slides", description: "Stylish slides for casual wear." },

        // Box Slides
        { name: "Box Slides", price: "₦100,000", image: "boxslide.jpeg", category: "box-slides", description: "Stylish box slides for casual wear." },
        { name: "Box Slides", price: "₦100,000", image: "boxslide1.jpeg", category: "box-slides", description: "Stylish box slides for casual wear." },
        { name: "Box Slides", price: "₦100,000", image: "boxslide2.jpeg", category: "box-slides", description: "Stylish box slides for casual wear." },

        // Brogues
        { name: "Handcrafted Brogues", price: "₦200,000", image: "brogues1.jpeg", category: "brogues", description: "Hand-colored leather brogues with traditional perforations." },
        { name: "Handcrafted Brogues", price: "₦200,000", image: "brogues2.jpeg", category: "brogues", description: "Hand-colored leather brogues with traditional perforations." },
        { name: "Handcrafted Brogues", price: "₦200,000", image: "brogues3.jpeg", category: "brogues", description: "Hand-colored leather brogues with traditional perforations." },
        { name: "Handcrafted Brogues", price: "₦200,000", image: "brogues4.jpeg", category: "brogues", description: "Hand-colored leather brogues with traditional perforations." },
        { name: "Handcrafted Brogues", price: "₦200,000", image: "brogues5.jpeg", category: "brogues", description: "Hand-colored leather brogues with traditional perforations." },
        { name: "Handcrafted Brogues", price: "₦200,000", image: "brogues6.jpeg", category: "brogues", description: "Hand-colored leather brogues with traditional perforations." },

        // Oxford
        { name: "Classic Oxford", price: "₦260,000", image: "oxford.jpeg", category: "oxford", description: "Traditional Oxford shoes with closed lacing system." },
        { name: "Premium Oxford", price: "₦200,000", image: "oxford1.jpeg", category: "oxford", description: "Elegant Oxford shoes for formal occasions." },

        // Patina
        { name: "Patina Dress Shoes", price: "₦200,000", image: "patina.jpg", category: "patina", description: "Hand-painted patina finish for unique coloring." },
        { name: "Premium Patina", price: "₦200,000", image: "patina2.jpeg", category: "patina", description: "Artistic patina coloring with premium leather." },
        { name: "Luxury Patina", price: "₦200,000", image: "patina3.jpeg", category: "patina", description: "Handcrafted patina with artistic color gradients." },

        // Loafers
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers2.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers3.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers4.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers5.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers6.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers7.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers8.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers9.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },
        { name: "Comfort Loafers", price: "₦150,000", image: "loafers10.jpeg", category: "loafers", description: "Effortless style for relaxed outings and social events." },

        // Suede Loafers
        { name: "Premium Suede Loafers", price: "₦150,000", image: "formal_shoes2.jpg", category: "suede-loafers", description: "Luxurious suede loafers for smart-casual occasions." },
        { name: "Classic Suede Loafers", price: "₦150,000", image: "suede1.jpeg", category: "suede-loafers", description: "Soft suede texture with comfortable fit." },
        { name: "Suede Loafers", price: "₦150,000", image: "suede2.jpeg", category: "suede-loafers", description: "Luxurious suede loafers for smart-casual occasions." },
        { name: "Classic Suede Loafers", price: "₦150,000", image: "suede_loafers.jpg", category: "suede-loafers", description: "Soft suede texture with comfortable fit." },

        // Casual Shoes
        { name: "White Sole Sneakers", price: "₦150,000", image: "white_cup_soles.jpg", category: "casual-shoes", description: "Modern sneakers with white soles for everyday wear." },

        // Corporate Shoes
        { name: "Corporate Casual", price: "₦150,000", image: "coperate.jpeg", category: "corporate-shoes", description: "Professional yet comfortable for office wear." },
        { name: "Business Formal", price: "₦150,000", image: "coperate1.jpeg", category: "corporate-shoes", description: "Perfect for business meetings and corporate events." },
        { name: "Executive Shoes", price: "₦150,000", image: "coperate2.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for executives." },
        { name: "Professional Shoes", price: "₦150,000", image: "coperate3.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for professionals." },
        { name: "Business Leather Shoes", price: "₦150,000", image: "coperate4.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for business." },
        { name: "Corporate Dress Shoes", price: "150,000", image: "coperate5.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for corporate dress." },
        { name: "Premium Corporate Shoes", price: "₦150,000", image: "coperate6.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for premium corporate wear." },

        // Mules
        { name: "Classic Mules", price: "₦90,000", image: "mules1.jpg", category: "mules", description: "Backless elegance for an effortless and chic look. Perfect for any occasion." },
        { name: "Classic Mules", price: "₦90,000", image: "mules2.jpeg", category: "mules", description: "Backless elegance for an effortless and chic look. Perfect for any occasion." },
        { name: "Classic Mules", price: "₦90,000", image: "mules3.jpeg", category: "mules", description: "Backless elegance for an effortless and chic look. Perfect for any occasion." },
        { name: "Classic Mules", price: "₦90,000", image: "mules4.jpeg", category: "mules", description: "Backless elegance for an effortless and chic look. Perfect for any occasion." },
        { name: "Classic Mules", price: "₦90,000", image: "mules5.jpeg", category: "mules", description: "Backless elegance for an effortless and chic look. Perfect for any occasion." },
        { name: "Classic Mules", price: "₦90,000", image: "mules6.jpeg", category: "mules", description: "Backless elegance for an effortless and chic look. Perfect for any occasion." },
        { name: "Classic Mules", price: "₦90,000", image: "mules7.jpeg", category: "mules", description: "Backless elegance for an effortless and chic look. Perfect for any occasion." },
        { name: "Classic Mules", price: "₦90,000", image: "mules8.jpeg", category: "mules", description: "Backless elegance for an effortless and chic look. Perfect for any occasion." },

        // Shoe Sandal
        { name: "Shoe Sandal", price: "₦100,000", image: "shoe_sandals1.jpg", category: "shoe-sandal", description: "Elegant open-toe sandals combining comfort with sophisticated styling. Ideal for warm weather and semi-formal occasions." },
        { name: "Shoe Sandal", price: "₦100,000", image: "shoe_sandals2.jpeg", category: "shoe-sandal", description: "Elegant open-toe sandals combining comfort with sophisticated styling. Ideal for warm weather and semi-formal occasions." },
        { name: "Shoe Sandal", price: "₦100,000", image: "shoe_sandals3.jpeg", category: "shoe-sandal", description: "Elegant open-toe sandals combining comfort with sophisticated styling. Ideal for warm weather and semi-formal occasions." },
        { name: "Shoe Sandal", price: "₦100,000", image: "shoe_sandals4.jpeg", category: "shoe-sandal", description: "Elegant open-toe sandals combining comfort with sophisticated styling. Ideal for warm weather and semi-formal occasions." },

        // Birkenstock
        { name: "Classic Birkenstock Sandals", price: "₦50,000", image: "birkenstock.jpg", category: "birkenstock", description: "Comfortable cork footbed sandals with adjustable straps for perfect fit." },
        { name: "Classic Birkenstock Sandals", price: "₦50,000", image: "birkenstock1.jpg", category: "birkenstock", description: "Comfortable cork footbed sandals with adjustable straps for perfect fit." },
        { name: "Premium Birkenstock Sandals", price: "₦50,000", image: "birkenstock2.jpeg", category: "birkenstock", description: "High-quality leather Birkenstock sandals with anatomical footbed support." },
        { name: "Premium Birkenstock Sandals", price: "₦50,000", image: "birkenstock3.jpeg", category: "birkenstock", description: "High-quality leather Birkenstock sandals with anatomical footbed support." },
        { name: "Premium Birkenstock Sandals", price: "₦50,000", image: "birkenstock4.jpeg", category: "birkenstock", description: "High-quality leather Birkenstock sandals with anatomical footbed support." },
        { name: "Premium Birkenstock Sandals", price: "₦50,000", image: "birkenstock5.jpeg", category: "birkenstock", description: "High-quality leather Birkenstock sandals with anatomical footbed support." },
        { name: "Premium Birkenstock Sandals", price: "₦50,000", image: "birkenstock6.jpeg", category: "birkenstock", description: "High-quality leather Birkenstock sandals with anatomical footbed support." },
        { name: "Premium Birkenstock Sandals", price: "₦50,000", image: "birkenstock7.jpeg", category: "birkenstock", description: "High-quality leather Birkenstock sandals with anatomical footbed support." },

        // Accessories
        { name: "Handcrafted Wallet", price: "From ₦25,000", image: "leather_wallet.jpg", category: "accessories", description: "Premium leather wallet with meticulous craftsmanship." },
        { name: "Premium Leather Belt", price: "From ₦30,000", image: "leather_belt.jpg", category: "accessories", description: "Handmade leather belt with quality buckle hardware." },

        // Boots
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot1.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot2.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot3.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot4.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot5.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot6.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot7.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot8.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },
        { name: "Classic Leather Boots", price: "₦200,000 -₦250,000", image: "boot9.jpeg", category: "boots", description: "Handcrafted leather boots with premium construction and durability." },

        // Cup Soles
        { name: "Cup Sole", price: "₦150,000", image: "cupsoles.jpeg", category: "cup-soles", description: "Modern sneakers with distinctive cup sole construction for enhanced comfort." },
        { name: "White Cup Sole", price: "₦150,000", image: "cupsoles1.jpeg", category: "cup-soles", description: "Modern sneakers with distinctive cup sole construction for enhanced comfort." },
        { name: "White Cup Sole", price: "₦150,000", image: "cupsoles2.jpeg", category: "cup-soles", description: "Modern sneakers with distinctive cup sole construction for enhanced comfort." },
        { name: "White Cup Sole", price: "₦150,000", image: "cupsoles3.jpeg", category: "cup-soles", description: "Modern sneakers with distinctive cup sole construction for enhanced comfort." },

        // Platform Slippers
        { name: "Platform Slippers", price: "₦45,000", image: "platform_slipers.jpeg", category: "platform-slippers", description: "Stylish platform slippers with elevated sole for added height and comfort." },
        { name: "Platform Slippers", price: "₦45,000", image: "platform_slipers1.jpeg", category: "platform-slippers", description: "Stylish platform slippers with elevated sole for added height and comfort." },
        { name: "Platform Slippers", price: "₦45,000", image: "platform_slipers2.jpeg", category: "platform-slippers", description: "Stylish platform slippers with elevated sole for added height and comfort." },
        { name: "Platform Slippers", price: "₦45,000", image: "platform_slipers3.jpeg", category: "platform-slippers", description: "Stylish platform slippers with elevated sole for added height and comfort." },
        { name: "Platform Slippers", price: "₦45,000", image: "platform_slipers4.jpeg", category: "platform-slippers", description: "Stylish platform slippers with elevated sole for added height and comfort." },
        { name: "Platform Slippers", price: "₦45,000", image: "platform_slipers5.jpeg", category: "platform-slippers", description: "Stylish platform slippers with elevated sole for added height and comfort." },
        { name: "Platform Slippers", price: "₦45,000", image: "platform_slipers6.jpeg", category: "platform-slippers", description: "Stylish platform slippers with elevated sole for added height and comfort." },
    ],

    // Categories - removed 'half-shoes'
    categories: [
        { id: 'all', label: 'Featured Products' },
        { id: 'loafers', label: 'Loafers' },
        { id: 'casual-shoes', label: 'Casual Shoes' },
        { id: 'corporate-shoes', label: 'Corporate Shoes' },
        { id: 'boots', label: 'Boots' },
        { id: 'shoe-sandal', label: 'Shoe Sandal' },
        { id: 'oxford', label: 'Oxford' },
        { id: 'patina', label: 'Patina' },
        { id: 'brogues', label: 'Brogues' },
        { id: 'birkenstock', label: 'Birkenstock' },
        { id: 'suede-loafers', label: 'Suede Loafers' },
        { id: 'cup-soles', label: 'Cup Soles' },
        { id: 'platform-slippers', label: 'Platform Slippers' },
        { id: 'trendy-slides', label: 'Trendy Men Slides' },
        { id: 'box-slides', label: 'Box Slides' },
        { id: 'mules', label: 'Mules' },
        { id: 'accessories', label: 'Accessories' }
    ]
};

// Complete Mobile-Optimized Catalogue Manager
class CatalogueManager {
    constructor() {
        this.products = CATALOGUE_DATA.products;
        this.categories = CATALOGUE_DATA.categories;
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.isInitialized = false;
        this.imageObserver = null;
        this.resizeTimeout = null;
        this.searchTimeout = null;
        this.viewIcon = `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z" />
        </svg>`;
    }

    // Main initialization
    init() {
        if (this.isInitialized) return;

        this.createCategoryTabs();
        this.createProductGrid();
        this.attachEventListeners();
        this.initializeCategoryFromURL();
        this.setupLazyLoading();
        this.setupMobileTabEnhancements();
        this.injectEnhancedStyles();
        this.isInitialized = true;

        console.log('✅ Catalogue initialized with mobile enhancements');
    }

    // Inject additional CSS for mobile enhancements
    injectEnhancedStyles() {
        const enhancedCSS = `
            .category-tab.loading {
                opacity: 0.7;
                pointer-events: none;
            }

            .category-tab.loading::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 12px;
                height: 12px;
                margin: -6px 0 0 -6px;
                border: 2px solid transparent;
                border-top-color: currentColor;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            .category-tabs-container.scrolled-left::before,
            .category-tabs-container.scrolled-right::after {
                opacity: 1;
            }

            .tabs-scroll-hint {
                transition: all 0.3s ease;
            }

            @media (max-width: 768px) {
                .tabs-scroll-hint {
                    display: block !important;
                    text-align: center;
                    font-size: 0.8rem;
                    color: var(--text-light);
                    margin-bottom: 1rem;
                    opacity: 0.7;
                    padding: 0.5rem;
                    background: rgba(244, 162, 97, 0.1);
                    border-radius: 20px;
                    border: 1px solid rgba(244, 162, 97, 0.2);
                }
            }

            @media (min-width: 769px) {
                .tabs-scroll-hint {
                    display: none !important;
                }
            }
        `;

        if (!document.getElementById('enhanced-catalogue-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'enhanced-catalogue-styles';
            styleSheet.textContent = enhancedCSS;
            document.head.appendChild(styleSheet);
        }
    }

    // Setup lazy loading for images
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                    }
                });
            }, {
                rootMargin: '50px',
                threshold: 0.1
            });
        } else {
            this.loadAllImages();
        }
    }

    // Load individual image with error handling
    loadImage(img) {
        if (!img.dataset.src) return;

        const tempImg = new Image();
        tempImg.onload = () => {
            img.src = tempImg.src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
            this.imageObserver?.unobserve(img);
        };
        tempImg.onerror = () => {
            img.alt = 'Image could not be loaded';
            img.classList.add('error');
            this.imageObserver?.unobserve(img);
        };
        tempImg.src = img.dataset.src;
    }

    // Fallback for browsers without IntersectionObserver
    loadAllImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => this.loadImage(img));
    }

    // Create category tabs with accessibility
    createCategoryTabs() {
        const categoryTabs = document.getElementById('categoryTabs');
        if (!categoryTabs) return;

        const tabsHTML = this.categories.map((cat, index) =>
            `<button class="category-tab${cat.id === 'all' ? ' active' : ''}" 
                     data-category="${cat.id}" 
                     role="tab"
                     tabindex="${cat.id === 'all' ? '0' : '-1'}"
                     aria-label="Show ${cat.label}"
                     style="animation-delay: ${index * 0.1}s">${cat.label}</button>`
        ).join('');

        categoryTabs.innerHTML = tabsHTML;
        categoryTabs.setAttribute('role', 'tablist');
    }

    // Create product grid with lazy loading
    createProductGrid() {
        const catalogueGrid = document.getElementById('catalogueGrid');
        if (!catalogueGrid) return;

        const gridHTML = this.products.map(product => this.createShoeCard(product)).join('');
        catalogueGrid.innerHTML = gridHTML;

        // Setup lazy loading for newly created images
        if (this.imageObserver) {
            const images = catalogueGrid.querySelectorAll('img[data-src]');
            images.forEach(img => this.imageObserver.observe(img));
        }
    }

    // Create individual shoe card with lazy loading
    createShoeCard(product) {
        const featuredAttr = product.featured ? ' data-featured="true"' : '';
        const imageSrc = `../assets/images/shoes/${product.image}`;

        return `
            <div class="shoe-card animate-on-scroll" data-category="${product.category}"${featuredAttr}>
                <div class="shoe-image-container">
                    <img data-src="${imageSrc}" alt="${product.name}" class="shoe-image"
                         onclick="openImageViewer(this, '${product.name}', '${product.price}')"
                         loading="lazy">
                    <div class="image-overlay">
                        <span class="shoe-label">${product.name}</span>
                        <button class="view-image-btn"
                                onclick="openImageViewer(this.parentElement.previousElementSibling, '${product.name}', '${product.price}')"
                                aria-label="View ${product.name} full image">
                            ${this.viewIcon}
                        </button>
                    </div>
                </div>
                <div class="shoe-card-content">
                    <h3>${product.name}</h3>
                    <div class="shoe-price">${product.price}</div>
                    <p class="shoe-description">${product.description}</p>
                    <button class="order-button" type="button" 
                            data-shoe="${product.name}" 
                            data-price="${product.price}" 
                            data-category="${product.category}">Order Now</button>
                </div>
            </div>
        `;
    }

    // Setup mobile-specific enhancements
    setupMobileTabEnhancements() {
        const categoryTabs = document.getElementById('categoryTabs');
        if (!categoryTabs) return;

        // Hide scroll hint after first interaction
        this.setupScrollHintBehavior();

        // Add smooth scrolling to active tab
        this.setupActiveTabScrolling();

        // Add touch indicators for better UX
        this.addTouchIndicators();

        // Setup keyboard navigation
        this.setupKeyboardNavigation();
    }

    // Hide scroll hint after user interaction
    setupScrollHintBehavior() {
        const scrollHint = document.querySelector('.tabs-scroll-hint');
        const categoryTabs = document.getElementById('categoryTabs');

        if (!scrollHint || !categoryTabs) return;

        let hasInteracted = false;

        const hideHint = () => {
            if (!hasInteracted) {
                scrollHint.style.opacity = '0';
                scrollHint.style.transform = 'translateY(-10px)';
                hasInteracted = true;
                setTimeout(() => {
                    scrollHint.style.display = 'none';
                }, 300);
            }
        };

        // Hide hint on scroll, click, or touch
        categoryTabs.addEventListener('scroll', hideHint, { once: true });
        categoryTabs.addEventListener('click', hideHint, { once: true });
        categoryTabs.addEventListener('touchstart', hideHint, { once: true });

        // Auto-hide after 5 seconds on mobile
        if (window.innerWidth <= 768) {
            setTimeout(hideHint, 5000);
        }
    }

    // Scroll active tab into view smoothly
    setupActiveTabScrolling() {
        this.scrollActiveTabIntoView = (activeTab) => {
            if (window.innerWidth <= 768) {
                const categoryTabs = document.getElementById('categoryTabs');
                if (!categoryTabs) return;

                const containerWidth = categoryTabs.clientWidth;
                const tabLeft = activeTab.offsetLeft;
                const tabWidth = activeTab.offsetWidth;
                const currentScroll = categoryTabs.scrollLeft;

                // Calculate optimal scroll position (center the active tab)
                const optimalScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);

                categoryTabs.scrollTo({
                    left: Math.max(0, optimalScroll),
                    behavior: 'smooth'
                });
            }
        };
    }

    // Add visual touch indicators
    addTouchIndicators() {
        if (window.innerWidth > 768) return;

        const categoryTabs = document.getElementById('categoryTabs');
        if (!categoryTabs) return;

        // Ensure container exists
        let container = categoryTabs.parentElement;
        if (!container.classList.contains('category-tabs-container')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'category-tabs-container';
            categoryTabs.parentNode.insertBefore(wrapper, categoryTabs);
            wrapper.appendChild(categoryTabs);
            container = wrapper;
        }

        // Update scroll indicators based on scroll position
        const updateScrollIndicators = () => {
            const scrollLeft = categoryTabs.scrollLeft;
            const maxScroll = categoryTabs.scrollWidth - categoryTabs.clientWidth;

            if (scrollLeft > 10) {
                container.classList.add('scrolled-left');
            } else {
                container.classList.remove('scrolled-left');
            }

            if (scrollLeft < maxScroll - 10) {
                container.classList.add('scrolled-right');
            } else {
                container.classList.remove('scrolled-right');
            }
        };

        categoryTabs.addEventListener('scroll', updateScrollIndicators);
        window.addEventListener('resize', updateScrollIndicators);

        // Initial update
        setTimeout(updateScrollIndicators, 100);
    }

    // Setup keyboard navigation for accessibility
    setupKeyboardNavigation() {
        const categoryTabs = document.getElementById('categoryTabs');
        if (!categoryTabs) return;

        categoryTabs.addEventListener('keydown', (e) => {
            const activeTab = document.querySelector('.category-tab.active');
            const tabs = Array.from(document.querySelectorAll('.category-tab'));
            const currentIndex = tabs.indexOf(activeTab);

            let newIndex = currentIndex;

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
                    break;
                case 'Home':
                    e.preventDefault();
                    newIndex = 0;
                    break;
                case 'End':
                    e.preventDefault();
                    newIndex = tabs.length - 1;
                    break;
                default:
                    return;
            }

            if (newIndex !== currentIndex) {
                tabs[newIndex].click();
                tabs[newIndex].focus();
            }
        });
    }

    // Enhanced event listeners with mobile optimizations
    attachEventListeners() {
        // Category tabs
        const categoryTabs = document.getElementById('categoryTabs');
        if (categoryTabs) {
            categoryTabs.addEventListener('click', (e) => this.handleCategoryClick(e));
        }

        // Search with debouncing
        const catalogueSearch = document.getElementById('catalogueSearch');
        if (catalogueSearch) {
            catalogueSearch.addEventListener('input', (e) => {
                clearTimeout(this.searchTimeout);
                this.searchTimeout = setTimeout(() => this.handleSearch(e), 300);
            });
        }

        // Hash change for browser navigation
        window.addEventListener('hashchange', () => this.initializeCategoryFromURL());

        // Enhanced resize handler
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => this.handleResize(), 250);
        });

        // Enhanced touch handling for mobile tabs
        if ('ontouchstart' in window) {
            this.setupMobileTouchHandling();
        }
    }

    // Setup mobile touch handling
    setupMobileTouchHandling() {
        const categoryTabs = document.getElementById('categoryTabs');
        if (!categoryTabs) return;

        let startX = 0;
        let scrollLeft = 0;
        let isScrolling = false;

        categoryTabs.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - categoryTabs.offsetLeft;
            scrollLeft = categoryTabs.scrollLeft;
            isScrolling = false;
        });

        categoryTabs.addEventListener('touchmove', (e) => {
            if (!startX) return;

            const x = e.touches[0].pageX - categoryTabs.offsetLeft;
            const walk = (x - startX) * 2;
            const newScrollLeft = scrollLeft - walk;

            if (Math.abs(walk) > 10) {
                isScrolling = true;
                e.preventDefault();
                categoryTabs.scrollLeft = newScrollLeft;
            }
        });

        categoryTabs.addEventListener('touchend', (e) => {
            startX = 0;

            // Prevent click if we were scrolling
            if (isScrolling) {
                e.preventDefault();
                isScrolling = false;
            }
        });
    }

    // Enhanced category click handling
    handleCategoryClick(e) {
        if (!e.target.classList.contains('category-tab')) return;

        // Add loading state for better UX
        e.target.classList.add('loading');

        // Update active tab
        const tabs = document.querySelectorAll('.category-tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
            tab.setAttribute('tabindex', '-1');
        });

        e.target.classList.add('active');
        e.target.setAttribute('tabindex', '0');

        const category = e.target.dataset.category;

        // Add slight delay for smooth transition
        setTimeout(() => {
            this.switchCategory(category);
            e.target.classList.remove('loading');

            // Scroll active tab into view on mobile
            if (this.scrollActiveTabIntoView) {
                setTimeout(() => this.scrollActiveTabIntoView(e.target), 100);
            }
        }, 150);
    }

    // Switch category with optimized filtering
    switchCategory(category) {
        this.currentCategory = category;
        this.filterProducts(category, this.searchQuery);
        this.updateURL(category);
    }

    // Enhanced product filtering - 'all' shows only featured products
    filterProducts(category = this.currentCategory, searchQuery = this.searchQuery) {
        const cards = document.querySelectorAll('.shoe-card');
        const catalogueGrid = document.getElementById('catalogueGrid');
        const emptyState = document.getElementById('categoryEmptyState');

        // Add loading state
        catalogueGrid?.classList.add('loading');

        let visibleCount = 0;

        // Use requestAnimationFrame for smooth rendering
        requestAnimationFrame(() => {
            cards.forEach(card => {
                const cardCategory = card.dataset.category;
                const shoeName = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const shoeDescription = card.querySelector('.shoe-description')?.textContent.toLowerCase() || '';

                // Modified logic: 'all' now only shows featured products
                const matchesCategory = category === 'all' ?
                    card.dataset.featured === 'true' :
                    cardCategory === category;

                const matchesSearch = !searchQuery ||
                    shoeName.includes(searchQuery.toLowerCase()) ||
                    shoeDescription.includes(searchQuery.toLowerCase());

                const shouldShow = matchesCategory && matchesSearch;

                if (shouldShow) {
                    card.style.display = 'block';
                    card.classList.add('visible');
                    card.classList.remove('hidden');
                    visibleCount++;

                    // Setup lazy loading for newly visible images
                    const img = card.querySelector('img[data-src]');
                    if (img && this.imageObserver) {
                        this.imageObserver.observe(img);
                    }
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                    card.classList.add('hidden');
                }
            });

            this.handleEmptyState(visibleCount, category, searchQuery);
            catalogueGrid?.classList.remove('loading');

            // Trigger animations for visible items
            if (typeof animateOnScroll === 'function') {
                setTimeout(animateOnScroll, 100);
            }
        });
    }

    // Debounced search handling
    handleSearch(e) {
        this.searchQuery = e.target.value.trim();
        this.filterProducts(this.currentCategory, this.searchQuery);
        this.handleSearchSuggestions(this.searchQuery);
    }

    // Enhanced empty state handling
    handleEmptyState(visibleCount, category, searchQuery) {
        const emptyState = document.getElementById('categoryEmptyState');
        const catalogueGrid = document.getElementById('catalogueGrid');

        if (visibleCount === 0) {
            if (emptyState) {
                emptyState.innerHTML = this.createEnhancedEmptyState(searchQuery, category);
                emptyState.style.display = 'block';
            }
            catalogueGrid && (catalogueGrid.style.display = 'none');
        } else {
            emptyState && (emptyState.style.display = 'none');
            catalogueGrid && (catalogueGrid.style.display = 'grid');
        }
    }

    // Create enhanced empty state
    createEnhancedEmptyState(searchTerm, activeCategory) {
        const categoryName = this.formatCategoryName(activeCategory);
        const isAllCategory = activeCategory === 'all';

        let title, description, searchMessage;

        if (searchTerm && !isAllCategory) {
            title = 'No matches found';
            description = `We couldn't find "${searchTerm}" in ${categoryName}.`;
            searchMessage = `Hello! I was searching for "${searchTerm}" in ${categoryName} but couldn't find it. Do you have similar products?`;
        } else if (searchTerm && isAllCategory) {
            title = 'Product not found';
            description = `"${searchTerm}" isn't in our featured products.`;
            searchMessage = `Hello! I was searching for "${searchTerm}" but couldn't find it in your featured products. Do you have it in your full catalog?`;
        } else if (isAllCategory) {
            title = 'Featured Products Loading...';
            description = 'Our featured products are being prepared for display.';
            searchMessage = 'Hello! I want to explore your featured products catalog.';
        } else {
            title = `No ${categoryName} Available`;
            description = `No ${categoryName.toLowerCase()} are currently displayed. Check our WhatsApp catalog for more options.`;
            searchMessage = `Hello! I'm looking for ${categoryName.toLowerCase()}. Do you have any available in your catalog?`;
        }

        const catalogURL = window.CONFIG?.whatsapp?.catalogURL || 'https://wa.me/c/2348147994796';
        const whatsappURL = this.generateWhatsAppURL(searchMessage);

        return `
            <div class="enhanced-empty-state">
                <div class="empty-icon">🔍</div>
                <h3>${title}</h3>
                <p>${description}</p>
                <p><strong>Good news!</strong> Our WhatsApp catalog has 100+ exclusive designs.</p>
                <div class="catalog-cta-buttons">
                    <a href="${catalogURL}" target="_blank" class="whatsapp-catalog-btn" 
                       onclick="trackCatalogClick('empty_state_${activeCategory}', '${searchTerm}')">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                        </svg>
                        Browse Full Catalog
                    </a>
                    ${searchTerm ? '<button class="search-reset-btn" onclick="clearCatalogueSearch()">Clear Search</button>' : ''}
                </div>
                ${searchTerm ? `<p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">Or <a href="${whatsappURL}" target="_blank" style="color: #25D366; font-weight: 600;" onclick="trackCatalogClick('direct_search_help', '${searchTerm}')">ask us directly about "${searchTerm}"</a></p>` : ''}
            </div>
        `;
    }

    // Search suggestions handling
    handleSearchSuggestions(searchTerm) {
        const suggestionsDiv = document.getElementById('searchSuggestions');
        if (!suggestionsDiv || !searchTerm) {
            suggestionsDiv?.classList.remove('active');
            return;
        }

        const suggestions = ['brogues', 'loafers', 'sneakers', 'boots', 'oxford', 'leather', 'suede', 'formal', 'casual'];
        const relevantSuggestions = suggestions
            .filter(term => term.toLowerCase().includes(searchTerm.toLowerCase()) &&
                term.toLowerCase() !== searchTerm.toLowerCase())
            .slice(0, 4);

        if (relevantSuggestions.length > 0) {
            suggestionsDiv.innerHTML = `
                <h4>Did you mean:</h4>
                <div class="suggestion-tags">
                    ${relevantSuggestions.map(term =>
                `<span class="suggestion-tag" onclick="applyCatalogueSuggestion('${term}')">${term}</span>`
            ).join('')}
                </div>
            `;
            suggestionsDiv.classList.add('active');
        } else {
            suggestionsDiv.classList.remove('active');
        }
    }

    // Handle responsive behavior changes
    handleResize() {
        const categoryTabs = document.getElementById('categoryTabs');
        const scrollHint = document.querySelector('.tabs-scroll-hint');

        if (window.innerWidth > 768) {
            // Desktop behavior
            if (scrollHint) scrollHint.style.display = 'none';
            if (categoryTabs) {
                categoryTabs.scrollLeft = 0;
                const container = document.querySelector('.category-tabs-container');
                if (container) {
                    container.classList.remove('scrolled-left', 'scrolled-right');
                }
            }
        } else {
            // Mobile behavior
            if (scrollHint && scrollHint.style.display === 'none') {
                scrollHint.style.display = 'block';
                scrollHint.style.opacity = '0.7';
                scrollHint.style.transform = 'translateY(0)';
            }
        }
    }

    // Initialize category from URL hash
    initializeCategoryFromURL() {
        const hash = window.location.hash.substring(1);
        const validCategories = this.categories.map(cat => cat.id);

        if (hash && validCategories.includes(hash)) {
            const targetTab = document.querySelector(`[data-category="${hash}"]`);
            if (targetTab) {
                document.querySelectorAll('.category-tab').forEach(tab => {
                    tab.classList.remove('active');
                    tab.setAttribute('tabindex', '-1');
                });
                targetTab.classList.add('active');
                targetTab.setAttribute('tabindex', '0');
                this.switchCategory(hash);
            }
        }
    }

    // Update URL for bookmarking
    updateURL(category) {
        const url = category !== 'all' ? `#${category}` : window.location.pathname;
        history.replaceState(null, null, url);
    }

    // Format category name for display
    formatCategoryName(category) {
        const categoryData = this.categories.find(cat => cat.id === category);
        return categoryData ? categoryData.label : category;
    }

    // Generate WhatsApp URL
    generateWhatsAppURL(message) {
        const businessNumber = window.CONFIG?.whatsapp?.businessNumber || '2348147994796';
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${businessNumber}?text=${encodedMessage}`;
    }

    // Clear search functionality
    clearSearch() {
        const searchInput = document.getElementById('catalogueSearch');
        if (searchInput) {
            searchInput.value = '';
            this.searchQuery = '';
            this.filterProducts(this.currentCategory, '');
            document.getElementById('searchSuggestions')?.classList.remove('active');
        }
    }

    // Apply search suggestion
    applySuggestion(term) {
        const searchInput = document.getElementById('catalogueSearch');
        if (searchInput) {
            searchInput.value = term;
            this.searchQuery = term;
            this.filterProducts(this.currentCategory, term);
            document.getElementById('searchSuggestions')?.classList.remove('active');
        }
    }

    // Cleanup method for memory management
    destroy() {
        // Clear timeouts
        clearTimeout(this.resizeTimeout);
        clearTimeout(this.searchTimeout);

        // Disconnect observers
        if (this.imageObserver) {
            this.imageObserver.disconnect();
            this.imageObserver = null;
        }

        // Remove event listeners
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('hashchange', this.initializeCategoryFromURL);

        this.isInitialized = false;
    }
}

// Initialize catalogue when DOM is loaded
let catalogueManager;

document.addEventListener('DOMContentLoaded', function () {
    // Only initialize if we're on the catalogue page
    if (document.getElementById('catalogueGrid')) {
        catalogueManager = new CatalogueManager();
        catalogueManager.init();

        // Add search suggestions container
        const searchContainer = document.querySelector('.catalogue-search');
        if (searchContainer && !document.getElementById('searchSuggestions')) {
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.className = 'search-suggestions';
            suggestionsDiv.id = 'searchSuggestions';
            searchContainer.appendChild(suggestionsDiv);
        }
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (catalogueManager) {
        catalogueManager.destroy();
    }
});

// Global functions for backward compatibility
window.clearCatalogueSearch = function () {
    catalogueManager?.clearSearch();
};

window.applyCatalogueSuggestion = function (term) {
    catalogueManager?.applySuggestion(term);
};

window.trackCatalogClick = function (source, searchTerm = '') {
    if (typeof trackWhatsAppClick === 'function') {
        trackWhatsAppClick(`catalog_${source}`, searchTerm);
    }
    console.log('Catalog click tracked:', source, searchTerm);
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CatalogueManager, CATALOGUE_DATA };
}