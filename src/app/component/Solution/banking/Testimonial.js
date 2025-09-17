"use client";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=500&fit=crop",
    quote:
      "With Kontent.ai, the content editing process is now so much faster. We don’t need to consult a giant rulebook to create content—everything is clear, straightforward, and easy to use. This improved usability translates to a much faster content creation process.",
    name: "Karin Broeksma",
    role: "SEO Specialist, Knab",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Knab_logo.svg/2560px-Knab_logo.svg.png",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12 md:px-10 lg:px-22">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center md:items-center justify-center gap-12"
        >
          <div className="flex-shrink-0">
            <img
              src={t.image}
              alt={t.name}
              className="rounded-lg object-cover w-[320px] h-[320px]"
            />
          </div>
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <span className="text-[#7062FF] text-3xl font-bold">“</span>
              {t.quote}
            </p>
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-gray-400 mb-6">{t.role}</p>
            <img
              src={t.companyLogo}
              alt="Company Logo"
              className="object-contain w-[120px] h-auto"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
