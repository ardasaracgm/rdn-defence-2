import type { Product } from "../products";

export const talon: Product = {
  slug: "talon",
  name: "TALON",
  category: "Drone Systems",
  productType: "Tactical Mini Fixed-Wing UAV",

  tagline: "Long-Range Reconnaissance & Surveillance Platform",

  shortDescription:
    "Electric-powered fixed-wing mini UAV for tactical reconnaissance, surveillance, target acquisition, and border security with 50–100 minute endurance and hand-launch capability.",

  description:
    "TALON is a compact electric fixed-wing UAV designed for sustained tactical reconnaissance and surveillance at extended ranges. Hand-launched and belly-landed, it requires no runway infrastructure. Compatible with Pixhawk and Cube autopilot systems, TALON supports autonomous mission planning and doubles as a target UAV for counter-drone detection system testing.",

  overview:
    "TALON is best suited for military units, border security forces, and ISR operators requiring persistent aerial coverage at ranges up to 50 km without runway dependency. Its low radar cross-section and compact 1400 mm wingspan enable discreet deployment in sensitive areas. The modular payload bay supports optical and thermal cameras, while the EPO airframe provides resilience in field recovery scenarios. Available in both 1400 mm and 1718 mm wingspan variants to match mission range and payload requirements.",

  featured: false,

  droneQuickStats: [
    { label: "Wingspan",  value: "1400", unit: "mm"  },
    { label: "Endurance", value: "100",  unit: "min" },
    { label: "Max Range", value: "50",   unit: "km"  },
    { label: "MTOW",      value: "2.5",  unit: "kg"  },
    { label: "Payload",   value: "1000", unit: "g"   },
  ],

  droneMissions: [
    {
      number: "01",
      tag: "RECONNAISSANCE",
      title: "Military ISR Operations",
      description:
        "Sustained intelligence, surveillance, and reconnaissance over extended areas. Autonomous waypoint mission planning with real-time RF telemetry and GNSS navigation.",
    },
    {
      number: "02",
      tag: "BORDER SECURITY",
      title: "Perimeter Monitoring",
      description:
        "Persistent border line coverage with thermal and optical sensors. Detects illegal crossings and activities across large areas during 50–100 minute sorties without refueling stops.",
    },
    {
      number: "03",
      tag: "SYSTEM TESTING",
      title: "Counter-UAS Target UAV",
      description:
        "Serves as a calibration and test target for UAV detection and jamming systems. Low RCS signature makes it an effective simulation target for counter-drone evaluation exercises.",
    },
  ],

  droneFlightParams: [
    { name: "Wingspan",          value: "1400", unit: "mm",  fillPercent: 50 },
    { name: "Flight Endurance",  value: "50–100", unit: "min", fillPercent: 83 },
    { name: "Operational Range", value: "5–50", unit: "km",  fillPercent: 50 },
    { name: "MTOW",              value: "2.5",  unit: "kg",  fillPercent: 10 },
    { name: "Payload",           value: "500–1000", unit: "g", fillPercent: 25 },
  ],

  dronePayloads: [
    {
      capacity: "1 KG",
      unit: "OPTICAL PAYLOAD",
      name: "High-Resolution Camera",
      description:
        "High-resolution imaging system for daytime reconnaissance and mapping. Gimballed payload option for stabilized video capture during autonomous flight.",
    },
    {
      capacity: "IR",
      unit: "OPTIONAL THERMAL",
      name: "Thermal Imaging System",
      description:
        "Optional thermal camera for night operations, border surveillance, and search-and-rescue missions in low-visibility conditions.",
    },
    {
      capacity: "TEST",
      unit: "TARGET UAV CONFIG",
      name: "Counter-UAS Test Payload",
      description:
        "Configurable with extra modules or test loads for counter-drone detection system calibration and evaluation exercises.",
    },
  ],

  features: [
    {
      title: "No Runway Required",
      description: "Hand-launched and belly-landed, TALON deploys from any terrain without ground support infrastructure.",
    },
    {
      title: "Low Radar Cross-Section",
      description: "Compact EPO airframe with minimal RCS enables discreet operations in sensitive and contested environments.",
    },
    {
      title: "50–100 Minute Endurance",
      description: "Extended sortie duration covers large reconnaissance areas on a single battery charge.",
    },
    {
      title: "Autonomous Mission Planning",
      description: "Pixhawk and Cube autopilot compatible. Full waypoint mission planning with RF/telemetry and integrated GNSS.",
    },
    {
      title: "Modular Payload Bay",
      description: "Swappable payload architecture supports optical, thermal, and test payload configurations without airframe changes.",
    },
    {
      title: "Civil & Military Compatible",
      description: "Certification-ready design supports both civilian surveillance and military ISR operational requirements.",
    },
  ],

  useCases: [
    "Military ISR and reconnaissance",
    "Border security monitoring",
    "Search and rescue support",
    "Agricultural survey and mapping",
    "Power line inspection",
    "Counter-UAS system testing",
  ],

  specifications: [
    { label: "Model",              value: "TALON" },
    { label: "Class",              value: "Electric-powered fixed-wing mini UAV" },
    { label: "Wingspan",           value: "1400 mm (1718 mm variant available)" },
    { label: "MTOW",               value: "2 – 2.5 kg" },
    { label: "Payload",            value: "500 – 1000 g" },
    { label: "Engine Type",        value: "Electric brushless" },
    { label: "Body Material",      value: "EPO" },
    { label: "Range",              value: "5 km / 10 km / 30 km / 50 km options" },
    { label: "Endurance",          value: "50 – 100 minutes" },
    { label: "Takeoff / Landing",  value: "Hand launch / Body landing" },
    { label: "Autopilot",          value: "Pixhawk, Cube" },
    { label: "Camera",             value: "High resolution (thermal optional)" },
    { label: "Communication",      value: "RF / Telemetry / Integrated GNSS" },
    { label: "Mission Types",      value: "Reconnaissance, border security, counter-UAS testing" },
  ],

  media: {
    hero: "/products/talon/images/hero.webp",
    heroAlt: "TALON Tactical Mini Fixed-Wing UAV in flight",
    gallery: [
      { src: "/products/talon/images/hand-launch.webp",    alt: "TALON hand launch operation" },
      { src: "/products/talon/images/isr-flight.webp",     alt: "TALON ISR mission flight" },
      { src: "/products/talon/images/belly-landing.webp",  alt: "TALON belly landing recovery" },
    ],
    videos: [
      { title: "TALON — Mission Overview", file: "/products/talon/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/talon/docs/datasheet.pdf", kind: "pdf" },
      { title: "Use Case Overview",   file: "/products/talon/docs/use-case.pdf",   kind: "pdf" },
    ],
  },

  seo: {
    title: "TALON Tactical Mini Fixed-Wing UAV | RDN Technology",
    description:
      "TALON is an electric fixed-wing mini UAV with 100-minute endurance, 50 km range, and hand-launch capability for ISR, border security, and counter-UAS testing.",
  },
};
