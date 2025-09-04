// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        
        if (email) {
            // Here you would typically send the email to your backend
            alert('Thank you for subscribing! We\'ll keep you updated on the latest sociology programs.');
            this.querySelector('.newsletter-input').value = '';
        }
    });
}

// Search Form Enhancement
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

if (searchForm && searchInput) {
    // Add search suggestions (mock data for demo)
    const searchSuggestions = [
        'Harvard University',
        'Stanford University', 
        'University of California Berkeley',
        'Yale University',
        'Columbia University',
        'Princeton University',
        'sociology PhD programs',
        'sociology bachelor programs',
        'sociology master programs',
        'online sociology degrees'
    ];

    // Create suggestions dropdown
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    suggestionsContainer.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
    `;

    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(suggestionsContainer);
    }

    // Search input event listeners
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length > 0) {
            const filteredSuggestions = searchSuggestions.filter(suggestion => 
                suggestion.toLowerCase().includes(query)
            );
            
            if (filteredSuggestions.length > 0) {
                displaySuggestions(filteredSuggestions, query);
            } else {
                hideSuggestions();
            }
        } else {
            hideSuggestions();
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            hideSuggestions();
        }
    });

    function displaySuggestions(suggestions, query) {
        const html = suggestions.slice(0, 5).map(suggestion => {
            const highlighted = suggestion.replace(
                new RegExp(query, 'gi'), 
                match => `<strong>${match}</strong>`
            );
            return `
                <div class="suggestion-item" style="
                    padding: 12px 16px;
                    cursor: pointer;
                    border-bottom: 1px solid #f7fafc;
                    transition: background 0.2s ease;
                " onmouseover="this.style.background='#f7fafc'" 
                   onmouseout="this.style.background='white'">
                    ${highlighted}
                </div>
            `;
        }).join('');
        
        suggestionsContainer.innerHTML = html;
        suggestionsContainer.style.display = 'block';
        
        // Add click handlers to suggestions
        suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', function() {
                searchInput.value = this.textContent;
                hideSuggestions();
                searchForm.submit();
            });
        });
    }

    function hideSuggestions() {
        suggestionsContainer.style.display = 'none';
    }
}

// Scroll-based Navigation Highlighting
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove background on scroll
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.program-card, .category-card, .resource-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// Stats Counter Animation
const statsNumbers = document.querySelectorAll('.stat-number');

const animateNumbers = () => {
    statsNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const updateNumber = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target + suffix;
            }
        };
        
        updateNumber();
    });
};

// Trigger stats animation when hero section is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateNumbers, 500);
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    heroObserver.observe(heroSection);
}

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enhanced Search Functionality
function performSearch(query) {
    // This would typically make an API call to your backend
    // For now, we'll simulate a search
    const encodedQuery = encodeURIComponent(query);
    
    // Show loading state
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        const originalText = searchBtn.textContent;
        searchBtn.textContent = 'Searching...';
        searchBtn.disabled = true;
        
        // Simulate API delay
        setTimeout(() => {
            searchBtn.textContent = originalText;
            searchBtn.disabled = false;
            // Redirect to search results page
            window.location.href = `search.html?q=${encodedQuery}`;
        }, 1000);
    }
}

// Add loading states to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.type !== 'submit') return;
        
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 2000);
    });
});

// Lazy Loading for Images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this error to your analytics/error tracking service
});

// Performance Monitoring
window.addEventListener('load', function() {
    // Measure page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    
    // You could send this data to your analytics service
});

// Accessibility Enhancements
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        if (navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        hideSuggestions();
    }
    
    // Enter key on hamburger menu
    if (e.key === 'Enter' && e.target === hamburger) {
        hamburger.click();
    }
});

// Focus trap for mobile menu
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Apply focus trap to mobile menu when active
if (navMenu) {
    const menuObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (navMenu.classList.contains('active')) {
                    trapFocus(navMenu);
                }
            }
        });
    });
    
    menuObserver.observe(navMenu, { attributes: true });
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('SociologyPrograms.com initialized');
    
    // Any additional initialization code can go here
});
