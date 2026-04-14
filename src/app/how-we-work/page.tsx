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
      "Start with a call to 1300 207 915, an email to office@premrest.com.au, or fill out the form on our site. You'll hear back within 24 hours. We're not pushy — just want to understand what you're working with.",
      "For anything bigger than a small job — office refits, healthcare, aged care — we'll visit the site for free. We'll look at the existing floor, take measurements, check moisture levels, and talk through what you want the space to feel like.",
      "The point is to figure out your space, your timeline, and what you actually need so we can recommend the right product.",
    ],
    expectItems: [
      "We call within 24 hours",
      "Free site visit for commercial projects",
      "Straightforward conversation, zero pressure",
    ],
    discussItems: [
      "What the space is used for — office, retail, hospital, school, etc.",
      "How much foot traffic and what it needs to withstand",
      "How it should look and what colours work for you",
      "What you want to spend",
      "When it needs to be done",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "We Recommend & Quote",
    paragraphs: [
      "We'll suggest products that fit your budget, performance needs, and aesthetic. We work with Interface, Karndean, Armstrong, Tarkett, and others — we're not locked into one supplier, which means you get the right product, not just what we stock.",
      "You'll get a detailed quote within 48 hours. No hidden charges, no surprises. If you want samples, we'll send them to you before you commit.",
      "Want options at different price points? We can do that and explain what you're trading off.",
    ],
    expectItems: [
      "Detailed quote within 48 hours",
      "Samples sent to your door",
      "Options at different price points if you need them",
    ],
    discussItems: [
      "Product cost — from $45/m² depending on the product",
      "Installation cost — from $18/m²",
      "What the subfloor needs and whether that's an extra cost",
      "Timeline with key dates",
      "Warranty and technical specs",
    ],
  },
  {
    number: "03",
    icon: Truck,
    title: "We Source It & Deliver",
    paragraphs: [
      "Once you approve the quote, we order directly from manufacturers. That means competitive pricing and reliable supply — we've got the relationships.",
      "We time delivery to suit your schedule. Single delivery, staged deliveries for a phased project — we work with you. Everything arrives at site, gets inspected, and is stored properly until we're ready to install.",
      "Or if you've got your own installation team, we can supply only. You still get our pricing and manufacturer relationships — from $45/m² depending on product.",
    ],
    expectItems: [
      "Direct from manufacturers — no middlemen",
      "Delivery scheduled around your project",
      "Supply-only option available",
    ],
    discussItems: [
      "Direct manufacturer relationships and pricing power",
      "Delivery tracking and confirmation",
      "All products come with full manufacturer warranty",
      "Stock always arrives in good condition",
    ],
  },
  {
    number: "04",
    icon: Hammer,
    title: "Professional Installation",
    paragraphs: [
      "Our installers are licensed commercial flooring specialists. They've done offices, retail, hospitals, schools, aged care — they know what commercial-grade work looks like.",
      "Before any tile goes down, we assess the subfloor properly. High moisture? Uneven surface? Old adhesive gunk? We fix it. Installation from $18/m², takeup and removal from $6.50/m². One point of contact manages the whole job from start to finish.",
      "When we're done, we walk through the installation with you. Everything gets inspected, documented, and warranted.",
    ],
    expectItems: [
      "Licensed commercial flooring installers",
      "One project manager from start to finish",
      "Final walkthrough and sign-off",
    ],
    discussItems: [
      "Subfloor assessment and prep — we handle it",
      "Installation from $18/m²",
      "Takeup and disposal from $6.50/m² if needed",
      "Project management and scheduling",
      "Post-install warranty documentation",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            How We Work
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 max-w-3xl md:text-5xl">
            From phone call to finished floor.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-500">
            Four straightforward steps. No complexity, no surprises.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isAlt = index % 2 === 1;

        return (
          <section
            key={step.number}
            className={isAlt ? "bg-cream" : "bg-white"}
          >
            <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
              {/* Step header */}
              <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
                <div>
                  <span className="text-6xl font-bold leading-none tracking-tight text-brand/15 sm:text-7xl">
                    {step.number}
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    <Icon className="size-5 text-brand" />
                    <h2 className="text-xl font-bold tracking-tight text-stone-900">
                      {step.title}
                    </h2>
                  </div>
                </div>

                <div>
                  {/* Paragraphs */}
                  <div className="space-y-4">
                    {step.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-base leading-relaxed text-stone-500"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Two columns */}
                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-stone-200/60 bg-white p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-brand mb-4">
                        What to Expect
                      </h3>
                      <ul className="space-y-2.5">
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

                    <div className="rounded-lg border border-stone-200/60 bg-white p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-brand mb-4">
                        {index < 2 ? "What We\u2019ll Discuss" : "Key Details"}
                      </h3>
                      <ul className="space-y-2.5">
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
      <section className="bg-stone-900">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-light mb-3">
                Why Premrest
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                You get someone who knows their work.
              </h2>
            </div>

            <div className="grid gap-px sm:grid-cols-2">
              {[
                "Part of Premrest — one of Australia\u2019s established commercial flooring companies",
                "Commercial flooring specialists since 2010 — thousands of projects across every sector",
                "You get one contact from day one through to completion — not passed between departments",
                "We work Australia-wide — supply and install in every state and territory",
              ].map((text, i) => (
                <div key={i} className="border-t border-stone-800 py-5 pr-6">
                  <span className="text-xs font-semibold text-brand-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
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
        title="Ready to talk flooring?"
        description="Call 1300 207 915, email office@premrest.com.au, or fill out the form below. We'll get back to you within 24 hours with a detailed quote within 48."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
