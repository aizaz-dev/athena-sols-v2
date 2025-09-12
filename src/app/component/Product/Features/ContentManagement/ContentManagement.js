"use client";
import { useState } from "react";
import Image from "next/image";
import { Zap, Bot } from "lucide-react"; 
import { CiSettings } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi"; 

const ContentManagement = () => {
  // Images for each row (replace with actual assets in /public/images/)
  const images = [
    "/images/governance.png",
    "/images/visibility.png",
    "/images/ai-assistance.png",
  ];

  // Content items
  const items = [
    {
      title: "Governance built into every action",
      text: "Governance is non-negotiable for delivering consistent content. User roles and workflow management help organizations meet stringent compliance standards and mitigate risk.",
      icon: <CiSettings className="w-12 h-10 " />,
    },
    {
      title: "Total visibility into all operations",
      text: "Spotting process gaps takes an eagle eye. By tracking team productivity, workflows, and content plans in one place, it’s easier to catch issues early and keep teams moving together.",
      icon: <Zap className="w-12 h-10 " />, // bigger icon
    },
    {
      title: "Anywhere, anything AI assistance",
      text: "Let AI assistance support your workload, helping with content generation, copy checks, localization, and more. An extra hand ensures content creators can deliver more strategic value.",
      icon: <Bot className="w-12 h-10 " />, // bigger icon
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-black text-white py-[60px] px-[30px] md:px-[80px]">
      {/* Row 1: Heading */}
      <h2 className="text-[28px] md:text-[36px] font-bold mb-[50px] leading-snug">
        Making content management{" "}
        <span className="text-indigo-400">efficient</span>
      </h2>

      {/* Row 2: Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] items-center">
        {/* Left column */}
        <div className="divide-y divide-white border-y border-white">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-start justify-between gap-[15px] cursor-pointer p-[20px] transition-all duration-300 ${
                activeIndex === index
                  ? ""
                  : "bg-transparent"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Icon + text */}
              <div className="flex  gap-[15px]">
                {item.icon}
                <div>
                  <h3 className="text-[18px] font-semibold mb-[8px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <FiChevronRight
                className={`w-8 h-8 mt-1 transition-colors ${
                  activeIndex === index ? "text-blue-500" : "text-white"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Right column: Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] h-[320px] md:h-[400px]">
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
