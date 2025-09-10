// components/FutureProof.jsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { logos } from "@/app/data/FutureProof/FutureProof";

export default function UniquePowerfull() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalLogos = logos.length;
  const logoWidth = 160;
  const logoGap = 50;
  const step = logoWidth + logoGap;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === totalLogos) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [index, totalLogos]);

  return (
    <section className="bg-black text-white flex flex-col justify-center px-12 sm:px-18 lg:px-40 py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
        Your unique and powerful{" "}
        <span className="text-purple-500">tech stack</span>
      </h2>

      <p className="max-w-3xl mb-12 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
        Integrate Kontent.ai with best-of-breed technologies to deliver
        engaging, omnichannel experiences for your audiences. Kontent.ai is
        API-first, so you can harness all of the functionality inside the
        platform to compose and extend the digital experience you are creating.
      </p>

      <div className="relative w-full overflow-hidden py-10">
        <div
          className={`flex gap-10 sm:gap-16 ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${index * step}px)`,
          }}
        >
          {logos.concat(logos).map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-3 flex items-center justify-center w-22 h-14"
            >
              <Image
                src={logo.src || `/placeholder.svg?text=${logo.name}`}
                alt={logo.altText}
                width={160}
                height={56}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border border-white rounded-full hover:bg-white hover:text-black transition">
          Explore integrations
        </button>
      </div>
    </section>
  );
}
