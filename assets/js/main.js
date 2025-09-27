// Main.js - Core Website JavaScript (Optimized & Modularized)
// =================================================================

// Core Configuration
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
    },
    performance: {
        trackingEnabled: true,
        animationDelay: 100,
        scrollThrottle: 16
    }
};

// Core State Management
class WebsiteCore {
    constructor() {
        this.isInitialized = false;
        this.currentPage = this.getCurrentPage();
        this.isMobile = window.innerWidth < 768;
        this.observers = new Map();
    }

    // Initialize core functionality
    init() {
        if (this.isInitialized) return;

        this.setupEventListeners();
        this.setActiveNavItem();

        // Staggered initialization for better performance
        setTimeout(() => this.initAnimations(), CONFIG.performance.animationDelay);
        setTimeout(() => this.initMobileOptimizations(), 200);
        setTimeout(() => this.initWhatsAppIntegration(), 300);
        setTimeout(() => this.initImageOptimizations(), 400);

        this.isInitialized = true;
        console.log('✅ Website core initialized successfully');
    }

    // Setup core event listeners
    setupEventListeners() {
        // Mobile menu
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            const nav = document.querySelector('nav');
            const navLinks = document.getElementById('navLinks');
            const mobileMenu = document.querySelector('.mobile-menu');

            if (nav && !nav.contains(event.target) && navLinks?.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu?.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Optimized scroll handling with throttling
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                this.handleHeaderScroll();
                this.animateOnScroll();
            }, CONFIG.performance.scrollThrottle);
        }, { passive: true });

        // Orientation change handling
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.isMobile = window.innerWidth < 768;
                window.scrollTo(0, 0);
                this.animateOnScroll();
            }, 100);
        });

        // Connection status
        window.addEventListener('online', () => this.showNotification('Connection restored', 'success'));
        window.addEventListener('offline', () => this.showNotification('Connection lost. Some features may not work properly.', 'error'));
    }

    // Mobile menu functionality
    toggleMobileMenu() {
        const navLinks = document.getElementById('navLinks');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (navLinks && mobileMenu) {
            const isActive = navLinks.classList.contains('active');

            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = isActive ? '' : 'hidden';
        }
    }

    // Header scroll effects with performance optimization
    handleHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;

        const scrolled = window.scrollY > 100;

        if (scrolled) {
            header.style.cssText = `
                background: rgba(74, 44, 10, 0.95);
                backdrop-filter: blur(10px);
                box-shadow: 0 2px 20px rgba(0,0,0,0.4);
                transition: all 0.3s ease;
            `;
        } else {
            header.style.cssText = `
                background: linear-gradient(135deg, var(--dark-color), var(--primary-color));
                backdrop-filter: none;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
            `;
        }
    }

    // Enhanced animation system
    initAnimations() {
        this.animateOnScroll();
        this.initIntersectionObserver();

        if (this.isHomePage() && !this.isMobile) {
            setTimeout(() => this.initTypewriterEffect(), 1500);
        }
    }

    // Intersection Observer for better performance
    initIntersectionObserver() {
        if (!('IntersectionObserver' in window)) return;

        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '100px',
            threshold: 0.1
        });

        // Observe elements with slight delay for better performance
        setTimeout(() => {
            document.querySelectorAll('.animate-on-scroll:not(.animated)').forEach(el => {
                animationObserver.observe(el);
            });
        }, 500);

        this.observers.set('animation', animationObserver);
    }

    // Optimized scroll animation
    animateOnScroll() {
        if (this.observers.has('animation')) return; // Use intersection observer instead

        const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
        const windowHeight = window.innerHeight;
        const animationOffset = this.isMobile ? 100 : 150;

        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - animationOffset) {
                    element.classList.add('animated');
                }
            });
        });
    }

    // Typewriter effect for hero text
    initTypewriterEffect() {
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
    }

    // Mobile optimizations
    initMobileOptimizations() {
        if (!this.isMobile) return;

        // Input focus handling for mobile
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', this.handleMobileInputFocus);
            input.addEventListener('blur', this.handleMobileInputBlur);
        });

        // Touch feedback for interactive elements
        const interactiveElements = document.querySelectorAll('button, .cta-button, .nav-links a, .order-button');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', this.handleTouchStart, { passive: true });
            element.addEventListener('touchend', this.handleTouchEnd, { passive: true });
        });
    }

    handleMobileInputFocus() {
        const viewport = document.querySelector('meta[name=viewport]');
        viewport?.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    handleMobileInputBlur() {
        const viewport = document.querySelector('meta[name=viewport]');
        viewport?.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }

    handleTouchStart() {
        this.style.transform = 'scale(0.95)';
        this.style.transition = 'transform 0.1s ease';
    }

    handleTouchEnd() {
        const self = this;
        setTimeout(() => {
            self.style.transform = '';
        }, 150);
    }

    // WhatsApp integration
    initWhatsAppIntegration() {
        this.createFloatingWhatsAppButton();
        this.updateOrderButtons();
        this.updateSocialMediaLinks();
        this.setupApprenticeshipButtons();
    }

    // Floating WhatsApp button
    createFloatingWhatsAppButton() {
        if (document.querySelector('.whatsapp-float')) return;

        const whatsappButton = document.createElement('a');
        whatsappButton.className = 'whatsapp-float';
        whatsappButton.href = this.generateWhatsAppURL(this.getContextualMessage());
        whatsappButton.target = '_blank';
        whatsappButton.rel = 'noopener noreferrer';
        whatsappButton.setAttribute('aria-label', 'Chat with us on WhatsApp');

        whatsappButton.innerHTML = `
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
        `;

        document.body.appendChild(whatsappButton);

        whatsappButton.addEventListener('click', () => this.trackWhatsAppClick('floating_button'));
    }

    // Enhanced Order Button System
    updateOrderButtons() {
        // Use event delegation for better performance
        document.addEventListener('click', (e) => {
            if (!e.target.classList.contains('order-button')) return;

            e.preventDefault();
            const button = e.target;
            const shoeCard = button.closest('.shoe-card');

            const shoeName = button.dataset.shoe || shoeCard?.querySelector('h3')?.textContent || 'Selected Shoe';
            const shoePrice = button.dataset.price || shoeCard?.querySelector('.shoe-price')?.textContent || '';
            const shoeCategory = button.dataset.category || shoeCard?.dataset.category || '';

            this.showOrderOptionsModal(shoeName, shoePrice, shoeCategory);
        });
    }

    // Order options modal
    showOrderOptionsModal(shoeName, shoePrice, shoeCategory) {
        // Remove existing modal
        const existingModal = document.querySelector('.order-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.className = 'order-modal';
        modal.innerHTML = this.createOrderModalHTML(shoeName, shoePrice, shoeCategory);

        document.body.appendChild(modal);

        // Add animation and event listeners
        setTimeout(() => modal.classList.add('active'), 10);
        modal.querySelector('.modal-overlay').addEventListener('click', this.closeOrderModal);

        // Setup modal buttons
        modal.querySelector('.whatsapp-option').addEventListener('click', () =>
            this.orderViaWhatsApp(shoeName, shoePrice, shoeCategory));
        modal.querySelector('.email-option').addEventListener('click', () =>
            this.orderViaEmail(shoeName, shoePrice, shoeCategory));
    }

    createOrderModalHTML(shoeName, shoePrice, shoeCategory) {
        return `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close" onclick="closeOrderModal()">&times;</button>
                <div class="modal-header">
                    <h3>Order ${shoeName}</h3>
                    ${shoePrice ? `<p class="modal-price">${shoePrice}</p>` : ''}
                    ${shoeCategory ? `<span class="modal-category">${this.formatCategoryName(shoeCategory)}</span>` : ''}
                </div>
                <div class="modal-body">
                    <p>Choose your preferred contact method:</p>
                    <div class="order-options">
                        <button class="order-option whatsapp-option">
                            <svg viewBox="0 0 24 24" fill="currentColor" class="option-icon">
                                <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                            </svg>
                            <div class="option-text">
                                <strong>WhatsApp</strong>
                                <small>Instant messaging & quick response</small>
                            </div>
                        </button>
                        
                        <button class="order-option email-option">
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
                        <p><strong>Note:</strong> Both methods will provide detailed product information and customization options.</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Order via WhatsApp
    orderViaWhatsApp(shoeName, shoePrice, shoeCategory) {
        const message = CONFIG.whatsapp.messages.order.replace('{SHOE_NAME}', shoeName);
        const categoryText = shoeCategory ? ` (Category: ${this.formatCategoryName(shoeCategory)})` : '';
        const fullMessage = shoePrice ? `${message} (Price: ${shoePrice})${categoryText}` : message + categoryText;

        this.showOrderProcessing('WhatsApp');

        setTimeout(() => {
            window.open(this.generateWhatsAppURL(fullMessage), '_blank');
            this.closeOrderModal();
            this.trackWhatsAppClick('order_modal', shoeName, shoeCategory);
            this.showNotification('Redirected to WhatsApp. Your inquiry has been prepared!', 'success');
        }, 800);
    }

    // Order via Email
    orderViaEmail(shoeName, shoePrice, shoeCategory) {
        const subject = encodeURIComponent(`Order Inquiry - ${shoeName}`);
        const categoryText = shoeCategory ? `\nCategory: ${this.formatCategoryName(shoeCategory)}` : '';
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

        this.showOrderProcessing('Email');

        setTimeout(() => {
            try {
                window.location.href = mailtoLink;
                this.closeOrderModal();
                this.trackEmailClick('order_modal', shoeName);
                this.showNotification('Email client opened. Please complete and send your inquiry!', 'success');
            } catch (error) {
                this.closeOrderModal();
                this.showNotification(`Please send your inquiry to: ${CONFIG.email.address}`, 'info');
            }
        }, 800);
    }

    // Show processing state
    showOrderProcessing(method) {
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

    // Close order modal
    closeOrderModal() {
        const modal = document.querySelector('.order-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }

    // Setup apprenticeship buttons
    setupApprenticeshipButtons() {
        // WhatsApp application button
        const whatsappApplyBtn = document.querySelector('.whatsapp-apply-btn');
        if (whatsappApplyBtn) {
            whatsappApplyBtn.addEventListener('click', () => {
                const message = CONFIG.whatsapp.messages.apprenticeship;
                window.open(this.generateWhatsAppURL(message), '_blank');
                this.trackWhatsAppClick('apprenticeship_whatsapp');
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

                try {
                    window.location.href = mailtoLink;
                    this.trackEmailClick('apprenticeship_email');
                } catch (error) {
                    this.showNotification(`Please send an email to: ${CONFIG.email.address}`, 'info');
                }
            });
        }
    }

    // Update social media links
    updateSocialMediaLinks() {
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
                <a href="${this.generateWhatsAppURL('Hello Khal Designs! I found you through your website.')}" target="_blank" rel="noopener noreferrer" class="whatsapp" aria-label="Chat with us on WhatsApp" onclick="trackWhatsAppClick('footer_social')">
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

    // Image optimizations
    initImageOptimizations() {
        this.initImageLazyLoading();
        this.initImageErrorHandling();
        this.initImageViewerEnhancements();
    }

    // Lazy loading with Intersection Observer
    initImageLazyLoading() {
        if (!('IntersectionObserver' in window)) return;

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Load high-quality image if data-src exists
                    if (img.dataset.src && img.dataset.src !== img.src) {
                        img.src = img.dataset.src;
                    }

                    img.classList.add('loaded');
                    img.style.opacity = '1';
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });

        // Observe images with slight delay
        setTimeout(() => {
            document.querySelectorAll('.shoe-image, .preview-image').forEach(img => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                imageObserver.observe(img);
            });
        }, 500);

        this.observers.set('image', imageObserver);
    }

    // Image error handling
    initImageErrorHandling() {
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                this.handleImageError(e.target);
            }
        }, true);
    }

    handleImageError(imageElement) {
        imageElement.style.cssText = `
            background: linear-gradient(135deg, var(--light-color), var(--accent-color));
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 200px;
        `;
        imageElement.innerHTML = '<span style="color: var(--text-light); font-size: 0.9rem;">Image not available</span>';
        console.warn('Image failed to load:', imageElement.src);
    }

    // Enhanced image viewer
    initImageViewerEnhancements() {
        // Keyboard navigation
        document.addEventListener('keydown', (event) => {
            const viewer = document.getElementById('imageViewer');
            if (!viewer?.classList.contains('active')) return;

            switch (event.key) {
                case 'Escape':
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    this.closeImageViewer();
                    break;
            }
        });

        // Touch gestures for mobile
        const viewer = document.getElementById('imageViewer');
        if (viewer && this.isMobile) {
            let touchStartY = 0;

            viewer.addEventListener('touchstart', (event) => {
                touchStartY = event.changedTouches[0].screenY;
            }, { passive: true });

            viewer.addEventListener('touchend', (event) => {
                const touchEndY = event.changedTouches[0].screenY;
                // Swipe down to close (minimum 100px swipe)
                if (touchStartY - touchEndY < -100) {
                    this.closeImageViewer();
                }
            }, { passive: true });
        }
    }

    // Set active navigation item
    setActiveNavItem() {
        const currentPage = this.currentPage;
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            const shouldBeActive = (
                (currentPage === 'index' || currentPage === '') && href === '../index.html' ||
                href === `${currentPage}.html` ||
                href === `../${currentPage === 'index' ? 'index.html' : `pages/${currentPage}.html`}` ||
                href === '../' && (currentPage === 'index' || currentPage === '')
            );

            if (shouldBeActive) {
                link.classList.add('active');
            }
        });
    }

    // Utility methods
    getCurrentPage() {
        const path = window.location.pathname;
        const fileName = path.split('/').pop().split('.')[0];
        return fileName || 'index';
    }

    isHomePage() {
        return this.currentPage === 'index' || this.currentPage === '';
    }

    formatCategoryName(category) {
        // Basic formatting - can be enhanced with a mapping object
        return category.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    generateWhatsAppURL(message) {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${CONFIG.whatsapp.businessNumber}?text=${encodedMessage}`;
    }

    getContextualMessage() {
        const messages = CONFIG.whatsapp.messages;

        switch (this.currentPage) {
            case 'catalogue':
                return 'Hello Khal Designs! I am browsing your catalogue and interested in your bespoke shoes.';
            case 'apprenticeship':
                return messages.apprenticeship;
            default:
                return messages.default;
        }
    }

    // Notification system
    showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(n => n.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        this.addNotificationStyles();
        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) notification.remove();
        }, 5000);
    }

    addNotificationStyles() {
        if (document.querySelector('#notification-styles')) return;

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
            
            .notification-success { border-left: 4px solid #4CAF50; }
            .notification-error { border-left: 4px solid #f44336; }
            .notification-info { border-left: 4px solid var(--accent-color); }
            
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
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
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

    // Tracking functions
    trackWhatsAppClick(source, shoeName = '', shoeCategory = '') {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                'source': source,
                'shoe_name': shoeName,
                'category': shoeCategory
            });
        }
        console.log(`WhatsApp clicked from: ${source}`, shoeName ? `for shoe: ${shoeName}` : '');
    }

    trackEmailClick(source, shoeName = '') {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_click', {
                'source': source,
                'shoe_name': shoeName
            });
        }
        console.log(`Email clicked from: ${source}`, shoeName ? `for shoe: ${shoeName}` : '');
    }

    // Cleanup method for memory management
    destroy() {
        this.observers.forEach((observer, key) => {
            observer.disconnect();
        });
        this.observers.clear();
        this.isInitialized = false;
    }
}

