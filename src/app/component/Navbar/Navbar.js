"use client";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import navItems from "../../data/Navbar/navItems";
import DropdownMenu from "./DropDownMenu/DropdownMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between flex-wrap z-50 shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl sm:text-3xl font-bold">
        KONTENT.AI
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-base relative">
        {navItems.map((item, index) =>
          item.links || item.items || item.sidebar || item.type === "resources" || item.type === "company" ? (
            <li key={index} className="relative group">
              <button className="hover:text-indigo-400 flex items-center gap-1">
                {item.label} ▾ {item.icon}
              </button>
              <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <DropdownMenu
                  links={item.links}
                  promo={item.promo}
                  type={item.type}
                  sidebar={item.sidebar}
                  cards={item.cards}
                  items={item.items}
                  align={index >= navItems.length - 2 ? "right" : "left"}
                />
              </div>
            </li>
          ) : (
            <li key={index}>
              <Link href={item.href || "#"} className="hover:text-indigo-400">
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Right Actions */}
      <div className="flex items-center gap-5 sm:gap-7">
        <button aria-label="search">
          <Search size={20} />
        </button>
        <Link
          href="/fit"
          className="bg-indigo-500 hover:bg-indigo-600 px-5 sm:px-6 py-2.5 rounded-full text-base hidden lg:inline-block"
        >
          See if we're a fit
        </Link>
        <button
          className="lg:hidden"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpenDropdown(null);
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col p-5 sm:p-6 gap-5 lg:hidden max-h-[80vh] overflow-y-auto text-lg">
          {navItems.map((item, index) =>
            item.links || item.items || item.sidebar || item.type === "resources" || item.type === "company" ? (
              <div key={index} className="border-b border-gray-700 pb-3">
                <button
                  className="w-full flex justify-between items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <span>{item.label}</span>
                  <span>{openDropdown === index ? "▲" : "▼"}</span>
                </button>
                {openDropdown === index && (
                  <DropdownMenu
                    links={item.links}
                    promo={item.promo}
                    type={item.type}
                    sidebar={item.sidebar}
                    cards={item.cards}
                    items={item.items}
                    isMobile={true}
                  />
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href || "#"}
                className="hover:text-indigo-400 border-b border-gray-700 pb-2"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/fit"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2.5 rounded-full text-base text-center"
          >
            See if we're a fit
          </Link>
        </div>
      )}
    </nav>
  );
}
