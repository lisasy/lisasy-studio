import './globals.css'
import Navigation from '@/components/Navigation'
import { NAV_WIDTH, CONTENT_PADDING, MOBILE_HEADER_HEIGHT } from '@/lib/constants';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Navigation />
        
        <main className="grow pt-16 p-6 md:p-8 md:ml-[16rem]">
          {children}
        </main>
      </body>
    </html>
  )
}
