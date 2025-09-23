"use client";

import Image from "next/image";

const logos = [
  { src: "/SolutionPage/healthCare/webmd.webp", alt: "Ignite" },
  { src: "/SolutionPage/healthCare/elanco-logo.svg", alt: "Elanco" },
  { src: "/SolutionPage/healthCare/umc.svg", alt: "UMC Utrecht" },
  { src: "/SolutionPage/healthCare/cancer.svg", alt: "Cancer Council Australia" },
  { src: "/SolutionPage/healthCare/ncosvg.svg", alt: "NCOA" },
  { src: "/SolutionPage/healthCare/integria.webp", alt: "Integria" },
  { src: "/SolutionPage/healthCare/esmo.webp", alt: "ESMO" },
  { src: "/SolutionPage/healthCare/dkms.svg", alt: "DKMS" },
];

export default function TrustedPartners() {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-22 md:px-40 lg:px-52">
      {/* Heading Top Left */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug ">
          A trusted partner for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-600">
            healthcare organizations
          </span>
        </h2>
      </div>

      {/* Logos Centered */}
      <div className="flex flex-wrap justify-center gap-10">
        {logos.map((logo, idx) => (
          <Image
            key={idx}
            src={logo.src}
            alt={logo.alt}
            width={140}
            height={80}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
