# Assets Folder - Image Naming Guide

## Required Images for Website

### Logo
- **Filename:** `logo.png`
- **Location:** `/public/assets/logo.png`
- **Used in:** Navbar and Footer
- **Recommended size:** 200x200px (square)

### Product Images (48 total)
All product images should be placed in this folder with the following naming pattern:

- **Filenames:** `vessel-1.jpg` through `vessel-48.jpg`
- **Location:** `/public/assets/`
- **Format:** JPG or JPEG
- **Recommended size:** 800x800px (square aspect ratio)

#### Complete List of Required Product Image Filenames:
```
vessel-1.jpg
vessel-2.jpg
vessel-3.jpg
vessel-4.jpg
vessel-5.jpg
vessel-6.jpg
vessel-7.jpg
vessel-8.jpg
vessel-9.jpg
vessel-10.jpg
vessel-11.jpg
vessel-12.jpg
vessel-13.jpg
vessel-14.jpg
vessel-15.jpg
vessel-16.jpg
vessel-17.jpg
vessel-18.jpg
vessel-19.jpg
vessel-20.jpg
vessel-21.jpg
vessel-22.jpg
vessel-23.jpg
vessel-24.jpg
vessel-25.jpg
vessel-26.jpg
vessel-27.jpg
vessel-28.jpg
vessel-29.jpg
vessel-30.jpg
vessel-31.jpg
vessel-32.jpg
vessel-33.jpg
vessel-34.jpg
vessel-35.jpg
vessel-36.jpg
vessel-37.jpg
vessel-38.jpg
vessel-39.jpg
vessel-40.jpg
vessel-41.jpg
vessel-42.jpg
vessel-43.jpg
vessel-44.jpg
vessel-45.jpg
vessel-46.jpg
vessel-47.jpg
vessel-48.jpg
```

## How Images Are Used

The website automatically loads these images in order:
- Product 1 displays `vessel-1.jpg`
- Product 2 displays `vessel-2.jpg`
- ... and so on up to Product 48

## File Structure
```
public/
└── assets/
    ├── logo.png          (Company logo)
    ├── vessel-1.jpg      (Product 1)
    ├── vessel-2.jpg      (Product 2)
    ├── vessel-3.jpg      (Product 3)
    └── ...
    └── vessel-48.jpg     (Product 48)
```

## Important Notes
- All filenames must be **lowercase**
- Use **exact** naming: `vessel-1.jpg` NOT `Vessel-1.jpg` or `vessel_1.jpg`
- The number in the filename determines the display order on the website
- Images will be displayed in a 6-column grid on desktop
- Missing images will show errors in the browser console

