// components/FutureProof.jsx
"use client";
import Image from "next/image";
import { logos } from "@/app/data/FutureProof/FutureProof";

export default function FutureProof() {
  return (
    <section className="bg-black text-white flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
        Future-proof with a{" "}
        <span className="text-purple-500">flexible headless CMS</span>
      </h2>

      {/* Description */}
      <p className="max-w-3xl mb-12 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
        Your content is the core of every digital experience, but it doesn’t
        exist on its own. Kontent.ai integrates your content with all the
        platforms and services you need to grow and scale.
      </p>

      {/* Logos Scrolling Row */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex gap-10 sm:gap-16 animate-marquee">
          {logos.concat(logos).map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative w-24 h-10 sm:w-32 sm:h-12 md:w-40 md:h-14">
                <Image
                  src={logo.src || `/placeholder.svg?text=${logo.name}`}
                  alt={logo.altText}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center md:justify-start">
        <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border border-white rounded-full hover:bg-white hover:text-black transition">
          Explore integrations
        </button>
      </div>
    </section>
  );
}
