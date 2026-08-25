import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { formatAddressLine, navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/30">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/brand/bug.png"
                alt=""
                width={32}
                height={32}
                className="size-7"
              />
              <span className="text-lg font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Powered by {siteConfig.partner} · NDAA-free SoC options · ONVIF
              compliant · Heritage since {siteConfig.heritageYear}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Explore</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Solutions</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/resources" className="hover:text-foreground">
                  Datasheet & notes
                </Link>
              </li>
              <li>
                <Link href="/resources/toll-anpr" className="hover:text-foreground">
                  Toll / ANPR note
                </Link>
              </li>
              <li>
                <Link href="/solutions/toll-roadway" className="hover:text-foreground">
                  Toll & Roadway
                </Link>
              </li>
              <li>
                <Link href="/solutions/ptz-manufacturers" className="hover:text-foreground">
                  PTZ Manufacturers
                </Link>
              </li>
              <li>
                <Link href="/solutions/its-smart-city" className="hover:text-foreground">
                  ITS & Smart City
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>© {year} {siteConfig.legalName}</p>
          <p>{formatAddressLine()}</p>
          <p>
            <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-foreground">
              {siteConfig.phoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
