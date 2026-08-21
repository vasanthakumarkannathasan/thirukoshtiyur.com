# Adding Deity Images from Instagram - Complete Guide

## 📸 **How to Add Real Deity Images to Your Website**

Your website now has a beautiful Instagram integration section and placeholder deity cards. Here's how to add actual temple photos from the Instagram account.

---

## 🔗 **Instagram Account**

**Link**: [@thirukoshtiyur_asvr_madhavan_](https://www.instagram.com/thirukoshtiyur_asvr_madhavan_/)
- **Followers**: 121
- **Content**: Temple deity images, festivals, daily darshan photos

---

## ⚠️ **IMPORTANT: Legal & Ethical Considerations**

### **Before Downloading Images:**

1. **Copyright**: Images on Instagram are copyrighted by the photographer/owner
2. **Permission Required**: You MUST obtain permission to use images on your website
3. **Contact the Account Owner**: Reach out via Instagram DM or contact details

### **Recommended Approach:**

**Option 1: Contact Instagram Account Owner**
```
Hi, I'm building the official website for Thirukoshtiyur Temple.
Could I have permission to use your beautiful deity photos 
from your Instagram account on our website? 
We will credit you appropriately.
```

**Option 2: Embed Instagram Posts** (No Download Needed)
- Use Instagram's official embed feature
- Legal and automatic updates
- No permission needed for public posts

**Option 3: Use Your Own Photos**
- Take original photos at the temple
- No copyright issues
- Full control and ownership

---

## 📥 **Method 1: Download from Instagram (With Permission)**

### **Step 1: Get Permission**
- Contact: @thirukoshtiyur_asvr_madhavan_
- Explain: Building official temple website
- Request: High-resolution versions of deity images

### **Step 2: Download Images**

**Using Browser (Desktop):**
1. Open Instagram post in browser
2. Right-click on image
3. Select "Open image in new tab"
4. Right-click and "Save image as..."
5. Save with descriptive name

**Using Third-Party Tools (If Permitted):**
- **4K Stogram** (Desktop app)
- **Instaloader** (Python tool)
- **DownloadGram** (Web tool)

⚠️ **Note**: Only use after obtaining permission!

### **Step 3: Organize Downloaded Images**

Save images to appropriate folders:

```
assets/images/
├── deities/
│   ├── sowmiya-narayana-standing.jpg
│   ├── sowmiya-narayana-reclining.jpg
│   ├── krishna-dancing.jpg
│   ├── thirumagal-nachiyar.jpg
│   └── moolavar-closeup.jpg
├── festivals/
│   ├── brahmotsavam-2026.jpg
│   ├── krishna-jayanthi.jpg
│   └── vaikunta-ekadasi.jpg
└── temple/
    ├── temple-exterior.jpg
    ├── gopuram-view.jpg
    └── sanctum.jpg
```

### **Step 4: Optimize Images**

Before adding to website, optimize for web:

**Recommended Sizes:**
- **Hero images**: 1920x1080px (max 500 KB)
- **Gallery images**: 800x600px (max 300 KB)
- **Thumbnails**: 400x300px (max 100 KB)

**Tools for Optimization:**
- **Online**: TinyPNG.com, Squoosh.app
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)
- **Photoshop**: Save for Web (JPEG quality 80%)

---

## 🔗 **Method 2: Embed Instagram Posts (Recommended)**

This method is **legal, automatic, and requires no downloads**.

### **Step 1: Get Embed Code**

1. Open Instagram post in browser
2. Click the three dots (•••) on the post
3. Select "Embed"
4. Copy the embed code

### **Step 2: Add to Website**

Replace the placeholder cards in `index.html`:

```html
<!-- Replace this section around line 540 in index.html -->
<div class="grid grid-3 gap-xl">
  <!-- Instagram Embed 1 -->
  <div class="card">
    <blockquote class="instagram-media" data-instgrm-permalink="[PASTE INSTAGRAM URL HERE]" data-instgrm-version="14"></blockquote>
  </div>
  
  <!-- Instagram Embed 2 -->
  <div class="card">
    <blockquote class="instagram-media" data-instgrm-permalink="[PASTE INSTAGRAM URL HERE]" data-instgrm-version="14"></blockquote>
  </div>
  
  <!-- Instagram Embed 3 -->
  <div class="card">
    <blockquote class="instagram-media" data-instgrm-permalink="[PASTE INSTAGRAM URL HERE]" data-instgrm-version="14"></blockquote>
  </div>
</div>

<!-- Add Instagram embed script before </body> -->
<script async src="//www.instagram.com/embed.js"></script>
```

