"use client";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import navItems from "../../data/Navbar";
import DropdownMenu from "./DropDownMenu/DropdownMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // ✅ FIXED

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-wrap z-50 shadow-md">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold">KONTENT.AI</div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm relative">
        {navItems.map((item, i) =>
          item.links ? (
            <li key={i} className="relative group">
              <button className="hover:text-indigo-400 flex items-center gap-1">
                {item.label} ▾ {item.icon}
              </button>
              <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <DropdownMenu
                
                  links={item.links}
                  promo={item.promo}
                  align={i >= navItems.length - 2 ? "right" : "left"}
                />
              </div>
            </li>
          ) : (
            <li key={i}>
              <Link href={item.href} className="hover:text-indigo-400">
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button aria-label="search">
          <Search size={18} />
        </button>
        <Link href="/login" className="text-sm">
          Login
        </Link>
        <Link
          href="/fit"
          className="bg-indigo-500 hover:bg-indigo-600 px-4 sm:px-5 py-2 rounded-full text-sm hidden lg:inline-block"
        >
          See if we’re a fit
        </Link>
        <button
          className="lg:hidden"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpenDropdown(null);
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col p-4 sm:p-6 gap-4 lg:hidden max-h-[80vh] overflow-y-auto">
          {navItems.map((item, i) =>
            item.links ? (
              <div key={i} className="border-b border-gray-700 pb-3">
                <button
                  className="w-full flex justify-between items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === i ? null : i)
                  }
                >
                  <span>{item.label}</span>
                  <span>{openDropdown === i ? "▲" : "▼"}</span>
                </button>
                {openDropdown === i && (
                  <DropdownMenu
                    links={item.links}
                    promo={item.promo}
                    isMobile={true}
                  />
                )}
              </div>
            ) : (
              <Link
                key={i}
                href={item.href}
                className="hover:text-indigo-400 border-b border-gray-700 pb-2"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/fit"
            className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-full text-sm text-center"
          >
            See if we’re a fit
          </Link>
        </div>
      )}
    </nav>
  );
}
