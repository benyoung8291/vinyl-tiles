import type { Metadata } from "next";

export const SITE_ORIGIN = "https://www.vinyltiles.com.au";

/**
 * Per-page canonical and og:url. Do not set these on the root layout —
 * Next.js inherits them onto every child route, so a homepage default
 * makes inner pages canonicalise and share as the homepage.
 */
export function selfCanonical(
  path: string,
): Pick<Metadata, "alternates" | "openGraph"> {
  const pathname = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const url = pathname === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${pathname}`;

  return {
    alternates: { canonical: pathname },
    openGraph: { url },
  };
}
