// components/InfoCard.js
export default function InfoCard({
  icon,
  title,
  description,
  buttonText = "Explore more",
}) {
  return (
    <div className="bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl shadow-lg transition flex flex-col min-h-[360px] sm:min-h-[400px]">
      <div>
        <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{icon}</div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          {title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
      <button className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold rounded-full border border-black hover:scale-105 hover:shadow-md hover:bg-black hover:text-white transition">
        {buttonText}
      </button>
    </div>
  );
}
