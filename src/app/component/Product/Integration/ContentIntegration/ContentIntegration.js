"use client";

export default function TechStackSection() {
  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-24 lg:px-32 py-20">
      <div className="max-w-3xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Build your best{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F4BFF] to-[#5F4BFF]">
            tech stack
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Integrating Kontent.ai with other platforms creates the connections
          that help you to achieve an unparalleled return on your content. From
          e-commerce tools to search solutions, personalization engines to
          static site generators, our rich set of integrations are here to fuel
          your success.
        </p>
      </div>
    </section>
  );
}
