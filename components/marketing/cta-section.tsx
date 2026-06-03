import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="border-y border-border/60 bg-[var(--brand-navy)] py-16">
      <Container className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Ready to integrate edge AI into your platform?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
          Request a quote, schedule an integration discussion, or explore
          partnership options with our engineering team and Seyeon FlexWATCH
          support.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact?type=quote"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent)]/90"
            )}
          >
            Request Quote
          </Link>
          <Link
            href="/contact?type=integration"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-slate-500 text-white hover:bg-white/10 hover:text-white"
            )}
          >
            Integration Support
          </Link>
        </div>
      </Container>
    </section>
  );
}
