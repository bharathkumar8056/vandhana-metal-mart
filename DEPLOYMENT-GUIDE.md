# Vandhanaa Metal Mart - Deployment Guide

## ✅ Changes Completed

### 1. Product Images Path Updated
- Changed from `/vessels/` to `/assets/`
- All 48 product images now load from `/assets/vessel-1.jpg` through `/assets/vessel-48.jpg`

### 2. Logo Path Updated
- Changed from `/logo.png` to `/assets/logo.png`
- Updated in both Navbar and Footer components

### 3. Build Configuration Optimized
- Added `output: 'export'` for static site generation (perfect for Netlify)
- Added `images: { unoptimized: true }` to prevent image optimization errors
- Configured for production deployment

### 4. Netlify Configuration Added
- Created `netlify.toml` with proper build settings
- Build command: `npm run build`
- Publish directory: `out`

## 📁 Required Image Files

### You need to add these images to `public/assets/` folder:

#### Logo (1 file)
```
public/assets/logo.png
```
- Recommended size: 200x200px (square)
- Format: PNG with transparent background

#### Product Images (48 files)
```
public/assets/vessel-1.jpg
public/assets/vessel-2.jpg
public/assets/vessel-3.jpg
...
public/assets/vessel-48.jpg
```
- Recommended size: 800x800px (square)
- Format: JPG/JPEG
- **IMPORTANT:** Filenames must be exactly as shown (lowercase, with hyphen)

## 🚀 Deploying to Netlify

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build` in your project
2. The build creates an `out` folder
3. Go to [Netlify Drop](https://app.netlify.com/drop)
4. Drag the `out` folder to deploy

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically use the settings from `netlify.toml`
4. Build command: `npm run build`
5. Publish directory: `out`

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

## ⚠️ Important Notes

### About the Lockfile Warning
You may see this warning during development:
```
Warning: Next.js inferred your workspace root, but it may not be correct.
We detected multiple lockfiles...
```

**This warning is SAFE to ignore because:**
- It's caused by a `package-lock.json` file in your parent directory (`C:\Users\bhara\`)
- It does NOT affect the build or deployment
- The build completes successfully
- Netlify deployment will work perfectly

**To remove the warning (optional):**
- Delete `C:\Users\bhara\package-lock.json` if it's not needed for other projects
- OR just ignore it - it won't cause any issues

### Build Success Confirmation
When you run `npm run build`, you should see:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

## 📋 Pre-Deployment Checklist

- [ ] Add `logo.png` to `public/assets/`
- [ ] Add all 48 product images (`vessel-1.jpg` to `vessel-48.jpg`) to `public/assets/`
- [ ] Run `npm run build` to test the build locally
- [ ] Check that the `out` folder is created successfully
- [ ] Deploy to Netlify using one of the methods above

## 🔍 Testing Locally

Before deploying, test your site locally:

```bash
# Build the site
npm run build

# Serve the static files (install serve if needed)
npx serve out
```

Then open http://localhost:3000 in your browser.

## 📝 Image Naming Reference

The website code automatically generates image paths like this:
```javascript
const vessels = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  image: `/assets/vessel-${i + 1}.jpg`,  // vessel-1.jpg, vessel-2.jpg, etc.
  name: `Premium Vessel ${i + 1}`,
}));
```

So your image filenames MUST match this pattern exactly:
- `vessel-1.jpg` (NOT `Vessel-1.jpg` or `vessel_1.jpg` or `vessel1.jpg`)
- Numbers from 1 to 48
- Lowercase letters
- Hyphen between "vessel" and number
- `.jpg` extension

## 🎯 Final Result

After deployment, your website will:
- ✅ Load without any errors
- ✅ Display all 48 product images in a 6-column grid
- ✅ Show your company logo in navbar and footer
- ✅ Be fully static and fast-loading
- ✅ Work perfectly on Netlify

## 📞 Need Help?

If you encounter any issues:
1. Check that all image files are in the correct location
2. Verify filenames match exactly (case-sensitive)
3. Run `npm run build` and check for errors
4. Check the browser console for 404 errors on images

