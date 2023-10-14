import Image from 'next/image'

const imageStyle = {
  margin: "0 auto",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-5 md:p-8 md:pb-20 w-full my-0 mx-auto">
      <article className="min-h-screen flex flex-col gap-12">
          <div className="w-full min-h-screen flex flex-col justify-center text-center text-4xl md:text-6xl lg:text-7xl leading-tight gap-0 md:gap-4">
            <h1 className="text-5xl md:text-7xl lg:text-9xl">
              Lisa Sy
            </h1>
            <h2>
              Artist, Designer, & Illustrator
            </h2>
            <h2>
              Owner of <i>Natural Matter</i>
            </h2>
            <h2>
              Staff Designer at <i>Instagran</i>
            </h2>
            <h2>
              Based in Los Angeles
            </h2>
          </div>

      </article>
    </main>


  )
}
