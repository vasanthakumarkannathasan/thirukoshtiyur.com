# Deployment Guide

## 🚀 Automatic Deployment with GitHub Pages

This website automatically deploys to GitHub Pages when changes are merged to the `main` branch.

## Initial Setup (One-time)

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
4. Click **Save**

Your site will be available at:
- `https://vasanthakumarkannathasan.github.io/thirukoshtiyur.com/`

### 2. Custom Domain Setup (thirukoshtiyur.com)

#### Step 1: Create CNAME file (Already done if using template)
Create file: `CNAME` in root with content:
```
thirukoshtiyur.com
```

#### Step 2: Configure DNS at Domain Registrar

**A Records (for apex domain):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**CNAME Record (for www):**
```
Type: CNAME
Name: www
Value: vasanthakumarkannathasan.github.io
```

#### Step 3: Configure Custom Domain on GitHub
1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `thirukoshtiyur.com`
3. Click **Save**
4. Wait for DNS check (may take 24-48 hours)
5. Enable **Enforce HTTPS** once DNS is verified

## 🔄 Deployment Process

### Automatic Deployment
```
Developer → Push to Branch → Create PR → Owner Approves → Merge to Main → Auto Deploy (2-5 min)
```

### Manual Deployment (if needed)
1. Go to **Actions** tab on GitHub
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"
4. Select branch: main
5. Click "Run workflow"

## ⏱️ Deployment Timeline

- **Merge to main**: Instant
- **GitHub Pages build**: 1-3 minutes
- **DNS propagation** (first time): 24-48 hours
- **CDN cache clear**: 5-10 minutes

## 🔍 Monitoring Deployment

### Check Deployment Status
1. Go to **Actions** tab on GitHub
2. View latest workflow run
3. Green checkmark = successful deployment
4. Red X = failed (check logs)

### View Live Site
- **GitHub Pages URL**: Check in Settings → Pages
- **Custom Domain**: After DNS propagation

### Check Deploy Logs
1. Go to **Actions** tab
2. Click on latest workflow run
3. Click "deploy" job
4. Expand steps to see details

## 🐛 Troubleshooting

### Site Not Updating
1. Check if workflow ran successfully (Actions tab)
2. Clear browser cache (Ctrl+F5)
3. Check if changes were merged to main
4. Wait 5-10 minutes for CDN cache

### Custom Domain Issues
```bash
# Check DNS propagation
nslookup thirukoshtiyur.com

# Should return GitHub IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### Build Failures
- Check file paths (case-sensitive on GitHub Pages)
- Verify all links are correct
- Check for missing files
- Review error logs in Actions tab

### HTTPS Not Working
- Ensure DNS is properly configured
- Wait 24 hours after DNS configuration
- Enable "Enforce HTTPS" in Settings → Pages
- Certificate provision can take 1 hour

## 📊 Deployment Checklist

Before merging to main:

- [ ] All changes tested locally
- [ ] Images optimized
- [ ] Links verified (internal & external)
- [ ] Mobile responsive checked
- [ ] No console errors
- [ ] Cross-browser tested
- [ ] PR approved by owner

After merging:

- [ ] Workflow completes successfully
- [ ] Site accessible via GitHub Pages URL
- [ ] Changes visible on live site
- [ ] Custom domain working (if configured)
- [ ] HTTPS enabled
- [ ] No broken links

## 🔐 Branch Protection

To prevent accidental direct pushes to main:

1. Go to **Settings** → **Branches**
2. Click "Add rule" under "Branch protection rules"
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Require status checks to pass before merging
5. Click "Create"

## 📱 Testing Before Going Live

### Local Testing
```bash
# Option 1: Direct file
open index.html

# Option 2: Simple HTTP server
python -m http.server 8000
# Visit: http://localhost:8000

# Option 3: VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

### Preview Environments
- **PR Preview**: Create PR to see changes before merging
- **Staging Branch**: Use separate branch for staging if needed

## 🎯 Rollback Process

If issues occur after deployment:

### Method 1: Revert Commit
```bash
git revert <commit-hash>
git push origin main
```

### Method 2: Rollback via GitHub
1. Go to **Code** tab → Commits
2. Find last working commit
3. Click "..." → "Revert"
4. Create PR and merge

## 📈 Performance Monitoring

- Use Google PageSpeed Insights
- Monitor in GitHub Actions logs
- Check uptime via third-party service
- Review GitHub Pages analytics (if available)

## 🆘 Support

For deployment issues:
1. Check GitHub Pages status: https://www.githubstatus.com/
2. Review documentation: https://docs.github.com/pages
3. Contact repository owner

---

**Note**: GitHub Pages is free for public repositories and has excellent uptime. Your site will be fast, secure (HTTPS), and automatically deployed!
