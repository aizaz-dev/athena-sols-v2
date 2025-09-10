"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { cards } from "@/app/data/Customer Stories/CustomStories";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CustomerStories() {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Trusted globally by <br />
            <span className="text-indigo-500">content-driven orgs</span>
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-6 lg:mt-8">
            <button className="custom-prev w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition">
              <FaChevronLeft />
            </button>
            <button className="custom-next w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (CARDS) */}
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={16}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-black rounded overflow-hidden shadow-lg">
                  {/* Image + Overlay */}
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4 sm:p-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">
                          {card.title}
                        </h3>
                        <a
                          href={card.link}
                          className="text-sm sm:text-base font-semibold text-white hover:underline"
                        >
                          Explore more →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Logo below card */}
                  <div className="flex items-center justify-center py-6 sm:py-8 bg-black">
                    <div className="relative w-28 h-12 sm:w-32 sm:h-14 md:w-40 md:h-16">
                      <Image
                        src={card.logo}
                        alt="logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10 sm:mt-12">
        <a
          href="#"
          className="border border-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-white hover:text-black transition"
        >
          Explore customer stories
        </a>
      </div>
    </section>
  );
}
