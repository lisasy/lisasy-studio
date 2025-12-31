import React from 'react';
import { notFound } from 'next/navigation';
import ItemPageClient from '@/components/ItemPageClient';
import { getItemBySlug, getAllItems } from '@/lib/item';

export async function generateStaticParams() {
  const allItems = getAllItems();
  const workItems = allItems.filter(item => item.source === 'work');
  return workItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function WorkItemPage({ params }) {
  const item = getItemBySlug(params.slug);

  if (!item || item.source !== 'work') {
    notFound();
  }

  return <ItemPageClient item={item} slug={params.slug} basePath="/work" />;
}

