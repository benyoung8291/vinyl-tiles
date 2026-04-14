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
        className="bg-subtle-lines"
        style={{ backgroundColor: "rgb(248, 245, 237)" }}
      >
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 md:pb-24 md:pt-36 lg:px-10">
          <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "rgb(120, 110, 100)" }}>
            Get In Touch
          </p>
          <h1
            className="text-[clamp(2.25rem,5vw,3.5rem)] max-w-3xl leading-tight font-bold tracking-tight mb-5"
            style={{ color: "rgb(38, 35, 30)" }}
          >
            Let&apos;s talk flooring.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "rgb(82, 75, 68)" }}
          >
            Whether you&apos;re planning a commercial flooring project or just want to explore your options, we&apos;re here to listen. Our team will get back to you within one business day.
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
                <ContactForm />
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
