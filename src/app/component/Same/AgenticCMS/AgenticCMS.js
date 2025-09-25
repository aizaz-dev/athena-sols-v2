"use client";
import React from "react";

const AgenticCms = ({ data }) => {
  return (
    <section className="bg-[#1F1F1F] text-white py-16 px-6 flex flex-col lg:flex-row items-stretch justify-center gap-10">
      
      {/* Left Side - Image */}
      <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg flex items-center">
        <img
          src={data.imageUrl}
          alt={data.highlightedWord.text + " Preview"}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Text Box */}
      <div className="w-full max-w-2xl rounded-lg p-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          {data.title}{" "}
          <span className={data.highlightedWord.color}>{data.highlightedWord.text}</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-6">
          {data.description}
        </p>
        <button className="hover:text-black border-white border transition-colors text-white hover:bg-white font-semibold px-6 py-4 rounded-full w-fit">
          {data.buttonText}
        </button>
      </div>
    </section>
  );
};

export default AgenticCms;
