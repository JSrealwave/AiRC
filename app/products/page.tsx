import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Embedded AI camera modules and edge AI cameras powered by Seyeon FlexWATCH and Hailo-8L.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Catalog"
          title="Embedded modules & edge AI cameras"
          description="B2B quote flow — request pricing and integration support for your deployment. Headless commerce (Stripe / Shopify Hydrogen) planned for a later phase."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
