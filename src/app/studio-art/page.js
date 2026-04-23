import React from 'react';
import ItemLink from '@/components/ItemLink';
import { getWorkItems } from '@/lib/item';

export default function StudioArt() {
  const workItems = getWorkItems();

  return (
    <article>
      <div className="text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-3">
        <h3>Studio Art</h3>
        <p className="smaller mt-5 mb-12">
          I'm an artist, painter, illustrator, and writer based in Los Angeles, CA. My work is inspired by the natural world and our relationship to it. Working in plein air, I often paint and draw natural and built urban landscapes, ranging from desert and mountainscapes, to bustling city plazas replete with people. Through my art, I strive to capture and amplify the beauty of these often overlooked and under-appreciated moments by pointing attention to them. I hope my art invites you to pause, reflect, and find wonder in the seemingly ordinary.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-5">
          {workItems.map((item) => (
            <div key={item.slug} className="flex flex-col gap-4">
              <div className="relative w-full overflow-hidden">
                <ItemLink
                  slug={item.slug}
                  basePath="/studio-art"
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
  );
}
