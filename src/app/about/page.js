import React from 'react';
import TwoColumn from '@/components/TwoColumn';
import PageSection from '@/components/PageSection';

export default function About() {
  return (
    <article>
      <PageSection>
        <h3 className="mb-5">About</h3>
        <p>
          My name is Lisa Sy and I&apos;m an artist, painter, illustrator, and writer based in Los Angeles, CA. I&apos;m fascinated by the natural world and our attention to it. I&apos;m attuned to capturing moments in space and time,
          portrayed through plein air painting, naturalist documentation, and quiet reflection.
        </p>
        <TwoColumn title="Artist Statement">
          <p>
           My work is inspired by the natural world and our relationship to it. Working in plein air, I often paint and draw natural and built urban landscapes, ranging from desert and mountainscapes, to bustling city plazas replete with people. By intentionally inserting myself into a place as an observer and painter, I slow down to notice what&apos;s easily missed—the quality of light at a particular hour, the way a place composes itself , the life of a seemingly static scene. Through my art, I strive to capture and amplify the beauty of these often overlooked and under-appreciated moments by pointing attention to them. I hope my art invites you to pause, reflect, and find wonder in the seemingly ordinary.
          </p>
        </TwoColumn>
        <TwoColumn title="Education">
          <p>
            Wesleyan University, B.A. in American Studies, with coursework in Studio Art.
          </p>
        </TwoColumn>
        <TwoColumn title="Contact">
          <p>
            For inquiries, please contact me at <a href="mailto:hello@lisasy.com" className="underline">hello@lisasy.com</a>.
          </p>
        </TwoColumn>
      </PageSection>
    </article>
  )
}
