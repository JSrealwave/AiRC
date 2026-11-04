export type ProductTag =
  | "Tolling / ANPR"
  | "PTZ Enhancement"
  | "Multi-Sensor"
  | "ITS / Roadway"
  | "Low-Light"
  | "Global Shutter"
  | "Industrial"
  | "Robotics"
  | "Medical-adjacent";

/** Secondary specification tags. Primary toll / ITS / PTZ tags stay first on each SKU. */
export const adjacentMarketTags = [
  "Industrial",
  "Robotics",
  "Medical-adjacent",
] as const satisfies readonly ProductTag[];

export type AdjacentMarketTag = (typeof adjacentMarketTags)[number];

export function isAdjacentMarketTag(tag: ProductTag): tag is AdjacentMarketTag {
  return (adjacentMarketTags as readonly string[]).includes(tag);
}

export const applicationFilters = [
  { value: "toll", label: "Toll / ANPR", tag: "Tolling / ANPR", group: "primary" },
  { value: "its", label: "ITS / Roadway", tag: "ITS / Roadway", group: "primary" },
  { value: "ptz", label: "PTZ", tag: "PTZ Enhancement", group: "primary" },
  { value: "industrial", label: "Industrial", tag: "Industrial", group: "adjacent" },
  { value: "robotics", label: "Robotics", tag: "Robotics", group: "adjacent" },
  { value: "medical", label: "Medical-adjacent", tag: "Medical-adjacent", group: "adjacent" },
] as const;

export type ApplicationFilter = (typeof applicationFilters)[number]["value"];

export function tagForApplication(value: string): ProductTag | undefined {
  return applicationFilters.find((filter) => filter.value === value)?.tag;
}

export type ResolutionClass = "2MP" | "5MP" | "8MP" | "12MP";
export type ShutterType = "rolling" | "global";
export type FormClass = "module" | "finished";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  title: string;
  shortDescription: string;
  description: string;
  formFactor: string;
  formClass: FormClass;
  resolution: string;
  resolutionClass: ResolutionClass;
  shutter: ShutterType;
  hailo: boolean;
  ndaaCompliant: boolean;
  onvif: string[];
  idealFor: ProductTag[];
  highlights: string[];
  specs: ProductSpec[];
  sku: string;
  image: string;
  imageAlt: string;
  manufacturerSku: string;
  manufacturerUrl: string;
  datasheetHref: string;
  featured?: boolean;
}

export const FAMILY_DATASHEET = "/resources/airc-flexwatch-edge-ai-datasheet.pdf";

