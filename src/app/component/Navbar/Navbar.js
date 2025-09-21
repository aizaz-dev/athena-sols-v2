"use client";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import navItems from "../../data/Navbar/navItems";
import DropdownMenu from "./DropDownMenu/DropdownMenu";

/**
 * Navbar Component
 * 
 * Main navigation component with responsive design:
 * - Desktop: Horizontal navigation with hover-activated dropdowns
 * - Mobile: Collapsible menu with accordion-style dropdowns
 * 
 * Features:
 * - Logo link to homepage
 * - Dynamic navigation items from navItems data
 * - Search functionality
 * - Call-to-action button
 * - Responsive mobile menu with toggle
 */
export default function Navbar() {
  // State for mobile menu visibility
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // State for tracking which dropdown is open on mobile
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-wrap z-50 shadow-md">
      {/* Logo */}
      <Link href="/" className="text-xl sm:text-2xl font-bold">
        KONTENT.AI
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm relative">
        {navItems.map((item, index) =>
          // Check if item has dropdown content
          (item.links || item.items || item.sidebar || item.type === "resources" || item.type === "company") ? (
            <li key={index} className="relative group">
              {/* Dropdown trigger button */}
              <button className="hover:text-indigo-400 flex items-center gap-1">
                {item.label} ▾ {item.icon}
              </button>
              
              {/* Dropdown menu (appears on hover) */}
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
            // Regular navigation link
            <li key={index}>
              <Link href={item.href || "#"} className="hover:text-indigo-400">
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Right side actions */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Search button */}
        <button aria-label="search">
          <Search size={18} />
        </button>

        {/* Call-to-action button (desktop only) */}
        <Link
          href="/fit"
          className="bg-indigo-500 hover:bg-indigo-600 px-4 sm:px-5 py-2 rounded-full text-sm hidden lg:inline-block"
        >
          See if we're a fit
        </Link>
        
        {/* Mobile menu toggle button */}
        <button
          className="lg:hidden"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpenDropdown(null);
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (shown when mobileOpen is true) */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col p-4 sm:p-6 gap-4 lg:hidden max-h-[80vh] overflow-y-auto">
          {navItems.map((item, index) =>
            // Check if item has dropdown content
            (item.links || item.items || item.sidebar || item.type === "resources" || item.type === "company") ? (
              <div key={index} className="border-b border-gray-700 pb-3">
                {/* Dropdown trigger button for mobile */}
                <button
                  className="w-full flex justify-between items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <span>{item.label}</span>
                  <span>{openDropdown === index ? "▲" : "▼"}</span>
                </button>
                
                {/* Dropdown content (shown when expanded) */}
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
              // Regular navigation link for mobile
              <Link
                key={index}
                href={item.href || "#"}
                className="hover:text-indigo-400 border-b border-gray-700 pb-2"
              >
                {item.label}
              </Link>
            )
          )}
          
          {/* Call-to-action button for mobile */}
          <Link
            href="/fit"
            className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-full text-sm text-center"
          >
            See if we're a fit
          </Link>
        </div>
      )}
    </nav>
  );
}