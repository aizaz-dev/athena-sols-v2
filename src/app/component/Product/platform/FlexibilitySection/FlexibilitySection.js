// components/FlexibilitySection.js
"use client";
import React from "react";
import { FiSearch, FiMaximize, FiGrid } from "react-icons/fi";

const cards = [
  {
    icon: <FiSearch className="text-5xl text-white" />,
    title: "Support at your scale",
    text: "Running an internal employee knowledge base? Or a complex international media operation? Kontent.ai is built for both, and anything in between. Scalable architecture supports your business at every stage of growth.",
    button: "Explore use cases",
  },
  {
    icon: <FiMaximize className="text-5xl text-white" />,
    title: "Your choice of best-of-breed",
    text: "The best customer experiences are built on the best platforms. With Kontent.ai, you're not locked in to a specific set of technologies, and your content isn't locked in your CMS. Create digital experiences, your way.",
    button: "Explore integrations",
  },
  {
    icon: <FiGrid className="text-5xl text-white" />,
    title: "Enterprise operations, managed",
    text: "When 100+ creators collaborate on hundreds of sites, they turn to us. When 6 distinct brands need central management, it's done with us. And when a retailer must localize content in 24 languages, they pick Kontent.ai.",
    button: "Explore all stories",
  },
];

const FlexibilitySection = () => {
  return (
    <section className="bg-black text-white py-20 ">
      {/* Heading */}
      <div className=" max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl leading-snug">
          Total flexibility for{" "}
          <span className="text-indigo-500">future growth</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-3xl p-8 flex flex-col justify-between shadow-lg min-h-[400px] w-full"
          >
            <div>
              {card.icon}
              <h3 className="text-2xl font-semibold mt-6">{card.title}</h3>
              <p className="mt-5 text-white leading-relaxed text-lg">
                {card.text}
              </p>
            </div>
            <button className="mt-8 w-fit px-8 py-3 rounded-full border border-white text-white text-lg font-medium hover:bg-white hover:text-black transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlexibilitySection;
