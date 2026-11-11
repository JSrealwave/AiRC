import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProductCatalog } from "@/components/products/product-catalog";
import { FAMILY_DATASHEET, products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Embedded RGB IP Camera Modules",
  description:
    "Global Shutter embedded RGB IP modules and finished cameras for toll, ITS, and PTZ. Dual-exposure, shutter sync, and dynamic ISP control. ONVIF and an NDAA-free supply chain.",
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
            Board-level color CMOS IP modules and finished cameras. Global
            Shutter recommended for toll, ITS, and high-speed PTZ.
          </p>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
          Dual-exposure streaming, multi-camera shutter sync, and dynamic ISP
          control are programmable on these platforms. Seyeon FlexWATCH is the
          technology partner. NPU acceleration is available on select platforms.
          For higher-power acceleration, a finished camera with proper thermal
          design is the better path than a bare module.
        </p>
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
