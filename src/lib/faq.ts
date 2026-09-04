export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Commercial / service questions from homepage copy. Do not overlap the technical why-vinyl-tiles set. */
export const homepageFaqItems: FaqItem[] = [
  {
    question: "Where do you supply and install vinyl tiles?",
    answer:
      "Melbourne, Sydney, and Brisbane. One contractor from site inspection through to handover — local install crews in each city, one project manager on the job.",
  },
  {
    question: "Do you supply and install, or just one of those?",
    answer:
      "Both. We supply and install premium LVT as one contractor. Direct relationships with Interface, Karndean, Armstrong, and Tarkett. We specify, source, deliver, and lay the floor.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Every quote follows a free site inspection. We do not give phone quotes or walk-back \"from $X\" numbers. Book a visit in Melbourne, Sydney, or Brisbane and we come back with a specification and a written quote.",
  },
  {
    question: "How much does vinyl tile installation cost?",
    answer:
      "Installation is a guide of $30–35/m² for laying premium LVT — install only, ex GST, before floor preparation, takeup, levelling, or trims. Product cost sits on top and varies by range. Prep and access are quoted separately after the site visit.",
  },
  {
    question: "Which vinyl tile brands do you supply?",
    answer:
      "Interface, Karndean, Armstrong, and Tarkett. Modular carbon-neutral LVT, LooseLay, Diamond 10 commercial surfaces, and acoustic Cradle to Cradle options. Vinyl tile is all we do here.",
  },
  {
    question: "What warranty do you offer on commercial vinyl tile?",
    answer:
      "15-year commercial warranty. The floor is specified, installed, and warranted by a contractor who answers the phone — 1300 207 915.",
  },
];

export const whyVinylFaqItems: FaqItem[] = [
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

/** Process / supply-and-install questions for /how-we-work. Keep visible copy in sync. */
export const howWeWorkFaqItems: FaqItem[] = [
  {
    question: "What is the commercial vinyl tile installation process?",
    answer:
      "Four steps. You tell us the brief, we inspect the site and write a quote, we source and deliver the product, then licensed installers lay the floor. One project manager owns the job from enquiry through to walkthrough — Melbourne, Sydney, and Brisbane.",
  },
  {
    question: "Do you inspect the site before quoting?",
    answer:
      "Yes. Every quote — commercial or residential — follows a free site inspection. We measure, photograph, test moisture, and talk through what the space needs to do. We do not give phone quotes or walk-back \"from $X\" numbers.",
  },
  {
    question: "How much does commercial vinyl tile installation cost?",
    answer:
      "Installation is a guide of $30–35/m² for laying premium LVT — install only, ex GST, before floor preparation, takeup, levelling, or trims. Product cost sits on top and varies by range. Prep and access are quoted line-by-line after the site visit.",
  },
  {
    question: "Can I get supply-only, or do I have to use your installers?",
    answer:
      "Both. Supply and install is the usual path — one contractor from specification through to handover. Have your own install crew? We can supply only. You still get our manufacturer pricing, specification, and the technical documentation.",
  },
  {
    question: "How long does commercial vinyl tile installation take?",
    answer:
      "Programme depends on area, floor preparation, and access. We set dates in the written quote after the site inspection — including staged deliveries and phased fitouts. You get a reply within one business day of enquiry and a quote within 48 hours of the visit.",
  },
  {
    question: "What warranty do you offer, and who do I call?",
    answer:
      "15-year commercial warranty. The floor is specified, installed, and warranted by a contractor who answers the phone — 1300 207 915.",
  },
];
