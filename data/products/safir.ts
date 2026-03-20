import type { Product } from "../products";

export const safir: Product = {
  slug: "safir",
  name: "SAFIR",
  category: "Drone Systems",
  productType: "Advanced FPV Tactical Drone",

  tagline: "High-Speed First Person View Platform",

  shortDescription:
    "Advanced FPV drone designed for professional missions with high speed, long range, and fully customizable hardware for day and night operations.",

  description:
    "SAFIR is a high-performance FPV drone engineered for professional tactical missions requiring speed, range, and adaptability. With flight speeds exceeding 200 km/h, modular payload architecture, and optional thermal camera, SAFIR delivers first-person precision across ISR, target designation, and rapid response operations.",

  overview:
    "SAFIR is best suited for operators requiring agile, high-speed aerial capability with customizable mission hardware. Its FPV goggle control system provides immersive real-time piloting at ranges up to 20 km, while the modular structure accommodates varying payload types without airframe modifications. Optional thermal camera enables seamless day-to-night operational transition without platform change.",

  featured: false,

  droneQuickStats: [
    { label: "Max Speed",  value: "200+", unit: "km/h" },
    { label: "Payload",    value: "1–4",  unit: "kg"   },
    { label: "Endurance",  value: "45",   unit: "min"  },
    { label: "Max Range",  value: "20",   unit: "km"   },
    { label: "Night Ops",  value: "OPT",  unit: "THERM"},
  ],

  droneMissions: [
    {
      number: "01",
      tag: "HIGH SPEED ISR",
      title: "Rapid Area Reconnaissance",
      description:
        "Covers large areas at speeds exceeding 200 km/h with FPV live feed. Ideal for time-critical reconnaissance where conventional UAVs are too slow or too large.",
    },
    {
      number: "02",
      tag: "TARGET OPS",
      title: "Precision Target Designation",
      description:
        "First-person navigation enables precise target acquisition and real-time operator control. Customizable payload supports both sensor and munition configurations.",
    },
    {
      number: "03",
      tag: "NIGHT MISSIONS",
      title: "Thermal Low-Light Operations",
      description:
        "Optional thermal camera provides full operational capability in darkness and adverse weather. Modular design allows rapid payload swap between day and night configurations.",
    },
  ],

  droneFlightParams: [
    { name: "Max Flight Speed",  value: "150–200+", unit: "km/h", fillPercent: 95 },
    { name: "Flight Endurance",  value: "15–45",    unit: "min",  fillPercent: 50 },
    { name: "Operational Range", value: "10–20",    unit: "km",   fillPercent: 40 },
    { name: "Payload Capacity",  value: "1–4",      unit: "kg",   fillPercent: 20 },
    { name: "Control Range",     value: "FPV",      unit: "goggles", fillPercent: 80 },
  ],

  dronePayloads: [
    {
      capacity: "4",
      unit: "KG MAX PAYLOAD",
      name: "Customizable Mission Load",
      description:
        "Modular payload architecture supports mission-specific hardware — sensors, cameras, or munitions — without airframe modification. Configurable per sortie.",
    },
    {
      capacity: "FPV",
      unit: "GOGGLE CONTROL",
      name: "Immersive Pilot System",
      description:
        "FPV goggle flight control system provides real-time first-person perspective at ranges up to 20 km for precise operator control in dynamic environments.",
    },
    {
      capacity: "IR",
      unit: "OPTIONAL THERMAL",
      name: "Night Vision Package",
      description:
        "Optional thermal camera payload enables full operational effectiveness in zero-light conditions. Rapid swap between day optical and night thermal configurations.",
    },
  ],

  features: [
    {
      title: "150–200+ km/h Flight Speed",
      description: "High-speed flight capability enables rapid area coverage and time-critical response missions where conventional UAVs are too slow.",
    },
    {
      title: "FPV Goggle Control",
      description: "Immersive first-person view control system provides real-time pilot perspective for precision navigation in complex environments.",
    },
    {
      title: "Modular Payload System",
      description: "Fully customizable payload architecture adapts to mission requirements without hardware modifications — sensor, camera, or munition ready.",
    },
    {
      title: "Optional Thermal Camera",
      description: "Night-capable thermal imaging option enables 24/7 operational coverage with rapid day-to-night configuration swap.",
    },
    {
      title: "Multi-Range Configuration",
      description: "Available in 10 km, 15 km, and 20 km range variants to match operational requirements and communication infrastructure.",
    },
    {
      title: "Day / Night Mission Ready",
      description: "Single platform supports both daytime optical and nighttime thermal operations through modular payload design.",
    },
  ],

  useCases: [
    "High-speed area reconnaissance",
    "Time-critical target acquisition",
    "FPV precision strike support",
    "Night thermal surveillance",
    "Rapid perimeter assessment",
    "First responder aerial support",
  ],

  specifications: [
    { label: "Model",                 value: "SAFIR" },
    { label: "Payload",               value: "1 kg – 4 kg" },
    { label: "Flight Duration",       value: "15 – 45 minutes" },
    { label: "Max Flight Speed",      value: "150 – 200 km/h and above" },
    { label: "Flight Range",          value: "10 km / 15 km / 20 km (model dependent)" },
    { label: "Payload Type",          value: "Customizable (varies by mission)" },
    { label: "Camera Options",        value: "Day optical + optional thermal" },
    { label: "Control System",        value: "FPV goggle customizable flight control" },
    { label: "Mission Type",          value: "Day / night capable" },
    { label: "Additional Features",   value: "Modular structure, multi-mission payload" },
  ],

  media: {
    hero: "/products/safir/images/hero.webp",
    heroAlt: "SAFIR Advanced FPV Tactical Drone",
    gallery: [
      { src: "/products/safir/images/high-speed-flight.webp", alt: "SAFIR high-speed mission flight" },
      { src: "/products/safir/images/fpv-control.webp",        alt: "SAFIR FPV control system" },
      { src: "/products/safir/images/payload-config.webp",     alt: "SAFIR modular payload configuration" },
    ],
    videos: [
      { title: "SAFIR — Flight Demo", file: "/products/safir/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/safir/docs/datasheet.pdf", kind: "pdf" },
      { title: "Use Case Overview",   file: "/products/safir/docs/use-case.pdf",   kind: "pdf" },
    ],
  },

  seo: {
    title: "SAFIR Advanced FPV Tactical Drone | RDN Technology",
    description:
      "SAFIR is a high-speed FPV tactical drone with 200+ km/h speed, 20 km range, and modular payload for day and night ISR and strike support missions.",
  },
};
