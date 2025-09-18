"use client";
import React from "react";

export default function SolutionCards({ features }) {
  return (
    <section className="bg-black px-6 sm:px-12 md:px-20 lg:px-32 justify-items-center py-16 overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  px-6 ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-neutral-900 w-[38rem] min-h-[22rem] text-white rounded-2xl p-8 shadow-lg flex flex-col gap-4"
          >
            <div className="text-white text-3xl">{feature.icon}</div>
            <h3 className="text-[1.4rem] font-semibold">{feature.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {feature.description.split(feature.link?.text || "").map((part, i) =>
                feature.link && i === 1 ? (
                  <span key={i}>
                    <a
                      href={feature.link.href}
                      className="underline text-gray-200 hover:text-white"
                    >
                      {feature.link.text}
                    </a>
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
