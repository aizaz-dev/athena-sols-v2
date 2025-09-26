"use client";

import Image from "next/image";

const investors = [
  { name: "Investor 1", logo: "/About/expedition.webp" },
];

export default function Investors() {
  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-24 pt-20">
      {/* Heading (slightly left shifted) */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 w-fit ml-[20%]">
        Our investors
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {investors.map((item, index) => (
          <div
            key={index}
            className="relative w-72 h-40 md:w-136 md:h-102"
          >
            <Image
              src={item.logo}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
