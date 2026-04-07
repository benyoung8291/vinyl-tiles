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
      "LVT (Luxury Vinyl Tile) is a multi-layer product with a photographic design layer and clear wear layer, offering realistic stone and timber visuals. VCT (Vinyl Composition Tile) is a single-layer, through-body product made from a blend of vinyl resins, limestone, and plasticiser. LVT is the better choice when aesthetics are a priority — think reception areas, retail spaces, and aged care facilities. VCT excels in high-traffic utility environments such as hospitals, schools, and warehouses, where budget efficiency and extreme durability matter most. VCT can also be stripped and re-polished, extending its service life well beyond 20 years.",
  },
  {
    question: "How long does commercial vinyl flooring last?",
    answer:
      "With proper installation and routine maintenance, commercial-grade vinyl tile flooring typically lasts 15 to 25 years. VCT products often exceed 25 years when maintained with regular stripping and polishing cycles. LVT and vinyl plank products with wear layers of 0.55mm or above generally achieve 15 to 20 years in heavy commercial traffic. The key factors are wear layer thickness, subfloor preparation quality, foot traffic volume, and adherence to the manufacturer's maintenance schedule.",
  },
  {
    question: "Is vinyl tile suitable for healthcare and aged care?",
    answer:
      "Absolutely. Vinyl tile is one of the most widely specified flooring products in Australian healthcare and aged care facilities. It offers seamless hygiene — particularly when heat-welded — preventing bacteria and moisture from penetrating joints. Many commercial vinyl products carry slip ratings of R10 or higher, critical for wet areas and corridors. Acoustic-backed options reduce impact sound, improving comfort for residents and patients.",
  },
  {
    question: "What subfloor preparation is needed?",
    answer:
      "Subfloor preparation is the single most important factor in a successful vinyl tile installation. The subfloor must be structurally sound, dry, clean, and level. For concrete substrates, moisture testing (to AS 1884) is essential — relative humidity must typically be below 75% RH, or a moisture barrier must be applied. The surface should be free of cracks, ridges, and contaminants. Most installations require the application of a cementitious levelling compound to achieve the flatness tolerance required by the tile manufacturer.",
  },
  {
    question: "Can vinyl tiles be installed over existing flooring?",
    answer:
      "In some cases, yes. Vinyl tiles can be installed over existing vinyl, provided the old flooring is well-bonded, free of damage, and thoroughly cleaned. The existing floor must be assessed for moisture, adhesion integrity, and flatness. However, installing over carpet, ceramic tiles with deep grout lines, or damaged flooring is not recommended. A professional site assessment is always recommended.",
  },
  {
    question: "What's the maintenance schedule for vinyl tile floors?",
    answer:
      "For LVT and vinyl plank, daily dry mopping and periodic damp mopping with a neutral pH cleaner is sufficient. Most LVT products feature a factory-applied polyurethane surface treatment that eliminates the need for polish or wax. For VCT, the maintenance schedule includes daily sweeping, regular damp mopping, and periodic stripping and re-polishing (typically every 6 to 12 months depending on traffic).",
  },
  {
    question: "Are vinyl tiles waterproof?",
    answer:
      "Most commercial LVT and vinyl plank products are waterproof at the surface level — water will not penetrate the tile itself. However, the installation system matters. Standard glue-down installations with heat-welded seams offer the best moisture protection and are recommended for wet areas. Click-lock floating installations are water-resistant but not fully waterproof at the joints.",
  },
  {
    question: "What fire rating do commercial vinyl tiles need?",
    answer:
      "Under the National Construction Code (NCC) and Australian Standard AS ISO 9239.1, commercial flooring must meet minimum critical radiant flux requirements. For most commercial applications including offices, retail, and healthcare, a Cfl-s1 rating is sufficient. Higher-risk environments such as escape routes generally require Bfl-s1 rated products. Always verify requirements with your building certifier.",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 pt-[72px]">
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px]" />
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:pb-28 md:pt-24 lg:px-10 lg:pt-28">
          <p className="text-editorial-caption text-brand-light mb-6">
            The Complete Guide
          </p>
          <h1 className="text-editorial-display text-white max-w-4xl">
            Why choose
            <br />
            vinyl tile flooring?
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-400">
            The smart, durable, and cost-effective choice for commercial spaces
            across Australia.
          </p>
        </div>
      </section>

      {/* Why Vinyl Over Alternatives */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] lg:gap-24">
            <div>
              <p className="text-editorial-caption text-brand mb-4">
                Vs. Alternatives
              </p>
              <h2 className="text-editorial-heading text-stone-950">
                The case for
                <br />
                vinyl tile.
              </h2>
            </div>
            <div className="space-y-6 border-t border-stone-200/60 pt-8 lg:border-t-0 lg:pt-0">
              <p className="text-editorial-body text-stone-500">
                When specifying flooring for a commercial project, the decision
                often comes down to carpet, timber, polished concrete, or vinyl
                tile. Each has its place, but vinyl tile consistently outperforms
                the alternatives on the metrics that matter most: total lifecycle
                cost, maintenance burden, installation speed, and design versatility.
              </p>
              <p className="text-editorial-body text-stone-500">
                <strong className="font-semibold text-stone-800">
                  Compared to commercial carpet,
                </strong>{" "}
                vinyl tile is dramatically easier to maintain. Carpet traps dirt,
                allergens, and moisture, requiring regular deep cleaning and
                replacement every 7 to 10 years. Vinyl tile needs only routine
                mopping and can last 15 to 25 years with minimal upkeep.
              </p>
              <p className="text-editorial-body text-stone-500">
                <strong className="font-semibold text-stone-800">
                  Compared to engineered timber,
                </strong>{" "}
                vinyl tile delivers comparable visual appeal at a fraction of the
                cost. Timber floors are susceptible to scratching, water damage,
                and expansion. Modern luxury vinyl tile replicates the look and
                texture of timber with remarkable authenticity, while offering
                superior water resistance and dimensional stability.
              </p>
              <p className="text-editorial-body text-stone-500">
                <strong className="font-semibold text-stone-800">
                  Compared to polished concrete,
                </strong>{" "}
                vinyl tile is warmer underfoot, quieter, and far more forgiving
                on joints — an important consideration where staff stand for
                extended periods. Vinyl tile offers acoustic benefits, integrated
                comfort, and the ability to change the look of a space without
                demolishing the floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LVT vs VCT vs Vinyl Plank */}
      <section className="bg-gradient-to-b from-brand-50/30 to-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <p className="text-editorial-caption text-brand mb-4">
            Product Types
          </p>
          <h2 className="text-editorial-heading text-stone-950 mb-6 max-w-2xl">
            LVT vs VCT vs Vinyl Plank
          </h2>
          <p className="mb-16 max-w-2xl text-[0.9375rem] leading-relaxed text-stone-500">
            Not all vinyl flooring is the same. Understanding the differences
            helps you specify the right product for your application.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "LVT",
                subtitle: "Luxury Vinyl Tile",
                best: "Design-led commercial — offices, retail, hospitality, aged care",
                lifespan: "15–20 years",
                visuals: "Photographic design layer with realistic reproductions",
                cost: "Higher — premium finish and performance",
                format: "Square tiles, 457\u00d7457mm or 500\u00d7500mm",
              },
              {
                title: "VCT",
                subtitle: "Vinyl Composition Tile",
                best: "High-traffic utility — hospitals, schools, warehouses, corridors",
                lifespan: "20–30 years",
                visuals: "Solid colours and subtle patterns throughout the tile body",
                cost: "Budget-friendly — lowest cost per m\u00B2",
                format: "Square tiles, 305\u00d7305mm",
              },
              {
                title: "Vinyl Plank",
                subtitle: "Wood-Look Planks",
                best: "Wood-look commercial — coworking, hospitality, residential lobbies",
                lifespan: "15–20 years",
                visuals: "Realistic timber grain with embossed-in-register textures",
                cost: "Mid-range — strong value for the aesthetic outcome",
                format: "Plank, 185\u00d71220mm or 228\u00d71219mm",
              },
            ].map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-stone-200/60 bg-white p-8 shadow-sm lg:p-10"
              >
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-stone-900">
                  {type.title}
                </h3>
                <p className="mt-1 text-sm text-stone-400">{type.subtitle}</p>
                <dl className="mt-8 space-y-5">
                  {[
                    ["Best for", type.best],
                    ["Lifespan", type.lifespan],
                    ["Visuals", type.visuals],
                    ["Cost", type.cost],
                    ["Format", type.format],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-stone-700">
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
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] lg:gap-24">
            <div>
              <p className="text-editorial-caption text-brand mb-4">
                Technical
              </p>
              <h2 className="text-editorial-heading text-stone-950">
                Commercial-grade
                <br />
                performance.
              </h2>
            </div>

            <div className="space-y-16">
              {[
                {
                  title: "Wear Layers: 0.3mm to 0.7mm",
                  content:
                    "The wear layer is the transparent top coat that protects the design layer. A 0.3mm wear layer suits light commercial applications. A 0.55mm wear layer is the standard for general commercial use. A 0.7mm wear layer is recommended for heavy commercial and industrial environments. For most Australian projects, we recommend a minimum 0.55mm wear layer.",
                },
                {
                  title: "Slip Ratings: R10, R11, and Beyond",
                  content:
                    "Slip resistance is classified under AS 4586 and is critical for compliance. R10 is the minimum for most dry commercial interiors. R11 is required where water or contaminants may be present — commercial kitchens, bathrooms, laundries, and entrance foyers. Some specialist environments may require R12 or higher.",
                },
                {
                  title: "Acoustic Properties",
                  content:
                    "Many commercial vinyl tiles are available with integrated acoustic backing layers that reduce impact sound by up to 19dB. This reduces noise transfer between floors and creates a quieter environment. For projects with specific acoustic requirements, look for products tested to AS ISO 717-2 with a Delta Lw of 15dB or higher.",
                },
                {
                  title: "Fire Ratings: Bfl-s1 and Cfl-s1",
                  content:
                    "Cfl-s1 indicates satisfactory fire behaviour and low smoke production — suitable for most general commercial areas. Bfl-s1 is required for escape routes, public corridors, and high-risk building classifications. Always confirm requirements with your building certifier before specifying.",
                },
              ].map((spec) => (
                <div key={spec.title} className="border-t border-stone-200/60 pt-8">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-stone-900">
                    {spec.title}
                  </h3>
                  <p className="mt-4 text-editorial-body text-stone-500">
                    {spec.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability + Lifecycle */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-editorial-caption text-brand-light mb-4">
                Sustainability
              </p>
              <h2 className="text-editorial-heading text-white mb-8">
                Responsible by design.
              </h2>
              <div className="space-y-5">
                <p className="text-[0.9375rem] leading-relaxed text-stone-400">
                  Leading manufacturers now incorporate up to 30% recycled
                  content. Many products carry FloorScore certification for low
                  VOC emissions — essential for Green Star and WELL projects.
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-stone-400">
                  Circular economy programs are expanding. Cradle to Cradle
                  certified products demonstrate commitment to material health,
                  renewable energy, water stewardship, and social fairness.
                </p>
              </div>
            </div>

            <div>
              <p className="text-editorial-caption text-brand-light mb-4">
                Lifecycle Cost
              </p>
              <h2 className="text-editorial-heading text-white mb-8">
                The true cost of your floor.
              </h2>
              <div className="space-y-5">
                <p className="text-[0.9375rem] leading-relaxed text-stone-400">
                  Supply starts from <span className="font-semibold text-white">$45/m&sup2;</span>, with
                  installation from <span className="font-semibold text-white">$18/m&sup2;</span>. With
                  a 15–20 year service life, the annualised cost is remarkably
                  low.
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-stone-400">
                  Over 20 years, carpet often costs 40–60% more when all costs
                  are accounted for. Engineered timber sits at $80–$120/m&sup2; with
                  ongoing sanding and recoating costs. Vinyl tile delivers the
                  visual outcome at significantly lower lifecycle cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] lg:gap-24">
            <div>
              <p className="text-editorial-caption text-brand mb-4">FAQ</p>
              <h2 className="text-editorial-heading text-stone-950">
                Common
                <br />
                questions.
              </h2>
            </div>

            <div>
              <Accordion className="divide-y divide-stone-200/80">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="py-6 text-[0.9375rem] font-semibold tracking-[-0.01em] text-stone-900 hover:text-brand">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-stone-500">
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
        title="Ready to specify vinyl tile?"
        description="Talk to our team about product selection, pricing, and professional installation."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
