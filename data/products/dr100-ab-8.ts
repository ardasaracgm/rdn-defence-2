import type { Product } from "../products";

export const dr100ab8: Product = {
  slug: "dr100-ab-8",
  name: "DR100-AB-8",
  category: "Detection Systems",
  productType: "Vehicle-Mounted Drone Detection & Jamming System",

  tagline: "360° Mobile Counter-UAV Protection at 150 km/h",

  shortDescription:
    "Vehicle-mounted integrated drone detection and countermeasure system providing 5 km detection range, 3 km jamming coverage, and 360° full-frequency protection at speeds up to 150 km/h.",

  description:
    "DR100-AB-8 is a vehicle-mounted integrated counter-UAV system combining radio detection, protocol decoding, and spectrum scanning with high-power jamming. It protects convoys and mobile assets at speeds up to 150 km/h, detecting unauthorized drones within 5 km and suppressing them within 3 km — all with full 360° horizontal coverage and automatic alert.",

  overview:
    "DR100-AB-8 is designed for convoy protection, mobile command post security, and high-speed operational perimeter defense. Its structured modular design supports rapid deployment across vehicle types, fixed installations, and portable configurations. The blacklist/whitelist function ensures friendly UAVs are not affected while hostile drones are immediately suppressed. Military-grade IP65 protection and operational temperature range of −20°C to +60°C ensure reliable performance in all field conditions.",

  featured: true,

  droneQuickStats: [
    { label: "Detection",  value: "5",   unit: "km"    },
    { label: "Jamming",    value: "3",   unit: "km"    },
    { label: "Coverage",   value: "360°",unit: ""      },
    { label: "Max Speed",  value: "150", unit: "km/h"  },
    { label: "Response",   value: "≤3",  unit: "sec"   },
  ],

  droneMissions: [
    {
      number: "01",
      tag: "CONVOY PROTECTION",
      title: "High-Speed Mobile Defense",
      description:
        "Protects convoys and mobile assets at speeds up to 150 km/h. Full 360° detection and jamming coverage maintained during high-speed movement with automatic threat suppression.",
    },
    {
      number: "02",
      tag: "FULL-BAND DETECTION",
      title: "70 MHz – 6 GHz Spectrum Scanning",
      description:
        "Full-band spectrum scanning from 70 MHz to 6 GHz with priority detection across 11 key UAV frequency bands. Identifies DJI, Autel, and FPV drone models via protocol decoding.",
    },
    {
      number: "03",
      tag: "SMART JAMMING",
      title: "8-Band Targeted Suppression",
      description:
        "Independent per-angle jamming control across 8 frequency bands. Blacklist/whitelist function protects authorized UAVs while immediately suppressing hostile targets. ≤3 second response time.",
    },
  ],

  droneFlightParams: [
    { name: "Detection Range",    value: "5",    unit: "km",    fillPercent: 100 },
    { name: "Jamming Range",      value: "3",    unit: "km",    fillPercent: 60  },
    { name: "FPV Detection",      value: "1.5",  unit: "km",    fillPercent: 30  },
    { name: "Horizontal Coverage",value: "360°", unit: "",       fillPercent: 100 },
    { name: "Response Time",      value: "≤3",   unit: "sec",   fillPercent: 95  },
    { name: "Max Operating Speed",value: "150",  unit: "km/h",  fillPercent: 75  },
  ],

  dronePayloads: [
    {
      capacity: "5KM",
      unit: "DETECTION RANGE",
      name: "Multi-Protocol Detection",
      description:
        "70 MHz–6 GHz full-band scanning. Priority detection on 11 UAV bands. DID/RID protocol decoding for DJI, Autel, and FPV models. Electronic map display with GPS positioning.",
    },
    {
      capacity: "3KM",
      unit: "JAMMING RANGE",
      name: "8-Band Jamming System",
      description:
        "8 jamming channels across 868 MHz – 5.8 GHz. Independent angle on/off control. Blacklist/whitelist function. ≤3 second response time. Up to 47 dBm transmit power.",
    },
    {
      capacity: "IP65",
      unit: "MILITARY GRADE",
      name: "All-Environment Protection",
      description:
        "IP65 protection rating. Operating temperature −20°C to +60°C. Low wind resistance design for high-speed stability. AC 220V or mobile power supply with ≥30 min battery backup.",
    },
  ],

  features: [
    {
      title: "360° Full-Frequency Detection & Jamming",
      description:
        "Covers all mainstream drone models with autonomous all-around, multi-angle detection and countermeasures in a single integrated system.",
    },
    {
      title: "High-Speed Operation at 150 km/h",
      description:
        "Low wind resistance structural design maintains full detection and jamming capability during high-speed convoy operations.",
    },
    {
      title: "Blacklist / Whitelist Function",
      description:
        "One-click marking of authorized and unauthorized drones. Whitelisted UAVs are not affected by jamming — only hostile targets are suppressed.",
    },
    {
      title: "≤3 Second Response Time",
      description:
        "From initial drone detection to active jamming engagement in under 3 seconds. Audible, visual, and message alerts on detection.",
    },
    {
      title: "Protocol Decoding — DJI & Autel",
      description:
        "Identifies drone type, flight path, and operator location using DID and RID protocol decoding for DJI, Autel, and FPV platforms.",
    },
    {
      title: "Multi-Mode Deployment",
      description:
        "Modular design supports vehicle-mounted, fixed installation, and portable configurations with multi-device networking capability.",
    },
    {
      title: "Military-Grade IP65 Protection",
      description:
        "Operates from −20°C to +60°C with IP65 ingress protection. Storage rated to −60°C to +85°C for extreme environment storage.",
    },
    {
      title: "FPV Video Interception",
      description:
        "Detects and captures analog FPV video streams within 1.5 km (FPV transmitter ≥2.5W). Enables real-time hostile drone video monitoring.",
    },
  ],

  useCases: [
    "VIP convoy and motorcade protection",
    "Mobile command post security",
    "Border patrol vehicle protection",
    "Critical facility perimeter defense",
    "Military forward operating base protection",
    "Airport and airspace security",
  ],

  specifications: [
    { label: "Model",                    value: "DR100-AB-8" },
    { label: "Detection Frequency",      value: "70 MHz – 6 GHz (full-band)" },
    { label: "Priority Detection Bands", value: "433/530/750/800/900 MHz, 1.2/1.4/2.4/3.3/5.2/5.8 GHz" },
    { label: "Detection Range",          value: "≥5 km (LOS, EM noise −90 to −95 dB)" },
    { label: "Positioning Range",        value: "DID ≥5 km / RID ≥2 km" },
    { label: "FPV Detection Range",      value: "≥1.5 km (FPV Tx ≥2.5W)" },
    { label: "Detection Coverage",       value: "360° horizontal" },
    { label: "Detection Power",          value: "≤60 W" },
    { label: "Jamming Range",            value: "≥3 km" },
    { label: "Jamming Coverage",         value: "Horizontal 360°, Elevation −90° to +90°" },
    { label: "Jamming Bands",            value: "868 MHz, 915 MHz, 1.2/1.4/1.5/2.4/5.2/5.8 GHz" },
    { label: "Max Transmit Power",       value: "Up to 47 dBm per channel" },
    { label: "Total Power Consumption",  value: "≤3000 W" },
    { label: "Response Time",            value: "≤3 seconds" },
    { label: "Suppression Ratio",        value: "≥15:1" },
    { label: "High-Speed Operation",     value: "Supported (up to 150 km/h)" },
    { label: "Power Supply",             value: "AC 220V or mobile power (≥30 min)" },
    { label: "Map Positioning",          value: "Electronic map display" },
    { label: "Alarm Function",           value: "Audible, visual, and message alerts" },
    { label: "Operating Temperature",    value: "−20°C to +60°C" },
    { label: "Storage Temperature",      value: "−60°C to +85°C" },
    { label: "Protection Rating",        value: "IP65" },
    { label: "Weight",                   value: "49.75 kg" },
    { label: "Dimensions",              value: "677 × 673 × 645 mm (L×W×H)" },
    { label: "UAV Models Supported",     value: "DJI (O2/O3/O3+/O4/O4+), Autel, FPV" },
  ],

  media: {
    hero: "/products/dr100-ab-8/images/hero.webp",
    heroAlt: "DR100-AB-8 Vehicle-Mounted Drone Detection and Jamming System",
    gallery: [
      { src: "/products/dr100-ab-8/images/vehicle-mount.webp",  alt: "DR100-AB-8 vehicle-mounted installation" },
      { src: "/products/dr100-ab-8/images/front-view.webp",     alt: "DR100-AB-8 front view" },
      { src: "/products/dr100-ab-8/images/control-panel.webp",  alt: "DR100-AB-8 operation interface" },
    ],
    videos: [
      { title: "DR100-AB-8 — System Overview", file: "/products/dr100-ab-8/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/dr100-ab-8/docs/datasheet.pdf", kind: "pdf" },
      { title: "Product Manual",      file: "/products/dr100-ab-8/docs/manual.pdf",    kind: "pdf" },
    ],
  },

  seo: {
    title: "DR100-AB-8 Mobile Counter-UAV | RDN Technology",
    description:
      "DR100-AB-8 vehicle-mounted drone detection and jamming system. 5 km detection, 3 km jamming, 360° coverage, operates at 150 km/h. IP65 military grade for convoy and perimeter protection.",
  },
};
