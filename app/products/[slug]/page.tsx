import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { SpecTable } from "@/components/products/spec-table";
import { getProductBySlug, products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { productJsonLd } from "@/lib/structured-data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return createMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const jsonLd = productJsonLd(product);

  return (
    <div className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/products" className="hover:text-foreground">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-xl bg-[#5d7a80]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain p-4"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {product.hailo && <Badge>Hailo-8L</Badge>}
              {product.ndaaCompliant && <Badge variant="outline">NDAA-free</Badge>}
              <Badge variant="secondary">{product.resolution}</Badge>
              <Badge variant="outline">
                {product.shutter === "global" ? "Global shutter" : "Rolling shutter"}
              </Badge>
            </div>
            <h1 className="mt-4 font-mono text-3xl font-semibold tracking-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-foreground/90">{product.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Seyeon FlexWATCH
              <span className="mx-2 text-border">·</span>
              {product.shutter === "global" ? "Global shutter" : "Rolling shutter"}
              <span className="mx-2 text-border">·</span>
              {product.formClass === "finished" ? "Finished camera" : "Module / board"}
            </p>
            <p className="mt-6 text-muted-foreground">{product.description}</p>

            <h2 className="mt-10 text-lg font-semibold">Highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {product.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-lg font-semibold">Ideal for</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.idealFor.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <aside className="rounded-xl border border-border/80 bg-card/50 p-6 lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-medium">B2B pricing</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Volume, integration scope, and branding options quoted per
              deployment. No self-serve checkout in Phase 1.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={`/contact?type=quote&product=${product.slug}`}
                className={cn(buttonVariants(), "w-full")}
              >
                Request Quote
              </Link>
              <Link
                href={`/contact?type=integration&product=${product.slug}`}
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              >
                Integration Support
              </Link>
              <Link
                href={product.datasheetHref}
                className={cn(buttonVariants({ variant: "ghost" }), "w-full")}
              >
                Family datasheet (PDF)
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <h2 className="text-lg font-semibold">Specifications</h2>
          <div className="mt-4">
            <SpecTable specs={product.specs} />
          </div>
        </div>
      </Container>
    </div>
  );
}
