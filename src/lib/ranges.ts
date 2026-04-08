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
        colourways: [
          { name: "Chestnut", image: "https://s7d1.scene7.com/is/image/interfaceprd/NaturalWoodgrains_Chestnut2_wip4_sl_web?wid=600&fit=constrain" },
          { name: "Beech", image: "https://s7d1.scene7.com/is/image/interfaceprd/NaturalWoodgrains_Beech_wip4_sl_web?wid=600&fit=constrain" },
          { name: "Washed Maple", image: "https://s7d1.scene7.com/is/image/interfaceprd/NaturalWoodgrains_WashedMaple_wip4_sl_web?wid=600&fit=constrain" },
          { name: "Rustic Oak", image: "https://s7d1.scene7.com/is/image/interfaceprd/NaturalWoodgrains_RusticOak_wip4_sl_web?wid=600&fit=constrain" },
          { name: "Cherry", image: "https://s7d1.scene7.com/is/image/interfaceprd/NaturalWoodgrains_Cherry_wip4_sl_web?wid=600&fit=constrain" },
          { name: "Bamboo", image: "https://s7d1.scene7.com/is/image/interfaceprd/NaturalWoodgrains_Bamboo_wip4_sl_web?wid=600&fit=constrain" },
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
          "https://s7d1.scene7.com/is/image/interfaceprd/textured-woodgrains_antique-light-oak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
        colourways: [
          { name: "Antique Light Oak", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-woodgrains_antique-light-oak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Distressed Walnut", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-woodgrains_distressed-walnut_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Charcoal Driftwood", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-woodgrains_charcoal-driftwood_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Smoked Cedar", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-woodgrains_smoked-cedar_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Antique Ash", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-woodgrains_antique-ash_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Grey Driftwood", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-woodgrains_grey-driftwood_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
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
          "https://s7d1.scene7.com/is/image/interfaceprd/textured-stones_dark-concrete_va1?hei=600&fit=constrain&fmt=jpg&qlt=85",
        colourways: [
          { name: "Dark Concrete", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-stones_dark-concrete_va1?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Light Concrete", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-stones_light-concrete_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Warm Marble", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-stones_warm-marble_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Cool Marble", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-stones_cool-marble_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Polished Cement", image: "https://s7d1.scene7.com/is/image/interfaceprd/textured-stones_polished-cement_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
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
          "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_blush_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
        colourways: [
          { name: "Blush", image: "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_blush_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Graphite", image: "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_graphite_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Celadon", image: "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_celadon_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Linen", image: "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_linen_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Sand", image: "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_sand_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Fog", image: "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_fog_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Clay", image: "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_clay_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Putty", image: "https://s7d1.scene7.com/is/image/interfaceprd/brushed-lines_putty_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
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
          "https://s7d1.scene7.com/is/image/interfaceprd/drawn-lines_smokey-quartz_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
        colourways: [
          { name: "Smokey Quartz", image: "https://s7d1.scene7.com/is/image/interfaceprd/drawn-lines_smokey-quartz_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Diamond", image: "https://s7d1.scene7.com/is/image/interfaceprd/drawn-lines_diamond_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Amber", image: "https://s7d1.scene7.com/is/image/interfaceprd/drawn-lines_amber_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Bronze", image: "https://s7d1.scene7.com/is/image/interfaceprd/drawn-lines_bronze_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Platinum", image: "https://s7d1.scene7.com/is/image/interfaceprd/drawn-lines_platinum_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Copper", image: "https://s7d1.scene7.com/is/image/interfaceprd/drawn-lines_copper_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
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
          "https://s7d1.scene7.com/is/image/interfaceprd/northerngrain_chiffonoak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
        colourways: [
          { name: "Chiffon Oak", image: "https://s7d1.scene7.com/is/image/interfaceprd/northerngrain_chiffonoak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Dark Wash", image: "https://s7d1.scene7.com/is/image/interfaceprd/northerngrain_darkwash_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Aged Satin", image: "https://s7d1.scene7.com/is/image/interfaceprd/northerngrain_agedsatin_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Limed Oak", image: "https://s7d1.scene7.com/is/image/interfaceprd/northerngrain_limedoak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Natural Light", image: "https://s7d1.scene7.com/is/image/interfaceprd/northerngrain_naturallight_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Silver Wash", image: "https://s7d1.scene7.com/is/image/interfaceprd/northerngrain_silverwash_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
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
          "https://s7d1.scene7.com/is/image/interfaceprd/on-grain_white-oak-veneer_va0?hei=600&fit=constrain&fmt=jpg&qlt=85",
        colourways: [
          { name: "White Oak Veneer", image: "https://s7d1.scene7.com/is/image/interfaceprd/on-grain_white-oak-veneer_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "European Walnut", image: "https://s7d1.scene7.com/is/image/interfaceprd/on-grain_european-walnut_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Pale Ash", image: "https://s7d1.scene7.com/is/image/interfaceprd/on-grain_pale-ash_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Warm Teak", image: "https://s7d1.scene7.com/is/image/interfaceprd/on-grain_warm-teak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Smoked Oak", image: "https://s7d1.scene7.com/is/image/interfaceprd/on-grain_smoked-oak_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
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
          "https://s7d1.scene7.com/is/image/interfaceprd/iridescence_blossom_va1?hei=600&fit=constrain&fmt=jpg&qlt=85",
        colourways: [
          { name: "Blossom", image: "https://s7d1.scene7.com/is/image/interfaceprd/iridescence_blossom_va1?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Dusk", image: "https://s7d1.scene7.com/is/image/interfaceprd/iridescence_dusk_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Mist", image: "https://s7d1.scene7.com/is/image/interfaceprd/iridescence_mist_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Clay", image: "https://s7d1.scene7.com/is/image/interfaceprd/iridescence_clay_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Shadow", image: "https://s7d1.scene7.com/is/image/interfaceprd/iridescence_shadow_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
          { name: "Ocean", image: "https://s7d1.scene7.com/is/image/interfaceprd/iridescence_ocean_va0?hei=600&fit=constrain&fmt=jpg&qlt=85" },
        ],
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
          "Premium 0.7mm wear layer collection inspired by globally sourced wood and stone. European oaks, Italian marble, and limestone with meticulous hand-crafted detail. 20-year commercial warranty.",
        format: "Plank & Tile (Gluedown + Rigid Core)",
        style: "Wood & Stone",
        image:
          "https://www.karndean.com/globalassets/products/art-select/residential-roomsets/blended-oak-rl50_akp-rl50-dining-room.jpg",
        colourways: [
          { name: "Blended Oak", code: "RL50", image: "https://www.karndean.com/globalassets/products/art-select/residential-roomsets/blended-oak-rl50_akp-rl50-dining-room.jpg" },
          { name: "Morning Oak", code: "RL21", image: "https://www.karndean.com/globalassets/products/art-select/swatch-images/morning-oak-rl21-702x702.jpg" },
          { name: "Glacier Oak", code: "RL20", image: "https://www.karndean.com/globalassets/products/art-select/swatch-images/glacier-oak-rl20-702x702.jpg" },
          { name: "Storm Oak", code: "RL12", image: "https://www.karndean.com/globalassets/products/art-select/swatch-images/storm-oak-rl12-702x702.jpg" },
          { name: "Calcaria", code: "LM29", image: "https://www.karndean.com/globalassets/products/art-select/swatch-images/calcaria-lm29-702x702.jpg" },
          { name: "Fiore", code: "LM31", image: "https://www.karndean.com/globalassets/products/art-select/swatch-images/fiore-lm31-702x702.jpg" },
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
          "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok/residential-roomsets/canadian-urban-oak--rkp8116--living-space--p_cm.jpg",
        colourways: [
          { name: "Canadian Urban Oak", code: "RKP8116", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok/residential-roomsets/canadian-urban-oak--rkp8116--living-space--p_cm.jpg" },
          { name: "Baltic Washed Oak", code: "RKP8101", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok/swatch-images/baltic-washed-oak-rkp8101-702x702.jpg" },
          { name: "Arctic Driftwood", code: "RKP8112", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok/swatch-images/arctic-driftwood-rkp8112-702x702.jpg" },
          { name: "Warm Ash", code: "RKP8103", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok/swatch-images/warm-ash-rkp8103-702x702.jpg" },
          { name: "Ivory Brushed Oak", code: "RKP8105", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok/swatch-images/ivory-brushed-oak-rkp8105-702x702.jpg" },
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
          "https://www.karndean.com/globalassets/karndean/b2c-blocks/b2c-carousel-card-block/usa/smoked-school-cedar-vgw138t_scb138-kitchen.jpg",
        colourways: [
          { name: "Smoked School Cedar", code: "VGW138T", image: "https://www.karndean.com/globalassets/karndean/b2c-blocks/b2c-carousel-card-block/usa/smoked-school-cedar-vgw138t_scb138-kitchen.jpg" },
          { name: "Birch", code: "VGW85T", image: "https://www.karndean.com/globalassets/products/van-gogh/swatch-images/birch-vgw85t-702x702.jpg" },
          { name: "Hessian Oak", code: "VGW93T", image: "https://www.karndean.com/globalassets/products/van-gogh/swatch-images/hessian-oak-vgw93t-702x702.jpg" },
          { name: "French Oak", code: "VGW83T", image: "https://www.karndean.com/globalassets/products/van-gogh/swatch-images/french-oak-vgw83t-702x702.jpg" },
          { name: "Honey Oak", code: "VGW94T", image: "https://www.karndean.com/globalassets/products/van-gogh/swatch-images/honey-oak-vgw94t-702x702.jpg" },
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
          "https://www.karndean.com/globalassets/karndean/b2c-blocks/b2c-random-image-hero/usa/opus/vermeer-oak--wp427--kitchen---desktop.jpg",
        colourways: [
          { name: "Vermeer Oak", code: "WP427", image: "https://www.karndean.com/globalassets/karndean/b2c-blocks/b2c-random-image-hero/usa/opus/vermeer-oak--wp427--kitchen---desktop.jpg" },
          { name: "Argen", code: "SP213", image: "https://www.karndean.com/globalassets/products/opus/swatch-images/argen-sp213-702x702.jpg" },
          { name: "Nero", code: "SP115", image: "https://www.karndean.com/globalassets/products/opus/swatch-images/nero-sp115-702x702.jpg" },
          { name: "Terra", code: "SP212", image: "https://www.karndean.com/globalassets/products/opus/swatch-images/terra-sp212-702x702.jpg" },
          { name: "Urbus", code: "SP213", image: "https://www.karndean.com/globalassets/products/opus/swatch-images/urbus-sp211-702x702.jpg" },
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
          "https://www.karndean.com/globalassets/products/looselay-and-looselay-longboard/looselay/residential-roomsets/field-oak--llp356--bedroom--p_cm2.jpg",
        colourways: [
          { name: "Field Oak", code: "LLP356", image: "https://www.karndean.com/globalassets/products/looselay-and-looselay-longboard/looselay/residential-roomsets/field-oak--llp356--bedroom--p_cm2.jpg" },
          { name: "Champagne Oak", code: "LLP310", image: "https://www.karndean.com/globalassets/products/looselay-and-looselay-longboard/looselay-longboard/swatch-images/champagne-oak-llp310-702x702.jpg" },
          { name: "Hartford", code: "LLP311", image: "https://www.karndean.com/globalassets/products/looselay-and-looselay-longboard/looselay-longboard/swatch-images/hartford-llp311-702x702.jpg" },
          { name: "Neutral Oak", code: "LLP312", image: "https://www.karndean.com/globalassets/products/looselay-and-looselay-longboard/looselay-longboard/swatch-images/neutral-oak-llp312-702x702.jpg" },
          { name: "Coastal Satin", code: "LLP313", image: "https://www.karndean.com/globalassets/products/looselay-and-looselay-longboard/looselay-longboard/swatch-images/coastal-satin-llp313-702x702.jpg" },
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
          "https://www.karndean.com/globalassets/karndean/b2c-blocks/b2c-carousel-card-block/usa/mid-limed-oak-ch-kp96_scb-ch-kp96-bedroom.jpg",
        colourways: [
          { name: "Mid Limed Oak", code: "KP96", image: "https://www.karndean.com/globalassets/karndean/b2c-blocks/b2c-carousel-card-block/usa/mid-limed-oak-ch-kp96_scb-ch-kp96-bedroom.jpg" },
          { name: "Nordic Limed Oak", code: "KP99", image: "https://www.karndean.com/globalassets/products/knight-tile/swatch-images/nordic-limed-oak-kp99-702x702.jpg" },
          { name: "Rose Washed Oak", code: "KP95", image: "https://www.karndean.com/globalassets/products/knight-tile/swatch-images/rose-washed-oak-kp95-702x702.jpg" },
          { name: "Grey Scandi Pine", code: "KP131", image: "https://www.karndean.com/globalassets/products/knight-tile/swatch-images/grey-scandi-pine-kp131-702x702.jpg" },
          { name: "Aran Limestone", code: "ST13", image: "https://www.karndean.com/globalassets/products/knight-tile/swatch-images/aran-limestone-st13-702x702.jpg" },
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
          "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok-reserve/residential-roomsets/rcp6546-millstonesycamore-homeoffice-ls1_cm.jpg",
        colourways: [
          { name: "Millstone Sycamore", code: "RCP6546", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok-reserve/residential-roomsets/rcp6546-millstonesycamore-homeoffice-ls1_cm.jpg" },
          { name: "Limed Coastal Oak", code: "RCP6541", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok-reserve/swatch-images/limed-coastal-oak-rcp6541-702x702.jpg" },
          { name: "Warm Fumed Oak", code: "RCP6542", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok-reserve/swatch-images/warm-fumed-oak-rcp6542-702x702.jpg" },
          { name: "Oiled Elm", code: "RCP6543", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok-reserve/swatch-images/oiled-elm-rcp6543-702x702.jpg" },
          { name: "Smoked Maple", code: "RCP6544", image: "https://www.karndean.com/globalassets/products/korlok-and-korlok-reserve/korlok-reserve/swatch-images/smoked-maple-rcp6544-702x702.jpg" },
        ],
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
        colourways: [
          { name: "Chardonnay Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/CHARDONNAYOAKSWATCH.jpg?v=1700696900" },
          { name: "Silver Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/SILVEROAKSWATCH.jpg?v=1700696933" },
          { name: "Jamieson Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/JAMIESONOAKSWATCH.jpg?v=1700696954" },
          { name: "Booker Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/BOOKEROAKSWATCH.jpg?v=1700608417" },
          { name: "Malt Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/MALTOAKSWATCH.jpg?v=1700696992" },
          { name: "Cocoa Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/Malt_Oak_175_Portrait_Aspirations.jpg?v=1727850062" },
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
          "https://www.armstrongflooring.au/cdn/shop/files/Chesterfield_2.0_Fortuna_Oak-tile_600x.jpg?v=1712904868",
        colourways: [
          { name: "Fortuna Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.120FORTUNAOAKSWATCH_1000x.jpg?v=1687484798" },
          { name: "Grand Blackbutt", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.250GRANDBLACKBUTTSWATCH_1000x.jpg?v=1687485381" },
          { name: "Grand Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.150GRANDOAKSWATCH_1000x.jpg?v=1687484025" },
          { name: "Havana Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.175HAVANAOAKSWATCH_1000x.jpg?v=1687484315" },
          { name: "Java Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.140JAVAOAKSWATCH_1000x.jpg?v=1687484710" },
          { name: "Natural Spotted Gum", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.360NATURALSPOTTEDGUMSWATCH_1000x.jpg?v=1687483017" },
          { name: "Prime Tassie Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.450PRIMETASSIEOAKSWATCH_1000x.jpg?v=1687482831" },
          { name: "Seasoned Spotted Gum", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.320SEASONEDSPOTTEDGUMSWATCH_1000x.jpg?v=1687483113" },
          { name: "Select Tassie Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.430SELECTTASSIEOAKSWATCH_1000x.jpg?v=1687482892" },
          { name: "Silky Blackbutt", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.220SILKYBLACKBUTTSWATCH_1000x.jpg?v=1687484154" },
          { name: "Stirling Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/LVT1200.184.110STIRLINGOAKSWATCH_1000x.jpg?v=1687485632" },
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
          "https://www.armstrongflooring.au/cdn/shop/files/Sandstone3L233134_Landscape_NaturalCreationsEarthCuts.jpg?v=1732596599",
        colourways: [
          { name: "Sandstone", image: "https://www.armstrongflooring.au/cdn/shop/files/Sandstone3L233134_Landscape_NaturalCreationsEarthCuts.jpg?v=1732596599" },
          { name: "Concrete Grey", image: "https://www.armstrongflooring.au/cdn/shop/files/Natural_Creations_EarthCuts_tile_600x.jpg" },
          { name: "Firenze Terrazzo", image: "https://www.armstrongflooring.au/cdn/shop/files/Sandstone3L233134_Landscape_NaturalCreationsEarthCuts.jpg?v=1732596599" },
          { name: "Bianco Terrazzo", image: "https://www.armstrongflooring.au/cdn/shop/files/Natural_Creations_EarthCuts_tile_600x.jpg" },
          { name: "Limestone", image: "https://www.armstrongflooring.au/cdn/shop/files/Sandstone3L233134_Landscape_NaturalCreationsEarthCuts.jpg?v=1732596599" },
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
          "https://www.armstrongflooring.au/cdn/shop/files/LemonScentedGum215_Portrait_NCLongplank_895ef0c8-8ea3-4741-bb86-ae167e2fc61c.jpg?v=1729744853",
        colourways: [
          { name: "Lemon Scented Gum", image: "https://www.armstrongflooring.au/cdn/shop/files/LemonScentedGum215_Portrait_NCLongplank_895ef0c8-8ea3-4741-bb86-ae167e2fc61c.jpg?v=1729744853" },
          { name: "Barnyard Dusk", image: "https://www.armstrongflooring.au/cdn/shop/files/BarnyardDusk145_Landscape_NCLongplank.jpg" },
          { name: "Rose Gum", image: "https://www.armstrongflooring.au/cdn/shop/files/RoseGum340_Landscapewithfemale_NCLongplank.jpg" },
          { name: "Southern Blackbutt", image: "https://www.armstrongflooring.au/cdn/shop/files/SouthernBlackbutt250_Landscapewithdog_NCLongplank_175f4def-b85a-407f-83ac-8ef9b27fa56c.jpg" },
          { name: "Wormy Chestnut", image: "https://www.armstrongflooring.au/cdn/shop/files/NCLongplank-WormyChestnut_8d43baeb-d942-49e8-a91e-52d7f930ae3d.jpg" },
          { name: "Chocolate Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/NCLongplank_ChocolateOak_0fb551d6-7106-4562-89cc-176cbce47c85.jpg" },
          { name: "Ancient Hardwood", image: "https://www.armstrongflooring.au/cdn/shop/files/NCLongplank_AncientHardwood.jpg" },
          { name: "Blanc Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/NCLongplank-BlancOak.jpg" },
          { name: "Century Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/NCLongplank-CenturyOak.jpg" },
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
          "https://www.armstrongflooring.au/cdn/shop/files/RiverlandLimed3X111907_Landscape_NaturalCreationsXL.jpg",
        colourways: [
          { name: "Riverland Limed", image: "https://www.armstrongflooring.au/cdn/shop/files/RiverlandLimed3X111907_Landscape_NaturalCreationsXL.jpg" },
          { name: "Barnyard Grey", image: "https://www.armstrongflooring.au/cdn/shop/files/RiverlandLimed3X111907_Landscape_NaturalCreationsXL.jpg" },
          { name: "Mount Barker Ironbark", image: "https://www.armstrongflooring.au/cdn/shop/files/RiverlandLimed3X111907_Landscape_NaturalCreationsXL.jpg" },
          { name: "Oaklands Park", image: "https://www.armstrongflooring.au/cdn/shop/files/RiverlandLimed3X111907_Landscape_NaturalCreationsXL.jpg" },
          { name: "Royal Park Ironbark", image: "https://www.armstrongflooring.au/cdn/shop/files/RiverlandLimed3X111907_Landscape_NaturalCreationsXL.jpg" },
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
          "https://www.armstrongflooring.au/cdn/shop/files/GhostGum3L093606_Landscape_NaturalCreationsArborArt.jpg?v=1732595690",
        colourways: [
          { name: "Ghost Gum", image: "https://www.armstrongflooring.au/cdn/shop/files/GhostGum3L093606_Landscape_NaturalCreationsArborArt.jpg?v=1732595690" },
          { name: "Limed Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/GhostGum3L093606_Landscape_NaturalCreationsArborArt.jpg?v=1732595690" },
          { name: "Summer Oak", image: "https://www.armstrongflooring.au/cdn/shop/files/GhostGum3L093606_Landscape_NaturalCreationsArborArt.jpg?v=1732595690" },
          { name: "Autumn Barn Wood", image: "https://www.armstrongflooring.au/cdn/shop/files/GhostGum3L093606_Landscape_NaturalCreationsArborArt.jpg?v=1732595690" },
        ],
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
        colourways: [
          { name: "English Oak Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Ultimate_001.jpg" },
          { name: "English Oak Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Ultimate_001.jpg" },
          { name: "Carrara Marble White", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Ultimate_001.jpg" },
          { name: "Vintage Oak Light Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Ultimate_001.jpg" },
          { name: "Brushed Pine Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Ultimate_001.jpg" },
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
          "https://media.tarkett-image.com/medium/IN_iD_Naturals_70_001.jpg",
        colourways: [
          { name: "Oak Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Naturals_70_001.jpg" },
          { name: "Oak Warm Brown", image: "https://media.tarkett-image.com/medium/IN_iD_Naturals_70_001.jpg" },
          { name: "Concrete Light Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Naturals_70_001.jpg" },
          { name: "Travertine Ivory", image: "https://media.tarkett-image.com/medium/IN_iD_Naturals_70_001.jpg" },
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
          "https://media.tarkett-image.com/medium/IN_iD_Comfort_19_001.jpg",
        colourways: [
          { name: "Rustic Oak Warm Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Comfort_19_001.jpg" },
          { name: "Rustic Oak Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Comfort_19_001.jpg" },
          { name: "Rustic Oak Light Brown", image: "https://media.tarkett-image.com/medium/IN_iD_Comfort_19_001.jpg" },
          { name: "Concrete Light Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Comfort_19_001.jpg" },
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
          "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Loose_Lay_001.jpg",
        colourways: [
          { name: "Sawn Oak Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Loose_Lay_001.jpg" },
          { name: "Sawn Oak Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Loose_Lay_001.jpg" },
          { name: "Beach Wood Beige", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Loose_Lay_001.jpg" },
          { name: "Distressed Wood Brown", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_Loose_Lay_001.jpg" },
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
          "https://media.tarkett-image.com/medium/IN_iD_Inspiration_55_001.jpg",
        colourways: [
          { name: "Contemporary Oak Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_55_001.jpg" },
          { name: "Contemporary Oak Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_55_001.jpg" },
          { name: "Brushed Pine Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_55_001.jpg" },
          { name: "Woven Vinyl Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_55_001.jpg" },
          { name: "Concrete Light Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Inspiration_55_001.jpg" },
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
          "https://media.tarkett-image.com/medium/IN_iD_Click_Ultimate_001.jpg",
        colourways: [
          { name: "Scandinavian Oak Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Click_Ultimate_001.jpg" },
          { name: "Scandinavian Oak Grey", image: "https://media.tarkett-image.com/medium/IN_iD_Click_Ultimate_001.jpg" },
          { name: "Light Oak Natural", image: "https://media.tarkett-image.com/medium/IN_iD_Click_Ultimate_001.jpg" },
          { name: "Marble White", image: "https://media.tarkett-image.com/medium/IN_iD_Click_Ultimate_001.jpg" },
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
