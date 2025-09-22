"use client";
import Link from "next/link";

export default function HeroIndustries({ data }) {
  if (!data) return null;

  const { heading, highlight, description, buttons } = data;

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[200px] mt-10 flex items-center justify-center">
      <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-22 sm:py-16 md:py-20 text-center">
        <h1
          className="tracking-tight leading-[1.15] 
                     text-4xl sm:text-5xl md:text-7xl lg:text-[100px] xl:text-[120px] 
                      uppercase"
        >
          {heading}{" "}
          <span
            className="bg-clip-text text-transparent 
                       bg-[url('/Home/textback.webp')] bg-cover bg-center"
          >
            {highlight}
          </span>
        </h1>

        <p
          className="mt-6 sm:mt-8 md:mt-10 text-gray-300 
                     text-base sm:text-lg md:text-xl lg:text-[1.25rem] 
                     font-medium max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </p>

     
      </div>
    </section>
  );
}
