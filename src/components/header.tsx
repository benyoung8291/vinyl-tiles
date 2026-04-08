"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

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

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-stone-200/60 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="text-lg font-bold tracking-tight text-stone-900">
            Vinyl Tiles
          </span>
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-brand">
            by Premrest
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {/* Ranges Dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900">
              Our Ranges
              <ChevronDown className="size-3 opacity-40 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-56 rounded-lg border border-stone-200/80 bg-white p-1.5 shadow-lg shadow-stone-900/5">
                {ranges.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-stone-50"
                  >
                    <div>
                      <span className="block text-sm font-medium text-stone-800">
                        {item.label}
                      </span>
                      <span className="block text-[0.6875rem] text-stone-400">
                        {item.detail}
                      </span>
                    </div>
                    <ArrowRight className="size-3 text-stone-300 transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-brand" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/why-vinyl-tiles"
            className="px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            Why Tiles?
          </Link>

          <Link
            href="/how-we-work"
            className="px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            How to Install
          </Link>

          {/* Solutions Dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900">
              Solutions
              <ChevronDown className="size-3 opacity-40 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-44 rounded-lg border border-stone-200/80 bg-white p-1.5 shadow-lg shadow-stone-900/5">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-stone-50"
                  >
                    <span className="text-sm font-medium text-stone-700">{item.label}</span>
                    <ArrowRight className="size-3 text-stone-300 transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-brand" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:1300207915"
            className="text-sm font-medium text-stone-400 transition-colors hover:text-stone-800"
          >
            1300 207 915
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-stone-700 transition-colors hover:bg-stone-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-stone-200/60 bg-cream lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-0 px-6 py-4">
            <div>
              <button
                className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-stone-800"
                onClick={() => setMobileRangesOpen(!mobileRangesOpen)}
              >
                Our Ranges
                <ChevronDown
                  className={`size-4 text-stone-400 transition-transform ${mobileRangesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileRangesOpen && (
                <div className="space-y-0 border-l-2 border-brand/30 pl-4 pb-2">
                  {ranges.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1.5 text-sm text-stone-500 transition-colors hover:text-brand"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/why-vinyl-tiles"
              className="block py-2.5 text-sm font-medium text-stone-800"
              onClick={() => setMobileOpen(false)}
            >
              Why Tiles?
            </Link>

            <Link
              href="/how-we-work"
              className="block py-2.5 text-sm font-medium text-stone-800"
              onClick={() => setMobileOpen(false)}
            >
              How to Install
            </Link>

            <div>
              <button
                className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-stone-800"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                Solutions
                <ChevronDown
                  className={`size-4 text-stone-400 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="space-y-0 border-l-2 border-brand/30 pl-4 pb-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1.5 text-sm text-stone-500 transition-colors hover:text-brand"
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
              className="block py-2.5 text-sm font-medium text-stone-800"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="mt-3 border-t border-stone-200/60 pt-4 space-y-3">
              <a
                href="tel:1300207915"
                className="block text-sm text-stone-400"
              >
                1300 207 915
              </a>
              <Link
                href="/contact"
                className="block w-full rounded-md bg-brand py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
