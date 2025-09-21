"use client";
import Link from "next/link";

/**
 * HeroSection Component
 * 
 * Main hero banner section featuring:
 * - Large, impactful heading with gradient text effect
 * - Descriptive subtext explaining the value proposition
 * - Call-to-action buttons for user engagement
 * 
 * Features responsive design with different layouts for mobile and desktop
 */
export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-9 pt-20 text-center lg:text-left">
        {/* Main Heading */}
        <h1
          className="tracking-tight 
                     text-5xl sm:text-6xl lg:text-[120px] font-semibold uppercase"
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

        {/* Subtitle/Description */}
        <p
          className="mt-8 text-white text-lg sm:text-xl lg:text-1xl 
                      leading-relaxed max-w-4xl mx-auto lg:mx-0"
        >
          More teams. More channels. More moving parts than ever. Kontent.ai makes
          the complex simple, so you can publish content anywhere and drive real
          impact, faster.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
          <Link
            href="#"
            className="px-10 py-4 rounded-full border border-white text-white 
                       font-semibold text-lg hover:bg-white hover:text-black 
                       transition w-full sm:w-auto text-center"
          >
            See if we're a fit
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