// components/ContentManagement.js
import React from "react";
import { FiTarget, FiEdit3, FiShuffle } from "react-icons/fi";

const ContentManagement = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Top Heading Section */}
      <div className=" max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Complex content management{" "}
          <span className="text-indigo-500">made simple</span>
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-3xl font-semibold">
          Your CMS shouldn’t slow you down. Explore key capabilities that help
          make content management in the Kontent.ai platform speedy and
          efficient.
        </p>
      </div>

      {/* Boxes Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Box 1 */}
        <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col justify-between shadow-lg">
          <div>
            <FiTarget className="text-2xl text-white" />
            <h3 className="text-xl font-semibold mt-5">
              The repository with everything you need
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              By removing the clutter often associated with other CMSs,
              Kontent.ai lets your team focus on your content strategy,
              delivering the best message across your digital channels.
            </p>
          </div>
          <button className="mt-6 w-fit px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Explore content hubs
          </button>
        </div>

        {/* Box 2 */}
        <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col justify-between shadow-lg">
          <div>
            <FiEdit3 className="text-2xl  text-white" />
            <h3 className="text-xl font-semibold mt-5">
              Content operations, accelerated with AI
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              AI is one of the greatest tools teams can leverage. In
              Kontent.ai, AI assistance is available right as you work, so you
              can brainstorm, create, and optimize content without having to
              leave the platform.
            </p>
          </div>
          <button className="mt-6 w-fit px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Explore AI
          </button>
        </div>

        {/* Box 3 */}
        <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col justify-between shadow-lg">
          <div>
            <FiShuffle className="text-2xl text-white" />
            <h3 className="text-xl font-semibold mt-5">
              Workflows that truly keep things moving
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Workflows support transparent, productive teamwork. Improve
              content quality and velocity with workflows customized to your
              organization, approval processes, and compliance requirements.
            </p>
          </div>
          <button className="mt-6 w-fit px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Explore workflows
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentManagement;
