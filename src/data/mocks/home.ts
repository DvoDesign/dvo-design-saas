/**
 * Content for the DvoDesign home page. Passed into section components via
 * props — never imported directly inside a component.
 * See obsidian/frontend/component-conventions.md "Data rules".
 *
 * TODO(DvoDesign): STATS and PORTFOLIO_ITEMS below use honest placeholder
 * values (zeros / "Coming soon") rather than invented numbers or fake client
 * names. Replace with real figures and real case studies before publishing.
 */

export const ASSET_BASE_URL =
  "https://api.getlayers.ai/storage/v1/object/public/public/assets/lumora-e8b711fc68";

export const HERO_IMAGES = {
  // The file named after.jpg is the always-visible base layer; before.jpg is
  // revealed under the cursor trail. Do not swap — see LiquidReveal.
  beforeSrc: `${ASSET_BASE_URL}/hero/after.jpg`,
  afterSrc: `${ASSET_BASE_URL}/hero/before.jpg`,
};

export interface NavItem {
  label: string;
  id: string;
  isContact?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "Work", id: "works" },
  { label: "Services", id: "services" },
  { label: "Studio", id: "about" },
  { label: "Contact", id: "contact", isContact: true },
];

export interface HeroCardItem {
  caption: string;
  title: string;
}

export const HERO_CARD_ITEMS: HeroCardItem[] = [
  { caption: "Architecture", title: "Built to scale." },
  { caption: "Fullstack", title: "Shipped end to end." },
  { caption: "B2B SaaS", title: "Made to grow." },
];

// Target verticals, not client logos — see TODO above.
export const PARTNERS = [
  "SaaS",
  "Fintech",
  "Healthtech",
  "Logistics",
  "Marketplaces",
  "DevTools",
  "B2B Platforms",
];

export interface PortfolioItem {
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    name: "SaaS Dashboard",
    category: "Case study",
    year: "Coming soon",
    description:
      "This slot is reserved for our first fullstack B2B SaaS build — details once the project ships.",
    tags: ["Architecture", "React", "Node.js"],
  },
  {
    name: "Internal Tooling",
    category: "Case study",
    year: "Coming soon",
    description: "A behind-the-scenes admin platform case study will go here.",
    tags: ["Fullstack", "Postgres", "Auth"],
  },
  {
    name: "Client Portal",
    category: "Case study",
    year: "Coming soon",
    description: "A secure client-facing portal case study will go here.",
    tags: ["Next.js", "API", "Roles & permissions"],
  },
  {
    name: "Platform Migration",
    category: "Case study",
    year: "Coming soon",
    description:
      "A legacy-to-modern-stack migration case study will go here.",
    tags: ["Architecture", "Migration", "Fullstack"],
  },
];

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    title: "Software Architecture",
    description: "System design and data models that hold up under real B2B load.",
  },
  {
    index: "02",
    title: "Fullstack Development",
    description: "Frontend, backend, and the infrastructure between them — one team.",
  },
  {
    index: "03",
    title: "B2B SaaS Platforms",
    description: "Multi-tenant apps, billing, permissions — the plumbing SaaS needs.",
  },
  {
    index: "04",
    title: "UI/UX Design",
    description: "Interfaces for complex dashboards that stay usable at scale.",
  },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// Placeholder zeros — see TODO above. Replace with real figures.
export const STATS: StatItem[] = [
  { value: 0, suffix: "+", label: "Projects delivered" },
  { value: 0, suffix: "%", label: "Client retention" },
  { value: 0, suffix: "", label: "Years active" },
  { value: 0, suffix: "+", label: "Team members" },
];

export interface FooterLink {
  label: string;
  id: string;
}

export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "About", id: "about" },
  { label: "Work", id: "works" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export const FOOTER_SERVICES_LINKS: FooterLink[] = [
  { label: "Architecture", id: "architecture" },
  { label: "Fullstack Development", id: "development" },
  { label: "UI/UX", id: "design" },
  { label: "Consulting", id: "consulting" },
];

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  { label: "X / Twitter", id: "twitter" },
  { label: "Behance", id: "behance" },
  { label: "Dribbble", id: "dribbble" },
  { label: "LinkedIn", id: "linkedin" },
];
