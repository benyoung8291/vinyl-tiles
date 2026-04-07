import Link from "next/link";
import {
  Building2,
  Shield,
  Truck,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RangeCard } from "@/components/range-card";
import { TestimonialBlock } from "@/components/testimonial-block";
import { SolutionCard } from "@/components/solution-card";
import { QuoteCta } from "@/components/quote-cta";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-6 py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Premium Vinyl Tile Supply &amp; Installation — One Call, Done Right
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
            Australia&apos;s commercial flooring specialists. We source, supply,
            and professionally install LVT, VCT, and vinyl plank flooring from
            the world&apos;s leading manufacturers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href="/contact" />}
            >
              <Phone className="size-4" />
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 text-base"
              render={<Link href="#ranges" />}
            >
              Explore Our Ranges
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm text-primary-foreground/80 sm:flex-row sm:gap-10">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-5" />
              Supply from $45/m²
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-5" />
              Installation from $18/m²
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-5" />
              Free site consultation
            </span>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Building2 className="size-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Supply + Install Under One Roof
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              One point of contact from product selection through to completed
              installation. Simpler procurement, fewer headaches.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="size-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Any Product, Any Brand
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We are not tied to a single manufacturer. We source the right
              product for your project from the world&apos;s best brands.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Shield className="size-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Commercial Specialists Since 2010
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Over a decade of experience delivering flooring projects for
              offices, hospitals, schools, and retail spaces.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Truck className="size-7 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Australia-Wide Service
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              From Sydney to Perth, we supply and install vinyl tile flooring
              across every state and territory.
            </p>
          </div>
        </div>
      </section>

      {/* Our Ranges */}
      <section id="ranges" className="bg-muted px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our Ranges
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We partner with the world&apos;s leading vinyl flooring
              manufacturers to bring you the best products for every commercial
              application.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <RangeCard
              name="Interface"
              slug="interface"
              description="Premium LVT solutions for commercial spaces."
              features={[
                "Luxury Vinyl Tile",
                "Carbon neutral floors",
                "Modular design system",
                "15-year commercial warranty",
              ]}
            />
            <RangeCard
              name="Karndean"
              slug="karndean"
              description="Realistic wood and stone LVT flooring."
              features={[
                "LooseLay technology",
                "Realistic wood & stone designs",
                "Waterproof & durable",
                "Lifetime residential warranty",
              ]}
            />
            <RangeCard
              name="Armstrong"
              slug="armstrong"
              description="Reliable commercial vinyl flooring solutions."
              features={[
                "Wide product range",
                "Healthcare & education specialists",
                "Proven durability",
                "Global manufacturer",
              ]}
            />
            <RangeCard
              name="Tarkett"
              slug="tarkett"
              description="Sustainable vinyl flooring for every sector."
              features={[
                "iD Collection",
                "Cradle to Cradle certified",
                "Low maintenance",
                "Acoustic options available",
              ]}
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How We Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From first call to finished floor, we make commercial vinyl tile
              projects simple.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold">Consult</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your project
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold">Source</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We recommend the right product
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold">Supply</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Competitive pricing, delivered to site
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                4
              </div>
              <h3 className="mt-4 text-lg font-semibold">Install</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Licensed installers, full project management
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Learn more about our process
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions by Sector */}
      <section className="bg-muted px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Flooring Solutions by Sector
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Purpose-built flooring specifications for every commercial
              environment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SolutionCard
              title="Office Flooring"
              href="/office-flooring"
              description="Durable, professional vinyl tile for corporate fitouts."
              features={[
                "Open-plan & private office designs",
                "Acoustic underlays available",
                "Low-VOC options",
                "Fast turnaround installs",
              ]}
            />
            <SolutionCard
              title="Retail Flooring"
              href="/retail-flooring"
              description="High-traffic vinyl flooring for retail environments."
              features={[
                "Heavy commercial-grade wear layers",
                "Slip resistance rated",
                "Custom design layouts",
                "Rapid overnight installation",
              ]}
            />
            <SolutionCard
              title="Healthcare Flooring"
              href="/healthcare-flooring"
              description="Hygienic, slip-resistant flooring for medical facilities."
              features={[
                "Welded seam options",
                "Antimicrobial surface treatments",
                "Slip-resistant finishes",
                "Infection control compliant",
              ]}
            />
            <SolutionCard
              title="Education Flooring"
              href="/education-flooring"
              description="Hard-wearing vinyl for schools and universities."
              features={[
                "Impact & stain resistant",
                "Acoustic performance",
                "Bright colour options",
                "Budget-friendly ranges",
              ]}
            />
            <SolutionCard
              title="Hospitality Flooring"
              href="/hospitality-flooring"
              description="Stylish, durable flooring for hotels and restaurants."
              features={[
                "Realistic timber & stone looks",
                "Waterproof construction",
                "Easy maintenance",
                "Designer colour palettes",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Trusted by facility managers and project teams across Australia.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialBlock
              quote="They handled everything from product selection to final install. The team was professional, on time, and the end result looks fantastic. Highly recommend for any commercial project."
              author="Sarah Mitchell"
              role="Facilities Manager"
              company="Greenway Corporate Park"
            />
            <TestimonialBlock
              quote="We needed 2,000m² of healthcare-grade flooring installed over a weekend. They delivered on budget and ahead of schedule. Our go-to flooring partner now."
              author="David Nguyen"
              role="Project Manager"
              company="Westfield Medical Centre"
            />
            <TestimonialBlock
              quote="Outstanding service from quote through to completion. The vinyl plank they recommended for our school halls has held up perfectly after two years of heavy use."
              author="Karen O'Brien"
              role="Business Manager"
              company="St Andrews College"
            />
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCta />
    </>
  );
}
