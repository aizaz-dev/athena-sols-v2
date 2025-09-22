"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Success stories data
  const stories = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical professionals collaborating in a hospital",
      title: "Going live in minutes",
      link: "/success/knab",
      logo: "/SolutionPage/Industries/Kramp-logo.svg",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      alt: "Business team in a strategy meeting",
      title: "Switched from a monolith DXP",
      link: "/success/webmd",
      logo: "/SolutionPage/Industries/elanco-logo.svg",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical professionals collaborating in a hospital",
      title: "Going live",
      link: "/success/knab",
      logo: "/SolutionPage/Industries/onechoice-logo.svg",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      alt: "Business team in a strategy meeting",
      title: "Swi a monolith DXP",
      link: "/success/webmd",
      logo: "/SolutionPage/Industries/spica-logo.webp",
    },
  ];

  // Auto-slide every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Previous card
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? stories.length - 1 : prev - 1
    );
  };

  // Next card
  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % stories.length
    );
  };

  // Always show 2 cards, looping properly
  const visibleStories = [
    stories[currentIndex],
    stories[(currentIndex + 1) % stories.length],
  ];

  return (
    <section className="bg-black text-white py-16 px-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Success with a <span className="text-indigo-400">headless CMS</span>
        </h2>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Cards with smooth transition */}
      <div className="relative max-w-6xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 transform transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(0)` }}
        >
          {visibleStories.map((story) => (
            <div key={story.id}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img
                  src={story.img}
                  alt={story.alt}
                  className="w-full h-[400px] md:h-[520px] object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
                <div className="absolute bottom-10 left-6">
                  <h3 className="text-2xl md:text-3xl font-semibold max-w-md">
                    {story.title}
                  </h3>
                  <a
                    href={story.link}
                    className="mt-3 inline-flex items-center text-base font-medium text-white hover:text-indigo-400"
                  >
                    Learn more <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Image
                  src={story.logo}
                  alt={`${story.title} logo`}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
