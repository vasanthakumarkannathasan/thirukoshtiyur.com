# Contributing Guidelines

Thank you for contributing to the Thirukoshtiyur Temple Website!

## 🔄 Workflow for Contributors

### 1. Get Access
- Contact the repository owner for collaborator access
- Or fork the repository to your account

### 2. Setup Local Environment
```bash
git clone https://github.com/vasanthakumarkannathasan/thirukoshtiyur.com.git
cd thirukoshtiyur.com
```

### 3. Create a Branch
```bash
# Always create a new branch for your changes
git checkout -b feature/your-feature-name

# Branch naming conventions:
# feature/add-gallery-page
# fix/navigation-bug
# content/festival-photos-2026
# update/contact-information
```

### 4. Make Changes
- Edit files in VS Code
- Test locally using Live Server or by opening index.html
- Ensure all links work
- Check responsive design on different screen sizes

### 5. Test Your Changes
Before committing, verify:
- ✅ All pages load correctly
- ✅ Images display properly
- ✅ Links work (internal and external)
- ✅ Mobile responsive
- ✅ No console errors in browser
- ✅ Forms work (if applicable)

### 6. Commit Changes
```bash
# Stage your changes
git add .

# Commit with clear message
git commit -m "Add: Gallery page with lightbox feature"

# Good commit messages:
# "Add: Event calendar on homepage"
# "Fix: Mobile navigation menu"
# "Update: Festival photos 2026"
# "Remove: Outdated content from about page"
```

### 7. Push to GitHub
```bash
git push origin feature/your-feature-name
```

### 8. Create Pull Request
1. Go to GitHub repository
2. Click "Compare & pull request"
3. Fill in PR details:
   - **Title**: Clear, descriptive title
   - **Description**: What changes you made and why
   - **Screenshots**: If UI changes, add before/after images
4. Submit PR and wait for review

### 9. Review Process
- Repository owner will review your PR
- May request changes or improvements
- Once approved, owner will merge to main
- Changes will automatically deploy to live site

## 📝 Coding Standards

### HTML
- Use semantic HTML5 tags
- Proper indentation (2 spaces)
- Add alt text to all images
- Use meaningful class/id names

### CSS
- Follow BEM naming convention
- Group related styles
- Add comments for complex sections
- Keep specificity low

### JavaScript
- Use modern ES6+ syntax
- Add comments for complex logic
- Handle errors gracefully
- Test on multiple browsers

### File Naming
- Use lowercase with hyphens: `contact-form.css`
- Images: descriptive names like `temple-front-view.jpg`
- No spaces in filenames

## 📁 Adding Content

### Images
```bash
# Organize by category and date
assets/images/gallery/2026-08/
assets/images/events/pongal-2026/
assets/images/deities/

# Optimize before uploading:
# - Resize to appropriate dimensions
# - Compress to reduce file size
# - Use JPG for photos, PNG for logos
```

### Videos
- Host on YouTube/Vimeo for large files
- Or use assets/videos/ for small clips
- Always provide poster images

## ⚠️ Important Guidelines

### DO:
- ✅ Test locally before pushing
- ✅ Create descriptive commit messages
- ✅ Optimize images before uploading
- ✅ Ask questions if unsure
- ✅ Keep changes focused (one feature per PR)
- ✅ Update documentation if needed

### DON'T:
- ❌ Push directly to main branch
- ❌ Upload large uncompressed files
- ❌ Make unrelated changes in one PR
- ❌ Remove others' work without discussion
- ❌ Commit API keys or sensitive data
- ❌ Break existing functionality

## 🔐 Security

- Never commit passwords, API keys, or credentials
- Don't expose personal information
- Report security issues privately to owner

## 🐛 Reporting Issues

Found a bug? Create an issue on GitHub with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device information

## 💬 Questions?

Contact the repository owner or create a discussion on GitHub.

---

Thank you for helping improve the Thirukoshtiyur Temple website! 🙏
