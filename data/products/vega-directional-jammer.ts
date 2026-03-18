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
    "Designed for mission environments where range, directional effect, and RF flexibility are critical, VEGA provides focused suppression against airborne and communication-based threats. Its modular architecture enables adaptation to different frequency requirements, while the directional antenna structure supports controlled long-range engagement in operationally demanding environments.",

  featured: true,

  features: [
    {
      title: "Directional RF Suppression",
      description:
        "Uses a high-gain directional antenna structure to focus jamming power toward targeted threats with greater precision and range.",
    },
    {
      title: "Multi-Band Architecture",
      description:
        "Supports a wide operational frequency structure for disrupting UAV links, GNSS, telemetry, video transmission, and other RF-based threats.",
    },
    {
      title: "Long-Range Operational Effect",
      description:
        "Engineered for scenarios where extended suppression range and controlled directional coverage are operational priorities.",
    },
    {
      title: "Modular Band Configuration",
      description:
        "Mission-specific band configuration enables adaptation to different operational environments and regional threat profiles.",
    },
    {
      title: "Motorized Steering Capability",
      description:
        "Directional orientation can be aligned rapidly for more efficient targeting and field responsiveness.",
    },
    {
      title: "Field-Ready Reliability",
      description:
        "Designed for demanding deployment conditions where ruggedization, continuity, and mission adaptability are essential.",
    },
  ],

  useCases: [
    "Long-range counter-UAV operations",
    "Strategic site and perimeter protection",
    "Electronic warfare support missions",
    "Critical infrastructure defense",
    "Military and tactical field deployment",
    "Mission-specific RF denial operations",
  ],

  specifications: [
    { label: "System Type", value: "Directional Electronic Warfare System" },
    { label: "Frequency Coverage", value: "400 MHz – 6 GHz" },
    { label: "Band Structure", value: "Up to 15 bands" },
    { label: "RF Output Power", value: "1000 W total output" },
    { label: "Antenna Type", value: "High-gain directional antenna" },
    { label: "Steering", value: "Motorized directional orientation" },
    { label: "Power Supply", value: "220 VAC" },
    {
      label: "Effective Range",
      value: "Up to 20 km depending on environment and band",
    },
  ],

  media: {
    hero: "/products/vega/images/hero.webp",
    heroAlt: "VEGA directional jammer system",
    gallery: [
      {
        src: "/products/vega/images/hero.webp",
        alt: "VEGA hero image",
      },
      {
        src: "/products/vega/images/field.webp",
        alt: "VEGA field deployment",
      },
      {
        src: "/products/vega/images/technical.webp",
        alt: "VEGA technical showcase",
      },
    ],
    videos: [
      {
        title: "System Demonstration Video",
        file: "/products/vega/videos/demo.mp4",
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
    ],
  },

  seo: {
    title:
      "VEGA Multi-Band Directional Jammer | Long-Range Counter UAV System",
    description:
      "VEGA is a high-power multi-band directional jammer designed for long-range counter-UAV, GNSS, telemetry, and RF suppression missions.",
  },
};
