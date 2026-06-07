import React from 'react';
import ItemLink from '@/components/ItemLink';
import PageSection from '@/components/PageSection';
import { getSketchItems } from '@/lib/item';

export default function Sketches() {
  const sketches = getSketchItems();

  return (
    <article>
      <PageSection>
        <h3>Sketches</h3>

        <div className="columns-1 md:columns-2 gap-4 mt-5">
          {sketches.map((sketch) => (
            <div key={sketch.slug} className="break-inside-avoid mb-4">
              <ItemLink
                slug={sketch.slug}
                basePath="/sketches"
                publicId={sketch.publicId}
                alt={sketch.title}
                width={sketch.width}
                height={sketch.height}
                className="w-full h-auto rounded"
                usePlaceholder={sketch.publicId === "sample"}
              />
            </div>
          ))}
        </div>
      </PageSection>
    </article>
  )
}
