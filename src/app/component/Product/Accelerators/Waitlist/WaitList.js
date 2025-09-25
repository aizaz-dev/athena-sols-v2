"use client";

import { useState } from "react";

// 🌍 Countries list (A–Z)
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
  "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
  "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia",
  "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine State",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia",
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
  "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania",
  "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America",
  "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
].sort();

// 📢 Platforms (for "How did you hear about us?")
const platforms = [
  "Google",
  "YouTube",
  "Facebook",
  "Twitter (X)",
  "LinkedIn",
  "Instagram",
  "TikTok",
  "Friend/Colleague",
  "Other"
];

export default function WaitlistPage() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 sm:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Be one of the first to experience{" "}
            <span className="text-indigo-400">Agentic CMS</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Agentic CMS is transforming the way content operations are done. 
            Want to see how? Don’t miss out. Join the waitlist and secure your spot.
          </p>
        </div>

        {/* Right Side Form */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Join the waitlist</h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="First name"
              className="w-full bg-black border-b border-gray-600 py-3 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full bg-black border-b border-gray-600 py-3 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Business email"
              className="w-full bg-black border-b border-gray-600 py-3 text-white focus:outline-none"
            />

            {/* Country Select */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-black border-b border-gray-600 py-3 text-white focus:outline-none"
            >
              <option value="">Suggested countries</option>
              {countries.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Platform Select */}
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="w-full bg-black border-b border-gray-600 py-3 text-white focus:outline-none"
            >
              <option value="">How did you hear about us?</option>
              {platforms.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <textarea
              placeholder="What tasks would you like AI to help with?"
              className="w-full bg-black border-b border-gray-600 py-3 text-white focus:outline-none"
            />

            {/* Checkbox */}
            <label className="flex items-center space-x-2 text-sm text-gray-400">
              <input type="checkbox" className="accent-indigo-400" />
              <span>I want to receive news and updates from Kontent.ai</span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
