"use client";

import Image from "next/image";

export default function CardData() {
  const items = [
    {
      image: "/Product/accelerators/Check.svg",
      title: "Analyze everything from one home base",
      desc: "Get insight into everything that’s happening with your teams and content in one place. Stay in the loop about the status and pace of content production with easy-to-analyze widgets, filters, and time frames.",
    },
    {
      image: "/Product/accelerators/Model.svg",
      title: "Take action based on data insights",
      desc: "Turn data signals and patterns into next steps. By measuring and comparing key markers of efficiency, spot frustrating bottlenecks that need your attention and make meaningful changes to how your teams work.",
    },
    {
      image: "/Product/accelerators/Cog.svg",
      title: "Allocate resources more strategically",
      desc: "Understand how much time it takes to create, review, and publish specific types of content. By weighing the investment against anticipated returns, it’s much easier to avoid time sinks and allocate resources to high-impact activities.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12">
      {/* Heading */}
      <div className="max-w-4xl mb-12 ml-6 sm:ml-20 lg:ml-40">
        <h2 className="text-3xl md:text-4xl font-bold md:pl-20 leading-tight">
          Actionable data,{" "}
          <span className="text-indigo-400">right in your CMS</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition min-h-[400px] flex flex-col"
          >
            <div className="mb-6">
              <Image
                src={item.image}
                alt={item.title}
                width={28}
                height={28}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {item.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed flex-grow">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
