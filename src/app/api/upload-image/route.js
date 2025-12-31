import { NextResponse } from 'next/server';
import { uploadImage } from '../../../lib/cloudinary';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert File to base64 or use upload_stream for better performance
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64}`;

    const result = await uploadImage(dataURI, {
      folder: 'lisa-sy-com',
      // Add any additional upload options here
    });

    return NextResponse.json({
      success: true,
      publicId: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}

