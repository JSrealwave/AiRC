import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import type { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex h-full flex-col border-border/80 bg-card/50 transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          {product.hailo && (
            <Badge variant="secondary" className="gap-1">
              <Cpu className="size-3" />
              Hailo-8L
            </Badge>
          )}
          {product.ndaaCompliant && (
            <Badge variant="outline">NDAA-free</Badge>
          )}
        </div>
        <CardTitle className="mt-2 text-lg">
          <Link href={`/products/${product.slug}`} className="hover:text-[var(--brand-accent)]">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription>{product.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">
          {product.formFactor} · {product.resolution}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.idealFor.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/products/${product.slug}`}
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1 px-0")}
        >
          View specs
          <ArrowRight className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
