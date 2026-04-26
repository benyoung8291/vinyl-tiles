import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf, ExternalLink } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";

const COMCORK_URL = "https://comcorkflooring.com.au";

export const metadata: Metadata = {
  title:
    "Sustainable Alternative to PVC Vinyl | Cork & Rubber Flooring (Comcork)",
  alternates: { canonical: "/sustainable-alternative" },
  description:
    "Looking for a sustainable, PVC-free alternative to vinyl tile? Comcork is Australian-made cork and rubber flooring with 31 colourways and five surface finishes. View the range and explore the full collection at comcorkflooring.com.au.",
};

const reasons = [
  {
    title: "PVC-free, plasticiser-free",
    text: "Cork and rubber composites with no PVC, no phthalates, and no chlorine chemistry. The right choice if your project specification rules out polyvinyl chloride.",
  },
  {
    title: "Renewable raw materials",
    text: "Cork is harvested from the bark of living oak trees on a 9-year cycle — the tree keeps growing. Rubber components are recycled from end-of-life tyres diverted from landfill.",
  },
  {
    title: "Quieter and warmer underfoot",
    text: "Cork is naturally insulating and acoustically absorbent. Impact noise reduction performs ahead of standard vinyl, and the floor feels softer and warmer in winter.",
  },
  {
    title: "Compostable at end of life",
    text: "When the floor finally retires, the cork and rubber composite biodegrades back into the carbon cycle rather than sitting in landfill for decades like PVC.",
  },
];

const ranges = [
  {
    name: "WalkEasy",
    desc: "Smooth finish optimised for indoor comfort. Lobbies, offices, corridors, and aged care.",
    env: "Indoor",
    thicknesses: "2.5mm · 3.2mm · 4.5mm",
    image: "/images/comcork/range-walkeasy.webp",
  },
  {
    name: "Textured",
    desc: "Hammered surface finish for maximum slip resistance. Indoor and outdoor applications.",
    env: "Indoor & Outdoor",
    thicknesses: "3.2mm · 4.5mm",
    image: "/images/comcork/range-textured.webp",
  },
  {
    name: "Low Profile",
    desc: "Subtle studded surface. Versatile across commercial interiors, retail, and education.",
    env: "Indoor",
    thicknesses: "2.5mm · 3.2mm",
    image: "/images/comcork/range-low-profile.webp",
  },
  {
    name: "AquaDeck",
    desc: "Engineered for extreme wet environments. Impervious to salt water, chlorine, and pool chemicals.",
    env: "Outdoor",
    thicknesses: "4.5mm",
    image: "/images/comcork/range-aquadeck.webp",
  },
  {
    name: "Tactiles",
    desc: "Accessibility compliance — directional and hazard warning tactile indicators for vision-impaired guidance.",
    env: "Indoor & Outdoor",
    thicknesses: "3.2mm · 4.5mm",
    image: "/images/comcork/range-tactiles.webp",
  },
];

const colourways = [
  { name: "Yellow", slug: "yellow" },
  { name: "Cinnamon", slug: "cinnamon" },
  { name: "Fuchsia", slug: "fuchsia" },
  { name: "Lime", slug: "lime" },
  { name: "Coral", slug: "coral" },
  { name: "Tangerine", slug: "tangerine" },
  { name: "Red", slug: "red" },
  { name: "Red Oxide", slug: "red-oxide" },
  { name: "Mocha", slug: "mocha" },
  { name: "Black", slug: "black" },
  { name: "Brunswick Green", slug: "brunswick-green" },
  { name: "Denim", slug: "denim" },
  { name: "Pacific Blue", slug: "pacific-blue" },
  { name: "Taupe", slug: "taupe" },
  { name: "Sand", slug: "sand" },
  { name: "Terracotta", slug: "terracotta" },
  { name: "Ivory", slug: "ivory" },
  { name: "Chocolate", slug: "chocolate" },
  { name: "Charcoal", slug: "charcoal" },
  { name: "Navy Blue", slug: "navy-blue" },
  { name: "Steel Grey", slug: "steel-grey" },
  { name: "Turquoise", slug: "turquoise" },
  { name: "Midnight Blue", slug: "midnight-blue" },
  { name: "Watermelon", slug: "watermelon" },
  { name: "Storm Grey", slug: "storm-grey" },
  { name: "White", slug: "white" },
  { name: "Evergreen", slug: "evergreen" },
  { name: "Jacaranda", slug: "jacaranda" },
  { name: "Sky Blue", slug: "sky-blue" },
  { name: "Silver Fern", slug: "silver-fern" },
  { name: "Tan", slug: "tan" },
];

