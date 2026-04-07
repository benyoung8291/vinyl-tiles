import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ranges = [
  { name: "Interface", slug: "interface" },
  { name: "Karndean", slug: "karndean" },
  { name: "Armstrong", slug: "armstrong" },
  { name: "Tarkett", slug: "tarkett" },
];

const resources = [
  { name: "Why Vinyl Tiles?", href: "/why-vinyl-tiles" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Contact", href: "/contact" },
];

const solutions = [
  { name: "Office", href: "/office-flooring" },
  { name: "Retail", href: "/retail-flooring" },
  { name: "Healthcare", href: "/healthcare-flooring" },
  { name: "Education", href: "/education-flooring" },
  { name: "Hospitality", href: "/hospitality-flooring" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-stone-400">
      {/* Warm glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-brand/5 blur-[100px]" />

      {/* Main footer */}
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-12 lg:px-10">
        {/* Brand + columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand column */}
          <div className="lg:pr-12">
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-[-0.04em] text-white">
                Vinyl Tiles
              </span>
              <span className="text-editorial-caption text-brand-light tracking-[0.1em]">
                Premrest
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-500">
              Commercial vinyl tile flooring, supplied and installed across
              Australia. A Premrest Group business, est.&nbsp;1986.
            </p>
            <div className="mt-8 space-y-2">
              <a
                href="tel:1300207915"
                className="block text-sm font-medium text-stone-300 transition-colors hover:text-brand-light"
              >
                1300 207 915
              </a>
              <a
                href="mailto:vinyl@premrest.com.au"
                className="block text-sm text-stone-500 transition-colors hover:text-brand-light"
              >
                vinyl@premrest.com.au
              </a>
              <p className="text-xs text-stone-600">
                Mon&ndash;Fri 8:30am &ndash; 5:00pm AEST
              </p>
            </div>
          </div>

          {/* Ranges */}
          <div>
            <h3 className="text-editorial-caption text-stone-500 mb-5">
              Ranges
            </h3>
            <ul className="space-y-3">
              {ranges.map((range) => (
                <li key={range.slug}>
                  <Link
                    href={`/ranges/${range.slug}`}
                    className="text-sm text-stone-400 transition-colors hover:text-brand-light"
                  >
                    {range.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-editorial-caption text-stone-500 mb-5">
              Sectors
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-sm text-stone-400 transition-colors hover:text-brand-light"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-editorial-caption text-stone-500 mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-sm text-stone-400 transition-colors hover:text-brand-light"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premrest family */}
          <div>
            <h3 className="text-editorial-caption text-stone-500 mb-5">
              Premrest Group
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://modularcarpet.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-brand-light"
                >
                  Modular Carpet
                  <ArrowUpRight className="size-3 opacity-40" />
                </a>
              </li>
              <li>
                <a
                  href="https://comcorkflooring.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-brand-light"
                >
                  ComCork Flooring
                  <ArrowUpRight className="size-3 opacity-40" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-stone-800/40 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-stone-600">
            &copy; 2026 Premier Restorations Group Pty Ltd. All rights reserved.
          </p>
          <p className="text-xs text-stone-700">
            A{" "}
            <span className="font-medium text-stone-500">Premrest</span>{" "}
            brand
          </p>
        </div>
      </div>
    </footer>
  );
}
