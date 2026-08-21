# Thirukoshtiyur Temple Website

Official website for Thirukoshtiyur Temple - Hosted on GitHub Pages.

## 🌐 Live Website
- **Production**: https://vasanthakumarkannathasan.github.io/thirukoshtiyur.com/
- **Domain**: https://thirukoshtiyur.com (when configured)

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
│   │   └── deities/   # Deity images
│   ├── videos/        # Video content
│   └── fonts/         # Custom fonts
├── pages/             # Additional HTML pages
│   ├── about.html
│   ├── gallery.html
│   ├── events.html
│   ├── contact.html
│   └── donate.html
├── index.html         # Main homepage
├── CNAME              # Custom domain configuration
└── README.md          # Documentation
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

### GitHub Pages Setup
1. Go to **Settings** → **Pages** on GitHub
2. Source: **Deploy from main branch**
3. Folder: **/ (root)**
4. Save - Site will be live at: https://vasanthakumarkannathasan.github.io/thirukoshtiyur.com/

### Custom Domain Setup (thirukoshtiyur.com)
1. Create `CNAME` file with: `thirukoshtiyur.com`
2. In domain registrar, add DNS records:
   ```
   Type: A Record
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: vasanthakumarkannathasan.github.io
   ```
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 🔄 Content Updates

### Adding Images
```bash
# Create organized folders
assets/images/gallery/2026-08/photo1.jpg
assets/images/events/festival-2026/event1.jpg
```

### Adding Videos
```bash
# Store videos in assets/videos/
# Or use external hosting (YouTube, Vimeo) for large files
```

### Best Practices
- **Optimize images** before uploading (compress, resize)
- **Use descriptive names**: `deity-procession-2026.jpg`
- **Organize by date/event** for easy management
- **Keep file sizes small** for faster loading

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

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Hosting**: GitHub Pages
- **Version Control**: Git & GitHub
- **Future**: Payment Gateway integration ready

## 📋 Future Enhancements

- [ ] Payment Gateway Integration (Razorpay/PayPal)
- [ ] Photo Gallery with lightbox
- [ ] Event calendar
- [ ] Video gallery
- [ ] Multi-language support
- [ ] Contact form with backend
- [ ] Online booking system

## 🤝 Contributing

1. Only approved contributors can push changes
2. All changes require Pull Request approval
3. Test thoroughly before creating PR
4. Follow coding standards
5. Add clear commit messages

## 📞 Contact

For access or questions, contact the repository owner.

## 📄 License

Copyright © 2026 Thirukoshtiyur Temple. All rights reserved.
