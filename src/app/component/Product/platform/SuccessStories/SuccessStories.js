"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SuccessStories = () => {
  // ✅ State to track which slide is active on mobile
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Array of success stories (so we can easily map)
  const stories = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical professionals collaborating in a hospital",
      title: "Going live in minutes",
      link: "/success/knab",
      logo: "/Product/Platform/knab-logo.svg",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      alt: "Business team in a strategy meeting",
      title: "Switched from a monolith DXP",
      link: "/success/webmd",
      logo: "/Product/Platform/webmd-logo.webp",
    },
  ];

  // ✅ Auto-slide every 3 seconds (only on mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stories.length]);

  // ✅ Handlers for manual navigation (arrows)
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? stories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      {/* =============================
          Row 1: Section Heading + Arrows
         ============================= */}
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Success with a{" "}
          <span className="text-indigo-400">headless CMS</span>
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

      {/* =============================
          Row 2: Desktop (Grid Layout)
          - Shows both cards side by side
         ============================= */}
      <div className="hidden md:grid md:grid-cols-2 gap-14 max-w-6xl mx-auto mb-12">
        {stories.map((story) => (
          <div key={story.id}>
            {/* Card */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={story.img}
                alt={story.alt}
                className="w-full h-[520px] object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
              <div className="absolute bottom-12 left-8">
                <h3 className="text-3xl font-semibold max-w-lg">
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
            {/* Logo under card */}
            <div className="flex justify-center mt-4">
              <Image
                src={story.logo}
                alt={`${story.title} logo`}
                width={130}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* =============================
          Row 2: Mobile (Slider Layout)
          - Shows one card at a time
          - Auto slides every 3s
         ============================= */}
      <div className="md:hidden relative max-w-lg mx-auto">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            {/* Card */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={story.img}
                alt={story.alt}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
              <div className="absolute bottom-10 left-6">
                <h3 className="text-2xl font-semibold max-w-md">
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
            {/* Logo under card */}
            <div className="flex justify-center mt-3">
              <Image
                src={story.logo}
                alt={`${story.title} logo`}
                width={110}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
