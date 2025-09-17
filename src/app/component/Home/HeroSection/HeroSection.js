"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl px-6 sm:px-10 lg:px-9 py-28 text-center lg:text-left">
        {/* Heading */}
        <h1
          className=" tracking-tight leading-[1.1] 
                     text-5xl sm:text-6xl lg:text-[90px] uppercase"
        >
          THE CMS THAT
          <br />
          <span
            className="bg-clip-text text-transparent 
                       bg-[url('/Home/textback.webp')] bg-cover bg-center"
          >
            TRULY MANAGES
          </span>
          <br />
          CONTENT
        </h1>

        {/* Sub text */}
        <p
          className="mt-8 text-gray-300 text-lg sm:text-xl lg:text-2xl 
                     font-light leading-relaxed max-w-4xl"
        >
          More teams. More channels. More moving parts than ever. Kontent.ai makes
          the complex simple, so you can publish content anywhere and drive real
          impact, faster.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <Link
            href="#"
            className="px-10 py-4 rounded-full border border-white text-white 
                       font-semibold text-lg hover:bg-white hover:text-black 
                       transition w-full sm:w-auto text-center"
          >
            See if we’re a fit
          </Link>
          <Link
            href="#"
            className="px-10 py-4 rounded-full border border-white text-white 
                       font-semibold text-lg hover:bg-white hover:text-black 
                       transition w-full sm:w-auto text-center"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </section>
  );
}
