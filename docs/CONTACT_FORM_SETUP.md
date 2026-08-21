# Contact Form & WhatsApp Integration - Setup Guide

## 🎉 **What's Been Added**

Your temple website now has two powerful communication features:

### ✅ **1. WhatsApp Floating Button**
- Green WhatsApp button fixed on the right side of screen
- Bouncing animation to attract attention
- Opens WhatsApp chat with pre-filled message
- Mobile and desktop responsive
- Direct chat link to: **+91 90479 04690**

### ✅ **2. Visitor Comments Form**
- Beautiful contact form for visitor feedback
- Sends submissions directly to your email
- Fields: Name, Email, Phone, City, Date of Visit, Message
- Success/Error messages
- Form validation
- Spam protection (honeypot)
- Mobile responsive design

---

## 📱 **WhatsApp Integration**

### **Features:**
- **Floating Button**: Always visible on right side
- **Pre-filled Message**: "Hi, I would like to know more about Thirukoshtiyur Temple"
- **Direct Link**: Opens WhatsApp Web or App
- **Tooltip**: Hover shows "Chat with us on WhatsApp"
- **Animation**: Gentle bounce + pulse effect

### **Phone Number:**
Currently set to: **+91 90479 04690** (Mr. Babu Samy)

### **To Change WhatsApp Number:**
Edit `index.html` around line 1011:
```html
<a href="https://wa.me/919047904690?text=..." 
```
Replace `919047904690` with your number (include country code, no + or spaces)

### **To Change Pre-filled Message:**
Edit the `text=` parameter in the URL. Use `%20` for spaces.

---

## 📧 **Contact Form Email Setup**

The form can send emails using **Web3Forms** (recommended) or **Formspree**. Both are free!

### **Option 1: Web3Forms (Recommended - Easiest)**

**Why Web3Forms?**
- ✅ 100% Free forever
- ✅ No coding required
- ✅ Unlimited forms
- ✅ 250 submissions/month (free tier)
- ✅ Email notifications
- ✅ Spam protection included
- ✅ Works with static sites

**Setup Steps (5 minutes):**

1. **Go to Web3Forms**: https://web3forms.com

2. **Create Free Account**:
   - Click "Get Started Free"
   - Sign up with your email

3. **Get Your Access Key**:
   - After login, go to Dashboard
   - Click "Create New Form"
   - Copy your **Access Key** (looks like: `abc123def-456g-789h-012i-345jklmnop67`)

4. **Configure Your Email**:
   - Set **Email to receive submissions**: `sowmiyan@sancharnet.in` (or your preferred email)
   - Set **From Name**: `Thirukoshtiyur Temple`
   - Enable **Email Notifications**
   - Save settings

5. **Add Key to Website**:
   - Open: `js/contact-form.js`
   - Line 14: Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual key:
   ```javascript
   this.accessKey = 'abc123def-456g-789h-012i-345jklmnop67';
   ```
   - Save file
   - Push to GitHub

6. **Test It!**:
   - Open your website
   - Fill out the visitor comments form
   - Click "Send Message"
   - Check your email inbox!

**Web3Forms Dashboard**: View all submissions, download CSV, manage settings

---

### **Option 2: Formspree (Alternative)**

**Why Formspree?**
- ✅ Very simple setup
- ✅ 50 submissions/month (free)
- ✅ Good spam protection
- ✅ Email forwarding

**Setup Steps:**

1. **Go to Formspree**: https://formspree.io

2. **Create Account** (free)

3. **Create New Form**:
   - Click "New Form"
   - Enter form name: "Temple Visitor Comments"
   - Set email: `sowmiyan@sancharnet.in`

4. **Get Form ID**:
   - Copy your form ID (looks like: `xpzkgqrl`)

