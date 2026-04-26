import type { Metadata } from "next";
import {
  MessageSquare,
  FileText,
  Truck,
  Hammer,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "How We Work | Our Process from Consultation to Installation",
  description:
    "From enquiry to finished floor — discover how Vinyl Tiles by Premrest delivers commercial vinyl tile supply and installation across Australia. Free consultation, competitive pricing, professional results.",
};

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "You Tell Us What You Need",
    paragraphs: [
      "Start with a call to 1300 207 915, an email to office@premrest.com.au, or fill out the form on our site. You will hear back within one business day. Whether you are a facility manager, property owner, or homeowner planning a renovation, we want to understand the building and the brief before we put anything in writing.",
      "Every project — commercial or residential — gets a free site inspection in Melbourne, Sydney, or Brisbane. We measure, take photographs, test moisture levels in the substrate, and talk through what the space needs to do.",
      "We do not give phone quotes or “from $X” numbers. The site inspection is the only way to write a number you can build a budget around.",
    ],
    expectItems: [
      "Reply within one business day",
      "Free site inspection — commercial and residential",
      "No phone quotes, no high-pressure sales",
    ],
    discussItems: [
      "What the space is used for — office, retail, hospital, school, home",
      "Foot traffic, wet areas, accessibility, acoustic targets",
      "Aesthetic direction and any designer specifications",
      "Budget envelope and timeline",
      "Multi-site or multi-floor portfolio considerations",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "We Recommend & Quote",
    paragraphs: [
      "Once we have walked the site, we recommend products that fit the brief. We work with Interface, Karndean, Armstrong, and Tarkett — we are not locked into one supplier, which means you get the right product, not just what we stock.",
      "You will get a detailed written quote within 48 hours of the inspection. Every line is itemised: install, floor preparation, takeup, levelling, trims, and any access factors. No hidden charges. Samples sent before you commit.",
      "Want options at different specification levels? We will lay them out and explain exactly what you are trading off.",
    ],
    expectItems: [
      "Detailed written quote within 48 hours of the site visit",
      "Samples couriered before you commit",
      "Options at different specification levels if you need them",
    ],
    discussItems: [
      "Installation guide of $30–35/m² for laying premium LVT",
      "Floor preparation, takeup, levelling, and trims quoted line-by-line",
      "Product cost varies by range — we will spell it out",
      "Programme, key dates, and access requirements",
      "Manufacturer warranty and technical compliance documentation",
    ],
  },
  {
    number: "03",
    icon: Truck,
    title: "We Source It & Deliver",
    paragraphs: [
      "Once you approve the quote, we order directly from the manufacturer. Direct relationships mean better pricing and reliable lead times across Melbourne, Sydney, and Brisbane.",
      "Delivery is timed around your programme. Single delivery, staged deliveries for a phased fitout, or a multi-site rollout — whatever the brief requires. Everything arrives at site, is inspected for damage, and stored properly until install.",
      "Have your own install crew? We can supply only. You get our pricing, our manufacturer relationships, and the technical specification.",
    ],
    expectItems: [
      "Ordered direct from the manufacturer",
      "Delivery scheduled around your programme",
      "Supply-only option for property owners with in-house crews",
    ],
    discussItems: [
      "Direct manufacturer relationships and pricing leverage",
      "Delivery tracking and inspection on receipt",
      "Full manufacturer warranty on every product",
      "Attic stock and replacement tiles for ongoing maintenance",
    ],
  },
  {
    number: "04",
    icon: Hammer,
    title: "Professional Installation",
    paragraphs: [
      "Our installers are licensed commercial flooring specialists. They lay floors in offices, retail, hospitals, schools, aged care, and premium homes — the same crews and the same standard regardless of the project.",
      "Before any tile goes down, we prepare the subfloor properly. High moisture? Uneven? Old adhesive residue? We deal with it. Installation runs a guide of $30–35/m² for laying premium LVT, with floor preparation and takeup quoted separately. One project manager owns the job from start to finish.",
      "When we are done, we walk through the installation with you. Everything is inspected, photographed, documented, and warranted.",
    ],
    expectItems: [
      "Licensed commercial flooring installers on every job",
      "One project manager from start to finish",
      "Final walkthrough and sign-off documentation",
    ],
    discussItems: [
      "Subfloor preparation handled in-house",
      "Install guide of $30–35/m² for laying premium LVT",
      "Floor preparation and takeup quoted line-by-line",
      "Programme, scheduling, and access requirements",
      "Post-install warranty and maintenance documentation",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-subtle-lines"
        style={{ backgroundColor: "rgb(248, 245, 237)" }}
      >
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 md:pb-24 md:pt-36 lg:px-10">
          <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
            How We Work
          </p>
          <h1
            className="text-[clamp(2.25rem,5vw,3.5rem)] max-w-4xl leading-tight font-bold tracking-tight mb-5"
            style={{ color: "rgb(38, 35, 30)" }}
          >
            Site inspection first. Always.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "rgb(82, 75, 68)" }}
          >
            Four straightforward steps. Every quote &mdash; commercial or residential &mdash; follows a free site inspection in Melbourne, Sydney, or Brisbane. No phone quotes, no &ldquo;from $X&rdquo; figures we walk back later.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={step.number}
            style={{ backgroundColor: isEven ? "rgb(252, 250, 245)" : "rgb(248, 245, 237)" }}
          >
            <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
                {/* Left: Step number and title */}
                <div>
                  <div
                    className="text-7xl md:text-8xl font-bold leading-none mb-5"
                    style={{ color: "rgb(230, 225, 215)" }}
                  >
                    {step.number}
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgb(240, 228, 210)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "rgb(82, 75, 68)" }} />
                    </div>
                    <h2
                      className="text-xl md:text-2xl font-bold tracking-tight"
                      style={{ color: "rgb(38, 35, 30)" }}
                    >
                      {step.title}
                    </h2>
                  </div>
                </div>

                {/* Right: Content and cards */}
                <div>
                  <div className="space-y-5 mb-10">
                    {step.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-[15px] md:text-[16px] leading-relaxed"
                        style={{ color: "rgb(82, 75, 68)" }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div
                      className="rounded-lg border border-[rgb(230,225,215)] p-6"
                      style={{ backgroundColor: isEven ? "rgb(248, 245, 237)" : "rgb(252, 250, 245)" }}
                    >
                      <h3
                        className="text-[11px] font-medium uppercase tracking-widest mb-4"
                        style={{ color: "rgb(120, 110, 100)" }}
                      >
                        What to Expect
                      </h3>
                      <ul className="space-y-3">
                        {step.expectItems.map((item, eIndex) => (
                          <li
                            key={eIndex}
                            className="flex items-start gap-3 text-[13px]"
                            style={{ color: "rgb(55, 50, 45)" }}
                          >
                            <Clock
                              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                              style={{ color: "rgb(120, 110, 100)" }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="rounded-lg border border-[rgb(230,225,215)] p-6"
                      style={{ backgroundColor: isEven ? "rgb(248, 245, 237)" : "rgb(252, 250, 245)" }}
                    >
                      <h3
                        className="text-[11px] font-medium uppercase tracking-widest mb-4"
                        style={{ color: "rgb(120, 110, 100)" }}
                      >
                        {index < 2 ? "What We'll Discuss" : "Key Details"}
                      </h3>
                      <ul className="space-y-3">
                        {step.discussItems.map((item, dIndex) => (
                          <li
                            key={dIndex}
                            className="flex items-start gap-3 text-[13px]"
                            style={{ color: "rgb(55, 50, 45)" }}
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                              style={{ color: "rgb(120, 110, 100)" }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Work With Us */}
      <section style={{ backgroundColor: "rgb(55, 50, 45)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-4 text-white/40">
                Why Premrest
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
                You get someone who knows their work.
              </h2>
            </div>

            <div className="grid gap-0 sm:grid-cols-2 border-l border-white/10">
              {[
                "Part of Premrest — one of Australia's established commercial flooring companies",
                "Commercial flooring specialists since 2010 — thousands of projects across every sector",
                "You get one contact from day one through to completion — not passed between departments",
                "We work Australia-wide — supply and install in every state and territory",
              ].map((text, i) => (
                <div
                  key={i}
                  className="border-t border-white/10 py-6 px-6"
                >
                  <span className="text-[12px] font-semibold text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <QuoteCta
        title="Ready to start with a site visit?"
        description="Call 1300 207 915, email office@premrest.com.au, or fill out the form. We respond within one business day, book your free site inspection in Melbourne, Sydney, or Brisbane, and follow up with a written quote within 48 hours of the visit."
        buttonText="Book a Site Inspection"
        buttonHref="/contact"
      />
    </>
  );
}
