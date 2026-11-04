export const siteConfig = {
  name: "AiRC",
  legalName: "Active Image Recognition Corporation",
  tagline: "Edge AI camera modules for tolling, ITS, and PTZ platforms",
  description:
    "Deployment-ready embedded RGB IP camera modules and board-level AI camera modules powered by Seyeon FlexWATCH and Hailo-8L. Add on-device AI to existing PTZ or roadway cameras without a full redesign.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.activeimagerecognition.com",
  email: process.env.CONTACT_EMAIL ?? "sales@activeimagerecognition.com",
  phoneDisplay: "(858) 876-2276",
  phoneE164: "+18588762276",
  address: {
    line1: "5857 Owens Avenue, Suite 300",
    city: "Carlsbad",
    region: "CA",
    postal: "92008",
    country: "US",
    countryName: "United States",
    locationShort: "Carlsbad, California",
  },
  heritageYear: 1997,
  partner: "Seyeon Tech FlexWATCH",
} as const;

export function formatAddressLine(): string {
  const { line1, city, region, postal } = siteConfig.address;
  return `${line1}, ${city}, ${region} ${postal}`;
}

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/technology", label: "Technology" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
