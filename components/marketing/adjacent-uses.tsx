import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AdjacentUse } from "@/content/adjacent";

export function AdjacentUses({ items }: { items: AdjacentUse[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex h-full flex-col overflow-hidden rounded-lg border border-border/70 bg-card/30 transition-colors hover:border-[var(--brand-accent)]/40"
        >
          {item.image && (
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--brand-navy)]">
              <Image
                src={item.image}
                alt={item.imageAlt ?? ""}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-base font-semibold group-hover:text-[var(--brand-accent)]">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-accent)]">
              View modules
              <ArrowRight className="size-3.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