// Initialize core website functionality
let websiteCore;

document.addEventListener('DOMContentLoaded', function () {
    websiteCore = new WebsiteCore();
    websiteCore.init();

    // Performance tracking
    if (CONFIG.performance.trackingEnabled) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`🚀 Page load time: ${loadTime}ms`);

                if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_load_time', {
                        'value': loadTime,
                        'custom_parameter': 'site_performance'
                    });
                }
            }, 100);
        });
    }
});

// Global functions for backward compatibility and onclick handlers
window.CONFIG = CONFIG;

window.openImageViewer = function (imageElement, title, price) {
    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    const viewerTitle = document.getElementById('viewerTitle');
    const viewerPrice = document.getElementById('viewerPrice');

    if (!viewer || !viewerImage) return;

    viewerImage.src = imageElement.src;
    viewerImage.alt = imageElement.alt || title;

    if (viewerTitle) viewerTitle.textContent = title || '';
    if (viewerPrice) viewerPrice.textContent = price || '';

    viewer.classList.add('active');
    viewer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    viewer.focus();

    console.log('Image viewer opened for:', title);
};

window.closeImageViewer = function () {
    const viewer = document.getElementById('imageViewer');
    if (!viewer) return;

    viewer.classList.remove('active');
    setTimeout(() => viewer.style.display = 'none', 300);
    document.body.style.overflow = '';

    console.log('Image viewer closed');
};

window.closeOrderModal = function () {
    if (websiteCore) {
        websiteCore.closeOrderModal();
    }
};

window.trackWhatsAppClick = function (source, shoeName = '', shoeCategory = '') {
    if (websiteCore) {
        websiteCore.trackWhatsAppClick(source, shoeName, shoeCategory);
    }
};

window.trackEmailClick = function (source, shoeName = '') {
    if (websiteCore) {
        websiteCore.trackEmailClick(source, shoeName);
    }
};

// Utility function for ordering (backward compatibility)
window.orderShoe = function (shoeName) {
    const message = CONFIG.whatsapp.messages.order.replace('{SHOE_NAME}', shoeName);
    window.open(websiteCore.generateWhatsAppURL(message), '_blank');
    websiteCore.trackWhatsAppClick('order_function', shoeName);
};

// Error handling
window.addEventListener('error', function (event) {
    console.error('JavaScript error:', event.error);
});

// Expose core functionality for debugging
if (typeof window !== 'undefined') {
    window.websiteCore = websiteCore;
}