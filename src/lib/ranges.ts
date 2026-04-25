export interface RangeSpec {
  label: string;
  value: string;
}

export interface Colourway {
  name: string;
  code?: string;
  image: string;
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  format: string;
  style: string;
  image: string;
  colourways: Colourway[];
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
      "Interface makes modular vinyl tile that looks good and happens to be carbon neutral. Their LVT range covers realistic wood and stone aesthetics with acoustic backing built in, so your spaces get both visual appeal and noise control.",
      "What sets them apart is the circular economy thinking baked into every product. They design for take-back and recycling from day one, and they actually run programs to reclaim flooring at end of life. If you need to tick green building boxes, their certifications are genuinely earned, not just marketing speak.",
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
          "/images/products/interface/natural-woodgrains-chestnut.jpg",
        colourways: [
          { name: "Chestnut", image: "/images/products/interface/natural-woodgrains-chestnut.jpg" },
          { name: "Beech", image: "/images/products/interface/natural-woodgrains-beech.jpg" },
          { name: "Washed Maple", image: "/images/products/interface/natural-woodgrains-washed-maple.jpg" },
          { name: "Rustic Oak", image: "/images/products/interface/natural-woodgrains-rustic-oak.jpg" },
          { name: "Cherry", image: "/images/products/interface/natural-woodgrains-cherry.jpg" },
          { name: "Bamboo", image: "/images/products/interface/natural-woodgrains-bamboo.jpg" },
        ],
      },
      {
        name: "Textured Woodgrains",
        slug: "textured-woodgrains",
        description:
          "Distressed and antiqued timber aesthetics in 12 colourways from light washed tones to deep dark oaks. Herringbone and ashlar installation patterns available.",
        format: "Skinny Plank (25 x 100cm)",
        style: "Wood Look",
        image:
          "/images/products/interface/textured-woodgrains-antique-light-oak.jpg",
        colourways: [
          { name: "Antique Light Oak", image: "/images/products/interface/textured-woodgrains-antique-light-oak.jpg" },
          { name: "Distressed Walnut", image: "/images/products/interface/textured-woodgrains-distressed-walnut.jpg" },
          { name: "Charcoal Driftwood", image: "/images/products/interface/textured-woodgrains-charcoal-driftwood.jpg" },
          { name: "Smoked Cedar", image: "/images/products/interface/textured-woodgrains-smoked-cedar.jpg" },
          { name: "Antique Ash", image: "/images/products/interface/textured-woodgrains-antique-ash.jpg" },
          { name: "Grey Driftwood", image: "/images/products/interface/textured-woodgrains-grey-driftwood.jpg" },
        ],
      },
      {
        name: "Textured Stones",
        slug: "textured-stones",
        description:
          "Stone-inspired square tiles from subdued concrete to expressive polished cement and marble. Part of the Level Set collection with Sound Choice acoustic backing.",
        format: "Tile (50 x 50cm)",
        style: "Stone Look",
        image:
          "/images/products/interface/textured-stones-dark-concrete.jpg",
        colourways: [
          { name: "Dark Concrete", image: "/images/products/interface/textured-stones-dark-concrete.jpg" },
          { name: "Light Concrete", image: "/images/products/interface/textured-stones-light-concrete.jpg" },
          { name: "Warm Marble", image: "/images/products/interface/textured-stones-warm-marble.jpg" },
          { name: "Cool Marble", image: "/images/products/interface/textured-stones-cool-marble.jpg" },
          { name: "Polished Cement", image: "/images/products/interface/textured-stones-polished-cement.jpg" },
        ],
      },
      {
        name: "Brushed Lines",
        slug: "brushed-lines",
        description:
          "Diffused linear texture with light-capturing sparkle. 22 solid colours from warm and cool neutrals to earthy mineral tones including Blush, Graphite, and Celadon.",
        format: "Tile (50 x 50cm)",
        style: "Abstract / Linear",
        image:
          "/images/products/interface/brushed-lines-blush.jpg",
        colourways: [
          { name: "Blush", image: "/images/products/interface/brushed-lines-blush.jpg" },
          { name: "Graphite", image: "/images/products/interface/brushed-lines-graphite.jpg" },
          { name: "Celadon", image: "/images/products/interface/brushed-lines-celadon.jpg" },
          { name: "Linen", image: "/images/products/interface/brushed-lines-linen.jpg" },
          { name: "Sand", image: "/images/products/interface/brushed-lines-sand.jpg" },
          { name: "Fog", image: "/images/products/interface/brushed-lines-fog.jpg" },
          { name: "Clay", image: "/images/products/interface/brushed-lines-clay.jpg" },
          { name: "Putty", image: "/images/products/interface/brushed-lines-putty.jpg" },
        ],
      },
      {
        name: "Drawn Lines",
        slug: "drawn-lines",
        description:
          "Fractal-inspired prismatic geometry with metallic shimmer. 10 colourways including Smokey Quartz, Diamond, Amber, and Bronze. Fine linear matrix with no visible repeats.",
        format: "Tile (50 x 50cm)",
        style: "Abstract / Geometric",
        image:
          "/images/products/interface/drawn-lines-smokey-quartz.jpg",
        colourways: [
          { name: "Smokey Quartz", image: "/images/products/interface/drawn-lines-smokey-quartz.jpg" },
          { name: "Diamond", image: "/images/products/interface/drawn-lines-diamond.jpg" },
          { name: "Amber", image: "/images/products/interface/drawn-lines-amber.jpg" },
          { name: "Bronze", image: "/images/products/interface/drawn-lines-bronze.jpg" },
          { name: "Platinum", image: "/images/products/interface/drawn-lines-platinum.jpg" },
          { name: "Copper", image: "/images/products/interface/drawn-lines-copper.jpg" },
        ],
      },
      {
        name: "Northern Grain",
        slug: "northern-grain",
        description:
          "Scandinavian-inspired timber with refined satin and washed finishes. 8 colourways including Chiffon Oak, Dark Wash and Aged Satin. Herringbone and ashlar layouts.",
        format: "Plank (12.5 x 100cm)",
        style: "Wood Look",
        image:
          "/images/products/interface/northern-grain-chiffon-oak.jpg",
        colourways: [
          { name: "Chiffon Oak", image: "/images/products/interface/northern-grain-chiffon-oak.jpg" },
          { name: "Dark Wash", image: "/images/products/interface/northern-grain-dark-wash.jpg" },
          { name: "Aged Satin", image: "/images/products/interface/northern-grain-aged-satin.jpg" },
          { name: "Limed Oak", image: "/images/products/interface/northern-grain-limed-oak.jpg" },
          { name: "Natural Light", image: "/images/products/interface/northern-grain-natural-light.jpg" },
          { name: "Silver Wash", image: "/images/products/interface/northern-grain-silver-wash.jpg" },
        ],
      },
      {
        name: "On Grain",
        slug: "on-grain",
        description:
          "Part of the Earthen Forms collection with refined wood-veneer aesthetics. 7 colourways from pale ash to deep walnut including White Oak Veneer and European Walnut.",
        format: "Plank (25 x 100cm)",
        style: "Wood Look",
        image:
          "/images/products/interface/on-grain-white-oak-veneer.jpg",
        colourways: [
          { name: "White Oak Veneer", image: "/images/products/interface/on-grain-white-oak-veneer.jpg" },
          { name: "European Walnut", image: "/images/products/interface/on-grain-european-walnut.jpg" },
          { name: "Pale Ash", image: "/images/products/interface/on-grain-pale-ash.jpg" },
          { name: "Warm Teak", image: "/images/products/interface/on-grain-warm-teak.jpg" },
          { name: "Smoked Oak", image: "/images/products/interface/on-grain-smoked-oak.jpg" },
        ],
      },
      {
        name: "Iridescence",
        slug: "iridescence",
        description:
          "Mineral and organic pigment-inspired abstract surfaces with soft smoky colour transitions. 10 colourways spanning greys, blush pinks, powdery blues, and terracotta.",
        format: "Tile (50 x 50cm)",
        style: "Abstract / Painted",
        image:
          "/images/products/interface/iridescence-blossom.jpg",
        colourways: [
          { name: "Blossom", image: "/images/products/interface/iridescence-blossom.jpg" },
          { name: "Dusk", image: "/images/products/interface/iridescence-dusk.jpg" },
          { name: "Mist", image: "/images/products/interface/iridescence-mist.jpg" },
          { name: "Clay", image: "/images/products/interface/iridescence-clay.jpg" },
          { name: "Shadow", image: "/images/products/interface/iridescence-shadow.jpg" },
          { name: "Ocean", image: "/images/products/interface/iridescence-ocean.jpg" },
        ],
      },
    ],
  },
  {
    name: "Karndean",
    slug: "karndean",
    tagline: "Design Flooring. Beautifully Crafted.",
    description: [
      "Karndean's real strength is the design. Their wood and stone visuals are genuinely convincing, and they've got the broadest range of aesthetics across different product lines. If you need authentic timber looks or classic stone patterns, they've done the work to get the detailing right.",
      "Their LooseLay Longboard is worth knowing about if you're on a tight installation schedule. No adhesive, no mess, quick to lay. It's a practical solution for refurbishments where minimizing disruption matters. Backed by solid warranties and engineered to handle commercial foot traffic without fading or wearing through.",
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
          "Premium 0.7mm wear layer collection inspired by globally sourced wood and stone. European oaks, Italian marble, and limestone with meticulous hand-crafted detail. 20-year commercial warranty.",
        format: "Plank & Tile (Gluedown + Rigid Core)",
        style: "Wood & Stone",
        image:
          "/images/products/karndean/art-select-blended-oak.jpg",
        colourways: [
          { name: "Blended Oak", code: "RL50", image: "/images/products/karndean/art-select-blended-oak.jpg" },
          { name: "Morning Oak", code: "RL21", image: "/images/products/karndean/art-select-morning-oak.jpg" },
          { name: "Glacier Oak", code: "RL20", image: "/images/products/karndean/art-select-glacier-oak.jpg" },
          { name: "Storm Oak", code: "RL12", image: "/images/products/karndean/art-select-storm-oak.jpg" },
          { name: "Calcaria", code: "LM29", image: "/images/products/karndean/art-select-calcaria.jpg" },
          { name: "Fiore", code: "LM31", image: "/images/products/karndean/art-select-fiore.jpg" },
        ],
      },
      {
        name: "Korlok Select",
        slug: "korlok-select",
        description:
          "Premium rigid core with 5G click-lock for fast adhesive-free installation. 0.55mm wear layer with HoldFast lifetime warranty, InteGrout technology, and noise-reducing backing.",
        format: "Rigid Core Plank (1420 x 225mm)",
        style: "Wood & Stone",
        image:
          "/images/products/karndean/korlok-select-canadian-urban-oak.jpg",
        colourways: [
          { name: "Canadian Urban Oak", code: "RKP8116", image: "/images/products/karndean/korlok-select-canadian-urban-oak.jpg" },
          { name: "Baltic Washed Oak", code: "RKP8101", image: "/images/products/karndean/korlok-select-baltic-washed-oak.jpg" },
          { name: "Arctic Driftwood", code: "RKP8112", image: "/images/products/karndean/korlok-select-arctic-driftwood.jpg" },
          { name: "Warm Ash", code: "RKP8103", image: "/images/products/karndean/korlok-select-warm-ash.jpg" },
          { name: "Ivory Brushed Oak", code: "RKP8105", image: "/images/products/karndean/korlok-select-ivory-brushed-oak.jpg" },
        ],
      },
      {
        name: "Van Gogh",
        slug: "van-gogh",
        description:
          "Inspired by wood species worldwide including Australian timbers — Blackbutt, Spotted Gum. Each design lovingly crafted with unique origin story. 0.55mm wear layer, 15-year commercial warranty.",
        format: "Plank (Gluedown + Rigid Core)",
        style: "Wood Look",
        image:
          "/images/products/karndean/van-gogh-smoked-school-cedar.jpg",
        colourways: [
          { name: "Smoked School Cedar", code: "VGW138T", image: "/images/products/karndean/van-gogh-smoked-school-cedar.jpg" },
          { name: "Birch", code: "VGW85T", image: "/images/products/karndean/van-gogh-birch.jpg" },
          { name: "Hessian Oak", code: "VGW93T", image: "/images/products/karndean/van-gogh-hessian-oak.jpg" },
          { name: "French Oak", code: "VGW83T", image: "/images/products/karndean/van-gogh-french-oak.jpg" },
          { name: "Honey Oak", code: "VGW94T", image: "/images/products/karndean/van-gogh-honey-oak.jpg" },
        ],
      },
      {
        name: "Opus",
        slug: "opus",
        description:
          "Modern and contemporary designs spanning wood, stone, abstract, and geometric visuals. Compatible with design strips and borders for custom layouts. Single plank replacement capability.",
        format: "Tile & Plank (Gluedown)",
        style: "Wood, Stone & Abstract",
        image:
          "/images/products/karndean/opus-vermeer-oak.jpg",
        colourways: [
          { name: "Vermeer Oak", code: "WP427", image: "/images/products/karndean/opus-vermeer-oak.jpg" },
          { name: "Argen", code: "SP213", image: "/images/products/karndean/opus-argen.jpg" },
          { name: "Nero", code: "SP115", image: "/images/products/karndean/opus-nero.jpg" },
          { name: "Terra", code: "SP212", image: "/images/products/karndean/opus-terra.jpg" },
          { name: "Urbus", code: "SP213", image: "/images/products/karndean/opus-urbus.jpg" },
        ],
      },
      {
        name: "LooseLay Longboard",
        slug: "looselay-longboard",
        description:
          "1.5m long planks with K-Wave friction-grip backing — no adhesive required. Featuring native Australian species including Spotted Gum and Blackbutt. 0.55mm wear layer with K-Guard+ protection.",
        format: "Longboard Plank (1500 x 250mm)",
        style: "Wood Look",
        image:
          "/images/products/karndean/looselay-field-oak.jpg",
        colourways: [
          { name: "Field Oak", code: "LLP356", image: "/images/products/karndean/looselay-field-oak.jpg" },
          { name: "Champagne Oak", code: "LLP310", image: "/images/products/karndean/looselay-champagne-oak.jpg" },
          { name: "Hartford", code: "LLP311", image: "/images/products/karndean/looselay-hartford.jpg" },
          { name: "Neutral Oak", code: "LLP312", image: "/images/products/karndean/looselay-neutral-oak.jpg" },
          { name: "Coastal Satin", code: "LLP313", image: "/images/products/karndean/looselay-coastal-satin.jpg" },
        ],
      },
      {
        name: "Knight Tile",
        slug: "knight-tile",
        description:
          "Signature Karndean style at entry-level pricing in oak, pine, marble, slate, and limestone. Available in chevron planks, gluedown, and rigid core with 22dB acoustic reduction.",
        format: "Plank & Tile (Gluedown + Rigid Core)",
        style: "Wood & Stone",
        image:
          "/images/products/karndean/knight-tile-mid-limed-oak.jpg",
        colourways: [
          { name: "Mid Limed Oak", code: "KP96", image: "/images/products/karndean/knight-tile-mid-limed-oak.jpg" },
          { name: "Nordic Limed Oak", code: "KP99", image: "/images/products/karndean/knight-tile-nordic-limed-oak.jpg" },
          { name: "Rose Washed Oak", code: "KP95", image: "/images/products/karndean/knight-tile-rose-washed-oak.jpg" },
          { name: "Grey Scandi Pine", code: "KP131", image: "/images/products/karndean/knight-tile-grey-scandi-pine.jpg" },
          { name: "Aran Limestone", code: "ST13", image: "/images/products/karndean/knight-tile-aran-limestone.jpg" },
        ],
      },
      {
        name: "Korlok Reserve",
        slug: "korlok-reserve",
        description:
          "12 intricate wood designs enhanced through oiling, liming, and fuming techniques. Click-and-lock rigid core installs over most hard subfloors. Oak, elm, maple, and sycamore options.",
        format: "Rigid Core Plank (1220 x 179mm)",
        style: "Wood Look",
        image:
          "/images/products/karndean/korlok-reserve-millstone-sycamore.jpg",
        colourways: [
          { name: "Millstone Sycamore", code: "RCP6546", image: "/images/products/karndean/korlok-reserve-millstone-sycamore.jpg" },
          { name: "Limed Coastal Oak", code: "RCP6541", image: "/images/products/karndean/korlok-reserve-limed-coastal-oak.jpg" },
          { name: "Warm Fumed Oak", code: "RCP6542", image: "/images/products/karndean/korlok-reserve-warm-fumed-oak.jpg" },
          { name: "Oiled Elm", code: "RCP6543", image: "/images/products/karndean/korlok-reserve-oiled-elm.jpg" },
          { name: "Smoked Maple", code: "RCP6544", image: "/images/products/karndean/korlok-reserve-smoked-maple.jpg" },
        ],
      },
    ],
  },
  {
    name: "Armstrong",
    slug: "armstrong",
    tagline: "Performance Flooring You Can Trust.",
    description: [
      "Armstrong built their reputation in healthcare and aged care environments where flooring has to stand up to heavy wear, frequent chemical cleaning, and strict hygiene standards. They know institutional spaces because they've been selling into them for decades. Their range covers everything from budget options to premium, with thicknesses from 2.5mm to 5.0mm depending on the application.",
      "Their Diamond 10 surface treatment is their main tech—it resists scratches and scuffs without needing polish or wax, which keeps maintenance costs down over the life of the floor. Solid option if you need reliable performance in a tough environment and prefer not to think too hard about ongoing care.",
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
          "/images/products/armstrong/aspirations-malt-oak.jpg",
        colourways: [
          { name: "Chardonnay Oak", image: "/images/products/armstrong/aspirations-chardonnay-oak.jpg" },
          { name: "Silver Oak", image: "/images/products/armstrong/aspirations-silver-oak.jpg" },
          { name: "Jamieson Oak", image: "/images/products/armstrong/aspirations-jamieson-oak.jpg" },
          { name: "Booker Oak", image: "/images/products/armstrong/aspirations-booker-oak.jpg" },
          { name: "Malt Oak", image: "/images/products/armstrong/aspirations-malt-oak-swatch.jpg" },
          { name: "Cocoa Oak", image: "/images/products/armstrong/aspirations-malt-oak.jpg" },
        ],
      },
      {
        name: "Chesterfield",
        slug: "chesterfield",
        description:
          "12 timber designs including Australian hardwoods — Spotted Gum, Blackbutt, and Tassie Oak. 5-star acoustic rating (43dB) and GreenTag Level A certified. Waterproof with scratch and stain resistance.",
        format: "Plank (1219 x 184mm)",
        style: "Wood Look",
        image:
          "/images/products/armstrong/chesterfield-fortuna-oak-hero.jpg",
        colourways: [
          { name: "Fortuna Oak", image: "/images/products/armstrong/chesterfield-fortuna-oak.jpg" },
          { name: "Grand Blackbutt", image: "/images/products/armstrong/chesterfield-grand-blackbutt.jpg" },
          { name: "Grand Oak", image: "/images/products/armstrong/chesterfield-grand-oak.jpg" },
          { name: "Havana Oak", image: "/images/products/armstrong/chesterfield-havana-oak.jpg" },
          { name: "Java Oak", image: "/images/products/armstrong/chesterfield-java-oak.jpg" },
          { name: "Natural Spotted Gum", image: "/images/products/armstrong/chesterfield-natural-spotted-gum.jpg" },
          { name: "Prime Tassie Oak", image: "/images/products/armstrong/chesterfield-prime-tassie-oak.jpg" },
          { name: "Seasoned Spotted Gum", image: "/images/products/armstrong/chesterfield-seasoned-spotted-gum.jpg" },
          { name: "Select Tassie Oak", image: "/images/products/armstrong/chesterfield-select-tassie-oak.jpg" },
          { name: "Silky Blackbutt", image: "/images/products/armstrong/chesterfield-silky-blackbutt.jpg" },
          { name: "Stirling Oak", image: "/images/products/armstrong/chesterfield-stirling-oak.jpg" },
        ],
      },
      {
        name: "Natural Creations EarthCuts",
        slug: "natural-creations-earthcuts",
        description:
          "17 colours in authentic terrazzo, stone, and concrete visuals including Sandstone, Concrete Grey, and Firenze Terrazzo. Waterproof, 5-star acoustic rating for healthcare, education, and aged care.",
        format: "Tile",
        style: "Stone & Terrazzo",
        image:
          "/images/products/armstrong/earthcuts-sandstone.jpg",
        colourways: [
          { name: "Sandstone", image: "/images/products/armstrong/earthcuts-sandstone.jpg" },
          { name: "Concrete Grey", image: "/images/products/armstrong/earthcuts-concrete-grey.jpg" },
          { name: "Firenze Terrazzo", image: "/images/products/armstrong/earthcuts-sandstone.jpg" },
          { name: "Bianco Terrazzo", image: "/images/products/armstrong/earthcuts-concrete-grey.jpg" },
          { name: "Limestone", image: "/images/products/armstrong/earthcuts-sandstone.jpg" },
        ],
      },
      {
        name: "Natural Creations Longplank",
        slug: "natural-creations-longplank",
        description:
          "Ultra-matte finish long-format planks in 18 designs including Lemon Scented Gum, Rose Gum, and Southern Blackbutt. 4.5mm thickness with 0.55mm wear layer for commercial durability.",
        format: "Long Plank (1500 x 185mm)",
        style: "Wood Look",
        image:
          "/images/products/armstrong/longplank-lemon-scented-gum.jpg",
        colourways: [
          { name: "Lemon Scented Gum", image: "/images/products/armstrong/longplank-lemon-scented-gum.jpg" },
          { name: "Barnyard Dusk", image: "/images/products/armstrong/longplank-barnyard-dusk.jpg" },
          { name: "Rose Gum", image: "/images/products/armstrong/longplank-rose-gum.jpg" },
          { name: "Southern Blackbutt", image: "/images/products/armstrong/longplank-southern-blackbutt.jpg" },
          { name: "Wormy Chestnut", image: "/images/products/armstrong/longplank-wormy-chestnut.jpg" },
          { name: "Chocolate Oak", image: "/images/products/armstrong/longplank-chocolate-oak.jpg" },
          { name: "Ancient Hardwood", image: "/images/products/armstrong/longplank-ancient-hardwood.jpg" },
          { name: "Blanc Oak", image: "/images/products/armstrong/longplank-blanc-oak.jpg" },
          { name: "Century Oak", image: "/images/products/armstrong/longplank-century-oak.jpg" },
        ],
      },
      {
        name: "Natural Creations XL",
        slug: "natural-creations-xl",
        description:
          "The widest plank in the Natural Creations range at 230mm. 18 designs including Barnyard Grey, Riverland Limed, and Mount Barker Ironbark. 5.0mm thick with 5-star acoustic rating (42dB).",
        format: "XL Plank (1500 x 230mm)",
        style: "Wood Look",
        image:
          "/images/products/armstrong/xl-riverland-limed.jpg",
        colourways: [
          { name: "Riverland Limed", image: "/images/products/armstrong/xl-riverland-limed.jpg" },
          { name: "Barnyard Grey", image: "/images/products/armstrong/xl-riverland-limed.jpg" },
          { name: "Mount Barker Ironbark", image: "/images/products/armstrong/xl-riverland-limed.jpg" },
          { name: "Oaklands Park", image: "/images/products/armstrong/xl-riverland-limed.jpg" },
          { name: "Royal Park Ironbark", image: "/images/products/armstrong/xl-riverland-limed.jpg" },
        ],
      },
      {
        name: "Natural Creations ArborArt",
        slug: "natural-creations-arborart",
        description:
          "22 classical and contemporary wood-grain designs including Ghost Gum, Summer Oak, and Limed Oak. 0.55mm wear layer with 5-star acoustic rating. GreenTag Level A certified.",
        format: "Plank",
        style: "Wood Look",
        image:
          "/images/products/armstrong/arborart-ghost-gum.jpg",
        colourways: [
          { name: "Ghost Gum", image: "/images/products/armstrong/arborart-ghost-gum.jpg" },
          { name: "Limed Oak", image: "/images/products/armstrong/arborart-ghost-gum.jpg" },
          { name: "Summer Oak", image: "/images/products/armstrong/arborart-ghost-gum.jpg" },
          { name: "Autumn Barn Wood", image: "/images/products/armstrong/arborart-ghost-gum.jpg" },
        ],
      },
    ],
  },
  {
    name: "Tarkett",
    slug: "tarkett",
    tagline: "Flooring That's Good for People and Planet.",
    description: [
      "Tarkett's main advantage is their commitment to demonstrable environmental standards. They've earned Cradle to Cradle and GreenTag certifications because they actually measure and report on material health, manufacturing impact, and end-of-life recycling. If you need to satisfy Green Star or WELL requirements with more than marketing claims, this is where to start.",
      "Their iD collection has a genuinely broad design range—wood, stone, concrete, abstract—and they've invested in acoustic solutions that work (19dB impact sound reduction is meaningful in multi-level buildings and open offices). The click installations are easy to manage, and like Interface, they run actual take-back programs to keep vinyl out of landfill.",
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
          "/images/products/tarkett/id-inspiration-ultimate.jpg",
        colourways: [
          { name: "English Oak Natural", image: "/images/products/tarkett/id-inspiration-ultimate.jpg" },
          { name: "English Oak Grey", image: "/images/products/tarkett/id-inspiration-ultimate.jpg" },
          { name: "Carrara Marble White", image: "/images/products/tarkett/id-inspiration-ultimate.jpg" },
          { name: "Vintage Oak Light Grey", image: "/images/products/tarkett/id-inspiration-ultimate.jpg" },
          { name: "Brushed Pine Natural", image: "/images/products/tarkett/id-inspiration-ultimate.jpg" },
        ],
      },
      {
        name: "iD Naturals 70",
        slug: "id-naturals-70",
        description:
          "Advanced digital printing reveals the most subtle details of wood and stone, making each plank or tile unique. 0.70mm wear layer for heavy traffic commercial areas.",
        format: "Plank & Tile",
        style: "Wood & Stone",
        image:
          "/images/products/tarkett/id-naturals-70.jpg",
        colourways: [
          { name: "Oak Natural", image: "/images/products/tarkett/id-naturals-70.jpg" },
          { name: "Oak Warm Brown", image: "/images/products/tarkett/id-naturals-70.jpg" },
          { name: "Concrete Light Grey", image: "/images/products/tarkett/id-naturals-70.jpg" },
          { name: "Travertine Ivory", image: "/images/products/tarkett/id-naturals-70.jpg" },
        ],
      },
      {
        name: "iD Comfort 19",
        slug: "id-comfort-19",
        description:
          "Multi-layer construction with built-in foam backing delivers 19dB impact sound reduction. Ideal for multi-storey buildings, aged care, and open-plan offices where acoustic comfort is essential.",
        format: "Plank & Tile",
        style: "Wood & Stone",
        image:
          "/images/products/tarkett/id-comfort-19.jpg",
        colourways: [
          { name: "Rustic Oak Warm Natural", image: "/images/products/tarkett/id-comfort-19.jpg" },
          { name: "Rustic Oak Grey", image: "/images/products/tarkett/id-comfort-19.jpg" },
          { name: "Rustic Oak Light Brown", image: "/images/products/tarkett/id-comfort-19.jpg" },
          { name: "Concrete Light Grey", image: "/images/products/tarkett/id-comfort-19.jpg" },
        ],
      },
      {
        name: "iD Inspiration Loose-Lay",
        slug: "id-inspiration-loose-lay",
        description:
          "Combines design and performance for quick renovation projects. Vinyl planks can be easily combined to create stunning layouts from distressed beachwoods to sawn oaks.",
        format: "Loose-Lay Plank",
        style: "Wood Look",
        image:
          "/images/products/tarkett/id-inspiration-loose-lay.jpg",
        colourways: [
          { name: "Sawn Oak Grey", image: "/images/products/tarkett/id-inspiration-loose-lay.jpg" },
          { name: "Sawn Oak Natural", image: "/images/products/tarkett/id-inspiration-loose-lay.jpg" },
          { name: "Beach Wood Beige", image: "/images/products/tarkett/id-inspiration-loose-lay.jpg" },
          { name: "Distressed Wood Brown", image: "/images/products/tarkett/id-inspiration-loose-lay.jpg" },
        ],
      },
      {
        name: "iD Inspiration 55",
        slug: "id-inspiration-55",
        description:
          "30 brilliant colours including 24 planks and 6 tile compositions with abstract, stone, and woven arrangements. 0.55mm wear layer for moderate to heavy commercial traffic.",
        format: "Plank & Tile",
        style: "Wood, Stone & Abstract",
        image:
          "/images/products/tarkett/id-inspiration-55.jpg",
        colourways: [
          { name: "Contemporary Oak Natural", image: "/images/products/tarkett/id-inspiration-55.jpg" },
          { name: "Contemporary Oak Grey", image: "/images/products/tarkett/id-inspiration-55.jpg" },
          { name: "Brushed Pine Natural", image: "/images/products/tarkett/id-inspiration-55.jpg" },
          { name: "Woven Vinyl Grey", image: "/images/products/tarkett/id-inspiration-55.jpg" },
          { name: "Concrete Light Grey", image: "/images/products/tarkett/id-inspiration-55.jpg" },
        ],
      },
      {
        name: "iD Click Ultimate",
        slug: "id-click-ultimate",
        description:
          "Natural design rendering with ultimate performance for retail, hospitality, and workplace. Combines extreme durability with sound absorption and water resistance in easy-to-install click tiles.",
        format: "Click Plank & Tile",
        style: "Wood & Stone",
        image:
          "/images/products/tarkett/id-click-ultimate.jpg",
        colourways: [
          { name: "Scandinavian Oak Natural", image: "/images/products/tarkett/id-click-ultimate.jpg" },
          { name: "Scandinavian Oak Grey", image: "/images/products/tarkett/id-click-ultimate.jpg" },
          { name: "Light Oak Natural", image: "/images/products/tarkett/id-click-ultimate.jpg" },
          { name: "Marble White", image: "/images/products/tarkett/id-click-ultimate.jpg" },
        ],
      },
    ],
  },
];

export function getRangeBySlug(slug: string): Range | undefined {
  return ranges.find((r) => r.slug === slug);
}

export function getProductBySlug(
  rangeSlug: string,
  productSlug: string
): { range: Range; product: Product } | undefined {
  const range = getRangeBySlug(rangeSlug);
  if (!range) return undefined;
  const product = range.products.find((p) => p.slug === productSlug);
  if (!product) return undefined;
  return { range, product };
}
