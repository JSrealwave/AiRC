export const siteConfig = {
  name: "AiRC",
  legalName: "Active Image Recognition Command Corporation",
  tagline: "Edge AI camera modules for tolling, ITS, and PTZ platforms",
  description:
    "Deployment-ready embedded AI camera modules powered by Seyeon FlexWATCH and Hailo-8L. Add advanced on-device AI to your existing PTZ or roadway cameras without a full redesign.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://airc.example.com",
  email: process.env.CONTACT_EMAIL ?? "sales@airc.example.com",
  heritageYear: 1997,
  partner: "Seyeon Tech FlexWATCH",
} as const;

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
