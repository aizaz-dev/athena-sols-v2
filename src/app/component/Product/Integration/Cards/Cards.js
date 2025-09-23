"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { integrations } from "@/app/data/IntegrationSection/cards";

export default function Cards() {
  const [filter, setFilter] = useState("All");

  // Get unique tags from data for dropdown
  const categories = ["All", ...new Set(integrations.map((item) => item.tag))];

  // Filter logic
  const filteredData =
    filter === "All"
      ? integrations
      : integrations.filter((item) => item.tag === filter);

  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-20 lg:px-32 py-20">
      {/* Filter Dropdown */}
      <div className="flex justify-end mb-10">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-black text-white border border-gray-600 rounded-full px-5 py-2 text-xl"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredData.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between h-[520px] transition-transform hover:-translate-y-2 duration-300"
          >
            {/* Logo */}
            <div className="p-12 flex justify-center bg-gray-950 items-center">
              <Image
                src={item.logo}
                alt={item.name}
                width={110}
                height={110}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="px-10 pb-12 flex flex-col bg-black bg-opacity-40">
              <h3
                className={`text-3xl font-extrabold mb-5 ${
                  item.highlight ? item.highlight : ""
                }`}
              >
                {item.name}
              </h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-10">
                {item.description}
              </p>

              {/* Tag */}
              <div className="mt-auto">
                <span className="inline-block border border-gray-500 text-white rounded-full px-10 py-3 text-lg font-semibold">
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
