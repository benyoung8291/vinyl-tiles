import Link from "next/link";

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
  { name: "Office Flooring", href: "/office-flooring" },
  { name: "Retail Flooring", href: "/retail-flooring" },
  { name: "Healthcare Flooring", href: "/healthcare-flooring" },
  { name: "Education Flooring", href: "/education-flooring" },
  { name: "Hospitality Flooring", href: "/hospitality-flooring" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Navigation columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Our Ranges */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Our Ranges
            </h3>
            <ul className="mt-4 space-y-3">
              {ranges.map((range) => (
                <li key={range.slug}>
                  <Link
                    href={`/ranges/${range.slug}`}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {range.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:1300207915"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  1300 207 915
                </a>
              </li>
              <li>
                <a
                  href="mailto:vinyl@premrest.com.au"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  vinyl@premrest.com.au
                </a>
              </li>
              <li>
                <p className="text-sm text-slate-300">
                  Mon&ndash;Fri 8:30am &ndash; 5:00pm AEST
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-700 pt-8">
          {/* A Premrest Brand */}
          <p className="text-sm text-slate-400">
            Vinyl Tiles is proudly distributed by{" "}
            <span className="font-semibold text-slate-300">Premrest</span>{" "}
            &mdash; Premier Restorations Group.
          </p>

          {/* Cross-brand links */}
          <div className="mt-4 space-y-2">
            <p className="text-sm text-slate-400">
              Looking for carpet tiles? Check out{" "}
              <a
                href="https://modularcarpet.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-300 underline underline-offset-2 transition-colors hover:text-white"
              >
                Modular Carpet
              </a>
            </p>
            <p className="text-sm text-slate-400">
              Looking for cork flooring? Check out{" "}
              <a
                href="https://comcorkflooring.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-300 underline underline-offset-2 transition-colors hover:text-white"
              >
                ComCork Flooring
              </a>
            </p>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-xs text-slate-500">
            &copy; 2026 Premier Restorations Group Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
