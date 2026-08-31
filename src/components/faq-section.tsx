import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  faqPageJsonLd,
  serializeJsonLd,
  type FaqItem,
} from "@/lib/faq";

interface FaqSectionProps {
  items: readonly FaqItem[];
  heading?: string;
  eyebrow?: string;
}

export function FaqSection({
  items,
  heading = "Common questions.",
  eyebrow = "FAQ",
}: FaqSectionProps) {
  const jsonLd = faqPageJsonLd(items);

  return (
    <section style={{ backgroundColor: "rgb(252, 250, 245)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          <div>
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-5"
              style={{ color: "rgb(120, 110, 100)" }}
            >
              {eyebrow}
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight leading-tight max-w-xl"
              style={{ color: "rgb(38, 35, 30)" }}
            >
              {heading}
            </h2>
          </div>

          <div>
            <Accordion
              className="divide-y divide-[rgb(230,225,215)]"
              hiddenUntilFound
            >
              {items.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger
                    className="py-5 text-[14px] font-semibold hover:opacity-70"
                    style={{ color: "rgb(38, 35, 30)" }}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="pb-5 text-[14px] leading-relaxed"
                    style={{ color: "rgb(82, 75, 68)" }}
                  >
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