### **Benefits of Embedding:**
- ✅ No copyright issues
- ✅ Automatic updates when Instagram updates
- ✅ Shows Instagram branding
- ✅ Links back to Instagram (more followers)
- ✅ Mobile responsive automatically

---

## 🖼️ **Method 3: Update HTML with Downloaded Images**

After downloading and optimizing images with permission:

### **Step 1: Replace Placeholder Card 1**

Find around line 550 in `index.html` and replace:

```html
<!-- BEFORE (Placeholder) -->
<div class="card">
  <div style="aspect-ratio: 4/3; background: linear-gradient(...)">
    <!-- SVG placeholder -->
  </div>
  <div class="card-body">
    <p class="card-text">Main deity in standing posture...</p>
  </div>
</div>

<!-- AFTER (With Real Image) -->
<div class="card">
  <img src="./assets/images/deities/sowmiya-narayana-standing.jpg" 
       alt="Lord Sowmiya Narayana Perumal - Standing Posture"
       style="width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;">
  <div class="card-body">
    <h4 style="font-family: var(--font-heading); color: var(--color-primary); margin-bottom: var(--space-sm);">
      Lord Sowmiya Narayana Perumal
    </h4>
    <p class="card-text">
      Main deity in standing posture blessing devotees with divine grace from the sanctum sanctorum
    </p>
    <p style="margin-top: var(--space-sm); font-size: var(--font-size-sm); color: var(--text-light);">
      📷 Credit: @thirukoshtiyur_asvr_madhavan_
    </p>
  </div>
</div>
```

### **Step 2: Repeat for Other Deities**

Update all three cards with real images:
1. **Card 1**: Standing posture (Vaikundham)
2. **Card 2**: Reclining posture (Sayana Thirukkolam)
3. **Card 3**: Dancing Krishna (Boologam)

---

## 📝 **Image Naming Conventions**

Use descriptive, SEO-friendly names:

✅ **Good Examples:**
```
sowmiya-narayana-standing-posture.jpg
thirumagal-nachiyar-deity.jpg
brahmotsavam-festival-2026.jpg
temple-gopuram-sunset.jpg
```

❌ **Bad Examples:**
```
IMG_1234.jpg
photo1.jpg
download (1).jpg
```

---

## 🎨 **Image Guidelines**

### **Quality Standards:**

**Resolution:**
- Minimum: 800x600px
- Recommended: 1200x900px
- Maximum: 1920x1080px (for hero images)

**File Format:**
- **JPEG**: For photos (best compression)
- **PNG**: For images with transparency
- **WebP**: Modern format (smaller size, great quality)

**File Size:**
- Gallery images: < 300 KB
- Hero/featured: < 500 KB
- Thumbnails: < 100 KB

### **Content Guidelines:**

✅ **Include:**
- Clear deity face shots
- Well-lit, high-quality images
- Festival celebrations
- Temple architecture
- Devotee activities (with permission)

❌ **Avoid:**
- Blurry or pixelated images
- Poor lighting
- Personal photos without permission
- Copyright watermarks from other sites

---

## 🔧 **Code Templates**

### **Simple Image Gallery**

```html
<div class="gallery-grid">
  <div class="gallery-item">
    <img src="./assets/images/deities/deity1.jpg" alt="Description">
    <div class="gallery-overlay">
      <h4>Lord Sowmiya Narayana</h4>
      <p>Standing Posture</p>
    </div>
  </div>
  <!-- Repeat for more images -->
</div>
```

### **Lazy Loading (Better Performance)**

```html
<img data-src="./assets/images/deities/deity1.jpg" 
     src="./assets/images/placeholder.jpg"
     alt="Lord Sowmiya Narayana Perumal"
     class="lazy-load">
```

