import React from 'react';
import ItemLink from '@/components/ItemLink';
import { getWorkItems } from '@/lib/item';

export default function Work() {
  const workItems = getWorkItems();

  return (
    <article className="">
      <div className="text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-3">
        <h3>Selected Works</h3>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-8 mt-5">
          {workItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
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
      </div>
    </article>
  )
}
