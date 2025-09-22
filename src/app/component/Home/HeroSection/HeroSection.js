"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl ml-auto lg:ml-0 px-4 sm:px-20 lg:px-35 pt-40 text-center lg:text-left">
        {/* Main Heading */}
        <h1
          className="tracking-tight 
                     text-6xl sm:text-7xl lg:text-[130px] font-semibold uppercase"
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

        {/* Subtitle */}
        <p
          className="mt-6 text-white text-lg sm:text-xl lg:text-1xl 
                      leading-relaxed max-w-3xl mx-auto lg:mx-0"
        >
          More teams. More channels. More moving parts than ever. Kontent.ai makes
          the complex simple, so you can publish content anywhere and drive real
          impact, faster.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
          <Link
            href="#"
            className="px-14 py-7 rounded-full border border-white bg-white text-black 
                       font-semibold hover:bg-black hover:text-white 
                       transition text-[1.2rem] w-full sm:w-auto text-center"
          >
            See if we're a fit
          </Link>
          <Link
            href="#"
            className="px-14 py-7 rounded-full border border-white text-white 
                       font-semibold text-[1.2rem] hover:bg-white hover:text-black 
                       transition w-full sm:w-auto text-center"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </section>
  );
}
