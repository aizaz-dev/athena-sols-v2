// FeatureSection.js
import Image from "next/image";

export default function FeatureSection() {
  const features = [
    {
      title: "Content creation",
      description:
        "Go from blank page to first draft in an instant. Let AI tweak, rephrase, and adjust content to keep it on-brand and tuned in to your audience.",
      image: "/Product/accelerators/f1.webp",
      buttonText: "Learn more",
    },
    {
      title: "Content creation",
      description:
        "Go from blank page to first draft in an instant. Let AI tweak, rephrase, and adjust content to keep it on-brand and tuned in to your audience.",
      image: "/Product/accelerators/f1.webp",
      buttonText: "Learn more",
    },
    {
      title: "Content creation",
      description:
        "Go from blank page to first draft in an instant. Let AI tweak, rephrase, and adjust content to keep it on-brand and tuned in to your audience.",
      image: "/Product/accelerators/f1.webp",
      buttonText: "Learn more",
    },
    {
      title: "Content creation",
      description:
        "Go from blank page to first draft in an instant. Let AI tweak, rephrase, and adjust content to keep it on-brand and tuned in to your audience.",
      image: "/Product/accelerators/f1.webp",
      buttonText: "Learn more",
    },
    {
      title: "Content creation",
      description:
        "Go from blank page to first draft in an instant. Let AI tweak, rephrase, and adjust content to keep it on-brand and tuned in to your audience.",
      image: "/Product/accelerators/f1.webp",
      buttonText: "Learn more",
    },
    {
      title: "Content creation",
      description:
        "Go from blank page to first draft in an instant. Let AI tweak, rephrase, and adjust content to keep it on-brand and tuned in to your audience.",
      image: "/Product/accelerators/f1.webp",
      buttonText: "Learn more",
    },
    
  ];

  return (
    <section className="bg-black text-white px-6 md:px-75 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        AI-accelerated content solutions
      </h2>

      <div className="grid grid-cols-1 max-w-7xl md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-xl overflow-hidden">
            <div className="w-full h-64 relative">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-5xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white text-1xl mb-46">{feature.description}</p>

              {/* Button center */}
              <div className="flex justify-center">
                <button className="px-19 py-6 border border-gray-400 rounded-full hover:bg-white hover:text-black transition">
                  {feature.buttonText || "Learn more"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
