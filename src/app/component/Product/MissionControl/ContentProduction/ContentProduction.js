"use client";

import Image from "next/image";

export default function ContentProduction() {
  const items = [
    {
      img: "/Product/MissionController/Taskcard1.webp",
      title: "Transparent content planning",
      desc: "Stop bouncing between different calendars, drafts, and systems. Take content from planning to publishing without leaving the Kontent.ai platform.",
      btn: "Learn more",
    },
    {
      img: "/Product/MissionController/Taskcard2.webp",
      title: "AI assistance at your fingertips",
      desc: "Get from first draft to go-live faster with AI. Generate copy variants, sense check voice and tone, and spin up new image descriptions, localized versions, and more.",
      btn: "Learn more",
    },
    {
      img: "/Product/MissionController/Taskcard3.webp",
      title: "Governance built into every action",
      desc: "Deliver consistent content across the board. Make use of user roles, permissions, and workflows to meet stringent compliance standards and mitigate risk.",
      btn: "Learn more",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left md:text-center lg:text-left lg:ml-60">
        Efficient content production in the{" "}
        <span className="text-indigo-400">CMS for teams</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-150  gap-8 max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col w-full max-w-[420px] mx-auto min-h-[520px]" // 👈 height increase
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content (text + button) */}
            <div className="flex flex-col flex-grow pl-8 pr-6 pt-8 pb-10 justify-between"> {/* 👈 left padding added */}
              <div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>

              <button className="mt-6 border border-gray-400 text-white px-10 py-3 rounded-full text-sm hover:bg-white hover:text-black transition self-start">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
