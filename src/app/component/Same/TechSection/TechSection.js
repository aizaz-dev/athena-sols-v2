"use client";

export default function TechStackSection({ data }) {
  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-44 lg:px-62 py-20">
      <div className="max-w-3xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-[2.3rem] font-bold leading-tight">
          {data.heading}
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          {data.paragraph}
        </p>
      </div>
    </section>
  );
}
