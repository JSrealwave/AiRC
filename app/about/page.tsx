import { Container } from "@/components/layout/container";
import { CTASection } from "@/components/marketing/cta-section";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "AiRC heritage since 1997 in computer vision. Embedded RGB IP camera modules and board-level AI camera modules for tolling, ITS, and PTZ, also specified by industrial, robotics, and medical-adjacent OEMs.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-border/60 bg-[var(--brand-navy)] py-16">
        <Container>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            About {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            From {siteConfig.heritageYear} computer vision roots to modern proactive
            physical security and edge AI.
          </p>
        </Container>
      </div>

      <div className="py-16">
        <Container className="space-y-6 text-muted-foreground">
          <p>
            <strong className="text-foreground">{siteConfig.legalName}</strong>{" "}
            (AiRC) is building the next generation of AI-native proactive physical
            security—turning reactive video surveillance into intelligent,
            anticipatory systems.
          </p>
          <p>
            Our Phase 1 focus is a high-trust B2B platform for Seyeon FlexWATCH
            modules and finished cameras, powered by our partnership with{" "}
            <strong className="text-foreground">{siteConfig.partner}</strong>.
            NPU acceleration is available on select platforms. Longer term, AiRC extends into autonomous drones,
            mobile surveillance towers, robots, and central orchestration via AiR
            Command.
          </p>
          <p>
            With more than 25 years of heritage from Active Image Recognition
            Technology (1997), we bring credible computer vision DNA to engineering
            conversations—speaking the language of toll operators, ITS integrators,
            and PTZ OEMs who need deployment-ready hardware, not slideware.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-foreground">
            Who we serve today
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Toll road operators and electronic toll collection (ETC) companies</li>
            <li>Intelligent Transportation Systems (ITS) firms and smart city integrators</li>
            <li>Pan-Tilt-Zoom (PTZ) camera manufacturers and security OEMs</li>
          </ul>
          <p>
            The same embedded RGB IP camera modules and board-level AI camera
            modules are also specified by industrial, robotics, and
            medical-adjacent OEMs who need deployment-ready edge AI hardware.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-foreground">
            Contact
          </h2>
          <p>
            {siteConfig.name} — {siteConfig.legalName}
            <br />
            {siteConfig.address.line1}, {siteConfig.address.city},{" "}
            {siteConfig.address.region} {siteConfig.address.postal}
            <br />
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="text-[var(--brand-accent)] hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            {" · "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--brand-accent)] hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </Container>
      </div>

      <CTASection />
    </>
  );
}
