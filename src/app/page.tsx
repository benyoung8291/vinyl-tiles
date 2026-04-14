import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";

const rangeItems = [
  {
    name: "Interface",
    slug: "interface",
    tagline: "Modular LVT with biophilic design.",
    detail: "Carbon-neutral modular vinyl tile. Wood and stone looks with acoustic backing. The sustainability benchmark for commercial projects.",
    productCount: 8,
  },
  {
    name: "Karndean",
    slug: "karndean",
    tagline: "Design-led. LooseLay option.",
    detail: "Realistic wood and stone visuals with adhesive-free LooseLay technology. Fast install, easy replacement, great for fitouts on a timeline.",
    productCount: 7,
  },
  {
    name: "Armstrong",
    slug: "armstrong",
    tagline: "Built for heavy commercial.",
    detail: "Diamond 10 surface technology means no polish, no wax, and scratch resistance that actually holds up under trolleys and foot traffic.",
    productCount: 6,
  },
  {
    name: "Tarkett",
    slug: "tarkett",
    tagline: "Acoustic backing. Cradle to Cradle.",
    detail: "Integrated acoustic backing achieving up to 19dB impact sound reduction. Cradle to Cradle certified for projects chasing Green Star.",
    productCount: 6,
  },
];

const sectors = [
  {
    title: "Office",
    href: "/office-flooring",
    description: "Open plan, hot desks, meeting rooms — different zones, one consistent floor that handles all of it.",
  },
  {
    title: "Retail",
    href: "/retail-flooring",
    description: "Trolleys, foot traffic, seasonal layout changes. The floor needs to look good on day one thousand.",
  },
  {
    title: "Healthcare",
    href: "/healthcare-flooring",
    description: "Infection control, slip resistance, welded seams. Flooring that meets the compliance requirements.",
  },
  {
    title: "Education",
    href: "/education-flooring",
    description: "Thousands of kids, tight budgets, decades of expected service life. Vinyl tile handles all three.",
  },
  {
    title: "Hospitality",
    href: "/hospitality-flooring",
    description: "Looks like timber or stone, handles water and spills, doesn't need the maintenance budget of either.",
  },
];

