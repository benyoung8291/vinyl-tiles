import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Premium LVT for Homes | Designer Vinyl Tile Flooring",
  description:
    "Architect-grade LVT for premium homes in Melbourne, Sydney, and Brisbane. Karndean and Interface ranges, commercial-grade installation, every quote backed by a site inspection.",
};

const positioning = [
  {
    label: "Designer Visuals",
    heading: "Karndean and Interface, not the bargain bin",
    text: "We supply the LVT ranges that interior designers actually specify. Hand-crafted European oak visuals, micro-bevels, and embossed-in-register textures that read as the real thing in your home.",
  },
  {
    label: "Commercial-Grade Install",
    heading: "The same crews who lay your local hospital",
    text: "Our installers prepare subfloors to commercial tolerances. That means flat, dry, properly tested, and properly bonded &mdash; the difference between a floor that looks great for fifteen years and one that telegraphs every imperfection underneath.",
  },
  {
    label: "Built for Real Homes",
    heading: "Pets, kids, hot summers, no fuss",
    text: "Premium LVT shrugs off claws, dropped plates, dragged stools, and 40&deg;C summers. Spot-replace a damaged tile in an afternoon. No sanding, no resealing, no re-oiling.",
  },
];

const reasons = [
  {
    title: "Quieter than timber and hybrid",
    text: "Acoustic backings on premium ranges cut footfall and impact noise dramatically &mdash; you notice it the moment you walk in.",
  },
  {
    title: "Warmer underfoot than tile or concrete",
    text: "Vinyl is forgiving on bare feet, knees, and dropped glassware. It also works beautifully over hydronic underfloor heating.",
  },
  {
    title: "Genuinely waterproof, not just water-resistant",
    text: "Glue-down installations give you a sealed floor for kitchens, laundries, and ensuites &mdash; a known weak spot for engineered timber and hybrid.",
  },
  {
    title: "Designed to be replaced, not patched",
    text: "Modular tiles and planks mean a damaged section is swapped out, not refinished. We hold attic stock for every project so your floor stays seamless.",
  },
];

