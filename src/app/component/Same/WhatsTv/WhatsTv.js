"use client";
import React from "react";

const Whatstv = ({ data }) => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-stretch justify-center gap-10">
      
      {/* Left Side - Text Box */}
      <div className="w-full max-w-2xl bg-[#1F1F1F] rounded-lg p-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          {data.title}{" "}
          {data.highlightedWords.map((word, index) => (
            <span key={index} className={word.color}>
              {word.text}{" "}
            </span>
          ))}
        </h2>
        <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Right Side - YouTube Embed */}
      <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg"
          src={data.youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Whatstv;
