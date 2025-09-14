"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ContentSlider({ slides = [], pageTitle, pageHighlight }) {
  const [current, setCurrent] = useState(0);

  if (!slides || slides.length === 0) {
    return (
      <div className="text-center text-white py-16">
        ⚠️ No slides available
      </div>
    );
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-black text-white flex items-center justify-center py-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        {/* 🔹 Left Section (Title + Image) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug">
            {pageTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              {pageHighlight}
            </span>
          </h2>

          {/* Image */}
          <div className="relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={slides[current].image}
              alt="Slide"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* 🔹 Right Section (Content + Buttons) */}
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

      {/* 🔹 Dots Indicator */}
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
