// components/SuccessStories.js
import React from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SuccessStories = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Row 1 - Heading + Arrows */}
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Success with a{" "}
          <span className="text-indigo-400">headless CMS</span>
        </h2>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
            <FiChevronLeft />
          </button>
          <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Row 2 - Images */}
      <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto mb-12">
        {/* Card 1 */}
        <div>
          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80"
              alt="Doctors working"
              className="w-full h-[520px] object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
            <div className="absolute bottom-12 left-8">
              <h3 className="text-3xl font-semibold max-w-lg">
                Going live in minutes
              </h3>
              <a
                href="#"
                className="mt-3 inline-flex items-center text-base font-medium text-white hover:text-indigo-400"
              >
                Learn more <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          {/* Logo/Text under card */}
          <div className="text-center mt-4">
            <span className="text-2xl font-bold text-white">knab</span>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Business meeting"
              className="w-full h-[520px] object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
            <div className="absolute bottom-12 left-8">
              <h3 className="text-3xl font-semibold max-w-lg">
                Switched from a monolith DXP
              </h3>
              <a
                href="#"
                className="mt-3 inline-flex items-center text-base font-medium text-white hover:text-indigo-400"
              >
                Learn more <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          {/* Logo/Text under card */}
          <div className="text-center mt-4">
            <span className="text-2xl font-bold text-white">WebMD Ignite</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
