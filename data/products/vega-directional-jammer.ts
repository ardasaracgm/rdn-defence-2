import type { Product } from "../products";

export const vegaDirectionalJammer: Product = {
  slug: "vega-directional-jammer",
  name: "VEGA Multi-Band Directional Jammer",
  category: "Electronic Warfare",

  tagline:
    "Long-range directional suppression system for UAV, GNSS, and RF-based threats.",

  shortDescription:
    "A high-power directional electronic warfare system designed for long-range counter-UAV and RF suppression missions.",

  description:
    "VEGA is a multi-band directional jammer system developed for advanced electronic warfare operations. With high RF output, steerable directional antennas, and modular band architecture, the system is positioned to suppress UAV control links, GNSS signals, telemetry, video transmission, and other hostile RF activity across extended ranges.",

  overview:
    "Designed for mission environments where range, directional effect, and RF flexibility are critical, VEGA provides focused suppression against airborne and communication-based threats. Its modular architecture enables adaptation to different frequency requirements, while the directional antenna structure supports controlled long-range engagement in operationally demanding environments. It is suitable for perimeter protection, fixed-site deployment, critical infrastructure defense, and tactical electronic warfare scenarios where controlled high-power directional output is required.",

  featured: true,

  features: [
    {
      title: "Directional RF Suppression",
      description:
        "Uses a high-gain directional antenna structure to focus jamming power toward targeted threats with greater precision and range.",
    },
    {
      title: "Long-Range Operational Effect",
      description:
        "Designed for scenarios where extended suppression distance and controlled directional engagement are mission priorities.",
    },
    {
      title: "Multi-Band Architecture",
      description:
        "Supports a broad operational frequency structure for disrupting UAV links, GNSS, telemetry, video transmission, and other RF-based threats.",
    },
    {
      title: "High Power Output",
      description:
        "Built for demanding suppression missions requiring strong and stable RF power across multiple active bands.",
    },
    {
      title: "Motorized Steering Capability",
      description:
        "Directional alignment can be adjusted rapidly for more effective target orientation and faster operational response.",
    },
    {
      title: "Modular Band Configuration",
      description:
        "Mission-specific band configuration enables adaptation to regional threat profiles and customer-specific deployment needs.",
    },
    {
      title: "Field-Ready Reliability",
      description:
        "Engineered for harsh operational environments where ruggedization, continuity, and mission adaptability are essential.",
    },
    {
      title: "Controlled Area Protection",
      description:
        "Supports focused denial effects in security-sensitive areas without relying only on broad omnidirectional suppression logic.",
    },
  ],

  useCases: [
    "Long-range counter-UAV operations",
    "Strategic perimeter protection",
    "Critical infrastructure defense",
    "Border and coastal security support",
    "Military base and tactical site protection",
    "Fixed electronic warfare deployment",
    "Mission-specific RF denial operations",
    "High-value asset protection",
  ],

  specifications: [
    { label: "System Type", value: "Directional Electronic Warfare System" },
    { label: "Operational Role", value: "Counter-UAV / RF suppression" },
    { label: "Coverage Logic", value: "Directional, focused suppression" },
    { label: "Frequency Coverage", value: "400 MHz – 6 GHz" },
    { label: "Band Structure", value: "Up to 15 configurable bands" },
    { label: "RF Output Power", value: "1000 W total output" },
    { label: "Antenna Type", value: "High-gain directional antenna array" },
    { label: "Steering", value: "Motorized directional orientation" },
    { label: "Power Supply", value: "220 VAC" },
    {
      label: "Effective Range",
      value: "Up to 20 km depending on environment, band, and target conditions",
    },
  ],

  media: {
    hero: "/products/vega/images/hero.webp",
    heroAlt: "VEGA multi-band directional jammer system",
    gallery: [
      {
        src: "/products/vega/images/hero.webp",
        alt: "VEGA directional jammer hero view",
      },
      {
        src: "/products/vega/images/field.webp",
        alt: "VEGA deployed in an operational field environment",
      },
      {
        src: "/products/vega/images/technical.webp",
        alt: "VEGA technical product showcase",
      },
      {
        src: "/products/vega/images/infrastructure.webp",
        alt: "VEGA protecting critical infrastructure",
      },
      {
        src: "/products/vega/images/perimeter.webp",
        alt: "VEGA perimeter security deployment scenario",
      },
    ],
    videos: [
      {
        title: "VEGA Operational Overview",
        file: "/products/vega/videos/hero.mp4",
        poster: "/products/vega/images/hero.webp",
        isHero: true,
      },
      {
        title: "System Demonstration Video",
        file: "/products/vega/videos/demo.mp4",
        poster: "/products/vega/images/field.webp",
      },
      {
        title: "Technical Showcase",
        file: "/products/vega/videos/technical.mp4",
        poster: "/products/vega/images/technical.webp",
      },
    ],
    documents: [
      {
        title: "Technical Specifications Document",
        file: "/products/vega/docs/specifications.pdf",
        kind: "pdf",
      },
      {
        title: "Capability Overview",
        file: "/products/vega/docs/capability-overview.pdf",
        kind: "pdf",
      },
      {
        title: "Deployment Scenarios",
        file: "/products/vega/docs/deployment-scenarios.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title:
      "VEGA Multi-Band Directional Jammer | Long-Range Counter UAV System",
    description:
      "VEGA is a high-power multi-band directional jammer designed for long-range counter-UAV, GNSS, telemetry, and RF suppression missions.",
  },
};
