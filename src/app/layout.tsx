import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Lisa Sy · Design & Art',
  description: 'Lisa Sy is an artist & product designer based in Los Angeles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-xl lg:text-3xl">
        <nav className="flex gap-4 justify-between fixed top-8 inset-x-5 md:inset-x-8 flex-col md:flex-row">
          <div className="flex justify-between w-full gap-6 md:gap-12">
            <ul className="flex gap-6 md:gap-12 justify-between w-auto md:justify-start ">
              <li><a href="">About</a></li>
              <li><a href="https://naturalmatter.shop/" target="_blank" rel="noreferrer">Shop</a></li>
              <li><a href="https://read.cv/lisasy" target="_blank" rel="noreferrer">Resume</a></li>
            </ul>
            <ul className="flex gap-6 md:gap-12 justify-between md:justify-start ">
              <li><a href="https://www.instagram.com/lisasystudio/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@lisasystudio" target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a href="https://www.tiktok.com/@lisasystudio" target="_blank" rel="noreferrer">Email</a></li>
            </ul> 
          </div>
        </nav>
        
        {children}
      
        <footer className="w-full my-0 mx-auto px-5 pb-8 md:px-8 md:pb-8 text-2xl lg:text-3xl 2xl:text-4xl">
          <div className="flex flex-col gap-4 md:gap-8 md:flex-row justify-between text-[#5B89FF]">
            <div className="lg:w-1/2 text-xl">
              <p className="w-full lg:w-3/5">
              Featuring <a href="https://pangrampangram.com/products/editorial-new" class="underline" target="_blank" rel="noreferrer"></a> by Pangram Pangram Foundry.
              <br />Built by Lisa Sy using Next.js and Vercel.
              </p>
            </div>
            <div className="text-xl lg:w-1/2 md:text-right">
              <p>Remember to be a kind person.</p>
              <p>Copyright 2023</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
