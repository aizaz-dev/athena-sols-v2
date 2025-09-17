"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function ContentChallenges({ data }) {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Image */}
        <div className="flex justify-start">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            className="rounded-lg object-cover max-h-[380px] w-auto"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            {data.heading.main}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-600">
              {data.heading.highlight}
            </span>{" "}
            {data.heading.suffix}
          </h2>

          <p className="text-white mb-6 text-lg">
            {data.intro}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-5 mb-10">
            {data.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaChevronRight className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-white leading-relaxed text-lg">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Final Paragraph */}
          <p className="text-white leading-relaxed text-[1.1rem]">
            {data.outro}
          </p>
        </div>
      </div>
    </section>
  );
}
