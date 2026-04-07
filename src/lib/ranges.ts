export interface RangeSpec {
  label: string;
  value: string;
}

export interface Range {
  name: string;
  slug: string;
  tagline: string;
  description: string[];
  specs: RangeSpec[];
  manufacturerUrl: string;
}

export const ranges: Range[] = [
  {
    name: "Interface",
    slug: "interface",
    tagline: "Modular Flooring. Designed for Life.",
    description: [
      "Interface is a global leader in modular flooring, renowned for pioneering sustainable manufacturing practices and delivering commercial-grade luxury vinyl tile that performs in the most demanding environments. With decades of experience engineering flooring solutions for offices, healthcare, education, and hospitality, Interface has established itself as the go-to choice for architects and specifiers who refuse to compromise on quality or environmental responsibility. Their carbon-neutral products set the benchmark for what commercial flooring can achieve.",
      "The Interface LVT collection brings together realistic wood and stone aesthetics with the durability and resilience that commercial spaces demand. Drawing on biophilic design principles, their patterns and textures are inspired by the natural world, creating spaces that promote wellbeing and productivity. Each plank and tile is engineered with multiple layers to deliver dimensional stability, superior wear resistance, and long-lasting visual appeal, even in high-traffic commercial installations.",
      "Interface is deeply committed to sustainability through their Climate Take Back mission, which goes beyond carbon neutrality to aim for a climate-positive future. Every product is designed with end-of-life in mind, supporting circular economy principles through take-back and recycling programs. When you specify Interface, you are choosing flooring that looks exceptional, performs reliably, and contributes to a healthier planet.",
    ],
    specs: [
      { label: "Total Thickness", value: "5.0mm" },
      { label: "Wear Layer", value: "0.55mm" },
      { label: "Format", value: "Plank & Tile" },
      { label: "Technology", value: "Multilayer LVT" },
      { label: "Slip Rating", value: "R10" },
      { label: "Fire Rating", value: "Bfl-s1" },
      { label: "Warranty", value: "15 years commercial" },
    ],
    manufacturerUrl: "https://www.interface.com/au",
  },
  {
    name: "Karndean",
    slug: "karndean",
    tagline: "Design Flooring. Beautifully Crafted.",
    description: [
      "Karndean has built a reputation as one of the most respected names in luxury vinyl flooring, known worldwide for hand-crafted wood and stone visuals that rival the beauty of natural materials. Their design-led approach means every plank and tile is meticulously developed to capture authentic grain patterns, surface textures, and colour variations, resulting in floors that look and feel remarkably realistic. Karndean flooring transforms commercial and residential spaces alike with warmth, character, and enduring style.",
      "The Karndean range is best known for its LooseLay Longboard format, which combines generous plank dimensions with innovative friction-grip backing technology. LooseLay planks can be installed without adhesive in many applications, dramatically reducing installation time, disruption, and VOC emissions on site. This makes Karndean an ideal choice for refurbishments, fast-track fit-outs, and any project where minimising downtime is critical. The Longboard format delivers a premium wide-plank look that enhances the sense of space in any interior.",
      "Beyond its visual appeal and installation advantages, Karndean flooring is engineered for lasting performance. The robust 0.55mm wear layer and K-Guard+ surface protection ensure the floor maintains its appearance under heavy commercial foot traffic, while the waterproof construction makes it suitable for kitchens, bathrooms, and other moisture-prone areas. Backed by a lifetime residential and 15-year commercial warranty, Karndean provides the confidence that your flooring investment is protected for the long term.",
    ],
    specs: [
      { label: "Total Thickness", value: "4.5mm" },
      { label: "Wear Layer", value: "0.55mm" },
      { label: "Format", value: "Longboard Plank" },
      { label: "Technology", value: "LooseLay Friction Grip" },
      { label: "Slip Rating", value: "R10" },
      { label: "Fire Rating", value: "Bfl-s1" },
      { label: "Warranty", value: "Lifetime residential / 15yr commercial" },
    ],
    manufacturerUrl: "https://www.karndean.com/en-au",
  },
  {
    name: "Armstrong",
    slug: "armstrong",
    tagline: "Performance Flooring You Can Trust.",
    description: [
      "Armstrong is one of the world's largest and most established flooring manufacturers, with a heritage spanning well over a century of innovation in resilient flooring. Their extensive product portfolio covers virtually every commercial application, from high-traffic retail and corporate offices to the most hygiene-critical healthcare and aged care environments. When performance and reliability are non-negotiable, Armstrong delivers flooring solutions that architects, facility managers, and building owners can trust.",
      "Armstrong's LVT range is particularly strong in the healthcare, education, and aged care sectors, where flooring must meet stringent requirements for infection control, slip resistance, and ease of maintenance. Their products are engineered to withstand heavy rolling loads, frequent cleaning with commercial chemicals, and the day-to-day rigours of busy institutional environments. With options spanning thicknesses from 2.5mm to 5.0mm and wear layers from 0.30mm to 0.70mm, there is an Armstrong product tailored to every budget and performance requirement.",
      "At the heart of Armstrong's LVT technology is the proprietary Diamond 10 surface treatment, which provides exceptional scratch and scuff resistance without the need for polish or wax. This low-maintenance surface keeps floors looking fresh for longer, reducing lifecycle costs and minimising disruption from ongoing floor care. Backed by warranties of up to 15 years for commercial installations, Armstrong flooring is a sound investment in long-term performance and visual appeal.",
    ],
    specs: [
      { label: "Total Thickness", value: "2.5-5.0mm" },
      { label: "Wear Layer", value: "0.30-0.70mm" },
      { label: "Format", value: "Tile & Plank" },
      { label: "Technology", value: "Diamond 10 Surface" },
      { label: "Slip Rating", value: "R10-R11" },
      { label: "Fire Rating", value: "Bfl-s1" },
      { label: "Warranty", value: "Up to 15 years commercial" },
    ],
    manufacturerUrl: "https://www.armstrongflooring.com.au",
  },
  {
    name: "Tarkett",
    slug: "tarkett",
    tagline: "Flooring That's Good for People and Planet.",
    description: [
      "Tarkett is a global flooring leader with a deep commitment to creating products that are good for people and good for the planet. Their luxury vinyl tile collections have earned Cradle to Cradle certification, reflecting rigorous standards for material health, material reutilisation, renewable energy use, water stewardship, and social fairness. For specifiers who need to meet green building requirements such as Green Star or WELL, Tarkett provides flooring with transparent environmental credentials and verified third-party certifications.",
      "The Tarkett iD Collection offers one of the broadest design palettes available in commercial LVT, encompassing realistic wood, stone, concrete, and abstract visuals to suit any interior concept. Beyond aesthetics, Tarkett floors are engineered to deliver strong acoustic and comfort underfoot properties, with integrated acoustic backing options achieving up to 19dB impact sound reduction. This makes them an excellent choice for multi-level buildings, open-plan offices, and any space where noise control contributes to occupant comfort and productivity.",
      "Tarkett's commitment to the circular economy goes beyond product design. They operate take-back and recycling programs that reclaim post-installation and end-of-life vinyl flooring, keeping materials in productive use and out of landfill. Their iD Multilayer technology provides dimensional stability and ease of installation, while the 0.55mm wear layer ensures lasting durability in demanding commercial environments. With a 15-year commercial warranty, Tarkett flooring is a responsible choice that does not compromise on performance.",
    ],
    specs: [
      { label: "Total Thickness", value: "3.6-4.6mm" },
      { label: "Wear Layer", value: "0.55mm" },
      { label: "Format", value: "Tile & Plank" },
      { label: "Technology", value: "iD Multilayer" },
      { label: "Slip Rating", value: "R10" },
      { label: "Fire Rating", value: "Bfl-s1" },
      { label: "Warranty", value: "15 years commercial" },
      { label: "Acoustic Rating", value: "19dB" },
    ],
    manufacturerUrl: "https://www.tarkett.com.au",
  },
];

export function getRangeBySlug(slug: string): Range | undefined {
  return ranges.find((r) => r.slug === slug);
}
