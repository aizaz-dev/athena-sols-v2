"use client";

import Image from "next/image";

/**
 * LogoGrid Component
 * ------------------
 * Displays a grid of logos, centered with responsive sizing and spacing.
 * Used for showcasing brand partners, clients, or featured companies.
 */
export default function LogoGrid({ logos }) {
  return (
    <section className="bg-black py-5 pb-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10">
        {logos.map((logo, index) => (
          <div key={index} className="relative w-32 h-32">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100px, 140px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
