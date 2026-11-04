export interface VerticalSolution {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  image: string;
  imageAlt: string;
  challenges: string[];
  capabilities: string[];
  idealProducts: string[];
  targetAccounts: string[];
}

export const verticals: VerticalSolution[] = [
  {
    slug: "toll-roadway",
    title: "Toll Road & Roadway Intelligence",
    headline: "Enhance LPR/ANPR and lane analytics without replacing your entire camera stack",
    image: "/solutions/toll-roadway.jpg",
    imageAlt: "Multi-lane toll plaza with overhead cameras for roadway LPR and ANPR",
    summary:
      "AiRC modules help toll operators and ETC integrators add vehicle classification, tamper detection, and multi-model on-device inference to proven lane hardware—optimized for high-speed capture and harsh outdoor environments.",
    challenges: [
      "Rising false reads and classification errors at highway speeds",
      "Pressure to add AI without multi-year hardware redesigns",
      "NDAA and supply-chain compliance for federal-adjacent deployments",
    ],
    capabilities: [
      "LPR/ANPR enhancement with Hailo-8L multi-model pipelines",
      "Vehicle classification and tamper detection at the edge",
      "BT1120/LVDS integration with existing lane optics",
      "Sony global shutter options for high-speed free-flow ETC",
    ],
    idealProducts: ["fwc-ex2-0234", "fw7300-gkn", "fwc-ex1-565"],
    targetAccounts: ["PIPS / Neology", "Transcore", "Regional toll authorities"],
  },
  {
    slug: "ptz-manufacturers",
    title: "PTZ Camera Manufacturers",
    headline: "Embed advanced edge AI into your PTZ lineup—keep your mechanics, upgrade your intelligence",
    image: "/solutions/ptz-manufacturers.jpg",
    imageAlt: "Industrial pan-tilt-zoom camera mounted on a roadway pole",
    summary:
      "For OEMs building pan-tilt-zoom platforms, FlexWATCH modules provide a credible path to behavior analytics, improved detection, and reduced false alarms via flexible video inputs and ONVIF Profile M metadata.",
    challenges: [
      "Customers demanding on-device AI without new mechanical designs",
      "Long R&D cycles to qualify new SoC and sensor stacks",
      "Need for partner-backed SDK and integration support",
    ],
    capabilities: [
      "Lego-style compact modules + PTZ integration cores",
      "Flexible BT1120/LVDS/YUV inputs for existing PTZ blocks",
      "FlexWATCH Open AI SDK for proprietary model deployment",
      "ONVIF Profile S/T/M for VMS and PSIM compatibility",
    ],
    idealProducts: ["fwm-ex1-l2m", "fw1172-a3t55", "fw7904-pxm"],
    targetAccounts: ["Cohu", "PTZ OEMs", "Security camera integrators"],
  },
  {
    slug: "its-smart-city",
    title: "ITS & Smart City Integrators",
    headline: "Intersection-scale edge AI with modular hardware and deployment-ready SDKs",
    image: "/solutions/its-smart-city.jpg",
    imageAlt: "Urban intersection with ITS traffic cameras and sensors on a mast arm",
    summary:
      "ITS firms and smart city integrators use AiRC to deliver multi-sensor analytics, corridor monitoring, and V2X-adjacent vision workloads on NDAA-free, ONVIF-compliant hardware with industrial temperature ratings.",
    challenges: [
      "Fragmented sensor ecosystems across corridors and intersections",
      "Need for multi-model inference without cloud dependency",
      "Integration with existing VMS and city operations platforms",
    ],
    capabilities: [
      "2 MP – 12 MP modular and finished camera options",
      "Multi-sensor gateway modules with auxiliary input paths",
      "Hailo-8L low-power edge inference (~1.5W)",
      "Standards-based ONVIF for municipal procurement",
    ],
    idealProducts: ["fwc-ex1-412", "fw7300-gkn", "fw7511-pem"],
    targetAccounts: ["Thales", "ITS integrators", "Municipal traffic agencies"],
  },
];

export function getVerticalBySlug(slug: string): VerticalSolution | undefined {
  return verticals.find((v) => v.slug === slug);
}
