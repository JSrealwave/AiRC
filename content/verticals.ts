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
    headline:
      "High-speed LPR/ANPR with dual-exposure, shutter sync, and dynamic ISP control — without replacing the lane stack",
    image: "/solutions/toll-roadway.jpg",
    imageAlt: "Multi-lane toll plaza with overhead cameras for roadway LPR and ANPR",
    summary:
      "Global shutter, dual-exposure streaming, and shutter sync for strobed LPR give toll operators and ETC integrators a practical capture path. AiRC helps add vehicle classification and tamper detection on proven lane hardware for high-speed, harsh outdoor sites.",
    challenges: [
      "Rising false reads and classification errors at highway speeds",
      "Pressure to add AI without multi-year hardware redesigns",
      "NDAA and supply-chain compliance for federal-adjacent deployments",
    ],
    capabilities: [
      "Dual-exposure streaming: independent exposure on the primary and secondary stream from one camera",
      "Frame synchronization across cameras and strobes for LPR/ANPR",
      "ISP profile auto switching on day, night, event, or motion",
      "Sony global shutter for high-speed free-flow ETC",
      "Vehicle classification and tamper detection; NPU acceleration on select platforms",
      "BT1120/LVDS integration with existing lane optics",
    ],
    idealProducts: ["fwc-ex2-0234", "fw7300-gkn", "fwc-ex1-565"],
    targetAccounts: ["PIPS / Neology", "Transcore", "Regional toll authorities"],
  },
  {
    slug: "ptz-manufacturers",
    title: "PTZ Camera Manufacturers",
    headline:
      "Keep your PTZ mechanics. Add global-shutter options, dual-exposure, shutter sync, and dynamic ISP control",
    image: "/solutions/ptz-manufacturers.jpg",
    imageAlt: "Industrial pan-tilt-zoom camera mounted on a roadway pole",
    summary:
      "For OEMs building pan-tilt-zoom platforms, global-shutter options, dual-exposure streaming, shutter sync, and dynamic ISP control sit on flexible video inputs and ONVIF Profile M metadata. Seyeon FlexWATCH is the module partner.",
    challenges: [
      "Customers demanding on-device AI without new mechanical designs",
      "Long R&D cycles to qualify new SoC and sensor stacks",
      "Need for partner-backed SDK and integration support",
    ],
    capabilities: [
      "Global-shutter options for high-speed PTZ, plus dual-exposure, shutter sync, and ISP profile switching",
      "Lego-style compact modules + PTZ integration cores",
      "Flexible BT1120/LVDS/YUV inputs for existing PTZ blocks",
      "FlexWATCH Open AI SDK for proprietary model deployment",
      "ONVIF Profile S/T/M for VMS and PSIM compatibility",
      "NPU acceleration on select platforms; finished cameras preferred when heat is a constraint",
    ],
    idealProducts: ["fwm-ex1-l2m", "fw1172-a3t55", "fw7904-pxm"],
    targetAccounts: ["Cohu", "PTZ OEMs", "Security camera integrators"],
  },
  {
    slug: "its-smart-city",
    title: "ITS & Smart City Integrators",
    headline:
      "Corridor and intersection vision with dual-exposure, shutter sync, and dynamic ISP profiles that follow the scene",
    image: "/solutions/its-smart-city.jpg",
    imageAlt: "Urban intersection with ITS traffic cameras and sensors on a mast arm",
    summary:
      "ITS firms and smart city integrators use global shutter where vehicles are fast, plus dual-exposure streaming, multi-camera shutter sync, and dynamic ISP profiles that follow time of day or an event. Hardware stays NDAA-free and ONVIF-compliant, with industrial temperature ratings.",
    challenges: [
      "Fragmented sensor ecosystems across corridors and intersections",
      "Need for multi-model inference without cloud dependency",
      "Integration with existing VMS and city operations platforms",
    ],
    capabilities: [
      "Dual-exposure streaming, frame synchronization, and ISP profile auto switching",
      "Global shutter where vehicles are fast; rolling shutter when low-light efficiency matters",
      "2 MP – 12 MP modular and finished camera options",
      "Multi-sensor gateway modules with auxiliary input paths",
      "NPU acceleration on select platforms, preferably in a finished camera with a proper heat sink",
      "Standards-based ONVIF for municipal procurement",
    ],
    idealProducts: ["fwc-ex1-412", "fw7300-gkn", "fw7511-pem"],
    targetAccounts: ["Thales", "ITS integrators", "Municipal traffic agencies"],
  },
];

export function getVerticalBySlug(slug: string): VerticalSolution | undefined {
  return verticals.find((v) => v.slug === slug);
}
