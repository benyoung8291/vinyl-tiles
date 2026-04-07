import type { Metadata } from "next";
import Link from "next/link";
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
      "Absolutely. Vinyl tile is one of the most widely specified flooring products in Australian healthcare and aged care facilities. It offers seamless hygiene — particularly when heat-welded — preventing bacteria and moisture from penetrating joints. Many commercial vinyl products carry slip ratings of R10 or higher, critical for wet areas and corridors. Acoustic-backed options reduce impact sound, improving comfort for residents and patients. Products are also available with integrated antimicrobial treatments and meet the stringent fire safety requirements under the National Construction Code.",
  },
  {
    question: "What subfloor preparation is needed?",
    answer:
      "Subfloor preparation is the single most important factor in a successful vinyl tile installation. The subfloor must be structurally sound, dry, clean, and level. For concrete substrates, moisture testing (to AS 1884) is essential — relative humidity must typically be below 75% RH, or a moisture barrier must be applied. The surface should be free of cracks, ridges, and contaminants. Most installations require the application of a cementitious levelling compound to achieve the flatness tolerance required by the tile manufacturer (generally 3mm over 3 metres). Timber subfloors usually need an overlay of fibre-cement sheeting before vinyl can be laid.",
  },
  {
    question: "Can vinyl tiles be installed over existing flooring?",
    answer:
      "In some cases, yes. Vinyl tiles can be installed over existing vinyl, provided the old flooring is well-bonded, free of damage, and thoroughly cleaned. The existing floor must be assessed for moisture, adhesion integrity, and flatness. However, installing over carpet, ceramic tiles with deep grout lines, or damaged flooring is not recommended. Laying over existing flooring can also increase the finished floor height, which may affect door clearances and transitions to adjacent rooms. A professional site assessment is always recommended to determine whether overlay installation is suitable for your project.",
  },
  {
    question: "What's the maintenance schedule for vinyl tile floors?",
    answer:
      "For LVT and vinyl plank, daily dry mopping and periodic damp mopping with a neutral pH cleaner is sufficient. Most LVT products feature a factory-applied polyurethane surface treatment that eliminates the need for polish or wax. For VCT, the maintenance schedule includes daily sweeping, regular damp mopping, and periodic stripping and re-polishing (typically every 6 to 12 months depending on traffic). Both product types should be protected from excessive grit with entrance matting, and heavy furniture should use appropriate floor protectors. Following the manufacturer's maintenance guide is essential to uphold the product warranty.",
  },
  {
    question: "Are vinyl tiles waterproof?",
    answer:
      "Most commercial LVT and vinyl plank products are waterproof at the surface level — water will not penetrate the tile itself. However, the installation system matters. Standard glue-down installations with heat-welded seams offer the best moisture protection and are recommended for wet areas such as kitchens, bathrooms, and laundries. Click-lock floating installations are water-resistant but not fully waterproof at the joints. VCT is inherently water-resistant but joints are not sealed. For areas with standing water or frequent wet cleaning, a fully adhered installation with welded seams is the recommended approach.",
  },
  {
    question: "What fire rating do commercial vinyl tiles need?",
    answer:
      "Under the National Construction Code (NCC) and Australian Standard AS ISO 9239.1, commercial flooring must meet minimum critical radiant flux requirements. For most commercial applications including offices, retail, and healthcare, a Cfl-s1 rating is sufficient. Higher-risk environments such as escape routes and public corridors in Class 2-9 buildings generally require Bfl-s1 rated products. The 's1' designation indicates low smoke production. Always verify the specific requirements with your building certifier, as fire rating obligations vary by building classification and use. Reputable commercial vinyl products will carry third-party test certificates confirming their fire classification.",
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

      {/* Page Header */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why Choose Vinyl Tile Flooring?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            The smart, durable, and cost-effective flooring choice for
            commercial spaces across Australia.
          </p>
        </div>
      </section>

      {/* Why Vinyl Tile Over Alternatives */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Vinyl Tile Over the Alternatives
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              When specifying flooring for a commercial project, the decision
              often comes down to carpet, timber, polished concrete, or vinyl
              tile. Each has its place, but vinyl tile consistently outperforms
              the alternatives on the metrics that matter most to facility
              managers and project managers: total lifecycle cost, maintenance
              burden, installation speed, and design versatility.
            </p>
            <p>
              <strong className="text-foreground">
                Compared to commercial carpet,
              </strong>{" "}
              vinyl tile is dramatically easier to maintain. Carpet traps dirt,
              allergens, and moisture, requiring regular deep cleaning and
              replacement every 7 to 10 years in high-traffic commercial
              settings. Vinyl tile, by contrast, needs only routine mopping and
              can last 15 to 25 years with minimal upkeep. In healthcare, aged
              care, and food service environments, carpet simply is not a viable
              option — vinyl tile offers the hygienic, sealed surface these
              sectors demand.
            </p>
            <p>
              <strong className="text-foreground">
                Compared to engineered timber and hardwood,
              </strong>{" "}
              vinyl tile delivers comparable visual appeal at a fraction of the
              cost and maintenance overhead. Timber floors are susceptible to
              scratching, water damage, and expansion in humid conditions. They
              require periodic sanding and recoating — a disruptive process in
              any operating commercial facility. Modern luxury vinyl tile
              replicates the look and texture of timber with remarkable
              authenticity, while offering superior water resistance and
              dimensional stability. Installation is faster, too, which means
              less downtime for your business.
            </p>
            <p>
              <strong className="text-foreground">
                Compared to polished concrete,
              </strong>{" "}
              vinyl tile is warmer underfoot, quieter, and far more forgiving on
              joints and legs — an important consideration in workplaces where
              staff stand for extended periods. Polished concrete can look
              stunning in certain settings, but it is unforgiving if anything is
              dropped, it amplifies noise, and remediation of cracks or
              imperfections is costly. Vinyl tile offers acoustic benefits,
              integrated comfort, and the ability to change the look of a space
              without demolishing the floor.
            </p>
          </div>
        </div>
      </section>

      {/* LVT vs VCT vs Vinyl Plank */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            LVT vs VCT vs Vinyl Plank: Which Is Right for Your Project?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Not all vinyl flooring is the same. Understanding the differences
            between LVT, VCT, and vinyl plank helps you specify the right
            product for your application, budget, and performance requirements.
          </p>

          {/* Comparison Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {/* LVT */}
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                LVT — Luxury Vinyl Tile
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Best for:</span>{" "}
                  Design-led commercial spaces — offices, retail, hospitality,
                  aged care
                </li>
                <li>
                  <span className="font-medium text-foreground">Lifespan:</span>{" "}
                  15–20 years
                </li>
                <li>
                  <span className="font-medium text-foreground">Visuals:</span>{" "}
                  Photographic design layer with realistic stone and timber
                  reproductions
                </li>
                <li>
                  <span className="font-medium text-foreground">Cost:</span>{" "}
                  Higher — premium finish and performance
                </li>
                <li>
                  <span className="font-medium text-foreground">Format:</span>{" "}
                  Square tiles, typically 457&times;457mm or 500&times;500mm
                </li>
              </ul>
            </div>

            {/* VCT */}
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                VCT — Vinyl Composition Tile
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Best for:</span>{" "}
                  High-traffic utility — hospitals, schools, warehouses,
                  corridors
                </li>
                <li>
                  <span className="font-medium text-foreground">Lifespan:</span>{" "}
                  20–30 years
                </li>
                <li>
                  <span className="font-medium text-foreground">Visuals:</span>{" "}
                  Solid colours and subtle patterns throughout the tile body
                </li>
                <li>
                  <span className="font-medium text-foreground">Cost:</span>{" "}
                  Budget-friendly — lowest cost per square metre
                </li>
                <li>
                  <span className="font-medium text-foreground">Format:</span>{" "}
                  Square tiles, typically 305&times;305mm
                </li>
              </ul>
            </div>

            {/* Vinyl Plank */}
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Vinyl Plank
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Best for:</span>{" "}
                  Wood-look commercial — coworking, hospitality, residential
                  lobbies
                </li>
                <li>
                  <span className="font-medium text-foreground">Lifespan:</span>{" "}
                  15–20 years
                </li>
                <li>
                  <span className="font-medium text-foreground">Visuals:</span>{" "}
                  Realistic timber grain with embossed-in-register textures
                </li>
                <li>
                  <span className="font-medium text-foreground">Cost:</span>{" "}
                  Mid-range — strong value for the aesthetic outcome
                </li>
                <li>
                  <span className="font-medium text-foreground">Format:</span>{" "}
                  Plank, typically 185&times;1220mm or 228&times;1219mm
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              <strong className="text-foreground">Choose LVT</strong> when the
              visual presentation of your space is a priority. LVT is the go-to
              for corporate offices, boutique retail, aged care common areas, and
              hospitality venues where you want the look of natural stone or
              timber without the associated cost and maintenance burden. Its
              multi-layer construction provides excellent dimensional stability
              and comfort underfoot.
            </p>
            <p>
              <strong className="text-foreground">Choose VCT</strong> when you
              need a bulletproof floor at the lowest possible lifecycle cost.
              VCT&apos;s through-body construction means scratches and scuffs
              can be polished out rather than replaced. It is the workhorse of
              commercial flooring — ideal for schools, hospitals, supermarkets,
              and corridors that see thousands of footfalls daily. The
              trade-off is a more utilitarian appearance.
            </p>
            <p>
              <strong className="text-foreground">Choose vinyl plank</strong>{" "}
              when you want the warm, natural look of timber in a commercial
              environment. The elongated plank format creates a sense of space
              and flow. It is particularly effective in coworking spaces,
              restaurants, hotel lobbies, and mixed-use developments where
              aesthetics and performance must coexist.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial-Grade Performance */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Commercial-Grade Performance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Commercial vinyl tile is engineered to perform under demanding
            conditions. Here are the technical specifications that matter when
            specifying vinyl flooring for commercial projects.
          </p>

          <div className="mt-12 space-y-12">
            {/* Wear Layers */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Wear Layers: 0.3mm to 0.7mm Explained
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  The wear layer is the transparent top coat that protects the
                  design layer from scuffs, scratches, and abrasion. Thickness
                  directly correlates with durability and expected service life.
                  A{" "}
                  <strong className="text-foreground">
                    0.3mm wear layer
                  </strong>{" "}
                  suits light commercial applications such as low-traffic
                  offices and meeting rooms. A{" "}
                  <strong className="text-foreground">
                    0.55mm wear layer
                  </strong>{" "}
                  is the standard specification for general commercial use —
                  offices, retail, healthcare, and education. A{" "}
                  <strong className="text-foreground">
                    0.7mm wear layer
                  </strong>{" "}
                  is recommended for heavy commercial and industrial
                  environments, including airports, shopping centres, and
                  hospital corridors.
                </p>
                <p>
                  For most Australian commercial projects, we recommend a
                  minimum 0.55mm wear layer. It provides the right balance of
                  durability and cost, and most manufacturer warranties for
                  commercial use require it.
                </p>
              </div>
            </div>

            {/* Slip Ratings */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Slip Ratings: R10, R11, and Beyond
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Slip resistance is classified under AS 4586 and is critical
                  for compliance and occupant safety.{" "}
                  <strong className="text-foreground">R10</strong> is the
                  minimum requirement for most dry commercial interiors,
                  including offices, corridors, and retail spaces.{" "}
                  <strong className="text-foreground">R11</strong> is required
                  for areas where water or contaminants may be present, such as
                  commercial kitchens, bathrooms, laundries, and entrance
                  foyers. Some specialist environments may require R12 or higher.
                </p>
                <p>
                  When specifying vinyl tile, always verify the slip rating
                  against the intended use. The Pendulum Test Value (PTV) and
                  the wet inclining platform test are both used to assess
                  compliance. Your flooring installer should confirm that the
                  product meets the relevant requirements for each zone within
                  your building.
                </p>
              </div>
            </div>

            {/* Acoustic Properties */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Acoustic Properties
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Impact sound reduction is a growing priority in commercial
                  design, particularly in multi-storey buildings, healthcare
                  facilities, and aged care residences. Many commercial vinyl
                  tiles are available with integrated acoustic backing layers
                  that reduce impact sound transmission by up to 19dB. This
                  reduces noise transfer between floors and creates a quieter,
                  more comfortable environment.
                </p>
                <p>
                  For projects with specific acoustic requirements under the
                  NCC, look for products that have been tested to AS ISO
                  717-2 and carry an Impact Sound Improvement (Delta Lw) rating.
                  A product with a Delta Lw of 15dB or higher will make a
                  meaningful difference in occupied spaces.
                </p>
              </div>
            </div>

            {/* Fire Ratings */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Fire Ratings: Bfl-s1 and Cfl-s1
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Fire performance is classified under the European EN 13501-1
                  standard, which is referenced by the Australian National
                  Construction Code.{" "}
                  <strong className="text-foreground">Cfl-s1</strong> indicates
                  that the flooring has satisfactory fire behaviour and low smoke
                  production — suitable for most general commercial areas.{" "}
                  <strong className="text-foreground">Bfl-s1</strong> is a
                  higher classification required for escape routes, public
                  corridors, and high-risk building classifications. The
                  &ldquo;s1&rdquo; suffix confirms minimal smoke development
                  during combustion.
                </p>
                <p>
                  Always confirm the fire rating requirements for your specific
                  building classification with your building certifier before
                  specifying a product. Reputable commercial vinyl tile
                  manufacturers provide independently verified test certificates
                  for all fire-related claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Sustainability and Environmental Responsibility
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              The commercial flooring industry has made significant strides in
              environmental performance, and vinyl tile is at the forefront.
              Leading manufacturers now incorporate up to 30% recycled content in
              their products, diverting waste from landfill and reducing reliance
              on virgin materials. Many products carry{" "}
              <strong className="text-foreground">
                FloorScore certification
              </strong>
              , which verifies compliance with stringent indoor air quality
              standards and confirms low VOC (volatile organic compound)
              emissions — essential for Green Star and WELL Building projects.
            </p>
            <p>
              Circular economy programs are expanding across the industry.
              Several major manufacturers now offer take-back schemes where
              end-of-life vinyl flooring is collected and recycled into new
              products rather than sent to landfill. Products achieving{" "}
              <strong className="text-foreground">
                Cradle to Cradle certification
              </strong>{" "}
              demonstrate a commitment to material health, renewable energy use,
              water stewardship, and social fairness across the entire
              manufacturing process.
            </p>
            <p>
              For projects targeting sustainability accreditations, vinyl tile
              can contribute to multiple credit categories including indoor
              environment quality, materials, and lifecycle impact. Environmental
              Product Declarations (EPDs) are available for most commercial
              ranges, providing transparent, third-party verified data on
              environmental impact across the product&apos;s full lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle Cost */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Lifecycle Cost: The True Cost of Your Floor
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              The upfront cost of flooring is only part of the equation.
              Facility managers who evaluate total cost of ownership — supply,
              installation, maintenance, and replacement over the building&apos;s
              life — consistently find that vinyl tile delivers the best value
              for commercial applications.
            </p>
            <p>
              Commercial vinyl tile supply starts from around{" "}
              <strong className="text-foreground">$45/m²</strong>, with
              professional installation from{" "}
              <strong className="text-foreground">$18/m²</strong> depending on
              subfloor condition and project complexity. With a service life of
              15 to 20 years and minimal maintenance requirements, the
              annualised cost is remarkably low. Compare this to{" "}
              <strong className="text-foreground">commercial carpet</strong>,
              which may be cheaper to purchase upfront but typically needs
              replacement every 7 to 10 years, requires regular deep cleaning,
              and carries higher ongoing maintenance costs. Over a 20-year
              period, carpet often costs 40–60% more than vinyl tile when all
              costs are accounted for.
            </p>
            <p>
              <strong className="text-foreground">
                Engineered timber
              </strong>{" "}
              sits at a higher price point — often $80–$120/m² supplied and
              installed — and demands periodic sanding, recoating, and more
              careful maintenance. While timber has undeniable aesthetic appeal,
              the ongoing cost and operational disruption of maintenance make it
              a more expensive proposition over the long term. Vinyl tile, and
              particularly vinyl plank that replicates the timber look, offers a
              compelling alternative that delivers the visual outcome at a
              significantly lower lifecycle cost.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Answers to the most common questions we hear from facility managers,
            specifiers, and project managers about commercial vinyl tile
            flooring.
          </p>

          <Accordion className="mt-10">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-base font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta
        title="Ready to Specify Vinyl Tile for Your Project?"
        description="Talk to our team about product selection, pricing, and professional installation for your commercial flooring project."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
