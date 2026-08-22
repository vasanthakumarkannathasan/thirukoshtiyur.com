# Thirukoshtiyur Temple Website 🛕

<div align="center">

![Temple Banner](https://img.shields.io/badge/Temple-Sri%20Sowmiya%20Narayana%20Perumal-C41E3A?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

**Official bilingual website for Sri Sowmiya Narayana Perumal Temple (Thirukoshtiyur)**  
*One of 108 Divya Desams | "Then Badri" (Southern Badrinath)*

[🌐 Visit Website](https://thirukoshtiyur.com) | [📖 Documentation](https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com/tree/main/docs) | [🐛 Report Issue](https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com/issues)

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🌐 Live Website](#-live-website)
- [💻 Development](#-development)
- [🎨 Design System](#-design-system)
- [📄 Pages Overview](#-pages-overview)
- [🌍 Bilingual Implementation](#-bilingual-implementation)
- [📤 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📞 Contact Information](#-contact-information)
- [📝 Recent Updates](#-recent-updates)
- [📋 Future Enhancements](#-future-enhancements)
- [🆘 Troubleshooting](#-troubleshooting)
- [📄 License](#-license)

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Modern Design
- **Vibrant temple colors** with gradient effects
- **Professional center-aligned layout** (1200px container)
- **Card-based navigation** for clean UX
- **Smooth animations** and transitions
- **Responsive typography** using clamp()

### 🌍 Bilingual Support
- **English** (default) + **Tamil** (தமிழ்)
- **One-click language toggle** in navbar
- **Persistent preference** via localStorage
- **Full coverage** across all 9 pages
- **Tamil fonts** (Noto Sans Tamil)

### 📱 Responsive Design
- **Mobile-first** approach
- **Progressive breakpoints**: 768px, 992px, 1200px
- **Hamburger menu** for mobile
- **Touch-optimized** navigation
- **No horizontal overflow** on any device

</td>
<td width="50%">

### 🔔 Interactive Features
- **Scrolling notification banner** with announcements
- **WhatsApp floating button** for instant contact
- **Smooth scroll navigation** within pages
- **Language switcher** with 🌐 icon
- **Hover effects** on all interactive elements

### ⚡ Performance
- **Pure HTML/CSS/JS** (no frameworks)
- **Fast loading** < 2 seconds
- **Optimized images** and assets
- **CDN delivery** via Cloudflare
- **Automatic SSL/HTTPS**

### ♿ Accessibility
- **Semantic HTML5** structure
- **ARIA labels** where needed
- **Keyboard navigation** support
- **High contrast** color ratios
- **Alt text** for all images

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites
- Git installed
- Web browser (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code recommended)
- **Optional**: VS Code Live Server extension

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com.git

# 2. Navigate to project directory
cd thirukoshtiyur.com

# 3. Open in browser (choose one method)
# Method A: Direct open
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Method B: Using Python (recommended)
python -m http.server 8000
# Visit: http://localhost:8000

# Method C: Using VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

### First-Time Setup

```bash
# 1. Create your feature branch
git checkout -b feature/your-feature-name

# 2. Make changes and test locally

# 3. Commit with descriptive message
git add .
git commit -m "feat: your change description"

# 4. Push to GitHub
git push origin feature/your-feature-name

# 5. Create Pull Request on GitHub for review
```

---

## 📁 Project Structure

```
thirukoshtiyur.com/
├── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   ├── images/        # Temple photos (organized by category)
│   │   ├── hero/      # Homepage hero images
│   │   ├── gallery/   # Gallery photos
│   │   ├── events/    # Event photos
│   │   ├── deities/   # Deity images
│   │   └── logo/      # Logo and branding assets
│   ├── videos/        # Video content
│   └── fonts/         # Google Fonts (Playfair Display, Inter, Noto Sans Tamil)
├── css/               # Page-specific stylesheets
│   ├── base.css
│   ├── reset.css
│   ├── style.css
│   ├── variables.css
│   └── components/    # Component styles
├── js/                # JavaScript modules
│   ├── main.js
│   ├── navigation.js
│   ├── gallery.js
│   ├── contact-form.js
│   └── announcement-ticker.js
├── pages/             # Website pages (bilingual)
│   ├── about.html     # Temple introduction & significance
│   ├── history.html   # Temple history & Ramanuja connection
│   ├── festivals.html # Annual festival calendar
│   ├── timings.html   # Daily schedule & pooja timings
│   ├── gallery.html   # Photo gallery
│   ├── services.html  # Free services for devotees
│   └── contact.html   # Contact information & directions
├── data/              # JSON data files
│   ├── announcements.json
│   ├── festivals.json
│   └── poojas.json
├── docs/              # Documentation
│   ├── CONTACT_FORM_SETUP.md
│   ├── ADDING_INSTAGRAM_IMAGES.md
│   └── SACRED_SYMBOLS.md
├── index.html         # Homepage (bilingual hero + navigation cards)
├── CNAME              # Custom domain configuration
├── robots.txt         # SEO configuration
├── sitemap.xml        # Search engine sitemap
└── README.md          # This file
```

## 🚀 Development Workflow

### 1. Local Development
```bash
# Clone repository
git clone https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com.git
cd thirukoshtiyur.com

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Test locally by opening index.html or using Live Server

# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin feature/your-feature-name
```

### 2. Testing Locally
- **Option 1**: Open `index.html` directly in browser
- **Option 2**: Use VS Code Live Server extension (recommended)
- **Option 3**: Use Python: `python -m http.server 8000`

### 3. Collaboration & Approval Process

#### For Contributors:
1. **Fork or clone** the repository
2. **Create a branch**: `git checkout -b feature/description`
3. **Make changes** and test locally
4. **Push to GitHub**: `git push origin feature/description`
5. **Create Pull Request** on GitHub
6. **Wait for approval** from repository owner
7. After approval and merge, changes go **LIVE automatically**

#### For Repository Owner (You):
1. **Review Pull Requests** on GitHub
2. **Test changes** if needed
3. **Approve & Merge** to main branch
4. **GitHub Pages deploys automatically** (2-5 minutes)

### 4. Branch Strategy
- `main` - Production (auto-deploys to live site)
- `feature/*` - New features
- `fix/*` - Bug fixes
- `content/*` - Content updates (images, text)

## 📤 Deployment

### Cloudflare Pages (Current Setup)
1. **Auto-deploy**: Push to `main` branch triggers automatic deployment
2. **Build settings**:
   - Build command: (none - static site)
   - Build output: `/` (root directory)
   - Environment: Production
3. **Custom domain**: thirukoshtiyur.com configured with DNS
4. **Deploy time**: ~30-60 seconds
5. **HTTPS**: Automatic SSL certificate

### Deployment Process
```bash
# 1. Test locally
# Open index.html or use Live Server

# 2. Commit changes
git add .
git commit -m "feat: your change description"

# 3. Push to main (triggers auto-deploy)
git push origin main

# 4. Wait 30-60 seconds for Cloudflare to build

# 5. Visit https://thirukoshtiyur.com to verify
```

### Alternative: GitHub Pages Backup
If you want to enable GitHub Pages as backup:
1. Go to **Settings** → **Pages** on GitHub
2. Source: **Deploy from main branch**
3. Folder: **/ (root)**
4. Site will be live at: https://vasanthakumarkannathasan.github.io/thirukoshtiyur.com/

## � Website Pages

### 1. **Homepage** (`index.html`)
- Full-screen hero with deity image
- 6 quick navigation cards (About, History, Festivals, Timings, Gallery, Contact)
- Deity spotlight section
- Contact CTA with 3 cards (Phone, Email, WhatsApp)
- Scrolling notification banner

### 2. **About** (`pages/about.html`)
- Temple introduction and significance
- 4 feature cards:
  - Ashtanga Vimanam (96 feet architectural marvel)
  - Three Divine Postures (Standing, Sitting, Reclining)
  - Ramanuja Connection (18 visits for Ashtakshara Mantra)
  - Sacred Theertham (holy water source)
- High-quality deity image
- Bilingual content sections

### 3. **History** (`pages/history.html`)
- Ramanuja's 18 visits story
- Thirukachchi Nambi connection
- "Then Badri" (Southern Badrinath) significance
- Three divine forms explanation
- Historical timeline

### 4. **Festivals** (`pages/festivals.html`)
- Annual festival calendar
- Chithirai Brahmotsavam details
- Monthly celebration schedule
- Special events information
- Festival highlights

### 5. **Timings** (`pages/timings.html`)
- Daily opening hours (Morning 7-12, Evening 4-8)
- 6 daily pooja schedules with icons:
  - Vishwaroopa Darsanam (7:00 AM)
  - Kalasandhi (8:00 AM)
  - Uchikala Pooja (12:00 PM)
  - Sayaratchai (6:00 PM)
  - Artha Jamam (7:30 PM)
  - Palliyarai (8:00 PM)

### 6. **Gallery** (`pages/gallery.html`)
- Photo gallery grid (ready for images)
- Temple architecture photos
- Festival celebration images
- Deity images
- Event documentation

### 7. **Services** (`pages/services.html`)
- Free services for devotees
- Accommodation information
- Prasadam distribution details
- Special facilities

### 8. **Contact** (`pages/contact.html`)
- 4 contact cards:
  - Phone: 04575-241233
  - Email: contact@thirukoshtiyur.com
  - WhatsApp: +91 88383 36460
  - Address with directions
- How to reach section:
  - By Road: 55km from Madurai
  - By Train: 15km from Manamadurai Station
  - By Air: 60km from Madurai Airport
- Embedded map (ready)

## 🌐 Bilingual Implementation

### Language Switching
```javascript
// Language toggle function
function toggleLanguage() {
  const body = document.body;
  body.classList.toggle('tamil-mode');
  const lang = body.classList.contains('tamil-mode') ? 'ta' : 'en';
  localStorage.setItem('preferredLanguage', lang);
}

// Auto-load saved preference
window.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('preferredLanguage');
  if (lang === 'ta') {
    document.body.classList.add('tamil-mode');
  }
});
```

### HTML Structure
```html
<!-- English version (default) -->
<h1 data-lang="en">Thirukoshtiyur</h1>

<!-- Tamil version (hidden by default) -->
<h1 data-lang="ta" class="tamil">திருக்கோஷ்டியூர்</h1>
```

### CSS Control
```css
/* Hide Tamil by default */
[data-lang]:not([data-lang="en"]) { display: none; }

/* Show Tamil when in Tamil mode */
body.tamil-mode [data-lang="en"] { display: none; }
body.tamil-mode [data-lang="ta"] { display: block; }
```

## 📞 Contact Information

### Temple Contact
- **Phone**: 04575-241233
- **Email (General)**: info@thirukoshtiyur.com
- **Email (Contact Page)**: contact@thirukoshtiyur.com
- **WhatsApp**: +91 88383 36460

### Address
```
Sri Sowmiya Narayana Perumal Temple
Thirukoshtiyur (திருக்கோஷ்டியூர்)
Sivaganga District
Tamil Nadu, India
```

### Website
- **Live**: https://thirukoshtiyur.com
- **Repository**: https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com

## 🔐 Repository Settings (Recommended)

### Branch Protection (for main branch)
1. Go to **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. Enable:
   - ✅ Require pull request before merging
   - ✅ Require approvals (1)
   - ✅ Dismiss stale reviews
   - ✅ Require status checks to pass

### Collaborators
1. **Settings** → **Collaborators** → **Add people**
2. Add team members with "Write" access
3. They can create PRs but cannot merge without approval

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla ES6)
- **Fonts**: Google Fonts (Playfair Display, Inter, Noto Sans Tamil)
- **Icons**: Unicode Emojis + Font Awesome (optional)
- **Hosting**: Cloudflare Pages (auto-deploy from Git)
- **Version Control**: Git & GitHub
- **Responsive**: Mobile-first CSS with media queries
- **No frameworks**: Pure HTML/CSS/JS for fast loading

## 🎨 Design System

### Color Palette
```css
--primary: #C41E3A;      /* Deep Temple Red */
--secondary: #FF6B35;    /* Vibrant Saffron */
--accent: #FFB703;       /* Sacred Gold */
--peacock: #023047;      /* Deep Blue (footer) */
--cream: #FFF8F0;        /* Warm Background */
--text: #1A1A1A;         /* Main Text */
--text-light: #4A4A4A;   /* Secondary Text */
```

### Typography
- **Headings**: Playfair Display (600, 700, 800)
- **Body**: Inter (400, 500, 600, 700)
- **Tamil**: Noto Sans Tamil (400, 600, 700)

### Components
- **Fixed Navbar**: 70px height, backdrop blur
- **Hero Section**: Full-screen with deity image background
- **Cards**: Rounded corners, shadow on hover
- **Buttons**: Gradient backgrounds, smooth transitions
- **Footer**: 4-column grid, dark peacock blue

## � Content Updates

### Adding Images
```bash
# Organize by category
assets/images/gallery/2026-08/photo1.jpg
assets/images/events/festival-2026/event1.jpg
assets/images/deities/deity-name.jpg

# Update in HTML
<img src="../assets/images/gallery/photo1.jpg" alt="Description">
```

### Adding Videos
```bash
# Small videos: Store locally
assets/videos/temple-tour.mp4

# Large videos: Use YouTube/Vimeo embed
<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
```

### Updating Announcements
Edit `data/announcements.json`:
```json
{
  "announcements": [
    {
      "en": "Temple Open: Morning 7:00 AM - 12:00 PM",
      "ta": "கோயில் திறக்கும் நேரம்: காலை 7:00 - 12:00"
    }
  ]
}
```

### Best Practices
- ✅ **Optimize images**: Use tools like TinyPNG, ImageOptim
- ✅ **Descriptive filenames**: `brahmotsavam-procession-2026.jpg`
- ✅ **Organize by date**: Helps with maintenance
- ✅ **Keep sizes small**: Target <500KB per image
- ✅ **Use WebP format**: Better compression (fallback to JPG)
- ✅ **Alt text**: Always add descriptive alt attributes

## 🔒 Code Quality

### HTML Validation
- Valid HTML5 structure
- Semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Accessible forms with labels

### CSS Best Practices
- CSS Variables for colors
- Mobile-first responsive design
- BEM naming convention (optional)
- Minimal specificity
- Reusable component styles

### JavaScript Standards
- ES6+ modern syntax
- No jQuery dependency
- Vanilla DOM manipulation
- Event delegation
- LocalStorage for preferences

### Accessibility (A11y)
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ High contrast ratios
- ✅ Focus indicators

## 📝 Recent Updates (2026)

### August 2026
- ✅ **Complete website redesign**: Modern vibrant colors, card-based layout
- ✅ **Bilingual support**: English + Tamil with language switcher
- ✅ **7 pages created**: About, History, Festivals, Timings, Gallery, Services, Contact
- ✅ **Responsive design**: Mobile-first with hamburger menu
- ✅ **Notification banner**: Scrolling announcements with dual language
- ✅ **Contact updates**: New phone (8838336460), emails (info@, contact@)
- ✅ **Tamil text encoding**: Fixed UTF-8 encoding issues in festivals & gallery pages
- ✅ **WhatsApp integration**: Floating button on all pages
- ✅ **Color scheme**: Deep red, saffron, gold - traditional temple colors
- ✅ **Typography**: Google Fonts with Tamil support (Noto Sans Tamil)

### Previous Updates
- Initial website structure
- Basic temple information
- Image gallery setup
- Contact form preparation

## 📋 Future Enhancements

### Planned Features
- [ ] **Photo Gallery Enhancement**: Lightbox viewer, image zoom, categories
- [ ] **Video Gallery**: Embed YouTube videos, virtual tour
- [ ] **Event Calendar**: Interactive calendar with upcoming festivals
- [ ] **Online Donations**: Payment gateway integration (Razorpay/PayPal)
- [ ] **Booking System**: Online pooja booking, special services
- [ ] **Contact Form Backend**: Email notifications, form submissions
- [ ] **Admin Panel**: Content management system for easy updates
- [ ] **Instagram Feed**: Auto-sync temple photos from Instagram
- [ ] **Search Feature**: Site-wide content search
- [ ] **Blog/News**: Temple news, events, announcements
- [ ] **Volunteer Portal**: Manage volunteers, event signups
- [ ] **Multilingual**: Add more languages (Hindi, Telugu, etc.)

### Technical Improvements
- [ ] PWA support (offline access)
- [ ] Service worker for caching
- [ ] Image lazy loading
- [ ] WebP image format with JPG fallback
- [ ] Critical CSS inline
- [ ] CDN for static assets
- [ ] Performance optimization (Lighthouse score 95+)

## 🤝 Contributing

### For Contributors
1. **Fork the repository** or ask for collaborator access
2. **Clone locally**: `git clone https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com.git`
3. **Create a branch**: `git checkout -b feature/your-feature-name`
4. **Make changes** and test locally
5. **Commit with clear message**: `git commit -m "feat: add new feature"`
6. **Push to GitHub**: `git push origin feature/your-feature-name`
7. **Create Pull Request** with description
8. **Wait for review** and address feedback
9. After merge, changes go **LIVE automatically** via Cloudflare

### Commit Message Convention
```bash
feat: add new feature
fix: bug fix
docs: documentation update
style: formatting, CSS changes
refactor: code restructuring
content: text/image updates
chore: maintenance tasks
```

### Code Review Checklist
- ✅ Code is tested locally
- ✅ No console errors
- ✅ Mobile responsive
- ✅ Bilingual content (if applicable)
- ✅ Images optimized
- ✅ Accessible (keyboard navigation, alt text)
- ✅ Follows existing code style

### Branch Protection
- `main` branch is protected
- Pull requests require approval
- All changes must pass local testing
- Direct commits to `main` are restricted

## 🆘 Troubleshooting

<details>
<summary><strong>Tamil text showing garbled characters</strong></summary>

**Problem**: தமிழ் text appears as ???????? or ????

**Solution**: File encoding issue - must be UTF-8
```bash
# In VS Code
File → Save with Encoding → UTF-8 (not UTF-8 with BOM)

# Verify in terminal
file -bi filename.html
# Should show: text/html; charset=utf-8

# Fix with Python
python fix_tamil_encoding.py filename.html
```
</details>

<details>
<summary><strong>Language toggle not working</strong></summary>

**Problem**: Clicking language button doesn't switch

**Solutions**:
```javascript
// 1. Check browser console for errors (F12)
// 2. Clear localStorage and try again
localStorage.removeItem('preferred-language');
location.reload();

// 3. Verify correct localStorage key
// All pages must use 'preferred-language' (not 'preferredLanguage')
```
</details>

<details>
<summary><strong>Images not loading</strong></summary>

**Problem**: Broken image icons (📷 with ❌)

**Checklist**:
```bash
# 1. Verify image exists at path
ls assets/images/gallery/photo.jpg

# 2. Check file path case-sensitivity
# Wrong: /Assets/Images/photo.JPG
# Right: /assets/images/photo.jpg

# 3. Ensure image is committed to Git
git add assets/images/photo.jpg
git commit -m "Add photo"
git push

# 4. Clear browser cache (Ctrl+Shift+R)
```
</details>

<details>
<summary><strong>Cloudflare not deploying</strong></summary>

**Problem**: Changes pushed but site not updating

**Steps**:
1. **Verify Git push successful**:
   ```bash
   git log --oneline -1  # Should show your commit
   ```

2. **Check Cloudflare dashboard**:
   - Login to Cloudflare Pages
   - View deployment logs
   - Look for build errors

3. **Common issues**:
   - Build in progress (wait 60 seconds)
   - Build failed (check logs)
   - DNS not propagated (wait 5 minutes)

4. **Force redeploy**:
   - Cloudflare Pages → Deployments
   - Click "Retry deployment"
</details>

<details>
<summary><strong>Language button cut off on right edge</strong></summary>

**Problem**: "English" button hidden/clipped

**Solution**: Missing responsive breakpoints
```css
/* Add these media queries */
@media (max-width: 1200px) {
  .nav-menu { gap: 1.2rem; font-size: 0.9rem; }
  .lang-switcher { 
    padding: 0.5rem 0.9rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 992px) {
  .nav-menu { gap: 1rem; font-size: 0.85rem; }
}
```
</details>

<details>
<summary><strong>WhatsApp button not clickable</strong></summary>

**Problem**: Button visible but click doesn't work

**Solutions**:
```css
/* Ensure proper z-index */
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999; /* Must be high */
}

/* Check for overlapping elements */
/* Footer should have z-index < 999 */
.footer {
  z-index: 10;
}
```
</details>

---

## 📋 Future Enhancements

### 🎯 Planned Features

#### Phase 1: Content Enhancement
- [ ] **Photo Gallery**: Lightbox viewer, image categories, zoom
- [ ] **Video Gallery**: YouTube embeds, virtual temple tour
- [ ] **Festival Calendar**: Interactive calendar with dates
- [ ] **Blog/News**: Temple announcements and updates

#### Phase 2: Interactive Features  
- [ ] **Online Donations**: Razorpay/PayPal integration
- [ ] **Pooja Booking**: Online booking system
- [ ] **Contact Form**: Email notifications backend
- [ ] **Search Feature**: Site-wide content search

#### Phase 3: Advanced
- [ ] **Admin Panel**: CMS for content management
- [ ] **Instagram Feed**: Auto-sync photos from Instagram
- [ ] **Volunteer Portal**: Event signup and management
- [ ] **Multilingual**: Add Hindi, Telugu, Kannada

### 🛠️ Technical Improvements
- [ ] PWA support (offline access, app-like experience)
- [ ] Service worker for caching
- [ ] Image lazy loading
- [ ] WebP format with JPG fallback
- [ ] Critical CSS inline
- [ ] CDN for assets
- [ ] Lighthouse score 95+

---

## 📚 Additional Documentation

| Document | Purpose |
|----------|---------|
| [Contact Form Setup](docs/CONTACT_FORM_SETUP.md) | Backend integration guide |
| [Instagram Images](docs/ADDING_INSTAGRAM_IMAGES.md) | Auto-sync Instagram photos |
| [Sacred Symbols](docs/SACRED_SYMBOLS.md) | Hindu symbols guide |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Deployment procedures |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contribution guidelines |
| [WEBSITE_COMPLETE.md](WEBSITE_COMPLETE.md) | Completion checklist |

---

## 🤝 Contributors

<a href="https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vasanthakumarkannathasan/thirukoshtiyur.com" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

---

## 🔗 Important Links

| Resource | URL |
|----------|-----|
| 🌐 **Live Website** | https://thirukoshtiyur.com |
| 💻 **GitHub Repository** | https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com |
| 📊 **Cloudflare Dashboard** | (Restricted access) |
| 🎨 **Google Fonts** | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [Inter](https://fonts.google.com/specimen/Inter), [Noto Sans Tamil](https://fonts.google.com/noto/specimen/Noto+Sans+Tamil) |
| 📱 **WhatsApp** | https://wa.me/918838336460 |
| 📧 **Email** | info@thirukoshtiyur.com |

---

## 📊 Project Stats

![GitHub last commit](https://img.shields.io/github/last-commit/vasanthakumarkannathasan/thirukoshtiyur.com?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/vasanthakumarkannathasan/thirukoshtiyur.com?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/vasanthakumarkannathasan/thirukoshtiyur.com?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/vasanthakumarkannathasan/thirukoshtiyur.com?style=flat-square)

---

## 📄 License

<div align="center">

**Copyright © 2026 Thirukoshtiyur Temple. All rights reserved.**

This website and its contents are proprietary to Thirukoshtiyur Temple.  
Unauthorized reproduction or distribution is prohibited.

---

### Built with 🙏 for Sri Sowmiya Narayana Perumal Temple

**"Then Badri" (தென் பத்ரி) - Southern Badrinath**  
*One of 108 Divya Desams*

🛕 **Om Namo Narayanaya** 🛕

---

<sub>Last updated: August 2026 | Version 2.0 | [Report Issues](https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com/issues)</sub>

</div>
