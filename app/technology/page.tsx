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
  title: "Global Shutter & Programmable Control",
  description:
    "Global shutter, dual-exposure streaming, multi-camera shutter sync, and dynamic ISP control. Seyeon FlexWATCH Eyenix-based modules for toll, ITS, and PTZ, with edge AI acceleration on select platforms.",
  path: "/technology",
});

const sections = [
  {
    title: "Global shutter and rolling shutter",
    body: "Global shutter is simultaneous exposure of the full frame and is preferred for fast-moving vehicles. Rolling shutter is a sequential readout and is generally more efficient in low light. Global shutter is the recommendation for toll, ITS, and high-speed PTZ.",
  },
  {
    title: "Dual-exposure, shutter sync, and dynamic ISP",
    body: "Dual-exposure streaming runs a primary and secondary stream with independent exposure on one camera. Multi-camera shutter sync locks timing across cameras and strobes for LPR/ANPR. Dynamic ISP control changes exposure, white balance, gamma, HDR, color, and shutter speed on day, night, schedule, an event input, or motion.",
  },
  {
    title: "FlexWATCH Open AI SDK",
    body: "A practical five-step path for engineering teams to deploy proprietary models on-device—without rebuilding your entire VMS or cloud inference stack. Designed for integrators who own the model IP and need field-proven hardware.",
  },
  {
    title: "Edge AI acceleration",
    body: "Seyeon FlexWATCH is the technology partner, and the current platform is Eyenix-based SoCs. NPU options are available on select platforms, including Hailo and Kneron where a configuration supports them, with engineering support for model integration and testing.",
  },
  {
    title: "NDAA-free supply chain",
    body: "Eyenix-based SoCs are primary on the current Seyeon FlexWATCH platform, with Ambarella on select boards. That supply chain supports federal-adjacent and security-sensitive procurement across Sony sensors from 2 MP to 12 MP, in rolling and global shutter.",
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
            Why AiRC
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Global shutter, dual-exposure streaming, multi-camera shutter sync,
            and dynamic ISP control for buyers who evaluate exposure and
            integration risk. Seyeon FlexWATCH is the technology partner, and
            the current platform is Eyenix-based. Edge AI acceleration is
            available on select platforms, with engineering support for model
            integration and testing.
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
          <aside className="mt-10 rounded-xl border border-border/80 bg-muted/20 p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-accent)]">
              Also specified by
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The same Seyeon FlexWATCH modules and SDK path are used by OEMs in
              industrial automation, robotics platforms, and medical/life-science
              systems that need an NDAA-free supply chain and minimal mechanical
              redesign. Edge AI acceleration is available on select platforms,
              with engineering support for model integration.
              These are embedded RGB IP camera modules and board-level camera
              modules for those designs — not finished robots or medical devices.
            </p>
          </aside>
        </Container>
      </section>

      <CTASection description="Request a quote, schedule an integration discussion, or explore partnership options with our engineering team." />
    </>
  );
}
