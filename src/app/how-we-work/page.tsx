import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  FileText,
  Truck,
  Hammer,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Users,
  Award,
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
      "For larger commercial fitouts, office refurbishments, or aged care and healthcare projects, we\u2019ll arrange a site visit at no cost. Our estimator will assess the existing floor, take measurements, check subfloor conditions, and discuss design options on the spot. For smaller jobs or interstate projects, we can handle everything over the phone with the help of floor plans and photos.",
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
      "Based on what we learn about your project, we\u2019ll recommend specific products that match your performance requirements, design brief, and budget. We work with all the major commercial vinyl tile manufacturers \u2014 including Interface, Karndean, Armstrong, and Tarkett \u2014 so we\u2019re not locked into a single supplier. We recommend what\u2019s genuinely best for your project, not what earns us the biggest margin.",
      "You\u2019ll receive a detailed, itemised quote within 48 hours of our site visit or consultation. Our quotes are transparent and comprehensive \u2014 no hidden fees, no surprise charges halfway through the job. If your project requires subfloor preparation, we\u2019ll include that as a separate line item so you know exactly what you\u2019re paying for.",
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
      "Once you\u2019ve approved the quote, we handle all product sourcing and logistics. We order directly from manufacturers through our established trade relationships, which means competitive pricing and reliable supply. Our buying power as a Premrest brand gives us access to pricing that smaller operators simply can\u2019t match.",
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
      "Our installation teams are licensed commercial flooring specialists with years of experience across offices, retail, healthcare, education, and aged care environments. Every installer on our team understands the standards required for commercial work \u2014 this isn\u2019t a sideline for residential carpet layers.",
      "Before a single tile goes down, we complete a thorough subfloor assessment. If moisture levels are too high, the surface is uneven, or old adhesive residue needs grinding back, we take care of it. Proper subfloor preparation is the difference between a floor that lasts and one that fails, and we never cut corners on it. Installation starts from $18/m\u00B2, and if you\u2019re replacing existing flooring, we handle takeup and removal from $6.50/m\u00B2.",
      "Throughout the project, you\u2019ll have a single point of contact managing the job from start to finish. Once installation is complete, we conduct a post-install inspection with you to make sure everything meets our standards and yours. You\u2019ll receive full warranty documentation and care instructions for your new floor.",
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

const whyWorkWithUs = [
  {
    icon: Award,
    text: "A Premrest brand \u2014 backed by one of Australia\u2019s most established commercial flooring companies",
  },
  {
    icon: Users,
    text: "Commercial flooring specialists since 2010, with thousands of projects completed across every sector",
  },
  {
    icon: Phone,
    text: "Single point of contact from first enquiry to finished floor \u2014 no getting passed between departments",
  },
  {
    icon: MapPin,
    text: "Australia-wide service \u2014 we supply and install in every state and territory",
  },
];

export default function HowWeWorkPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How We Work
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            From first enquiry to finished floor &mdash; here&apos;s exactly
            what to expect when you work with Vinyl Tiles by Premrest.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isEven = index % 2 === 1;

        return (
          <section
            key={step.number}
            className={isEven ? "bg-white" : "bg-zinc-50"}
          >
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
              {/* Step Number & Heading */}
              <div className="mb-8">
                <span className="text-6xl font-bold leading-none text-primary sm:text-7xl">
                  {step.number}
                </span>
                <div className="mt-4 flex items-center gap-3">
                  <Icon className="size-6 text-primary" />
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {step.title}
                  </h2>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4">
                {step.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Two columns: What to Expect / What's Included */}
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {/* What to Expect */}
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    {step.expectItems.map((item, eIndex) => (
                      <li
                        key={eIndex}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What We'll Discuss / What's Included */}
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                    {index < 2 ? "What We\u2019ll Discuss" : "Key Details"}
                  </h3>
                  <ul className="space-y-3">
                    {step.discussItems.map((item, dIndex) => (
                      <li
                        key={dIndex}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Work With Us */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Work With Us?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Choosing the right flooring partner matters. Here&apos;s why
            commercial property managers, fitout companies, and facility managers
            across Australia trust Vinyl Tiles by Premrest.
          </p>
          <ul className="mt-8 space-y-5">
            {whyWorkWithUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <span className="pt-2 text-base leading-relaxed text-foreground">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <QuoteCta
        title="Ready to Start Your Project?"
        description="Get in touch for a free, no-obligation consultation. We'll discuss your requirements and provide a detailed quote within 48 hours."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </div>
  );
}
