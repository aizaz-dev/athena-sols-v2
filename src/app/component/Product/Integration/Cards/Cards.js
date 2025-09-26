"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { integrations } from "@/app/data/IntegrationSection/cards";

export default function Cards() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(integrations.map((item) => item.tag))];

  const filteredData =
    filter === "All"
      ? integrations
      : integrations.filter((item) => item.tag === filter);

  return (
    <section className="bg-black text-white px-4 w-full sm:px-8 md:px-12 lg:px-16 py-20">
      {/* Filter Dropdown */}
      <div className="flex justify-end mb-10 max-w-7xl mx-auto">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-black text-white border border-gray-600 rounded-full px-5 py-2 text-lg"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center max-w-7xl mx-auto">
        {filteredData.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md flex flex-col h-[550px] w-[95%] transition-transform hover:-translate-y-2 duration-300"
          >
            {/* Logo */}
            <div className="bg-black flex justify-center items-center h-40">
              <div className="relative w-24 h-24">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 px-8 py-8 relative">
              <div>
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    item.highlight ? item.highlight : ""
                  }`}
                >
                  {item.name}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed pr-2">
                  {item.description}
                </p>
              </div>

              {/* Tag Button */}
              <div className="absolute bottom-6 right-6">
                <span className="inline-block border border-gray-500 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-black">
                  {item.tag}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
