import type { Metadata } from "next";

export const SITE_ORIGIN = "https://www.vinyltiles.com.au";

const openGraphDefaults = {
  type: "website" as const,
  locale: "en_AU",
  siteName: "Vinyl Tiles Australia",
};

/** Homepage share card copy — keep in sync with root layout openGraph. */
const homepageOpenGraph = {
  ...openGraphDefaults,
  title: "Commercial Vinyl Tile Flooring Australia | LVT Supply & Install",
  description:
    "Premium commercial LVT and vinyl plank supplied and installed across Melbourne, Sydney, and Brisbane. Interface, Karndean, Armstrong, Tarkett.",
};

/**
 * Per-page canonical and og:url. Do not set these on the root layout —
 * Next.js replaces the whole openGraph object per segment, and a homepage
 * default would make inner pages canonicalise and share as the homepage.
 */
export function selfCanonical(
  path: string,
): Pick<Metadata, "alternates" | "openGraph"> {
  const pathname = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const url = pathname === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${pathname}`;

  return {
    alternates: { canonical: pathname },
    openGraph: {
      ...(pathname === "/" ? homepageOpenGraph : openGraphDefaults),
      url,
    },
  };
}
