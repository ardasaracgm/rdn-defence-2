import type { Product } from "../products";

export const barracudaAirborneEw: Product = {
  slug: "barracuda-airborne-ew",
  name: "Barracuda Airborne EW UAV",
  category: "Airborne Systems",

  tagline: "Airborne electronic warfare platform with ISR capability.",

  shortDescription:
    "A modular VTOL UAV designed for airborne electronic warfare and ISR.",

  description:
    "Barracuda is a mission-adaptive VTOL airborne platform structured for electronic warfare, surveillance, and high-value operational flexibility.",

  overview:
    "Unlike ground-only suppression systems, airborne EW platforms extend operational reach and improve line-of-sight effectiveness in complex environments. Barracuda positions electronic warfare, ISR, and hard-kill support in one airborne architecture.",

  featured: true,

  features: [
    {
      title: "VTOL Platform",
      description:
        "Supports vertical take-off and landing in constrained deployment environments.",
    },
    {
      title: "ISR + EW Capability",
      description:
        "Combines surveillance and electronic warfare within a single airborne platform.",
    },
    {
      title: "Mission Modularity",
      description:
        "Adaptable structure for changing payload and mission requirements.",
    },
    {
      title: "High Endurance Architecture",
      description:
        "Designed for persistent operational presence and mission continuity.",
    },
    {
      title: "Low-RCS Airframe Logic",
      description:
        "Positioned for improved survivability and reduced observability in contested environments.",
    },
    {
      title: "Airborne Spectrum Dominance",
      description:
        "Extends RF suppression into areas where terrain and urban density limit ground-based systems.",
    },
  ],

  useCases: [
    "Airborne electronic warfare",
    "ISR missions",
    "Convoy overwatch",
    "Counter-UAV support operations",
    "Mountainous and urban terrain missions",
    "Maritime convoy protection",
  ],

  specifications: [
    { label: "Platform", value: "VTOL UAV" },
    { label: "Operational Role", value: "EW / ISR / airborne support" },
    { label: "Endurance", value: "Up to 8 hours" },
    { label: "Payload Capacity", value: "Up to 10 kg" },
    {
      label: "Communication Range",
      value: "20 km standard / higher with upgraded setup",
    },
    { label: "Deployment", value: "Airborne" },
    { label: "Propulsion", value: "Hybrid fixed-wing + VTOL support" },
    { label: "Focus", value: "Mission-adaptive operations" },
  ],

  media: {
    hero: "/products/barracuda/images/hero.webp",
    heroAlt: "Barracuda airborne EW UAV in flight",
    gallery: [
      {
        src: "/products/barracuda/images/hero.webp",
        alt: "Barracuda airborne EW UAV hero image",
      },
      {
        src: "/products/barracuda/images/flight.webp",
        alt: "Barracuda flight scenario",
      },
      {
        src: "/products/barracuda/images/platform.webp",
        alt: "Barracuda platform overview",
      },
    ],
    videos: [
      {
        title: "Flight Demonstration",
        file: "/products/barracuda/videos/flight-demo.mp4",
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
    title: "Barracuda Airborne EW UAV | DefenceTech",
    description:
      "Mission-adaptive VTOL UAV for airborne electronic warfare, ISR, and advanced anti-drone support operations.",
  },
};
