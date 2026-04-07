import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Leaf, Shield, Truck } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";

const rangeItems = [
  {
    name: "Interface",
    slug: "interface",
    tagline: "Modular Flooring. Designed for Life.",
    detail: "Carbon-neutral modular LVT with biophilic design for commercial environments that demand sustainability without compromise.",
    specs: ["5.0mm", "Plank & Tile", "15yr warranty"],
    accent: "from-amber-100 to-orange-50",
  },
  {
    name: "Karndean",
    slug: "karndean",
    tagline: "Design Flooring. Beautifully Crafted.",
    detail: "Hand-crafted wood and stone visuals with LooseLay technology — adhesive-free installation that cuts project timelines in half.",
    specs: ["4.5mm", "Longboard Plank", "LooseLay"],
    accent: "from-rose-100 to-pink-50",
  },
  {
    name: "Armstrong",
    slug: "armstrong",
    tagline: "Performance Flooring You Can Trust.",
    detail: "Over a century of innovation in resilient flooring. Diamond 10 surface technology for scratch resistance without polish or wax.",
    specs: ["2.5-5.0mm", "Tile & Plank", "Diamond 10"],
    accent: "from-sky-100 to-blue-50",
  },
  {
    name: "Tarkett",
    slug: "tarkett",
    tagline: "Good for People and Planet.",
    detail: "Cradle to Cradle certified with integrated acoustic backing achieving up to 19dB impact sound reduction.",
    specs: ["3.6-4.6mm", "iD Collection", "19dB acoustic"],
    accent: "from-emerald-100 to-green-50",
  },
];

const sectors = [
  {
    title: "Office",
    href: "/office-flooring",
    description: "Acoustic performance meets design flexibility for the modern workplace.",
    icon: "grid",
  },
  {
    title: "Retail",
    href: "/retail-flooring",
    description: "Heavy commercial-grade wear layers engineered for high-traffic environments.",
    icon: "store",
  },
  {
    title: "Healthcare",
    href: "/healthcare-flooring",
    description: "Hygienic, welded-seam flooring with antimicrobial surface treatments.",
    icon: "heart",
  },
  {
    title: "Education",
    href: "/education-flooring",
    description: "Impact-resistant, acoustic flooring built for budget-conscious projects.",
    icon: "book",
  },
  {
    title: "Hospitality",
    href: "/hospitality-flooring",
    description: "Designer aesthetics with waterproof construction and effortless maintenance.",
    icon: "wine",
  },
];

