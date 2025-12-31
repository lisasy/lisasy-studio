# Cloudinary Integration - Quick Start Guide

## What Has Been Set Up

I've set up Cloudinary integration for your Next.js site. Here's what's ready:

### ✅ Installed Packages
- `next-cloudinary` - Next.js integration for Cloudinary
- `cloudinary` - Cloudinary SDK

### ✅ Files Created
1. **`src/lib/cloudinary.js`** - Server-side utilities for uploading/deleting images
2. **`src/components/CloudinaryImage.js`** - React component for displaying optimized images
3. **`src/app/api/upload-image/route.js`** - API endpoint for uploading images
4. **`next.config.js`** - Updated to allow Cloudinary image domains

### ✅ Pages Updated
- **Work page** (`src/app/work/page.js`) - Grid layout with placeholder images
- **Sketches page** (`src/app/sketches/page.js`) - Masonry layout with placeholder images

## What You Need To Do Next

### Step 1: Create Cloudinary Account (5 minutes)

1. Go to https://cloudinary.com/users/register_free
2. Sign up for a free account (25GB storage + 25GB bandwidth/month)
3. Verify your email if needed

### Step 2: Get Your Credentials

1. Log into Cloudinary Dashboard
2. On the Dashboard, you'll see:
   - **Cloud Name** (e.g., `demo` or `yourname`)
   - **API Key** (a long string of numbers)
   - **API Secret** (click "Reveal" to see it)

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root of your project (same level as `package.json`):

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

**Replace the values** with your actual credentials from Step 2.

### Step 4: Restart Your Dev Server

```bash
# Stop your current server (Ctrl+C), then:
npm run dev
```

### Step 5: Upload Your Images

You have **two options**:

#### Option A: Upload via Cloudinary Dashboard (Easiest)

1. Go to your Cloudinary Dashboard → Media Library
2. Click "Upload" button
3. Select your images
4. After upload, you'll see each image has a **Public ID**
5. Copy the Public ID (it might look like: `lisa-sy-com/work-1` or just `work-1`)

#### Option B: Upload via Code (For Future)

You can build an admin interface using the `/api/upload-image` endpoint I created.

### Step 6: Replace Placeholder Images

In your code files, replace the placeholder `"sample"` publicIds with your actual image Public IDs:

**In `src/app/work/page.js`:**
```javascript
const workItems = [
  {
    id: 1,
    title: "Project One",
    publicId: "your-actual-public-id-here", // ← Replace this
    width: 800,
    height: 600,
    description: "Description of your work project."
  },
  // ... more items
];
```

**In `src/app/sketches/page.js`:**
```javascript
const sketches = [
  {
    id: 1,
    publicId: "your-actual-public-id-here", // ← Replace this
    width: 600,
    height: 800,
  },
  // ... more sketches
];
```

## How It Works

### CloudinaryImage Component

The `CloudinaryImage` component automatically:
- ✅ Optimizes images (WebP, AVIF formats)
- ✅ Resizes images based on your needs
- ✅ Lazy loads images
- ✅ Uses CDN for fast delivery
- ✅ Works with Next.js Image optimization

### Current Setup

- **Work page**: 3-column grid layout (responsive: 1 column mobile, 2 tablet, 3 desktop)
- **Sketches page**: Masonry/Pinterest-style layout (3 columns on desktop)
- **Placeholder images**: Currently using Cloudinary's sample images - replace with your own!

## Tips

1. **Organize with Folders**: When uploading, you can organize images into folders like:
   - `work/project-1`
   - `sketches/sketch-1`
   - This helps keep your library organized

2. **Image Sizes**: The component handles responsive sizing, but specify realistic `width` and `height` props for best performance

3. **Replace Placeholders**: All placeholder images use `publicId: "sample"` - replace these with your actual Cloudinary Public IDs

4. **Free Tier**: 25GB storage is plenty for a portfolio! You can upload hundreds of images.

## Need Help?

- Cloudinary Docs: https://cloudinary.com/documentation
- Next.js Image: https://nextjs.org/docs/pages/api-reference/components/image

