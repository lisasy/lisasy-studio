import React from 'react';

export default function Styleguide() {
  return (
    <article className="">
      <div className="text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8">Styleguide</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Typography</h2>
          
          <div className="space-y-8">
            {/* Heading 1 */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2">Heading 1</h1>
              <p className="text-sm text-gray-600">Classes: text-3xl md:text-4xl lg:text-5xl</p>
              <p className="text-sm text-gray-600">Size: 1.875rem / 2.25rem / 3rem (30px / 36px / 48px)</p>
            </div>

            {/* Heading 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">Heading 2</h2>
              <p className="text-sm text-gray-600">Classes: text-2xl md:text-3xl lg:text-4xl</p>
              <p className="text-sm text-gray-600">Size: 1.5rem / 1.875rem / 2.25rem (24px / 30px / 36px)</p>
            </div>

            {/* Heading 3 */}
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl mb-2">Heading 3</h3>
              <p className="text-sm text-gray-600">Classes: text-xl md:text-2xl lg:text-3xl</p>
              <p className="text-sm text-gray-600">Size: 1.25rem / 1.5rem / 1.875rem (20px / 24px / 30px)</p>
            </div>

            {/* Heading 4 */}
            <div>
              <h4 className="text-lg md:text-xl lg:text-2xl mb-2">Heading 4</h4>
              <p className="text-sm text-gray-600">Classes: text-lg md:text-xl lg:text-2xl</p>
              <p className="text-sm text-gray-600">Size: 1.125rem / 1.25rem / 1.5rem (18px / 20px / 24px)</p>
            </div>

            {/* Heading 5 */}
            <div>
              <h5 className="text-base md:text-lg lg:text-xl mb-2">Heading 5</h5>
              <p className="text-sm text-gray-600">Classes: text-base md:text-lg lg:text-xl</p>
              <p className="text-sm text-gray-600">Size: 1rem / 1.125rem / 1.25rem (16px / 18px / 20px)</p>
            </div>

            {/* Heading 6 */}
            <div>
              <h6 className="text-sm md:text-base lg:text-lg mb-2">Heading 6</h6>
              <p className="text-sm text-gray-600">Classes: text-sm md:text-base lg:text-lg</p>
              <p className="text-sm text-gray-600">Size: 0.875rem / 1rem / 1.125rem (14px / 16px / 18px)</p>
            </div>

            {/* Paragraph */}
            <div>
              <p className="mb-2">Paragraph - This is the default paragraph text. It uses the base typography scale with a line height of 1.33 for optimal readability. The text scales responsively across different screen sizes.</p>
              <p className="text-sm text-gray-600">Classes: text-lg md:text-xl lg:text-2xl leading-[1.33]</p>
              <p className="text-sm text-gray-600">Size: 1.125rem / 1.25rem / 1.5rem (18px / 20px / 24px)</p>
            </div>

            {/* Paragraph Small */}
            <div>
              <p className="mb-2">Paragraph Small - This is the small paragraph text. It uses the base typography scale with a line height of 1.33 for optimal readability. The text scales responsively across different screen sizes.</p>
              <p className="text-sm text-gray-600">Classes: text-sm md:text-base lg:text-lg leading-[1.33]</p>
              <p className="text-sm text-gray-600">Size: 0.75rem / 0.875rem / 1rem (12px / 14px / 16px)</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Usage Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">Article Title</h1>
              <p className="mb-4">
                This is a paragraph that follows a heading. The typography creates a clear hierarchy that guides the reader through the content. The line height of 1.33 ensures comfortable reading.
              </p>
              <p>
                Additional paragraphs maintain consistent spacing and sizing, creating a cohesive reading experience across the entire page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Section Heading</h2>
              <p className="mb-4">
                Subheadings help organize content into logical sections. They provide visual breaks and help readers scan and navigate through longer pieces of content.
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl mb-3 mt-6">Subsection</h3>
              <p>
                Smaller headings can be used for subsections within a larger section, maintaining the hierarchy while providing additional structure.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

