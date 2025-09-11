"use client";
import React from "react";

const StrengthenContent = () => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Side - Text */}
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Strengthen all your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            content operations
          </span>
        </h2>
        <p className="text-lg text-gray-200 font-semibold mb-6">
          AI in Kontent.ai acts as a powerful force multiplier across the entire
          content journey. It helps with the heavy lifting required for
          efficient collaboration, content creation, organization, content
          discovery, and translation, giving organizations more control at each
          step.
        </p>
      </div>

      {/* Right Side - Dummy Image */}
      <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
        <img
          src="/Product/accelerators/page2ai.webp"
          alt="accelerators"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default StrengthenContent;
