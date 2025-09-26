// components/Resources.tsx
import Image from "next/image";

export default function ResourcesWhat() {
  const resources = [
    {
      id: 1,
      img: "/Product/MissionController/card1.webp",
      badge: "Whitepapers",
      title: "From good to great: Top strategies to improve your content value chain",
      highlight: "VALUE CHAIN",
      author: "Kontent.ai Team",
    },
    {
      id: 2,
      img: "/Product/MissionController/card2.webp",
      badge: "Whitepapers",
      title: "The role of AI in streamlining content creation",
      highlight: "CONTENT CREATION",
      author: "Kontent.ai Team",
    },
    {
      id: 3,
      img: "/Product/MissionController/card3.webp",
      badge: "Blog posts",
      title: "Increase your content velocity with new AI accelerators",
      highlight: "",
      author: "Jordan Torpy",
    },
  ];

  return (
    <section className="bg-black text-white px-4 md:px-12 py-16">
      {/* Heading + Paragraph block */}
      <div className="max-w-7xl mx-auto  mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Stay on top of the{" "}
          <span className="text-[#7352FF]">latest updates</span>
        </h2>
        <p className="text-white w-2xl font-semibold">
         Dive into the following resources to learn more about how Kontent.ai helps organizations manage large-scale content programs. Or check out product updates for a detailed look at everything new to the platform.


        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {resources.map((res) => (
          <div key={res.id} className="flex flex-col">
            {/* Image + Overlay */}
            <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden">
              <Image
                src={res.img}
                alt={res.title}
                fill
                className="object-cover"
              />
             
            </div>

            {/* Content */}
            <div className="mt-6">
              <span className="border border-white rounded-full px-3 py-1 text-sm">
                {res.badge}
              </span>
              <h4 className="mt-4 text-2xl font-semibold">{res.title}</h4>
              <p className="text-white text-xl mt-2">{res.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
