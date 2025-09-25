"use client";
import { useState } from "react";
import Image from "next/image";
import { Zap, Bot } from "lucide-react";
import { CiSettings } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";

const ContentManagement = () => {
  const images = [
    "/Features/Workflow.webp",
    "/Features/2.webp",
    "/Features/3.webp",
  ];

  const items = [
    {
      title: "Governance built into every action",
      text: "Governance is non-negotiable for delivering consistent content. User roles and workflow management help organizations meet stringent compliance standards and mitigate risk.",
      icon: <CiSettings className="w-6 h-6 shrink-0 mt-1" />,
    },
    {
      title: "Total visibility into all operations",
      text: "Spotting process gaps takes an eagle eye. By tracking team productivity, workflows, and content plans in one place, it’s easier to catch issues early and keep teams moving together.",
      icon: <Zap className="w-6 h-6 shrink-0 mt-1" />,
    },
    {
      title: "Anywhere, anything AI assistance",
      text: "Let AI assistance support your workload, helping with content generation, copy checks, localization, and more. An extra hand ensures content creators can deliver more strategic value.",
      icon: <Bot className="w-6 h-6 shrink-0 mt-1" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20 lg:px-32">
      {/* Heading */}
      <h2 className="text-[32px] md:text-[40px] font-medium mb-12 leading-snug tracking-tight">
        Making content management{" "}
        <span className="text-indigo-400">efficient</span>
      </h2>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Items */}
        <div className="divide-y divide-gray-700 border-y border-gray-700">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 py-5 cursor-pointer transition-all"
              onClick={() => setActiveIndex(index)}
            >
              {/* Icon + text */}
              <div className="flex gap-4">
                {item.icon}
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-gray-300 leading-snug max-w-md">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <FiChevronRight
                className={`w-5 h-5 mt-1 transition-colors ${
                  activeIndex === index ? "text-indigo-400" : "text-white"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px] h-[320px] md:h-[380px]">
            <Image
              src={images[activeIndex]}
              alt="Workflow step"
              fill
              className="rounded-2xl object-cover shadow-xl transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentManagement;
