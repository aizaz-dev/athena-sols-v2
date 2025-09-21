"use client";

import { FaRegComments, FaRegHeart, FaRegCheckCircle } from "react-icons/fa";

const values = [
  {
    title: "We listen",
    description:
      "We always take the time to understand what others are saying, welcome feedback, and are open-minded. Teamwork is in our DNA, and we let the best idea win.",
    icon: <FaRegComments size={50} className="text-indigo-400" />,
  },
  {
    title: "We care",
    description:
      "We care about our clients, our colleagues, and our company.​ We are honest and treat everyone well and with respect.",
    icon: <FaRegHeart size={50} className="text-pink-400" />,
  },
  {
    title: "We deliver",
    description:
      "We keep our promises and focus on delivering value. We take initiative and ownership. We empower our people to rather take risks and fail than avoid making decisions. We learn from our mistakes and improve iteratively.",
    icon: <FaRegCheckCircle size={50} className="text-green-400" />,
  },
];

export default function AboutCards() {
  return (
    <section className="bg-black text-white px-6 md:px-16 pb-10">
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((card, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-2xl p-10 shadow-lg flex flex-col items-start"
            >
              {/* Icon */}
              <div className="mb-6">{card.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
