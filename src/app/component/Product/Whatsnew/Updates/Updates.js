// pages/index.js
import Image from "next/image";

export default function Updates() {
  const updates = [
    {
      type: "Blog posts",
      title: "Agentic CMS: Redefining content management for the future",
      author: "Zbysek Nemec",
      image: "/Product/Whats-new/AgenticCMS.webp",
    },
    {
      type: "Videos",
      title: "Explore Kontent.ai’s MCP server: Q&A and demo",
      author: "Monica Raszyk, Michael Berry",
      image: "/Product/Whats-new/AgenticCMS.webp",
    },
    {
      type: "Blog posts",
      title: "Managing content changes in Kontent.ai: A technical perspective",
      author: "Jordan Torpy",
      image: "/Product/Whats-new/AgenticCMS.webp",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay on top of the{" "}
          <span className="text-[#866BFD]">latest updates</span>
        </h2>
        <p className="text-white/80 mb-10 max-w-3xl">
          Dive into the following resources to learn more about how Kontent.ai
          helps organizations manage large-scale content programs. Or check out{" "}
          <a href="#" className="underline text-white hover:text-[#866BFD]">
            product updates
          </a>{" "}
          for a detailed look at everything new to the platform.
        </p>

        {/* Updates Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl h-100 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-[250px] object-cover z-0"
              />
              {/* Text Content */}
              <div className="absolute bottom-0 w-full p-4 z-10">
                <span className="text-white text-sm border border-white rounded-full px-3 py-1 mb-2 inline-block group-hover:bg-white group-hover:text-black transition-all">
                  {item.type}
                </span>
                <h3 className="text-white text-lg font-semibold leading-snug group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-white text-sm mt-1">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
