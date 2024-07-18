import Link from "next/link";


interface Heroprops {
  src: string;
}

const Hero: React.FC<Heroprops> = ({
  src
}) => {
  return (
    <>
        <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 sm:mt-[34px] md:pb-[120px]  xl:pb-[160px] md:mt-[34px] 2xl:pb-[200px] 2xl:mt-[34px]"
      >
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
            playsInline 
            tabIndex={0}
            preload="auto"
            muted
            loop
            autoPlay
            src={src}
          ></video>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="mx-auto max-w-[800px] text-center mt-36">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Free and Open-Source Next.js Template for Startup & SaaS
            </h1>
            <p className="mb-12 text-white !leading-relaxed text-body-color  sm:text-lg md:text-xl">
              Startup is free Next.js template for startups and SaaS
              business websites comes with all the essential pages,
              components, and sections you need to launch a complete
              business website, built-with Next 13.x and Tailwind CSS.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://nextjstemplates.com/templates/saas-starter-startup"
                className="rounded-sm bg-[#2f76b4] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#2f76b4]/80"
              >
                🔥 Get Pro
              </Link>
              <Link
                href="https://github.com/NextJSTemplates/startup-nextjs"
                className="inline-block rounded-sm bg-[#2f76b4] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#2f76b4]/80"
              >
                Star on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
