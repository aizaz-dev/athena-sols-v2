"use client";
import { useEffect, useState } from "react";

const DiscoverNext = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("discover");
      if (section) {
        const { top } = section.getBoundingClientRect();
        setScrolled(top <= -100); // jese hi neeche scroll ho
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Wrapper with 100vh for scroll */}
      <section id="discover" className="relative h-[100vh] w-full">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background 1 (Black) */}
          <div
            className={`absolute inset-0 bg-black transition-transform duration-700 ${
              scrolled ? "-translate-y-full" : "translate-y-0"
            }`}
          ></div>

          {/* Background 2 (Image) */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
              scrolled ? "translate-y-0" : "translate-y-full"
            }`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 w-full">
            <h1
              className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-start max-w-[95%] md:max-w-[80%] font-bold mb-4 md:mb-6 leading-snug transition-colors duration-500 ${
                scrolled ? "text-white" : "text-[#6C63FF]"
              }`}
            >
              Discover next-gen content management
            </h1>

            {/* Paragraph + Button */}
            <div
              className={`transition-opacity duration-700 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-start max-w-[95%] md:max-w-[60%] text-white opacity-90 mb-6 md:mb-10 leading-relaxed">
                Learn how Agentic CMS leverages AI-driven automation to
                streamline content creation, personalization, and
                publishing—helping you deliver smarter, faster, and more
                engaging digital experiences.
              </p>

              <button className="px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition font-medium text-sm sm:text-base md:text-lg">
                Read the story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverNext;
