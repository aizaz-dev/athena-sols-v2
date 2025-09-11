"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";

const MSvideo = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Side - Text */}
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Control and efficiency:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            The content-first advantage
          </span>
        </h2>
        <p className="text-lg text-gray-200 font-semibold mb-6">
          A content-first approach prioritizes content and its message before
          design, layout, and development. This allows you to create value in
          more than one context or on more than one channel, compared to
          single-purpose content that’s tied to a specific layout or webpage.
        </p>
        <p className="text-lg text-gray-200 font-semibold mb-6">
          In Kontent.ai, reusable modular content blocks help you make the most
          of your content, while keeping it consistent and accurate wherever
          it’s published.
        </p>
      </div>

      {/* Right Side - Video Preview */}
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
            src="https://www.youtube.com/embed/TBOufnd_huU?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default MSvideo;
