/**
 * Gallery Functionality
 * Thirukoshtiyur Temple Website
 * 
 * Photo gallery with lightbox and filtering
 */

class Gallery {
  constructor() {
    this.galleryItems = document.querySelectorAll('.gallery-item');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.lightbox = document.querySelector('.lightbox');
    this.lightboxImage = document.querySelector('.lightbox-image');
    this.lightboxCaption = document.querySelector('.lightbox-caption');
    this.closeButton = document.querySelector('.lightbox-close');
    this.prevButton = document.querySelector('.lightbox-prev');
    this.nextButton = document.querySelector('.lightbox-next');
    
    this.currentIndex = 0;
    this.images = [];
    
    this.init();
  }
  
  init() {
    this.setupGallery();
    this.setupLightbox();
    this.setupFilters();
    this.setupLazyLoading();
  }
  
  // Setup Gallery Items
  setupGallery() {
    this.galleryItems.forEach((item, index) => {
      const img = item.querySelector('.gallery-image');
      const title = item.querySelector('.gallery-title')?.textContent || '';
      
      if (img) {
        this.images.push({
          src: img.src,
          alt: img.alt,
          title: title
        });
        
        item.addEventListener('click', () => {
          this.openLightbox(index);
        });
      }
    });
  }
  
  // Lightbox
  setupLightbox() {
    if (!this.lightbox) return;
    
    // Close button
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.closeLightbox();
      });
    }
    
    // Previous/Next buttons
    if (this.prevButton) {
      this.prevButton.addEventListener('click', () => {
        this.showPreviousImage();
      });
    }
    
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => {
        this.showNextImage();
      });
    }
    
    // Click outside to close
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.closeLightbox();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        this.closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        this.showPreviousImage();
      } else if (e.key === 'ArrowRight') {
        this.showNextImage();
      }
    });
  }
  
  openLightbox(index) {
    this.currentIndex = index;
    this.updateLightboxImage();
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  closeLightbox() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  updateLightboxImage() {
    const image = this.images[this.currentIndex];
    
    if (this.lightboxImage) {
      this.lightboxImage.src = image.src;
      this.lightboxImage.alt = image.alt;
    }
    
    if (this.lightboxCaption) {
      this.lightboxCaption.textContent = image.title || image.alt;
    }
  }
  
  showPreviousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateLightboxImage();
  }
  
  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateLightboxImage();
  }
  
  // Filters
  setupFilters() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter gallery items
        this.filterGallery(filter);
      });
    });
  }
  
  filterGallery(category) {
    this.galleryItems.forEach(item => {
      const itemCategory = item.dataset.category;
      
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  }
  
  // Lazy Loading
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.gallery-grid')) {
    new Gallery();
  }
});

export default Gallery;