const ranges = [
  {
    name: "Karndean",
    slug: "karndean",
    tagline: "The designer favourite for premium homes",
    image: "/images/products/karndean/korlok-reserve-warm-fumed-oak.jpg",
    detail:
      "Art Select, Korlok Reserve, and Van Gogh ranges. Hand-crafted European oak visuals with micro-bevels, embossed textures, and herringbone laying patterns.",
  },
  {
    name: "Interface",
    slug: "interface",
    tagline: "Carbon-neutral, biophilic, modular",
    image: "/images/products/interface/northern-grain-chiffon-oak.jpg",
    detail:
      "For homeowners who care about provenance. Carbon-neutral product, recycled content, and Cradle to Cradle certification across the range.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "rgb(248, 245, 237)" }}
      >
        <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-32 md:pt-40 lg:px-10 lg:pt-48">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
            <div className="pb-16 md:pb-20 lg:pb-28">
              <p
                className="text-[13px] font-medium uppercase tracking-widest mb-6"
                style={{ color: "rgb(120, 110, 100)" }}
              >
                Premium Residential LVT
              </p>
              <h1
                className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                Designer LVT for homes that take it seriously.
              </h1>
              <p
                className="mt-8 max-w-2xl text-lg leading-relaxed"
                style={{ color: "rgb(82, 75, 68)" }}
              >
                We are not the cheap option, and we are upfront about that. If you are weighing premium LVT against engineered timber or hybrid for a renovation or new build, we can supply the right product and install it to a commercial standard. If you are shopping on price alone, our friends at the big retailers will look after you better than we will.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?audience=homeowner"
                  className="inline-flex items-center justify-center rounded-md bg-[rgb(55,50,45)] px-7 py-3 text-[15px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                >
                  Book a Site Inspection
                </Link>
                <Link
                  href="#ranges"
                  className="inline-flex items-center gap-2 px-4 py-3 text-[15px] font-medium text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
                >
                  See Premium Ranges
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/products/karndean/korlok-reserve-warm-fumed-oak.jpg"
                  alt="Premium LVT in a residential interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[rgb(215,208,198)] to-transparent" />
      </section>

      {/* Positioning */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              What Makes It Premium
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              The product matters. So does the install.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {positioning.map((p) => (
              <div
                key={p.label}
                className="rounded-lg border border-[rgb(230,225,215)] p-8 lg:p-10"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <p
                  className="text-[11px] font-medium uppercase tracking-widest mb-5"
                  style={{ color: "rgb(120, 110, 100)" }}
                >
                  {p.label}
                </p>
                <h3
                  className="text-xl font-bold tracking-tight mb-4"
                  style={{ color: "rgb(38, 35, 30)" }}
                >
                  {p.heading}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "rgb(82, 75, 68)" }}
                  dangerouslySetInnerHTML={{ __html: p.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LVT */}
      <section className="border-y border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
                Vs. Timber, Hybrid, and Tile
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight" style={{ color: "rgb(38, 35, 30)" }}>
                Why premium homeowners pick LVT.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title}>
                  <h3 className="text-[15px] font-bold tracking-tight mb-2" style={{ color: "rgb(38, 35, 30)" }}>
                    {r.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ranges */}
      <section id="ranges" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
              Premium Ranges
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
              Two ranges that earn their spot in a premium home.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {ranges.map((range) => (
              <Link
                key={range.slug}
                href={`/ranges/${range.slug}`}
                className="group overflow-hidden rounded-lg border border-[rgb(230,225,215)] transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={range.image}
                    alt={`${range.name} premium LVT`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="text-xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                    {range.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] font-medium" style={{ color: "rgb(120, 110, 100)" }}>
                    {range.tagline}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                    {range.detail}
                  </p>
                  <div
                    className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 group-hover:gap-3"
                    style={{ color: "rgb(55, 50, 45)" }}
                  >
                    View Collection
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section style={{ backgroundColor: "rgb(55, 50, 45)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-4 text-white/40">
                The Investment
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
                Honest numbers, no surprises.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-[16px] leading-relaxed text-white/70">
                Installation is a guide of <span className="font-semibold text-white/90">$30&ndash;35/m&sup2;</span> for laying premium LVT. That is the install only. It does not include floor preparation, takeup of existing flooring, levelling compound, moisture barriers, or trims &mdash; all of which can be material on a residential renovation.
              </p>
              <p className="text-[16px] leading-relaxed text-white/70">
                Product cost sits on top of that and varies significantly between ranges. Karndean Korlok Reserve, for example, is a different conversation to entry-level LVT.
              </p>
              <p className="text-[16px] leading-relaxed text-white/70">
                Every quote starts with a free site inspection in Melbourne, Sydney, or Brisbane. We measure, test moisture levels, look at the existing substrate, and write a fixed quote you can build a budget around. No phone quotes, no guesswork, no &ldquo;from $X&rdquo; numbers we walk back later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other floor types */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
              Considering Other Floors?
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
              Premium homes rarely use one floor type.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
              Bedrooms in carpet, kitchen and living in LVT, a cork-hybrid feature for the home office? Our sister brands cover the rest of the house with the same standard of work.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Modular Carpet",
                tag: "Carpet Tile",
                url: "https://modularcarpet.com.au",
                desc: "Designer carpet tile for bedrooms, studies, and media rooms. Replace a single tile if it stains, instead of relaying the room.",
              },
              {
                name: "Comcork Flooring",
                tag: "Cork Hybrid",
                url: "https://comcorkflooring.com.au",
                desc: "Warmer and quieter than vinyl, with the resilience of a hybrid floor. Beautiful in studies, libraries, and yoga rooms.",
              },
              {
                name: "Premrest",
                tag: "Group Site",
                url: "https://www.premrest.com.au",
                desc: "The parent business and a starting point if your project covers more than one floor type or includes restoration work.",
              },
            ].map((brand) => (
              <a
                key={brand.url}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-lg border border-[rgb(230,225,215)] p-7 transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <p className="text-[11px] font-medium uppercase tracking-widest mb-3" style={{ color: "rgb(120, 110, 100)" }}>
                  {brand.tag}
                </p>
                <h3 className="text-lg font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                  {brand.name}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                  {brand.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide transition-all duration-200 group-hover:gap-3" style={{ color: "rgb(55, 50, 45)" }}>
                  Visit site
                  <ArrowUpRight className="size-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <QuoteCta
        title="Ready to specify a floor that lasts?"
        description="Book a free site inspection in Melbourne, Sydney, or Brisbane. We will measure, assess the substrate, and give you a fixed written quote you can plan around."
        buttonText="Book a Site Inspection"
        buttonHref="/contact?audience=homeowner"
      />
    </>
  );
}
