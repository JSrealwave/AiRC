export interface AdjacentUse {
  title: string;
  body: string;
  href: string;
  image?: string;
  imageAlt?: string;
}

/** Homepage row. Lower prominence than the three primary verticals. */
export const homepageAdjacentUses: AdjacentUse[] = [
  {
    title: "Industrial perimeter & critical infrastructure",
    body: "Add Hailo-8L edge AI to existing or new mechanical designs without a full redesign. NDAA-free embedded RGB IP modules, ONVIF, and multi-model inference for perimeter and critical-infrastructure sites.",
    href: "/products?use=industrial",
    image: "/solutions/industrial-perimeter.jpg",
    imageAlt: "Fixed security camera on a pole overlooking a fenced electrical substation",
  },
  {
    title: "Warehouse / logistics / light machine-vision",
    body: "Board-level color CMOS IP modules for warehouse, logistics, and light machine-vision cells. Same FlexWATCH + Hailo-8L path — drop into the mechanical design you already have.",
    href: "/products?use=industrial&form=module",
    image: "/solutions/warehouse-logistics.jpg",
    imageAlt: "Industrial camera aimed at cartons on a warehouse conveyor",
  },
  {
    title: "Robotics, AMRs & mobile platforms",
    body: "Board-level modules for OEMs embedding vision into AMRs and mobile platforms. Hailo-8L multi-model inference and ONVIF, without a full camera redesign.",
    href: "/products?use=robotics",
    image: "/solutions/robotics-amr.jpg",
    imageAlt: "Compact warehouse mobile robot with a front-mounted camera",
  },
];

/** Solutions page notes. Not separate vertical pages. */
export const solutionsAdjacentUses: AdjacentUse[] = [
  {
    title: "Perimeter and critical infrastructure",
    body: "Perimeter and critical-infrastructure security programs specify these NDAA-free, ONVIF modules when they need on-device inference inside existing housings.",
    href: "/products?use=industrial",
  },
  {
    title: "Medical and life-science imaging",
    body: "Medical and life-science imaging systems that need reliable edge inference use the same embedded RGB IP camera modules. AiRC supplies the module and SDK path for the OEM design.",
    href: "/products?use=medical",
  },
  {
    title: "Robotics, AMRs & mobile platforms",
    body: "OEMs embedding vision into warehouse robots and mobile platforms use these board-level AI camera modules to add Hailo-8L multi-model inference without a full mechanical redesign.",
    href: "/products?use=robotics",
  },
];
