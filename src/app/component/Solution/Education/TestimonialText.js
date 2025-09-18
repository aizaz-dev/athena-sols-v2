"use client";

const testimonials = [
  {
    quote:
      "Working with Kontent.ai for nearly 7 years has been an absolute pleasure. From day one, their platform has been rock solid, consistently delivering the reliability we need and enabling us to grow our business. Their support team is reactive, which allows us to move fast. Looking forward to many more years of collaboration.",
    name: "Casper Cusumano",
    role: "Digital Content Expert, Bancontact Payconiq Company",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bancontact_logo.svg/2560px-Bancontact_logo.svg.png",
  },
];

export default function TestimonialTextOnly() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i}>
            <p className="text-lg md:text-2xl leading-relaxed mb-8">
              <span className="text-[#7062FF] text-3xl font-bold">“</span>
              {t.quote}
            </p>
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-gray-400 mb-6">{t.role}</p>
            <img
              src={t.companyLogo}
              alt="Company Logo"
              className="object-contain w-[180px] h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
