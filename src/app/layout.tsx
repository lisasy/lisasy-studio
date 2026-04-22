import './globals.css'
import Navigation from '@/components/Navigation'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lisa Sy',
  description: 'Product designer and artist based in Los Angeles, CA',
  keywords: ['product design', 'software design', 'art', 'illustration', 'plein air', 'painting'],
  authors: [{ name: 'Lisa Sy' }],
  openGraph: {
    title: 'Lisa Sy',
    description: 'Product designer and artist based in Los Angeles, CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lisa Sy',
    description: 'Product designer and artist based in Los Angeles, CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Navigation />
        
        <main className="grow pt-16 p-6 md:p-8 md:ml-[var(--layout-main-ml)]">
          <div className="w-full max-w-4xl mx-auto md:-translate-x-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