5. **Update HTML** (two options):

   **Option A - Action attribute (easiest):**
   Edit `index.html` around line 782:
   ```html
   <form id="visitorForm" class="contact-form" 
         action="https://formspree.io/f/xpzkgqrl" 
         method="POST">
   ```

   **Option B - JavaScript:**
   Edit `js/contact-form.js` line 16:
   ```javascript
   this.formspreeEndpoint = 'https://formspree.io/f/xpzkgqrl';
   ```
   Then update the fetch URL in line 59.

6. **Test the Form**

---

### **Option 3: Mailto Fallback (Already Working!)**

If you don't configure Web3Forms or Formspree, the form automatically uses a **mailto fallback**:

**How it works:**
- Opens user's default email client
- Pre-fills recipient, subject, and body
- User clicks "Send" in their email app

**Pros:**
- ✅ Works immediately (no setup!)
- ✅ 100% free
- ✅ No third-party services

**Cons:**
- ❌ Requires user to have email client configured
- ❌ Not as smooth user experience
- ❌ Can't track submissions

**Current Status**: Already implemented as backup!

---

## 📋 **Form Features**

### **Fields Included:**
1. **Name** (Required) - Visitor's full name
2. **Email** (Required) - For follow-up
3. **Phone** (Optional) - Contact number
4. **City/Location** (Optional) - Where they're from
5. **Date of Visit** (Optional) - When they visited
6. **Message/Feedback** (Required) - Their experience

### **Validation:**
- Required fields marked with red asterisk (*)
- Email format validation
- Minimum/maximum length checks
- Real-time error messages

### **Spam Protection:**
- Honeypot field (hidden from users)
- Rate limiting (via Web3Forms/Formspree)
- reCAPTCHA can be added if needed

### **User Experience:**
- Loading spinner while submitting
- Success message: "Thank you for your message!"
- Error handling with helpful messages
- Form resets after successful submission
- Auto-scroll to message

---

## 🎨 **Design Features**

