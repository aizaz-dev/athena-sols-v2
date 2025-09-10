"use client";
import Link from "next/link";

export default function ThePlatForm() {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl px-6 sm:px-10 lg:px-12 py-20 text-center">
        {/* Heading */}
        <h1
          className="font-extrabold tracking-tight leading-[1.1] 
                     text-5xl sm:text-6xl lg:text-[90px] uppercase"
        >
          EXPLORE{" "}
          <span
            className="bg-clip-text text-transparent 
                       bg-[url('/Home/textback.webp')] bg-cover bg-center"
          >
            AI <br /> ACCELERATORS
          </span>
        </h1>

        {/* Sub text */}
        <p
          className="mt-8 text-gray-300 text-lg sm:text-xl lg:text-2xl 
                     font-light leading-relaxed max-w-3xl mx-auto"
        >
          More teams. More channels. More moving parts than ever. Kontent.ai makes
          the complex simple, so you can publish content anywhere and drive real
          impact, faster.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
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