const testimonials = [
  {
    quote: "They handled everything from product selection to final install. Professional, on time, and the result looks fantastic.",
    author: "Sarah Mitchell",
    role: "Facilities Manager",
    company: "Greenway Corporate Park",
  },
  {
    quote: "We needed 2,000m\u00B2 of healthcare-grade flooring installed over a weekend. Delivered on budget and ahead of schedule.",
    author: "David Nguyen",
    role: "Project Manager",
    company: "Westfield Medical Centre",
  },
  {
    quote: "The vinyl plank they recommended for our school halls has held up perfectly after two years of heavy use.",
    author: "Karen O'Brien",
    role: "Business Manager",
    company: "St Andrews College",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — warm, inviting, organic */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 pt-[72px]">
        {/* Decorative warm glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-light/8 blur-[100px]" />

        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-editorial-caption text-brand-light mb-6 flex items-center gap-2">
                <Sparkles className="size-4" />
                Commercial Vinyl Tile Specialists
              </p>
              <h1 className="text-editorial-display text-white">
                Premium flooring,
                <br />
                <span className="bg-gradient-to-r from-brand-light to-brand bg-clip-text text-transparent">sourced & installed</span>
                <br />
                with precision.
              </h1>
            </div>
            <div className="lg:pb-2">
              <p className="text-lg leading-relaxed text-stone-400 lg:max-w-md">
                We source, supply, and professionally install luxury vinyl tile
                flooring from the world&apos;s leading manufacturers. One call.
                Done right.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold tracking-[-0.01em] text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="#ranges"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-[-0.01em] text-stone-400 transition-colors hover:text-white"
                >
                  Explore Ranges
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Metric strip — with warm accents */}
          <div className="mt-20 grid grid-cols-3 gap-6 lg:mt-28">
            {[
              { value: "$45", unit: "/m\u00B2", label: "Supply from" },
              { value: "$18", unit: "/m\u00B2", label: "Installation from" },
              { value: "15", unit: "yr", label: "Commercial warranty" },
            ].map((metric, i) => (
              <div key={i} className="rounded-2xl border border-stone-800/60 bg-stone-900/50 p-6 backdrop-blur-sm">
                <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {metric.value}<span className="text-brand-light">{metric.unit}</span>
                </p>
                <p className="mt-1 text-xs text-stone-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility strip — warm cards */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-10">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { icon: Shield, label: "Supply + Install", detail: "One point of contact" },
              { icon: Sparkles, label: "Any Brand", detail: "Not tied to one manufacturer" },
              { icon: Leaf, label: "Since 2010", detail: "Commercial specialists" },
              { icon: Truck, label: "Australia-Wide", detail: "Every state and territory" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-xl bg-white/80 p-5 shadow-sm"
              >
                <item.icon className="mt-0.5 size-5 text-brand" />
                <div>
                  <p className="text-sm font-semibold tracking-[-0.01em] text-stone-900">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-stone-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranges — creative cards with gradient accents */}
      <section id="ranges" className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="mb-16 max-w-xl lg:mb-20">
            <p className="text-editorial-caption text-brand mb-4">Our Ranges</p>
            <h2 className="text-editorial-heading text-stone-950">
              World-class manufacturers,
              <br className="hidden sm:block" />
              curated for your project.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {rangeItems.map((range) => (
              <Link
                key={range.slug}
                href={`/ranges/${range.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-stone-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 lg:p-10"
              >
                {/* Gradient accent top */}
                <div className={`absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${range.accent}`} />

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-stone-900 transition-colors group-hover:text-brand">
                      {range.name}
                    </h3>
                    <span className="mt-1 inline-block text-sm font-medium text-brand/70">{range.tagline}</span>
                  </div>
                  <ArrowUpRight className="size-5 text-stone-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                </div>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-stone-500">
                  {range.detail}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {range.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-block rounded-full bg-stone-100 px-3.5 py-1 text-xs font-medium text-stone-600"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process — warm dark section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
        <div className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand/8 blur-[100px]" />

        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-editorial-caption text-brand-light mb-4">
                How We Work
              </p>
              <h2 className="text-editorial-heading text-white">
                Four steps to a
                <br className="hidden sm:block" />
                finished floor.
              </h2>
              <Link
                href="/how-we-work"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-2.5 text-sm font-medium text-stone-400 transition-all hover:border-brand/40 hover:text-white"
              >
                Learn about our process
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { n: "01", title: "Consult", text: "Free site visit & project discussion" },
                { n: "02", title: "Source", text: "Right product, competitive pricing" },
                { n: "03", title: "Supply", text: "Direct from manufacturer to site" },
                { n: "04", title: "Install", text: "Licensed installers, full project management" },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-2xl border border-stone-800/60 bg-stone-900/40 p-6 backdrop-blur-sm"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand-light">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors — playful cards */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="mb-16 max-w-xl lg:mb-20">
            <p className="text-editorial-caption text-brand mb-4">
              By Sector
            </p>
            <h2 className="text-editorial-heading text-stone-950">
              Purpose-built flooring
              <br className="hidden sm:block" />
              for every environment.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="group relative overflow-hidden rounded-2xl border border-stone-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-brand/20 lg:p-10"
              >
                <h3 className="text-xl font-bold tracking-[-0.02em] text-stone-900 transition-colors group-hover:text-brand">
                  {sector.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  {sector.description}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand/60 transition-colors group-hover:text-brand">
                  Explore
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — warm cards */}
      <section className="bg-gradient-to-b from-warm-white to-brand-50/50">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">Testimonials</p>
          <h2 className="text-editorial-heading text-stone-950 mb-16">
            Trusted across Australia.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-stone-200/60 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="size-4 text-brand" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[0.9375rem] leading-relaxed text-stone-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">
                      {t.author}
                    </p>
                    <p className="text-xs text-stone-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
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
