"use client";
import React from "react";

const MissionControl = ({ data }) => {
  const { title, highlight, description, buttonText, image, reverse = false } =
    data;

  return (
    <section
      className={`bg-black text-white py-16 px-6 flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-center gap-10`}
    >
      {/* Left Side - Text */}
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {highlight}
          </span>
        </h2>
        <p className="text-lg text-gray-200 mb-6">{description}</p>
        <button className="px-6 py-3 bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition">
          {buttonText}
        </button>
      </div>

      {/* Right Side - Image */}
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

export default MissionControl;
