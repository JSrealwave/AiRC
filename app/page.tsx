import Image from "next/image";
import Link from "next/link";
import { Aperture, ArrowRight, FileText, RefreshCw, SlidersHorizontal } from "lucide-react";
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
                Global Shutter · NDAA-free · ONVIF · Since 1997
              </p>
              <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-tight">
                Global Shutter modules with programmable control
              </h1>
              <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
                Dual-exposure streaming, multi-camera shutter sync, and dynamic
                ISP control — practical tools for high-speed roadway, toll, and
                PTZ applications. Add on-device AI acceleration without a full
                camera redesign.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  {
                    title: "Dual-exposure streaming",
                    body: "Primary and secondary streams with independent exposure on one camera.",
                  },
                  {
                    title: "Multi-camera shutter sync",
                    body: "Frame synchronization across cameras, including strobes for LPR/ANPR.",
                  },
                  {
                    title: "Dynamic ISP control",
                    body: "ISP profiles switch on an event, motion, or time of day.",
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                  href="/contact?type=quote"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-slate-500 text-white hover:bg-white/10",
                  )}
                >
                  Request Quote
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
                  Sensor → FlexWATCH SoC → Acceleration → Your VMS
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
            description="Dual-exposure streaming, shutter sync, and dynamic ISP control for operators and OEMs who need on-device AI acceleration without replacing proven optics."
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
            eyebrow="Programmable control"
            title="What the three controls do"
            description="Exposure, sync, and ISP behavior for toll, ITS, and PTZ."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Aperture,
                title: "Dual-exposure streaming",
                body: "Primary and secondary streams with independent exposure on one camera. One imager covers reflective and non-reflective plates.",
              },
              {
                icon: RefreshCw,
                title: "Multi-camera shutter sync",
                body: "Shutter sync across cameras, including strobes, so lanes capture the same moment for LPR/ANPR.",
              },
              {
                icon: SlidersHorizontal,
                title: "Dynamic ISP control",
                body: "The ISP pipeline follows day, night, schedule, an event input, or motion — exposure, white balance, HDR, and shutter speed.",
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
              title="Featured modules"
              description="Global Shutter is recommended for toll, ITS, and high-speed PTZ. Start with a 2MP global-shutter module or the 4K LPR box camera."
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
