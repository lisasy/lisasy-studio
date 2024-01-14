import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-xl lg:text-2xl">
       
        
        {children}
      
        <footer className="w-full my-0 mx-auto px-5 pb-8 md:px-8 md:pb-8 text-xl lg:text-2xl 2xl:text-3xl text-[#51D696]">
          <div className="flex flex-col gap-4 md:gap-8 md:flex-row justify-between">
            <div className="lg:w-1/2 text-xl">
              <p className="w-full">
              Featuring <a href="https://pangrampangram.com/products/editorial-new" className="underline" target="_blank" rel="noreferrer">GT America</a> by Pangram Pangram Foundry.
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
