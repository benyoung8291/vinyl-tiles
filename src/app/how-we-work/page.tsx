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
    title: "Tell Us About Your Project",
    paragraphs: [
      "Every project starts with a conversation. Whether you fill out our online enquiry form, give us a call on 1300 207 915, or send through an email, our team will get back to you within 24 hours to discuss your requirements. There\u2019s no obligation and no pressure \u2014 just a straightforward discussion about what you need.",
      "For larger commercial fitouts, office refurbishments, or aged care and healthcare projects, we\u2019ll arrange a site visit at no cost. Our estimator will assess the existing floor, take measurements, check subfloor conditions, and discuss design options on the spot.",
      "The goal at this stage is simple: understand your space, your requirements, and your timeline so we can recommend the right product and provide an accurate quote.",
    ],
    expectItems: [
      "Response within 24 hours of your enquiry",
      "Free site visit for commercial projects (where required)",
      "No-obligation discussion \u2014 no hard sell",
    ],
    discussItems: [
      "Space type \u2014 office, retail, healthcare, aged care, education, hospitality",
      "Traffic levels and durability requirements",
      "Design preferences, colour schemes, and aesthetic goals",
      "Budget range and any constraints",
      "Project timeline and any critical deadlines",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "We Recommend & Quote",
    paragraphs: [
      "Based on what we learn about your project, we\u2019ll recommend specific products that match your performance requirements, design brief, and budget. We work with all the major commercial vinyl tile manufacturers \u2014 including Interface, Karndean, Armstrong, and Tarkett \u2014 so we\u2019re not locked into a single supplier.",
      "You\u2019ll receive a detailed, itemised quote within 48 hours of our site visit or consultation. Our quotes are transparent and comprehensive \u2014 no hidden fees, no surprise charges halfway through the job.",
      "We\u2019re happy to provide multiple options at different price points, and we\u2019ll clearly explain the trade-offs so you can make an informed decision. Need samples before you commit? We\u2019ll have them sent directly to your site or office.",
    ],
    expectItems: [
      "Detailed, itemised quote within 48 hours",
      "Product samples delivered to your door",
      "Multiple options at different price points if requested",
    ],
    discussItems: [
      "Product cost \u2014 supply from $45/m\u00B2",
      "Installation cost \u2014 from $18/m\u00B2",
      "Subfloor preparation requirements and costs",
      "Project timeline with key milestones",
      "Warranty details and product specifications",
    ],
  },
  {
    number: "03",
    icon: Truck,
    title: "We Source & Supply",
    paragraphs: [
      "Once you\u2019ve approved the quote, we handle all product sourcing and logistics. We order directly from manufacturers through our established trade relationships, which means competitive pricing and reliable supply.",
      "We coordinate delivery timing to align with your project schedule, whether that\u2019s a single delivery for a straightforward job or staged deliveries for a multi-phase fitout. All materials are delivered directly to site, inspected on arrival, and stored appropriately until installation begins.",
      "If you have your own installation team and just need product supply, we\u2019re happy to work on a supply-only basis. You\u2019ll still benefit from our manufacturer relationships and competitive pricing, with supply from $45/m\u00B2 depending on the product selected.",
    ],
    expectItems: [
      "Direct manufacturer sourcing for best pricing",
      "Coordinated delivery to site on your schedule",
      "Supply-only option available if you have your own installers",
    ],
    discussItems: [
      "Direct manufacturer relationships \u2014 no middlemen",
      "Competitive pricing through Premrest buying power",
      "Reliable delivery with tracking and confirmation",
      "Quality guaranteed \u2014 all products supplied with full manufacturer warranty",
    ],
  },
  {
    number: "04",
    icon: Hammer,
    title: "Professional Installation",
    paragraphs: [
      "Our installation teams are licensed commercial flooring specialists with years of experience across offices, retail, healthcare, education, and aged care environments. Every installer on our team understands the standards required for commercial work.",
      "Before a single tile goes down, we complete a thorough subfloor assessment. If moisture levels are too high, the surface is uneven, or old adhesive residue needs grinding back, we take care of it. Installation starts from $18/m\u00B2, and if you\u2019re replacing existing flooring, we handle takeup and removal from $6.50/m\u00B2.",
      "Throughout the project, you\u2019ll have a single point of contact managing the job from start to finish. Once installation is complete, we conduct a post-install inspection with you to make sure everything meets our standards and yours.",
    ],
    expectItems: [
      "Licensed commercial flooring installers",
      "Full project management from start to finish",
      "Post-installation inspection and sign-off",
    ],
    discussItems: [
      "Subfloor assessment and preparation included",
      "Professional installation from $18/m\u00B2",
      "Takeup and removal of existing flooring from $6.50/m\u00B2",
      "Project management with a single point of contact",
      "Post-install inspection and warranty documentation",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 pt-[72px]">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:pb-28 md:pt-24 lg:px-10 lg:pt-28">
          <p className="text-editorial-caption text-brand-light mb-6">
            Our Process
          </p>
          <h1 className="text-editorial-display text-white max-w-3xl">
            From first call
            <br />
            to finished floor.
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-stone-400">
            Here&apos;s exactly what to expect when you work with Vinyl Tiles by
            Premrest.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isDark = index % 2 === 1;

        return (
          <section
            key={step.number}
            className={isDark ? "bg-stone-50 border-y border-stone-200/60" : "bg-white"}
          >
            <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
              {/* Step header */}
              <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-24">
                <div>
                  <span className="text-7xl font-bold leading-none tracking-[-0.04em] text-brand/15 sm:text-8xl">
                    {step.number}
                  </span>
                  <div className="mt-4 flex items-center gap-3">
                    <Icon className="size-5 text-brand" />
                    <h2 className="text-editorial-subheading text-stone-950">
                      {step.title}
                    </h2>
                  </div>
                </div>

                <div>
                  {/* Paragraphs */}
                  <div className="space-y-5">
                    {step.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-editorial-body text-stone-500"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Two columns */}
                  <div className="mt-12 grid gap-8 sm:grid-cols-2">
                    <div className="border-t-2 border-stone-900 pt-6">
                      <h3 className="text-editorial-caption text-brand mb-5">
                        What to Expect
                      </h3>
                      <ul className="space-y-3">
                        {step.expectItems.map((item, eIndex) => (
                          <li
                            key={eIndex}
                            className="flex items-start gap-2.5 text-sm text-stone-700"
                          >
                            <Clock className="mt-0.5 size-3.5 shrink-0 text-brand" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t-2 border-stone-900 pt-6">
                      <h3 className="text-editorial-caption text-brand mb-5">
                        {index < 2 ? "What We\u2019ll Discuss" : "Key Details"}
                      </h3>
                      <ul className="space-y-3">
                        {step.discussItems.map((item, dIndex) => (
                          <li
                            key={dIndex}
                            className="flex items-start gap-2.5 text-sm text-stone-700"
                          >
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand" />
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
      <section className="bg-stone-950">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-editorial-caption text-brand-light mb-4">
                Why Choose Us
              </p>
              <h2 className="text-editorial-heading text-white">
                The right flooring
                <br />
                partner matters.
              </h2>
            </div>

            <div className="grid gap-px sm:grid-cols-2">
              {[
                "A Premrest brand \u2014 backed by one of Australia\u2019s most established commercial flooring companies",
                "Commercial flooring specialists since 2010, with thousands of projects completed across every sector",
                "Single point of contact from first enquiry to finished floor \u2014 no getting passed between departments",
                "Australia-wide service \u2014 we supply and install in every state and territory",
              ].map((text, i) => (
                <div key={i} className="border-t border-stone-800 py-6 pr-6 pt-8">
                  <span className="text-editorial-caption text-brand-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">
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
        title="Ready to start your project?"
        description="Get in touch for a free, no-obligation consultation. We'll provide a detailed quote within 48 hours."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
