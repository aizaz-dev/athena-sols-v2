"use client";

import Image from "next/image";

export default function Certifications({ heading, data }) {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">
      {/* Heading with left padding */}
      <div className="mb-14 pl-4 sm:pl-6 md:pl-10 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          {heading.before}{" "}
          <span className="text-[#7062FF]">{heading.highlight}</span>{" "}
          {heading.after}
        </h2>
      </div>

      {/* Cards Grid Center */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {data.map((card, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-2xl p-10 text-center shadow-lg min-h-[220px] flex flex-col justify-center"
            >
              {/* Logo/Icon */}
              <div className="flex justify-center mb-6">
                {card.logo ? (
                  <Image
                    src={card.logo}
                    alt="logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                ) : (
                  card.icon
                )}
              </div>

              {/* Subtitle */}
              <p className="text-base md:text-lg">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
