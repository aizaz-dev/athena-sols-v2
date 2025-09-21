// components/ExecutiveTeam.js
import { team } from "../../../data/About/ExcutiveData/Excutive";
import { Linkedin } from "lucide-react";

export default function ExecutiveTeam() {
  const firstRow = team.slice(0, 5);
  const secondRow = team.slice(5);

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          Meet our <span className="text-indigo-400">executive team</span>
        </h2>

        {/* First row with 5 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {firstRow.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-56 h-56 flex items-center justify-center rounded-lg overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-2xl">{member.name}</h3>
              <p className="text-lg text-gray-300 mb-4">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-400"
              >
                <Linkedin size={28} />
              </a>
            </div>
          ))}
        </div>

        {/* Second row with 4 members centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {secondRow.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-56 h-56 flex items-center justify-center rounded-lg overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-2xl">{member.name}</h3>
              <p className="text-lg text-gray-300 mb-4">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-400"
              >
                <Linkedin size={28} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}