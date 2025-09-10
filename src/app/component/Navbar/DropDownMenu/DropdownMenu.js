"use client";
import Link from "next/link";

export default function DropdownMenu({ links, promo, isMobile = false, align = "left" }) {
  return (
    <>
      {/* Desktop Mega Menu */}
      {!isMobile && (
        <div
          className={`
            w-[950px] rounded-xl shadow-2xl bg-[#111] text-white p-8 flex gap-10 z-50
            min-h-[300px] max-h-[80vh]
            ${align === "right" ? "right-0" : "left-0"}
          `}
        >
          {/* Links Columns */}
          <div className="flex-1 grid grid-cols-2 gap-8">
            {links.map((col, i) => (
              <div key={i}>
                <h3 className="text-[13px] uppercase tracking-wide mb-4 border-b border-gray-700 pb-2">
                  {col.title}
                </h3>
                <ul className="space-y-3 text-[15px]">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={item.href}
                        className="hover:text-indigo-400 flex items-start gap-2 py-1.5"
                      >
                        {item.icon && <span>{item.icon}</span>}
                        <span>
                          <span className="block font-medium">{item.label}</span>
                          {item.desc && (
                            <span className="text-[13px] text-gray-400">{item.desc}</span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Promo Box */}
          {promo && (
            <div className="w-1/3">
              <div className="bg-indigo-500 p-6 rounded-xl text-white flex flex-col gap-3 h-full justify-between">
                {promo.image && (
                  <img src={promo.image} alt="Promo" className="rounded-lg mb-3" />
                )}
                <p className="text-lg font-semibold leading-snug">{promo.text}</p>
                <Link
                  href={promo.href}
                  className="border border-white rounded-full px-4 py-2 text-center hover:bg-white hover:text-indigo-600 transition"
                >
                  {promo.cta}
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Stacked Menu */}
      {isMobile && (
        <div className="flex flex-col gap-6 bg-[#111] text-white rounded-xl p-4 mt-3">
          {links.map((col, i) => (
            <div key={i}>
              <h3 className="text-[13px] uppercase tracking-wide mb-3 border-b border-gray-700 pb-2">
                {col.title}
              </h3>
              <ul className="space-y-2 text-[15px]">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      href={item.href}
                      className="hover:text-indigo-400 flex items-start gap-2 py-1.5"
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span>
                        <span className="block font-medium">{item.label}</span>
                        {item.desc && (
                          <span className="text-[13px] text-gray-400">{item.desc}</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Promo Box */}
          {promo && (
            <div className="bg-indigo-500 p-5 rounded-xl text-white flex flex-col gap-3">
              {promo.image && (
                <img src={promo.image} alt="Promo" className="rounded-lg mb-3" />
              )}
              <p className="text-base font-semibold leading-snug">{promo.text}</p>
              <Link
                href={promo.href}
                className="border border-white rounded-full px-4 py-2 text-center hover:bg-white hover:text-indigo-600 transition"
              >
                {promo.cta}
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
