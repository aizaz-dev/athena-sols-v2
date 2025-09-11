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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Efficient content production in the{" "}
        <span className="text-indigo-400">CMS for teams</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-40  ">
              <Image
                src={item.img}
                alt="Content Production"
                fill
                className="object-cover"
              />
            </div>

            {/* Content (text + button) */}
            <div className="flex flex-col flex-grow p-8 justify-between ">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-15">
                  {item.desc}
                </p>
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
