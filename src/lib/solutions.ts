export interface RecommendedProduct {
  name: string;
  slug: string;
  reason: string;
}

export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  content: string[];
  requirements: string[];
  recommendedProducts: RecommendedProduct[];
  ctaTitle: string;
  ctaDescription: string;
}

export const solutions: Solution[] = [
  {
    slug: "office-flooring",
    title: "Vinyl Tile Flooring for Offices & Corporate Fitouts",
    subtitle:
      "Modern office spaces demand flooring that is durable enough for high-traffic corridors, professional enough for client-facing areas, and easy to maintain across every shift.",
    content: [
      "The modern Australian office has evolved well beyond rows of desks. Today's workplaces feature open-plan collaboration zones, quiet focus pods, breakout spaces, hot-desking hubs, and formal reception areas — each with distinct performance and aesthetic demands. Vinyl tile flooring meets every one of these requirements, delivering a consistent, professional finish that is as comfortable underfoot during a twelve-hour day as it is resilient against rolling office chairs, foot traffic, and the occasional coffee spill.",
      "Acoustic performance is one of the most compelling reasons to specify vinyl tile in an office environment. Open-plan layouts amplify impact noise — footsteps, chair movements, and dropped objects — which can erode concentration and productivity. Premium LVT products with integrated acoustic backing can achieve 19dB or greater impact sound reduction, helping to create a calmer, more focused workplace without the dust-trapping tendencies of broadloom carpet. This makes vinyl tile an excellent choice for multi-level office buildings where inter-floor noise transfer is a concern.",
      "Design flexibility is another major advantage. With realistic timber, stone, and abstract visuals available in plank and tile formats, designers can use flooring to reinforce brand identity, define functional zones through colour and pattern changes, and introduce biophilic elements that support occupant wellbeing. Whether you are fitting out a creative agency that calls for bold concrete-look tiles or a law firm that demands warm oak planks, vinyl tile offers virtually unlimited design scope at a fraction of the cost and maintenance burden of natural materials.",
      "From a lifecycle perspective, vinyl tile is one of the most cost-effective choices for commercial offices. It requires no polishing, no sealing, and minimal downtime for spot repairs — individual tiles or planks can be replaced without disturbing the surrounding floor. For facility managers juggling maintenance budgets across large tenancies, this translates to lower total cost of ownership and less disruption to daily operations compared with carpet tiles, polished concrete, or natural timber.",
    ],
    requirements: [
      "Acoustic performance — 19dB+ impact sound reduction",
      "Slip rating R10 minimum for all office areas",
      "Fire rating Bfl-s1 for commercial compliance",
      "Wear layer 0.55mm+ for heavy commercial use",
      "Easy to clean and maintain without specialist equipment",
    ],
    recommendedProducts: [
      {
        name: "Interface",
        slug: "interface",
        reason:
          "Biophilic design options that promote occupant wellbeing and productivity in open-plan offices",
      },
      {
        name: "Karndean LooseLay",
        slug: "karndean",
        reason:
          "Adhesive-free installation for fast corporate fitouts with minimal disruption and downtime",
      },
      {
        name: "Tarkett iD Collection",
        slug: "tarkett",
        reason:
          "Integrated acoustic backing options delivering up to 19dB impact sound reduction",
      },
    ],
    ctaTitle: "Get a Free Quote for Your Office Project",
    ctaDescription:
      "Whether you are fitting out a new tenancy or refurbishing an existing workspace, our team will recommend the right vinyl tile product, provide competitive pricing, and manage the installation from start to finish.",
  },
  {
    slug: "retail-flooring",
    title: "Vinyl Tile Flooring for Retail & Showrooms",
    subtitle:
      "High-traffic retail environments need flooring that withstands trolleys, foot traffic, and constant movement while delivering the visual impact that shapes customer experience.",
    content: [
      "In retail, your floor is one of the largest visual surfaces in the store — and one of the hardest working. From the moment a customer steps through the entrance, the flooring sets the tone for their experience. Vinyl tile offers retailers the ability to create striking, on-brand interiors using realistic timber, stone, and contemporary abstract designs, all while delivering the extreme durability that retail foot traffic demands. Whether you operate a boutique fashion store or a high-volume supermarket, vinyl tile performs where lesser flooring options fail.",
      "Durability is the defining requirement for retail flooring. Shopping trolleys, pallet jacks, high heels, display racks being repositioned for seasonal campaigns — all of these place enormous stress on the floor surface. Heavy commercial vinyl tile with a 0.55mm to 0.70mm wear layer and reinforced surface treatments resists scratches, scuffs, and indentation far better than laminate or engineered timber, ensuring the floor looks as good on day one thousand as it did on day one. For retailers who refresh store layouts regularly, this resilience is essential.",
      "Minimising downtime during installation or refurbishment is critical for retail businesses where every closed trading hour represents lost revenue. Loose-lay and click-lock vinyl tile systems can be installed rapidly — often overnight or across a single weekend — allowing stores to reopen without extended closures. Individual damaged tiles can be spot-replaced in minutes, meaning there is no need to close off large sections of the shop floor for repairs. This speed and flexibility make vinyl tile the practical choice for retail fit-outs, refurbishments, and ongoing maintenance.",
      "Slip resistance is equally important in retail environments where spills from food courts, wet weather tracked in from outside, or cleaning routines can create hazardous conditions. All commercial vinyl tile products we supply meet or exceed the R10 slip rating required for public commercial spaces, giving retailers confidence that their duty-of-care obligations are met while maintaining an attractive, design-forward floor finish.",
    ],
    requirements: [
      "Heavy commercial wear layer 0.55mm to 0.70mm",
      "Slip rating R10 for public commercial spaces",
      "High impact and indentation resistance for trolleys and display units",
      "Broad design range to support branding and customer experience",
      "Easy spot-replacement of individual tiles to minimise disruption",
    ],
    recommendedProducts: [
      {
        name: "Armstrong",
        slug: "armstrong",
        reason:
          "Diamond 10 surface treatment delivers exceptional scratch resistance for heavy retail traffic",
      },
      {
        name: "Karndean",
        slug: "karndean",
        reason:
          "Premium design-led visuals that create memorable retail environments and brand experiences",
      },
      {
        name: "Interface",
        slug: "interface",
        reason:
          "Modular tile format allows easy reconfiguration and spot-replacement for seasonal layouts",
      },
    ],
    ctaTitle: "Get a Free Quote for Your Retail Project",
    ctaDescription:
      "From flagship showrooms to high-volume retail chains, we supply and install vinyl tile flooring that looks outstanding and performs under pressure. Contact us for a no-obligation quote.",
  },
  {
    slug: "healthcare-flooring",
    title: "Vinyl Tile Flooring for Healthcare, Aged Care & Medical",
    subtitle:
      "Healthcare environments demand flooring that meets the highest standards of hygiene, infection control, slip resistance, and comfort for both patients and staff.",
    content: [
      "Flooring in hospitals, medical centres, dental surgeries, pathology labs, and aged care facilities must satisfy a uniquely demanding set of requirements. Infection control is paramount — floors must be easy to clean and disinfect, resistant to the harsh chemicals used in healthcare cleaning protocols, and capable of being sealed to prevent the harbourage of bacteria and pathogens. Commercial vinyl tile with heat-welded seams creates a continuous, hygienic surface that eliminates the gaps and joins where contaminants can accumulate, making it the flooring of choice for healthcare specifiers across Australia.",
      "Slip resistance is a critical safety consideration, particularly in areas where water, body fluids, or cleaning solutions may be present. Corridors, patient rooms, bathrooms, operating theatres, and commercial kitchens all require flooring with a proven slip rating. The vinyl tile products we supply for healthcare applications are rated R10 to R11, providing reliable traction underfoot even in wet conditions. This helps healthcare facilities meet their duty-of-care obligations and reduces the risk of slips and falls for patients, staff, and visitors alike.",
      "Comfort underfoot is an often-overlooked benefit of vinyl tile in healthcare settings. Nurses, orderlies, and allied health professionals spend long shifts on their feet, and a floor with some resilience and cushioning can reduce fatigue and musculoskeletal strain. Vinyl tile with integrated comfort-back layers provides a degree of underfoot give that hard surfaces like polished concrete or ceramic tile simply cannot match, contributing to better staff wellbeing and retention over the long term.",
      "Beyond performance, vinyl tile supports wayfinding and therapeutic design in healthcare interiors. Colour-coded flooring zones can guide patients through complex hospital layouts, while warm timber and natural stone visuals in aged care environments create a residential, calming atmosphere that supports dignity and emotional wellbeing. With the breadth of design options available across our healthcare-grade ranges, specifiers can achieve both clinical performance and human-centred design in a single flooring solution.",
    ],
    requirements: [
      "Slip rating R10 to R11 for wet and dry areas",
      "Chemical resistance for healthcare-grade cleaning agents",
      "Hygienic construction with heat-welded seams to prevent bacterial harbourage",
      "Comfort underfoot to reduce staff fatigue during long shifts",
      "Infection control compliance for hospitals and aged care facilities",
    ],
    recommendedProducts: [
      {
        name: "Armstrong",
        slug: "armstrong",
        reason:
          "Specialist healthcare flooring range with Diamond 10 surface and broad wear-layer options up to 0.70mm",
      },
      {
        name: "Tarkett",
        slug: "tarkett",
        reason:
          "Hygienic iD Collection with Cradle to Cradle certification and excellent chemical resistance",
      },
      {
        name: "Interface",
        slug: "interface",
        reason:
          "Warm, residential-look designs ideal for aged care environments where a homely atmosphere matters",
      },
    ],
    ctaTitle: "Get a Free Quote for Your Healthcare Project",
    ctaDescription:
      "We understand the compliance requirements of healthcare and aged care flooring. Our team will recommend products that meet infection control standards, slip ratings, and design goals for your facility.",
  },
  {
    slug: "education-flooring",
    title: "Vinyl Tile Flooring for Schools & Universities",
    subtitle:
      "Education environments need flooring that is safe for students, tough enough for classrooms and corridors, acoustically effective, and kind to maintenance budgets.",
    content: [
      "Schools, TAFEs, and universities are among the most demanding commercial environments for flooring. Thousands of students, staff, and visitors move through corridors, classrooms, libraries, laboratories, gymnasiums, and common areas every day, subjecting floors to constant foot traffic, dropped equipment, dragged furniture, and the occasional art project gone wrong. Vinyl tile is purpose-built for this level of punishment, offering heavy commercial-grade durability with wear layers of 0.55mm and above that maintain their appearance and performance across decades of academic terms.",
      "Student safety is the foremost consideration for education facility managers. All vinyl tile products we supply for schools meet or exceed the R10 slip rating required for public buildings, providing reliable traction in dry and wet conditions. Unlike polished concrete or ceramic tile, vinyl has a degree of inherent resilience that reduces the severity of impact injuries from slips and falls — an important consideration in environments where young children are running, playing, and learning to navigate shared spaces safely.",
      "Acoustic performance is increasingly important in education design. Open-plan learning spaces, flexible classrooms, and multi-purpose halls all benefit from flooring that absorbs impact sound rather than reflecting it. Vinyl tile with acoustic backing can achieve significant reductions in footstep and impact noise, creating quieter, more focused learning environments. For multi-storey school buildings, this also reduces noise transfer between levels, allowing classes on different floors to operate without distraction.",
      "Budget is always a reality in education. Vinyl tile offers one of the lowest lifecycle costs of any commercial flooring option because it requires no polishing, no specialist cleaning chemicals, and minimal ongoing maintenance. Individual tiles can be spot-replaced if damaged, avoiding the cost of large-scale floor replacements. The broad range of colour and design options also allows schools to create vibrant, stimulating learning environments — using colour coding for wayfinding, school colours for identity, or calming natural tones for libraries and study areas — all without blowing the capital works budget.",
    ],
    requirements: [
      "Heavy commercial durability rating for high-traffic corridors and halls",
      "Slip safety rated R10 for student welfare compliance",
      "Acoustic performance to support focused learning environments",
      "Budget-friendly lifecycle cost with minimal ongoing maintenance",
      "Easy maintenance with standard cleaning equipment and chemicals",
    ],
    recommendedProducts: [
      {
        name: "Tarkett",
        slug: "tarkett",
        reason:
          "Dedicated education range with acoustic backing, Cradle to Cradle certification, and broad colour palette",
      },
      {
        name: "Armstrong",
        slug: "armstrong",
        reason:
          "Excellent value across a wide thickness and wear-layer range, proven in schools nationwide",
      },
      {
        name: "Interface",
        slug: "interface",
        reason:
          "Carbon-neutral products supporting school sustainability initiatives and Green Star targets",
      },
    ],
    ctaTitle: "Get a Free Quote for Your Education Project",
    ctaDescription:
      "From primary schools to university campuses, we supply and install vinyl tile flooring that meets education-sector safety standards, performance requirements, and budget expectations.",
  },
  {
    slug: "hospitality-flooring",
    title: "Vinyl Tile Flooring for Hotels, Restaurants & Bars",
    subtitle:
      "Hospitality venues demand flooring that delivers design impact for the guest experience, withstands heavy use in restaurants and lobbies, and performs in wet areas like bars and commercial kitchens.",
    content: [
      "In hospitality, the floor is a design statement. It sets the mood when a guest walks into a hotel lobby, defines the atmosphere in a fine-dining restaurant, and creates the character of a cocktail bar. Vinyl tile gives interior designers and architects access to an extraordinary breadth of realistic timber, stone, concrete, terrazzo, and bespoke abstract visuals — enabling them to realise ambitious design concepts at a fraction of the cost, weight, and maintenance burden of natural materials. From heritage herringbone oak in a boutique hotel to dark polished slate in a rooftop bar, vinyl tile makes it achievable.",
      "Durability in hospitality is tested daily. Hotel lobbies endure a constant stream of luggage wheels and foot traffic. Restaurant floors cope with chair legs, dropped cutlery, food spills, and aggressive cleaning cycles. Bar areas deal with liquid spills, glass breakage, and the movement of heavy kegs and equipment. Vinyl tile with a heavy commercial wear layer and reinforced surface treatment handles all of these challenges, maintaining its visual appeal and structural integrity across years of demanding hospitality service without the cracking, chipping, or staining that plague natural stone and timber.",
      "Water resistance is essential across large areas of any hospitality venue. Commercial kitchens, bar service areas, hotel bathrooms, pool surrounds, and outdoor-to-indoor transition zones are all subject to standing water, splashes, and regular washdowns. Vinyl tile is inherently waterproof and dimensionally stable, meaning it will not swell, warp, or delaminate when exposed to moisture. Combined with slip ratings of R10 to R11, this makes vinyl tile a safe and practical choice for every wet area in a hospitality operation.",
      "Acoustic comfort is a priority in hotel rooms and corridors, where guest experience depends on a quiet, restful environment. Vinyl tile with integrated acoustic backing significantly reduces impact sound transmission — footsteps in corridors, luggage wheels, and housekeeping trolleys — helping hotels deliver the peaceful atmosphere that guests expect. For restaurants and bars, the right flooring also contributes to the overall acoustic character of the space, balancing sound absorption with the lively ambiance that operators want to create.",
    ],
    requirements: [
      "Design excellence with realistic timber, stone, and bespoke visual options",
      "Water resistance and dimensional stability for kitchens, bars, and wet areas",
      "Slip rating R10 to R11 for guest and staff safety",
      "Acoustic comfort for hotel rooms and corridors",
      "Stain resistance for food, beverage, and cleaning chemical exposure",
    ],
    recommendedProducts: [
      {
        name: "Karndean",
        slug: "karndean",
        reason:
          "Premium design-led visuals with hand-crafted wood and stone aesthetics for luxury hospitality interiors",
      },
      {
        name: "Interface",
        slug: "interface",
        reason:
          "Modular format ideal for hotel rooms with integrated acoustic backing for guest comfort",
      },
      {
        name: "Tarkett",
        slug: "tarkett",
        reason:
          "Broad design palette and water resistance for restaurant and bar environments",
      },
    ],
    ctaTitle: "Get a Free Quote for Your Hospitality Project",
    ctaDescription:
      "From boutique hotels to large-format restaurants and bars, we supply and install vinyl tile flooring that elevates your guest experience and stands up to the demands of daily hospitality operations.",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
