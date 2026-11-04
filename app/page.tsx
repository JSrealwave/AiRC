import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Layers, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ArchitectureDiagram } from "@/components/marketing/architecture-diagram";
import { CTASection } from "@/components/marketing/cta-section";
import { AdjacentUses } from "@/components/marketing/adjacent-uses";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { TrustBadges } from "@/components/marketing/trust-badges";
import { ProductCard } from "@/components/products/product-card";
import { homepageAdjacentUses } from "@/content/adjacent";
import { verticals } from "@/content/verticals";
import { FAMILY_DATASHEET, getFeaturedProducts, getProductBySlug } from "@/data/products";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const hero = getProductBySlug("fw7300-gkn");

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-[var(--brand-navy)] py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.35_0.12_250),transparent_55%)]" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                Seyeon FlexWATCH · Hailo-8L · NDAA-free · Since 1997
              </p>
              <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-tight">
                Deployment-ready embedded AI camera modules
              </h1>
              <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
                Powered by Seyeon FlexWATCH and Hailo-8L. Add advanced
                on-device AI to your existing PTZ, roadway, or embedded designs
                without a full redesign. Nearly 30 years of IP video heritage.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90",
                  )}
                >
                  Filter the catalog
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href={FAMILY_DATASHEET}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-slate-500 text-white hover:bg-white/10",
                  )}
                >
                  <FileText className="size-4" />
                  Family datasheet
                </Link>
              </div>
            </div>

            {hero && (
              <Link
                href={`/products/${hero.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#5d7a80] shadow-2xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[var(--brand-navy)]/70 px-5 py-3 backdrop-blur-sm">
                  <div>
                    <p className="font-mono text-sm font-semibold text-white">
                      {hero.name}
                    </p>
                    <p className="text-xs text-slate-300">{hero.title}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-highlight)]">
                    View SKU <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            )}
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
            <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-highlight)]">
                  Integration path
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  Sensor → FlexWATCH → Hailo-8L → your VMS
                </h2>
              </div>
              <Link
                href="/technology"
                className="text-sm font-medium text-[var(--brand-accent)] hover:underline"
              >
                Technology overview
              </Link>
            </div>
            <ArchitectureDiagram />
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
              <SolutionCard key={v.slug} vertical={v} compact />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border/60 bg-muted/10 py-12">
        <Container>
          <SectionHeading
            eyebrow="Also used in"
            title="Adjacent applications"
            description="The same embedded RGB IP camera modules and board-level AI camera modules, specified where an OEM needs edge AI without a full mechanical redesign. Toll, ITS, and PTZ remain the primary fit."
          />
          <div className="mt-8">
            <AdjacentUses items={homepageAdjacentUses} />
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
                title: "Official Seyeon SKUs",
                body: "Modules, LVDS boards, and finished LPR/ANPR cameras — quoted under real FlexWATCH model numbers.",
              },
              {
                icon: ArrowRight,
                title: "Flexible video inputs",
                body: "BT1120, LVDS, and YUV for PTZ blocks and multi-sensor gateways. No zoom-block or thermal SKUs until Seyeon confirms.",
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
              title="Featured Seyeon models"
              description="Start with a 2MP global-shutter module, an LVDS PTZ board, or the 4K LPR box camera."
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
