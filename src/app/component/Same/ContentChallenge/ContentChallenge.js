"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function ContentChallenges({ data }) {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ===========================
            Left Side - Image Section
           =========================== */}
        <div className="flex justify-start lg:justify-end">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            className="rounded-xl object-cover  w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* ===========================
            Right Side - Text Section
           =========================== */}
        <div className="flex flex-col justify-start">
          {/* Heading with gradient highlight */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-8">
            {data.heading.main}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-600">
              {data.heading.highlight}
            </span>{" "}
            {data.heading.suffix}
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-200 mb-8 text-lg md:text-xl leading-relaxed">
            {data.intro}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-5 mb-10">
            {data.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaChevronRight className="text-indigo-400 mt-1 flex-shrink-0 text-lg" />
                <span className="text-gray-100 leading-relaxed text-lg md:text-xl">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Outro Paragraph */}
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            {data.outro}
          </p>
        </div>
      </div>
    </section>
  );
}
