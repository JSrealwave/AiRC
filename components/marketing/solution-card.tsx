import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { VerticalSolution } from "@/content/verticals";

export function SolutionCard({
  vertical,
  compact = false,
}: {
  vertical: VerticalSolution;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/solutions/${vertical.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card/50 transition-colors hover:border-[var(--brand-accent)]/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--brand-navy)]">
        <Image
          src={vertical.image}
          alt={vertical.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className={compact ? "flex flex-1 flex-col p-6" : "flex flex-1 flex-col p-8"}>
        <h3
          className={
            compact
              ? "text-lg font-semibold group-hover:text-[var(--brand-accent)]"
              : "text-xl font-semibold group-hover:text-[var(--brand-accent)]"
          }
        >
          {vertical.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {compact ? vertical.summary : vertical.headline}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-accent)]">
          {compact ? "Learn more" : "View solution"}
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
