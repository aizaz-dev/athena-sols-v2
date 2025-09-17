"use client";
import Image from "next/image";

export default function SolutionLogos({ logos }) {
  return (
    <div className="py-20 px-10 bg-black text-white flex flex-wrap justify-center gap-10">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt={`solution-logo-${index}`}
          width={120}
          height={80}
          className="object-contain"
        />
      ))}
    </div>
  );
}
