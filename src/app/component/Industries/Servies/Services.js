"use client";
import Link from "next/link";
import industries from "../../../data/Industries/industries";

export default function IndustriesServices() {
  return (
    <section className="bg-black py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((item, i) => (
          <div
            key={i}
            className="bg-[#111] rounded-2xl overflow-hidden flex flex-col shadow-lg h-[680px] w-full"
          >
            {/* Green background instead of image */}
            <div className="bg-green-600 w-full h-64"></div>

            {/* Text content */}
            <div className="flex flex-col flex-1 justify-between p-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Button - black bg + white text for all */}
              <div className="mt-8">
                <Link
                  href={item.link}
                  className="block w-full text-center rounded-full px-8 py-4 text-base font-semibold transition bg-black text-white hover:bg-white hover:text-black"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