### **WhatsApp Button:**
- **Color**: WhatsApp green (#25D366)
- **Size**: 60px desktop, 50px mobile
- **Position**: Fixed, bottom-right corner
- **Animation**: Bounce + pulse effect
- **Shadow**: Glowing green shadow
- **Tooltip**: Shows on hover

### **Contact Form:**
- **Background**: Gradient with sacred Namam watermark
- **Card Style**: White card with shadow
- **Colors**: Temple theme colors
- **Typography**: Consistent with site design
- **Spacing**: Comfortable, not cramped
- **Mobile**: Fully responsive

### **Contact Info Cards:**
- Phone, Email, WhatsApp cards
- Icons with hover effects
- Clickable links (tel:, mailto:, wa.me)
- 3-column grid (1 column on mobile)

---

## 📁 **Files Added/Modified**

### **New Files Created:**
```
css/components/
├── whatsapp.css                  ✅ WhatsApp button styles
└── contact-form.css              ✅ Contact form styles

js/
└── contact-form.js               ✅ Form submission handler

docs/
└── CONTACT_FORM_SETUP.md         ✅ This guide
```

### **Files Modified:**
```
css/style.css                     ✅ Added CSS imports
index.html                        ✅ Added form section + WhatsApp button
```

---

## 🚀 **Quick Start (5 Minutes)**

### **Immediate Steps:**

1. **Choose Email Service**:
   - Recommended: Web3Forms (easiest)
   - Alternative: Formspree
   - Fallback: Mailto (already works!)

2. **For Web3Forms**:
   ```bash
   # 1. Sign up: https://web3forms.com
   # 2. Get your access key
   # 3. Edit js/contact-form.js line 14
   # 4. Replace: YOUR_WEB3FORMS_ACCESS_KEY_HERE
   # 5. Push to GitHub
   # 6. Done!
   ```

3. **Test Form**:
   - Open website
   - Fill visitor comments form
   - Click "Send Message"
   - Check email inbox

4. **Test WhatsApp**:
   - Click green WhatsApp button
   - Verify it opens WhatsApp
   - Check phone number is correct

---

## 🔧 **Customization Options**

### **Change WhatsApp Phone Number:**
Edit `index.html` line ~1011:
```html
<a href="https://wa.me/919047904690?text=...">
```

### **Change Email Recipient:**
**Web3Forms**: Update in dashboard settings
**Formspree**: Create new form with different email
**Mailto**: Edit `sowmiyan@sancharnet.in` in `contact-form.js`

### **Add More Form Fields:**
Edit `index.html` around line 782, add between existing fields:
```html
<div class="form-group">
  <label for="fieldName" class="form-label">Field Label</label>
  <input type="text" id="fieldName" name="fieldName" class="form-input">
</div>
```

### **Change Form Colors:**
Edit `css/components/contact-form.css` - Look for color variables

### **Change WhatsApp Button Position:**
Edit `css/components/whatsapp.css` lines 9-10:
```css
bottom: 100px;  /* Distance from bottom */
right: 30px;    /* Distance from right */
```

### **Disable Animations:**
Edit `css/components/whatsapp.css` - Remove or comment out:
```css
/* animation: bounce 2s ease-in-out infinite; */
```

---

## 📊 **Email Notification Format**

When someone submits the form, you'll receive an email like:

```
From: Thirukoshtiyur Temple Website
Subject: New Visitor Feedback - Thirukoshtiyur Temple

Name: Rajesh Kumar
Email: rajesh@example.com
Phone: +91 98765 43210
City: Chennai
Date of Visit: 2026-08-21

Message:
We had a wonderful darshan experience at the temple. 
The architecture is magnificent and the atmosphere is 
very peaceful. Thank you for the free accommodation 
and food services. Highly recommend visiting this 
sacred place.

---
Submitted via Thirukoshtiyur Temple Website
Date: 2026-08-21 10:30 AM IST
IP: 192.168.1.1
```

---

## 🛡️ **Security & Spam Protection**

### **Current Protection:**
- ✅ Honeypot field (catches bots)
- ✅ Form validation (client-side)
- ✅ Rate limiting (server-side via Web3Forms)
- ✅ Email verification
- ✅ HTTPS required

### **Additional Protection (Optional):**

**1. Add Google reCAPTCHA v3:**
- Sign up: https://www.google.com/recaptcha/admin
- Get site key and secret key
- Add to form HTML
- Verify on submission

**2. Enable Web3Forms Spam Filter:**
- In Web3Forms dashboard
- Enable "Spam Filter"
- Set sensitivity level

**3. Block Specific Countries/IPs:**
- Available in Web3Forms Pro
- Or use Cloudflare firewall rules

---

## 📱 **Mobile Experience**

### **WhatsApp Button:**
- ✅ Smaller size on mobile (50px)
- ✅ Positioned to not block content
- ✅ Touch-optimized (60px tap target)
- ✅ Opens WhatsApp app directly
- ✅ Tooltip hidden on mobile

### **Contact Form:**
- ✅ Full-width on small screens
- ✅ Larger touch targets
- ✅ Simplified layout
- ✅ Easy keyboard input
- ✅ Scrolls to errors/success

---

## 📈 **Analytics & Tracking**

### **Track Form Submissions:**

**With Google Analytics:**
```javascript
// Add to contact-form.js after successful submission
gtag('event', 'form_submit', {
  'event_category': 'engagement',
  'event_label': 'visitor_comments'
});
```

**With Cloudflare Web Analytics:**
- View form page visits in dashboard
- Track conversion rate
- Monitor abandonment

### **Track WhatsApp Clicks:**
```html
<!-- Add onclick to WhatsApp button -->
<a href="https://wa.me/..." 
   onclick="gtag('event', 'whatsapp_click', {'event_category': 'engagement'})">
```

---

## 🎯 **Success Metrics**

After implementation, you should see:

- ✅ **WhatsApp button visible** on all pages
- ✅ **Form loads properly** on visitor comments section
- ✅ **Submissions arrive in email** within seconds
- ✅ **Success message shows** after sending
- ✅ **Form resets** after submission
- ✅ **Mobile responsive** on all devices
- ✅ **No console errors** in browser

---

## ❓ **Troubleshooting**

### **Form not sending emails:**

1. **Check Access Key**: Verify Web3Forms key is correct
2. **Check Email**: Confirm recipient email in dashboard
3. **Check Console**: Open browser DevTools, look for errors
4. **Test Manually**: Submit test data, check spam folder
5. **Check Network**: Ensure API call succeeds (DevTools Network tab)

### **WhatsApp button not working:**

1. **Check Phone Number**: Must include country code (91 for India)
2. **Check URL Format**: `https://wa.me/919047904690`
3. **Check Button HTML**: Verify link is correct
4. **Test Different Browser**: Try Chrome, Firefox
5. **Check Mobile**: WhatsApp app must be installed

### **Form submission errors:**

**"Access key is required"**
- Solution: Add your Web3Forms access key to `contact-form.js`

**"Invalid email"**
- Solution: Check email format in form field

**"Network error"**
- Solution: Check internet connection, try again

**"Submission limit reached"**
- Solution: Upgrade Web3Forms plan or wait for next month

---

## 💡 **Pro Tips**

### **Improve Response Rate:**
1. Set up **auto-reply email** in Web3Forms
2. Add "We'll respond within 24 hours" message
3. Include temple phone/WhatsApp in auto-reply
4. Monitor dashboard daily

### **Reduce Spam:**
1. Enable Web3Forms spam filter
2. Add "Please verify you're human" checkbox
3. Consider adding reCAPTCHA
4. Block suspicious email domains

### **Better User Experience:**
1. Add field descriptions/examples
2. Show character count for message field
3. Add "Save as draft" functionality
4. Enable form auto-save (browser)

### **Organize Submissions:**
1. Create email filter: Label "Temple Feedback"
2. Auto-forward to multiple people
3. Export CSV from Web3Forms monthly
4. Create response templates

---

## 📞 **Support**

### **Web3Forms Support:**
- Website: https://web3forms.com
- Documentation: https://docs.web3forms.com
- Email: support@web3forms.com

### **Formspree Support:**
- Website: https://formspree.io
- Documentation: https://help.formspree.io
- Support: Via dashboard

### **Temple Website Support:**
- Email: sowmiyan@sancharnet.in
- Phone: 04575-241233
- WhatsApp: +91 90479 04690

---

## ✅ **Deployment Checklist**

Before going live:

- [ ] Web3Forms access key configured
- [ ] Test form submission (receive email)
- [ ] Test WhatsApp button (opens correctly)
- [ ] Check mobile responsive design
- [ ] Test all form fields (validation)
- [ ] Check success/error messages
- [ ] Verify email formatting
- [ ] Test spam protection
- [ ] Check form on different browsers
- [ ] Set up email notifications
- [ ] Create response email template
- [ ] Train staff on responding to inquiries
- [ ] Monitor first week submissions

---

## 🎉 **Summary**

Your temple website now has:

1. ✅ **WhatsApp floating button** - Instant communication
2. ✅ **Visitor comments form** - Collect feedback via email
3. ✅ **Email integration** - Direct to your inbox
4. ✅ **Contact info cards** - Phone, Email, WhatsApp
5. ✅ **Spam protection** - Honeypot + rate limiting
6. ✅ **Mobile responsive** - Works on all devices
7. ✅ **Beautiful design** - Matches temple theme
8. ✅ **Easy to maintain** - Simple configuration

**Next Step**: Get your free Web3Forms access key and configure in 5 minutes!

---

**|| ஓம் நமோ நாராயணாய ||** 🙏

Your devotees can now easily reach you! 📱📧