export const products: Product[] = [
  {
    slug: "fwc-ee1-307",
    name: "FWC-EE1-307",
    title: "2MP rolling-shutter IP module",
    sku: "FWC-EE1-307",
    manufacturerSku: "FWC-EE1-307",
    manufacturerUrl: "https://flexwatch.com/ipmodule/FWC-EE1-307",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/ee1_307_d303e0f67d.png",
    imageAlt:
      "Seyeon FlexWATCH FWC-EE1-307 2MP IP camera module with CS-mount lens",
    shortDescription:
      "Single-board 2MP rolling-shutter module for compact ITS and lane integration.",
    description:
      "Seyeon’s FWC-EE1-307 is a 2MP rolling-shutter IP camera module on a single board (Eyenix SoC, ~1/2.8\" CMOS). AiRC quotes it with Hailo-8L integration for operators who want on-device models without redesigning lane optics.",
    formFactor: "Single-board IP module",
    formClass: "module",
    resolution: "2 MP",
    resolutionClass: "2MP",
    shutter: "rolling",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T"],
    idealFor: [
      "Tolling / ANPR",
      "ITS / Roadway",
      "Low-Light",
      "Industrial",
      "Robotics",
      "Medical-adjacent",
    ],
    highlights: [
      "Official Seyeon 2MP rolling-shutter module (1-board)",
      "Eyenix SoC — NDAA-free supply path",
      "Hailo-8L integration quoted through AiRC",
    ],
    specs: [
      { label: "Seyeon model", value: "FWC-EE1-307" },
      { label: "Resolution", value: "2 MP (1920×1080)" },
      { label: "Shutter", value: "Rolling" },
      { label: "SoC", value: "Eyenix (NDAA-free)" },
      { label: "Sensor", value: "CMOS, ~1/2.8\"" },
      { label: "Form", value: "Single-board IP module" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, Profile T" },
    ],
  },
  {
    slug: "fwc-ex2-0234",
    name: "FWC-EX2-0234",
    title: "2MP global-shutter IP module",
    sku: "FWC-EX2-0234",
    manufacturerSku: "FWC-EX2-0234",
    manufacturerUrl: "https://flexwatch.com/ipmodule/FWC-EX2-0234",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/FWC_EX_2_0234_fda1c424b6.png",
    imageAlt: "Seyeon FlexWATCH FWC-EX2-0234 2MP global-shutter IP camera module",
    shortDescription:
      "2MP global-shutter module for high-speed LPR/ANPR and free-flow lanes.",
    description:
      "FWC-EX2-0234 is Seyeon’s 2MP global-shutter IP camera module (Eyenix). Global shutter is the right starting point for highway-speed plate capture where rolling-shutter smear is unacceptable. AiRC adds Hailo-8L for multi-model on-device inference.",
    formFactor: "IP camera module",
    formClass: "module",
    resolution: "2 MP",
    resolutionClass: "2MP",
    shutter: "global",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T"],
    idealFor: [
      "Tolling / ANPR",
      "ITS / Roadway",
      "Global Shutter",
      "Industrial",
      "Robotics",
      "Medical-adjacent",
    ],
    featured: true,
    highlights: [
      "Global shutter at 2MP for high-speed lanes",
      "Eyenix SoC, NDAA-free",
      "Pair with FW7300 finished cameras when you need an enclosure",
    ],
    specs: [
      { label: "Seyeon model", value: "FWC-EX2-0234" },
      { label: "Resolution", value: "2 MP (1920×1080)" },
      { label: "Shutter", value: "Global" },
      { label: "SoC", value: "Eyenix (NDAA-free)" },
      { label: "Sensor", value: "CMOS" },
      { label: "Form", value: "IP camera module" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, Profile T" },
    ],
  },
  {
    slug: "fwc-ex1-567",
    name: "FWC-EX1-567",
    title: "5MP global-shutter IP module",
    sku: "FWC-EX1-567",
    manufacturerSku: "FWC-EX1-567",
    manufacturerUrl: "https://flexwatch.com/ipmodule/FWC-EX1-567",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/ex1_567_c73505670a.png",
    imageAlt: "Seyeon FlexWATCH FWC-EX1-567 5MP global-shutter IP camera module",
    shortDescription:
      "5MP global-shutter module for multi-lane classification and ANPR.",
    description:
      "FWC-EX1-567 is a 5MP global-shutter IP camera module on Eyenix. Use it when 2MP is not enough field of view for classification plus plate, but you still need a global shutter for motion.",
    formFactor: "IP camera module",
    formClass: "module",
    resolution: "5 MP",
    resolutionClass: "5MP",
    shutter: "global",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T"],
    idealFor: ["Tolling / ANPR", "ITS / Roadway", "Global Shutter", "Medical-adjacent"],
    highlights: [
      "5MP global shutter for wider lanes",
      "Eyenix + Hailo-8L integration path",
      "Same FlexWATCH SDK footprint as 2MP / 8MP siblings",
    ],
    specs: [
      { label: "Seyeon model", value: "FWC-EX1-567" },
      { label: "Resolution", value: "5 MP" },
      { label: "Shutter", value: "Global" },
      { label: "SoC", value: "Eyenix (NDAA-free)" },
      { label: "Sensor", value: "CMOS" },
      { label: "Form", value: "IP camera module" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, Profile T" },
    ],
  },
  {
    slug: "fwc-ex1-565",
    name: "FWC-EX1-565",
    title: "8MP global-shutter IP module",
    sku: "FWC-EX1-565",
    manufacturerSku: "FWC-EX1-565",
    manufacturerUrl: "https://flexwatch.com/ipmodule/FWC-EX1-565",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/ex1_565_493e137c4c.png",
    imageAlt: "Seyeon FlexWATCH FWC-EX1-565 8MP global-shutter IP camera module",
    shortDescription:
      "8MP global-shutter module for wide-field highway and plaza coverage.",
    description:
      "FWC-EX1-565 is Seyeon’s 8MP global-shutter IP camera module. It is the embeddable core behind high-detail roadway analytics—more pixels for multi-lane plates and classification without rolling-shutter artifact.",
    formFactor: "IP camera module",
    formClass: "module",
    resolution: "8 MP",
    resolutionClass: "8MP",
    shutter: "global",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["Tolling / ANPR", "ITS / Roadway", "Global Shutter", "Medical-adjacent"],
    highlights: [
      "8MP global shutter for plaza-scale FOV",
      "Metadata-ready ONVIF Profile M path",
      "Finished-camera sibling: FW7300-GKN",
    ],
    specs: [
      { label: "Seyeon model", value: "FWC-EX1-565" },
      { label: "Resolution", value: "8 MP (3840×2160 class)" },
      { label: "Shutter", value: "Global" },
      { label: "SoC", value: "Eyenix (NDAA-free)" },
      { label: "Sensor", value: "CMOS" },
      { label: "Form", value: "IP camera module" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, T, M" },
    ],
  },
  {
    slug: "fwc-ex1-412",
    name: "FWC-EX1-412",
    title: "12MP rolling-shutter IP module",
    sku: "FWC-EX1-412",
    manufacturerSku: "FWC-EX1-412",
    manufacturerUrl: "https://flexwatch.com/ipmodule/FWC-EX1-412",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/fwc_ex2_2a6c467886.png",
    imageAlt: "Seyeon FlexWATCH FWC-EX1-412 12MP rolling-shutter IP camera module",
    shortDescription:
      "12MP rolling-shutter module for intersection-scale ITS and multi-sensor gateways.",
    description:
      "FWC-EX1-412 is the highest-resolution module in this launch catalog: 12MP rolling shutter on Eyenix. Use it for wide-area ITS, intersection overview, and multi-sensor towers where pixel density matters more than global-shutter freeze-frame.",
    formFactor: "IP camera module",
    formClass: "module",
    resolution: "12 MP",
    resolutionClass: "12MP",
    shutter: "rolling",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["Multi-Sensor", "ITS / Roadway", "PTZ Enhancement", "Industrial"],
    highlights: [
      "12MP for intersection and corridor overview",
      "Pairs with LVDS boards for multi-sensor builds",
      "Hailo-8L for multi-model analytics at the edge",
    ],
    specs: [
      { label: "Seyeon model", value: "FWC-EX1-412" },
      { label: "Resolution", value: "12 MP" },
      { label: "Shutter", value: "Rolling" },
      { label: "SoC", value: "Eyenix (NDAA-free)" },
      { label: "Sensor", value: "CMOS" },
      { label: "Form", value: "IP camera module" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, T, M" },
    ],
  },
  {
    slug: "fwm-ex1-l2m",
    name: "FWM-EX1-L2M",
    title: "2MP / 4MP LVDS IP board",
    sku: "FWM-EX1-L2M",
    manufacturerSku: "FWM-EX1-L2M",
    manufacturerUrl: "https://flexwatch.com/ipmodule/FWM-EX1-L2M",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/ex1_l2m_05324560ce.png",
    imageAlt: "Seyeon FlexWATCH FWM-EX1-L2M LVDS IP interface board",
    shortDescription:
      "LVDS IP board for embedding FlexWATCH intelligence into existing PTZ and block cameras.",
    description:
      "FWM-EX1-L2M is a 2MP/4MP LVDS IP board. It is the integration piece for PTZ OEMs: keep your mechanics and optics, attach FlexWATCH over LVDS, and add Hailo-8L through AiRC instead of spinning a new camera program.",
    formFactor: "LVDS IP board",
    formClass: "module",
    resolution: "2 / 4 MP",
    resolutionClass: "2MP",
    shutter: "rolling",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["PTZ Enhancement", "Multi-Sensor", "Industrial", "Robotics"],
    featured: true,
    highlights: [
      "LVDS input for existing PTZ / block cameras",
      "2MP and 4MP interface support",
      "The “keep your mechanics” path for PTZ manufacturers",
    ],
    specs: [
      { label: "Seyeon model", value: "FWM-EX1-L2M" },
      { label: "Resolution", value: "2 MP / 4 MP (interface)" },
      { label: "Interface", value: "LVDS" },
      { label: "SoC", value: "Eyenix (NDAA-free)" },
      { label: "Form", value: "LVDS IP board" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, T, M" },
      { label: "Primary use", value: "PTZ and block-camera embed" },
    ],
  },
  {
    slug: "fw1172-a3t55",
    name: "FW1172-A3T55",
    title: "5MP Ambarella IP mainboard",
    sku: "FW1172-A3T55",
    manufacturerSku: "FW1172-A3T55",
    manufacturerUrl: "https://flexwatch.com/ipmodule/FW1172-A3T55",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/a3t_287b4cb14b.png",
    imageAlt:
      "Seyeon FlexWATCH FW1172-A3T 5MP Ambarella IP mainboard",
    shortDescription:
      "5MP Ambarella IP mainboard for PTZ cores and custom camera programs.",
    description:
      "FW1172-A3T55 is a 5MP IP mainboard on Ambarella (visible as FW1172-A3T on the PCB). It is the compute core for OEMs building a PTZ or custom enclosure who need a qualified NDAA-free SoC rather than a full module-with-lens.",
    formFactor: "IP mainboard",
    formClass: "module",
    resolution: "5 MP",
    resolutionClass: "5MP",
    shutter: "rolling",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["PTZ Enhancement", "Multi-Sensor", "Robotics"],
    highlights: [
      "Ambarella IP mainboard — NDAA-free path",
      "5MP class for PTZ and custom housings",
      "Hailo-8L attach via AiRC without a full mechanical redesign",
    ],
    specs: [
      { label: "Seyeon model", value: "FW1172-A3T55" },
      { label: "Resolution", value: "5 MP" },
      { label: "SoC", value: "Ambarella (NDAA-free)" },
      { label: "Form", value: "IP mainboard" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, T, M" },
      { label: "Primary use", value: "PTZ core / custom enclosure" },
    ],
  },
  {
    slug: "fwm-ex1-h2m",
    name: "FWM-EX1-H2M",
    title: "8MP LVDS IP board",
    sku: "FWM-EX1-H2M",
    manufacturerSku: "FWM-EX1-H2M",
    manufacturerUrl: "https://flexwatch.com/ipmodule/FWM-EX1-H2M",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/ex1_h2m_50895ed6de.png",
    imageAlt: "Seyeon FlexWATCH FWM-EX1-H2M 8MP LVDS IP board",
    shortDescription:
      "8MP LVDS IP board for high-resolution PTZ and multi-sensor embeds.",
    description:
      "FWM-EX1-H2M is the 8MP LVDS sibling of FWM-EX1-L2M. Use it when the host PTZ or sensor block is 4K-class and you still want FlexWATCH IP plus Hailo-8L without replacing the optical block.",
    formFactor: "LVDS IP board",
    formClass: "module",
    resolution: "8 MP",
    resolutionClass: "8MP",
    shutter: "rolling",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["PTZ Enhancement", "ITS / Roadway", "Multi-Sensor", "Robotics"],
    highlights: [
      "8MP LVDS interface for 4K-class blocks",
      "PTZ OEM embed without new mechanics",
      "Same FlexWATCH software path as L2M",
    ],
    specs: [
      { label: "Seyeon model", value: "FWM-EX1-H2M" },
      { label: "Resolution", value: "8 MP" },
      { label: "Interface", value: "LVDS" },
      { label: "SoC", value: "Eyenix (NDAA-free)" },
      { label: "Form", value: "LVDS IP board" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, T, M" },
    ],
  },
  {
    slug: "fw7300-gkn",
    name: "FW7300-GKN",
    title: "4K global-shutter box camera — LPR / ANPR",
    sku: "FW7300-GKN",
    manufacturerSku: "FW7300-GKN",
    manufacturerUrl: "https://flexwatch.com/product",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/fw7300_103a825ea1.png",
    imageAlt:
      "Seyeon FlexWATCH FW7300 4K global-shutter box camera for LPR and ANPR",
    shortDescription:
      "Finished 4K global-shutter box camera purpose-built for LPR and ANPR lanes.",
    description:
      "FW7300-GKN is Seyeon’s 4K (8MP-class) global-shutter box camera, catalogued for LPR and ANPR. It is the finished-camera answer when an integrator needs a roadway enclosure, C-mount optics, and a global shutter—not a bare module. AiRC quotes Hailo-8L on-device models for classification, tamper, and plate workflows.",
    formFactor: "Box / roadway enclosure",
    formClass: "finished",
    resolution: "8 MP / 4K",
    resolutionClass: "8MP",
    shutter: "global",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["Tolling / ANPR", "ITS / Roadway", "Global Shutter"],
    featured: true,
    highlights: [
      "Official Seyeon LPR/ANPR 4K global-shutter box",
      "C-mount style optics for lane-specific lenses",
      "Hailo-8L multi-model path via AiRC",
    ],
    specs: [
      { label: "Seyeon model", value: "FW7300-GKN" },
      { label: "Resolution", value: "4K / 8 MP class" },
      { label: "Shutter", value: "Global" },
      { label: "Enclosure", value: "Box camera (roadway / plaza)" },
      { label: "Catalog use", value: "LPR, ANPR" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, T, M" },
      { label: "NDAA", value: "Compliant SoC supply chain" },
    ],
  },
  {
    slug: "fw7300-gpn",
    name: "FW7300-GPN",
    title: "5MP global-shutter box camera — LPR / ANPR",
    sku: "FW7300-GPN",
    manufacturerSku: "FW7300-GPN",
    manufacturerUrl: "https://flexwatch.com/product",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/fw7300_103a825ea1.png",
    imageAlt:
      "Seyeon FlexWATCH FW7300 5MP global-shutter box camera for LPR and ANPR",
    shortDescription:
      "5MP global-shutter box camera in the FW7300 family for LPR and ANPR.",
    description:
      "FW7300-GPN is the 5MP global-shutter member of the FW7300 box family, also catalogued for LPR and ANPR. Choose it when 4K is more pixels than the lane needs, or when you want a matched pair (overview + plate) with the GKN.",
    formFactor: "Box / roadway enclosure",
    formClass: "finished",
    resolution: "5 MP",
    resolutionClass: "5MP",
    shutter: "global",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["Tolling / ANPR", "ITS / Roadway", "Global Shutter"],
    highlights: [
      "Same FW7300 enclosure as the 4K GKN",
      "5MP global shutter for dedicated plate cameras",
      "Hailo-8L via AiRC for on-device plate + class models",
    ],
    specs: [
      { label: "Seyeon model", value: "FW7300-GPN" },
      { label: "Resolution", value: "5 MP" },
      { label: "Shutter", value: "Global" },
      { label: "Enclosure", value: "Box camera (roadway / plaza)" },
      { label: "Catalog use", value: "LPR, ANPR" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, T, M" },
    ],
  },
  {
    slug: "fw7511-pem",
    name: "FW7511-PEM",
    title: "5MP autofocus vandal dome",
    sku: "FW7511-PEM",
    manufacturerSku: "FW7511-PEM",
    manufacturerUrl: "https://flexwatch.com/product",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/fw7511_8c5dc74719.png",
    imageAlt: "Seyeon FlexWATCH FW7511 5MP autofocus vandal-resistant dome",
    shortDescription:
      "Finished 5MP autofocus vandal-resistant dome for campus and ITS adjunct sites.",
    description:
      "FW7511-PEM is a 5MP autofocus vandal-resistant dome. It is the finished camera for plazas, gantry undersides, and facility perimeters where a module is the wrong form factor. Private-label options are available through AiRC.",
    formFactor: "Vandal-resistant dome",
    formClass: "finished",
    resolution: "5 MP",
    resolutionClass: "5MP",
    shutter: "rolling",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T"],
    idealFor: ["ITS / Roadway", "Low-Light", "PTZ Enhancement", "Industrial"],
    highlights: [
      "Finished dome — faster time-to-field",
      "5MP autofocus, vandal-resistant housing",
      "AiRC branding / private-label available",
    ],
    specs: [
      { label: "Seyeon model", value: "FW7511-PEM" },
      { label: "Resolution", value: "5 MP" },
      { label: "Lens", value: "Autofocus" },
      { label: "Enclosure", value: "Vandal-resistant dome" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, Profile T" },
      { label: "Branding", value: "AiRC private-label available" },
    ],
  },
  {
    slug: "fw7904-pxm",
    name: "FW7904-PXM",
    title: "5MP PTZ bullet camera",
    sku: "FW7904-PXM",
    manufacturerSku: "FW7904-PXM",
    manufacturerUrl: "https://flexwatch.com/product",
    datasheetHref: FAMILY_DATASHEET,
    image: "/products/flexwatch/bulletptz_3b96048758.png",
    imageAlt: "Seyeon FlexWATCH FW7904 5MP PTZ bullet IP camera",
    shortDescription:
      "Finished 5MP PTZ bullet for corridor tracking and OEM evaluation.",
    description:
      "FW7904-PXM is a 5MP PTZ bullet IP camera. For PTZ manufacturers it is a reference finished unit; for ITS integrators it is a deployable tracker on corridors and plazas. Pair with FWM-EX1-L2M / FW1172-A3T55 when the goal is to embed the same intelligence in your own pan-tilt block.",
    formFactor: "PTZ bullet",
    formClass: "finished",
    resolution: "5 MP",
    resolutionClass: "5MP",
    shutter: "rolling",
    hailo: true,
    ndaaCompliant: true,
    onvif: ["Profile S", "Profile T", "Profile M"],
    idealFor: ["PTZ Enhancement", "ITS / Roadway"],
    highlights: [
      "Finished 5MP PTZ bullet",
      "Reference unit for PTZ OEM conversations",
      "Embed path via LVDS boards and A3T mainboard",
    ],
    specs: [
      { label: "Seyeon model", value: "FW7904-PXM" },
      { label: "Resolution", value: "5 MP" },
      { label: "Form", value: "PTZ bullet IP camera" },
      { label: "AI path", value: "Hailo-8L (13 TOPS, ~1.5W) via AiRC" },
      { label: "ONVIF", value: "Profile S, T, M" },
      { label: "Related embed", value: "FWM-EX1-L2M, FW1172-A3T55" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function filterProducts(
  list: Product[],
  filters: {
    resolution?: ResolutionClass | "all";
    shutter?: ShutterType | "all";
    form?: FormClass | "all";
    use?: ApplicationFilter | "all";
  },
): Product[] {
  const useTag = filters.use && filters.use !== "all" ? tagForApplication(filters.use) : undefined;

  return list.filter((p) => {
    if (filters.resolution && filters.resolution !== "all" && p.resolutionClass !== filters.resolution) {
      return false;
    }
    if (filters.shutter && filters.shutter !== "all" && p.shutter !== filters.shutter) {
      return false;
    }
    if (filters.form && filters.form !== "all" && p.formClass !== filters.form) {
      return false;
    }
    if (useTag && !p.idealFor.includes(useTag)) {
      return false;
    }
    return true;
  });
}
