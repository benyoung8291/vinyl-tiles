import Link from "next/link";
import { ArrowRight, Layers, Leaf, Shield, Truck } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";

const rangeItems = [
  {
    name: "Interface",
    slug: "interface",
    tagline: "Modular Flooring. Designed for Life.",
    detail: "Carbon-neutral modular LVT with biophilic design for commercial environments that demand sustainability without compromise.",
    productCount: 8,
  },
  {
    name: "Karndean",
    slug: "karndean",
    tagline: "Design Flooring. Beautifully Crafted.",
    detail: "Hand-crafted wood and stone visuals with LooseLay technology — adhesive-free installation that cuts project timelines in half.",
    productCount: 7,
  },
  {
    name: "Armstrong",
    slug: "armstrong",
    tagline: "Performance Flooring You Can Trust.",
    detail: "Over a century of innovation in resilient flooring. Diamond 10 surface technology for scratch resistance without polish or wax.",
    productCount: 6,
  },
  {
    name: "Tarkett",
    slug: "tarkett",
    tagline: "Good for People and Planet.",
    detail: "Cradle to Cradle certified with integrated acoustic backing achieving up to 19dB impact sound reduction.",
    productCount: 6,
  },
];

const sectors = [
  {
    title: "Office",
    href: "/office-flooring",
    description: "Acoustic performance meets design flexibility for the modern workplace.",
  },
  {
    title: "Retail",
    href: "/retail-flooring",
    description: "Heavy commercial-grade wear layers engineered for high-traffic environments.",
  },
  {
    title: "Healthcare",
    href: "/healthcare-flooring",
    description: "Hygienic, welded-seam flooring with antimicrobial surface treatments.",
  },
  {
    title: "Education",
    href: "/education-flooring",
    description: "Impact-resistant, acoustic flooring built for budget-conscious projects.",
  },
  {
    title: "Hospitality",
    href: "/hospitality-flooring",
    description: "Designer aesthetics with waterproof construction and effortless maintenance.",
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
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Beautiful floors,{" "}
              <span className="text-brand">sorted.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-500 lg:max-w-lg">
              Vinyl tile flooring for commercial spaces. We handle the
              lot&nbsp;&mdash; find the right product, get it to site, lay it
              properly. One call.
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
              { icon: Layers, label: "Any manufacturer", detail: "We pick the right floor, fit for purpose" },
              { icon: Leaf, label: "Est. 1986", detail: "Premrest" },
              { icon: Truck, label: "Australia-wide", detail: "Every state and territory" },
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

      {/* Testimonials */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Testimonials</p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-12 md:text-4xl">
            Don&apos;t take our word for it.
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-lg border border-stone-200/60 bg-cream/50 p-6"
              >
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="size-3.5 text-brand" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-stone-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-800">{t.author}</p>
                    <p className="text-xs text-stone-400">{t.role}, {t.company}</p>
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
