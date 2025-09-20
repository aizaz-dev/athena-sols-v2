"use client";
import Link from "next/link";

export default function DropdownMenu({
  links,
  promo,
  type,
  sidebar,
  cards,
  items,      // <-- support items prop
  isMobile = false,
}) {
  // robust fallback for company items (supports multiple shapes)
  const companyItems =
    items ??
    (links && links.length > 0 ? links[0]?.items : undefined) ??
    links?.items ??
    sidebar ??
    [];

  return (
    <>
      {/* ================== DESKTOP ================== */}
      {!isMobile && (
        <>
          {type === "company" ? (
            /* ===================== COMPANY MENU ===================== */
            <div className="fixed top-[72px] left-1/2 -translate-x-1/2 w-[720px] rounded-2xl shadow-2xl bg-[#111] text-white p-10 z-50">
              <h3 className="text-[14px] uppercase tracking-wide font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-300">
                Company
              </h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                {companyItems?.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href || "#"}
                    className="hover:text-indigo-400 flex items-center gap-3"
                  >
                    {item.icon && (
                      <span className="text-indigo-400 text-lg">{item.icon}</span>
                    )}
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : type === "resources" ? (
            /* ===================== RESOURCES MENU ===================== */
            <div className="fixed top-[72px] left-1/2 -translate-x-1/2 w-[960px] min-h-[480px] rounded-2xl shadow-2xl bg-[#111] text-white p-10 flex gap-10 z-50">
              {/* Sidebar links */}
              <div className="w-[280px] border-r border-gray-800 pr-8">
                <h3 className="text-[14px] uppercase tracking-wide font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-300">
                  Resources
                </h3>
                <ul className="space-y-6 text-[15px]">
                  {sidebar?.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href || "#"}
                        className="hover:text-indigo-400 flex items-start gap-3"
                      >
                        {item.icon && (
                          <span className="text-indigo-400 mt-0.5">{item.icon}</span>
                        )}
                        <span className="font-semibold">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Promo cards in 3 rows */}
              <div className="flex-1 grid grid-rows-3 gap-6">
                {cards?.map((card, i) => (
                  <Link
                    key={i}
                    href={card.href || "#"}
                    className="relative rounded-xl overflow-hidden group shadow-md bg-gray-900"
                  >
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[140px] object-cover group-hover:scale-105 transition-transform"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                      <span className="text-indigo-400 text-xs uppercase font-semibold">
                        {card.tag}
                      </span>
                      <p className="text-white font-semibold text-sm leading-snug mt-1">
                        {card.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            /* ===================== DEFAULT MENUS ===================== */
            <div className="fixed top-[72px] left-1/2 -translate-x-1/2 w-[1280px] min-h-[480px] rounded-2xl shadow-2xl bg-[#111] text-white p-10 flex gap-10 z-50">
              {/* 3-column section */}
              <div className="flex-1 grid grid-cols-3 gap-12 border-r border-gray-800 pr-12">
                {links?.map((col, i) => (
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
                                <span className="text-[13px] text-gray-400">
                                  {item.desc}
                                </span>
                              )}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Promo card on the right */}
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
        </>
      )}

      {/* ================== MOBILE ================== */}
      {isMobile && (
        <div className="flex flex-col gap-6 bg-[#111] text-white rounded-xl p-4 mt-3">
          {/* Mobile links */}
          {links?.map((col, i) => (
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
                      {item.icon && <span className="text-indigo-400 mt-0.5">{item.icon}</span>}
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

          {/* Mobile: if this menu was company-only (items) */}
          {companyItems && companyItems.length > 0 && !links && (
            <div>
              <h3 className="text-[14px] uppercase tracking-wide mb-3 border-b border-gray-700 pb-2 text-gray-300">
                Company
              </h3>
              <ul className="space-y-3">
                {companyItems.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href || "#"} className="hover:text-indigo-400 flex items-center gap-3">
                      {item.icon && <span className="text-indigo-400 mt-0.5">{item.icon}</span>}
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile promo */}
          {promo && (
            <Link
              href={promo.href || "#"}
              className="relative rounded-xl overflow-hidden shadow-md block bg-gray-900"
            >
              {promo.image && (
                <img src={promo.image} alt={promo.text} className="w-full h-[160px] object-cover" />
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
