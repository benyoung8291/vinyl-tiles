import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, Clock, Building2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Vinyl Tile Flooring Quotes | Book a Free Site Inspection",
  alternates: { canonical: "/contact" },
  description:
    "Get a written quote for commercial vinyl tile supply and install across Melbourne, Sydney, and Brisbane. Every quote follows a free site inspection. Call 1300 207 915 or submit an enquiry.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-subtle-lines"
        style={{ backgroundColor: "rgb(248, 245, 237)" }}
      >
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 md:pb-24 md:pt-36 lg:px-10">
          <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
            Book a Site Inspection
          </p>
          <h1
            className="text-[clamp(2.25rem,5vw,3.5rem)] max-w-3xl leading-tight font-bold tracking-tight mb-5"
            style={{ color: "rgb(38, 35, 30)" }}
          >
            Every quote starts with a site visit.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "rgb(82, 75, 68)" }}
          >
            Tell us about the building, the brief, and the timeline. Whether you are a facility manager, property owner, or homeowner, we book a free site inspection in Melbourne, Sydney, or Brisbane and follow up with a written quote within 48 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 items-start">
            {/* Form Section */}
            <div>
              <p
                className="text-[11px] font-medium uppercase tracking-widest mb-8"
                style={{ color: "rgb(120, 110, 100)" }}
              >
                Your Project Details
              </p>
              <div className="space-y-6">
                <Suspense fallback={<div className="h-96" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            {/* Contact Info Section */}
            <aside className="space-y-4">
              {/* Phone */}
              <div
                className="rounded-lg border border-[rgb(230,225,215)] p-7"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgb(240, 228, 210)" }}
                  >
                    <Phone className="w-4 h-4" style={{ color: "rgb(82, 75, 68)" }} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                      Phone
                    </h3>
                  </div>
                </div>
                <a
                  href="tel:1300207915"
                  className="inline-block text-base font-semibold transition-colors hover:text-[rgb(38,35,30)]"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
                  1300 207 915
                </a>
              </div>

              {/* Email */}
              <div
                className="rounded-lg border border-[rgb(230,225,215)] p-7"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgb(240, 228, 210)" }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "rgb(82, 75, 68)" }} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                      Email
                    </h3>
                  </div>
                </div>
                <a
                  href="mailto:office@premrest.com.au"
                  className="inline-block text-[15px] font-medium transition-colors hover:text-[rgb(38,35,30)] break-all"
                  style={{ color: "rgb(55, 50, 45)" }}
                >
                  office@premrest.com.au
                </a>
              </div>

              {/* Hours */}
              <div
                className="rounded-lg border border-[rgb(230,225,215)] p-7"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgb(240, 228, 210)" }}
                  >
                    <Clock className="w-4 h-4" style={{ color: "rgb(82, 75, 68)" }} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                      Hours
                    </h3>
                  </div>
                </div>
                <p className="text-[14px]" style={{ color: "rgb(120, 110, 100)" }}>
                  Monday – Friday
                </p>
                <p className="text-[15px] font-semibold" style={{ color: "rgb(55, 50, 45)" }}>
                  8:30am – 5:00pm AEST
                </p>
              </div>

              {/* Service Areas */}
              <div
                className="rounded-lg border border-[rgb(230,225,215)] p-7"
                style={{ backgroundColor: "rgb(248, 245, 237)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgb(240, 228, 210)" }}
                  >
                    <Building2 className="w-4 h-4" style={{ color: "rgb(82, 75, 68)" }} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgb(120, 110, 100)" }}>
                      Service Areas
                    </h3>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgb(82, 75, 68)" }}>
                  Free site inspections across Melbourne, Sydney, and Brisbane. Backed by{" "}
                  <a
                    href="https://www.premrest.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[rgb(200,195,185)] underline-offset-4 transition-colors hover:text-[rgb(38,35,30)]"
                  >
                    Premrest
                  </a>
                  , one of Australia&apos;s most trusted premium commercial flooring specialists.
                </p>
              </div>

              {/* What happens next */}
              <div
                className="rounded-lg border border-[rgb(230,225,215)] p-7"
                style={{ backgroundColor: "rgb(55, 50, 45)" }}
              >
                <h3 className="text-[11px] font-medium uppercase tracking-widest text-white/40 mb-4">
                  What Happens Next
                </h3>
                <ol className="space-y-3">
                  {[
                    "We reply within one business day",
                    "Free site inspection booked at a time that suits you",
                    "Detailed written quote within 48 hours of the visit",
                    "No phone quotes, no high-pressure sales",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-white/80">
                      <span className="text-[11px] font-semibold text-white/40 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