const pillars = [
  {
    label: "Supply + Install",
    heading: "One contractor, one result",
    text: "No coordination between the company that sold you the vinyl and the mob that laid it. If something's not right, it's on us.",
  },
  {
    label: "Problem-first approach",
    heading: "We start with your space",
    text: "Not a product catalogue. What does the space need to do? How much traffic? Wet areas? Wheelchairs? We work backwards from the answer.",
  },
  {
    label: "Compliance built in",
    heading: "Documentation your certifier needs",
    text: "Slip ratings, fire ratings, acoustic requirements, NCC compliance — we specify to all of them. You get the documentation that matters.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — microsoft.ai style: large statement text on clean background */}
      <section className="relative bg-subtle-lines" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-32 md:pb-28 md:pt-40 lg:px-10 lg:pb-36 lg:pt-48">
          <div className="max-w-4xl">
            <p
              className="text-[13px] font-medium uppercase tracking-widest mb-6"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Commercial Vinyl Flooring
            </p>
            <h1
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              We find the right vinyl tile, get it to site, and lay it properly.
            </h1>
            <p
              className="mt-8 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgb(82, 75, 68)" }}
            >
              Supply and install, one contractor, no finger-pointing. You tell us what the space needs to do — we handle the rest.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[rgb(55,50,45)] px-7 py-3 text-[15px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
              >
                Get a Quote
              </Link>
              <Link
                href="#ranges"
                className="inline-flex items-center gap-2 px-4 py-3 text-[15px] font-medium text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
              >
                Explore Ranges
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
        {/* Subtle bottom border accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgb(215,208,198)] to-transparent" />
      </section>

      {/* Three Pillars — microsoft.ai style: key values in clean cards */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="relative rounded-lg border border-[rgb(230,225,215)] p-8 lg:p-10"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <p
                  className="text-[11px] font-medium uppercase tracking-widest mb-5"
                  style={{ color: "rgb(120, 110, 100)" }}
                >
                  {pillar.label}
                </p>
                <h3
                  className="text-xl font-bold tracking-tight mb-4"
                  style={{ color: "rgb(38, 35, 30)" }}
                >
                  {pillar.heading}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "rgb(82, 75, 68)" }}
                >
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 text-center">
            <div>
              <p className="text-2xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                $45<span className="text-[rgb(120,110,100)]">/m&sup2;</span>
              </p>
              <p className="mt-1.5 text-[12px] text-[rgb(120,110,100)]">Supply from (ex GST)</p>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(230,225,215)] sm:block" />
            <div>
              <p className="text-2xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                $20<span className="text-[rgb(120,110,100)]">/m&sup2;</span>
              </p>
              <p className="mt-1.5 text-[12px] text-[rgb(120,110,100)]">Install from (ex GST)</p>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(230,225,215)] sm:block" />
            <div>
              <p className="text-2xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                15<span className="text-[rgb(120,110,100)]"> yr</span>
              </p>
              <p className="mt-1.5 text-[12px] text-[rgb(120,110,100)]">Commercial warranty</p>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(230,225,215)] sm:block" />
            <div>
              <p className="text-2xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                3<span className="text-[rgb(120,110,100)]"> cities</span>
              </p>
              <p className="mt-1.5 text-[12px] text-[rgb(120,110,100)]">Melbourne, Sydney, Brisbane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ranges section — microsoft.ai card grid */}
      <section id="ranges" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Our Ranges
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              Good floors start with good products.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {rangeItems.map((range) => (
              <Link
                key={range.slug}
                href={`/ranges/${range.slug}`}
                className="group flex flex-col rounded-lg border border-[rgb(230,225,215)] p-8 lg:p-10 transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3
                      className="text-xl font-bold tracking-tight"
                      style={{ color: "rgb(38, 35, 30)" }}
                    >
                      {range.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] font-medium" style={{ color: "rgb(120, 110, 100)" }}>
                      {range.tagline}
                    </p>
                  </div>
                  <span
                    className="rounded-full border border-[rgb(230,225,215)] px-3 py-1 text-[11px] font-medium"
                    style={{ color: "rgb(120, 110, 100)" }}
                  >
                    {range.productCount} products
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: "rgb(82, 75, 68)" }}>
                  {range.detail}
                </p>
                <div
                  className="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 group-hover:gap-3"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
                  View Collection
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work section — clean dark section */}
      <section style={{ backgroundColor: "rgb(55, 50, 45)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-white/40 mb-4">
                How We Work
              </p>
              <h2
                className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-white"
              >
                Four steps to a finished floor.
              </h2>
              <Link
                href="/how-we-work"
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
              >
                Learn about our process
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { n: "01", title: "Consult", text: "We come to you. Look at the space, talk it through." },
                { n: "02", title: "Source", text: "Find the right floor for the job and the budget." },
                { n: "03", title: "Supply", text: "Ordered, delivered, on time." },
                { n: "04", title: "Install", text: "Our crew lays it. We manage the lot." },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-lg border border-white/8 p-7"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                >
                  <span className="text-3xl font-bold text-white/15">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/55">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors section — microsoft.ai clean card layout */}
      <section className="bg-subtle-lines" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              By Sector
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              Different spaces need different floors.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="group rounded-lg border border-[rgb(230,225,215)] p-7 lg:p-8 transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <h3
                  className="text-base font-bold tracking-tight"
                  style={{ color: "rgb(38, 35, 30)" }}
                >
                  {sector.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                  {sector.description}
                </p>
                <div
                  className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide transition-all duration-200 group-hover:gap-3"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
                  Explore
                  <ArrowRight className="size-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Message section — microsoft.ai CEO message style */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20 items-start">
            <div>
              <p
                className="text-[11px] font-medium uppercase tracking-widest mb-4"
                style={{ color: "rgb(120, 110, 100)" }}
              >
                About Premrest
              </p>
              <h2
                className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                We supply it. We install it. We own the result.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                Vinyl Tiles is a division of Premrest — one of Australia&apos;s established commercial flooring companies. We&apos;ve been doing this since 2010, across thousands of projects in every sector.
              </p>
              <p className="text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                The model is simple: you get one contact from day one through to completion. No finger-pointing between the company that sold you the product and the team that installed it. We do both, so if something&apos;s not right, it&apos;s on us.
              </p>
              <p className="text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                We serve Melbourne, Sydney, and Brisbane with local teams. We work with Interface, Karndean, Armstrong, Tarkett, and others — not locked into one supplier, which means you get the right product for the job, not just what we stock.
              </p>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors hover:text-[rgb(38,35,30)]"
                style={{ color: "rgb(55, 50, 45)" }}
              >
                Learn how we work
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta />
    </>
  );
}
