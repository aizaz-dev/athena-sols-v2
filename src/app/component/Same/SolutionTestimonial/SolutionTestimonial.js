"use client";
import Image from "next/image";
export default function Testimonial({ testimonials }) {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12 md:px-10 lg:px-22">
      {testimonials.map((t, i) => (
        <div
          key={i}
          // 🔹 Layout: if image exists → row layout, otherwise → column layout
          className={`flex flex-col ${
            t.image ? "md:flex-row" : "md:flex-col"
          } items-center justify-center gap-12`}
        >
          {/* ===========================
              Left Side (Image Section)
              =========================== */}
          {t.image && (
            <div className="flex-shrink-0">
              <img
                src={t.image}
                alt={t.name}
                width={320}
                height={320}
                className="rounded-lg object-cover w-[320px] h-[320px]"
              />
            </div>
          )}

          {/* ===========================
              Right Side (Content Section)
              =========================== */}
          <div
            className={`${
              t.image
                ? "max-w-4xl text-base md:text-xl" // smaller width/text when image present
                : "max-w-7xl text-xl md:text-2xl" // larger width/text when no image
            }`}
          >
            {/* 🔹 Opening Quote (❝) placed separately above text */}
            <div className="text-[#7062FF] text-5xl font-bold mb-4">❝</div>

            {/* Testimonial Quote */}
            <p
              className={`leading-relaxed mb-6 ${
                t.image ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              }`}
            >
              {t.quote}
            </p>

            {/* Person’s Name */}
            <h4
              className={`font-semibold ${
                t.image ? "text-lg" : "text-xl md:text-2xl"
              }`}
            >
              {t.name}
            </h4>

            {/* Person’s Role */}
            <p className="text-gray-400 mb-6">{t.role}</p>

            {/* Company Logo (if available) */}
            {t.companyLogo && (
              <div className="relative w-[120px] h-[40px]">
                <img
                  src={t.companyLogo}
                  alt="Company Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
