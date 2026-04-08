import type { NextConfig } from "next";
import { resolve } from "path";
import { fileURLToPath } from "url";

const nextConfig: NextConfig = {
  turbopack: {
    root: resolve(fileURLToPath(import.meta.url), ".."),
  },
  images: {
    remotePatterns: [
      { hostname: "s7d1.scene7.com" },
      { hostname: "www.karndean.com" },
      { hostname: "www.armstrongflooring.au" },
      { hostname: "media.tarkett-image.com" },
    ],
  },
};

export default nextConfig;
