import type { FaqItem } from "@/lib/faq";

export interface RecommendedProduct {
  name: string;
  slug: string;
  reason: string;
}

export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  content: string[];
  requirements: string[];
  recommendedProducts: RecommendedProduct[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
}

export const solutions: Solution[] = [
  {
    slug: "office-flooring",
    title: "Vinyl Tile Flooring for Offices & Corporate Fitouts",
    heroImage: "/images/products/interface/brushed-lines-linen.jpg",
    subtitle:
      "Open-plan offices are loud. Vinyl tile quiets them down and actually stays looking decent.",
    content: [
      "The challenge is simple: modern offices cram more people into shared spaces than ever before. Which means noise. Footsteps, chair squeaks, dropped objects — it all echoes off hard surfaces and tanks productivity. Vinyl tile with acoustic backing dampens that impact noise by up to 19dB, which sounds modest until you're actually in the space and it works. It's warm underfoot over long days, handles rolling chairs and the odd coffee incident without complaint, and won't disintegrate under commercial cleaning protocols.",
      "Design flexibility is the other win. Need bold concrete-look tiles for a creative studio or warm timber planks for a law firm? Vinyl does it all at a fraction of what natural materials cost to install and maintain. You can use it to zone spaces, reinforce brand, even introduce a bit of nature through biophilic patterns. Individual tiles can be replaced if damaged, so facility managers don't face the nightmare of a full floor replacement for one scuffed corner.",
      "For the spreadsheet side of things, there's no polishing, sealing, or specialist maintenance. Clean and done. That matters when you're juggling facilities across multiple floors.",
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
    faq: [
      {
        question: "How much quieter is vinyl tile in an open-plan office?",
        answer:
          "Vinyl tile with acoustic backing dampens impact noise — footsteps, chair movement, dropped objects — by up to 19dB. That is the spec we use for open-plan offices. Tarkett iD Collection has integrated acoustic backing for this.",
      },
      {
        question: "Can you replace one damaged office tile without replacing the floor?",
        answer:
          "Yes. Individual tiles can be replaced if damaged, so a scuffed corner does not mean a full floor replacement.",
      },
      {
        question: "What ratings do you specify for office floors?",
        answer:
          "Acoustic performance of 19dB+ impact sound reduction, slip rating R10 minimum, fire rating Bfl-s1 for commercial compliance, and a 0.55mm+ wear layer for heavy commercial use. No specialist cleaning equipment.",
      },
      {
        question: "How do you install in a live tenancy without weeks of downtime?",
        answer:
          "Karndean LooseLay is adhesive-free, so fitouts move faster with less disruption. We supply and install as one contractor — new tenancy, refurb, or multi-floor portfolio across Melbourne, Sydney, and Brisbane.",
      },
    ],
    ctaTitle: "Let's talk your office flooring",
    ctaDescription:
      "New tenancy, refurb, or multi-floor portfolio across Melbourne, Sydney, and Brisbane. Book a free site inspection and we will write a fixed quote. Call 1300 207 915 or email office@premrest.com.au.",
  },
  {
    slug: "retail-flooring",
    title: "Vinyl Tile Flooring for Retail & Showrooms",
    heroImage: "/images/products/karndean/korlok-select-canadian-urban-oak.jpg",
    subtitle:
      "Trolleys, spills, heavy foot traffic — your floor takes a beating. Vinyl tile keeps looking good.",
    content: [
      "Retail flooring has two jobs: make your space look how you want it, and don't fall apart. That's where most floors fail. Laminate dents under a trolley load. Timber warps near the entry door. Vinyl tile? It shrugs. Heavy commercial grades (0.55mm to 0.70mm wear layer) handle trolleys, pallet jacks, seasonal layout shuffles, and spill-related chaos without showing much wear. The floor looks as good in month 12 as month one, which matters when your store is doing seasonal refreshes every quarter.",
      "Installation speed saves you money. Loose-lay systems go down overnight, meaning you can close Friday evening and reopen Saturday morning. Damaged tiles can be spot-replaced in minutes without closing sections of the shop. That's real cost savings compared to other commercial flooring that requires days of downtime and a full replacement if a corner gets damaged.",
      "Your brand matters, so you need design options that don't scream 'corporate office.' Vinyl delivers realistic timber, stone, concrete, terrazzo — your designer can build the experience you're after, on-brand, without the maintenance nightmare (or price tag) of real materials.",
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
    faq: [
      {
        question: "Will vinyl tile hold up under trolleys and pallet jacks?",
        answer:
          "Heavy commercial grades with a 0.55mm to 0.70mm wear layer are specified for this. Armstrong Diamond 10 is the scratch-resistant option we use on heavy retail traffic. Laminate dents; timber warps at the entry. Vinyl does not.",
      },
      {
        question: "Can you install overnight so the store can reopen in the morning?",
        answer:
          "Loose-lay systems can go down overnight — close Friday evening, reopen Saturday morning. That is the point of the format when trading hours matter.",
      },
      {
        question: "Can a damaged tile be replaced without closing part of the shop?",
        answer:
          "Yes. Damaged tiles can be spot-replaced in minutes. Interface modular tiles also allow seasonal layout changes without a full rip-up.",
      },
      {
        question: "What wear layer do you specify for retail?",
        answer:
          "0.55mm to 0.70mm, plus R10 slip for public commercial spaces, and high impact and indentation resistance for trolleys and display units.",
      },
    ],
    ctaTitle: "Let's spec your retail floor",
    ctaDescription:
      "Flagship stores, supermarkets, multi-site rollouts &mdash; we have done them all. Book a free site inspection across Melbourne, Sydney, or Brisbane. Call 1300 207 915 or email office@premrest.com.au.",
  },
  {
    slug: "healthcare-flooring",
    title: "Vinyl Tile Flooring for Healthcare, Aged Care & Medical",
    heroImage: "/images/products/armstrong/earthcuts-sandstone.jpg",
    subtitle:
      "Hygiene, slip resistance, durability, and human comfort. Healthcare flooring has to nail all of them.",
    content: [
      "Healthcare has a simple core challenge: the floor must be sterile but also not a brutal place to spend eight hours on your feet. Infection control means heat-welded seams, no cracks where bacteria hide, and resistance to harsh chemicals. Vinyl tile nails this — it's sealed, it's impermeable, it's easy to disinfect. We supply products rated R10 to R11 for slip resistance in wet areas, so you're covered on duty-of-care. But here's the part that matters for staff: vinyl has enough give underfoot to reduce fatigue during long shifts, which means better retention and fewer complaints about sore knees.",
      "Aged care has a different problem: clinical safety meets dignity and home. A vinyl floor can look like warm timber or natural stone, creating a residential feel that helps residents feel less institutionalised. The same durability and chemical resistance applies, but now it's in service of making someone's last years feel more like living and less like hospital.",
      "Whether you're specifying for a major hospital, surgical centre, pathology lab, or aged care home, we have healthcare-grade options that meet your compliance requirements and actually support the humans who work and recover there.",
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
    faq: [
      {
        question: "How does vinyl tile meet infection-control requirements?",
        answer:
          "Heat-welded seams, no cracks for bacteria to sit in, sealed and impermeable, and resistant to healthcare-grade cleaning chemicals. That is the hygienic construction we specify for hospitals and aged care.",
      },
      {
        question: "What slip rating do you use in wet healthcare areas?",
        answer:
          "R10 to R11, depending on wet and dry zones. Duty-of-care on corridors and wet areas is the reason.",
      },
      {
        question: "Can aged care floors look residential instead of clinical?",
        answer:
          "Yes. Warm timber or natural stone looks are the usual brief — less institutional, same durability and chemical resistance. Interface is the range we use when a homely atmosphere matters.",
      },
      {
        question: "Does vinyl reduce staff fatigue on long shifts?",
        answer:
          "It has enough give underfoot to reduce fatigue over an eight-hour shift compared with a hard sterile floor. That is part of the spec, not a bonus.",
      },
    ],
    ctaTitle: "Let's talk healthcare flooring",
    ctaDescription:
      "Compliance, comfort, durability &mdash; we understand what healthcare facilities need. Book a free site inspection in Melbourne, Sydney, or Brisbane. Call 1300 207 915 or email office@premrest.com.au.",
  },
  {
    slug: "education-flooring",
    title: "Vinyl Tile Flooring for Schools & Universities",
    heroImage: "/images/products/tarkett/id-comfort-19.jpg",
    subtitle:
      "Schools are loud, busy, and hard on floors. Vinyl tile handles it without destroying the maintenance budget.",
    content: [
      "Schools are chaos in the best way — thousands of people moving through corridors, classrooms, labs, and halls every day. Feet, dropped equipment, dragged furniture, the occasional art project on the floor. Vinyl tile is built for this. Heavy commercial wear layers (0.55mm+) stay looking decent across years of academic terms without needing specialist maintenance. And critically, all our products meet or exceed R10 slip ratings, which matters when you're responsible for student safety on both dry floors and wet corridors after rain or cleaning.",
      "Noise is a real problem in modern schools, especially open-plan learning spaces and multi-level buildings. Footsteps, dragging chairs, dropped things — it bounces off hard surfaces and kills focus. Vinyl with acoustic backing absorbs that impact sound and also reduces noise bleeding between floors, so a boisterous class downstairs doesn't sabotage the quiet study time happening above.",
      "Budget constraints are real in education. There's no polishing, no specialist chemicals, and minimal downtime maintenance. Individual tiles spot-replace if damaged, avoiding the nightmare of a full floor replacement. You also get design flexibility — colour-coded zones for wayfinding, school colours for identity, warm tones for libraries — all without blowing the capital works budget.",
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
    faq: [
      {
        question: "How does vinyl tile handle school traffic on an education budget?",
        answer:
          "Heavy commercial wear layers (0.55mm+) take corridors, classrooms, and halls across academic terms. No polishing, no specialist chemicals. Individual tiles spot-replace if damaged. Armstrong is the value range we use in schools nationwide.",
      },
      {
        question: "What slip rating do you specify for student safety?",
        answer:
          "R10 minimum — dry classrooms and wet corridors after rain or cleaning.",
      },
      {
        question: "Can vinyl reduce noise between classrooms and floors?",
        answer:
          "Acoustic backing absorbs impact sound — footsteps, dragging chairs, dropped equipment — and cuts noise bleeding between levels. Tarkett's education range is built around this.",
      },
      {
        question: "Can you colour-code zones for wayfinding?",
        answer:
          "Yes. Colour-coded zones, school colours, warmer tones for libraries — without blowing the capital works budget. Tarkett has a broad colour palette for this.",
      },
    ],
    ctaTitle: "Let's talk education flooring",
    ctaDescription:
      "Primary, secondary, and tertiary &mdash; we know what education spaces need. Book a free site inspection in Melbourne, Sydney, or Brisbane. Call 1300 207 915 or email office@premrest.com.au.",
  },
  {
    slug: "hospitality-flooring",
    title: "Vinyl Tile Flooring for Hotels, Restaurants & Bars",
    heroImage: "/images/products/karndean/van-gogh-smoked-school-cedar.jpg",
    subtitle:
      "Your floor is the first thing guests see. It needs to look intentional and handle genuine punishment.",
    content: [
      "In hospitality, the floor is design. It's the mood in the lobby, the atmosphere in the dining room, the vibe at the bar. Vinyl tile gives you access to realistic timber, stone, concrete, terrazzo — all the aesthetics that tell a story about your space, at a fraction of the cost and maintenance of the real thing. Herringbone oak for boutique heritage, dark slate for moody elegance, polished concrete for industrial cool — you can execute the vision without the weight, cost, or fragility of natural materials.",
      "Durability is where it matters most. Luggage wheels, chair legs, dropped glassware, aggressive kitchen cleaning cycles, spilled wine, keg movements — hospitality floors take real hits. Vinyl handles it without cracking, chipping, or staining like stone would. Water resistance is critical too (kitchens, bars, bathrooms all see moisture), and vinyl won't warp or swell. Slip ratings of R10-R11 keep guests and staff safe, particularly in bar and kitchen areas where spills happen.",
      "Guest comfort includes acoustic peace. Hotel guests expect quiet rooms; vinyl with acoustic backing dampens footsteps and luggage wheels in corridors. For bars and restaurants, the right flooring balances sound absorption with the lively ambiance you're creating. Everything works harder when the experience is intentional, and flooring is no exception.",
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
    faq: [
      {
        question: "Can hospitality vinyl look like timber or stone?",
        answer:
          "Yes. Realistic timber, stone, concrete, and terrazzo — herringbone oak, dark slate, polished concrete. Karndean is the design-led range we use when the floor is part of the room, not a backdrop.",
      },
      {
        question: "Will it handle kitchens, bars, and spilled drinks?",
        answer:
          "Vinyl is water-resistant and dimensionally stable — it will not warp or swell in kitchens, bars, or bathrooms. It also resists stains from food, wine, and cleaning chemicals.",
      },
      {
        question: "What slip rating do you specify for bars and kitchens?",
        answer:
          "R10 to R11, particularly where spills are routine.",
      },
      {
        question: "Does acoustic vinyl help keep hotel corridors quiet?",
        answer:
          "Acoustic backing dampens footsteps and luggage wheels in corridors. Interface modular tiles with integrated acoustic backing are the usual spec for hotel rooms and corridors.",
      },
    ],
    ctaTitle: "Let's design your hospitality floor",
    ctaDescription:
      "Boutique hotels, fine dining, bars, resorts &mdash; we have done them all and we understand the space. Book a free site inspection in Melbourne, Sydney, or Brisbane. Call 1300 207 915 or email office@premrest.com.au.",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
