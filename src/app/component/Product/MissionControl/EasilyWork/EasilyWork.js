"use client";
import React from "react";

const EasilyWork = () => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Side - Text */}
      <div className="w-full max-w-xl text-left order-2 lg:order-none">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Better quality content through{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            tight governance
          </span>
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Governance is a key component of high-quality content—content that’s
          consistent, accurate, and engaging. In Kontent.ai, organizations have
          complete control over their content: who can work with it, how it
          moves through workflows, where it’s published, and more.
        </p>
        <button className="px-6 py-3 bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>

      {/* Right Side - Image Preview */}
      <div className="rounded-xl overflow-hidden shadow-lg order-1 lg:order-none">
        <img
          src="/product/extsection.webp"
          alt="Content Governance"
          className="w-[600px] h-[380px] object-cover rounded-xl mx-auto lg:mx-0"
        />
      </div>
    </section>
  );
};

export default EasilyWork;
