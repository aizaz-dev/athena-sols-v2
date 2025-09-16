"use client";

export default function TechStackSection() {
  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-24 lg:px-32 py-20">
      <div className="max-w-3xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
         Adapt Kontent.ai to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F4BFF] to-[#5F4BFF]">
            your needs
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
      Kontent.ai provides the architecture, APIs, and connectors to let you evolve the solution however you need to for your business.


        </p>
      </div>
    </section>
  );
}
