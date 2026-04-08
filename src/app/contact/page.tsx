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
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 max-w-3xl md:text-5xl">
            Let&apos;s discuss your project.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-500">
            Fill out the form below and our team will be in touch within one
            business day. No obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-brand mb-6">
                Send an Enquiry
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
              <div className="rounded-lg border border-stone-200/60 bg-cream/50 p-5">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-full bg-brand/10">
                    <Phone className="size-3.5 text-brand" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Phone</h3>
                </div>
                <a
                  href="tel:1300207915"
                  className="text-lg font-semibold text-stone-900 transition-colors hover:text-brand"
                >
                  1300 207 915
                </a>
              </div>

              <div className="rounded-lg border border-stone-200/60 bg-cream/50 p-5">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-full bg-brand/10">
                    <Mail className="size-3.5 text-brand" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Email</h3>
                </div>
                <a
                  href="mailto:vinyl@premrest.com.au"
                  className="text-sm font-medium text-stone-900 transition-colors hover:text-brand"
                >
                  vinyl@premrest.com.au
                </a>
              </div>

              <div className="rounded-lg border border-stone-200/60 bg-cream/50 p-5">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-full bg-brand/10">
                    <Clock className="size-3.5 text-brand" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Hours</h3>
                </div>
                <p className="text-sm text-stone-700">Monday &ndash; Friday</p>
                <p className="text-sm font-medium text-stone-900">
                  8:30am &ndash; 5:00pm AEST
                </p>
              </div>

              <div className="rounded-lg border border-stone-200/60 bg-cream/50 p-5">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-full bg-brand/10">
                    <Building2 className="size-3.5 text-brand" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    A Premrest Brand
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-stone-500">
                  Vinyl Tiles is a division of Premrest &mdash; one of
                  Australia&apos;s most trusted commercial flooring companies
                  with decades of industry experience.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
