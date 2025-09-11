"use client";
import React from "react";

const ContentFaster = () => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Side - Image Preview */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img
          src="/Product/Whats-new/whats.webp"
          alt="Content Governance"
          className="w-[600px] h-[380px] object-cover rounded-xl mx-auto lg:mx-0"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full max-w-xl text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Find content faster with the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            smarter search experience
          </span>
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Search and discovery in your CMS just got smarter! Search now
          understands the context of your query, so you can find exactly what
          you need. Navigate through your content repository with speed and ease
          with this new update.
        </p>
        <button className="px-6 py-3 bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ContentFaster;
