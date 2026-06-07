import React from 'react';
import ItemLink from '@/components/ItemLink';
import PageSection from '@/components/PageSection';
import { getWorkItems } from '@/lib/item';

export default function Work() {
  const workItems = getWorkItems();

  return (
    <article>
      <PageSection className="gap-3">
        <h3>Selected Works</h3>

        <div className="grid grid-cols-1 gap-8 mt-5">
          {workItems.map((item) => (
            <div key={item.slug} className="flex flex-col gap-4">
              <div className="relative w-full overflow-hidden">
                <ItemLink
                  slug={item.slug}
                  basePath="/work"
                  publicId={item.publicId}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full"
                  usePlaceholder={item.publicId === "sample"}
                />
              </div>
              <div>
                <h6 className="mb-2 text-text-secondary">{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </article>
  )
}
