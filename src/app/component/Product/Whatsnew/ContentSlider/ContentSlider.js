// components/ContentSlider.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Create and publish content",
    highlight: "faster",
    subtitle: "Organize and maintain all your content in",
    highlight2: "one system",
    description:
      "Kontent.ai helps you model, maintain, update, and optimize your single source of content truth, making everything secure, yet easy to work with.",
    image:
      "https://images.unsplash.com/photo-1612832021028-fb65a1961f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Collaborate with your team",
    highlight: "smarter",
    subtitle: "Manage workflows and approvals in",
    highlight2: "one place",
    description:
      "Easily collaborate with your team, assign tasks, track progress, and make publishing faster with a single workflow system.",
    image:
      "https://images.unsplash.com/photo-1590608897129-79da98d159d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Manage your assets",
    highlight: "better",
    subtitle: "Keep everything safe in",
    highlight2: "one hub",
    description:
      "Upload, tag, and manage your content assets securely in a single hub, making content discovery and reuse simple.",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Scale your content",
    highlight: "easier",
    subtitle: "Grow your digital presence in",
    highlight2: "one platform",
    description:
      "Whether you’re a startup or an enterprise, scale your content operations seamlessly with automation and AI support.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Deliver content",
    highlight: "everywhere",
    subtitle: "Distribute across channels from",
    highlight2: "one source",
    description:
      "Publish content to multiple platforms with ease, ensuring consistency and speed in every channel.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
];




export default function WhatsContentSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-black text-white flex items-center justify-center py-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug">
            Create and publish content <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"> faster
            </span>
          </h2>

          {/* Image */}
          <div className="relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={slides[current].image}
              alt="Slide"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold leading-snug">
            {slides[current].subtitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              {slides[current].highlight2}
            </span>
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            {slides[current].description}
          </p>
               {/* Navigation Buttons */}
        <div className="flex gap-4">
        <button
          onClick={prevSlide}
          className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
         </div>
        </div>
      </div>

 
     

      {/* Dots Indicator */}
      <div className="absolute bottom-2 flex gap-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-2.5 h-2.5 rounded-full ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
