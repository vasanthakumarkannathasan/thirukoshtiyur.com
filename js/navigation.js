/**
 * Navigation Functionality
 * Thirukoshtiyur Temple Website
 * 
 * Handles mobile menu, scroll effects, and active navigation
 */

class Navigation {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.mobileToggle = document.querySelector('.mobile-menu-toggle');
    this.mobileNav = document.querySelector('.main-nav');
    this.mobileOverlay = document.querySelector('.mobile-overlay');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    this.init();
  }
  
  init() {
    this.setupMobileMenu();
    this.setupScrollEffect();
    this.setupActiveNavigation();
    this.setupSmoothScroll();
  }
  
  // Mobile Menu
  setupMobileMenu() {
    if (!this.mobileToggle) return;
    
    this.mobileToggle.addEventListener('click', () => {
      this.toggleMobileMenu();
    });
    
    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    }
    
    // Close menu when clicking nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
      }
    });
  }
  
  toggleMobileMenu() {
    this.mobileToggle.classList.toggle('active');
    this.mobileNav.classList.toggle('active');
    this.mobileOverlay.classList.toggle('active');
    document.body.style.overflow = this.mobileNav.classList.contains('active') ? 'hidden' : '';
  }
  
  closeMobileMenu() {
    this.mobileToggle.classList.remove('active');
    this.mobileNav.classList.remove('active');
    this.mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Scroll Effect
  setupScrollEffect() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add shadow when scrolled
      if (currentScroll > 50) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // Active Navigation
  setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      
      this.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }
  
  // Smooth Scroll
  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          
          if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});

export default Navigation;
