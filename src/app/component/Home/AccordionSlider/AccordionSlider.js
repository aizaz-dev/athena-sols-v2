"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const slides = [
  {
    question: "The hub with everything, for everyone",
    answer:
      "Break down content into smaller, strategic chunks to get the most out of everything you create. Remove, fix, or update content once, then see your changes reflected everywhere.",
    image: "/Home/Accordance1.webp",
  },
  {
    question: "All your content ready for reuse",
    answer:
      "With modular content in a CMS that welcomes a content-first approach, it’s easier to maintain consistent and accurate information across all your channels.",
    image: "/Home/Accordance2.webp",
  },
  {
    question: "Software that’s easy to like",
    answer:
      "Powerful features in an interface that’s easy to understand and simple to use for your whole team.",
    image: "/Home/Accordance3.webp",
  },
];

export default function AccordionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto py-24 px-10">
      {/* LEFT SIDE: Accordion */}
      <div>
        <h2 className="text-5xl font-bold mb-10">
          The right CMS when{" "}
          <span className="text-purple-600">
            content is core to your business
          </span>
        </h2>

        <div className="space-y-8">
          {slides.map((slide, index) => (
            <div key={index} className="border-b pb-6">
              <button
                onClick={() => setActiveIndex(index)}
                className="flex justify-between items-center w-full text-left text-2xl font-semibold"
              >
                {slide.question}
                <span className="text-purple-600 text-3xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  {slide.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-14 h-14 flex items-center justify-center border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white text-xl"
          >
            <ChevronUp />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 flex items-center justify-center border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white text-xl"
          >
            <ChevronDown /> 
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="flex justify-center">
        <img
          src={slides[activeIndex].image}
          alt="Slide"
          className="rounded-2xl shadow-xl max-w-lg w-full"
        />
      </div>
    </div>
  );
}
