"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = ({
  title,
  highlight,
  description,
  extraDescription,
  thumbnail,
  videoUrl,
  reverse = false,
}) => {
  const [play, setPlay] = useState(false);

  return (
    <section
      className={`bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-10 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Side */}
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {highlight}
          </span>
        </h2>
        <p className="text-lg text-gray-200 font-semibold mb-6">{description}</p>
        {extraDescription && (
          <p className="text-lg text-gray-200 font-semibold mb-6">
            {extraDescription}
          </p>
        )}
      </div>

      {/* Video Side */}
      <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
        {!play ? (
          <>
            {/* Thumbnail */}
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Play Button */}
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
            src={`${videoUrl}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
