"use client";

import Image from "next/image";

// ✅ Logo Grid Component
// Displays logos in the center with minor spacing
export default function LogoGrid({ logos }) {
  return (
    <section className="bg-black py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="relative w-28 h-28">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80px, 120px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
