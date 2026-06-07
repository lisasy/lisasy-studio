import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import PageSection from '@/components/PageSection';

export const metadata = {
  title: 'Notes FAQ',
};

export default function NotesFaqPage() {
  const faqPath = path.join(process.cwd(), 'notes-faq');
  const markdown = fs.existsSync(faqPath) ? fs.readFileSync(faqPath, 'utf8') : '# Notes FAQ\n\nMissing `notes-faq` file.';

  return (
    <article>
      <PageSection narrow className="space-y-6">
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </PageSection>
    </article>
  );
}
