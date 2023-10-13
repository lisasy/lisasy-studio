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
      <body className="text-2xl lg:text-3xl 2xl:text-4xl">
        <nav className="flex gap-4 justify-between fixed top-8 inset-x-5 md:inset-x-8 flex-col md:flex-row">
          <div className="flex gap-4 md:gap-12">
            <ul className="flex gap-8 justify-between w-full md:w-auto md:justify-start md:gap-20 lg:gap-24">
              <li><a href="/">Lisa Sy</a></li>
              <li><a href="">About</a></li>
              <li><a href="https://naturalmatter.shop/">Shop</a></li>
              <li><a href="">Journal</a></li>
            </ul>
          </div>
          <div>
            <a href="" className='text-[#8E8E8E]'>hello@lisasy.com</a>
          </div>
        </nav>
        
        {children}
      
        <footer className="w-full my-0 mx-auto px-5 pb-8 md:px-8 md:pb-8 text-2xl lg:text-3xl 2xl:text-4xl">
          <div className="flex justify-between mb-12 flex-col md:flex-row">
            <ul className="flex gap-0 justify-between md:justify-start md:gap-16 lg:gap-20">
                <li><a href="https://www.instagram.com/lisasystudio/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@lisasystudio" target="_blank" rel="noreferrer">TikTok</a></li>
                <li><a href="http://goldfish-elk-xt3m.squarespace.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul> 
            <div className="text-[#8E8E8E]">
              Los Angeles, CA
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 md:flex-row justify-between text-[#8E8E8E]">
            <div className="lg:w-1/2 text-xl">
              <p className="w-3/5">
              Featuring <a href="https://www.grillitype.com/typeface/gt-america" target="_blank" rel="noreferrer">GT America Standard</a> by Grilli Type
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
