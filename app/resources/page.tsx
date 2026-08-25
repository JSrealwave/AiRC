import Link from "next/link";
import { FileText, NotebookPen } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FAMILY_DATASHEET } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "FlexWATCH + Hailo-8L family datasheet and the toll / ANPR application note for integrators.",
  path: "/resources",
});

const items = [
  {
    href: FAMILY_DATASHEET,
    external: true,
    icon: FileText,
    eyebrow: "PDF · 2 pages",
    title: "Edge AI module family datasheet",
    body: "Official Seyeon SKUs in this launch catalog, Hailo-8L attach, inputs, and ONVIF. Send it ahead of a quote call.",
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
        <SectionHeading
          eyebrow="Resources"
          title="Datasheets and application notes"
          description="Engineering-led material for toll, ITS, and PTZ buyers. Zoom-block and thermal SKUs are held until Seyeon confirms them."
        />
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
