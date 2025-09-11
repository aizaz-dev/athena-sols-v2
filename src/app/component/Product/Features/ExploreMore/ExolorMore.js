"use client";
import Image from "next/image";

export default function ExploreMore() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 ">
      {/* Left Side */}
      <div className="bg-[#5F4BFF] text-white flex flex-col justify-center px-6 sm:px-8 md:px-16 py-12 sm:py-20">
        <div className="sm:pl-8 md:pl-16 lg:pl-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
            Explore more <br /> Kontent.ai features
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
            See how we can help your organization achieve an unparalleled return
            on your content in a personalized demo.{" "}
          </p>

          {/* Form */}
          <div className="mt-8 sm:mt-12 w-full max-w-md">
            <input
              type="email"
              placeholder="Your business email"
              className="w-full bg-transparent border-b border-white text-white placeholder-gray-200 focus:outline-none py-3 sm:py-4 text-base sm:text-lg md:text-xl lg:text-2xl"
            />

            <label className="flex items-center gap-2 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 sm:w-5 sm:h-5 accent-white"
              />
              I want to receive news and updates from Kontent.ai
            </label>

            <button className="mt-6 sm:mt-8 bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-medium hover:bg-gray-900 transition w-full sm:w-auto">
              See if we’re a fit
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-auto">
        <Image
          src="/SecurityComponent/CMSPIC.webp"
          alt="CTA Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
