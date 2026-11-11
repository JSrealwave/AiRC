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
    body: "NDAA-free embedded RGB IP modules and ONVIF for perimeter and critical-infrastructure sites. On-device AI is available on select platforms, without a full redesign.",
    href: "/products?use=industrial",
    image: "/solutions/industrial-perimeter.jpg",
    imageAlt: "Fixed security camera on a pole overlooking a fenced electrical substation",
  },
  {
    title: "Warehouse / logistics / light machine-vision",
    body: "Board-level color CMOS IP modules for warehouse, logistics, and light machine-vision cells. Same FlexWATCH path — drop into the mechanical design you already have.",
    href: "/products?use=industrial&form=module",
    image: "/solutions/warehouse-logistics.jpg",
    imageAlt: "Industrial camera aimed at cartons on a warehouse conveyor",
  },
  {
    title: "Robotics, AMRs & mobile platforms",
    body: "Board-level modules for OEMs embedding vision into AMRs and mobile platforms. ONVIF, without a full camera redesign. NPU acceleration is available on select platforms.",
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
    image: "/solutions/industrial-perimeter.jpg",
    imageAlt: "Fixed security camera on a pole overlooking a fenced electrical substation",
  },
  {
    title: "Medical and life-science imaging",
    body: "Medical and life-science imaging systems that need reliable edge inference use the same embedded RGB IP camera modules. AiRC supplies the module and SDK path for the OEM design.",
    href: "/products?use=medical",
    image: "/solutions/medical-imaging.jpg",
    imageAlt: "Compact camera on a laboratory bench aimed at a sample tray",
  },
  {
    title: "Robotics, AMRs & mobile platforms",
    body: "OEMs embedding vision into warehouse robots and mobile platforms use these board-level camera modules without a full mechanical redesign. NPU acceleration is available on select platforms.",
    href: "/products?use=robotics",
    image: "/solutions/robotics-amr.jpg",
    imageAlt: "Compact warehouse mobile robot with a front-mounted camera",
  },
];
