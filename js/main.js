/**
 * Main JavaScript
 * Thirukoshtiyur Temple Website
 * 
 * Application initialization and global utilities
 */

// Import modules
import Navigation from './navigation.js';
import Gallery from './gallery.js';
import { AnnouncementTicker, AnnouncementCarousel } from './announcement-ticker.js';

// Global App Object
const App = {
  // Configuration
  config: {
    siteName: 'Thirukoshtiyur Temple',
    currentLanguage: 'en'
  },
  
  // Initialize
  init() {
    this.setupLanguageSelector();
    this.setupScrollToTop();
    this.setupLazyLoading();
    this.setupExternalLinks();
    console.log(`${this.config.siteName} - Website Initialized`);
  },
  
  // Language Selector
  setupLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-button');
    
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        this.switchLanguage(lang);
      });
    });
  },
  
  switchLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Store preference
    localStorage.setItem('preferred-language', lang);
    
    // Navigate to language version
    if (lang === 'ta') {
      // Tamil version (future)
      console.log('Tamil version not yet available');
      // window.location.href = '/tamil/';
    } else {
      // English version
      if (window.location.pathname.includes('/tamil/')) {
        window.location.href = '/';
      }
    }
    
    this.config.currentLanguage = lang;
  },
  
  // Scroll to Top Button
  setupScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollButton);
    
    // Style the button
    const style = document.createElement('style');
    style.textContent = `
      .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: var(--color-white);
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-lg);
        z-index: 999;
      }
      .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
      }
      .scroll-to-top:hover {
        background-color: var(--color-primary-dark);
        transform: translateY(-5px);
      }
      @media (max-width: 768px) {
        .scroll-to-top {
          bottom: 20px;
          right: 20px;
          width: 45px;
          height: 45px;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
      } else {
        scrollButton.classList.remove('visible');
      }
    });
    
    // Click handler
    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  },
  
  // Lazy Loading for Images
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            
            if (src) {
              img.src = src;
              img.classList.add('loaded');
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for older browsers
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  },
  
  // External Links
  setupExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  },
  
  // Utility: Format Phone Number
  formatPhone(phone) {
    return phone.replace(/(\d{5})(\d{6})/, '$1-$2');
  },
  
  // Utility: Get Current Year (for copyright)
  getCurrentYear() {
    return new Date().getFullYear();
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  
  // Update copyright year
  const copyrightYear = document.querySelector('.copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = App.getCurrentYear();
  }
});

// Export for use in other modules
export default App;
