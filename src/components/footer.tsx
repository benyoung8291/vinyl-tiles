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
    <footer className="bg-stone-900 text-stone-400">
      {/* Main footer */}
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-10 lg:px-8">
        {/* Brand + columns */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand column */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-flex items-baseline gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white">
                Vinyl Tiles
              </span>
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-brand-light">
                by Premrest
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              Commercial vinyl tile flooring, supplied and installed across
              Australia. A Premrest Group business, est.&nbsp;1986.
            </p>
            <div className="mt-6 space-y-1.5">
              <a
                href="tel:1300207915"
                className="block text-sm font-medium text-stone-300 transition-colors hover:text-white"
              >
                1300 207 915
              </a>
              <a
                href="mailto:vinyl@premrest.com.au"
                className="block text-sm text-stone-500 transition-colors hover:text-white"
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Ranges
            </h3>
            <ul className="space-y-2.5">
              {ranges.map((range) => (
                <li key={range.slug}>
                  <Link
                    href={`/ranges/${range.slug}`}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {range.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premrest family */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Premrest Group
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://modularcarpet.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-white"
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
                  className="inline-flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-white"
                >
                  ComCork Flooring
                  <ArrowUpRight className="size-3 opacity-40" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-stone-800 pt-6 sm:flex-row sm:items-center">
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
