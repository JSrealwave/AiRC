import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { CTASection } from "@/components/marketing/cta-section";
import { getProductBySlug } from "@/data/products";
import { getVerticalBySlug, verticals } from "@/content/verticals";
import { createMetadata } from "@/lib/metadata";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) return {};
  return createMetadata({
    title: vertical.title,
    description: vertical.summary,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) notFound();

  const relatedProducts = vertical.idealProducts
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  return (
    <>
      <div className="relative overflow-hidden border-b border-border/60 bg-[var(--brand-navy)]">
        <div className="absolute inset-0">
          <Image
            src={vertical.image}
            alt={vertical.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-navy)]/85 to-[var(--brand-navy)]/50" />
        </div>
        <Container className="relative py-16">
          <Link
            href="/solutions"
            className="text-sm text-slate-400 hover:text-white"
          >
            ← Solutions
          </Link>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {vertical.title}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">{vertical.headline}</p>
        </Container>
      </div>

      <div className="py-16">
        <Container className="max-w-3xl">
          <p className="text-muted-foreground">{vertical.summary}</p>

          <h2 className="mt-12 text-lg font-semibold">Market challenges</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            {vertical.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h2 className="mt-12 text-lg font-semibold">AiRC capabilities</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            {vertical.capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h2 className="mt-12 text-lg font-semibold">Target accounts</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {vertical.targetAccounts.join(" · ")}
          </p>

          <h2 className="mt-12 text-lg font-semibold">Recommended products</h2>
          <ul className="mt-4 space-y-2">
            {relatedProducts.map(
              (p) =>
                p && (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-[var(--brand-accent)] hover:underline"
                    >
                      {p.name}
                    </Link>
                  </li>
                )
            )}
          </ul>

          <div className="mt-12">
            <Link
              href="/contact?type=integration"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Discuss your deployment
            </Link>
          </div>
        </Container>
      </div>

      <CTASection />
    </>
  );
}
