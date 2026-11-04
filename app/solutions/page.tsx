import { Container } from "@/components/layout/container";
import { AdjacentUses } from "@/components/marketing/adjacent-uses";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { solutionsAdjacentUses } from "@/content/adjacent";
import { verticals } from "@/content/verticals";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Toll, PTZ & ITS Edge AI Solutions",
  description:
    "Edge AI for toll, PTZ, and ITS. Embedded RGB IP camera modules and board-level AI camera modules, with ONVIF and Hailo-8L.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <div className="py-16">
      <Container>
        <div>
          <p className="mb-2 text-sm font-medium tracking-wide text-[var(--brand-accent)] uppercase">
            Verticals
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Solutions by industry
          </h1>
          <p className="mt-3 text-muted-foreground">
            Purpose-built integration paths to add edge AI without a full
            redesign.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {verticals.map((v) => (
            <SolutionCard key={v.slug} vertical={v} />
          ))}
        </div>

        <div className="mt-16 border-t border-border/60 pt-12">
          <SectionHeading
            eyebrow="Additional use cases"
            title="Adjacent markets"
            description="Same embedded RGB IP camera modules and board-level AI camera modules, for OEM programs outside the three verticals above. Toll, PTZ, and ITS remain the primary fit."
          />
          <div className="mt-8">
            <AdjacentUses items={solutionsAdjacentUses} />
          </div>
        </div>
      </Container>
    </div>
  );
}
