/**
 * Site-wide configuration — the single source of truth for SEO.
 *
 * Consumed by the metadata generator, `robots.ts`, `sitemap.ts`, and the
 * JSON-LD structured-data helper. Update the placeholder values per project.
 */
import { publicEnv } from "@/env";

export const siteConfig = {
  name: "DvoDesign",
  description:
    "DvoDesign is an independent studio building B2B SaaS platforms — architecture, fullstack development, and the UI on top.",
  /**
   * Public origin, no trailing slash. Drives canonical URLs, OG tags, the
   * sitemap, and JSON-LD. Set `NEXT_PUBLIC_SITE_URL` in production.
   */
  url: publicEnv.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Default Open Graph / Twitter share image (path under `public/`). */
  ogImage: "/open-graph.png",
  // TODO(DvoDesign): swap in the real handle once the account exists.
  twitterHandle: "@dvodesign",
  author: "DvoDesign",
  /** Browser theme-color (address bar / PWA). */
  themeColor: "#000000",
} as const;
