"use client";
import React from "react";

const AgenticCms = () => {
  return (
    <section className="bg-[#1F1F1F] text-white py-16 px-6 flex flex-col lg:flex-row items-stretch justify-center gap-10">
      {/* Left Side - Image */}
      <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg flex items-center">
        <img
          src="/Product/Whats-new/agenticCMS.webp" 
          alt="Agentic CMS Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Text Box */}
      <div className="w-full max-w-2xl  rounded-lg p-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Explore the future of content management:{" "}
          <span className="text-purple-400">Agentic CMS</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-6">
          Get a candid look at what’s broken in the CMS world, what’s coming
          next, and how agentic systems are poised to redefine the way content
          and engineering teams work in this on-demand webinar with
          Kontent.ai’s product leadership.
        </p>
        <button className=" hover:text-black border-white border transition-colors text-white hover:bg-white font-semibold px-6 py-4  rounded-full w-fit">
          Watch the conversation
        </button>
      </div>
    </section>
  );
};

export default AgenticCms;
