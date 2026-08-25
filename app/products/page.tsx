import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ProductCatalog } from "@/components/products/product-catalog";
import { FAMILY_DATASHEET, products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Official Seyeon FlexWATCH modules and finished cameras — filter by resolution, shutter, and form factor. Hailo-8L integration quoted through AiRC.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Seyeon FlexWATCH catalog"
          title="Official modules and finished cameras"
          description="These are real Seyeon model numbers from the FlexWATCH IP-module and finished-camera lines. Hailo-8L (13 TOPS) is quoted as an AiRC integration — not a Seyeon list option on every SKU."
        />
        <p className="mt-4 text-sm text-muted-foreground">
          <Link
            href={FAMILY_DATASHEET}
            className="text-[var(--brand-accent)] hover:underline"
          >
            Download the family datasheet (PDF)
          </Link>
          <span className="mx-2">·</span>
          <Link
            href="/resources/toll-anpr"
            className="text-[var(--brand-accent)] hover:underline"
          >
            Toll / ANPR application note
          </Link>
        </p>
        <div className="mt-10">
          <Suspense
            fallback={
              <p className="text-sm text-muted-foreground">Loading catalog…</p>
            }
          >
            <ProductCatalog products={products} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
