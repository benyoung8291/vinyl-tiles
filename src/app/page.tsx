import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";

const rangeItems = [
  {
    name: "Interface",
    slug: "interface",
    tagline: "Modular LVT with biophilic design.",
    detail: "Carbon-neutral modular vinyl tile. Wood and stone looks with acoustic backing. The sustainability benchmark for commercial projects.",
    productCount: 8,
    image: "/images/products/interface/northern-grain-chiffon-oak.jpg",
  },
  {
    name: "Karndean",
    slug: "karndean",
    tagline: "Design-led. LooseLay option.",
    detail: "Realistic wood and stone visuals with adhesive-free LooseLay technology. Fast install, easy replacement, great for fitouts on a timeline.",
    productCount: 7,
    image: "/images/products/karndean/art-select-blended-oak.jpg",
  },
  {
    name: "Armstrong",
    slug: "armstrong",
    tagline: "Built for heavy commercial.",
    detail: "Diamond 10 surface technology means no polish, no wax, and scratch resistance that actually holds up under trolleys and foot traffic.",
    productCount: 6,
    image: "/images/products/armstrong/aspirations-malt-oak.jpg",
  },
  {
    name: "Tarkett",
    slug: "tarkett",
    tagline: "Acoustic backing. Cradle to Cradle.",
    detail: "Integrated acoustic backing achieving up to 19dB impact sound reduction. Cradle to Cradle certified for projects chasing Green Star.",
    productCount: 6,
    image: "/images/products/tarkett/id-inspiration-ultimate.jpg",
  },
];

const sectors = [
  {
    title: "Office",
    href: "/office-flooring",
    description: "Open plan, hot desks, meeting rooms — different zones, one consistent floor that handles all of it.",
    image: "/images/products/interface/brushed-lines-linen.jpg",
  },
  {
    title: "Retail",
    href: "/retail-flooring",
    description: "Trolleys, foot traffic, seasonal layout changes. The floor needs to look good on day one thousand.",
    image: "/images/products/karndean/korlok-select-canadian-urban-oak.jpg",
  },
  {
    title: "Healthcare",
    href: "/healthcare-flooring",
    description: "Infection control, slip resistance, welded seams. Flooring that meets the compliance requirements.",
    image: "/images/products/armstrong/earthcuts-sandstone.jpg",
  },
  {
    title: "Education",
    href: "/education-flooring",
    description: "Thousands of kids, tight budgets, decades of expected service life. Vinyl tile handles all three.",
    image: "/images/products/tarkett/id-comfort-19.jpg",
  },
  {
    title: "Hospitality",
    href: "/hospitality-flooring",
    description: "Looks like timber or stone, handles water and spills, doesn't need the maintenance budget of either.",
    image: "/images/products/karndean/van-gogh-smoked-school-cedar.jpg",
  },
];

const audiences = [
  {
    label: "Facility Managers",
    heading: "Compliance, lifecycle, no surprises",
    text: "Slip ratings, fire ratings, acoustic targets, NCC documentation. Spot-replacement strategy and a maintenance program that keeps the floor performing for 15+ years. One accountable contact, every site.",
    cta: "Talk facility solutions",
    href: "/contact?audience=facility-manager",
  },
  {
    label: "Property Owners",
    heading: "A flooring partner across three cities",
    text: "Multi-site portfolios, fitouts, refurbishments, and base-build upgrades across Melbourne, Sydney, and Brisbane. Direct manufacturer relationships, local install crews, consistent specification across every asset.",
    cta: "Discuss your portfolio",
    href: "/contact?audience=property-owner",
  },
  {
    label: "Premium Homeowners",
    heading: "Architect-grade LVT for your home",
    text: "Designer-led wood and stone visuals from Karndean and Interface. Engineered for real life &mdash; pets, kids, hot Melbourne summers &mdash; and installed by commercial-grade crews. We are not the cheap option, and we will not pretend to be.",
    cta: "Explore residential LVT",
    href: "/residential",
  },
];

const clientLogos = [
  { name: "JLL", src: "/images/clients/jll.png" },
  { name: "Medibank", src: "/images/clients/medibank.svg" },
  { name: "ANZ", src: "/images/clients/anz.png" },
  { name: "KPMG", src: "/images/clients/kpmg.svg" },
  { name: "Telstra", src: "/images/clients/telstra.svg" },
  { name: "Bendigo Bank", src: "/images/clients/bendigo-bank.png" },
  { name: "Morgan Stanley", src: "/images/clients/morgan-stanley.png" },
  { name: "NetApp", src: "/images/clients/netapp.png" },
];

