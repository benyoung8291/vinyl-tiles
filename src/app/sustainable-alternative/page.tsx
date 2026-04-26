import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf, ExternalLink } from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";

const COMCORK_URL = "https://comcorkflooring.com.au";

export const metadata: Metadata = {
  title:
    "PVC-Free Alternatives to Vinyl Tile | Comcork & Nora Rubber Flooring",
  alternates: { canonical: "/sustainable-alternative" },
  description:
    "Two PVC-free alternatives to vinyl tile: Comcork (Australian-made cork and rubber composite, 31 colourways) and Nora by Interface (German-engineered rubber, 12 collections). Specify either, or both.",
};

const NORA_URL = "https://www.interface.com/AU/en-AU/resilient/nora-rubber-benefits.html";

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

const noraCollections = [
  {
    name: "noraplan sentica",
    family: "noraplan (sheet & plank)",
    desc: "All-rounder rubber sheet with a wide colour range. The default specification across healthcare, education, and aged care.",
    image: "/images/nora/noraplan-sentica.jpg",
  },
  {
    name: "noraplan environcare",
    family: "noraplan (sheet & plank)",
    desc: "Carbon-negative formulation in soft, nature-led colourways. Designed for sustainability-led specifications.",
    image: "/images/nora/noraplan-environcare.jpg",
  },
  {
    name: "noraplan convia",
    family: "noraplan (sheet & plank)",
    desc: "Rubber plank format with timber-look visuals — biophilic design without the timber maintenance.",
    image: "/images/nora/noraplan-convia.jpg",
  },
  {
    name: "norament 926",
    family: "norament (tile)",
    desc: "The classic round-stud norament tile in 20 colourways. Heavy-duty, no-coating rubber for high-traffic public buildings.",
    image: "/images/nora/norament-926.jpg",
  },
  {
    name: "norament 825",
    family: "norament (tile)",
    desc: "Hard-wearing round-stud rubber tile in eight neutrals. The cost-conscious norament option for back-of-house and service areas.",
    image: "/images/nora/norament-825.jpg",
  },
  {
    name: "norament 926 kivo",
    family: "norament (tile)",
    desc: "Mineral-flecked aesthetic on the 926 base — modern visual cue with the same proven rubber substrate.",
    image: "/images/nora/norament-kivo.jpg",
  },
  {
    name: "norament 975 LL",
    family: "norament (tile)",
    desc: "Loose-lay rubber tile for fast install with no adhesive. Ideal for refurbishments where downtime has to stay tight.",
    image: "/images/nora/norament-975.jpg",
  },
  {
    name: "norament grano",
    family: "norament (tile)",
    desc: "Hammered-surface rubber tile with R10 slip rating and 33 colourways — the broadest design palette in the norament range.",
    image: "/images/nora/norament-grano.jpg",
  },
  {
    name: "norament castello",
    family: "norament (tile)",
    desc: "Stone-inspired rubber tile with subtle texture. Good fit for civic, museum, and gallery briefs.",
    image: "/images/nora/norament-castello.jpg",
  },
  {
    name: "norament arago",
    family: "norament (tile)",
    desc: "Plank-format norament with linear visual language. Reads as timber from a distance, performs as rubber underfoot.",
    image: "/images/nora/norament-arago.jpg",
  },
  {
    name: "norament pado",
    family: "norament (tile)",
    desc: "Mid-scale stone-look surface with 16 colour options. Workhorse for corridors, foyers, and high-traffic public spaces.",
    image: "/images/nora/norament-pado.jpg",
  },
  {
    name: "norament satura",
    family: "norament (tile)",
    desc: "Hammered-surface premium tile with 22 colourways. The design-led end of the norament catalogue.",
    image: "/images/nora/norament-satura.jpg",
  },
];

