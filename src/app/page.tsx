import Image from 'next/image'

const imageStyle = {
  margin: "0 auto",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-5 md:p-8 md:pb-20 w-full my-0 mx-auto">
      <article className="min-h-screen flex flex-col gap-12">
        <div className="flex items-end flex-row w-full">
          <div className="w-full mt-16">
            <h2 className="text-2xl lg:text-3xl 2xl:text-4xl md:leading-tight lg:leading-tight md:w-1/2">
            Hello, I’m Lisa. I am passionate about
            creating well-crafted products as a product designer in my
            decade-long career, storytelling as an artist and illustrator, &
            inspiring others along my journey.
            </h2>
          </div>
        </div>
          <div className="grid grid-cols-3 gap-8 text-center mt-24">
            <div>
              <Image
                  src="/assets/instagram.png"
                  width={300}
                  height={300}
                  alt="Lisa Sy"
                  quality={100}
                  style={imageStyle}
                />
              <h2 className="text-2xl lg:text-3xl 2xl:text-4xl md:leading-tight lg:leading-tight">
                Staff Product Designer <br /> at Instagram
              </h2> 
            </div>
            <div>
              <Image
                  src="/assets/naturalmatter.png"
                  width={300}
                  height={300}
                  quality={100}
                  alt="Lisa Sy"
                  style={imageStyle}
                />
              <h2 className="text-2xl lg:text-3xl 2xl:text-4xl md:leading-tight lg:leading-tight">
                Founder & Owner <br /> of Natural Matter
              </h2> 
            </div>
            <div>
              <Image
                  src="/assets/los-angeles.png"
                  width={300}
                  height={300}
                  quality={100}
                  alt="Lisa Sy"
                  style={imageStyle}
                />
              <h2 className="text-2xl lg:text-3xl 2xl:text-4xl md:leading-tight lg:leading-tight">
                Based in <br /> Los Angeles
              </h2> 
            </div>
          </div>
      </article>
    </main>


  )
}
