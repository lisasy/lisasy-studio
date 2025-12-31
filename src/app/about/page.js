import React from 'react';
import TwoColumn from '@/components/TwoColumn';

export default function About() {
  return (
    <article className="w-full lg:w-2/3">
      <div className=" text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">
        <h3 className="mb-5">About</h3>
        <p>
          Lisa Sy is an artist and illustrator fascinated by the natural world and our attention to it. Based in Southern
          California, she is attuned to capturing moments in space and time,
          portrayed through plein air painting, naturalist documentation, and quiet reflection.
        </p>
        <TwoColumn title="Artist Statement">
          <p className="smaller">
            My work is inspired by the natural world - its moments, its subtleties, and its lessons. Through my art, I strive to capture and amplify the beauty of these often overlooked and under-appreciated moments by pointing attention to them. I hope my art invites you to pause, reflect, and find wonder in the seemingly ordinary.
          </p>
        </TwoColumn>
        <TwoColumn title="Education">
          <p className="smaller">
            Wesleyan University, B.A. in American Studies, with coursework in Studio Art.
          </p>
        </TwoColumn>
        <TwoColumn title="Contact">
          <p className="smaller">
            For inquiries, please contact me at <a href="mailto:hello@lisasy.com" className="underline">hello@lisasy.com</a>.
          </p>
        </TwoColumn>
      </div>
    </article>
  )
}
