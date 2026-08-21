/**
 * Contact Form Handler
 * Thirukoshtiyur Temple Website
 * 
 * Handles visitor comments/feedback form submission
 */

class ContactForm {
  constructor() {
    this.form = document.getElementById('visitorForm');
    this.submitBtn = document.getElementById('submitBtn');
    this.formMessage = document.getElementById('formMessage');
    
    // Web3Forms Access Key - REPLACE WITH YOUR OWN KEY
    // Get your free access key from: https://web3forms.com
    this.accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';
    
    // Alternative: Use Formspree endpoint
    // this.formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Show loading state
    this.setLoading(true);
    this.hideMessage();

    // Get form data
    const formData = new FormData(this.form);
    
    // Add Web3Forms access key
    formData.append('access_key', this.accessKey);
    
    // Add subject for email
    formData.append('subject', 'New Visitor Feedback - Thirukoshtiyur Temple');
    
    // Add from name
    formData.append('from_name', 'Thirukoshtiyur Temple Website');
    
    // Convert to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        this.showSuccess();
        this.form.reset();
      } else {
        this.showError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.showError('Network error. Please check your connection and try again.');
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(isLoading) {
    if (isLoading) {
      this.submitBtn.disabled = true;
      this.submitBtn.innerHTML = `
        <span class="form-spinner"></span>
        Sending...
      `;
    } else {
      this.submitBtn.disabled = false;
      this.submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
        Send Message
      `;
    }
  }

  showSuccess() {
    this.formMessage.className = 'form-message success show';
    this.formMessage.innerHTML = `
      <strong>🙏 Thank you for your message!</strong><br>
      Your feedback has been received. We appreciate you taking the time to share your experience.
      You will receive a confirmation email shortly.
    `;
    this.scrollToMessage();
  }

  showError(message) {
    this.formMessage.className = 'form-message error show';
    this.formMessage.innerHTML = `
      <strong>⚠️ Oops! Something went wrong.</strong><br>
      ${message}<br>
      <small>Please try again or contact us directly at <a href="mailto:sowmiyan@sancharnet.in">sowmiyan@sancharnet.in</a></small>
    `;
    this.scrollToMessage();
  }

  hideMessage() {
    this.formMessage.classList.remove('show');
  }

  scrollToMessage() {
    setTimeout(() => {
      this.formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

// Alternative: Simple mailto fallback (if no form service configured)
class MailtoFallback {
  constructor() {
    this.form = document.getElementById('visitorForm');
    
    if (this.form) {
      this.checkConfiguration();
    }
  }

  checkConfiguration() {
    // Check if Web3Forms key is configured
    const accessKeyInput = this.form.querySelector('input[name="access_key"]');
    const hasValidKey = accessKeyInput && accessKeyInput.value !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';
    
    if (!hasValidKey) {
      console.warn('⚠️ Web3Forms access key not configured. Using mailto fallback.');
      this.setupMailtoFallback();
    }
  }

  setupMailtoFallback() {
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    
    // Add info message
    formMessage.className = 'form-message show';
    formMessage.style.background = '#fff3cd';
    formMessage.style.color = '#856404';
    formMessage.style.border = '1px solid #ffeeba';
    formMessage.innerHTML = `
      <strong>ℹ️ Email Configuration Needed</strong><br>
      To receive form submissions directly to your email, please configure Web3Forms or Formspree.<br>
      <small>See <code>js/contact-form.js</code> for instructions. Currently using mailto as fallback.</small>
    `;
    
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(this.form);
      
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone') || 'Not provided';
      const city = formData.get('city') || 'Not provided';
      const visitDate = formData.get('visitDate') || 'Not specified';
      const message = formData.get('message');
      
      const subject = `Visitor Feedback from ${name}`;
      const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}
Date of Visit: ${visitDate}

Message:
${message}

---
Sent from Thirukoshtiyur Temple Website
      `;
      
      const mailtoLink = `mailto:sowmiyan@sancharnet.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      submitBtn.textContent = 'Opening email client...';
      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
          Send Message
        `;
      }, 2000);
    });
  }
}

// Initialize form handler
document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
  new MailtoFallback();
});

export { ContactForm, MailtoFallback };
