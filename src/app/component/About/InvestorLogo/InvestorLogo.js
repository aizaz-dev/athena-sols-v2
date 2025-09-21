"use client";

import Image from "next/image";

const investors = [
  { name: "Investor 1", logo: "/images/logo1.png" },
];

export default function Investors() {
  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-24 py-20">
      {/* Heading (between left and center) */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 w-fit mx-auto md:ml-[3%]">
        Our investors
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-16">
        {investors.map((item, index) => (
          <div key={index} className="relative w-40 h-20 md:w-56 md:h-28">
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
