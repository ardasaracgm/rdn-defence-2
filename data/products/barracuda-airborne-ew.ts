import type { Product } from "../products";

export const barracudaAirborneEw: Product = {
  slug: "barracuda-airborne-ew",
  name: "Barracuda Airborne EW UAV",
  category: "Airborne Systems",

  tagline:
    "Mission-adaptive VTOL airborne platform for electronic warfare, ISR, and tactical support.",

  shortDescription:
    "A modular airborne electronic warfare platform designed for surveillance, RF mission support, and extended operational flexibility.",

  description:
    "Barracuda is a VTOL airborne platform developed for advanced electronic warfare and ISR missions. Combining vertical take-off capability with mission-adaptive payload logic, the system is positioned to support surveillance, RF mission support, tactical overwatch, and high-value operational flexibility in complex environments.",

  overview:
    "Unlike ground-based systems limited by terrain and line-of-sight conditions, Barracuda extends mission reach from the air. It is designed for scenarios where mobility, elevated sensing, and adaptable payload integration are critical. The platform supports defense, perimeter, convoy, and field operations requiring persistent aerial presence and electronic support capability.",

  featured: true,

  features: [
    {
      title: "VTOL Flight Architecture",
      description:
        "Supports vertical take-off and landing for deployment in restricted and infrastructure-limited environments.",
    },
    {
      title: "ISR + EW Mission Capability",
      description:
        "Combines airborne surveillance with mission-adaptive electronic warfare support in a single platform.",
    },
    {
      title: "Modular Payload Integration",
      description:
        "Can be configured for different payloads and mission profiles depending on the operational requirement.",
    },
    {
      title: "Extended Mission Reach",
      description:
        "Provides elevated operational perspective and improved line-of-sight effectiveness compared to ground-only systems.",
    },
    {
      title: "Persistent Airborne Presence",
      description:
        "Structured for long-endurance missions where continuous aerial support and situational awareness are required.",
    },
    {
      title: "Mission-Ready Adaptability",
      description:
        "Designed for tactical, border, convoy, maritime, and infrastructure-related deployment scenarios.",
    },
  ],

  useCases: [
    "Airborne electronic warfare support",
    "ISR and reconnaissance missions",
    "Convoy overwatch",
    "Border surveillance operations",
    "Critical infrastructure monitoring",
    "Tactical field support missions",
    "Maritime and coastal observation",
    "High-value asset overwatch",
  ],

  specifications: [
    { label: "Platform Type", value: "VTOL Airborne Mission Platform" },
    { label: "Operational Role", value: "EW / ISR / airborne tactical support" },
    { label: "Take-Off & Landing", value: "Vertical take-off and landing (VTOL)" },
    { label: "Payload Logic", value: "Mission-adaptive modular configuration" },
    { label: "Endurance", value: "Up to 8 hours" },
    { label: "Payload Capacity", value: "Up to 10 kg" },
    { label: "Communication Range", value: "20 km standard, extendable by configuration" },
    { label: "Deployment", value: "Airborne field and tactical operations" },
  ],

  media: {
    hero: "/products/barracuda/images/barracuda-hero.webp",
    heroAlt: "Barracuda airborne EW UAV in mission-ready configuration",

    gallery: [
      {
        src: "/products/barracuda/images/barracuda-hero.webp",
        alt: "Barracuda airborne EW UAV hero view",
      },
      {
        src: "/products/barracuda/images/barracuda-flight.webp",
        alt: "Barracuda in airborne deployment scenario",
      },
      {
        src: "/products/barracuda/images/barracuda-technical.webp",
        alt: "Barracuda technical product showcase",
      },
      {
        src: "/products/barracuda/images/barracuda-border.webp",
        alt: "Barracuda border surveillance mission scenario",
      },
      {
        src: "/products/barracuda/images/barracuda-infrastructure.webp",
        alt: "Barracuda critical infrastructure monitoring scenario",
      },
    ],

    videos: [
      {
        title: "Barracuda Operational Overview",
        file: "/products/barracuda/videos/hero.mp4",
        poster: "/products/barracuda/images/barracuda-hero.webp",
        isHero: true,
      },
      {
        title: "Flight Demonstration",
        file: "/products/barracuda/videos/demo.mp4",
        poster: "/products/barracuda/images/barracuda-flight.webp",
      },
    ],

    documents: [
      {
        title: "Technical Specifications",
        file: "/products/barracuda/docs/specifications.pdf",
        kind: "pdf",
      },
      {
        title: "Capability Overview",
        file: "/products/barracuda/docs/capability-overview.pdf",
        kind: "pdf",
      },
      {
        title: "Awards & Recognition",
        file: "/products/barracuda/docs/awards.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title: "Barracuda Airborne EW UAV | VTOL ISR & Electronic Warfare Platform",
    description:
      "Barracuda is a mission-adaptive VTOL airborne platform for electronic warfare, ISR, convoy overwatch, border surveillance, and tactical field support.",
  },
};
