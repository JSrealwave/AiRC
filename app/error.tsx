"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        We could not load this page. Try again or return home.
      </p>
      <div className="mt-6 flex gap-3">
        <button type="button" onClick={reset} className={buttonVariants()}>
          Try again
        </button>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Home
        </Link>
      </div>
    </Container>
  );
}
