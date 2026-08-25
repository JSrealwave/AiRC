import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { formatAddressLine, siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Request a quote, discuss a FlexWATCH + Hailo-8L integration, or talk through a toll, ITS, or PTZ design-in.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Contact & Partner</h1>
        <p className="mt-4 text-muted-foreground">
          Request a quote, discuss a FlexWATCH + Hailo-8L integration, or talk
          through a toll, ITS, or PTZ design-in. We typically respond within one
          business day.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {siteConfig.name} — {siteConfig.legalName}
          <br />
          {formatAddressLine()}
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
        <div className="mt-10">
          <Suspense fallback={<p className="text-sm text-muted-foreground">Loading form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
