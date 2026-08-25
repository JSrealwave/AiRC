import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { verticals } from "@/content/verticals";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Edge AI solutions for toll road operators, PTZ camera manufacturers, and ITS integrators.",
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
      </Container>
    </div>
  );
}
