import type { Metadata } from "next";
import { Phone, Mail, Clock, Building2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Premrest | Let's Talk Flooring",
  description:
    "Tell us about your flooring project. Premrest serves Melbourne, Sydney, and Brisbane with expert commercial flooring solutions. Call 1300 207 915 or get in touch.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "rgb(251, 211, 190)" }}
      >
        <div className="mx-auto max-w-[1728px] px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 opacity-70">
            Get In Touch
          </p>
          <h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl max-w-3xl leading-tight font-bold tracking-tight mb-6"
            style={{ color: "rgb(93, 82, 75)" }}
          >
            Let&apos;s talk flooring.
          </h1>
          <p
            className="font-sans text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "rgb(93, 82, 75)" }}
          >
            Whether you&apos;re planning a commercial flooring project or just want to explore your options, we&apos;re here to listen. Our team will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "rgb(254, 249, 237)" }}>
        <div className="mx-auto max-w-[1728px] px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* Form Section */}
            <div>
              <p
                className="font-sans text-xs font-semibold uppercase tracking-widest mb-8"
                style={{ color: "rgb(140, 84, 98)" }}
              >
                Your Project Details
              </p>

              {/* Form with styled inputs */}
              <div className="space-y-6">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Section */}
            <aside className="space-y-6">
              {/* Phone */}
              <div
                className="rounded-lg p-8 border-2"
                style={{
                  backgroundColor: "rgb(254, 249, 237)",
                  borderColor: "rgb(251, 211, 190)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgb(251, 211, 190)" }}
                  >
                    <Phone
                      className="w-5 h-5"
                      style={{ color: "rgb(140, 84, 98)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-sans text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "rgb(140, 84, 98)" }}
                    >
                      Phone
                    </h3>
                  </div>
                </div>
                <a
                  href="tel:1300207915"
                  className="inline-block font-sans text-lg font-semibold transition-colors hover:opacity-80"
                  style={{ color: "rgb(93, 82, 75)" }}
                >
                  1300 207 915
                </a>
              </div>

              {/* Email */}
              <div
                className="rounded-lg p-8 border-2"
                style={{
                  backgroundColor: "rgb(254, 249, 237)",
                  borderColor: "rgb(251, 211, 190)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgb(251, 211, 190)" }}
                  >
                    <Mail
                      className="w-5 h-5"
                      style={{ color: "rgb(140, 84, 98)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-sans text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "rgb(140, 84, 98)" }}
                    >
                      Email
                    </h3>
                  </div>
                </div>
                <a
                  href="mailto:office@premrest.com.au"
                  className="inline-block font-sans text-base font-medium transition-colors hover:opacity-80 break-all"
                  style={{ color: "rgb(93, 82, 75)" }}
                >
                  office@premrest.com.au
                </a>
              </div>

              {/* Hours */}
              <div
                className="rounded-lg p-8 border-2"
                style={{
                  backgroundColor: "rgb(254, 249, 237)",
                  borderColor: "rgb(251, 211, 190)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgb(251, 211, 190)" }}
                  >
                    <Clock
                      className="w-5 h-5"
                      style={{ color: "rgb(140, 84, 98)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-sans text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "rgb(140, 84, 98)" }}
                    >
                      Hours
                    </h3>
                  </div>
                </div>
                <p
                  className="font-sans text-base"
                  style={{ color: "rgb(93, 82, 75)", opacity: 0.7 }}
                >
                  Monday – Friday
                </p>
                <p
                  className="font-sans text-base font-semibold"
                  style={{ color: "rgb(93, 82, 75)" }}
                >
                  8:30am – 5:00pm AEST
                </p>
              </div>

              {/* Service Areas */}
              <div
                className="rounded-lg p-8 border-2"
                style={{
                  backgroundColor: "rgb(254, 249, 237)",
                  borderColor: "rgb(251, 211, 190)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgb(251, 211, 190)" }}
                  >
                    <Building2
                      className="w-5 h-5"
                      style={{ color: "rgb(140, 84, 98)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-sans text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "rgb(140, 84, 98)" }}
                    >
                      Service Areas
                    </h3>
                  </div>
                </div>
                <p
                  className="font-sans text-base leading-relaxed"
                  style={{ color: "rgb(93, 82, 75)", opacity: 0.8 }}
                >
                  We serve Melbourne, Sydney, and Brisbane. Backed by Premrest, one of Australia&apos;s most trusted commercial flooring specialists with decades of industry experience.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
