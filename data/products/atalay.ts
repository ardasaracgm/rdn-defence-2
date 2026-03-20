import type { Product } from "../products";

export const atalay: Product = {
  slug: "atalay",
  name: "ATALAY",
  category: "Drone Systems",
  productType: "Multi-Purpose Heavy Duty UAV",

  tagline: "Urban Response Platform",

  shortDescription:
    "Heavy-duty multi-mission drone for firefighting, structural inspection, and facade cleaning in high-rise urban environments.",

  description:
    "Engineered for the most demanding urban environments — firefighting, high-rise inspection, and precision cleaning operations where human access is impossible or dangerous.",

  overview:
    "ATALAY is best suited for organizations requiring rapid aerial response capability in urban settings. Its modular payload architecture enables fast mission reconfiguration between firefighting, structural inspection, and facade cleaning operations. The system operates under extreme thermal and environmental conditions, with its carbon high-strength frame and X13 motor system providing the lift capacity needed for 50 kg payloads in sustained 30-minute sorties.",

  featured: true,

  /* ── Drone-specific ── */
  droneQuickStats: [
    { label: "Payload",   value: "50",  unit: "kg"  },
    { label: "Endurance", value: "30",  unit: "min" },
    { label: "Max Range", value: "15",  unit: "km"  },
    { label: "Altitude",  value: "200", unit: "m"   },
    { label: "MTOW",      value: "105", unit: "kg"  },
  ],

  droneMissions: [
    {
      number: "01",
      tag: "FIREFIGHTING",
      title: "High-Rise Fire Suppression",
      description:
        "Delivers water-based balls, dry powder, and automatic tracking extinguishers directly to fire origin in high-rise buildings — floors unreachable by ground units. Operates within minutes of deployment.",
    },
    {
      number: "02",
      tag: "INSPECTION",
      title: "Structural Surveillance",
      description:
        "Equipped with high-resolution smart cameras, ATALAY performs rapid roof and facade inspections on residential blocks, factory areas, and commercial towers — delivering full condition reports remotely.",
    },
    {
      number: "03",
      tag: "CLEANING",
      title: "Facade Pressure Washing",
      description:
        "High-pressure spray gun system for exterior wall cleaning of high-rise structures. Eliminates scaffold risk and covers inaccessible geometries with precision GPS-controlled positioning.",
    },
  ],

  droneFlightParams: [
    { name: "Nominal Payload",   value: "50",         unit: "kg",    fillPercent: 83 },
    { name: "Flight Endurance",  value: "30",         unit: "min",   fillPercent: 50 },
    { name: "Operational Range", value: "15",         unit: "km",    fillPercent: 30 },
    { name: "Max Altitude",      value: "200",        unit: "m",     fillPercent: 20 },
    { name: "Spray Capacity",    value: "15",         unit: "L/min", fillPercent: 60 },
    { name: "Temp. Tolerance",   value: "-10 to +55", unit: "°C",    fillPercent: 75 },
  ],

  dronePayloads: [
    {
      capacity: "50",
      unit: "KG NOMINAL PAYLOAD",
      name: "Water-Based Suppression",
      description:
        "Large-load water-based fire extinguishing balls with fixed-point deployment system. Remote control activation with automatic tracking capability.",
    },
    {
      capacity: "4×",
      unit: "MULTI-CANISTER SYSTEM",
      name: "Dry Powder Deployment",
      description:
        "Dual-canister dry powder fire extinguishers with simultaneous release mechanism. Covers wider suppression area in a single pass.",
    },
    {
      capacity: "HP",
      unit: "HIGH-PRESSURE NOZZLE",
      name: "Facade Cleaning System",
      description:
        "Industrial-grade high-pressure spray gun for exterior surface cleaning. Intelligent positioning with obstacle avoidance for precise wall contact.",
    },
  ],

  /* ── Standard Product fields ── */
  features: [
    {
      title: "50 kg Payload Capacity",
      description:
        "Supports heavy-duty mission equipment including industrial fire extinguishers, cleaning systems, and inspection payloads with full flight stability.",
    },
    {
      title: "Modular Payload System",
      description:
        "Quick-swap payload architecture allows field reconfiguration between firefighting, inspection, and cleaning roles without specialized tooling.",
    },
    {
      title: "High-Resolution Smart Camera",
      description:
        "Integrated recognition camera with smart features for real-time structural inspection of rooftops, facades, and inaccessible zones.",
    },
    {
      title: "Folding Arm Design",
      description:
        "Vertical folding arms with locking mechanism enable fast transport and quick assembly, reducing deployment time in emergency scenarios.",
    },
    {
      title: "High-Power Connector System",
      description:
        "Robust high-power connectors and flexible adaptation modules ensure reliable power delivery under sustained heavy-load operations.",
    },
    {
      title: "Extended Temperature Range",
      description:
        "Operates reliably from -10°C to +55°C, covering fire environments and cold-weather deployments without performance degradation.",
    },
  ],

  useCases: [
    "High-rise building fire suppression",
    "Urban emergency response support",
    "Structural roof and facade inspection",
    "Industrial facility cleaning operations",
    "Post-disaster building assessment",
    "Critical infrastructure maintenance",
  ],

  specifications: [
    { label: "Model",                 value: "ATALAY" },
    { label: "Nominal Payload",       value: "50 kg" },
    { label: "Max Takeoff Weight",    value: "105 kg" },
    { label: "Dimensions",            value: "1725 × 1755 × 1075 mm" },
    { label: "Flight Duration",       value: "30 minutes" },
    { label: "Battery",               value: "18S 68.4V 30,000 mAh Li-ion" },
    { label: "Max Altitude",          value: "≤ 200 m AGL" },
    { label: "Max Range",             value: "≤ 15 km" },
    { label: "Spray Flow Rate",       value: "15 L/min" },
    { label: "Controller",            value: "H12 Pro" },
    { label: "Control Range",         value: "1,200 – 1,500 m" },
    { label: "Operating Temperature", value: "-10°C to +55°C" },
    { label: "Motor System",          value: "X13 Brushless" },
    { label: "Frame Material",        value: "Carbon High-Strength Arm" },
  ],

  media: {
    hero: "/products/atalay/images/hero.webp",
    heroAlt: "ATALAY Multi-Purpose Heavy Duty Drone in flight",
    gallery: [
      { src: "/products/atalay/images/firefighting-operation.webp", alt: "ATALAY firefighting operation" },
      { src: "/products/atalay/images/facade-cleaning.webp",        alt: "ATALAY facade cleaning mission" },
      { src: "/products/atalay/images/inspection-mode.webp",        alt: "ATALAY structural inspection" },
    ],
    videos: [
      { title: "ATALAY — Mission Overview",     file: "/products/atalay/videos/hero.mp4",      isHero: true },
      { title: "ATALAY — Operation Deployment", file: "/products/atalay/videos/operation.mp4"              },
    ],
    documents: [
      { title: "Technical Datasheet",   file: "/products/atalay/docs/datasheet.pdf",  kind: "pdf" },
      { title: "Use Case Overview",     file: "/products/atalay/docs/use-case.pdf",   kind: "pdf" },
    ],
  },

  seo: {
    title: "ATALAY Multi-Purpose Heavy Duty Drone | RDN Technology",
    description:
      "The ATALAY is a 50 kg payload heavy-duty UAV platform engineered for firefighting, structural inspection, and facade cleaning in high-rise urban environments.",
  },
};
