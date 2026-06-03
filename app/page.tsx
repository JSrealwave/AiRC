import Link from "next/link";
import { ArrowRight, Layers, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { CTASection } from "@/components/marketing/cta-section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TrustBadges } from "@/components/marketing/trust-badges";
import { ProductCard } from "@/components/products/product-card";
import { verticals } from "@/content/verticals";
import { getFeaturedProducts } from "@/data/products";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-[var(--brand-navy)] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.35_0.12_250),transparent_55%)]" />
        <Container className="relative">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            Seyeon FlexWATCH · Hailo-8L · NDAA-free · Since 1997
          </p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Run your AI models on proven, deployment-ready camera hardware
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Optimized for tolling, ITS, and PTZ platforms. Add advanced on-device
            AI to your existing roadway or pan-tilt cameras without a full
            hardware redesign.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90"
              )}
            >
              View Products
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/technology"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-slate-500 text-white hover:bg-white/10"
              )}
            >
              Technology Overview
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <TrustBadges />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="Built for toll, ITS, and PTZ integrators"
            description="Seyeon's strongest commercial traction aligns with operators and OEMs who need credible edge AI without replacing proven optics."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                href={`/solutions/${v.slug}`}
                className="group rounded-xl border border-border/80 bg-card/50 p-6 transition-colors hover:border-[var(--brand-accent)]/50"
              >
                <h3 className="text-lg font-semibold group-hover:text-[var(--brand-accent)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-accent)]">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <Container>
          <SectionHeading
            eyebrow="Differentiators"
            title="Integration-first edge AI"
            description="Technical credibility for engineering-led buyers."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "FlexWATCH Open AI SDK",
                body: "Five-step path to deploy proprietary models on-device—without rebuilding your VMS stack.",
              },
              {
                icon: Layers,
                title: "Lego-style modularity",
                body: "20+ compact form factors plus finished bullet, dome, and PTZ options.",
              },
              {
                icon: ArrowRight,
                title: "Flexible video inputs",
                body: "BT1120, LVDS, and YUV for PTZ blocks, thermal fusion, and multi-sensor gateways.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border/80 p-6"
              >
                <item.icon className="size-6 text-[var(--brand-highlight)]" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Catalog"
              title="Featured modules & cameras"
              description="Representative SKUs for quote and integration discussions."
            />
            <Link
              href="/products"
              className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
            >
              Full catalog
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
