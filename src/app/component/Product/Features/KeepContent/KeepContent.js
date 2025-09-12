"use client";
import { useState } from "react";
import cardsData from "@/app/data/FeatureData/Cards";

export default function KeepContent() {
  const [activePage, setActivePage] = useState("Content Discovery");
  const currentPage = cardsData[activePage];

  return (
    <div className="w-full bg-black text-white">
      {/* 🔹 Local Sticky Navbar */}
      <div className="sticky top-16 left-0 w-full text-white flex flex-wrap justify-center gap-6 md:gap-10 py-6 z-40 bg-[#1a1a1a]">
        {Object.keys(cardsData).map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`capitalize text-lg md:text-xl lg:text-2xl font-medium transition-colors duration-300 ${
              activePage === page
                ? "border-b-2 border-[#5b4ff5] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 🔹 Page Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center md:text-left">
          {currentPage.heading}
        </h2>

        {/* 🔹 Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentPage.cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-800 flex flex-col hover:shadow-xl transition"
            >
              {/* 🔹 Top Image / Mockup */}
              <div className="w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 md:h-56 lg:h-60 object-cover rounded-t-xl"
                />
              </div>

              {/* 🔹 Text Content */}
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 flex-1 mb-6">
                  {card.description}
                </p>
                <button className="mt-auto w-fit px-5 md:px-6 py-2 border border-gray-400 rounded-full text-sm md:text-base text-white hover:bg-white hover:text-black transition">
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
