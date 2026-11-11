"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/products/product-card";
import {
  applicationFilters,
  filterProducts,
  tagForApplication,
  type ApplicationFilter,
  type FormClass,
  type Product,
  type ResolutionClass,
  type ShutterType,
} from "@/data/products";
import { cn } from "@/lib/utils";

type FilterKey = "resolution" | "shutter" | "form" | "use";

const resolutionOptions: { value: "all" | ResolutionClass; label: string }[] = [
  { value: "all", label: "All MP" },
  { value: "2MP", label: "2MP" },
  { value: "5MP", label: "5MP" },
  { value: "8MP", label: "8MP" },
  { value: "12MP", label: "12MP" },
];

const shutterOptions: { value: "all" | ShutterType; label: string }[] = [
  { value: "all", label: "All shutters" },
  { value: "global", label: "Global" },
  { value: "rolling", label: "Rolling" },
];

const formOptions: { value: "all" | FormClass; label: string }[] = [
  { value: "all", label: "All forms" },
  { value: "module", label: "Module / board" },
  { value: "finished", label: "Finished camera" },
];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        active
          ? "border-[var(--brand-accent)] bg-[var(--brand-accent)]/15 text-foreground"
          : "border-border/80 text-muted-foreground hover:border-foreground/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function ProductCatalog({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const resolution = (searchParams.get("resolution") ?? "all") as
    | "all"
    | ResolutionClass;
  const shutter = (searchParams.get("shutter") ?? "all") as "all" | ShutterType;
  const form = (searchParams.get("form") ?? "all") as "all" | FormClass;
  const useParam = searchParams.get("use");
  const use = (
    useParam && tagForApplication(useParam) ? useParam : "all"
  ) as "all" | ApplicationFilter;

  const setFilter = useCallback(
    (key: FilterKey, value: string) => {
      const next = new URLSearchParams(searchParams.toString());
      if (value === "all") next.delete(key);
      else next.set(key, value);
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const clearAll = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const filtered = useMemo(() => {
    const list = filterProducts(products, { resolution, shutter, form, use });
    return [...list].sort((a, b) => {
      if (a.shutter !== b.shutter) return a.shutter === "global" ? -1 : 1;
      if (a.formClass !== b.formClass) return a.formClass === "module" ? -1 : 1;
      return 0;
    });
  }, [form, products, resolution, shutter, use]);

  const activeCount = [resolution, shutter, form, use].filter((v) => v !== "all").length;

  return (
    <div>
      <div className="rounded-xl border border-border/80 bg-card/40 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {filtered.length} of {products.length} modules
            {activeCount > 0 ? ` · ${activeCount} filter${activeCount > 1 ? "s" : ""}` : ""}
          </p>
          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs font-medium text-[var(--brand-accent)] hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <fieldset>
            <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Resolution
            </legend>
            <div className="flex flex-wrap gap-2">
              {resolutionOptions.map((opt) => (
                <Chip
                  key={opt.value}
                  active={resolution === opt.value}
                  onClick={() => setFilter("resolution", opt.value)}
                >
                  {opt.label}
                </Chip>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Shutter
            </legend>
            <div className="flex flex-wrap gap-2">
              {shutterOptions.map((opt) => (
                <Chip
                  key={opt.value}
                  active={shutter === opt.value}
                  onClick={() => setFilter("shutter", opt.value)}
                >
                  {opt.label}
                </Chip>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Form
            </legend>
            <div className="flex flex-wrap gap-2">
              {formOptions.map((opt) => (
                <Chip
                  key={opt.value}
                  active={form === opt.value}
                  onClick={() => setFilter("form", opt.value)}
                >
                  {opt.label}
                </Chip>
              ))}
            </div>
          </fieldset>
        </div>

        <fieldset className="mt-4 border-t border-border/60 pt-4">
          <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Application
          </legend>
          <div className="flex flex-wrap items-center gap-2">
            <Chip active={use === "all"} onClick={() => setFilter("use", "all")}>
              All
            </Chip>
            {applicationFilters
              .filter((opt) => opt.group === "primary")
              .map((opt) => (
                <Chip
                  key={opt.value}
                  active={use === opt.value}
                  onClick={() => setFilter("use", opt.value)}
                >
                  {opt.label}
                </Chip>
              ))}
            <span className="px-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Also
            </span>
            {applicationFilters
              .filter((opt) => opt.group === "adjacent")
              .map((opt) => (
                <Chip
                  key={opt.value}
                  active={use === opt.value}
                  onClick={() => setFilter("use", opt.value)}
                >
                  {opt.label}
                </Chip>
              ))}
          </div>
        </fieldset>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          No modules match those filters.{" "}
          <button
            type="button"
            onClick={clearAll}
            className="font-medium text-[var(--brand-accent)] hover:underline"
          >
            Reset
          </button>
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
