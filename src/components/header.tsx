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
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-[1.35rem] font-bold tracking-[-0.04em] text-stone-950">
            Vinyl Tiles
          </span>
          <span className="text-editorial-caption text-brand tracking-[0.1em]">
            Premrest
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {/* Ranges Dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] text-stone-600 transition-colors hover:text-stone-950">
              Ranges
              <ChevronDown className="size-3.5 opacity-40 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-64 border border-stone-200/80 bg-white p-2 shadow-xl shadow-stone-900/5">
                {ranges.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item flex items-center justify-between px-3.5 py-2.5 transition-colors hover:bg-stone-50"
                  >
                    <div>
                      <span className="block text-[0.8125rem] font-semibold text-stone-900">
                        {item.label}
                      </span>
                      <span className="block text-[0.6875rem] text-stone-400">
                        {item.detail}
                      </span>
                    </div>
                    <ArrowRight className="size-3.5 text-stone-300 transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-brand" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/why-vinyl-tiles"
            className="px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] text-stone-600 transition-colors hover:text-stone-950"
          >
            Why Vinyl
          </Link>

          <Link
            href="/how-we-work"
            className="px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] text-stone-600 transition-colors hover:text-stone-950"
          >
            Process
          </Link>

          {/* Solutions Dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] text-stone-600 transition-colors hover:text-stone-950">
              Sectors
              <ChevronDown className="size-3.5 opacity-40 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-52 border border-stone-200/80 bg-white p-2 shadow-xl shadow-stone-900/5">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item flex items-center justify-between px-3.5 py-2.5 transition-colors hover:bg-stone-50"
                  >
                    <span className="text-[0.8125rem] font-medium text-stone-700">{item.label}</span>
                    <ArrowRight className="size-3.5 text-stone-300 transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-brand" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] text-stone-600 transition-colors hover:text-stone-950"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:1300207915"
            className="text-[0.8125rem] font-medium tracking-[-0.01em] text-stone-400 transition-colors hover:text-stone-900"
          >
            1300 207 915
          </a>
          <Link
            href="/contact"
            className="bg-stone-950 px-5 py-2.5 text-[0.8125rem] font-medium tracking-[-0.01em] text-white transition-colors hover:bg-brand"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center p-2 text-stone-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Divider line */}
      <div className="h-px bg-stone-200/60" />

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-stone-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-0 px-6 py-6">
            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-sm font-medium text-stone-800"
                onClick={() => setMobileRangesOpen(!mobileRangesOpen)}
              >
                Ranges
                <ChevronDown
                  className={`size-4 text-stone-400 transition-transform ${mobileRangesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileRangesOpen && (
                <div className="space-y-0 border-l-2 border-brand/20 pl-4 pb-2">
                  {ranges.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-stone-500 transition-colors hover:text-stone-900"
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
              className="block py-3 text-sm font-medium text-stone-800"
              onClick={() => setMobileOpen(false)}
            >
              Why Vinyl
            </Link>

            <Link
              href="/how-we-work"
              className="block py-3 text-sm font-medium text-stone-800"
              onClick={() => setMobileOpen(false)}
            >
              Process
            </Link>

            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-sm font-medium text-stone-800"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                Sectors
                <ChevronDown
                  className={`size-4 text-stone-400 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="space-y-0 border-l-2 border-brand/20 pl-4 pb-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-stone-500 transition-colors hover:text-stone-900"
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
              className="block py-3 text-sm font-medium text-stone-800"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="mt-4 border-t border-stone-100 pt-6 space-y-3">
              <a
                href="tel:1300207915"
                className="block text-sm text-stone-400"
              >
                1300 207 915
              </a>
              <Link
                href="/contact"
                className="block w-full bg-stone-950 py-3 text-center text-sm font-medium text-white"
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
