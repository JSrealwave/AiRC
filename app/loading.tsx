import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <Container className="flex min-h-[40vh] items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-[var(--brand-accent)]" />
    </Container>
  );
}
