"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";

const MissionControl = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-[#4e3af2] text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Side - Video Preview */}
      <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
        {!play ? (
          <>
            {/* Thumbnail from YouTube */}
            <img
              src="https://img.youtube.com/vi/TBOufnd_huU/maxresdefault.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Play Button Overlay */}
            <button
              onClick={() => setPlay(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-black bg-opacity-70 w-16 h-16 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-64 md:h-96 rounded-xl"
            src="https://www.youtube.com/embed/TBOufnd_huU?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Right Side - Text */}
      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl  font-bold mb-4">
          Mission Control, the industry’s first content management dashboard
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Mission Control is the go-to place to monitor everything happening
          in your content management system. Assignments, overdue tasks, and
          unresolved comments. Workflow pace and recently published content.
          It’s all here, so you can fix what’s slowing your teams down.
        </p>
        <button className="px-6 py-3 bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-[#4e3af2] transition">
          Explore Mission Control
        </button>
      </div>
    </section>
  );
};

export default MissionControl;
