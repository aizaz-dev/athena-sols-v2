"use client";
import Link from "next/link";

/**
 * Hero Component
 * ----------------------
 * A reusable hero section with:
 *  - Dynamic heading and highlighted text
 *  - Description paragraph
 *  - Configurable buttons (links)
 *
 * Props:
 *  - data: {
 *      heading: string,
 *      highlight: string,
 *      description: string,
 *      buttons: [{ text: string, link: string }]
 *    }
 */
export default function Hero({ data }) {
  if (!data) return null; // ✅ Early return if data is missing

  const { heading, highlight, description, buttons } = data;

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[200px] flex items-center justify-center">
      <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-22 sm:py-16 md:py-20 text-center">
        
        {/* =====================
            Hero Heading
            - Supports responsive text sizes
            - Highlighted word has a background image for effect
           ===================== */}
        <h1
          className="tracking-tight leading-[1.15] 
                     text-4xl sm:text-5xl md:text-7xl lg:text-[100px] xl:text-[120px] 
                      uppercase"
        >
          {heading}{" "}
          <span
            className="bg-clip-text text-transparent 
                       bg-[url('/Home/textback.webp')] bg-cover bg-center"
          >
            {highlight}
          </span>
        </h1>

        {/* =====================
            Hero Description
            - Lighter text with max width for readability
           ===================== */}
        <p
          className="mt-6 sm:mt-8 md:mt-10 text-gray-300 
                     text-base sm:text-lg md:text-xl lg:text-[1.25rem] 
                     font-medium max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </p>

        {/* =====================
            Hero Buttons
            - Flexible: Stack on mobile, inline on larger screens
            - Styled as rounded CTA buttons
           ===================== */}
        <div className="mt-8 sm:mt-12 md:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {buttons?.map((btn, i) => (
            <Link
              key={i}
              href={btn.link}
              className="px-6 sm:px-8 lg:px-12 py-3.5 sm:py-4 lg:py-5 
                         rounded-full border border-white text-white 
                         font-semibold text-sm sm:text-base md:text-lg lg:text-xl 
                         hover:bg-white hover:text-black transition 
                         w-full sm:w-auto text-center"
            >
              {btn.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
