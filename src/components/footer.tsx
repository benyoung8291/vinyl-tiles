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
    <footer
      className="border-t"
      style={{
        backgroundColor: "rgb(254, 249, 237)",
        borderColor: "rgb(220, 210, 200)",
      }}
    >
      {/* Main footer */}
      <div className="mx-auto max-w-[1728px] px-6 pt-16 pb-8 lg:px-8">
        {/* Brand + columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand column */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-flex flex-col gap-2">
              <span
                className="font-serif text-base font-bold tracking-tight"
                style={{ color: "rgb(93, 82, 75)" }}
              >
                Vinyl Tiles
              </span>
              <span
                className="text-xs font-normal uppercase tracking-[0.08em]"
                style={{
                  color: "rgb(140, 84, 98)",
                  fontFamily: "'Red Hat Mono', monospace",
                }}
              >
                by Premrest
              </span>
            </Link>
            <p
              className="mt-5 max-w-xs text-xs leading-relaxed"
              style={{ color: "rgb(130, 115, 105)" }}
            >
              Commercial vinyl tile flooring, supplied and installed. We find the
              right product, get it to site, and lay it properly. A{" "}
              <a
                href="https://www.premrest.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline"
                style={{ color: "rgb(93, 82, 75)" }}
              >
                Premrest
              </a>{" "}
              business.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="tel:1300207915"
                className="block text-xs transition-colors hover:opacity-70"
                style={{
                  color: "rgb(93, 82, 75)",
                  fontFamily: "'Red Hat Mono', monospace",
                }}
              >
                1300 207 915
              </a>
              <a
                href="mailto:office@premrest.com.au"
                className="block text-xs transition-colors hover:opacity-70"
                style={{
                  color: "rgb(130, 115, 105)",
                  fontFamily: "'Red Hat Mono', monospace",
                }}
              >
                office@premrest.com.au
              </a>
            </div>
          </div>

          {/* Ranges */}
          <div>
            <h3
              className="mb-5 text-xs font-normal uppercase tracking-[0.1em]"
              style={{
                color: "rgb(93, 82, 75)",
                fontFamily: "'Red Hat Mono', monospace",
              }}
            >
              Ranges
            </h3>
            <ul className="space-y-3">
              {ranges.map((range) => (
                <li key={range.slug}>
                  <Link
                    href={`/ranges/${range.slug}`}
                    className="text-xs transition-colors hover:opacity-70"
                    style={{ color: "rgb(93, 82, 75)" }}
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
              className="mb-5 text-xs font-normal uppercase tracking-[0.1em]"
              style={{
                color: "rgb(93, 82, 75)",
                fontFamily: "'Red Hat Mono', monospace",
              }}
            >
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-xs transition-colors hover:opacity-70"
                    style={{ color: "rgb(93, 82, 75)" }}
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
              className="mb-5 text-xs font-normal uppercase tracking-[0.1em]"
              style={{
                color: "rgb(93, 82, 75)",
                fontFamily: "'Red Hat Mono', monospace",
              }}
            >
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-xs transition-colors hover:opacity-70"
                    style={{ color: "rgb(93, 82, 75)" }}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premrest Group */}
          <div>
            <h3
              className="mb-5 text-xs font-normal uppercase tracking-[0.1em]"
              style={{
                color: "rgb(93, 82, 75)",
                fontFamily: "'Red Hat Mono', monospace",
              }}
            >
              Premrest Group
            </h3>
            <ul className="space-y-3">
              {premrestSites.map((site) => (
                <li key={site.url}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs transition-colors hover:opacity-70"
                    style={{ color: "rgb(93, 82, 75)" }}
                  >
                    {site.name}
                    <ArrowUpRight className="size-3" style={{ opacity: 0.5 }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center"
          style={{ borderColor: "rgb(220, 210, 200)" }}
        >
          <p
            className="text-xs"
            style={{
              color: "rgb(130, 115, 105)",
              fontFamily: "'Red Hat Mono', monospace",
            }}
          >
            &copy; 2026 Premier Restorations Group Pty Ltd trading as Premrest |
            ABN 27 634 747 952
          </p>
        </div>
      </div>
    </footer>
  );
}
