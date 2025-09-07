// Khal Bespoke Shoemaking Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    setupEventListeners();
    initAnimations();
    initMobileOptimizations();
    setActiveNavItem();
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

    // Order button handlers
    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const shoeCard = this.closest('.shoe-card');
            const shoeName = shoeCard ? shoeCard.querySelector('h3').textContent : 'Selected Shoe';
            orderShoe(shoeName);
        });
    });
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

// Order shoe functionality
function orderShoe(shoeName) {
    const message = `Thank you for your interest in ${shoeName}! Please contact us through the contact page to discuss customization options, measurements, and delivery timeline.`;
    showNotification(message, 'info');
    
    setTimeout(() => {
        // Check if we're on the index page or a page in the pages folder
        if (window.location.pathname.includes('/pages/')) {
            window.location.href = 'contact.html';
        } else {
            window.location.href = 'pages/contact.html';
        }
    }, 2000);
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
});