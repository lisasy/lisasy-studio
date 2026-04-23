import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: 'Notes FAQ',
};

export default function NotesFaqPage() {
  const faqPath = path.join(process.cwd(), 'notes-faq');
  const markdown = fs.existsSync(faqPath) ? fs.readFileSync(faqPath, 'utf8') : '# Notes FAQ\n\nMissing `notes-faq` file.';

  return (
    <article>
      <div className="max-w-3xl text-left text-lg md:text-xl lg:text-2xl leading-[1.33] space-y-6">
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p className="smaller" {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </article>
  );
}

