import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { verticals } from "@/content/verticals";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths = [
    "",
    "/products",
    "/solutions",
    "/technology",
    "/resources",
    "/resources/toll-anpr",
    "/about",
    "/contact",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path || "/"}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...verticals.map((vertical) => ({
      url: `${siteConfig.url}/solutions/${vertical.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
