import type { Metadata } from "next";
import { Phone, Mail, Clock, Building2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us & Get a Quote",
  description:
    "Get a free quote for commercial vinyl tile supply and installation. Contact Vinyl Tiles by Premrest — call 1300 207 915 or fill out our enquiry form.",
};

export default function ContactPage() {
  return (
    <div className="bg-zinc-50">
      {/* Page Header */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact Us &amp; Get a Quote
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Whether you need a full installation quote, product advice, or just
            want to discuss your project, we&apos;re here to help. Fill out the
            form below and our team will be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
          {/* Form Column */}
          <div className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Send Us an Enquiry
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:pt-0">
            {/* Phone */}
            <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2.5 text-brand">
                <Phone className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  Phone
                </h3>
              </div>
              <a
                href="tel:1300207915"
                className="text-lg font-semibold text-foreground transition-colors hover:text-brand"
              >
                1300 207 915
              </a>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2.5 text-brand">
                <Mail className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  Email
                </h3>
              </div>
              <a
                href="mailto:vinyl@premrest.com.au"
                className="text-base font-medium text-foreground transition-colors hover:text-brand"
              >
                vinyl@premrest.com.au
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2.5 text-brand">
                <Clock className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  Business Hours
                </h3>
              </div>
              <p className="text-sm text-foreground">
                Monday &ndash; Friday
              </p>
              <p className="text-sm font-medium text-foreground">
                8:30am &ndash; 5:00pm AEST
              </p>
            </div>

            {/* Brand Blurb */}
            <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2.5 text-brand">
                <Building2 className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  A Premrest Brand
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Vinyl Tiles is a division of Premrest, one of Australia&apos;s
                most trusted commercial flooring companies. With decades of
                industry experience, we provide end-to-end flooring solutions
                for projects of every scale.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
