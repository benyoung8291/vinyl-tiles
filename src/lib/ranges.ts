export interface RangeSpec {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  format: string;
  style: string;
  image: string;
}

export interface Range {
  name: string;
  slug: string;
  tagline: string;
  description: string[];
  specs: RangeSpec[];
  manufacturerUrl: string;
  products: Product[];
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
    products: [
      {
        name: "Natural Woodgrains",
        slug: "natural-woodgrains",
        description:
          "Authentic timber grain in skinny plank format with 6 colourways including Beech, Chestnut, Washed Maple and Rustic Oak. Sound Choice backing for superior noise reduction.",
        format: "Skinny Plank (25 x 100cm)",
        style: "Wood Look",
        image:
          "https://s7d1.scene7.com/is/image/interfaceprd/NaturalWoodgrains_Chestnut2_wip4_sl_web?wid=600&fit=constrain",
      },
      {
        name: "Textured Woodgrains",
        slug: "textured-woodgrains",
        description:
          "Distressed and antiqued timber aesthetics in 12 colourways from light washed tones to deep dark oaks. Herringbone and ashlar installation patterns available.",
        format: "Skinny Plank (25 x 100cm)",
        style: "Wood Look",
        image:
          "https://s7d1.scene7.com/is/image/interfaceprd/textured-woodgrains_antique-light-oak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
      },
      {
        name: "Textured Stones",
        slug: "textured-stones",
        description:
          "Stone-inspired square tiles from subdued concrete to expressive polished cement and marble. Part of the Level Set collection with Sound Choice acoustic backing.",
        format: "Tile (50 x 50cm)",
        style: "Stone Look",
        image:
          "https://s7d1.scene7.com/is/image/interfaceprd/textured-stones_dark-concrete_va1?hei=600&fit=constrain&fmt=jpg&qlt=85",
      },
      {
        name: "Brushed Lines",
        slug: "brushed-lines",
        description:
          "Diffused linear texture with light-capturing sparkle. 22 solid colours from warm and cool neutrals to earthy mineral tones including Blush, Graphite, and Celadon.",
        format: "Tile (50 x 50cm)",
        style: "Abstract / Linear",
        image:
          "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_blush_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
      },
      {
        name: "Drawn Lines",
        slug: "drawn-lines",
        description:
          "Fractal-inspired prismatic geometry with metallic shimmer. 10 colourways including Smokey Quartz, Diamond, Amber, and Bronze. Fine linear matrix with no visible repeats.",
        format: "Tile (50 x 50cm)",
        style: "Abstract / Geometric",
        image:
          "https://s7d1.scene7.com/is/image/interfaceprd/drawn-lines_smokey-quartz_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
      },
      {
        name: "Northern Grain",
        slug: "northern-grain",
        description:
          "Scandinavian-inspired timber with refined satin and washed finishes. 8 colourways including Chiffon Oak, Dark Wash and Aged Satin. Herringbone and ashlar layouts.",
        format: "Plank (12.5 x 100cm)",
        style: "Wood Look",
        image:
          "https://s7d1.scene7.com/is/image/interfaceprd/northerngrain_chiffonoak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
      },
      {
        name: "On Grain",
        slug: "on-grain",
        description:
          "Part of the Earthen Forms collection with refined wood-veneer aesthetics. 7 colourways from pale ash to deep walnut including White Oak Veneer and European Walnut.",
        format: "Plank (25 x 100cm)",
        style: "Wood Look",
        image:
          "https://s7d1.scene7.com/is/image/interfaceprd/on-grain_white-oak-veneer_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
      },
      {
        name: "Iridescence",
        slug: "iridescence",
        description:
          "Mineral and organic pigment-inspired abstract surfaces with soft smoky colour transitions. 10 colourways spanning greys, blush pinks, powdery blues, and terracotta.",
        format: "Tile (50 x 50cm)",
        style: "Abstract / Painted",
        image:
          "https://s7d1.scene7.com/is/image/interfaceprd/iridescence_blossom_va1?hei=600&fit=constrain&fmt=jpg&qlt=85",
      },
    ],
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
    products: [
      {
        name: "Art Select",
        slug: "art-select",
        description:
          "Premium collection capturing the beauty of European oaks and Italian marble with unparalleled artistry, hand-crafted designs, and realistic embossed textures found in nature.",
        format: "Plank & Tile",
        style: "Wood & Stone",
        image:
          "https://globalassets.karndean.com/karndean/b2c-blocks/b2c-dual-content-block/usa/collections/caliza-classico--lm39__akt-lm39--bathroom.jpg",
      },
      {
        name: "Korlok Select",
        slug: "korlok-select",
        description:
          "Rigid core collection with 5G locking mechanism for fast, easy installation. Wood and stone-inspired designs with built-in noise reduction and HoldFast lifetime warranty.",
        format: "Rigid Core Plank",
        style: "Wood & Stone",
        image:
          "https://globalassets.karndean.com/products/korlok-and-korlok-reserve/korlok/residential-roomsets/rkp8116-canadianurbanoak-livingroom-ls1_cm-range-page.jpg",
      },
      {
        name: "Van Gogh",
        slug: "van-gogh",
        description:
          "Wide variety of stylish wood-inspired designs from clean prime-grade oak to rustic reclaimed redwood. Available in gluedown and rigid core formats.",
        format: "Plank",
        style: "Wood Look",
        image:
          "https://globalassets.karndean.com/products/van-gogh-multi/residential-roomsets/vgw115t-natural-prime-oak-ds05-5mm-living-room-hallway-ls2_cm.jpg",
      },
      {
        name: "Opus",
        slug: "opus",
        description:
          "Modern and contemporary collection featuring wood, stone, abstract, and geometric designs. Compatible with design strips for creative floor patterns.",
        format: "Tile & Plank",
        style: "Contemporary / Abstract",
        image:
          "https://globalassets.karndean.com/products/opus/residential-roomsets/sm-sp216-fumo-ds12-3mm-kitchen-p1_cm.jpg",
      },
      {
        name: "LooseLay",
        slug: "looselay",
        description:
          "K-Wave friction-grip backing eliminates the need for full-spread adhesive. Reduces noise to lower floors and offers cushioned comfort underfoot for quick, easy installations.",
        format: "LooseLay Plank",
        style: "Wood & Stone",
        image:
          "https://globalassets.karndean.com/products/looselay-and-looselay-longboard/looselay/residential-roomsets/golden-danish-oak--llp359--kitchen--p2_cm.jpg",
      },
      {
        name: "Knight Tile",
        slug: "knight-tile",
        description:
          "Entry-level collection offering signature Karndean style in oak, pine, marble, slate, and limestone designs. Available in chevron planks, gluedown, and rigid core options.",
        format: "Plank & Tile",
        style: "Wood & Stone",
        image:
          "https://globalassets.karndean.com/products/knight-tile-multi/residential-roomsets/scb-st31-g-rivermarble-kitchen-p1_cm.jpg",
      },
      {
        name: "Korlok Reserve",
        slug: "korlok-reserve",
        description:
          "Features oak, elm, maple and more in rigid core format for rapid installation. Stylish designs inspired by a variety of wood species with enhanced acoustic performance.",
        format: "Rigid Core Plank",
        style: "Wood Look",
        image:
          "https://globalassets.karndean.com/products/korlok-and-korlok-reserve/korlok-reserve/residential-roomsets/rcp6546-millstonesycamore-homeoffice-ls1_cm.jpg",
      },
    ],
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
    products: [
      {
        name: "Aspirations",
        slug: "aspirations",
        description:
          "Premium 4.5mm luxury vinyl plank with 0.55mm wear layer, featuring 12 authentic oak designs from light Chardonnay to rich Cocoa tones. Scratch, stain, and water resistant for demanding commercial environments.",
        format: "Plank (1219 x 184mm)",
        style: "Wood Look",
        image:
          "https://www.armstrongflooring.au/cdn/shop/files/Malt_Oak_175_Portrait_Aspirations.jpg?v=1727850062",
      },
      {
        name: "Chesterfield",
        slug: "chesterfield",
        description:
          "12 timber designs including Australian hardwoods — Spotted Gum, Blackbutt, and Tassie Oak. 5-star acoustic rating (43dB) and GreenTag Level A certified. Waterproof with scratch and stain resistance.",
        format: "Plank (1219 x 184mm)",
        style: "Wood Look",
        image:
          "https://www.armstrongflooring.au/cdn/shop/files/Chesterfield_2.0_Fortuna_Oak-tile_600x.jpg?v=1712904868",
      },
      {
        name: "Natural Creations EarthCuts",
        slug: "natural-creations-earthcuts",
        description:
          "17 colours in authentic terrazzo, stone, and concrete visuals including Sandstone, Concrete Grey, and Firenze Terrazzo. Waterproof, 5-star acoustic rating for healthcare, education, and aged care.",
        format: "Tile",
        style: "Stone & Terrazzo",
        image:
          "https://www.armstrongflooring.au/cdn/shop/files/Sandstone3L233134_Landscape_NaturalCreationsEarthCuts.jpg?v=1732596599",
      },
      {
        name: "Natural Creations Longplank",
        slug: "natural-creations-longplank",
        description:
          "Ultra-matte finish long-format planks in 18 designs including Lemon Scented Gum, Rose Gum, and Southern Blackbutt. 4.5mm thickness with 0.55mm wear layer for commercial durability.",
        format: "Long Plank (1500 x 185mm)",
        style: "Wood Look",
        image:
          "https://www.armstrongflooring.au/cdn/shop/files/LemonScentedGum215_Portrait_NCLongplank_895ef0c8-8ea3-4741-bb86-ae167e2fc61c.jpg?v=1729744853",
      },
      {
        name: "Natural Creations XL",
        slug: "natural-creations-xl",
        description:
          "The widest plank in the Natural Creations range at 230mm. 18 designs including Barnyard Grey, Riverland Limed, and Mount Barker Ironbark. 5.0mm thick with 5-star acoustic rating (42dB).",
        format: "XL Plank (1500 x 230mm)",
        style: "Wood Look",
        image:
          "https://www.armstrongflooring.au/cdn/shop/files/RiverlandLimed3X111907_Landscape_NaturalCreationsXL.jpg",
      },
      {
        name: "Natural Creations ArborArt",
        slug: "natural-creations-arborart",
        description:
          "22 classical and contemporary wood-grain designs including Ghost Gum, Summer Oak, and Limed Oak. 0.55mm wear layer with 5-star acoustic rating. GreenTag Level A certified.",
        format: "Plank",
        style: "Wood Look",
        image:
          "https://www.armstrongflooring.au/cdn/shop/files/GhostGum3L093606_Landscape_NaturalCreationsArborArt.jpg?v=1732595690",
      },
    ],
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
    products: [
      {
        name: "iD Inspiration Ultimate",
        slug: "id-inspiration-ultimate",
        description:
          "Ultra-resistant vinyl tile flooring combining easy installation, extreme durability, acoustic comfort, and lifelike designs. Answers all needs in one robust and long-lasting solution.",
        format: "Plank & Tile",
        style: "Wood & Stone",
        image:
          "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Ultimate_001.jpg",
      },
      {
        name: "iD Naturals 70",
        slug: "id-naturals-70",
        description:
          "Advanced digital printing reveals the most subtle details of wood and stone, making each plank or tile unique. 0.70mm wear layer for heavy traffic commercial areas.",
        format: "Plank & Tile",
        style: "Wood & Stone",
        image:
          "https://media.tarkett-image.com/medium/IN_iD_Naturals_70_001.jpg",
      },
      {
        name: "iD Comfort 19",
        slug: "id-comfort-19",
        description:
          "Multi-layer construction with built-in foam backing delivers 19dB impact sound reduction. Ideal for multi-storey buildings, aged care, and open-plan offices where acoustic comfort is essential.",
        format: "Plank & Tile",
        style: "Wood & Stone",
        image:
          "https://media.tarkett-image.com/medium/IN_iD_Comfort_19_001.jpg",
      },
      {
        name: "iD Inspiration Loose-Lay",
        slug: "id-inspiration-loose-lay",
        description:
          "Combines design and performance for quick renovation projects. Vinyl planks can be easily combined to create stunning layouts from distressed beachwoods to sawn oaks.",
        format: "Loose-Lay Plank",
        style: "Wood Look",
        image:
          "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Loose_Lay_001.jpg",
      },
      {
        name: "iD Inspiration 55",
        slug: "id-inspiration-55",
        description:
          "30 brilliant colours including 24 planks and 6 tile compositions with abstract, stone, and woven arrangements. 0.55mm wear layer for moderate to heavy commercial traffic.",
        format: "Plank & Tile",
        style: "Wood, Stone & Abstract",
        image:
          "https://media.tarkett-image.com/medium/IN_iD_Inspiration_55_001.jpg",
      },
      {
        name: "iD Click Ultimate",
        slug: "id-click-ultimate",
        description:
          "Natural design rendering with ultimate performance for retail, hospitality, and workplace. Combines extreme durability with sound absorption and water resistance in easy-to-install click tiles.",
        format: "Click Plank & Tile",
        style: "Wood & Stone",
        image:
          "https://media.tarkett-image.com/medium/IN_iD_Click_Ultimate_001.jpg",
      },
    ],
  },
];

export function getRangeBySlug(slug: string): Range | undefined {
  return ranges.find((r) => r.slug === slug);
}
