// Optimized Catalogue Management Module
// ============================================================================

const CATALOGUE_DATA = {
    products: [
        // Featured Products
        { name: "Men Slides", price: "₦45,000", image: "men_slides1.jpg", category: "trendy-slides", featured: true, description: "Stylish slides for casual wear." },
        { name: "Classic Brogues", price: "₦200,000", image: "brogues.jpg", category: "brogues", featured: true, description: "Classic brogues featuring decorative perforations and wingtip design." },
        { name: "Comfort Sneakers", price: "₦150,000", image: "casual_shoes.jpg", category: "casual-shoes", featured: true, description: "Everyday comfort, perfect for campus and city strolls." },
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
        { name: "Casual", price: "₦150,000", image: "white_cup_soles.jpg", category: "casual-shoes", description: "Effortless style for relaxed outings. The perfect balance of smart and casual." },
        { name: "Casual", price: "₦150,000", image: "casual1.jpeg", category: "casual-shoes", description: "Classic low-top comfort. The versatile foundation for any modern wardrobe." },
        { name: "Casual", price: "₦150,000", image: "casual2.jpeg", category: "casual-shoes", description: "Effortless style for relaxed outings. The perfect balance of smart and casual." },
        { name: "Casual", price: "₦150,000", image: "casual3.jpeg", category: "casual-shoes", description: "Designed for all-day ease. Your go-to footwear for any casual occasion." },

        // Corporate Shoes
        { name: "Corporate Casual", price: "₦150,000", image: "coperate.jpeg", category: "corporate-shoes", description: "Professional yet comfortable for office wear." },
        { name: "Business Formal", price: "₦150,000", image: "coperate1.jpeg", category: "corporate-shoes", description: "Perfect for business meetings and corporate events." },
        { name: "Executive Shoes", price: "₦150,000", image: "coperate2.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for executives." },
        { name: "Professional Shoes", price: "₦150,000", image: "coperate3.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for professionals." },
        { name: "Business Leather Shoes", price: "₦150,000", image: "coperate4.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for business." },
        { name: "Corporate Dress Shoes", price: "₦150,000", image: "coperate5.jpeg", category: "corporate-shoes", description: "Hand-colored leather shoes for corporate dress." },
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

        // Female Slides
        { name: "Female Slides", price: "₦35,000", image: "female_slides.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
        { name: "Female Slides", price: "₦35,000", image: "female_slides2.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
        { name: "Female Slides", price: "₦35,000", image: "female_slides3.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
        { name: "Female Slides", price: "₦35,000", image: "female_slides4.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
        { name: "Female Slides", price: "₦35,000", image: "female_slides5.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
        { name: "Female Slides", price: "₦35,000", image: "female_slides6.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
        { name: "Female Slides", price: "₦35,000", image: "female_slides7.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
        { name: "Female Slides", price: "₦35,000", image: "female_slides8.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
        { name: "Female Slides", price: "₦35,000", image: "female_slides9.jpg", category: "female-slides", description: "Stylish and comfortable slides designed for women, perfect for casual outings." },
    ],

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
        { id: 'female-slides', label: 'Female Slides' },
        { id: 'accessories', label: 'Accessories' }
    ]
};

// Optimized Catalogue Manager
class CatalogueManager {
    constructor() {
        this.products = CATALOGUE_DATA.products;
        this.categories = CATALOGUE_DATA.categories;
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.imageObserver = null;
        this.searchTimeout = null;
        this.stickyTabsObserver = null;
    }

    init() {
        this.createCategoryTabs();
        this.renderProducts();
        this.attachEventListeners();
        this.initializeCategoryFromURL();
        this.setupLazyLoading();
        this.setupStickyTabs();
        console.log('✅ Catalogue initialized');
    }

    setupStickyTabs() {
        const container = document.querySelector('.category-tabs-container');
        if (!container) return;

        const sentinel = document.createElement('div');
        sentinel.className = 'sticky-sentinel';
        container.parentNode.insertBefore(sentinel, container);

        this.stickyTabsObserver = new IntersectionObserver(
            ([entry]) => {
                container.classList.toggle('stuck', !entry.isIntersecting);
            },
            { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
        );

        this.stickyTabsObserver.observe(sentinel);
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            delete img.dataset.src;
                            this.imageObserver.unobserve(img);
                        }
                    });
                },
                { rootMargin: '50px' }
            );
        }
    }

    createCategoryTabs() {
        const container = document.getElementById('categoryTabs');
        if (!container) return;

        const fragment = document.createDocumentFragment();
        this.categories.forEach(cat => {
            const button = document.createElement('button');
            button.className = `category-tab${cat.id === 'all' ? ' active' : ''}`;
            button.dataset.category = cat.id;
            button.textContent = cat.label;
            fragment.appendChild(button);
        });
        container.appendChild(fragment);
    }

    renderProducts() {
        const grid = document.getElementById('catalogueGrid');
        if (!grid) return;

        const fragment = document.createDocumentFragment();
        this.products.forEach(product => {
            const card = this.createShoeCard(product);
            fragment.appendChild(card);
        });
        grid.appendChild(fragment);

        if (this.imageObserver) {
            grid.querySelectorAll('img[data-src]').forEach(img => this.imageObserver.observe(img));
        }
    }

    createShoeCard(product) {
        const card = document.createElement('div');
        card.className = 'shoe-card';
        card.dataset.category = product.category;
        if (product.featured) card.dataset.featured = 'true';

        const imageSrc = `../assets/images/shoes/${product.image}`;

        card.innerHTML = `
            <div class="shoe-image-container">
                <img data-src="${imageSrc}" alt="${product.name}" class="shoe-image" loading="lazy">
                <div class="image-overlay">
                    <span class="shoe-label">${product.name}</span>
                    <button class="view-image-btn" aria-label="View ${product.name}">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="shoe-card-content">
                <h3>${product.name}</h3>
                <div class="shoe-price">${product.price}</div>
                <p class="shoe-description">${product.description}</p>
                <button class="order-button" data-shoe="${product.name}" data-price="${product.price}" data-category="${product.category}">Order Now</button>
            </div>
        `;

        // Add event listeners directly
        const imageContainer = card.querySelector('.shoe-image-container');
        imageContainer.addEventListener('click', () => {
            const img = imageContainer.querySelector('img');
            window.openImageViewer(img, product.name, product.price);
        });

        return card;
    }

    attachEventListeners() {
        // Category tabs with event delegation
        document.getElementById('categoryTabs')?.addEventListener('click', (e) => {
            if (!e.target.classList.contains('category-tab')) return;
            this.handleCategoryClick(e.target);
        });

        // Search with debounce
        const searchInput = document.getElementById('catalogueSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                clearTimeout(this.searchTimeout);
                this.searchTimeout = setTimeout(() => {
                    this.searchQuery = e.target.value.trim().toLowerCase();
                    this.filterProducts();
                }, 200);
            });
        }

        // Hash change
        window.addEventListener('hashchange', () => this.initializeCategoryFromURL());
    }

    handleCategoryClick(tab) {
        // Quick active state update
        const tabs = document.querySelectorAll('.category-tab');
        tabs.forEach(t => t.classList.toggle('active', t === tab));

        this.currentCategory = tab.dataset.category;
        this.filterProducts();
        this.updateURL();
    }

    filterProducts() {
        const cards = document.querySelectorAll('.shoe-card');
        const grid = document.getElementById('catalogueGrid');
        const emptyState = document.getElementById('categoryEmptyState');
        let visibleCount = 0;

        // Use requestAnimationFrame for smoother rendering
        requestAnimationFrame(() => {
            cards.forEach(card => {
                const category = card.dataset.category;
                const matchesCategory = this.currentCategory === 'all'
                    ? card.dataset.featured === 'true'
                    : category === this.currentCategory;

                let matchesSearch = true;
                if (this.searchQuery) {
                    const text = (card.querySelector('h3')?.textContent + ' ' +
                        card.querySelector('.shoe-description')?.textContent).toLowerCase();
                    matchesSearch = text.includes(this.searchQuery);
                }

                const shouldShow = matchesCategory && matchesSearch;
                card.style.display = shouldShow ? 'block' : 'none';

                if (shouldShow) {
                    visibleCount++;
                    const img = card.querySelector('img[data-src]');
                    if (img && this.imageObserver) this.imageObserver.observe(img);
                }
            });

            this.handleEmptyState(visibleCount, grid, emptyState);
        });
    }

    handleEmptyState(visibleCount, grid, emptyState) {
        if (visibleCount === 0) {
            emptyState.innerHTML = this.createEmptyStateHTML();
            emptyState.style.display = 'block';
            grid.style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            grid.style.display = 'grid';
        }
    }

    createEmptyStateHTML() {
        const categoryName = this.categories.find(c => c.id === this.currentCategory)?.label || 'this category';
        const catalogURL = window.CONFIG?.whatsapp?.catalogURL || 'https://wa.me/c/2348147994796';

        return `
            <div class="enhanced-empty-state">
                <div class="empty-icon">🔍</div>
                <h3>No products found</h3>
                <p>${this.searchQuery ? `No matches for "${this.searchQuery}" in ${categoryName}` : `No ${categoryName} available`}</p>
                <p><strong>Browse our WhatsApp catalog for 100+ designs</strong></p>
                <div class="catalog-cta-buttons">
                    <a href="${catalogURL}" target="_blank" class="whatsapp-catalog-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                        </svg>
                        Browse Full Catalog
                    </a>
                    ${this.searchQuery ? '<button class="search-reset-btn" onclick="catalogueManager.clearSearch()">Clear Search</button>' : ''}
                </div>
            </div>
        `;
    }

    initializeCategoryFromURL() {
        const hash = window.location.hash.substring(1);
        if (hash && this.categories.find(c => c.id === hash)) {
            const tab = document.querySelector(`[data-category="${hash}"]`);
            if (tab) this.handleCategoryClick(tab);
        }
    }

    updateURL() {
        const url = this.currentCategory !== 'all' ? `#${this.currentCategory}` : window.location.pathname;
        history.replaceState(null, null, url);
    }

    clearSearch() {
        const input = document.getElementById('catalogueSearch');
        if (input) {
            input.value = '';
            this.searchQuery = '';
            this.filterProducts();
        }
    }

    destroy() {
        clearTimeout(this.searchTimeout);
        this.imageObserver?.disconnect();
        this.stickyTabsObserver?.disconnect();
    }
}

// Image Viewer Functions (optimized)
window.openImageViewer = function (imgElement, name, price) {
    const viewer = document.getElementById('imageViewer');
    const viewerImg = document.getElementById('viewerImage');
    const viewerTitle = document.getElementById('viewerTitle');
    const viewerPrice = document.getElementById('viewerPrice');

    if (!viewer || !viewerImg) return;

    viewerImg.src = imgElement.src || imgElement.dataset.src;
    viewerTitle.textContent = name;
    viewerPrice.textContent = price;

    requestAnimationFrame(() => {
        viewer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
};

window.closeImageViewer = function () {
    const viewer = document.getElementById('imageViewer');
    if (!viewer) return;

    viewer.classList.remove('active');
    document.body.style.overflow = '';
};

// Initialize
let catalogueManager;

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('catalogueGrid')) {
        catalogueManager = new CatalogueManager();
        catalogueManager.init();
    }
});

window.addEventListener('beforeunload', () => catalogueManager?.destroy());

// Global tracking function
window.trackCatalogClick = (source, term = '') => {
    if (typeof trackWhatsAppClick === 'function') {
        trackWhatsAppClick(`catalog_${source}`, term);
    }
};