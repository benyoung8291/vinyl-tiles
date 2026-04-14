import Link from "next/link";
import { ArrowRight, Layers, Shield, Truck, Wrench, CheckCircle2, Users, TrendingUp } from "lucide-react";
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

const personas = [
  {
    title: "Facility Managers",
    icon: Wrench,
    pain: "Managing replacements without shutting down operations. Sourcing and installing are two different headaches. You need one contractor who owns the whole job.",
  },
  {
    title: "Building Managers",
    icon: TrendingUp,
    pain: "Compliance documentation, slip ratings, fire ratings, NCC sign-off. Budget blowouts when supply and install aren't coordinated. You need a partner who speaks the language of your certifier.",
  },
  {
    title: "Business Owners",
    icon: Users,
    pain: "Downtime = lost revenue. You need a floor that looks professional on day one and a team that gets in, gets it done, and gets out. No surprises.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "rgb(251, 211, 190)" }} className="relative overflow-hidden">
        <div className="mx-auto max-w-[1728px] px-6 py-24 lg:px-12 lg:py-40">
          <div className="max-w-3xl">
            <h1
              style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
              className="text-5xl font-bold leading-tight md:text-6xl lg:text-8xl tracking-tight"
            >
              Commercial vinyl flooring, sorted.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80 lg:max-w-2xl md:text-xl">
              You tell us what the space needs to do. We find the right vinyl tile, get it to site, and lay it properly. Supply and install, one contractor, no finger-pointing.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "rgb(140, 84, 98)" }}
              >
                Get a Quote
              </Link>
              <Link
                href="#ranges"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium transition-colors duration-300 hover:opacity-70"
                style={{ color: "rgb(140, 84, 98)" }}
              >
                Explore Ranges
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section style={{ backgroundColor: "rgb(254, 249, 237)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-12 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {[
              { icon: Shield, label: "Supply + Install", detail: "One call, one crew, done" },
              { icon: Layers, label: "Any manufacturer", detail: "We pick the right floor for the job" },
              { icon: Wrench, label: "We do both", detail: "Source it, lay it, own the result" },
              { icon: Truck, label: "Melbourne · Sydney · Brisbane", detail: "Local teams, national reach" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <item.icon className="mt-1 size-6 flex-shrink-0" style={{ color: "rgb(140, 84, 98)" }} />
                <div>
                  <p className="text-base font-semibold" style={{ color: "rgb(93, 82, 75)" }}>{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with section */}
      <section style={{ backgroundColor: "rgb(247, 236, 217)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-20 lg:px-12 lg:py-32">
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>Who We Work With</p>
            <h2
              style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
              className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl tracking-tight"
            >
              We get your pain points.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {personas.map((persona) => (
              <div
                key={persona.title}
                style={{ backgroundColor: "rgb(254, 249, 237)" }}
                className="rounded-lg p-8 lg:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <persona.icon className="size-8" style={{ color: "rgb(140, 84, 98)" }} />
                  <h3
                    style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
                    className="text-2xl font-bold"
                  >
                    {persona.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-foreground/70">
                  {persona.pain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranges section */}
      <section id="ranges" style={{ backgroundColor: "rgb(254, 249, 237)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-20 lg:px-12 lg:py-32">
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>Our Ranges</p>
            <h2
              style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
              className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl tracking-tight"
            >
              Good floors start with good products.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {rangeItems.map((range) => (
              <Link
                key={range.slug}
                href={`/ranges/${range.slug}`}
                className="group flex flex-col rounded-lg p-8 lg:p-10 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "rgb(245, 238, 224)" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3
                      style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
                      className="text-3xl font-bold tracking-tight"
                    >
                      {range.name}
                    </h3>
                    <p className="mt-2 text-base" style={{ color: "rgb(140, 84, 98)" }}>{range.tagline}</p>
                  </div>
                  <span className="rounded-full px-4 py-2 text-sm font-medium" style={{ backgroundColor: "rgba(140, 84, 98, 0.1)", color: "rgb(140, 84, 98)" }}>
                    {range.productCount} products
                  </span>
                </div>
                <p className="text-base leading-relaxed text-foreground/70 mb-6">
                  {range.detail}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-base font-medium transition-all duration-300 group-hover:gap-3" style={{ color: "rgb(140, 84, 98)" }}>
                  View Collection
                  <ArrowRight className="size-5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work section */}
      <section style={{ backgroundColor: "rgb(93, 82, 75)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-20 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">How We Work</p>
              <h2
                style={{ fontFamily: "var(--font-heading, serif)" }}
                className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl tracking-tight text-white"
              >
                Four steps to a finished floor.
              </h2>
              <Link
                href="/how-we-work"
                className="mt-8 inline-flex items-center gap-2 text-base font-medium text-white/70 transition-colors hover:text-white"
              >
                Learn about our process
                <ArrowRight className="size-5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { n: "01", title: "Consult", text: "We come to you. Look at the space, talk it through." },
                { n: "02", title: "Source", text: "Find the right floor for the job and the budget." },
                { n: "03", title: "Supply", text: "Ordered, delivered, on time." },
                { n: "04", title: "Install", text: "Our crew lays it. We manage the lot." },
              ].map((step) => (
                <div
                  key={step.n}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className="rounded-lg p-8 backdrop-blur-sm"
                >
                  <span
                    style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(251, 211, 190)" }}
                    className="text-4xl font-bold"
                  >
                    {step.n}
                  </span>
                  <h3
                    style={{ fontFamily: "var(--font-heading, serif)" }}
                    className="mt-4 text-xl font-bold text-white"
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/70">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing guide */}
      <section style={{ backgroundColor: "rgb(245, 238, 224)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-12 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-12 text-center lg:gap-20">
            <div>
              <p
                style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
                className="text-3xl font-bold"
              >
                $45<span style={{ color: "rgb(140, 84, 98)" }}>/m²</span>
              </p>
              <p className="mt-2 text-sm text-foreground/60">Supply from (ex GST)</p>
            </div>
            <div className="hidden h-10 w-px bg-foreground/10 sm:block" />
            <div>
              <p
                style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
                className="text-3xl font-bold"
              >
                $20<span style={{ color: "rgb(140, 84, 98)" }}>/m²</span>
              </p>
              <p className="mt-2 text-sm text-foreground/60">Install from (ex GST)</p>
            </div>
            <div className="hidden h-10 w-px bg-foreground/10 sm:block" />
            <div>
              <p
                style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
                className="text-3xl font-bold"
              >
                15<span style={{ color: "rgb(140, 84, 98)" }}> yr</span>
              </p>
              <p className="mt-2 text-sm text-foreground/60">Commercial warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors section */}
      <section style={{ backgroundColor: "rgb(247, 236, 217)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-20 lg:px-12 lg:py-32">
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>By Sector</p>
            <h2
              style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
              className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl tracking-tight"
            >
              Different spaces need different floors.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="group rounded-lg p-8 lg:p-10 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "rgb(254, 249, 237)" }}
              >
                <h3
                  style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
                  className="text-2xl font-bold tracking-tight"
                >
                  {sector.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/70">
                  {sector.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-all duration-300 group-hover:gap-3" style={{ color: "rgb(140, 84, 98)" }}>
                  Explore
                  <ArrowRight className="size-4 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Premrest section */}
      <section style={{ backgroundColor: "rgb(254, 249, 237)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-20 lg:px-12 lg:py-32">
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "rgb(140, 84, 98)" }}>Why Premrest</p>
            <h2
              style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
              className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl tracking-tight"
            >
              We supply it. We install it. We own the result.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {[
              {
                title: "One contractor",
                text: "No coordination between the company that sold you the vinyl and the mob that laid it. If something's not right, it's on us.",
                icon: CheckCircle2,
              },
              {
                title: "We start with your problem",
                text: "Not a product catalogue. What does the space need to do? How much traffic? Wet areas? Wheelchairs? We work backwards from the answer.",
                icon: Users,
              },
              {
                title: "Compliance is built in",
                text: "Slip ratings, fire ratings, acoustic requirements, NCC compliance — we specify to all of them. You get the documentation your certifier needs.",
                icon: Shield,
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ backgroundColor: "rgb(245, 238, 224)" }}
                className="rounded-lg p-8 lg:p-10"
              >
                <item.icon className="size-8 mb-4" style={{ color: "rgb(140, 84, 98)" }} />
                <h3
                  style={{ fontFamily: "var(--font-heading, serif)", color: "rgb(93, 82, 75)" }}
                  className="text-2xl font-bold tracking-tight"
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta />
    </>
  );
}
