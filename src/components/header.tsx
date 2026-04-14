"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const ranges = [
  { label: "Interface", href: "/ranges/interface", detail: "Modular flooring" },
  { label: "Karndean", href: "/ranges/karndean", detail: "Design flooring" },
  { label: "Armstrong", href: "/ranges/armstrong", detail: "Performance flooring" },
  { label: "Tarkett", href: "/ranges/tarkett", detail: "Sustainable flooring" },
];

const solutions = [
  { label: "Office", href: "/office-flooring" },
  { label: "Retail", href: "/retail-flooring" },
  { label: "Healthcare", href: "/healthcare-flooring" },
  { label: "Education", href: "/education-flooring" },
  { label: "Hospitality", href: "/hospitality-flooring" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileRangesOpen, setMobileRangesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 bg-white transition-shadow duration-300 ${
          hasScrolled ? "shadow-md shadow-gray-900/8" : ""
        }`}
        style={{ height: "56px" }}
      >
        <div className="mx-auto flex h-full max-w-[1728px] items-center justify-between px-[5%]">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 flex-shrink-0">
            <span className="text-base font-semibold tracking-tight text-gray-900">
              Vinyl Tiles
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-brand">
              by Premrest
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center lg:flex">
            {/* Ranges Dropdown */}
            <div className="group relative">
              <button className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-medium text-gray-700 transition-colors hover:text-brand">
                Our Ranges
                <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="pointer-events-none absolute left-0 top-full -translate-y-2 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mt-2 w-56 bg-white p-2 shadow-lg shadow-gray-900/10 rounded">
                  {ranges.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item block px-4 py-2.5 transition-colors hover:bg-gray-50"
                    >
                      <span className="block text-xs font-medium text-gray-900">
                        {item.label}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {item.detail}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/why-vinyl-tiles"
              className="px-6 py-3 text-xs font-medium text-gray-700 transition-colors hover:text-brand"
            >
              Why Tiles?
            </Link>

            <Link
              href="/how-we-work"
              className="px-6 py-3 text-xs font-medium text-gray-700 transition-colors hover:text-brand"
            >
              How We Work
            </Link>

            {/* Solutions Dropdown */}
            <div className="group relative">
              <button className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-medium text-gray-700 transition-colors hover:text-brand">
                Solutions
                <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="pointer-events-none absolute left-0 top-full -translate-y-2 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mt-2 w-48 bg-white p-2 shadow-lg shadow-gray-900/10 rounded">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 text-xs font-medium text-gray-700 transition-colors hover:text-brand"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-5 lg:flex flex-shrink-0">
            <a
              href="tel:1300207915"
              className="text-xs font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              1300 207 915
            </a>
            <Link
              href="/contact"
              className="rounded px-5 py-2 text-xs font-medium text-white transition-colors"
              style={{
                backgroundColor: "rgb(140, 84, 98)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(120, 70, 85)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(140, 84, 98)";
              }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center p-2 text-gray-900 transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav - Full Screen Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-white overflow-y-auto lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-0 px-6 py-6">
            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-xs font-medium text-gray-900"
                onClick={() => setMobileRangesOpen(!mobileRangesOpen)}
              >
                Our Ranges
                <ChevronDown
                  className={`size-4 text-gray-600 transition-transform ${
                    mobileRangesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileRangesOpen && (
                <div className="space-y-0 border-l border-brand/20 pl-4 pb-2">
                  {ranges.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-xs text-gray-600 transition-colors hover:text-brand"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="font-medium text-gray-900">{item.label}</span>
                      <span className="block text-xs text-gray-500">{item.detail}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/why-vinyl-tiles"
              className="block py-3 text-xs font-medium text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Why Tiles?
            </Link>

            <Link
              href="/how-we-work"
              className="block py-3 text-xs font-medium text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              How We Work
            </Link>

            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-xs font-medium text-gray-900"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                Solutions
                <ChevronDown
                  className={`size-4 text-gray-600 transition-transform ${
                    mobileSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="space-y-0 border-l border-brand/20 pl-4 pb-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-xs font-medium text-gray-900 transition-colors hover:text-brand"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block py-3 text-xs font-medium text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="mt-6 border-t border-gray-200 pt-6 space-y-3">
              <a
                href="tel:1300207915"
                className="block text-xs font-medium text-gray-600"
              >
                1300 207 915
              </a>
              <Link
                href="/contact"
                className="block w-full rounded px-4 py-3 text-center text-xs font-medium text-white transition-colors"
                style={{
                  backgroundColor: "rgb(140, 84, 98)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
