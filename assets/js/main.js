// Khal Bespoke Shoemaking Website JavaScript - Complete with Category System
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setTimeout(initializeCategoryFromURL, 100);
});

// Configuration
const CONFIG = {
    whatsapp: {
        businessNumber: '2348147994796',
        messages: {
            default: 'Hello Khal Designs! I am interested in your bespoke shoes.',
            order: 'Hello! I would like to order the {SHOE_NAME}. Could you please provide more details about customization?',
            apprenticeship: 'Hello Khal Designs! I am interested in your apprenticeship program. I would like to know more about the enrollment process and program details.'
        }
    },
    email: {
        address: 'vezenachukwu@gmail.com',
        subject: 'Apprenticeship Application - Khal Designs'
    }
};

// Main initialization
function initializeWebsite() {
    setupEventListeners();
    initAnimations();
    initMobileOptimizations();
    setActiveNavItem();
    initCategoryTabs();
    setTimeout(initWhatsAppIntegration, 1000);
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

    // Enhanced search functionality that works with categories
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
        tab.addEventListener('click', function() {
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
            const shouldShow = category === 'all' || cardCategory === category;
            
            if (shouldShow) {
                card.classList.remove('hidden');
                card.classList.add('visible');
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
                card.style.display = 'none';
            }
        });
        
        // Handle empty state
        if (visibleCount === 0 && category !== 'all') {
            emptyState.style.display = 'block';
            catalogueGrid.style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            catalogueGrid.style.display = 'grid';
        }
        
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

function updateActiveTab(activeTab) {
    // Remove active class from all tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    activeTab.classList.add('active');
}

// Enhanced search functionality that works with categories
function handleCatalogueSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    const shoeCards = document.querySelectorAll('.shoe-card');
    const emptyState = document.getElementById('categoryEmptyState');
    const catalogueGrid = document.getElementById('catalogueGrid');
    const activeCategory = document.querySelector('.category-tab.active')?.dataset.category || 'all';
    
    let visibleCount = 0;
    
    shoeCards.forEach(card => {
        const shoeName = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const shoeDescription = card.querySelector('.shoe-description')?.textContent.toLowerCase() || '';
        const cardCategory = card.dataset.category;
        
        // Check both category and search term
        const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
        const matchesSearch = searchTerm === '' || shoeName.includes(searchTerm) || shoeDescription.includes(searchTerm);
        
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
    
    // Handle no results
    updateEmptyState(visibleCount, searchTerm, activeCategory);
}

function updateEmptyState(visibleCount, searchTerm, activeCategory) {
    const emptyState = document.getElementById('categoryEmptyState');
    const emptyStateContent = emptyState.querySelector('.empty-state-content');
    
    if (visibleCount === 0) {
        let message = '';
        if (searchTerm && activeCategory !== 'all') {
            message = `<h3>No results found</h3><p>No shoes found matching "${searchTerm}" in the selected category. Try different keywords or select another category.</p>`;
        } else if (searchTerm) {
            message = `<h3>No results found</h3><p>No shoes found matching "${searchTerm}". Try different keywords.</p>`;
        } else {
            message = '<h3>No shoes found</h3><p>No shoes available in this category at the moment.</p>';
        }
        
        emptyStateContent.innerHTML = message;
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
    }
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

function updateOrderButtons() {
    const orderButtons = document.querySelectorAll('.order-button');
    
    orderButtons.forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        newButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const shoeCard = this.closest('.shoe-card');
            const shoeName = shoeCard?.querySelector('h3')?.textContent || 'Selected Shoe';
            const shoePrice = shoeCard?.querySelector('.shoe-price')?.textContent || '';
            const shoeCategory = shoeCard?.dataset.category || '';
            
            const message = CONFIG.whatsapp.messages.order.replace('{SHOE_NAME}', shoeName);
            const categoryText = shoeCategory ? ` (Category: ${formatCategoryName(shoeCategory)})` : '';
            const fullMessage = shoePrice ? `${message} (Price: ${shoePrice})${categoryText}` : message + categoryText;
            
            // Loading state
            const originalText = this.textContent;
            this.textContent = 'Redirecting...';
            this.disabled = true;
            
            setTimeout(() => {
                window.open(generateWhatsAppURL(fullMessage), '_blank');
                this.textContent = originalText;
                this.disabled = false;
                trackWhatsAppClick('order_button', shoeName, shoeCategory);
            }, 500);
        });
    });
}

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
            <a href="${generateWhatsAppURL('Hello Khal Designs! I found you through your website.')}" target="_blank" rel="noopener noreferrer" class="whatsapp" aria-label="Chat with us on WhatsApp">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
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
window.addEventListener('load', function() {
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
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
});

// Expose utility functions globally for backward compatibility
window.orderShoe = function(shoeName) {
    const message = CONFIG.whatsapp.messages.order.replace('{SHOE_NAME}', shoeName);
    window.open(generateWhatsAppURL(message), '_blank');
    trackWhatsAppClick('order_function', shoeName);
};