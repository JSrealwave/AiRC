import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/marketing/section-heading";
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
        <div className="mt-10 space-y-6">
          {verticals.map((v) => (
            <article
              key={v.slug}
              className="rounded-xl border border-border/80 bg-card/50 p-8"
            >
              <h2 className="text-xl font-semibold">{v.title}</h2>
              <p className="mt-2 text-muted-foreground">{v.headline}</p>
              <Link
                href={`/solutions/${v.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-accent)]"
              >
                View solution <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
