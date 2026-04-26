export interface Manufacturer {
  name: string;
  slug: string;
  origin: string;
  websiteUrl: string;
  summary: string;
  productLines: string[];
  strengths: string[];
  rangeSlug?: string;
}

export const manufacturers: Manufacturer[] = [
  {
    name: "Interface",
    slug: "interface",
    origin: "USA / Australia",
    websiteUrl: "https://www.interface.com/au",
    summary:
      "Modular LVT and carpet tile from a manufacturer that pioneered carbon-neutral commercial flooring. Strong on biophilic design and end-of-life take-back programs.",
    productLines: ["LVT (Level Set, Studio Set)", "Sound Choice acoustic backing", "Modular carpet tile"],
    strengths: ["Carbon neutral", "Cradle to Cradle", "Take-back program"],
    rangeSlug: "interface",
  },
  {
    name: "Karndean Designflooring",
    slug: "karndean",
    origin: "UK / Australia",
    websiteUrl: "https://www.karndean.com/en-au",
    summary:
      "Design-led LVT with a wide aesthetic range across wood and stone. The LooseLay Longboard system installs without adhesive, which makes refurbishments fast.",
    productLines: ["Art Select", "Korlok", "LooseLay", "Van Gogh", "Knight Tile"],
    strengths: ["LooseLay technology", "Authentic timber visuals", "Lifetime residential warranty"],
    rangeSlug: "karndean",
  },
  {
    name: "Armstrong Flooring",
    slug: "armstrong",
    origin: "USA / Australia",
    websiteUrl: "https://www.armstrongflooring.com.au",
    summary:
      "Heavy commercial and healthcare specialist. Diamond 10 surface technology resists scratches and scuffs without polish or wax — practical for high-traffic, low-maintenance briefs.",
    productLines: ["Natural Creations", "Aspirations", "Chesterfield", "Migrations BBT"],
    strengths: ["Healthcare and aged care", "Diamond 10 surface", "GreenTag Level A"],
    rangeSlug: "armstrong",
  },
  {
    name: "Tarkett",
    slug: "tarkett",
    origin: "France / Australia",
    websiteUrl: "https://www.tarkett.com.au",
    summary:
      "Broad commercial portfolio with genuine sustainability credentials. The iD collection covers wood, stone, and abstract aesthetics with up to 19dB acoustic reduction.",
    productLines: ["iD Inspiration", "iD Click Ultimate", "iD Comfort", "iQ homogeneous"],
    strengths: ["Cradle to Cradle", "Acoustic backing", "Take-back program"],
    rangeSlug: "tarkett",
  },
  {
    name: "Shaw Contract",
    slug: "shaw-contract",
    origin: "USA",
    websiteUrl: "https://www.shawcontract.com/en-au",
    summary:
      "Commercial division of Shaw Industries. Strong workplace and education portfolio with Cradle to Cradle Silver certification and a substantial resilient flooring range.",
    productLines: ["Resilient LVT", "Encore Plank", "COREtec rigid core", "Carpet tile"],
    strengths: ["Cradle to Cradle Silver", "Workplace specification", "Global support"],
  },
  {
    name: "Forbo Flooring Systems",
    slug: "forbo",
    origin: "Switzerland / Australia",
    websiteUrl: "https://www.forbo.com/flooring/en-au",
    summary:
      "Best known for Marmoleum (linoleum), Forbo also produces the Allura LVT range and Eternal heterogeneous sheet vinyl. Strong in healthcare, education, and aged care.",
    productLines: ["Allura LVT", "Marmoleum", "Eternal sheet vinyl", "Sarlon acoustic"],
    strengths: ["Bio-based Marmoleum", "Healthcare hygiene", "Acoustic sheet vinyl"],
  },
  {
    name: "Polyflor",
    slug: "polyflor",
    origin: "UK / Australia",
    websiteUrl: "https://www.polyflor.com.au",
    summary:
      "Polyflor Australia operates from Melbourne with offices in Sydney and Brisbane. Heavy commercial, healthcare, and safety vinyl specialist with a comprehensive sheet and tile range.",
    productLines: ["Camaro LVT", "Expona Commercial", "Bevel Line", "Polysafe safety vinyl"],
    strengths: ["Safety vinyl", "Local distribution", "Heavy commercial"],
  },
  {
    name: "Gerflor",
    slug: "gerflor",
    origin: "France / Australia",
    websiteUrl: "https://www.gerflor.com.au",
    summary:
      "Gerflor Australasia covers commercial, healthcare, sport, and transport flooring. Strong on technical performance and homogeneous vinyl for hygiene-critical environments.",
    productLines: ["Creation LVT", "Taralay", "Mipolam homogeneous", "Tarabus transport"],
    strengths: ["Sports flooring", "Healthcare homogeneous", "Transport-grade vinyl"],
  },
  {
    name: "Amtico",
    slug: "amtico",
    origin: "UK",
    websiteUrl: "https://www.amtico.com",
    summary:
      "British luxury LVT brand, now part of Mannington Mills. Premium aesthetics with strong design programmes (Signature, Spacia) for hospitality and high-end commercial.",
    productLines: ["Signature", "Spacia", "Form", "Marine"],
    strengths: ["Hospitality design", "Custom laying patterns", "Premium aesthetics"],
  },
  {
    name: "Mannington Commercial",
    slug: "mannington-commercial",
    origin: "USA",
    websiteUrl: "https://www.manningtoncommercial.com",
    summary:
      "American commercial flooring manufacturer covering LVT, sheet vinyl, rubber, and carpet tile. Quantum Guard Elite urethane finish reduces ongoing maintenance.",
    productLines: ["Quantum Guard LVT", "BioSpec sheet vinyl", "Realities", "Spacia"],
    strengths: ["Healthcare sheet vinyl", "Commercial LVT", "Cradle to Cradle"],
  },
  {
    name: "Mohawk Group",
    slug: "mohawk-group",
    origin: "USA",
    websiteUrl: "https://www.mohawkgroup.com",
    summary:
      "World's largest flooring manufacturer. Commercial division covers resilient LVT and sheet alongside carpet tile and broadloom. Living Product Challenge certifications across several lines.",
    productLines: ["LVT", "Sheet vinyl", "Resilient sheet", "Modular carpet"],
    strengths: ["Scale and supply", "Living Product Challenge", "Workplace and education"],
  },
  {
    name: "Altro",
    slug: "altro",
    origin: "UK / Australia",
    websiteUrl: "https://www.altro.com.au",
    summary:
      "Specialist in safety flooring and hygienic wall sheet for healthcare, food prep, wet areas, and aged care. Altro Australia distributes locally with a 25-year heritage in safety vinyl.",
    productLines: ["Altro XpressLay", "Altro Wood Safety", "Altro Aquarius", "Altro Whiterock walls"],
    strengths: ["Slip resistance", "Wet-area performance", "Hygienic wall systems"],
  },
  {
    name: "Bolon",
    slug: "bolon",
    origin: "Sweden",
    websiteUrl: "https://www.bolon.com",
    summary:
      "Family-owned Swedish maker of woven vinyl flooring. Premium architectural product with distinctive textile-like aesthetics for hospitality, retail, and creative workplaces.",
    productLines: ["Bolon Studio", "Bolon Botanic", "Bolon Diversity", "Custom designs"],
    strengths: ["Woven vinyl aesthetic", "Bespoke design", "Architectural specification"],
  },
  {
    name: "Quick-Step",
    slug: "quick-step",
    origin: "Belgium / Australia",
    websiteUrl: "https://www.quick-step.com.au",
    summary:
      "Unilin's click-system specialist. Distributed in Australia by Premium Floors, covering laminate, hybrid, and luxury vinyl with patented Uniclic locking technology.",
    productLines: ["Livyn LVT", "Alpha vinyl", "Pulse rigid core", "Hybrid plank"],
    strengths: ["Uniclic system", "DIY-friendly install", "Residential and light commercial"],
  },
  {
    name: "Heartridge",
    slug: "heartridge",
    origin: "Australia",
    websiteUrl: "https://www.premiumfloors.com.au/heartridge",
    summary:
      "Premium Floors Australia's house vinyl brand. Australian-curated colour palette across hybrid plank, loose-lay, and rigid core vinyl, focused on residential and light commercial.",
    productLines: ["Heartridge Hybrid", "Heartridge Loose Lay", "Heartridge Rigid"],
    strengths: ["Australian colourways", "Hybrid technology", "Residential focus"],
  },
  {
    name: "Signature Floors",
    slug: "signature-floors",
    origin: "Australia",
    websiteUrl: "https://www.signaturefloors.com.au",
    summary:
      "Australian flooring brand with a broad commercial and residential product range covering LVT, hybrid, vinyl plank, and modular carpet. Local warehousing and showroom support.",
    productLines: ["Naturals LVT", "Maxi Plank", "Hybrid vinyl", "Loose Lay"],
    strengths: ["Australian-owned", "Stock availability", "Commercial and retail"],
  },
  {
    name: "Embelton",
    slug: "embelton",
    origin: "Australia",
    websiteUrl: "https://www.embelton.com",
    summary:
      "Family-owned Australian flooring company since 1925. Vinyl plank and hybrid alongside their better-known timber and acoustic underlay products.",
    productLines: ["Vinyl plank", "Hybrid plank", "FloortexAcoustix underlay"],
    strengths: ["Australian-owned heritage", "Acoustic systems", "Timber expertise"],
  },
  {
    name: "Godfrey Hirst",
    slug: "godfrey-hirst",
    origin: "Australia",
    websiteUrl: "https://www.godfreyhirst.com",
    summary:
      "Australia's largest carpet maker, owned by Mohawk. Hard-flooring expansion includes hybrid, vinyl plank, and laminate ranges with national distribution.",
    productLines: ["Hybrid plank", "Vinyl plank", "Laminate", "Carpet"],
    strengths: ["National distribution", "Residential focus", "Multi-category supply"],
  },
  {
    name: "LX Hausys (HFLOR)",
    slug: "lx-hausys",
    origin: "South Korea",
    websiteUrl: "https://www.hflor.com",
    summary:
      "Commercial LVT and homogeneous sheet from LX Hausys. The HFLOR range targets healthcare, education, and workplace with a comprehensive heterogeneous and rigid-core lineup.",
    productLines: ["Hardwood LVT", "Stone LVT", "Homogeneous sheet", "Rigid core"],
    strengths: ["Healthcare sheet vinyl", "Asia-Pacific manufacturing", "Broad commercial range"],
  },
  {
    name: "Cavalio (Halifax Vogel Group)",
    slug: "cavalio",
    origin: "Australia (distributor)",
    websiteUrl: "https://www.hvg.com.au",
    summary:
      "Cavalio is Halifax Vogel Group's vinyl flooring brand, distributed nationally to architects, builders, and retailers. Loose-lay, click, and gluedown LVT in commercial-grade specifications.",
    productLines: ["Cavalio Loc", "Cavalio LooseLay", "Cavalio Conceptline", "Cavalio Projectline"],
    strengths: ["Architectural specification", "Australian distribution", "Multiple install methods"],
  },
];

export function getManufacturerBySlug(slug: string): Manufacturer | undefined {
  return manufacturers.find((m) => m.slug === slug);
}
