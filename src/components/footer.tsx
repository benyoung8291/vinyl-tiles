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

const premrestSites = [
  { name: "Premrest", url: "https://www.premrest.com.au" },
  { name: "Modular Carpet", url: "https://modularcarpet.com.au" },
  { name: "ComCork Flooring", url: "https://comcorkflooring.com.au" },
  { name: "Aged Care Flooring", url: "https://agedcareflooring.com.au" },
  { name: "Medical Flooring", url: "https://medicalflooring.com.au" },
  { name: "Retail Flooring", url: "https://retailflooring.com.au" },
  { name: "Strata Flooring", url: "https://strataflooring.com.au" },
  { name: "Flood Restoration", url: "https://floodrest.com.au" },
  { name: "Carpet Cleaning", url: "https://localcarpetcleaning.com.au" },
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
              Commercial vinyl tile flooring, supplied and installed. We find the
              right product, get it to site, and lay it properly. A{" "}
              <a
                href="https://www.premrest.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 underline decoration-stone-700 transition-colors hover:text-white"
              >
                Premrest
              </a>{" "}
              business.
            </p>
            <div className="mt-6 space-y-1.5">
              <a
                href="tel:1300207915"
                className="block text-sm font-medium text-stone-300 transition-colors hover:text-white"
              >
                1300 207 915
              </a>
              <a
                href="mailto:office@premrest.com.au"
                className="block text-sm text-stone-500 transition-colors hover:text-white"
              >
                office@premrest.com.au
              </a>
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
              {premrestSites.map((site) => (
                <li key={site.url}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {site.name}
                    <ArrowUpRight className="size-3 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-stone-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-stone-600">
            &copy; 2026 Premier Restorations Group Pty Ltd trading as Premrest |
            ABN 27 634 747 952 | All rights reserved.
          </p>
          <a
            href="https://www.premrest.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-stone-500 transition-colors hover:text-white"
          >
            premrest.com.au
          </a>
        </div>
      </div>
    </footer>
  );
}
