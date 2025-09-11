// components/Testimonial.tsx
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-black text-white px-4 md:px-8 py-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-left mb-16 md:pl-80">
        Customers value{" "}
        <span className="text-[#7352FF]">Mission Control</span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:gap-6">
        {/* Left Side Image */}
        <div className="flex justify-center md:justify-start md:mt-9 mb-6 md:mb-0">
          <Image
            src="/Product/MissionController/testmonial.webp"
            alt="Customer"
            width={260}
            height={310}
            className="rounded-md object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:basis-2/3 flex flex-col justify-center">
          {/* Quote + Text in one row */}
          <div className="flex items-start mb-8">
            <span className="text-[#7352FF] text-6xl md:text-9xl font-serif leading-none">
              “
            </span>
            <p className="text-lg md:text-2xl leading-relaxed ml-2">
              The content status overview in Mission Control helps us trace
              unresolved comments and tasks in such an easy, efficient way.
              Kontent.ai clearly invests in developing useful new functionality
              based on customer needs and feedback.
            </p>
          </div>

          {/* Name + Role */}
          <div className="mb-6">
            <p className="font-semibold">Loes Hofstee</p>
            <p className="text-gray-400 text-sm md:text-base">
              Web Editor, Universiteit van Amsterdam
            </p>
          </div>

          {/* Logo */}
          <Image
            src="/Product/MissionController/unilogo.svg"
            alt="University of Amsterdam Logo"
            width={120}
            height={120}
          />
        </div>
      </div>
    </section>
  );
}
