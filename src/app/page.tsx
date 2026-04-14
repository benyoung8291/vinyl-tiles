import Link from "next/link";
import { ArrowRight, Layers, Shield, Truck, Wrench } from "lucide-react";
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Commercial vinyl flooring,{" "}
              <span className="text-brand">sorted.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-500 lg:max-w-lg">
              You tell us what the space needs to do. We find the right vinyl tile,
              get it to site, and lay it properly. Supply and install, one contractor,
              no finger-pointing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Get a Quote
              </Link>
              <Link
                href="#ranges"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
              >
                Explore Ranges
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-stone-200/60 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-5 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { icon: Shield, label: "Supply + Install", detail: "One call, one crew, done" },
              { icon: Layers, label: "Any manufacturer", detail: "We pick the right floor for the job" },
              { icon: Wrench, label: "We do both", detail: "Source it, lay it, own the result" },
              { icon: Truck, label: "Melbourne · Sydney · Brisbane", detail: "Local teams, national reach" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon className="mt-0.5 size-4 text-brand" />
                <div>
                  <p className="text-sm font-medium text-stone-800">{item.label}</p>
                  <p className="text-xs text-stone-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranges */}
      <section id="ranges" className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Our Ranges</p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Good floors start with good products.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {rangeItems.map((range) => (
              <Link
                key={range.slug}
                href={`/ranges/${range.slug}`}
                className="group flex flex-col rounded-lg border border-stone-200/60 bg-white p-6 transition-all hover:border-brand/30 hover:shadow-md lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-brand">
                      {range.name}
                    </h3>
                    <span className="mt-1 inline-block text-sm text-brand/70">{range.tagline}</span>
                  </div>
                  <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500">
                    {range.productCount} products
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  {range.detail}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors group-hover:text-brand-dark">
                  View Collection
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-stone-900">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-light mb-3">
                How We Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Four steps to a finished floor.
              </h2>
              <Link
                href="/how-we-work"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-400 transition-colors hover:text-white"
              >
                Learn about our process
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { n: "01", title: "Consult", text: "We come to you. Look at the space, talk it through." },
                { n: "02", title: "Source", text: "Find the right floor for the job and the budget." },
                { n: "03", title: "Supply", text: "Ordered, delivered, on time." },
                { n: "04", title: "Install", text: "Our crew lays it. We manage the lot." },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-lg border border-stone-800 bg-stone-800/50 p-5"
                >
                  <span className="text-xs font-semibold text-brand-light">{step.n}</span>
                  <h3 className="mt-2 text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing guide */}
      <section className="border-b border-stone-200/60 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-8 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center lg:gap-16">
            <div>
              <p className="text-xl font-bold tracking-tight text-stone-900">
                $45<span className="text-brand">/m²</span>
              </p>
              <p className="mt-1 text-xs text-stone-500">Supply from (ex GST)</p>
            </div>
            <div className="hidden h-8 w-px bg-stone-200 sm:block" />
            <div>
              <p className="text-xl font-bold tracking-tight text-stone-900">
                $20<span className="text-brand">/m²</span>
              </p>
              <p className="mt-1 text-xs text-stone-500">Install from (ex GST)</p>
            </div>
            <div className="hidden h-8 w-px bg-stone-200 sm:block" />
            <div>
              <p className="text-xl font-bold tracking-tight text-stone-900">
                15<span className="text-brand"> yr</span>
              </p>
              <p className="mt-1 text-xs text-stone-500">Commercial warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
              By Sector
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Different spaces need different floors.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="group rounded-lg border border-stone-200/60 bg-white p-6 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <h3 className="text-base font-bold text-stone-900 transition-colors group-hover:text-brand">
                  {sector.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {sector.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand/60 transition-colors group-hover:text-brand">
                  Explore
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Why Premrest</p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-12 md:text-4xl">
            We supply it. We install it. We own the result.
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "One contractor",
                text: "No coordination between the company that sold you the vinyl and the mob that laid it. If something\u2019s not right, it\u2019s on us.",
              },
              {
                title: "We start with your problem",
                text: "Not a product catalogue. What does the space need to do? How much traffic? Wet areas? Wheelchairs? We work backwards from the answer.",
              },
              {
                title: "Compliance is built in",
                text: "Slip ratings, fire ratings, acoustic requirements, NCC compliance \u2014 we specify to all of them. You get the documentation your certifier needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-stone-200/60 bg-cream/50 p-6"
              >
                <h3 className="text-base font-bold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
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
