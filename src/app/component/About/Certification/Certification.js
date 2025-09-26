"use client";

import Image from "next/image";

export default function Certifications({ heading, data }) {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">
      {/* Heading */}
      <div className="mb-14 pl-9 sm:pl-6 md:pl-65 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          {heading.before}{" "}
          <span className="text-[#7062FF]">{heading.highlight}</span>{" "}
          {heading.after}
        </h2>
      </div>

      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {data.map((card, index) => {
            const isImage =
              card.logo.endsWith(".svg") ||
              card.logo.endsWith(".png") ||
              card.logo.endsWith(".webp");

            return (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-2xl p-10 text-center shadow-lg min-h-[220px] flex flex-col justify-center"
              >
                {/* Logo or Text */}
                <div className="flex flex-col items-center mb-6">
                  {isImage ? (
                    <Image
                      src={card.logo}
                      alt="logo"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  ) : (
                    <>
                      <span className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        {card.logo.split(" ")[0]}
                      </span>
                      <span className="text-lg md:text-xl text-gray-300">
                        {card.logo.split(" ").slice(1).join(" ")}
                      </span>
                    </>
                  )}
                </div>

                {/* Subtitle */}
                <p className="text-base md:text-lg">{card.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