const norament926Palette = [
  { name: "Aluminium", code: "0007", slug: "aluminium" },
  { name: "Ash", code: "5337", slug: "ash" },
  { name: "Biscuit", code: "5338", slug: "biscuit" },
  { name: "Black", code: "0702", slug: "black" },
  { name: "Cloudy", code: "5335", slug: "cloudy" },
  { name: "Dust Grey", code: "0884", slug: "dust-grey" },
  { name: "Evergreen", code: "5343", slug: "evergreen" },
  { name: "Horizon", code: "5340", slug: "horizon" },
  { name: "Maize", code: "5341", slug: "maize" },
  { name: "Oatmilk", code: "0170", slug: "oatmilk" },
  { name: "Pistachio", code: "5342", slug: "pistachio" },
  { name: "Platinum Grey", code: "0882", slug: "platinum-grey" },
  { name: "Rhino", code: "5336", slug: "rhino" },
  { name: "Sage", code: "2070", slug: "sage" },
  { name: "Slate Blue", code: "0319", slug: "slate-blue" },
  { name: "Slate Grey", code: "0716", slug: "slate-grey" },
  { name: "Spice", code: "5339", slug: "spice" },
  { name: "Steel Blue", code: "0733", slug: "steel-blue" },
  { name: "Stone Grey", code: "0749", slug: "stone-grey" },
  { name: "Stonewash", code: "6173", slug: "stonewash" },
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
                Sustainable Alternatives
              </p>
              <h1
                className="text-[clamp(2.25rem,5vw,3.5rem)] max-w-3xl font-bold tracking-tight leading-tight"
                style={{ color: "rgb(38, 35, 30)" }}
              >
                PVC-free alternatives to vinyl tile.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                If your project specification rules out PVC, two alternatives carry the same supply-and-install model and meet most commercial briefs. <strong className="font-semibold" style={{ color: "rgb(55, 50, 45)" }}>Comcork</strong> &mdash; Australian-made cork and rubber composite, 31 colourways. <strong className="font-semibold" style={{ color: "rgb(55, 50, 45)" }}>Nora by Interface</strong> &mdash; German-engineered rubber flooring with twelve collections and a carbon-negative product line.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#comcork"
                  className="inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                >
                  Comcork (cork &amp; rubber)
                  <ArrowRight className="size-3.5" />
                </a>
                <a
                  href="#nora"
                  className="inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-6 py-3 text-[14px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
                >
                  Nora by Interface (rubber)
                  <ArrowRight className="size-3.5" />
                </a>
                <Link
                  href="/contact?range=alternatives"
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
                    <span>Cork harvested from living trees; rubber from recycled tyres.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[12px] font-semibold mt-0.5" style={{ color: "rgb(120, 110, 100)" }}>03</span>
                    <span>Nora rubber: carbon-negative product line, R11 slip rating, 70+ year track record.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[12px] font-semibold mt-0.5" style={{ color: "rgb(120, 110, 100)" }}>04</span>
                    <span>Both supplied and installed by us across Melbourne, Sydney, and Brisbane.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why rubber & cork over vinyl */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
                Why Rubber &amp; Cork
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight max-w-xl" style={{ color: "rgb(38, 35, 30)" }}>
                When PVC is not the answer.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                Premium LVT does most of the job for most commercial projects. Rubber and cork-rubber composite is for the briefs that need a different answer &mdash; specifications written for Green Star, WELL, or Living Building Challenge, healthcare clients with strict material health policies, and aged care or education clients who weight environmental footprint as much as upfront cost.
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

      {/* Comcork ranges */}
      <section id="comcork" className="border-y border-[rgb(230,225,215)] scroll-mt-20" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
              Alternative One &middot; Comcork (Australian Cork &amp; Rubber)
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight" style={{ color: "rgb(38, 35, 30)" }}>
              Five surface finishes, every commercial brief.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
              Comcork is Australian-made, available in 31 colourways across five surface finishes. The same colour palette runs across every finish, so you can mix surfaces within a project &mdash; smooth in the lobby, textured at the entry, AquaDeck poolside &mdash; and keep the design language consistent.
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

      {/* Comcork colour swatches */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
              Comcork Colourways
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-4"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              {colourways.length} Comcork colours, every finish.
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

      {/* Nora by Interface — collections */}
      <section id="nora" className="border-y border-[rgb(230,225,215)] scroll-mt-20" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
              Alternative Two &middot; Nora by Interface (German Rubber)
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight" style={{ color: "rgb(38, 35, 30)" }}>
              The healthcare-grade rubber benchmark.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
              Nora has been making rubber flooring in Germany for over 70 years and is now part of Interface. The product is dense, elastic, and joint-friendly &mdash; specified into hospitals, laboratories, and public buildings worldwide. Two product families: <strong className="font-semibold" style={{ color: "rgb(55, 50, 45)" }}>noraplan</strong> (sheet and plank) and <strong className="font-semibold" style={{ color: "rgb(55, 50, 45)" }}>norament</strong> (tile). Twelve collections spanning the most demanding commercial briefs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={NORA_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-[rgb(55,50,45)] px-5 py-2.5 text-[13px] font-semibold text-[rgb(252,250,245)] transition-colors hover:bg-[rgb(38,35,30)]"
              >
                Explore Nora at interface.com
                <ExternalLink className="size-3.5" />
              </a>
              <Link
                href="/contact?range=nora"
                className="inline-flex items-center gap-2 rounded-md border border-[rgb(230,225,215)] px-5 py-2.5 text-[13px] font-medium transition-colors hover:bg-[rgb(242,238,228)]"
                style={{ color: "rgb(55, 50, 45)" }}
              >
                Request Nora samples
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {noraCollections.map((c) => (
              <a
                key={c.name}
                href={NORA_URL}
                target="_blank"
                rel="noopener"
                className="group overflow-hidden rounded-lg border border-[rgb(230,225,215)] transition-all duration-200 hover:border-[rgb(200,195,185)] hover:shadow-sm"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "rgb(242, 238, 228)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={`${c.name} rubber flooring by Nora / Interface`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <p className="text-[11px] font-medium uppercase tracking-widest mb-2" style={{ color: "rgb(120, 110, 100)" }}>
                    {c.family}
                  </p>
                  <h3 className="text-base font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                    {c.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                    {c.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide transition-all duration-200 group-hover:gap-3" style={{ color: "rgb(55, 50, 45)" }}>
                    View on Interface
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Nora palette: norament 926 */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
              Featured Nora Palette
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight mb-4"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              norament 926 &mdash; the {norament926Palette.length}-colour palette.
            </h2>
            <p className="text-[15px] max-w-2xl leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
              norament 926 is the iconic round-stud Nora tile and the most commonly specified collection in Australia. Click any swatch to view it on <a href={NORA_URL} target="_blank" rel="noopener" className="underline decoration-[rgb(200,195,185)] underline-offset-4 transition-colors hover:text-[rgb(38,35,30)]">interface.com</a>, or browse the other eleven Nora collections above.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {norament926Palette.map((c) => (
              <a
                key={c.slug}
                href={NORA_URL}
                target="_blank"
                rel="noopener"
                className="group cursor-pointer overflow-hidden rounded-lg border border-[rgb(230,225,215)] transition-all duration-200 hover:border-[rgb(55,50,45)] hover:shadow-sm"
              >
                <div className="aspect-square overflow-hidden" style={{ backgroundColor: "rgb(242, 238, 228)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/nora/926-${c.slug}.jpg`}
                    alt={`norament 926 ${c.name} rubber tile`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
                  <p className="text-[13px] font-semibold" style={{ color: "rgb(38, 35, 30)" }}>
                    {c.name}
                  </p>
                  <p className="mt-0.5 text-[11px]" style={{ color: "rgb(120, 110, 100)" }}>
                    {c.code}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Picking between alternatives */}
      <section style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
              Comcork vs Nora vs Premium LVT
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight" style={{ color: "rgb(38, 35, 30)" }}>
              Honest about the trade-offs.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
              Premium LVT does most jobs cheapest. Comcork is the warmer, quieter, Australian-made option. Nora is the heavy-duty rubber benchmark for hospitals and high-traffic public buildings. Many projects we quote end up specifying one in the public areas and another in back-of-house &mdash; we will help you weigh all three.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-[rgb(230,225,215)] p-7 lg:p-8" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
              <h3 className="text-lg font-bold tracking-tight mb-4" style={{ color: "rgb(38, 35, 30)" }}>
                Choose Comcork when…
              </h3>
              <ul className="space-y-3 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                <li>You want an Australian-made supply chain with a renewable raw material</li>
                <li>Acoustic comfort and warmth underfoot are priorities (aged care, libraries, studios)</li>
                <li>You need a colour palette with bold accent options across 31 hues</li>
                <li>Tactile compliance for accessibility is part of the brief (Tactiles range)</li>
                <li>Wet-area or outdoor zones are in scope (AquaDeck range)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[rgb(230,225,215)] p-7 lg:p-8" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
              <h3 className="text-lg font-bold tracking-tight mb-4" style={{ color: "rgb(38, 35, 30)" }}>
                Choose Nora when…
              </h3>
              <ul className="space-y-3 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                <li>The brief is hospital-grade or laboratory-grade durability</li>
                <li>R11 slip rating is required across wet and clinical areas</li>
                <li>You need a no-coatings, no-polish floor that simplifies maintenance over decades</li>
                <li>Carbon-negative product is on the spec sheet (noraplan environcare)</li>
                <li>The architect is specifying off the global rubber benchmark and wants documented test data</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[rgb(230,225,215)] p-7 lg:p-8" style={{ backgroundColor: "rgb(252, 250, 245)" }}>
              <h3 className="text-lg font-bold tracking-tight mb-4" style={{ color: "rgb(38, 35, 30)" }}>
                Stay with vinyl tile when…
              </h3>
              <ul className="space-y-3 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                <li>The visual brief is photographic timber, stone, marble, or terrazzo</li>
                <li>You need spot-replacement of damaged tiles in retail or hospitality fitouts</li>
                <li>Designer-led ranges (Karndean, Interface LVT) are specified by the architect</li>
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

      {/* Big backlinks to both alternatives */}
      <section style={{ backgroundColor: "rgb(55, 50, 45)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-white/40">
              <Leaf className="size-3.5" />
              The Full Range Lives at Source
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight text-white">
              Technical data, samples, and the full catalogue.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-white/65">
              Both Comcork and Nora maintain comprehensive technical libraries on their own sites &mdash; data sheets, slip ratings, acoustic test results, certifications, and project case studies. We supply and install both. Visit either site for specification documents, or send us the brief and we will price both side-by-side.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={COMCORK_URL}
              target="_blank"
              rel="noopener"
              className="group flex flex-col gap-4 rounded-md bg-[rgb(252,250,245)] p-7 transition-all duration-200 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-widest mb-1.5" style={{ color: "rgb(120, 110, 100)" }}>
                    Comcork &middot; Australian Cork &amp; Rubber
                  </p>
                  <p className="text-[18px] font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                    comcorkflooring.com.au
                  </p>
                </div>
                <ArrowUpRight className="size-5 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: "rgb(38, 35, 30)" }} />
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                31 colourways, five surface finishes, all data sheets and project case studies.
              </p>
            </a>
            <a
              href={NORA_URL}
              target="_blank"
              rel="noopener"
              className="group flex flex-col gap-4 rounded-md bg-[rgb(252,250,245)] p-7 transition-all duration-200 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-widest mb-1.5" style={{ color: "rgb(120, 110, 100)" }}>
                    Nora by Interface &middot; German Rubber
                  </p>
                  <p className="text-[18px] font-bold tracking-tight" style={{ color: "rgb(38, 35, 30)" }}>
                    interface.com / nora rubber
                  </p>
                </div>
                <ArrowUpRight className="size-5 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: "rgb(38, 35, 30)" }} />
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                Twelve collections across noraplan and norament, including carbon-negative environcare.
              </p>
            </a>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact?range=alternatives"
              className="inline-flex items-center gap-3 rounded-md border border-white/15 px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:border-white/30"
            >
              Or submit an enquiry &mdash; we will price both
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <QuoteCta
        title="Specifying a PVC-free floor for your project?"
        description="Tell us the brief and we will weigh Comcork, Nora, and premium LVT side-by-side, send samples of any combination, and write a quote that covers whichever option (or mix) suits the project."
        buttonText="Submit an Enquiry"
        buttonHref="/contact?range=alternatives"
      />
    </>
  );
}
