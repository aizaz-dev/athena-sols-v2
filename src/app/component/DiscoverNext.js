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
      {/* Wrapper with 200vh for scroll */}
      <section id="discover" className="relative h-[200vh] w-full">
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
          <div className="relative z-10 text-center px-6">
            <h1
              className={`text-6xl md:text-7xl font-bold mb-6 leading-snug transition-colors duration-500 ${
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
              <p className="text-base md:text-lg lg:text-xl text-white opacity-90 mb-10 leading-relaxed">
                Learn how Agentic CMS leverages AI-driven automation to
                streamline content creation, personalization, and
                publishing—helping you deliver smarter, faster, and more
                engaging digital experiences.
              </p>

              <button className="px-8 py-3 md:px-10 md:py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition font-medium">
                Read the story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section (normal content) */}
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl font-bold text-black">Next Component</h2>
      </section>
    </div>
  );
};

export default DiscoverNext;
