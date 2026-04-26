import type { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Why Vinyl Tiles? | The Complete Guide to Commercial Vinyl Flooring",
  description:
    "Discover why vinyl tile flooring is the preferred choice for commercial spaces across Australia. Compare LVT, VCT, and vinyl plank options — durability, lifecycle costs, sustainability, slip ratings, and fire compliance explained.",
};

const faqItems = [
  {
    question: "What's the difference between LVT and VCT?",
    answer:
      "LVT (Luxury Vinyl Tile) has multiple layers with a photographic top and a protective wear layer — it looks like real stone or timber. VCT (Vinyl Composition Tile) is solid throughout, made from vinyl, limestone, and plasticiser. Use LVT when the look matters — reception areas, retail, aged care. Use VCT when you need maximum durability on a tighter budget and you don't mind solid colours — hospitals, schools, warehouses. The bonus? VCT can be stripped and re-polished, so it'll often last well past 20 years.",
  },
  {
    question: "How long does commercial vinyl flooring last?",
    answer:
      "Typically 15 to 25 years with proper installation and basic maintenance. VCT lasts longer — often exceeds 25 years if you keep up with stripping and polishing. LVT and vinyl plank depend mainly on the wear layer (we recommend minimum 0.55mm) and how well the subfloor was prepared. So really, longevity comes down to three things: decent thickness, solid prep work, and following the maintenance schedule.",
  },
  {
    question: "Is vinyl tile suitable for healthcare and aged care?",
    answer:
      "It's the default choice in Australian aged care and healthcare. It's hygienic — especially when heat-welded, which prevents bacteria and moisture getting into joints. Slip ratings of R10 or higher are standard, which matters in wet areas and corridors. And if acoustic properties matter to you (quieter is better for residents), many products have backing that cuts impact noise by up to 19dB.",
  },
  {
    question: "What subfloor preparation is needed?",
    answer:
      "This is non-negotiable. The subfloor has to be structurally sound, dry, clean, and level. For concrete, we test moisture levels to AS 1884 — relative humidity needs to sit below 75% RH. If it's higher, we apply a moisture barrier. The surface gets cleaned of cracks, ridges, and dirt, then usually levelled with a cementitious compound to meet the manufacturer's flatness tolerances. Skip this step and you're asking for trouble.",
  },
  {
    question: "Can vinyl tiles be installed over existing flooring?",
    answer:
      "Sometimes. If the old vinyl is firmly bonded, undamaged, and clean, we can install over it. But we'll assess moisture, adhesion, and flatness first — that's non-negotiable. Installing over carpet, deep-grouted ceramic, or damaged floors? No. We'll always recommend a proper site assessment before we commit to anything.",
  },
  {
    question: "What's the maintenance schedule for vinyl tile floors?",
    answer:
      "LVT and vinyl plank are easy — dry mop daily, damp mop occasionally with neutral pH cleaner. Most LVT has a protective polyurethane layer already on it, so no wax or polish needed. VCT needs more attention: sweep daily, damp mop regularly, and re-polish every 6 to 12 months depending on traffic. But that's also why VCT lasts so long.",
  },
  {
    question: "Are vinyl tiles waterproof?",
    answer:
      "The tiles themselves are waterproof. Water won't get through the material. But installation method matters. Glue-down with heat-welded seams is your best bet for wet areas — solid protection. Click-lock floating floors are water-resistant but not completely sealed at the joints, so they're better for dry zones.",
  },
  {
    question: "What fire rating do commercial vinyl tiles need?",
    answer:
      "The National Construction Code (NCC) sets the rules. For most projects — offices, retail, healthcare — Cfl-s1 meets requirements. Escape routes and high-risk areas usually need Bfl-s1. Always check with your building certifier before specifying; they'll tell you exactly what your project needs.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function WhyVinylTilesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-subtle-lines" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 md:pb-24 md:pt-36 lg:px-10">
          <p className="text-[11px] font-medium uppercase tracking-widest mb-5" style={{ color: "rgb(120, 110, 100)" }}>
            The Specifier&rsquo;s Guide
          </p>
          <h1
            className="text-[clamp(2.25rem,5vw,3.5rem)] max-w-4xl tracking-tight font-bold leading-tight mb-6"
            style={{ color: "rgb(38, 35, 30)" }}
          >
            Why premium vinyl tile works.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
            Written for facility managers, property owners, and homeowners who want to specify a floor properly &mdash; not just buy the cheapest option. Compliance, lifecycle, sustainability, and the maintenance reality.
          </p>
        </div>
      </section>

      {/* Why Vinyl Over Alternatives */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-5" style={{ color: "rgb(120, 110, 100)" }}>
                Vs. Alternatives
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight max-w-xl" style={{ color: "rgb(38, 35, 30)" }}>
                How it stacks up.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                Most commercial projects come down to carpet, timber, concrete, or vinyl. Vinyl wins on what matters: lifecycle cost, maintenance burden, speed of install, and design options.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                <strong className="font-semibold" style={{ color: "rgb(55, 50, 45)" }}>Carpet:</strong> Traps dirt and allergens, needs regular deep cleaning, wears out in 7–10 years. Vinyl just needs mopping and lasts 15–25 years.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                <strong className="font-semibold" style={{ color: "rgb(55, 50, 45)" }}>Engineered timber:</strong> Looks good, but it scratches, doesn&apos;t handle moisture well, and costs more. Modern vinyl looks nearly identical and costs a fraction of the price. Plus it won&apos;t warp.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                <strong className="font-semibold" style={{ color: "rgb(55, 50, 45)" }}>Polished concrete:</strong> Feels cold and hard underfoot. Vinyl is warmer, quieter, and kinder to joints — important when people are on their feet all day. You can also change the look without ripping up the floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LVT vs VCT vs Vinyl Plank */}
      <section style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <p className="text-[11px] font-medium uppercase tracking-widest mb-5" style={{ color: "rgb(120, 110, 100)" }}>
            Product Types
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight mb-4 max-w-3xl" style={{ color: "rgb(38, 35, 30)" }}>
            Three options. Pick the right one.
          </h2>
          <p className="mb-14 max-w-2xl text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
            LVT, VCT, or vinyl plank — each is built for different jobs.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "LVT",
                subtitle: "Luxury Vinyl Tile",
                best: "Design-led commercial — offices, retail, hospitality, aged care",
                lifespan: "15–20 years",
                visuals: "Photographic design layer with realistic reproductions",
                cost: "Higher — premium finish and performance",
                format: "Square tiles, 457×457mm or 500×500mm",
              },
              {
                title: "VCT",
                subtitle: "Vinyl Composition Tile",
                best: "High-traffic utility — hospitals, schools, warehouses, corridors",
                lifespan: "20–30 years",
                visuals: "Solid colours and subtle patterns throughout the tile body",
                cost: "Budget-friendly — lowest cost per m²",
                format: "Square tiles, 305×305mm",
              },
              {
                title: "Vinyl Plank",
                subtitle: "Wood-Look Planks",
                best: "Wood-look commercial — coworking, hospitality, residential lobbies",
                lifespan: "15–20 years",
                visuals: "Realistic timber grain with embossed-in-register textures",
                cost: "Mid-range — strong value for the aesthetic outcome",
                format: "Plank, 185×1220mm or 228×1219mm",
              },
            ].map((type) => (
              <div
                key={type.title}
                className="rounded-lg border border-[rgb(230,225,215)] p-7 lg:p-8"
                style={{ backgroundColor: "rgb(252, 250, 245)" }}
              >
                <h3 className="text-lg font-bold tracking-tight mb-1.5" style={{ color: "rgb(38, 35, 30)" }}>
                  {type.title}
                </h3>
                <p className="text-[13px] mb-6" style={{ color: "rgb(120, 110, 100)" }}>
                  {type.subtitle}
                </p>
                <dl className="space-y-5">
                  {[
                    ["Best for", type.best],
                    ["Lifespan", type.lifespan],
                    ["Visuals", type.visuals],
                    ["Cost", type.cost],
                    ["Format", type.format],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[11px] font-medium uppercase tracking-widest mb-1.5" style={{ color: "rgb(120, 110, 100)" }}>
                        {label}
                      </dt>
                      <dd className="text-[14px] leading-relaxed" style={{ color: "rgb(55, 50, 45)" }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-5" style={{ color: "rgb(120, 110, 100)" }}>
                Technical
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight max-w-xl" style={{ color: "rgb(38, 35, 30)" }}>
                What you need to know.
              </h2>
            </div>

            <div className="space-y-10">
              {[
                {
                  title: "Wear Layers: 0.3mm to 0.7mm",
                  content:
                    "This is the protective top coat. 0.3mm works for light traffic. 0.55mm is standard for commercial spaces. 0.7mm if you've got heavy traffic or industrial use. We recommend minimum 0.55mm for most Australian projects.",
                },
                {
                  title: "Slip Ratings: R10, R11, R12+",
                  content:
                    "Under AS 4586, these matter for compliance. R10 covers dry interiors. R11 is mandatory where moisture is a factor — kitchens, bathrooms, entry foyers. Some environments need R12. Check with your building certifier.",
                },
                {
                  title: "Acoustic Properties",
                  content:
                    "Many tiles come with acoustic backing that cuts impact noise by up to 19dB — keeps floors quieter and noise from traveling between levels. If acoustics are critical, look for products tested to AS ISO 717-2 with a Delta Lw of 15dB or higher.",
                },
                {
                  title: "Fire Ratings: Bfl-s1 and Cfl-s1",
                  content:
                    "Cfl-s1 is fine for most commercial areas — offices, retail, healthcare. Bfl-s1 is required for escape routes and corridors. Always check with your building certifier on what your project needs.",
                },
              ].map((spec) => (
                <div key={spec.title} className="pt-6 border-t border-[rgb(230,225,215)]">
                  <h3 className="text-[15px] font-bold tracking-tight mb-3" style={{ color: "rgb(38, 35, 30)" }}>
                    {spec.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                    {spec.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability + Lifecycle */}
      <section style={{ backgroundColor: "rgb(55, 50, 45)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-5 text-white/35">
                Sustainability
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight text-white mb-6">
                Made better now.
              </h2>
              <div className="space-y-4">
                <p className="text-[15px] leading-relaxed text-white/65">
                  Most major manufacturers now include up to 30% recycled content. Many carry FloorScore certification for low VOC — essential if you&apos;re chasing Green Star or WELL.
                </p>
                <p className="text-[15px] leading-relaxed text-white/65">
                  Cradle to Cradle certified options are expanding. They demonstrate commitment to material health, renewable energy, water stewardship, and fair practices.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-5 text-white/35">
                Lifecycle Cost
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight text-white mb-6">
                The real number.
              </h2>
              <div className="space-y-4">
                <p className="text-[15px] leading-relaxed text-white/65">
                  Installation runs a guide of <span className="font-semibold text-white/80">$30&ndash;35/m&sup2;</span> for laying premium LVT &mdash; install only, before floor preparation, takeup, levelling, or trims. Product cost sits on top and varies by range. Over a 15&ndash;25 year life, the annualised cost is genuinely low.
                </p>
                <p className="text-[15px] leading-relaxed text-white/65">
                  Compared to alternatives, carpet costs 40&ndash;60% more over 20 years once you factor in replacement and maintenance. Engineered timber demands ongoing sanding and refinishing. Vinyl gives you the visual at a fraction of the lifecycle cost.
                </p>
                <p className="text-[15px] leading-relaxed text-white/65">
                  Every quote we issue follows a free site inspection in Melbourne, Sydney, or Brisbane. We do not give phone quotes or &ldquo;from $X&rdquo; numbers we walk back later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-5" style={{ color: "rgb(120, 110, 100)" }}>
                FAQ
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight max-w-xl" style={{ color: "rgb(38, 35, 30)" }}>
                Common questions.
              </h2>
            </div>

            <div>
              <Accordion className="divide-y divide-[rgb(230,225,215)]">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger
                      className="py-5 text-[14px] font-semibold hover:opacity-70"
                      style={{ color: "rgb(38, 35, 30)" }}
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-[14px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                      <p>{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta
        title="Ready to specify a floor properly?"
        description="Book a free site inspection in Melbourne, Sydney, or Brisbane. We will measure, assess the substrate, and walk you through specification, lifecycle, and a written quote. Call 1300 207 915 or fill out the form."
        buttonText="Book a Site Inspection"
        buttonHref="/contact"
      />
    </>
  );
}
