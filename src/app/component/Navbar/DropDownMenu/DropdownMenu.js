"use client";
import Link from "next/link";

export default function DropdownMenu({ links, promo, isMobile = false }) {
  return (
    <>
      {/* ================== DESKTOP ================== */}
      {!isMobile && (
        <div
          className="
            fixed top-[72px] left-1/2 -translate-x-1/2
            w-[1280px] min-h-[600px] 
            rounded-2xl shadow-2xl bg-[#111] text-white 
            p-12 flex gap-12 z-50
          "
        >
          {/* 3 Columns Section */}
          <div className="flex-1 grid grid-cols-3 gap-12 border-r border-gray-800 pr-12">
            {links.map((col, i) => (
              <div key={i}>
                <h3 className="text-[14px] uppercase tracking-wide font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-300">
                  {col.title}
                </h3>
                <ul className="space-y-6 text-[15px]">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={item.href || "#"}
                        className="hover:text-indigo-400 flex items-start gap-3"
                      >
                        {item.icon && (
                          <span className="text-indigo-400 mt-0.5">{item.icon}</span>
                        )}
                        <span>
                          <span className="block font-semibold">{item.label}</span>
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

          {/* Right-hand Promo */}
          {promo && (
            <div className="w-[360px]">
              <Link
                href={promo.href || "#"}
                className="relative rounded-xl overflow-hidden group shadow-lg block bg-gray-900"
              >
                {promo.image && (
                  <img
                    src={promo.image}
                    alt={promo.text}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                  <p className="text-white font-semibold text-lg leading-snug">
                    {promo.text}
                  </p>
                  {promo.cta && (
                    <span className="mt-2 inline-block bg-white text-indigo-600 text-sm font-semibold px-4 py-2 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition">
                      {promo.cta}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* ================== MOBILE ================== */}
      {isMobile && (
        <div className="flex flex-col gap-6 bg-[#111] text-white rounded-xl p-4 mt-3">
          {/* Links */}
          {links.map((col, i) => (
            <div key={i}>
              <h3 className="text-[14px] uppercase tracking-wide mb-3 border-b border-gray-700 pb-2 text-gray-300">
                {col.title}
              </h3>
              <ul className="space-y-4 text-[15px]">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      href={item.href || "#"}
                      className="hover:text-indigo-400 flex items-start gap-3"
                    >
                      {item.icon && (
                        <span className="text-indigo-400 mt-0.5">{item.icon}</span>
                      )}
                      <span>
                        <span className="block font-semibold">{item.label}</span>
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

          {/* Promo (Mobile) */}
          {promo && (
            <Link
              href={promo.href || "#"}
              className="relative rounded-xl overflow-hidden shadow-md block bg-gray-900"
            >
              {promo.image && (
                <img
                  src={promo.image}
                  alt={promo.text}
                  className="w-full h-[160px] object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3">
                <p className="text-white font-semibold text-base">{promo.text}</p>
                {promo.cta && (
                  <span className="mt-2 inline-block bg-white text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {promo.cta}
                  </span>
                )}
              </div>
            </Link>
          )}
        </div>
      )}
    </>
  );
}
