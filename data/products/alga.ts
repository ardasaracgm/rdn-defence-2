import type { Product } from "../products";

export const alga: Product = {
  slug: "alga",
  name: "ALGA",
  category: "Drone Systems",
  productType: "Tactical Ammunition Release Drone",

  tagline: "Precision Strike & Reconnaissance Platform",

  shortDescription:
    "A tactical drone with precision targeting system and dual-locking ammunition release apparatus, operating with high precision in reconnaissance, surveillance, and pinpoint-supported operations.",

  description:
    "ALGA is a tactical UAV engineered for ammunition transport and precision release in military operations. Its AG-series military-level flight control system and dual-locking intelligent release mechanism deliver pinpoint accuracy in ISR and fire support missions. Operates at ranges up to 25 km with optional thermal camera for night missions.",

  overview:
    "ALGA bridges the gap between reconnaissance and tactical strike capability in a compact, field-deployable platform. The dual-locking ammunition release system prevents accidental deployment while enabling precise, single-command activation at target coordinates. GPS-fix and emergency landing mode ensure controlled recovery in contested environments. The system is compatible with the AG-series military flight control ecosystem for seamless integration with existing command infrastructure.",

  featured: true,

  droneQuickStats: [
    { label: "Payload",   value: "15", unit: "kg"  },
    { label: "Endurance", value: "35", unit: "min" },
    { label: "Max Range", value: "25", unit: "km"  },
    { label: "Altitude",  value: "250",unit: "m"   },
    { label: "MTOW",      value: "45", unit: "kg"  },
  ],

  droneMissions: [
    {
      number: "01",
      tag: "STRIKE SUPPORT",
      title: "Precision Ammunition Release",
      description:
        "Transports and releases up to 15 kg of munitions with dual-locking intelligent release system. Single-command activation at GPS-designated coordinates for precise fire support.",
    },
    {
      number: "02",
      tag: "RECONNAISSANCE",
      title: "ISR & Target Acquisition",
      description:
        "Conducts intelligence, surveillance, and reconnaissance missions with high-resolution optics and optional thermal camera. Delivers real-time target data to command.",
    },
    {
      number: "03",
      tag: "NIGHT OPS",
      title: "Low-Light Operations",
      description:
        "Optional thermal camera enables full operational capability in zero-visibility conditions. GPS-locked navigation ensures accurate target approach in denied environments.",
    },
  ],

  droneFlightParams: [
    { name: "Nominal Payload",   value: "15",  unit: "kg",  fillPercent: 30 },
    { name: "Flight Endurance",  value: "35",  unit: "min", fillPercent: 58 },
    { name: "Operational Range", value: "25",  unit: "km",  fillPercent: 50 },
    { name: "Max Altitude",      value: "250", unit: "m",   fillPercent: 25 },
    { name: "MTOW",              value: "45",  unit: "kg",  fillPercent: 37 },
    { name: "Temp. Tolerance",   value: "-10 to +50", unit: "°C", fillPercent: 72 },
  ],

  dronePayloads: [
    {
      capacity: "15",
      unit: "KG MISSION PAYLOAD",
      name: "Dual-Lock Release System",
      description:
        "Intelligent dual-locking ammunition release mechanism with single-command activation. Prevents accidental deployment while enabling precision release at target coordinates.",
    },
    {
      capacity: "ISR",
      unit: "OPTICAL PAYLOAD",
      name: "Reconnaissance Package",
      description:
        "High-resolution camera system for target acquisition and battle damage assessment. Optional thermal upgrade for night and low-visibility operations.",
    },
    {
      capacity: "GPS",
      unit: "NAVIGATION SYSTEM",
      name: "Precision Navigation",
      description:
        "Military-grade GPS fix with emergency landing mode and low-voltage protection. AG-series flight control compatible for integrated command operations.",
    },
  ],

  features: [
    {
      title: "Dual-Locking Release System",
      description: "Intelligent dual-lock mechanism prevents accidental activation while enabling precise single-command ammunition release at target coordinates.",
    },
    {
      title: "AG-Series Military Flight Control",
      description: "Military-grade flight control system with autonomous waypoint navigation, GPS fix, and emergency landing mode for contested environment operations.",
    },
    {
      title: "15 kg Tactical Payload",
      description: "Carries ammunition, supply packages, or sensor payloads up to 15 kg across operational ranges up to 25 km.",
    },
    {
      title: "Optional Thermal Camera",
      description: "Night-capable thermal imaging upgrade enables full operational effectiveness in zero-visibility and low-light environments.",
    },
    {
      title: "35-Minute Endurance",
      description: "Extended sortie duration for sustained ISR coverage or multi-waypoint ammunition delivery missions.",
    },
    {
      title: "Carbon Fiber Composite Frame",
      description: "Carbon fiber and aluminum alloy structure provides high strength-to-weight ratio, critical for maximum payload at minimum airframe mass.",
    },
  ],

  useCases: [
    "Tactical fire support missions",
    "Precision munitions delivery",
    "Forward reconnaissance operations",
    "Target acquisition and designation",
    "Night surveillance with thermal imaging",
    "Combined ISR and strike sorties",
  ],

  specifications: [
    { label: "Model",                 value: "ALGA" },
    { label: "Mission Type",          value: "Ammunition transport and release" },
    { label: "Nominal Payload",       value: "15 kg" },
    { label: "Max Takeoff Weight",    value: "45 kg" },
    { label: "Dimensions",            value: "1150 × 1150 × 650 mm" },
    { label: "Flight Endurance",      value: "35 minutes" },
    { label: "Battery",               value: "1 × 6S 44.4V 22,000 mAh Li-ion" },
    { label: "Max Altitude",          value: "≤ 250 m AGL" },
    { label: "Max Range",             value: "≤ 25 km" },
    { label: "Payload Mechanism",     value: "Dual locking intelligent release system" },
    { label: "Control Unit",          value: "AG Series military level flight control" },
    { label: "Safety Features",       value: "GPS fix, emergency landing, low voltage" },
    { label: "Operating Temperature", value: "-10°C to +50°C" },
    { label: "Frame Material",        value: "Carbon fiber + aluminum alloy" },
  ],

  media: {
    hero: "/products/alga/images/hero.webp",
    heroAlt: "ALGA Tactical Ammunition Release Drone",
    gallery: [
      { src: "/products/alga/images/tactical-operation.webp", alt: "ALGA tactical operation" },
      { src: "/products/alga/images/release-system.webp",     alt: "ALGA dual-lock release system" },
      { src: "/products/alga/images/night-mission.webp",      alt: "ALGA night mission with thermal" },
    ],
    videos: [
      { title: "ALGA — Mission Overview", file: "/products/alga/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/alga/docs/datasheet.pdf", kind: "pdf" },
      { title: "Use Case Overview",   file: "/products/alga/docs/use-case.pdf",   kind: "pdf" },
    ],
  },

  seo: {
    title: "ALGA Tactical Ammunition Release Drone | RDN Technology",
    description:
      "ALGA is a precision tactical UAV with dual-locking ammunition release system and ISR capability. 15 kg payload, 25 km range, optional thermal camera for night operations.",
  },
};
