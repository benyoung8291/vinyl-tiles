import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ranges = [
  { name: "Interface", href: "/ranges/interface" },
  { name: "Karndean", href: "/ranges/karndean" },
  { name: "Armstrong", href: "/ranges/armstrong" },
  { name: "Tarkett", href: "/ranges/tarkett" },
  { name: "All Manufacturers", href: "/manufacturers" },
];

const resources = [
  { name: "Why Vinyl Tiles?", href: "/why-vinyl-tiles" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Premium Residential", href: "/residential" },
  { name: "Sustainable Alternatives", href: "/sustainable-alternative" },
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
    <footer
      className="border-t border-[rgb(230,225,215)]"
      style={{ backgroundColor: "rgb(252, 250, 245)" }}
    >
      {/* Main footer */}
      <div className="mx-auto max-w-[1440px] px-6 pt-14 pb-8 lg:px-10">
        {/* Brand + columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand + enquiry column */}
          <div className="lg:pr-6">
            <Link href="/" className="inline-block">
              <img src="/images/brand/premrest-logo.svg" alt="Vinyl Tiles" className="h-6 w-auto" />
            </Link>
            <p
              className="mt-5 max-w-sm text-[13px] leading-relaxed"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Commercial vinyl tile flooring supplied and installed across Melbourne, Sydney, and Brisbane. LVT, vinyl plank, and VCT from Interface, Karndean, Armstrong, Tarkett, Shaw Contract, Forbo, Polyflor, Gerflor and every other manufacturer worth specifying in Australia &mdash; sourced properly and installed to last.
            </p>
            <div className="mt-5 space-y-1.5">
              <a
                href="tel:1300207915"
                className="block text-[13px] font-medium transition-colors hover:text-[rgb(38,35,30)]"
                style={{ color: "rgb(55, 50, 45)" }}
              >
                1300 207 915
              </a>
              <a
                href="mailto:office@premrest.com.au"
                className="block text-[13px] transition-colors hover:text-[rgb(55,50,45)]"
                style={{ color: "rgb(120, 110, 100)" }}
              >
                office@premrest.com.au
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-5 py-2.5 text-[13px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
            >
              Book a Site Inspection
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Ranges */}
          <div>
            <h3
              className="mb-4 text-[11px] font-medium uppercase tracking-widest"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Ranges
            </h3>
            <ul className="space-y-2.5">
              {ranges.map((range) => (
                <li key={range.href}>
                  <Link
                    href={range.href}
                    className="text-[13px] text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
                  >
                    {range.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3
              className="mb-4 text-[11px] font-medium uppercase tracking-widest"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-[13px] text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className="mb-4 text-[11px] font-medium uppercase tracking-widest"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-[13px] text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[rgb(230,225,215)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-[rgb(148,140,130)]">
            &copy; 2026 Premier Restorations Group Pty Ltd trading as Premrest |
            ABN 27 634 747 952
          </p>
          <p className="text-[12px] text-[rgb(148,140,130)]">
            Commercial vinyl tile supply &amp; install &middot; Melbourne &middot; Sydney &middot; Brisbane
          </p>
        </div>
      </div>
    </footer>
  );
}
