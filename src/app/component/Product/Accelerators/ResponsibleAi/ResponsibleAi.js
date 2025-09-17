"use client";
import Image from "next/image";

const features = [
  {
    title: "Aligned with best practices",
    points: [
      "We follow the NIST AI Risk Management Framework",
      "We utilize a toolkit including the HAX framework to build AI in a responsible way",
    ],
    links: [{ label: "HAX framework", href: "#" }],
  },
  {
    title: "Compliant with the EU AI Act from day 1",
    points: [
      "We commit to be compliant with the EU AI Act from the first day of its applicability",
      "We follow the best practices of capAI",
    ],
    links: [{ label: "capAI", href: "#" }],
  },
  {
    title: "Committed to good stewardship",
    points: [
      "We use AI with guaranteed customer data privacy and security",
      "We provide a clear shared responsibility model over AI",
    ],
    links: [],
  },
];

// Badges images (public folder ke andar rakho)
const badges = [
  { src: "/Product/accelerators/grip1.webp", alt: "Grid Leader" },
  { src: "/Product/accelerators/grip2.webp", alt: "Easiest Setup" },
  { src: "/Product/accelerators/grip3.webp", alt: "Best Support" },
  { src: "/Product/accelerators/grip4.webp", alt: "High Performer" },
];

export default function ResponsibleAI() {
  return (
    <section className="bg-black text-white py-20  px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
          Committed to{" "}
          <span className="text-[#5c4ef2]">responsible AI</span>
        </h2>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#2c2c2c] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold mb-6">{feature.title}</h3>
              <ul className="space-y-4">
                {feature.points.map((point, idx) => {
                  let text = point;
                  feature.links.forEach((link) => {
                    if (text.includes(link.label)) {
                      text = text.replace(
                        link.label,
                        `<a href="${link.href}" class="hover:text-[#5c4ef2] underline">${link.label}</a>`
                      );
                    }
                  });
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[1.1rem] leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: `<span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#5c4ef2]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 011.414-1.414l4.222 4.222 6.657-6.657a1 1 0 011.414 0z" clip-rule="evenodd"/></svg></span><span>${text}</span>`,
                      }}
                    />
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Badges Images */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {badges.map((badge, i) => (
            <div key={i} className="w-40 md:w-48">
              <Image
                src={badge.src}
                alt={badge.alt}
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
