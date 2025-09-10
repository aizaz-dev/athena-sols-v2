"use client";
import Image from "next/image";

const logos = [
  { src: "/SecurityComponent/iso-logo.webp", alt: "ISO" },
  { src: "/SecurityComponent/aicpa-soc-2.webp", alt: "AICPA SOC 2" },
  { src: "/SecurityComponent/star-level-1-badge.webp", alt: "STAR Level One" },
  { src: "/SecurityComponent/hipaa.webp", alt: "HIPAA Compliant" },
  { src: "/SecurityComponent/tech-accord-logo.webp", alt: "Tech Accord" },
  { src: "/SecurityComponent/dora-badge.svg", alt: "DORA" },
  { src: "/SecurityComponent/AI.webp", alt: "Responsible AI" },
  { src: "/SecurityComponent/gdpr-badge.svg", alt: "GDPR" },
];

export default function SecuritySection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl">
          Serious about <span className="text-indigo-400">CMS security</span>
        </h2>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-10 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-32 h-20 relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
