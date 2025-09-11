"use client";
import Link from "next/link";

export default function FeatureHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-20 text-center">
        {/* Heading */}
        <h1
          className="tracking-tight leading-[1.15] 
                     text-4xl sm:text-5xl md:text-7xl lg:text-[90px] xl:text-[110px] 
                      uppercase"
        >
          Explore{" "} <br />
          <span
            className="bg-clip-text text-transparent 
                       bg-[url('/Home/textback.webp')] bg-cover bg-center"
          >
            Features
          </span>
        </h1>

        {/* Sub text */}
        <p
          className="mt-6 sm:mt-8 md:mt-10 text-gray-300 
                     text-base sm:text-lg md:text-xl lg:text-[1.25rem] 
                     font-medium max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
        >
          Kontent.ai is the preferred CMS for organizations who see content as
          core to their business. Dive into the features that help them improve
          every aspect of content management to speed up their content’s time to
          value.
        </p>

        {/* Buttons */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            href="#"
            className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full border border-white text-white 
                       font-semibold text-base sm:text-lg lg:text-xl 
                       hover:bg-white hover:text-black transition w-full sm:w-auto text-center"
          >
            See if we’re a fit
          </Link>
          <Link
            href="#"
            className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full border border-white text-white 
                       font-semibold text-base sm:text-lg lg:text-xl 
                       hover:bg-white hover:text-black transition w-full sm:w-auto text-center"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </section>
  );
}
