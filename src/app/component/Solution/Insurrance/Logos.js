"use client";
import Image from "next/image";

export default function Logos({ data }) {
  return (
    <div className="py-20 px-5 bg-black text-white">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 max-w-5xl mx-64 text-left">
        A trusted partner for{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          insurance companies
        </span>
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-14">
        {data.logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`logo-${index}`}
            width={120}
            height={80}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}
