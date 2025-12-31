# Cloudinary Setup Guide

## Step 1: Create a Cloudinary Account
1. Go to https://cloudinary.com/ and sign up for a free account
2. Once logged in, go to your Dashboard
3. You'll see your **Cloud Name**, **API Key**, and **API Secret**

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the root of your project with:

```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

Replace the values with your actual Cloudinary credentials from the Dashboard.

**Important:** The `.env.local` file is already in `.gitignore`, so your secrets won't be committed.

## Step 3: Restart Your Dev Server

After creating `.env.local`, restart your Next.js dev server:
```bash
npm run dev
```

## Usage Examples

### Using the CloudinaryImage Component

```javascript
import CloudinaryImage from '@/components/CloudinaryImage';

// Basic usage
<CloudinaryImage
  publicId="lisa-sy-com/portfolio/work-1"
  alt="My portfolio work"
  width={800}
  height={600}
/>

// With custom transformations
<CloudinaryImage
  publicId="lisa-sy-com/portfolio/work-1"
  alt="My portfolio work"
  width={800}
  height={600}
  cloudinaryOptions={{
    quality: '80',
    crop: 'fill',
    gravity: 'auto'
  }}
/>
```

### Using Cloudinary Utility Functions

```javascript
import { getCloudinaryUrl } from '@/lib/cloudinary';

// Get optimized URL
const imageUrl = getCloudinaryUrl('lisa-sy-com/portfolio/work-1', {
  width: 800,
  height: 600,
  quality: 'auto'
});
```

### Uploading Images (from a form)

```javascript
const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/upload-image', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  console.log('Uploaded:', data.publicId, data.url);
};
```

## Cloudinary Dashboard Tips

1. **Organize with Folders**: Images uploaded with `folder: 'lisa-sy-com'` will be organized in your Cloudinary Media Library
2. **Transformations**: Cloudinary automatically optimizes images, but you can add transformations in the URL
3. **Free Tier**: 25GB storage, 25GB bandwidth/month - perfect for portfolio sites!

## Public ID Format

When you upload an image, Cloudinary returns a `public_id`. Use this in your components:
- Example public_id: `lisa-sy-com/portfolio/work-1`
- Full URL would be: `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/lisa-sy-com/portfolio/work-1`

