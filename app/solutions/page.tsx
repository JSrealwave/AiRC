import { Container } from "@/components/layout/container";
import { AdjacentUses } from "@/components/marketing/adjacent-uses";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { solutionsAdjacentUses } from "@/content/adjacent";
import { verticals } from "@/content/verticals";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Edge AI for toll road operators, PTZ manufacturers, and ITS integrators. Embedded RGB IP camera modules and board-level AI camera modules, with light notes for industrial, robotics, and medical-adjacent OEMs.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Verticals"
          title="Solutions by industry"
          description="Purpose-built integration paths for the markets where Seyeon FlexWATCH has the strongest commercial traction."
        />
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
