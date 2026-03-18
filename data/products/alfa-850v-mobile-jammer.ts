import type { Product } from "../products";

export const alfa850vMobileJammer: Product = {
  slug: "alfa-850v",
  name: "ALFA 850V Mobile Drone UAV Jammer System",
  category: "Electronic Warfare",

  tagline:
    "Vehicle-mounted counter-UAV protection system for mobile and tactical operations.",

  shortDescription:
    "A mobile electronic warfare system designed to detect and suppress UAV threats in real-time across dynamic operational environments.",

  description:
    "ALFA 850V is a vehicle-mounted electronic warfare system engineered to provide real-time protection against UAV threats. Designed for mobile operations, convoy security, and tactical deployments, the system delivers wide-area RF suppression and operational flexibility in complex environments.",

  overview:
    "The ALFA 850V Mobile Jammer is built for missions where mobility, rapid deployment, and continuous protection are critical. Integrated into tactical vehicles, the system enables effective counter-UAV capability while maintaining operational movement.",

  featured: true,

  features: [
    {
      title: "Wide-Band RF Suppression",
      description:
        "Covers multiple frequency ranges used by commercial and tactical UAV systems, ensuring effective disruption of control and navigation signals.",
    },
    {
      title: "Vehicle-Mounted Integration",
      description:
        "Designed for seamless integration into tactical and security vehicles, enabling protection during movement and field operations.",
    },
    {
      title: "Real-Time Threat Response",
      description:
        "Instant activation and response capability against UAV threats, minimizing risk in dynamic operational scenarios.",
    },
    {
      title: "360° Operational Coverage",
      description:
        "Provides all-direction protection to secure convoys, personnel, and critical assets during both stationary and mobile deployment.",
    },
  ],

  useCases: [
    "Military convoy protection",
    "VIP and high-value asset security",
    "Border and perimeter security operations",
    "Critical infrastructure protection",
    "Urban tactical operations",
    "Counter-UAV field missions",
  ],

  specifications: [
    { label: "System Type", value: "Mobile Electronic Warfare System" },
    { label: "Platform", value: "Vehicle-mounted" },
    { label: "Operational Mode", value: "Mobile / Stationary" },
    { label: "Coverage", value: "360° protection" },
    { label: "Frequency Range", value: "430 MHz – 6 GHz" },
    { label: "RF Output Power", value: "850 W total output" },
    { label: "Power Supply", value: "220V AC / 50 Hz" },
    { label: "Weight", value: "≤ 90 kg" },
  ],

  media: {
    hero: "/products/alfa-850v/images/hero.webp",
    heroAlt: "ALFA 850V mobile drone jammer deployed in the field",
    gallery: [
      {
        src: "/products/alfa-850v/images/hero.webp",
        alt: "ALFA 850V field deployment",
      },
      {
        src: "/products/alfa-850v/images/field.webp",
        alt: "ALFA 850V military use case",
      },
      {
        src: "/products/alfa-850v/images/mobile.webp",
        alt: "ALFA 850V mobile deployment setup",
      },
      {
        src: "/products/alfa-850v/images/infrastructure.webp",
        alt: "ALFA 850V protecting critical infrastructure",
      },
      {
        src: "/products/alfa-850v/images/tower.webp",
        alt: "ALFA 850V tower installation",
      },
    ],
    videos: [
      {
        title: "Hero Video",
        file: "/products/alfa-850v/videos/hero.mp4",
        poster: "/products/alfa-850v/images/hero.webp",
      isHero: true,
      },
      {
        title: "Operational Scenario",
        file: "/products/alfa-850v/videos/operation.mp4",
      },
      {
        title: "Technical Overview",
        file: "/products/alfa-850v/videos/technical.mp4",
      },
    ],
    documents: [
      {
        title: "Technical Datasheet",
        file: "/products/alfa-850v/docs/datasheet.pdf",
        kind: "pdf",
      },
      {
        title: "Use Case Document",
        file: "/products/alfa-850v/docs/use-case.pdf",
        kind: "pdf",
      },
      {
        title: "User Manual",
        file: "/products/alfa-850v/docs/manual.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title:
      "ALFA 850V Mobile Drone Jammer | Vehicle-Mounted Counter UAV System",
    description:
      "ALFA 850V is a vehicle-mounted mobile jammer system designed for counter-UAV operations, convoy protection, and tactical electronic warfare missions.",
  },
};
