"use client";

export default function DataInsightDeveloper({ data }) {
  return (
    <section className="bg-black text-white px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition min-h-[400px] flex flex-col"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed flex-grow">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
