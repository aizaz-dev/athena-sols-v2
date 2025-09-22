"use client";
import React from "react";

const ImageRightSectionGray = ({
  title,
  highlight,
  description,
  buttonText,
  image,
  reverse = false,
}) => {
  return (
    <section
      className={`bg-neutral-800 text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Side */}
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {highlight}
          </span>
        </h2>
        <p className="text-lg text-gray-200 mb-6">{description}</p>

        {buttonText && (
          <button className="px-14 py-5 border rounded-full text-white font-medium hover:bg-white   shadow-md hover:text-black transition">
            {buttonText}
          </button>
        )}
      </div>

      {/* Image Side */}
      <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={highlight}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default ImageRightSectionGray;
