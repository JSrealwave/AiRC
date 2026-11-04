import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { isAdjacentMarketTag, type Product } from "@/data/products";
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
  const primaryTags = product.idealFor
    .filter((tag) => !isAdjacentMarketTag(tag))
    .slice(0, 3);
  const adjacentTags = product.idealFor.filter(isAdjacentMarketTag);

  return (
    <Card className="flex h-full flex-col overflow-hidden border-border/80 bg-card/50 pt-0 transition-shadow hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[16/10] bg-[#5d7a80]"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-2"
        />
      </Link>
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
        <CardTitle className="mt-2 font-mono text-base tracking-tight">
          <Link href={`/products/${product.slug}`} className="hover:text-[var(--brand-accent)]">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription>{product.title}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">
          {product.formFactor} · {product.resolution} ·{" "}
          {product.shutter === "global" ? "Global shutter" : "Rolling shutter"}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {primaryTags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        {adjacentTags.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Also
            </span>
            {adjacentTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10px] font-normal text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
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
