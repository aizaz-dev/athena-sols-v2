"use client";

import { FiBarChart2 } from "react-icons/fi";
import { TbArrowsShuffle } from "react-icons/tb";
import { LuGem } from "react-icons/lu";

export default function DataInsightdeveloper() {
  const items = [
    {
      icon: <FiBarChart2 className="text-3xl text-white" />,
      title: "Analyze everything from one home base",
      desc: "Get insight into everything that’s happening with your teams and content in one place. Stay in the loop about the status and pace of content production with easy-to-analyze widgets, filters, and time frames.",
    },
    {
      icon: <TbArrowsShuffle className="text-3xl text-white" />,
      title: "Take action based on data insights",
      desc: "Turn data signals and patterns into next steps. By measuring and comparing key markers of efficiency, spot frustrating bottlenecks that need your attention and make meaningful changes to how your teams work.",
    },
    {
      icon: <LuGem className="text-3xl text-white" />,
      title: "Allocate resources more strategically",
      desc: "Understand how much time it takes to create, review, and publish specific types of content. By weighing the investment against anticipated returns, it’s much easier to avoid time sinks and allocate resources to high-impact activities.",
    },
  ];

  return (
    <section className="bg-black text-white  px-12">
    
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition min-h-[400px] flex flex-col"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed flex-grow">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
