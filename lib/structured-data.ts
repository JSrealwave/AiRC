import type { Product } from "@/data/products";
import { formatAddressLine, siteConfig } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    description: siteConfig.description,
    foundingDate: String(siteConfig.heritageYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    mpn: product.manufacturerSku,
    image: `${siteConfig.url}${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: "Seyeon Tech",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
      description: "B2B quote required — contact for pricing",
      url: `${siteConfig.url}/products/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: siteConfig.legalName,
        url: siteConfig.url,
      },
    },
  };
}

export function postalAddressText(): string {
  return formatAddressLine();
}
