import { ArrowRight } from "lucide-react";

const stages = [
  {
    kicker: "01",
    title: "Sony CMOS",
    body: "Rolling or global shutter, 2–12 MP. Keep the optic you already qualified.",
  },
  {
    kicker: "02",
    title: "FlexWATCH SoC",
    body: "Eyenix or Ambarella IP stack. NDAA-free. ONVIF S / T / M.",
  },
  {
    kicker: "03",
    title: "Hailo-8L",
    body: "13 TOPS, ~1.5 W, multi-model. Quoted and integrated by AiRC.",
  },
  {
    kicker: "04",
    title: "Your VMS",
    body: "Streams and metadata land where operators already work.",
  },
];

export function ArchitectureDiagram() {
  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {stages.map((stage, i) => (
          <div key={stage.title} className="contents">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono text-[11px] tracking-wider text-[var(--brand-highlight)]">
                {stage.kicker}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-white">{stage.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{stage.body}</p>
            </div>
            {i < stages.length - 1 && (
              <div className="hidden items-center justify-center lg:flex" aria-hidden>
                <ArrowRight className="size-4 text-[var(--brand-accent)]" />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-slate-400">
        Inputs: BT1120 · LVDS · YUV — attach existing PTZ blocks and lane optics
        without a mechanical redesign.
      </p>
    </div>
  );
}
