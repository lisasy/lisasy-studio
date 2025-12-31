import React from 'react';
import ItemLink from '@/components/ItemLink';
import { getSketchItems } from '@/lib/item';

export default function Sketches() {
  const sketches = getSketchItems();

  return (
    <article className="">
      <div className="text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">
        <h3>Sketches</h3>

        {/* Image Grid - Masonry style layout */}
        <div className="columns-1 md:columns-2 gap-4 mt-5">
          {sketches.map((sketch) => (
            <div key={sketch.id} className="break-inside-avoid mb-4">
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
      </div>
    </article>
  )
}