export default function Home() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-32 md:pt-40 lg:px-10 lg:pt-48">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
            <div className="pb-16 md:pb-20 lg:pb-28">
              <p
                className="text-[13px] font-medium uppercase tracking-widest mb-6"
                style={{ color: "rgb(120, 110, 100)" }}
              >
                Premium LVT &middot; Melbourne &middot; Sydney &middot; Brisbane
              </p>
              <h1
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                Premium vinyl tile, specified properly and installed to last.
              </h1>
              <p
                className="mt-8 max-w-2xl text-lg leading-relaxed"
                style={{ color: "rgb(82, 75, 68)" }}
              >
                We supply and install premium LVT for facility managers, property owners, and discerning homeowners across Melbourne, Sydney, and Brisbane. One contractor, one accountable result &mdash; not the cheapest floor on the market, the right one.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[rgb(55,50,45)] px-7 py-3 text-[15px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                >
                  Book a Site Inspection
                </Link>
                <Link
                  href="#audiences"
                  className="inline-flex items-center gap-2 px-4 py-3 text-[15px] font-medium text-[rgb(82,75,68)] transition-colors hover:text-[rgb(38,35,30)]"
                >
                  Find Your Path
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/hero/hero-blob.webp"
                  alt="Modern commercial space with premium vinyl flooring"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative brand element */}
              <Image
                src="/images/brand/patch-orange.svg"
                alt=""
                width={120}
                height={120}
                className="absolute -left-10 bottom-20 opacity-60"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[rgb(215,208,198)] to-transparent" />
      </section>

      {/* Client Logos Trust Strip */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10 lg:py-14">
          <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(170, 163, 153)" }}>
            Trusted by leading organisations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:gap-x-16">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="relative h-7 w-auto opacity-40 grayscale transition-all hover:opacity-70 hover:grayscale-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section id="audiences" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              Who We Work With
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              Three audiences, one standard of work.
            </h2>
            <p
              className="mt-5 text-[16px] leading-relaxed"
              style={{ color: "rgb(82, 75, 68)" }}
            >
              We work with people who care about getting the floor right the first time. If you are shopping on price alone, we are probably not the right fit &mdash; and we will tell you that up front.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map((aud) => (
              <div
                key={aud.label}
                className="relative flex flex-col rounded-lg border border-[rgb(230,225,215)] p-8 lg:p-10"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <p
                  className="text-[11px] font-medium uppercase tracking-widest mb-5"
                  style={{ color: "rgb(120, 110, 100)" }}
                >
                  {aud.label}
                </p>
                <h3
                  className="text-xl font-bold tracking-tight mb-4"
                  style={{ color: "rgb(38, 35, 30)" }}
                >
                  {aud.heading}
                </h3>
                <p
                  className="flex-1 text-[15px] leading-relaxed"
                  style={{ color: "rgb(82, 75, 68)" }}
                  dangerouslySetInnerHTML={{ __html: aud.text }}
                />
                <Link
                  href={aud.href}
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold transition-colors hover:text-[rgb(38,35,30)]"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
                  {aud.cta}
                  <ArrowRight className="size-3.5" />
                </Link>
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
                $30&ndash;35<span className="text-[rgb(120,110,100)]">/m&sup2;</span>
              </p>
              <p className="mt-1.5 text-[12px] text-[rgb(120,110,100)]">Install guide (ex GST, ex prep)</p>
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
            <div className="hidden h-8 w-px bg-[rgb(230,225,215)] sm:block" />
            <div>
              <p className="text-2xl font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                100<span className="text-[rgb(120,110,100)]">%</span>
              </p>
              <p className="mt-1.5 text-[12px] text-[rgb(120,110,100)]">Site-inspected quotes</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] leading-relaxed" style={{ color: "rgb(120, 110, 100)" }}>
            Installation guide pricing only &mdash; floor preparation, takeup, levelling, and access factors are quoted separately. Every quote follows a free site inspection.
          </p>
        </div>
      </section>

      {/* Ranges section with images */}
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
                className="group overflow-hidden rounded-lg border border-[rgb(230,225,215)] transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={range.image}
                    alt={`${range.name} vinyl flooring`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-medium"
                    style={{ color: "rgb(55, 50, 45)" }}
                  >
                    {range.productCount} products
                  </span>
                </div>
                <div className="p-8 lg:p-10">
                  <h3
                    className="text-xl font-bold tracking-tight"
                    style={{ color: "rgb(38, 35, 30)" }}
                  >
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

      {/* Services showcase with real project images */}
      <section className="border-y border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
              What We Do
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
              From consult to completion.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: "Supply & Install", desc: "One contractor from specification through to handover. No coordination headaches.", image: "/images/hero/installs.webp" },
              { title: "Maintenance", desc: "Scheduled cleaning and care programs that keep your floors performing for years.", image: "/images/hero/cleaning.webp" },
            ].map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-lg border border-[rgb(230,225,215)]"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-base font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work section */}
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

      {/* Sectors section with images */}
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
                className="group overflow-hidden rounded-lg border border-[rgb(230,225,215)] transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={`${sector.title} flooring`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 lg:p-8">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About section with image */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-center">
            <div>
              <p
                className="text-[11px] font-medium uppercase tracking-widest mb-4"
                style={{ color: "rgb(120, 110, 100)" }}
              >
                Who We Are
              </p>
              <h2
                className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                Vinyl tile specialists. One accountable partner.
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                  We supply and install premium commercial vinyl tile flooring across Melbourne, Sydney, and Brisbane. Direct relationships with Interface, Karndean, Armstrong, and Tarkett. Local install crews. One project manager from site inspection through to handover.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                  Vinyl tile is all we do here, and we have been doing it for over a decade. If you want a floor specified properly, installed by people who lay vinyl every day, and warranted by a contractor who answers the phone &mdash; that is the offer.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                  >
                    Book a Site Inspection
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/how-we-work"
                    className="inline-flex items-center gap-2 rounded-md border border-[rgb(230,225,215)] px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[rgb(242,238,228)]"
                    style={{ color: "rgb(55, 50, 45)" }}
                  >
                    Learn how we work
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/hero/sustainability-blob.webp"
                  alt="Commercial vinyl tile install in progress"
                  fill
                  className="object-cover"
                />
              </div>
              <Image
                src="/images/brand/scribble-green.svg"
                alt=""
                width={100}
                height={100}
                className="absolute -right-6 -top-6 opacity-50"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta
        title="Every quote starts with a site visit."
        description="Tell us about the building, the brief, and the timeline. We will book a free site inspection in Melbourne, Sydney, or Brisbane and come back with a specification and a written quote."
        buttonText="Book a Site Inspection"
        buttonHref="/contact"
      />
    </>
  );
}
