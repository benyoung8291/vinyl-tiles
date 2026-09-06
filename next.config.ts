import type { NextConfig } from "next";
import { resolve } from "path";
import { fileURLToPath } from "url";

const nextConfig: NextConfig = {
  turbopack: {
    root: resolve(fileURLToPath(import.meta.url), ".."),
  },
  images: {
    formats: ["image/webp"],
  },
  // Apex → www must be 301 (not Next's default 308 from permanent: true).
  // Path and query are preserved; HTTPS is required on the destination.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "vinyltiles.com.au" }],
        destination: "https://www.vinyltiles.com.au/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
