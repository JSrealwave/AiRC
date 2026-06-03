import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Request a quote, partnership inquiry, or integration discussion with AiRC.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Contact & Partner</h1>
        <p className="mt-4 text-muted-foreground">
          B2B inquiries only. Share deployment context, volumes, and integration
          timelines. For general correspondence:{" "}
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
