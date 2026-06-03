import type { Product } from "@/data/products";
import { siteConfig } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    foundingDate: String(siteConfig.heritageYear),
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "AiRC",
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
    },
  };
}
