import React from 'react';
import { notFound } from 'next/navigation';
import ItemPageClient from '@/components/ItemPageClient';
import { getItemBySlug, getAllItems } from '@/lib/item';

export async function generateStaticParams() {
  const allItems = getAllItems();
  const sketchItems = allItems.filter(item => item.source === 'sketches');
  return sketchItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function SketchItemPage({ params }) {
  const item = getItemBySlug(params.slug);

  if (!item || item.source !== 'sketches') {
    notFound();
  }

  return <ItemPageClient item={item} slug={params.slug} basePath="/sketches" />;
}

