"use client";

const data = [
  {
    title: "We help our clients solve complex content challenges",
    description:
      "We help content-driven organizations in regulated industries like healthcare and insurance overcome complex content challenges. We do this by bringing complete control and efficiency to every aspect of content management. At the core of our work is a commitment to helping clients streamline content operations, reduce risk, and enable teams to deliver high-quality content at scale.",
  },
  {
    title: "Complex content management made simple",
    description:
      "Our vision is to make complex content management simple—especially in industries where accuracy, compliance, and speed are non-negotiable. By streamlining how content is managed and delivered, we empower teams to focus on what truly matters: creating impactful content that drives results.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 ">
        Our mission <span className="text-indigo-400">and vision</span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg"
          >
            {/* Temporary blue background instead of image */}
            <div className="w-full h-72 bg-blue-600" />

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
