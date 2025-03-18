export default function Home() {
  return (
    <main className="flex flex-col items-left p-5 md:p-8 md:pb-20 w-full my-0 mx-auto">
      <article className="flex flex-col gap-12">
          <div className="w-full sm:w-3/5 xl:w-2/5 2xl:w-1/3 flex flex-col justify-center text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Hi, I&apos;m Lisa.
            </h1>
            <p className="leading-[1.33]">
              I&apos;m an experienced product designer passionate about partnering with collaborators to bring ideas to life. <span className="text-bold text-[#9F9915]">Currently, I&apos;m available for new projects and opportunities starting in April 2025.</span>
            </p>
            <p className="leading-[1.33]">
              Most recently, I was a Staff Product Designer at Meta & Instagram. As a generalist designer, I spent the past 13 years working across multiple aspects of design (including research, product management, and front-end development) in a wide breadth of environments and domains.
            </p>
            <p className="leading-[1.33]">
              I&apos;m reachable via <a href="mailto:hello@lisasy.com" className="underline">email</a>. My resume is available <a href="https://read.cv/lisasy" className="underline" target="_blank" rel="noreferrer">here</a>.
            </p>
          </div>
      </article>
    </main>
  )
}
