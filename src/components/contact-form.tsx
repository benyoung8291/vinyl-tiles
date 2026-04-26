"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjowgkl";

const projectTypes = [
  "New Install",
  "Replacement",
  "Maintenance",
  "Supply Only",
  "Other",
];

const productOptions = [
  "Interface",
  "Karndean",
  "Armstrong",
  "Tarkett",
  "Other",
  "Not Sure",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [products, setProducts] = useState<string[]>([]);

  function handleProductToggle(product: string, checked: boolean) {
    setProducts((prev) =>
      checked ? [...prev, product] : prev.filter((p) => p !== product)
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setErrorMessage(null);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        formEl.reset();
        setProducts([]);
      } else {
        const data = await response.json().catch(() => null);
        const message =
          (data &&
            (data.error ||
              (Array.isArray(data.errors) &&
                data.errors.map((er: { message?: string }) => er.message).filter(Boolean).join(", ")))) ||
          "Something went wrong submitting the form. Please try again or call 1300 207 915.";
        setErrorMessage(message);
      }
    } catch {
      setErrorMessage(
        "We couldn't reach our form service. Please try again or call 1300 207 915."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-[rgb(230,225,215)] p-8 text-center" style={{ backgroundColor: "rgb(248, 245, 237)" }}>
        <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgb(240, 228, 210)" }}>
          <svg
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="rgb(55, 50, 45)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-base font-semibold" style={{ color: "rgb(38, 35, 30)" }}>
          Thank you for your enquiry!
        </h3>
        <p className="text-[14px]" style={{ color: "rgb(120, 110, 100)" }}>
          We&apos;ve received your message and will get back to you within 1
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="space-y-5"
    >
      {/* Hidden Formspree subject */}
      <input
        type="hidden"
        name="_subject"
        value="New enquiry from vinyltiles.com.au"
      />

      {/* Hidden products list (Formspree-friendly comma list of selected) */}
      <input
        type="hidden"
        name="productsOfInterest"
        value={products.join(", ")}
      />

      {/* Full Name */}
      <div className="space-y-1.5">
        <Label htmlFor="fullName">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="fullName"
          name="fullName"
          required
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="04XX XXX XXX"
        />
      </div>

      {/* Project Type */}
      <div className="space-y-1.5">
        <Label htmlFor="projectType">Project Type</Label>
        <select
          id="projectType"
          name="projectType"
          className="h-8 w-full rounded-md border border-input bg-transparent px-2.5 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          defaultValue=""
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Approximate Area */}
      <div className="space-y-1.5">
        <Label htmlFor="area">Approximate Area (m&sup2;)</Label>
        <Input
          id="area"
          name="area"
          type="number"
          min={0}
          placeholder="e.g. 150"
        />
      </div>

      {/* Products of Interest */}
      <fieldset className="space-y-2.5">
        <legend className="text-sm font-medium">Products of Interest</legend>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
          {productOptions.map((product) => (
            <div key={product} className="flex items-center gap-2">
              <Checkbox
                id={`product-${product}`}
                checked={products.includes(product)}
                onCheckedChange={(checked) =>
                  handleProductToggle(product, checked === true)
                }
              />
              <Label
                htmlFor={`product-${product}`}
                className="cursor-pointer font-normal"
              >
                {product}
              </Label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project, timeline, or any questions you have..."
          className="min-h-28"
        />
      </div>

      {errorMessage && (
        <p
          className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-[13px]"
          style={{ color: "rgb(160, 50, 40)" }}
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}
