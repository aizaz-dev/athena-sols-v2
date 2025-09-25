"use client";
import Image from "next/image";

const teamCards = [
  {
    icon: "/Features/Speed.svg",
    title: "High-performing teams work faster",
    description:
      "Algolia can create and edit content much faster, without developer help. Also, localization is automated, with only a review needed, meaning no more manual inputs.",
    buttonText: "Read the customer story",
  },
  {
    icon: "/Features/target.svg",
    title: "Everyone owns their areas of expertise",
    description:
      "Integria uses Web Spotlight to give content teams the control they need to create compelling content for 6 different brands.",
    buttonText: "Read the customer story",
  },
  {
    icon: "/Features/code.svg",
    title: "Developers have what they need to succeed",
    description:
      "Intralox can develop and host their website in a modern way, future-proofing their setup to enable redesigns or connecting with other services over time.",
    buttonText: "Read the customer story",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#222] text-white px-4 sm:px-6 md:px-20 lg:px-50 py-12 sm:py-16 ">
      {/* Top Content */}
      <div className="text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
          Designed for your{" "}
          <span className="text-[#6C63FF]">entire digital team</span>
        </h2>
        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg">
          Content authors, designers, and developers have everything they need
          to create and distribute content more quickly, more safely, and more
          flexibly. <br className="hidden sm:block" />
          See what organizations can do with Kontent.ai.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {teamCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-[#222] rounded-2xl p-6 h-auto min-h-[350px] sm:min-h-[400px] md:min-h-[450px] transition hover:shadow-lg"
          >
            <div>
              <Image src={card.icon} width={30} height={30} alt={card.title} />
              <h3 className="text-xl sm:text-2xl md:text-3xl mt-2 font-semibold leading-snug">
                {card.title}
              </h3>
              <p className="text-white mt-3 text-sm sm:text-1xl leading-relaxed">
                {card.description}
              </p>
            </div>
            <button className="mt-6 border border-gray-400 rounded-full px-22 py-5 text-base sm:text-lg font-medium hover:bg-white hover:text-black transition self-start">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
