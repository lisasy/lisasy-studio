import Image from 'next/image'
import Navigation from '/components/Navigation.js';


const imageStyle = {
  margin: "0 auto",
}

export default function Home() {
  return (
    <main className="flex min-h-[50vh] md:min-h-screen flex-col items-left p-5 md:p-8 md:pb-20 w-full my-0 mx-auto">
       <Navigation />
      <article className="min-h-[50vh] md:min-h-screen flex flex-col gap-12">
          <div className="w-full min-h-[50vh] md:min-h-screen flex flex-col justify-center text-left text-2xl md:text-3xl lg:text-4xl leading-tight gap-0 md:gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Lisa Sy
            </h1>
            <h2>
              Artist, Designer, & Illustrator in Los Angeles
            </h2>
            <h2>
              Founder and Owner of <a href="https://www.naturalmatter.shop/" class="underline">Natural Matter</a>
            </h2>
            <h2>
              Staff Product Designer at <a href="https://www.instagram.com" class="underline">Instagram</a>
            </h2>
              <div className="absolute w-[140px] md:w-[200px] -rotate-[12deg] top-[300px] md:top-[360px] right-[200px] hover:rotate-0 hover:cursor-pointer hover:scale-125 transition transition-timing-function: linear;">
                <Image
                  src={'/assets/la.gif'}
                  layout={'responsive'}
                  height={175}
                  width={175}
                  alt={`los angeles`}
                  unoptimized={true}
                />
            </div>
          </div>

      </article>
    </main>


  )
}
