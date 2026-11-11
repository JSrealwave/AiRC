import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CTASection } from "@/components/marketing/cta-section";
import { FAMILY_DATASHEET, getProductBySlug } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Toll & ANPR application note",
  description:
    "How to specify Seyeon FlexWATCH global-shutter modules and FW7300 box cameras for highway-speed LPR/ANPR, including dual-exposure, shutter sync, and ISP profiles.",
  path: "/resources/toll-anpr",
});

const recs = [
  {
    slug: "fwc-ex2-0234",
    why: "Start here when you already have a housing and need a 2MP global-shutter core.",
  },
  {
    slug: "fw7300-gpn",
    why: "Finished 5MP global-shutter box for a dedicated plate camera on a gantry.",
  },
  {
    slug: "fw7300-gkn",
    why: "4K global-shutter box when one camera must cover plate + class + wider lane.",
  },
  {
    slug: "fwc-ex1-565",
    why: "8MP global-shutter module if you are designing your own roadway enclosure.",
  },
];

export default function TollAnprNotePage() {
  return (
    <>
      <div className="border-b border-border/60 bg-[var(--brand-navy)] py-16">
        <Container className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-highlight)]">
            Application note · Toll / ETC
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Specifying FlexWATCH for highway-speed ANPR
          </h1>
          <p className="mt-4 text-slate-300">
            A working note for toll operators and ETC integrators who need to
            add on-device models without replacing qualified lane optics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={FAMILY_DATASHEET}
              className={cn(
                buttonVariants(),
                "bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90",
              )}
            >
              Family datasheet (PDF)
            </Link>
            <Link
              href="/products?shutter=global&form=finished"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-slate-500 text-white hover:bg-white/10",
              )}
            >
              Global-shutter finished cameras
            </Link>
          </div>
        </Container>
      </div>

      <article className="py-16">
        <Container className="max-w-3xl space-y-10 text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">The problem</h2>
            <p className="mt-3">
              Free-flow and plaza lanes fail in predictable ways: rolling-shutter
              smear at highway speed, false plate reads at night, and a
              multi-year camera redesign every time a new model is required.
              NDAA language in RFPs then knocks out the SoC you already
              designed around.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              What to specify first
            </h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-foreground">Global shutter</strong> for
                any camera whose job is a plate at speed. Rolling shutter is
                acceptable for plaza overview and classification-only views.
              </li>
              <li>
                <strong className="text-foreground">Resolution vs. FOV.</strong>{" "}
                2MP (FWC-EX2-0234) is enough for a dedicated plate camera.
                5MP (FW7300-GPN / FWC-EX1-567) covers plate plus adjacent
                lane. 4K / 8MP (FW7300-GKN / FWC-EX1-565) is for one camera
                doing plate, class, and a wider plaza slice.
              </li>
              <li>
                <strong className="text-foreground">Module vs. finished.</strong>{" "}
                Use FWC-EX* modules when the housing and IR already exist.
                Use the FW7300 box when you need a C-mount roadway camera
                this quarter.
              </li>
              <li>
                <strong className="text-foreground">NPU acceleration on select platforms.</strong>{" "}
                Where the application fits, on-device acceleration can cover
                plate, class, and tamper as concurrent models. This is an AiRC
                integration, not a factory option on every SKU. Higher-power
                acceleration belongs in a finished camera with a proper heat sink.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Recommended starting SKUs
            </h2>
            <ul className="mt-4 space-y-4">
              {recs.map((row) => {
                const product = getProductBySlug(row.slug);
                if (!product) return null;
                return (
                  <li key={row.slug} className="rounded-lg border border-border/80 p-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-mono font-semibold text-[var(--brand-accent)] hover:underline"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-1 text-sm text-foreground">{product.title}</p>
                    <p className="mt-2 text-sm">{row.why}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Integration without a redesign
            </h2>
            <p className="mt-3">
              FlexWATCH accepts BT1120, LVDS, and YUV. If the lane already
              has a qualified optic and illuminator, keep them. Attach the
              module or LVDS board, land ONVIF Profile S/T (and M for
              metadata) on the incumbent VMS, and run customer models
              through the FlexWATCH Open AI SDK. Do not specify zoom-block
              or thermal SKUs on this program until Seyeon confirms them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Pilot checklist
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>One plate camera (global shutter) and one overview camera (rolling is fine).</li>
              <li>Capture 48 hours of night + rain before locking IR and shutter.</li>
              <li>Measure false-read rate against the current lane camera, not a lab dataset.</li>
              <li>Confirm NDAA SoC path (Eyenix or Ambarella) in the procurement packet.</li>
              <li>If the design uses an NPU, prove the plate model on that platform before adding a second model.</li>
              <li>Quote volume and private-label separately — Phase 1 is request-quote only.</li>
            </ul>
          </section>

          <p className="text-sm">
            Questions on a specific plaza or free-flow site:{" "}
            <Link
              href="/contact?type=integration"
              className="text-[var(--brand-accent)] hover:underline"
            >
              request an integration discussion
            </Link>
            .
          </p>
        </Container>
      </article>

      <CTASection />
    </>
  );
}
