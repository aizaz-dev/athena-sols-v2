"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/ignite.png", alt: "Ignite" },
  { src: "/logos/elanco.png", alt: "Elanco" },
  { src: "/logos/umc.png", alt: "UMC Utrecht" },
  { src: "/logos/cancer-council.png", alt: "Cancer Council Australia" },
  { src: "/logos/ncoa.png", alt: "NCOA" },
  { src: "/logos/integria.png", alt: "Integria" },
  { src: "/logos/esmo.png", alt: "ESMO" },
  { src: "/logos/dkms.png", alt: "DKMS" },
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
