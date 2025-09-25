"use client";
import Image from "next/image";
import React from "react";

const contentManagementData = {
  heading: "Complex content management",
  highlight: "made simple",
  description:
    "Your CMS shouldn’t slow you down. Explore key capabilities that help make content management in the Kontent.ai platform speedy and efficient.",
  boxes: [
    {
      imgUrl: "/Product/Platform/target.svg",
      title: "The repository with everything you need",
      description:
        "By removing the clutter often associated with other CMSs, Kontent.ai lets your team focus on your content strategy, delivering the best message across your digital channels.",
      buttonText: "Explore content hubs"
    },
    {
      imgUrl: "/Product/Platform/Pencil.svg",
      title: "Content operations, accelerated with AI",
      description:
        "AI is one of the greatest tools teams can leverage. In Kontent.ai, AI assistance is available right as you work, so you can brainstorm, create, and optimize content without having to leave the platform.",
      buttonText: "Explore AI"
    },
    {
      imgUrl: "/Product/Platform/Workflow.svg",
      title: "Workflows that truly keep things moving",
      description:
        "Workflows support transparent, productive teamwork. Improve content quality and velocity with workflows customized to your organization, approval processes, and compliance requirements.",
      buttonText: "Explore workflows"
    }
  ]
};

const ContentManagement = () => {
  const { heading, highlight, description, boxes } = contentManagementData;

  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Top Heading Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          {heading} <span className="text-indigo-500">{highlight}</span>
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-3xl font-semibold">{description}</p>
      </div>

      {/* Boxes Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between shadow-lg min-h-[350px]"
          >
            {/* Image on top row, left-aligned */}
            <div className="flex mb-4">
              <Image src={box.imgUrl} alt={box.title} height={50} width={50} className="w-8 h-8 object-contain" />
            </div>

            {/* Title, left-aligned */}
            <h3 className="text-2xl md:text-3xl font-semibold">{box.title}</h3>

            {/* Description, left-aligned */}
            <p className="mt-4 text-white text-lg leading-relaxed">{box.description}</p>

            {/* Button, left-aligned */}
            <div className="mt-6">
              <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                {box.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentManagement;
