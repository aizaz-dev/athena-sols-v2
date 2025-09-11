"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function TestimonialSlider({ data }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const testimonial = data[current];

  return (
    <div className="bg-black text-white flex items-center justify-center min-h-[400px] py-20 px-6">
      <div className="flex items-center max-w-5xl w-full">
        {/* Prev */}
        <button
          onClick={prevSlide}
          className="text-white rounded-full border border-white p-3 hover:bg-white hover:text-black transition"
        >
          <FaChevronLeft />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full px-6">
          <div className="flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={200}
              height={200}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-4xl text-blue-400 mb-4">“</span>
            <p className="text-lg md:text-xl leading-relaxed">{testimonial.text}</p>
            <div className="mt-6">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
            <div className="mt-4 text-2xl font-bold">{testimonial.company}</div>
          </div>
        </div>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="text-white rounded-full border border-white p-3 hover:bg-white hover:text-black transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
