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
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 pt-[72px]">
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px]" />
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 md:pb-28 md:pt-24 lg:px-10 lg:pt-28">
          <p className="text-editorial-caption text-brand-light mb-6">
            Contact
          </p>
          <h1 className="text-editorial-display text-white max-w-3xl">
            Let&apos;s discuss
            <br />
            your project.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-400">
            Fill out the form below and our team will be in touch within one
            business day. No obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_340px] lg:gap-20">
            {/* Form */}
            <div>
              <h2 className="text-editorial-caption text-brand mb-8">
                Send an Enquiry
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-full bg-brand/10">
                    <Phone className="size-4 text-brand" />
                  </div>
                  <h3 className="text-editorial-caption text-stone-500">Phone</h3>
                </div>
                <a
                  href="tel:1300207915"
                  className="text-lg font-semibold tracking-[-0.02em] text-stone-900 transition-colors hover:text-brand"
                >
                  1300 207 915
                </a>
              </div>

              <div className="rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-full bg-brand/10">
                    <Mail className="size-4 text-brand" />
                  </div>
                  <h3 className="text-editorial-caption text-stone-500">Email</h3>
                </div>
                <a
                  href="mailto:vinyl@premrest.com.au"
                  className="text-sm font-medium text-stone-900 transition-colors hover:text-brand"
                >
                  vinyl@premrest.com.au
                </a>
              </div>

              <div className="rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-full bg-brand/10">
                    <Clock className="size-4 text-brand" />
                  </div>
                  <h3 className="text-editorial-caption text-stone-500">Hours</h3>
                </div>
                <p className="text-sm text-stone-700">Monday &ndash; Friday</p>
                <p className="text-sm font-medium text-stone-900">
                  8:30am &ndash; 5:00pm AEST
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-full bg-brand/10">
                    <Building2 className="size-4 text-brand" />
                  </div>
                  <h3 className="text-editorial-caption text-stone-500">
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
