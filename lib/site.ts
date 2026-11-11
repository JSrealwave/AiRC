export const siteConfig = {
  name: "AiRC",
  legalName: "Active Image Recognition Corporation",
  tagline: "Edge AI camera modules for tolling, ITS, and PTZ platforms",
  description:
    "Global-shutter modules for toll, ITS, and PTZ, with dual-exposure streaming, multi-camera shutter sync, and dynamic ISP control. Add on-device AI acceleration without a full camera redesign.",
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
