"use client";
import Image from "next/image";

export default function CustomHeading({
  title,
  description,
  inputPlaceholder,
  checkboxLabel,
  buttonText,
  image,
}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] lg:min-h-[500px]">
      {/* Left Side */}
      <div className="bg-[#5F4BFF] text-white flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-16 md:py-20">
        <div className="pl-0 sm:pl-4 md:pl-8 lg:pl-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h2>          
            <button className="mt-5 sm:mt-6 md:mt-8 bg-black text-white px-5 sm:px-6 md:px-8 lg:px-30 py-2 sm:py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:bg-gray-900 transition w-full sm:w-auto">
              {buttonText}
            </button>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-auto">
        <Image
          src={image}
          alt="CTA Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
