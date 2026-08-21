/**
 * Announcement Ticker Functionality
 * Thirukoshtiyur Temple Website
 * 
 * Handles scrolling announcements
 */

class AnnouncementTicker {
  constructor() {
    this.track = document.querySelector('.announcement-track');
    this.items = document.querySelectorAll('.announcement-item');
    
    if (this.track && this.items.length > 0) {
      this.init();
    }
  }
  
  init() {
    // Duplicate items for seamless loop
    this.duplicateItems();
    
    // Pause on hover
    this.setupHoverPause();
  }
  
  duplicateItems() {
    // Clone all items and append to create seamless scroll
    const clone = this.track.cloneNode(true);
    this.track.parentElement.appendChild(clone);
  }
  
  setupHoverPause() {
    this.track.addEventListener('mouseenter', () => {
      this.track.style.animationPlayState = 'paused';
    });
    
    this.track.addEventListener('mouseleave', () => {
      this.track.style.animationPlayState = 'running';
    });
  }
}

// Alternative: Carousel-style announcements
class AnnouncementCarousel {
  constructor() {
    this.items = document.querySelectorAll('.announcement-carousel-item');
    this.prevButton = document.querySelector('.announcement-nav-prev');
    this.nextButton = document.querySelector('.announcement-nav-next');
    
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    
    if (this.items.length > 0) {
      this.init();
    }
  }
  
  init() {
    this.showItem(0);
    this.setupNavigation();
    this.startAutoPlay();
  }
  
  showItem(index) {
    this.items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    this.currentIndex = index;
  }
  
  setupNavigation() {
    if (this.prevButton) {
      this.prevButton.addEventListener('click', () => {
        this.showPrevious();
        this.resetAutoPlay();
      });
    }
    
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => {
        this.showNext();
        this.resetAutoPlay();
      });
    }
  }
  
  showPrevious() {
    const newIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.showItem(newIndex);
  }
  
  showNext() {
    const newIndex = (this.currentIndex + 1) % this.items.length;
    this.showItem(newIndex);
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.showNext();
    }, 5000); // Change every 5 seconds
  }
  
  resetAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize ticker if it exists
  if (document.querySelector('.announcement-track')) {
    new AnnouncementTicker();
  }
  
  // Initialize carousel if it exists
  if (document.querySelector('.announcement-carousel')) {
    new AnnouncementCarousel();
  }
});

export { AnnouncementTicker, AnnouncementCarousel };
