import { Container } from "@/components/layout/container";

export default function ProductsLoading() {
  return (
    <div className="py-16">
      <Container>
        <div className="h-8 w-48 animate-pulse rounded bg-muted" />
        <div className="mt-4 h-4 w-96 max-w-full animate-pulse rounded bg-muted" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 animate-pulse rounded-xl border border-border bg-card/50"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
