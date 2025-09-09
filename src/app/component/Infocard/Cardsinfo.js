// components/CardInfo.js
import InfoCard from "./InfoCard";
import { cardsData } from "@/app/data/CardData/CardData";

export default function CardInfo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 sm:py-16 bg-white">
      {/* Top Centered Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 sm:mb-14 text-center text-black">
        kontent.ai
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl w-full px-4 sm:px-8 md:px-12">
        {cardsData.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
