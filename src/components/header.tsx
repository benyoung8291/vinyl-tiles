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

const audienceSolutions = [
  { label: "Facility Managers", href: "/contact?audience=facility-manager" },
  { label: "Property Owners", href: "/contact?audience=property-owner" },
  { label: "Premium Homeowners", href: "/residential" },
];

const sectorSolutions = [
  { label: "Office", href: "/office-flooring" },
  { label: "Retail", href: "/retail-flooring" },
  { label: "Healthcare", href: "/healthcare-flooring" },
  { label: "Education", href: "/education-flooring" },
  { label: "Hospitality", href: "/hospitality-flooring" },
];

const alternativeSolutions = [
  { label: "Comcork (Cork & Rubber)", href: "/sustainable-alternative#comcork" },
  { label: "Nora (Rubber by Interface)", href: "/sustainable-alternative#nora" },
  { label: "Compare Alternatives", href: "/sustainable-alternative" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileRangesOpen, setMobileRangesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgb(252,250,245)]/95 backdrop-blur-sm border-b border-[rgb(230,225,215)]"
            : "bg-transparent"
        }`}
        style={{ height: "56px" }}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src="/images/brand/premrest-logo.svg" alt="Premrest" className="h-5 lg:h-6 w-auto" />
          </Link>

          {/* Desktop Nav — clean horizontal links like microsoft.ai */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Ranges Dropdown */}
            <div className="group relative">
              <button className="inline-flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]">
                Ranges
                <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="pointer-events-none absolute left-0 top-full -translate-y-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mt-1 w-56 rounded-md border border-[rgb(230,225,215)] bg-[rgb(252,250,245)] p-1.5 shadow-lg shadow-black/5">
                  {ranges.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded px-3 py-2.5 transition-colors hover:bg-[rgb(242,238,228)]"
                    >
                      <span className="block text-[13px] font-medium text-[rgb(55,50,45)]">
                        {item.label}
                      </span>
                      <span className="block text-[11px] text-[rgb(120,110,100)]">
                        {item.detail}
                      </span>
                    </Link>
                  ))}
                  <div className="my-1.5 mx-3 h-px bg-[rgb(230,225,215)]" />
                  <Link
                    href="/manufacturers"
                    className="block rounded px-3 py-2.5 transition-colors hover:bg-[rgb(242,238,228)]"
                  >
                    <span className="block text-[13px] font-medium text-[rgb(55,50,45)]">
                      All Manufacturers
                    </span>
                    <span className="block text-[11px] text-[rgb(120,110,100)]">
                      Australian vinyl directory
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/why-vinyl-tiles"
              className="px-4 py-2 text-[13px] font-medium text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
            >
              Why Tiles
            </Link>

            <Link
              href="/how-we-work"
              className="px-4 py-2 text-[13px] font-medium text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
            >
              How We Work
            </Link>

            {/* Solutions Dropdown */}
            <div className="group relative">
              <button className="inline-flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]">
                Solutions
                <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="pointer-events-none absolute left-0 top-full -translate-y-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mt-1 w-60 rounded-md border border-[rgb(230,225,215)] bg-[rgb(252,250,245)] p-1.5 shadow-lg shadow-black/5">
                  <p className="px-3 pt-1.5 pb-1 text-[10px] font-medium uppercase tracking-widest" style={{ color: "rgb(170, 163, 153)" }}>
                    By Audience
                  </p>
                  {audienceSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded px-3 py-2 text-[13px] font-medium text-[rgb(55,50,45)] transition-colors hover:bg-[rgb(242,238,228)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="my-1.5 mx-3 h-px bg-[rgb(230,225,215)]" />
                  <p className="px-3 pt-1 pb-1 text-[10px] font-medium uppercase tracking-widest" style={{ color: "rgb(170, 163, 153)" }}>
                    By Sector
                  </p>
                  {sectorSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded px-3 py-2 text-[13px] font-medium text-[rgb(55,50,45)] transition-colors hover:bg-[rgb(242,238,228)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="my-1.5 mx-3 h-px bg-[rgb(230,225,215)]" />
                  <p className="px-3 pt-1 pb-1 text-[10px] font-medium uppercase tracking-widest" style={{ color: "rgb(170, 163, 153)" }}>
                    Alternatives
                  </p>
                  {alternativeSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded px-3 py-2 text-[13px] font-medium text-[rgb(55,50,45)] transition-colors hover:bg-[rgb(242,238,228)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-[13px] font-medium text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex flex-shrink-0">
            <a
              href="tel:1300207915"
              className="text-[13px] font-medium text-[rgb(120,110,100)] transition-colors hover:text-[rgb(55,50,45)]"
            >
              1300 207 915
            </a>
            <Link
              href="/contact"
              className="rounded-md bg-[rgb(55,50,45)] px-5 py-2 text-[13px] font-medium text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
            >
              Book a Site Inspection
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-[rgb(55,50,45)] transition-colors hover:bg-[rgb(242,238,228)] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="fixed inset-0 top-14 z-40 overflow-y-auto bg-[rgb(252,250,245)] lg:hidden">
          <nav className="mx-auto max-w-lg space-y-0 px-6 py-6">
            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-[13px] font-medium text-[rgb(55,50,45)]"
                onClick={() => setMobileRangesOpen(!mobileRangesOpen)}
              >
                Ranges
                <ChevronDown
                  className={`size-4 text-[rgb(120,110,100)] transition-transform ${
                    mobileRangesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileRangesOpen && (
                <div className="space-y-0 border-l border-[rgb(230,225,215)] pl-4 pb-2">
                  {ranges.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="block text-[13px] font-medium text-[rgb(55,50,45)]">{item.label}</span>
                      <span className="block text-[11px] text-[rgb(120,110,100)]">{item.detail}</span>
                    </Link>
                  ))}
                  <Link
                    href="/manufacturers"
                    className="block border-t border-[rgb(230,225,215)] py-2 mt-1 pt-3 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="block text-[13px] font-medium text-[rgb(55,50,45)]">All Manufacturers</span>
                    <span className="block text-[11px] text-[rgb(120,110,100)]">Australian vinyl directory</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/why-vinyl-tiles"
              className="block py-3 text-[13px] font-medium text-[rgb(55,50,45)]"
              onClick={() => setMobileOpen(false)}
            >
              Why Tiles
            </Link>

            <Link
              href="/how-we-work"
              className="block py-3 text-[13px] font-medium text-[rgb(55,50,45)]"
              onClick={() => setMobileOpen(false)}
            >
              How We Work
            </Link>

            <div>
              <button
                className="flex w-full items-center justify-between py-3 text-[13px] font-medium text-[rgb(55,50,45)]"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                Solutions
                <ChevronDown
                  className={`size-4 text-[rgb(120,110,100)] transition-transform ${
                    mobileSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="space-y-0 border-l border-[rgb(230,225,215)] pl-4 pb-2">
                  <p className="pt-1 pb-1 text-[10px] font-medium uppercase tracking-widest" style={{ color: "rgb(170, 163, 153)" }}>
                    By Audience
                  </p>
                  {audienceSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-[13px] font-medium text-[rgb(55,50,45)] transition-colors hover:text-[rgb(82,75,68)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <p className="mt-2 pt-1 pb-1 text-[10px] font-medium uppercase tracking-widest" style={{ color: "rgb(170, 163, 153)" }}>
                    By Sector
                  </p>
                  {sectorSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-[13px] font-medium text-[rgb(55,50,45)] transition-colors hover:text-[rgb(82,75,68)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <p className="mt-2 pt-1 pb-1 text-[10px] font-medium uppercase tracking-widest" style={{ color: "rgb(170, 163, 153)" }}>
                    Alternatives
                  </p>
                  {alternativeSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-[13px] font-medium text-[rgb(55,50,45)] transition-colors hover:text-[rgb(82,75,68)]"
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
              className="block py-3 text-[13px] font-medium text-[rgb(55,50,45)]"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="mt-6 border-t border-[rgb(230,225,215)] pt-6 space-y-3">
              <a
                href="tel:1300207915"
                className="block text-[13px] font-medium text-[rgb(120,110,100)]"
              >
                1300 207 915
              </a>
              <Link
                href="/contact"
                className="block w-full rounded-md bg-[rgb(55,50,45)] px-4 py-3 text-center text-[13px] font-medium text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                onClick={() => setMobileOpen(false)}
              >
                Book a Site Inspection
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
