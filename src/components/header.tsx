"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ranges = [
  { label: "Interface", href: "/ranges/interface" },
  { label: "Karndean", href: "/ranges/karndean" },
  { label: "Armstrong", href: "/ranges/armstrong" },
  { label: "Tarkett", href: "/ranges/tarkett" },
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
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Vinyl Tiles
          </span>
          <span className="text-xs font-medium text-gray-500">by Premrest</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Our Ranges Dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
              Our Ranges
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full pt-1 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                {ranges.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/why-vinyl-tiles"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Why Vinyl Tiles?
          </Link>

          <Link
            href="/how-we-work"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            How We Work
          </Link>

          {/* Solutions Dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
              Solutions
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full pt-1 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:1300207915"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            <Phone className="size-4" />
            1300 207 915
          </a>
          <Button render={<Link href="/contact" />}>
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {/* Our Ranges */}
            <div>
              <button
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                onClick={() => setMobileRangesOpen(!mobileRangesOpen)}
              >
                Our Ranges
                <ChevronDown
                  className={`size-4 transition-transform ${mobileRangesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileRangesOpen && (
                <div className="ml-4 space-y-1 pt-1">
                  {ranges.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
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
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              Why Vinyl Tiles?
            </Link>

            <Link
              href="/how-we-work"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              How We Work
            </Link>

            {/* Solutions */}
            <div>
              <button
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                Solutions
                <ChevronDown
                  className={`size-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="ml-4 space-y-1 pt-1">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
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
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="border-t border-gray-200 pt-4">
              <a
                href="tel:1300207915"
                className="mb-3 flex items-center gap-1.5 px-3 text-sm font-medium text-gray-700"
              >
                <Phone className="size-4" />
                1300 207 915
              </a>
              <Button
                className="w-full"
                render={<Link href="/contact" onClick={() => setMobileOpen(false)} />}
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
