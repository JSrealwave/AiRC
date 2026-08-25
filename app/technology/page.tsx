import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArchitectureDiagram } from "@/components/marketing/architecture-diagram";
import { CTASection } from "@/components/marketing/cta-section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TrustBadges } from "@/components/marketing/trust-badges";
import { FAMILY_DATASHEET } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Technology",
  description:
    "Seyeon FlexWATCH Open AI SDK, Hailo-8L edge acceleration, NDAA-free SoCs, and flexible integration for toll, ITS, and PTZ.",
  path: "/technology",
});

const sections = [
  {
    title: "FlexWATCH Open AI SDK",
    body: "A practical five-step path for engineering teams to deploy proprietary models on-device—without rebuilding your entire VMS or cloud inference stack. Designed for integrators who own the model IP and need field-proven hardware.",
  },
  {
    title: "Hailo-8L at the edge",
    body: "13 TOPS of acceleration at approximately 1.5W enables multi-model inference, improved detection, and behavior analytics with industrial temperature support—critical for outdoor toll lanes and PTZ deployments.",
  },
  {
    title: "NDAA-free supply chain",
    body: "Eyenix, Ambarella, and Hailo SoC options support federal-adjacent and security-sensitive procurement without compromising on Sony sensor breadth (rolling and global shutter, 2 MP – 12 MP).",
  },
  {
    title: "Lego-style hardware modularity",
    body: "More than 20 compact form factors plus finished bullet, dome, and PTZ enclosures let you match mechanical constraints while standardizing on software and SDK workflows.",
  },
  {
    title: "Integration without redesign",
    body: "BT1120, LVDS, and YUV inputs connect to existing PTZ blocks and multi-sensor gateways. ONVIF Profile S, T, and M preserve interoperability with incumbent VMS platforms. Zoom-block and thermal SKUs are held until Seyeon confirms them.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <div className="border-b border-border/60 bg-[var(--brand-navy)] py-16">
        <Container>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Why Seyeon FlexWATCH + AiRC
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Technical differentiation for buyers who evaluate silicon, SDK maturity,
            and integration risk—not marketing claims.
          </p>
          <Link
            href={FAMILY_DATASHEET}
            className={cn(
              buttonVariants(),
              "mt-6 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90",
            )}
          >
            Family datasheet (PDF)
          </Link>
          <div className="mt-10">
            <ArchitectureDiagram />
          </div>
        </Container>
      </div>

      <section className="py-12">
        <Container>
          <TrustBadges />
        </Container>
      </section>

      <section className="py-8 pb-16">
        <Container>
          <SectionHeading
            title="Platform pillars"
            description="What engineering and product leaders should validate in a pilot."
          />
          <div className="mt-10 space-y-8">
            {sections.map((s, i) => (
              <article
                key={s.title}
                className="rounded-xl border border-border/80 bg-card/50 p-6"
              >
                <span className="text-xs font-medium text-[var(--brand-highlight)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
