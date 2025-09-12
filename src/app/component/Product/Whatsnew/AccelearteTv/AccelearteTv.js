"use client";
import React from "react";

const AccelerateTV = () => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-stretch justify-center gap-10">
      {/* Left Side - YouTube Embed */}
      <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg"
          src="https://www.youtube.com/embed/TBOufnd_huU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Side - Text Box */}
      <div className="w-full max-w-2xl  rounded-lg p-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Accelerate operations:{" "}
          <span className="text-purple-400">Translate</span>{" "}
          with <span className="text-blue-500">AI</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed">
          Translating content is crucial for maximizing your reach. But it’s not
          just about translating articles or product descriptions. You should
          also make sure to translate things like image descriptions. This helps
          make sure your content is accessible for all of your visitors. The
          great news? You can translate content in Kontent.ai instantly, with AI
          translations. Check out the video for a demo of it in action!
        </p>
      </div>
    </section>
  );
};

export default AccelerateTV;
