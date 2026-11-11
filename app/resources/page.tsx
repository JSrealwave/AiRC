import Link from "next/link";
import { FileText, NotebookPen } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FAMILY_DATASHEET } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Seyeon FlexWATCH family datasheet and the toll / ANPR application note for integrators.",
  path: "/resources",
});

const items = [
  {
    href: FAMILY_DATASHEET,
    external: true,
    icon: FileText,
    eyebrow: "PDF · 2 pages",
    title: "Edge AI module family datasheet",
    body: "Phase 1 catalog of embedded RGB IP camera modules and finished cameras, with inputs, ONVIF details, and NPU acceleration on select platforms.",
    cta: "Download PDF",
  },
  {
    href: "/resources/toll-anpr",
    external: false,
    icon: NotebookPen,
    eyebrow: "Application note",
    title: "Toll lane & free-flow ANPR",
    body: "When to pick global shutter, which FW7300 / FWC-EX SKU to start with, and a pilot checklist for ETC integrators.",
    cta: "Read the note",
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-16">
      <Container>
        <div>
          <p className="mb-2 text-sm font-medium tracking-wide text-[var(--brand-accent)] uppercase">
            Resources
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Datasheets and application notes
          </h1>
          <p className="mt-3 text-muted-foreground">
            Engineering-led material for toll, ITS, and PTZ buyers. Datasheets
            and notes cover the Phase 1 catalog with project-specific SKU
            guidance.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.href}
              className="flex flex-col rounded-xl border border-border/80 bg-card/50 p-6"
            >
              <item.icon className="size-6 text-[var(--brand-highlight)]" />
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {item.eyebrow}
              </p>
              <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{item.body}</p>
              <Link
                href={item.href}
                className={cn(buttonVariants({ variant: "outline" }), "mt-6 w-fit")}
              >
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
