"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-px border-t border-stone-200 bg-white md:hidden">
      <a
        href="tel:1300207915"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-medium text-stone-600"
      >
        <Phone className="size-4" />
        Call
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-stone-950 py-3.5 text-sm font-medium text-white"
      >
        Get a Quote
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