export default function SustainableAlternativePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-subtle-lines" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 md:pb-24 md:pt-36 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                <Leaf className="size-3.5" />
                Sustainable Alternative
              </p>
              <h1
                className="text-[clamp(2.25rem,5vw,3.5rem)] max-w-3xl font-bold tracking-tight leading-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                A PVC-free alternative to vinyl tile.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                If your project specification rules out PVC, or you just want a floor with a kinder environmental story, cork and rubber composite is the closest like-for-like you will find. Comcork is Australian-made, comes in 31 colourways across five surface finishes, and is supplied and installed by the same team that lays our vinyl tile.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={COMCORK_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                >
                  Explore Comcork
                  <ExternalLink className="size-3.5" />
                </a>
                <Link
                  href="/contact?range=comcork"
                  className="inline-flex items-center gap-2 rounded-md border border-[rgb(230,225,215)] px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[rgb(242,238,228)]"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
                  Submit an Enquiry
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
            <div className="lg:pt-6">
              <div className="rounded-lg border border-[rgb(230,225,215)] p-6" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
                <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
                  The Short Version
                </p>
                <ul className="space-y-3 text-[14px] leading-relaxed" style={{ color: "rgb(55, 50, 45)" }}>
                  <li className="flex items-start gap-3">
                    <span className="text-[12px] font-semibold mt-0.5" style={{ color: "rgb(120, 110, 100)" }}>01</span>
                    <span>No PVC, no phthalates, no chlorine chemistry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[12px] font-semibold mt-0.5" style={{ color: "rgb(120, 110, 100)" }}>02</span>
                    <span>Cork is harvested from living trees on a 9-year cycle.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[12px] font-semibold mt-0.5" style={{ color: "rgb(120, 110, 100)" }}>03</span>
                    <span>Rubber from recycled end-of-life tyres.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[12px] font-semibold mt-0.5" style={{ color: "rgb(120, 110, 100)" }}>04</span>
                    <span>Australian-made. Supplied and installed across Melbourne, Sydney, and Brisbane.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why cork over vinyl */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
                Why Cork &amp; Rubber
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight max-w-xl" style={{ color: "rgb(38, 35, 30)" }}>
                When PVC is not the answer.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                Premium LVT does most of the job for most commercial projects. Cork and rubber composite is for the briefs that need a different answer &mdash; specifications written for Green Star, WELL, or Living Building Challenge, healthcare clients with strict material health policies, and aged care or education clients who weight environmental footprint as much as upfront cost.
              </p>
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

      {/* Product ranges */}
      <section className="border-y border-[rgb(230,225,215)]" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
              The Comcork Range
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight" style={{ color: "rgb(38, 35, 30)" }}>
              Five surface finishes, every commercial brief.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
              The same colour palette runs across every finish, so you can mix surfaces within a project &mdash; smooth in the lobby, textured at the entry, AquaDeck poolside &mdash; and keep the design language consistent.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ranges.map((range) => (
              <div
                key={range.name}
                className="overflow-hidden rounded-lg border border-[rgb(230,225,215)]"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "rgb(242, 238, 228)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={range.image}
                    alt={`Comcork ${range.name} finish`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                      {range.name}
                    </h3>
                    <span
                      className="shrink-0 rounded-full border border-[rgb(230,225,215)] px-2.5 py-0.5 text-[11px] font-medium"
                      style={{ color: "rgb(120, 110, 100)" }}
                    >
                      {range.env}
                    </span>
                  </div>
                  <p className="text-[12px] mb-3" style={{ color: "rgb(120, 110, 100)" }}>
                    {range.thicknesses}
                  </p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                    {range.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colour swatches */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
              Colourways
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-4"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              {colourways.length} colours, every finish.
            </h2>
            <p className="text-[15px] max-w-2xl leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
              The full Comcork palette runs from quiet neutrals to bold accents like Watermelon, Tangerine, and Brunswick Green. Click through to <a href={COMCORK_URL} target="_blank" rel="noopener" className="underline decoration-[rgb(200,195,185)] underline-offset-4 transition-colors hover:text-[rgb(38,35,30)]">comcorkflooring.com.au</a> for high-resolution swatches and physical samples.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {colourways.map((c) => (
              <a
                key={c.slug}
                href={COMCORK_URL}
                target="_blank"
                rel="noopener"
                className="group cursor-pointer overflow-hidden rounded-lg border border-[rgb(230,225,215)] transition-all duration-200 hover:border-[rgb(55,50,45)] hover:shadow-sm"
              >
                <div className="aspect-square overflow-hidden" style={{ backgroundColor: "rgb(242, 238, 228)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/comcork/${c.slug}.webp`}
                    alt={`Comcork ${c.name} colourway`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
                  <p className="text-[13px] font-semibold" style={{ color: "rgb(38, 35, 30)" }}>
                    {c.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vinyl vs Cork comparison */}
      <section style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
              Cork vs Premium LVT
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight" style={{ color: "rgb(38, 35, 30)" }}>
              Honest about the trade-offs.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
              Cork wins on environmental and acoustic performance. Premium LVT wins on photographic timber and stone visuals, broader designer range, and lower upfront cost per square metre. Most projects we quote end up specifying one of each &mdash; cork in the back-of-house and acoustic-sensitive zones, LVT in the public areas where the visual is paramount.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-[rgb(230,225,215)] p-7 lg:p-8" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
              <h3 className="text-lg font-bold tracking-tight mb-4" style={{ color: "rgb(38, 35, 30)" }}>
                Choose Comcork when…
              </h3>
              <ul className="space-y-3 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                <li>The specification rules out PVC, phthalates, or chlorine chemistry</li>
                <li>Acoustic comfort is a top-three priority (aged care, libraries, podcast studios)</li>
                <li>The project is targeting Green Star, WELL, or Living Building credits</li>
                <li>You need a wet-area floor that does not rely on PVC waterproofing</li>
                <li>Tactile compliance for accessibility is part of the brief</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[rgb(230,225,215)] p-7 lg:p-8" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
              <h3 className="text-lg font-bold tracking-tight mb-4" style={{ color: "rgb(38, 35, 30)" }}>
                Stay with vinyl tile when…
              </h3>
              <ul className="space-y-3 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                <li>The visual brief is photographic timber, stone, marble, or terrazzo</li>
                <li>You need spot-replacement of damaged tiles in retail or hospitality fitouts</li>
                <li>Designer-led ranges (Karndean, Interface) are specified by the architect</li>
                <li>Upfront cost per square metre is the dominant constraint</li>
                <li>You are matching an existing vinyl floor in a refurbishment</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/why-vinyl-tiles"
              className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors hover:text-[rgb(38,35,30)]"
              style={{ color: "rgb(55, 50, 45)" }}
            >
              Read the full vinyl tile guide
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Big backlink to Comcork */}
      <section style={{ backgroundColor: "rgb(55, 50, 45)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-white/40">
                <Leaf className="size-3.5" />
                The Full Range Lives Here
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight text-white">
                See every range, finish, and colourway at comcorkflooring.com.au
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/65">
                Technical data sheets, specification documents, slip ratings, acoustic test results, project case studies, and the high-resolution swatches your designer will want are all on the Comcork site.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={COMCORK_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-between gap-4 rounded-md bg-[rgb(252,250,245)] px-7 py-5 transition-all duration-200 hover:bg-white"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                    Visit
                  </span>
                  <span className="text-[15px] font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                    comcorkflooring.com.au
                  </span>
                </div>
                <ArrowUpRight className="size-5 flex-shrink-0" style={{ color: "rgb(38, 35, 30)" }} />
              </a>
              <Link
                href="/contact?range=comcork"
                className="inline-flex items-center justify-between gap-4 rounded-md border border-white/15 px-7 py-5 text-white transition-all duration-200 hover:border-white/30"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-white/45">
                    Or
                  </span>
                  <span className="text-[15px] font-bold tracking-tight">
                    Submit an Enquiry
                  </span>
                </div>
                <ArrowRight className="size-5 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <QuoteCta
        title="Specifying a sustainable floor for your project?"
        description="Submit an enquiry and we will help you weigh cork and vinyl side-by-side, send samples of both, and write a quote that covers either option (or both)."
        buttonText="Submit an Enquiry"
        buttonHref="/contact?range=comcork"
      />
    </>
  );
}
