import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProductCatalog } from "@/components/products/product-catalog";
import { FAMILY_DATASHEET, products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Embedded RGB IP Camera Modules",
  description:
    "Embedded RGB IP camera modules and finished cameras for toll, ITS, and PTZ. Hailo-8L edge AI, ONVIF, and an NDAA-free supply chain.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="py-16">
      <Container>
        <div>
          <p className="mb-2 text-sm font-medium tracking-wide text-[var(--brand-accent)] uppercase">
            Embedded IP Module Catalog
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Embedded RGB IP Camera Modules & Finished Cameras
          </h1>
          <p className="mt-3 text-muted-foreground">
            Board-level color CMOS IP modules and finished cameras from the
            Seyeon FlexWATCH line. Hailo-8L (13 TOPS) is available as an AiRC
            integration on supported SKUs.
          </p>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
          Toll, ITS, and PTZ remain the primary catalog fit. Optional
          Industrial, Robotics, and Medical-adjacent tags show where the same
          modules are also specified inside OEM designs—not as finished robots
          or medical devices.
        </p>
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
