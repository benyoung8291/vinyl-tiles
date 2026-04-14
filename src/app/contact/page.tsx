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
      <section className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 max-w-3xl md:text-5xl">
            Tell us what you need.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-500">
            Whether you&apos;re planning a commercial flooring project or just want to explore your options, we&apos;re here to listen. Our team will get back to you within one business day.
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
                Your Project Details
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
                  href="mailto:office@premrest.com.au"
                  className="text-sm font-medium text-stone-900 transition-colors hover:text-brand"
                >
                  office@premrest.com.au
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
                    Service Areas
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-stone-500">
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
