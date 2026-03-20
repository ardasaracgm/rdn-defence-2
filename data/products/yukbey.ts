import type { Product } from "../products";

export const yukbey: Product = {
  slug: "yukbey",
  name: "YÜKBEY",
  category: "Drone Systems",
  productType: "30 KG Cargo Carrying Drone",

  tagline: "Heavy Lift Logistics Platform",

  shortDescription:
    "A powerful cargo drone with 30 kg carrying capacity and dual battery system for safe, uninterrupted aerial logistics in demanding environments.",

  description:
    "YÜKBEY is a heavy-lift cargo drone engineered for reliable aerial transport in defense, logistics, and emergency supply operations. Its dual battery system ensures uninterrupted flight continuity, while the large-volume lower basket cargo chamber accommodates bulky mission payloads with ease.",

  overview:
    "YÜKBEY is best suited for organizations requiring reliable aerial logistics at extended ranges. Its carbon fiber and aluminum alloy frame provides structural rigidity under maximum payload, while the intelligent AG-series flight control system enables autonomous mission planning and GPS-locked emergency landing. The 2.4 GHz digital link with live FPV transmission ensures full situational awareness throughout cargo delivery operations.",

  featured: true,

  droneQuickStats: [
    { label: "Payload",   value: "30",  unit: "kg"  },
    { label: "Endurance", value: "40",  unit: "min" },
    { label: "Max Range", value: "30",  unit: "km"  },
    { label: "Altitude",  value: "300", unit: "m"   },
    { label: "MTOW",      value: "85",  unit: "kg"  },
  ],

  droneMissions: [
    {
      number: "01",
      tag: "LOGISTICS",
      title: "Tactical Cargo Delivery",
      description:
        "Delivers up to 30 kg of critical supplies — ammunition, medical equipment, or mission gear — to forward positions unreachable by ground vehicles. GPS-locked precision drop with autonomous return.",
    },
    {
      number: "02",
      tag: "EMERGENCY",
      title: "Disaster Relief Supply",
      description:
        "Rapid aerial resupply in disaster zones where infrastructure is compromised. Dual battery system guarantees mission completion even under adverse conditions.",
    },
    {
      number: "03",
      tag: "SURVEILLANCE",
      title: "Payload-Assisted ISR",
      description:
        "Configurable for sensor payloads alongside cargo. Supports combined logistics and intelligence gathering sorties with FPV live transmission.",
    },
  ],

  droneFlightParams: [
    { name: "Nominal Payload",   value: "30",  unit: "kg",  fillPercent: 60 },
    { name: "Flight Endurance",  value: "40",  unit: "min", fillPercent: 67 },
    { name: "Operational Range", value: "30",  unit: "km",  fillPercent: 60 },
    { name: "Max Altitude",      value: "300", unit: "m",   fillPercent: 30 },
    { name: "MTOW",              value: "85",  unit: "kg",  fillPercent: 70 },
    { name: "Temp. Tolerance",   value: "-20 to +45", unit: "°C", fillPercent: 70 },
  ],

  dronePayloads: [
    {
      capacity: "30",
      unit: "KG MAX PAYLOAD",
      name: "Lower Basket Cargo",
      description:
        "Large-volume lower basket-type cargo chamber for bulky or irregular payloads. Quick-release mechanism for precision aerial drop.",
    },
    {
      capacity: "2×",
      unit: "DUAL BATTERY SYSTEM",
      name: "Redundant Power",
      description:
        "2 × 6S 44.4V 25,000 mAh Li-ion batteries with emergency landing mode and low-voltage cutoff for uninterrupted mission continuity.",
    },
    {
      capacity: "FPV",
      unit: "LIVE TRANSMISSION",
      name: "Situational Awareness",
      description:
        "2.4 GHz digital link with live FPV video transmission. Full real-time visibility of cargo operations and drop zone conditions.",
    },
  ],

  features: [
    {
      title: "30 kg Payload Capacity",
      description: "Carries critical mission cargo — from medical supplies to tactical equipment — over ranges up to 30 km.",
    },
    {
      title: "Dual Battery System",
      description: "Twin 25,000 mAh Li-ion packs with automatic failover ensure uninterrupted flight even under partial power loss.",
    },
    {
      title: "Intelligent Flight Control",
      description: "AG-series military-level flight control system with autonomous mission planning, GPS lock, and emergency landing mode.",
    },
    {
      title: "Carbon Fiber Structure",
      description: "Carbon fiber and aluminum alloy composite frame provides maximum structural rigidity at minimum weight.",
    },
    {
      title: "40-Minute Endurance",
      description: "Extended flight time enables long-range cargo missions without battery swaps, reducing operational downtime.",
    },
    {
      title: "Live FPV Transmission",
      description: "2.4 GHz digital link provides real-time video feed for full operator situational awareness during delivery.",
    },
  ],

  useCases: [
    "Forward tactical resupply",
    "Medical equipment delivery",
    "Disaster zone logistics",
    "Remote outpost support",
    "Naval deck-to-shore transfer",
    "Emergency personnel extraction equipment",
  ],

  specifications: [
    { label: "Model",                 value: "YÜKBEY" },
    { label: "Nominal Payload",       value: "30 kg" },
    { label: "Max Takeoff Weight",    value: "85 kg" },
    { label: "Dimensions",            value: "1300 × 1300 × 900 mm" },
    { label: "Flight Endurance",      value: "40 minutes" },
    { label: "Battery",               value: "2 × 6S 44.4V 25,000 mAh Li-ion" },
    { label: "Max Altitude",          value: "≤ 300 m AGL" },
    { label: "Max Range",             value: "≤ 30 km" },
    { label: "Cargo System",          value: "Large volume lower basket type" },
    { label: "Control Unit",          value: "AG Series Intelligent Flight Control" },
    { label: "Communication",         value: "2.4 GHz digital link, live FPV" },
    { label: "Safety Features",       value: "Dual battery, emergency landing, GPS lock" },
    { label: "Operating Temperature", value: "-20°C to +45°C" },
    { label: "Frame Material",        value: "Carbon fiber and aluminum alloy" },
  ],

  media: {
    hero: "/products/yukbey/images/hero.webp",
    heroAlt: "YÜKBEY 30 KG Cargo Drone in flight",
    gallery: [
      { src: "/products/yukbey/images/cargo-delivery.webp",  alt: "YÜKBEY cargo delivery operation" },
      { src: "/products/yukbey/images/dual-battery.webp",    alt: "YÜKBEY dual battery system" },
      { src: "/products/yukbey/images/field-deployment.webp",alt: "YÜKBEY field deployment" },
    ],
    videos: [
      { title: "YÜKBEY — Mission Overview", file: "/products/yukbey/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/yukbey/docs/datasheet.pdf", kind: "pdf" },
      { title: "Use Case Overview",   file: "/products/yukbey/docs/use-case.pdf",   kind: "pdf" },
    ],
  },

  seo: {
    title: "YÜKBEY 30 KG Cargo Drone | RDN Technology",
    description:
      "YÜKBEY is a 30 kg payload heavy-lift cargo drone with dual battery system and intelligent flight control for tactical logistics and emergency resupply operations.",
  },
};
