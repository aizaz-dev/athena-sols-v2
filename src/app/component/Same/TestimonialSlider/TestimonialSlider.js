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
    <div className="bg-black text-white flex items-center justify-center min-h-[550px] py-20 px-6">
      <div className="flex items-center max-w-[1500px] w-full">
        {/* Prev */}
        <button
          onClick={prevSlide}
          className="text-white rounded-full border border-white p-5 hover:bg-white hover:text-black transition text-2xl"
        >
          <FaChevronLeft />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 w-full px-6">
          <div className="flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={300}   
              height={300}
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col max-w-3xl">
            <p className="text-2xl md:text-3xl ">
            <span className="text-6xl text-blue-400 ">“</span>{testimonial.text}
            </p>
            <div className="mt-8">
              <p className="font-semibold text-xl md:text-2xl">
                {testimonial.name}
              </p>
              <p className="text-lg text-gray-400 mt-1">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
            <div className="mt-4 text-3xl font-bold">{testimonial.company}</div>
          </div>
        </div>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="text-white rounded-full border border-white p-5 hover:bg-white hover:text-black transition text-2xl"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
