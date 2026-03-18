import type { Product } from "../products";

export const evagateC4i: Product = {
  slug: "evagate-c4i",
  name: "EvaGate Secure C4I System",
  category: "Secure Communication",

  tagline: "Integrated voice, data, radio, and video communication core.",

  shortDescription:
    "All-in-one secure communication and command platform for fixed and mobile environments.",

  description:
    "EvaGate is a unified command, communication, and network core for secure voice, data, radio, and video integration across tactical and institutional deployments.",

  overview:
    "The system is designed to solve communication fragmentation by bringing radio, PBX, secure data, streaming, WAN management, and platform integration into a single structured platform. It supports vehicle, marine, trailer, and portable deployments.",

  featured: true,

  features: [
    {
      title: "AES-256 Secure Communication",
      description:
        "Supports resilient and protected communication infrastructure.",
    },
    {
      title: "RoIP / VoIP / Video Integration",
      description:
        "Brings radio, phone, and video systems into one communication core.",
    },
    {
      title: "Redundant WAN Architecture",
      description:
        "Structured for failover, secure routing, and operational continuity.",
    },
    {
      title: "Multi-Platform Deployment",
      description:
        "Suitable for vehicle, marine, portable, and fixed-site use.",
    },
    {
      title: "C4I-Oriented Integration",
      description:
        "Supports command and control use cases with unified operational communication logic.",
    },
    {
      title: "Open Integration Interfaces",
      description:
        "Prepared for third-party integration and platform-level interface requirements.",
    },
  ],

  useCases: [
    "Mobile command vehicles",
    "Marine communication platforms",
    "Disaster response communication",
    "Secure tactical networking",
    "Distributed site communication",
    "Field and HQ interoperability",
  ],

  specifications: [
    { label: "System Type", value: "C4I / Communication Core" },
    { label: "Security", value: "AES-256 / VPN" },
    { label: "Communication", value: "Voice / Data / Radio / Video / TV" },
    { label: "Deployment", value: "Vehicle / Marine / Portable / Fixed" },
    { label: "Routing", value: "Load balancing / failover / smart WAN" },
    { label: "Integration", value: "RoIP / PBX / IPTV / video streaming" },
    { label: "Power Profile", value: "Low-power operational architecture" },
    { label: "Focus", value: "Unified secure communication" },
  ],

  media: {
    hero: "/products/evagate/images/hero.webp",
    heroAlt: "EvaGate secure C4I communication system",
    gallery: [
      {
        src: "/products/evagate/images/hero.webp",
        alt: "EvaGate hero image",
      },
      {
        src: "/products/evagate/images/vehicle.webp",
        alt: "EvaGate vehicle configuration",
      },
      {
        src: "/products/evagate/images/marine.webp",
        alt: "EvaGate marine configuration",
      },
    ],
    videos: [
      {
        title: "Use Case Video",
        file: "/products/evagate/videos/use-case.mp4",
      },
    ],
    documents: [
      {
        title: "Core System Brochure",
        file: "/products/evagate/docs/core-system-brochure.pdf",
        kind: "pdf",
      },
      {
        title: "Use Cases Overview",
        file: "/products/evagate/docs/use-cases.pdf",
        kind: "pdf",
      },
      {
        title: "Vehicle Configuration",
        file: "/products/evagate/docs/vehicle.pdf",
        kind: "pdf",
      },
      {
        title: "Marine Configuration",
        file: "/products/evagate/docs/marine.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title: "EvaGate Secure C4I System | DefenceTech",
    description:
      "Integrated secure communication and command platform for voice, data, radio, and video across mobile and fixed environments.",
  },
};
