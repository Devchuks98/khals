// Khal Bespoke Shoemaking Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// WhatsApp Business Configuration
const WHATSAPP_CONFIG = {
    businessNumber: '2348147994796', 
    defaultMessage: 'Hello Khal Designs! I am interested in your bespoke shoes.',
    orderMessage: 'Hello! I would like to order the {SHOE_NAME}. Could you please provide more details about customization options and pricing?'
};

// Main initialization function
function initializeWebsite() {
    setupEventListeners();
    initAnimations();
    initMobileOptimizations();
    setActiveNavItem();
    initWhatsAppIntegration();
}

// Initialize WhatsApp functionality
function initWhatsAppIntegration() {
    // Create floating WhatsApp button if it doesn't exist
    if (!document.querySelector('.whatsapp-float')) {
        createFloatingWhatsAppButton();
    }
    
    // Update existing order buttons
    updateOrderButtons();
    
    // Update social media links
    updateSocialMediaLinks();
}

// Create floating WhatsApp button
function createFloatingWhatsAppButton() {
    const whatsappButton = document.createElement('a');
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.href = generateWhatsAppURL(WHATSAPP_CONFIG.defaultMessage);
    whatsappButton.target = '_blank';
    whatsappButton.rel = 'noopener noreferrer';
    whatsappButton.setAttribute('aria-label', 'Chat with us on WhatsApp');
    
    // WhatsApp SVG icon
    whatsappButton.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
    `;
    
    document.body.appendChild(whatsappButton);
    
    // Add click tracking
    whatsappButton.addEventListener('click', function() {
        trackWhatsAppClick('floating_button');
    });
}

// Update order buttons to redirect to WhatsApp
function updateOrderButtons() {
    const orderButtons = document.querySelectorAll('.order-button');
    
    orderButtons.forEach(button => {
        // Remove existing event listeners by cloning
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        newButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const shoeCard = this.closest('.shoe-card');
            const shoeName = shoeCard ? shoeCard.querySelector('h3').textContent : 'Selected Shoe';
            const shoePrice = shoeCard ? shoeCard.querySelector('.shoe-price').textContent : '';
            
            const message = WHATSAPP_CONFIG.orderMessage.replace('{SHOE_NAME}', shoeName);
            const fullMessage = shoePrice ? 
                `${message} (Price: ${shoePrice})` : 
                message;
            
            // Show loading state
            const originalText = this.textContent;
            this.textContent = 'Redirecting...';
            this.disabled = true;
            
            // Small delay for UX smoothness
            setTimeout(() => {
                window.open(generateWhatsAppURL(fullMessage), '_blank');
                
                // Reset button state
                this.textContent = originalText;
                this.disabled = false;
                
                // Track the order attempt
                trackWhatsAppClick('order_button', shoeName);
            }, 500);
        });
    });
}

// Update social media links with real brand icons (Facebook, Instagram, WhatsApp only)
function updateSocialMediaLinks() {
    const socialLinksContainers = document.querySelectorAll('.social-links');
    
    socialLinksContainers.forEach(container => {
        container.innerHTML = `
            <a href="https://web.facebook.com/khal.designs" target="_blank" rel="noopener noreferrer" class="facebook" aria-label="Follow us on Facebook">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.847-.374 1.282v1.767h3.053L15.22 15.71h-2.53v7.98H9.101z"/>
                </svg>
            </a>
            
            <a href="https://instagram.com/khal.designs" target="_blank" rel="noopener noreferrer" class="instagram" aria-label="Follow us on Instagram">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"/>
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

// Generate WhatsApp URL
function generateWhatsAppURL(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_CONFIG.businessNumber}?text=${encodedMessage}`;
}

// Track WhatsApp interactions (for analytics)
function trackWhatsAppClick(source, shoeName = '') {
    // You can integrate with Google Analytics or other tracking services here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'source': source,
            'shoe_name': shoeName
        });
    }
    
    // Console log for debugging
    console.log(`WhatsApp clicked from: ${source}`, shoeName ? `for shoe: ${shoeName}` : '');
}

// Event listeners setup
function setupEventListeners() {
    // Mobile menu functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        const navLinks = document.getElementById('navLinks');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (nav && !nav.contains(event.target) && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (mobileMenu) mobileMenu.classList.remove('active');
        }
    });

    // Newsletter subscription
    const newsletterButton = document.querySelector('.newsletter-form button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', handleNewsletterSubscription);
    }

    // Scroll effects
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            handleHeaderScroll();
            animateOnScroll();
        }, 16); // ~60fps
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Catalogue search functionality
    const catalogueSearch = document.getElementById('catalogueSearch');
    if (catalogueSearch) {
        catalogueSearch.addEventListener('input', debounce(handleCatalogueSearch, 300));
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (navLinks && mobileMenu) {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Newsletter subscription handler
function handleNewsletterSubscription() {
    const emailInput = document.getElementById('newsletterEmail');
    if (!emailInput) return;
    
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && emailRegex.test(email)) {
        // Show success message
        showNotification('Thank you! You have been subscribed to our newsletter.', 'success');
        emailInput.value = '';
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
}

// Updated orderShoe function for WhatsApp integration
function orderShoe(shoeName) {
    const message = WHATSAPP_CONFIG.orderMessage.replace('{SHOE_NAME}', shoeName);
    window.open(generateWhatsAppURL(message), '_blank');
    trackWhatsAppClick('order_function', shoeName);
}

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validate form data
    if (!validateContactForm(data)) {
        return;
    }
    
    const submitButton = event.target.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    // Update button state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        const message = `Thank you ${data.name}! Your message has been received. We will get back to you within 24 hours regarding your ${data.service} inquiry.`;
        showNotification(message, 'success');
        
        event.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Form validation
function validateContactForm(data) {
    const requiredFields = ['name', 'email', 'service', 'message'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showNotification(`Please fill in the ${field} field.`, 'error');
            return false;
        }
    }
    
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

// Catalogue search handler
function handleCatalogueSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    const shoeCards = document.querySelectorAll('.shoe-card');
    let visibleCount = 0;
    
    shoeCards.forEach(card => {
        const shoeName = card.querySelector('h3').textContent.toLowerCase();
        const shoeDescription = card.querySelector('.shoe-description').textContent.toLowerCase();
        
        if (searchTerm === '' || shoeName.includes(searchTerm) || shoeDescription.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show no results message if needed
    const existingMessage = document.querySelector('.no-results-message');
    if (visibleCount === 0 && searchTerm !== '') {
        if (!existingMessage) {
            const message = document.createElement('div');
            message.className = 'no-results-message';
            message.innerHTML = '<p>No shoes found matching your search. Try different keywords.</p>';
            message.style.textAlign = 'center';
            message.style.padding = '2rem';
            message.style.color = 'var(--text-light)';
            
            const catalogueGrid = document.querySelector('.catalogue-grid');
            if (catalogueGrid) {
                catalogueGrid.parentNode.insertBefore(message, catalogueGrid.nextSibling);
            }
        }
    } else if (existingMessage) {
        existingMessage.remove();
    }
}

// Header scroll effects
function handleHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(74, 44, 10, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--dark-color), var(--primary-color))';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
}

// Scroll animations
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

// Initialize animations
function initAnimations() {
    // Initial animation check
    animateOnScroll();
    
    // Intersection Observer for better performance
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        // Observe images with a delay
        setTimeout(() => {
            document.querySelectorAll('.shoe-image, .preview-image').forEach(img => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                imageObserver.observe(img);
            });
        }, 500);
    }
    
    // Home page typewriter effect
    if (isHomePage() && window.innerWidth > 768) {
        initTypewriterEffect();
    }
}

// Typewriter effect for home page
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
    // Handle viewport scaling for mobile inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', handleMobileInputFocus);
        input.addEventListener('blur', handleMobileInputBlur);
    });

    // Touch effects for interactive elements
    const interactiveElements = document.querySelectorAll(
        'button, .cta-button, .nav-links a, .order-button, .submit-button'
    );
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', handleTouchStart, { passive: true });
        element.addEventListener('touchend', handleTouchEnd, { passive: true });
    });

    // Orientation change handling
    window.addEventListener('orientationchange', handleOrientationChange);
}

// Mobile input focus handler
function handleMobileInputFocus() {
    if (window.innerWidth < 768) {
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
    }
}

// Mobile input blur handler
function handleMobileInputBlur() {
    if (window.innerWidth < 768) {
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    }
}

// Touch start handler
function handleTouchStart() {
    this.style.transform = 'scale(0.95)';
}

// Touch end handler
function handleTouchEnd() {
    const self = this;
    setTimeout(() => {
        self.style.transform = '';
    }, 150);
}

// Orientation change handler
function handleOrientationChange() {
    setTimeout(() => {
        window.scrollTo(0, 0);
        animateOnScroll();
    }, 100);
}

// Set active navigation item
function setActiveNavItem() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Handle different path scenarios
        if (currentPage === 'index' || currentPage === '') {
            if (href === 'index.html') {
                link.classList.add('active');
            }
        } else {
            // For pages in the pages folder
            if (href === `pages/${currentPage}.html` || href === `${currentPage}.html`) {
                link.classList.add('active');
            }
        }
    });
}

// Utility functions
function getCurrentPage() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop().split('.')[0];
    return fileName || 'index';
}

function isHomePage() {
    const currentPage = getCurrentPage();
    return currentPage === 'index' || currentPage === '';
}

// Debounce function
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
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
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

// Error handling
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
});

// Performance optimization
window.addEventListener('load', function() {
    // Preload critical images
    const criticalImages = [
        './assets/images/shoes/khal.jpg',
        './assets/images/shoes/khal1.jpg',
        './assets/images/shoes/khal5.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Initialize WhatsApp integration after page load
    setTimeout(() => {
        initWhatsAppIntegration();
    }, 1000);
});

// Additional utility functions for WhatsApp integration
function isValidWhatsAppNumber(number) {
    // Basic validation for international phone numbers
    const cleanNumber = number.replace(/\D/g, '');
    return cleanNumber.length >= 10 && cleanNumber.length <= 15;
}

// Smooth scroll to contact section when needed
function scrollToContact() {
    const contactSection = document.querySelector('.contact-form');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle offline/online status for better UX
window.addEventListener('online', function() {
    showNotification('Internet connection restored', 'success');
});

window.addEventListener('offline', function() {
    showNotification('Internet connection lost. Some features may not work properly.', 'error');
});

// Update configuration based on page context
function updateWhatsAppConfig() {
    const currentPage = getCurrentPage();
    
    if (currentPage === 'catalogue') {
        WHATSAPP_CONFIG.defaultMessage = 'Hello Khal Designs! I am browsing your catalogue and interested in your bespoke shoes.';
    } else if (currentPage === 'services') {
        WHATSAPP_CONFIG.defaultMessage = 'Hello Khal Designs! I would like to know more about your services.';
    } else if (currentPage === 'apprenticeship') {
        WHATSAPP_CONFIG.defaultMessage = 'Hello Khal Designs! I am interested in your apprenticeship program.';
    } else if (currentPage === 'contact') {
        WHATSAPP_CONFIG.defaultMessage = 'Hello Khal Designs! I would like to get in touch with you.';
    }
}

// Initialize page-specific configurations
document.addEventListener('DOMContentLoaded', function() {
    updateWhatsAppConfig();
});