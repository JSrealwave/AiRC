import { BadgeCheck, Cpu, Globe, Shield } from "lucide-react";

const badges = [
  { icon: Shield, label: "NDAA-Free SoCs", detail: "Eyenix · Ambarella" },
  { icon: BadgeCheck, label: "Seyeon FlexWATCH", detail: "Open AI SDK partner" },
  { icon: Cpu, label: "AI Acceleration", detail: "Hailo · Kneron · select platforms" },
  { icon: Globe, label: "ONVIF", detail: "Profile S / T / M" },
] as const;

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {badges.map(({ icon: Icon, label, detail }) => (
        <div
          key={label}
          className="flex flex-col gap-2 rounded-lg border border-border/80 bg-card/50 p-4"
        >
          <Icon className="size-5 text-[var(--brand-accent)]" aria-hidden />
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-muted-foreground">{detail}</p>
        </div>
      ))}
    </div>
  );
}
