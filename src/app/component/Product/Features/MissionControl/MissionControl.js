"use client";
import React from "react";

const MissionControl = () => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Side - Text */}
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Mission Control:
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Your Home base
          </span>
        </h2>
        <p className="text-lg text-gray-200 mb-6">
         Start the day in Mission Control, where you can monitor everything that is happening across your content, teams, and operations. With consolidated insights, it’s much easier to take the right action to improve how your teams work and accelerate content production. </p>
        <button className="px-6 py-3 bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>

      {/* Right Side - Image Preview */}
      <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
        <img
          src="/product/extsection.webp"
          alt="Content Governance"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default MissionControl;
