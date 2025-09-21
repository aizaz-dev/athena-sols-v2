"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { timelineData } from "../../../data/About/TimelinesData/Timeline";

export default function TimelineHistory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section className="bg-black text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 ">
          Kontent.ai <span className="text-indigo-400">history</span>
        </h2>

        {/* Timeline bar */}
        <div className="relative mb-20">
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-700"></div>

          <div className="flex justify-between items-center relative">
            {timelineData.map((item, index) => (
              <button
                key={item.year}
                onClick={() => handleClick(index)}
                className={`relative flex flex-col items-center text-base focus:outline-none transition-all duration-300 ${
                  index === activeIndex
                    ? "text-indigo-400 scale-110"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full border-2 mb-2 transition-all duration-300 ${
                    index === activeIndex
                      ? "border-indigo-400 bg-indigo-400 shadow-lg shadow-indigo-500/50"
                      : "border-gray-400 bg-black"
                  }`}
                ></div>
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            key={`img-${activeIndex}`}
            initial={{ x: direction === 1 ? 150 : -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -150 : 150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={timelineData[activeIndex].image}
              alt={timelineData[activeIndex].year}
              className="w-full h-90 object-cover rounded-xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ x: direction === 1 ? 150 : -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -150 : 150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="text-lg max-lg:text-base space-y-6 lg:space-y-8"
          >
            <h3 className="text-4xl font-bold text-white">
              {timelineData[activeIndex].year}
            </h3>
            <ul className="space-y-4">
              {timelineData[activeIndex].points.map((point, i) => (
                <li key={i} className="flex items-start text-white text-2xl">
                  <span className="text-indigo-400 mr-3">{">"}</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
