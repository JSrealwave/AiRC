export type ProductTag =
  | "Tolling / ANPR"
  | "PTZ Enhancement"
  | "Multi-Sensor"
  | "ITS / Roadway"
  | "Low-Light"
  | "Global Shutter";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  formFactor: string;
  resolution: string;
  hailo: boolean;
  ndaaCompliant: boolean;
  onvif: string[];
  idealFor: ProductTag[];
  highlights: string[];
  specs: ProductSpec[];
  sku: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "flexwatch-h8l-2mp-module",
    name: "FlexWATCH H8L 2MP AI Module",
    sku: "AIR-FW-H8L-2MP",
    shortDescription:
      "Compact Hailo-8L module for LPR/ANPR and toll lane integration with BT1120/LVDS inputs.",
    description:
      "A deployment-proven 2MP embedded module with Hailo-8L acceleration (13 TOPS, ~1.5W). Designed for toll operators and ITS integrators who need multi-model on-device inference without replacing existing lane optics.",
    formFactor: "Compact board module",
    resolution: "2 MP",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T"],
    idealFor: ["Tolling / ANPR", "ITS / Roadway", "Low-Light"],
    featured: true,
    highlights: [
      "Hailo-8L: 13 TOPS, multi-model, industrial temp",
      "FlexWATCH Open AI SDK — 5-step proprietary model deployment",
      "BT1120 / LVDS / YUV flexible video inputs",
    ],
    specs: [
      { label: "Resolution", value: "2 MP (1920×1080)" },
      { label: "AI Accelerator", value: "Hailo-8L (13 TOPS, ~1.5W)" },
      { label: "SoC Stack", value: "Eyenix + Hailo (NDAA-free)" },
      { label: "Sensor Options", value: "Sony rolling shutter (IMX family)" },
      { label: "Video Inputs", value: "BT1120, LVDS, YUV" },
      { label: "ONVIF", value: "Profile S, Profile T" },
      { label: "Operating Temp", value: "Industrial (-40°C to +70°C class)" },
      { label: "SDK", value: "FlexWATCH Open AI SDK" },
    ],
  },
  {
    slug: "flexwatch-h8l-5mp-ptz-core",
    name: "FlexWATCH H8L 5MP PTZ Core",
    sku: "AIR-FW-H8L-5MP-PTZ",
    shortDescription:
      "5MP edge AI core for PTZ manufacturers embedding intelligence into existing pan-tilt blocks.",
    description:
      "Purpose-built for PTZ camera OEMs adding behavior analytics, improved detection, and reduced false alarms. Integrates with existing PTZ mechanics via flexible digital video inputs.",
    formFactor: "PTZ integration core",
    resolution: "5 MP",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["PTZ Enhancement", "Multi-Sensor"],
    featured: true,
    highlights: [
      "Embed AI without full PTZ redesign",
      "ONVIF Profile M for metadata-rich analytics",
      "20+ compatible Lego-style mounting options",
    ],
    specs: [
      { label: "Resolution", value: "5 MP (2592×1944)" },
      { label: "AI Accelerator", value: "Hailo-8L (13 TOPS, ~1.5W)" },
      { label: "SoC Stack", value: "Ambarella + Hailo (NDAA-free)" },
      { label: "Sensor Options", value: "Sony IMX rolling + global shutter" },
      { label: "Video Inputs", value: "BT1120, LVDS, YUV" },
      { label: "ONVIF", value: "Profile S, T, M" },
      { label: "Form Factors", value: "Lego-style compact + PTZ core" },
      { label: "SDK", value: "FlexWATCH Open AI SDK" },
    ],
  },
  {
    slug: "flexwatch-8mp-roadway",
    name: "FlexWATCH 8MP Roadway Camera",
    sku: "AIR-FW-8MP-RW",
    shortDescription:
      "Finished bullet-style roadway camera for classification, tamper detection, and multi-lane coverage.",
    description:
      "A finished edge AI camera for toll plazas, free-flow ETC, and smart corridor deployments. Higher resolution supports vehicle classification and wide-field ANPR at highway speeds.",
    formFactor: "Bullet / roadway enclosure",
    resolution: "8 MP",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["Tolling / ANPR", "ITS / Roadway", "Global Shutter"],
    featured: true,
    highlights: [
      "8 MP Sony global shutter options for high-speed lanes",
      "Multi-model inference on Hailo-8L",
      "ONVIF-compliant for VMS integration",
    ],
    specs: [
      { label: "Resolution", value: "8 MP (3840×2160)" },
      { label: "AI Accelerator", value: "Hailo-8L (13 TOPS, ~1.5W)" },
      { label: "Enclosure", value: "IP66 bullet / roadway" },
      { label: "Sensor Options", value: "Sony global shutter (high-speed ANPR)" },
      { label: "ONVIF", value: "Profile S, T, M" },
      { label: "Use Cases", value: "ETC, classification, tamper detection" },
      { label: "NDAA", value: "Compliant SoC supply chain" },
      { label: "SDK", value: "FlexWATCH Open AI SDK" },
    ],
  },
  {
    slug: "flexwatch-12mp-multi-sensor",
    name: "FlexWATCH 12MP Multi-Sensor Module",
    sku: "AIR-FW-12MP-MS",
    shortDescription:
      "12MP module for multi-sensor gateways and high-detail ITS analytics at intersection scale.",
    description:
      "Maximum resolution in the FlexWATCH lineup for integrators building multi-sensor platforms, smart city corridors, or high-detail PTZ enhancements with thermal/LRF fusion paths.",
    formFactor: "Multi-sensor gateway module",
    resolution: "12 MP",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["Multi-Sensor", "ITS / Roadway", "PTZ Enhancement"],
    highlights: [
      "12 MP for wide-area ITS and intersection analytics",
      "Thermal / auxiliary sensor input via LVDS/YUV",
      "Industrial-grade Hailo-8L multi-model pipeline",
    ],
    specs: [
      { label: "Resolution", value: "12 MP (4000×3000)" },
      { label: "AI Accelerator", value: "Hailo-8L (13 TOPS, ~1.5W)" },
      { label: "SoC Stack", value: "Ambarella + Hailo (NDAA-free)" },
      { label: "Sensor Options", value: "Sony rolling + global shutter" },
      { label: "Video Inputs", value: "BT1120, LVDS, YUV (multi-source)" },
      { label: "ONVIF", value: "Profile S, T, M" },
      { label: "Ideal Deployments", value: "Intersections, multi-sensor towers" },
      { label: "SDK", value: "FlexWATCH Open AI SDK" },
    ],
  },
  {
    slug: "flexwatch-2mp-standard",
    name: "FlexWATCH 2MP Standard Module",
    sku: "AIR-FW-2MP-STD",
    shortDescription:
      "Cost-optimized 2MP module without Hailo for VMS-centric pipelines and staged AI upgrades.",
    description:
      "Entry module for integrators standardizing on FlexWATCH hardware today with a path to Hailo-8L variants. Ideal for ONVIF-compliant deployments where edge AI is phased in.",
    formFactor: "Compact board module",
    resolution: "2 MP",
    hailo: false,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T"],
    idealFor: ["ITS / Roadway", "PTZ Enhancement"],
    highlights: [
      "NDAA-free Eyenix SoC",
      "Upgrade path to Hailo-8L SKU",
      "Same FlexWATCH SDK and integration footprint",
    ],
    specs: [
      { label: "Resolution", value: "2 MP (1920×1080)" },
      { label: "AI Accelerator", value: "None (VMS / host inference)" },
      { label: "SoC Stack", value: "Eyenix (NDAA-free)" },
      { label: "Video Inputs", value: "BT1120, LVDS, YUV" },
      { label: "ONVIF", value: "Profile S, Profile T" },
      { label: "Upgrade Path", value: "H8L 2MP module (pin-compatible family)" },
      { label: "SDK", value: "FlexWATCH Open AI SDK" },
    ],
  },
  {
    slug: "flexwatch-dome-4mp",
    name: "FlexWATCH 4MP AI Dome",
    sku: "AIR-FW-4MP-DOME",
    shortDescription:
      "Finished dome camera with Hailo-8L for campus, facility, and ITS adjunct deployments.",
    description:
      "A complete dome form factor for integrators needing a turnkey edge AI camera with ONVIF compliance and private-label options through AiRC.",
    formFactor: "Dome enclosure",
    resolution: "4 MP",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T"],
    idealFor: ["ITS / Roadway", "Low-Light", "PTZ Enhancement"],
    highlights: [
      "Finished dome — faster time-to-field",
      "Hailo-8L on-device analytics",
      "Private-label / AiRC branding available",
    ],
    specs: [
      { label: "Resolution", value: "4 MP (2560×1440)" },
      { label: "AI Accelerator", value: "Hailo-8L (13 TOPS, ~1.5W)" },
      { label: "Enclosure", value: "IP66 vandal-resistant dome" },
      { label: "ONVIF", value: "Profile S, Profile T" },
      { label: "NDAA", value: "Compliant SoC supply chain" },
      { label: "Branding", value: "AiRC private-label available" },
      { label: "SDK", value: "FlexWATCH Open AI SDK" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