### **Responsive Images**

```html
<picture>
  <source media="(min-width: 1024px)" srcset="./assets/images/deity-large.jpg">
  <source media="(min-width: 768px)" srcset="./assets/images/deity-medium.jpg">
  <img src="./assets/images/deity-small.jpg" alt="Deity">
</picture>
```

---

## 📊 **Current Website Status**

### **✅ Already Implemented:**

1. **Instagram Link Card** (line ~525)
   - Beautiful gradient card
   - Instagram icon and branding
   - Direct link to Instagram account
   - Follower count display

2. **Deity Placeholder Cards** (line ~550)
   - Three cards for three postures
   - Gradient backgrounds with icons
   - Descriptive text ready
   - Proper styling and spacing

3. **Instructions Section** (line ~600)
   - Guidance for adding images
   - Link to Instagram
   - Folder structure reference

### **📝 To Be Done:**

1. **Get Permission** from Instagram account owner
2. **Download Images** with permission
3. **Optimize Images** for web
4. **Replace Placeholders** with real photos
5. **Add Image Credits** where appropriate
6. **Test on Mobile** devices

---

## 🚀 **Quick Start Guide**

### **For Immediate Results:**

**Option 1: Use Instagram Embeds (5 minutes)**
1. Go to Instagram posts you want to feature
2. Get embed codes (click ••• → Embed)
3. Replace placeholder cards in index.html
4. Add Instagram script before `</body>`
5. Done! Auto-updating gallery

**Option 2: Manual Image Addition (30 minutes)**
1. Contact Instagram owner for permission
2. Download 3-5 key deity images
3. Optimize with TinyPNG.com
4. Save to `assets/images/deities/`
5. Update HTML image sources
6. Add credits in captions
7. Test and commit to Git

---

## 📞 **Need Help?**

### **Instagram Account Owner:**
- **Handle**: @thirukoshtiyur_asvr_madhavan_
- **Method**: Send Instagram DM
- **Purpose**: Request permission and high-res images

### **Alternative Contacts:**
- **Temple Office**: 04575-241233
- **Email**: sowmiyan@sancharnet.in
- **Administrative**: Mr. Babu Samy - 9047904690

---

## ✅ **Legal Checklist**

Before using ANY image:

- [ ] Permission obtained from photographer/owner
- [ ] High-resolution version requested
- [ ] Credit/attribution agreed upon
- [ ] Usage rights clarified (website, social media, etc.)
- [ ] Written permission saved for records
- [ ] Photo credits added to website
- [ ] Link back to Instagram account provided

---

## 🎯 **Best Practice: Complete Workflow**

1. **Week 1**: Contact Instagram account, request permission
2. **Week 2**: Receive high-res images, organize into folders
3. **Week 3**: Optimize images, update website HTML
4. **Week 4**: Test website, add credits, push to GitHub
5. **Week 5**: Go live on Cloudflare Pages!

---

## 📖 **Summary**

You now have three options:

| Method | Pros | Cons | Time | Legal |
|--------|------|------|------|-------|
| **Instagram Embeds** | Auto-updating, legal, easy | Requires internet | 5 min | ✅ Safe |
| **Downloaded Images** | Full control, fast loading | Needs permission | 30 min | ⚠️ Need permission |
| **Your Own Photos** | No permission needed | Need camera access | Varies | ✅ Safe |

**Recommended**: Start with Instagram embeds for immediate results, then gradually replace with optimized downloaded images once you have permission.

---

## 🙏 **Current Implementation**

Your website now features:
- ✅ Beautiful Instagram integration card
- ✅ Direct link to temple Instagram account
- ✅ Three placeholder deity cards (ready for real images)
- ✅ Instructions for users on how to add images
- ✅ Proper folder structure for images
- ✅ SEO-optimized alt text templates
- ✅ Mobile-responsive design

**Location**: [index.html](../index.html) line ~522-640

**To view**: Open index.html in browser and scroll to "Divine Glimpses" section

---

**|| ஓம் நமோ நாராயணாய ||** 🙏

Ready to showcase the divine beauty of Thirukoshtiyur Temple!
