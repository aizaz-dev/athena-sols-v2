"use client";
import { FaCode, FaBullseye, FaUsers } from "react-icons/fa";

const teamCards = [
  {
    icon: <FaUsers className="text-3xl text-white mb-4" />,
    title: "High-performing teams work faster",
    description:
      "Algolia can create and edit content much faster, without developer help. Also, localization is automated, with only a review needed, meaning no more manual inputs.",
    buttonText: "Read the customer story",
  },
  {
    icon: <FaBullseye className="text-3xl text-white mb-4" />,
    title: "Everyone owns their areas of expertise",
    description:
      "Integria uses Web Spotlight to give content teams the control they need to create compelling content for 6 different brands.",
    buttonText: "Read the customer story",
  },
  {
    icon: <FaCode className="text-3xl text-white mb-4" />,
    title: "Developers have what they need to succeed",
    description:
      "Intralox can develop and host their website in a modern way, future-proofing their setup to enable redesigns or connecting with other services over time.",
    buttonText: "Read the customer story",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#1a1a1a] text-white px-6 md:px-12 lg:px-24 py-16">
      {/* Top Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
          Designed for your{" "}
          <span className="text-[#6C63FF]">entire digital team</span>
        </h2>
        <p className="text-gray-300 mt-4 text-base md:text-lg">
          Content authors, designers, and developers have everything they need to
          create and distribute content more quickly, more safely, and more flexibly. <br />
          See what organizations can do with Kontent.ai.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {teamCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-[#222] rounded-2xl p-6 h-[400px] md:h-[450px] "
          >
            <div>
              {card.icon}
              <h3 className="text-2xl font-semibold leading-snug">{card.title}</h3>
              <p className="text-gray-300 mt-3 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
            <button className="mt-6 border border-gray-400 rounded-full px-6 py-2 hover:bg-white hover:text-black transition self-start">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
