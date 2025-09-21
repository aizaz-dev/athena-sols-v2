"use client";
import Link from "next/link";

/**
 * DropdownMenu Component
 * 
 * A flexible dropdown menu system that handles multiple layout variations:
 * - Company menu: Simple grid layout
 * - Resources menu: Sidebar navigation with promotional cards
 * - Default menu: Multi-column layout with promotional content (Product/Solutions)
 * 
 * Supports both desktop and mobile responsive layouts with appropriate styling.
 * 
 * @param {Object} props - Component properties
 * @param {Array} props.links - Navigation links array for multi-column layouts
 * @param {Object|Array} props.promo - Promotional content (single item or array)
 * @param {string} props.type - Menu type identifier ('company', 'resources', or default)
 * @param {Array} props.sidebar - Sidebar links for Resources menu
 * @param {Array} props.cards - Promotional cards for Resources menu
 * @param {Array} props.items - Company menu items (alternative to links[0].items)
 * @param {boolean} props.isMobile - Mobile layout flag
 */
export default function DropdownMenu({
  links,
  promo,
  type,
  sidebar,
  cards,
  items,
  isMobile = false,
}) {
  // Extract company items from various possible data structures
  const companyItems = items || 
    (links && links.length > 0 ? links[0]?.items : undefined) || 
    links?.items || 
    sidebar || 
    [];

  return (
    <>
      {/* DESKTOP LAYOUT */}
      {!isMobile && (
        <>
          {type === "company" ? (
            /**
             * COMPANY MENU LAYOUT
             * Simple two-column grid with icon support
             */
            <div className="fixed top-[72px] left-1/2 -translate-x-1/2 w-[720px] rounded-2xl shadow-2xl bg-[#111] text-white p-10 z-50">
              <h3 className="text-[14px] uppercase tracking-wide font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-300">
                Company
              </h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                {companyItems?.map((item, index) => (
                  <Link
                    key={index}
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
            /**
             * RESOURCES MENU LAYOUT
             * Combines sidebar navigation with promotional cards
             */
            <div className="fixed top-[72px] left-1/2 -translate-x-1/2 w-[960px] min-h-[480px] rounded-2xl shadow-2xl bg-[#111] text-white p-10 flex gap-10 z-50">
              {/* Sidebar navigation section */}
              <div className="w-[280px] border-r border-gray-800 pr-8">
                <h3 className="text-[14px] uppercase tracking-wide font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-300">
                  Resources
                </h3>
                <ul className="space-y-6 text-[15px]">
                  {sidebar?.map((item, index) => (
                    <li key={index}>
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

              {/* Promotional cards grid */}
              <div className="flex-1 grid grid-rows-3 gap-6">
                {cards?.map((card, index) => (
                  <Link
                    key={index}
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
            /**
             * DEFAULT MENU LAYOUT (Product/Solutions)
             * Three-column navigation with promotional section
             */
            <div className="fixed top-[72px] left-1/2 -translate-x-1/2 w-[1280px] min-h-[480px] rounded-2xl shadow-2xl bg-[#111] text-white p-10 flex gap-10 z-50">
              {/* Three-column navigation section */}
              <div className="flex-1 grid grid-cols-3 gap-12 border-r border-gray-800 pr-12">
                {links?.map((column, columnIndex) => (
                  <div key={columnIndex}>
                    <h3 className="text-[14px] uppercase tracking-wide font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-300">
                      {column.title}
                    </h3>
                    <ul className="space-y-6 text-[15px]">
                      {column.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
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

              {/* Promotional content section */}
              {promo && Array.isArray(promo) ? (
                // Multiple promotions layout (Solutions menu)
                <div className="w-[360px] grid grid-rows-3 gap-6">
                  {promo.map((promoItem, promoIndex) => (
                    <Link
                      key={promoIndex}
                      href={promoItem.href || "#"}
                      className="relative rounded-xl overflow-hidden group shadow-lg block bg-gray-900"
                    >
                      {promoItem.image && (
                        <img
                          src={promoItem.image}
                          alt={promoItem.text}
                          className="w-full h-[120px] object-cover group-hover:scale-105 transition-transform"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                        <p className="text-white font-semibold text-sm leading-snug">
                          {promoItem.text}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                // Single promotion layout (Product menu)
                promo && (
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
                )
              )}
            </div>
          )}
        </>
      )}

      {/* MOBILE LAYOUT */}
      {isMobile && (
        <div className="flex flex-col gap-6 bg-[#111] text-white rounded-xl p-4 mt-3">
          {/* Mobile navigation links */}
          {links?.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-[14px] uppercase tracking-wide mb-3 border-b border-gray-700 pb-2 text-gray-300">
                {column.title}
              </h3>
              <ul className="space-y-4 text-[15px]">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
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

          {/* Mobile company menu items */}
          {companyItems && companyItems.length > 0 && !links && (
            <div>
              <h3 className="text-[14px] uppercase tracking-wide mb-3 border-b border-gray-700 pb-2 text-gray-300">
                Company
              </h3>
              <ul className="space-y-3">
                {companyItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href || "#"}
                      className="hover:text-indigo-400 flex items-center gap-3"
                    >
                      {item.icon && <span className="text-indigo-400 mt-0.5">{item.icon}</span>}
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile promotional content */}
          {promo && Array.isArray(promo) ? (
            <div className="grid gap-4">
              {promo.map((promoItem, promoIndex) => (
                <Link
                  key={promoIndex}
                  href={promoItem.href || "#"}
                  className="relative rounded-xl overflow-hidden shadow-md block bg-gray-900"
                >
                  {promoItem.image && (
                    <img src={promoItem.image} alt={promoItem.text} className="w-full h-[140px] object-cover" />
                  )}
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3">
                    <p className="text-white font-semibold text-sm">{promoItem.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            promo && (
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
            )
          )}
        </div>
      )}
    </>
  );
}