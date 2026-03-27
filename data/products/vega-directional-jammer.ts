import type { Product } from "../products";

export const vegaDirectionalJammer: Product = {
  slug: "vega-directional-jammer",
  name: "VEGA Multi-Band Directional Jammer",
  category: "Electronic Warfare",
  productType: "Directional Electronic Warfare System",

  tagline:
    "Long-range directional suppression for counter-UAV and high-value site protection.",

  shortDescription:
    "A high-power directional electronic warfare system built for long-range RF denial, perimeter security, and strategic counter-UAV operations.",

  description:
    "VEGA is a high-power multi-band directional jammer developed for long-range counter-UAV and RF suppression missions. Designed for controlled denial in security-sensitive environments, it focuses jamming effect toward the threat axis instead of dispersing power across all directions.",

  overview:
    "VEGA is best suited for missions where controlled directional effect, long engagement distance, and infrastructure protection matter more than broad omnidirectional coverage. Its motorized directional architecture and configurable band structure support perimeter defense, airport protection, border security, coastal monitoring, and critical infrastructure security.",

  featured: true,

  features: [
    {
      title: "Directional RF Suppression",
      description:
        "Focuses jamming energy toward the threat direction for stronger and more controlled denial effect.",
    },
    {
      title: "Long-Range Operational Reach",
      description:
        "Designed for scenarios where the threat must be engaged before it enters the protected perimeter.",
    },
    {
      title: "Multi-Band Coverage",
      description:
        "Supports suppression of UAV control links, GNSS, telemetry, video transmission, and other RF-based threats.",
    },
    {
      title: "Motorized Orientation",
      description:
        "Enables rapid directional alignment for more effective response in dynamic operational environments.",
    },
    {
      title: "High Power Output",
      description:
        "Built for demanding security missions requiring stable, high-energy RF denial capability.",
    },
    {
      title: "Mission-Specific Band Logic",
      description:
        "Band structure can be aligned with regional frequency profiles and deployment-specific threat environments.",
    },
  ],

  useCases: [
    "Critical infrastructure protection",
    "Airport security operations",
    "Border security support",
    "Coastal security missions",
    "Strategic perimeter defense",
    "Military base protection",
  ],

  specifications: [
    { label: "System Type", value: "Directional Electronic Warfare System" },
    { label: "Operational Role", value: "Counter-UAV / RF suppression" },
    { label: "Coverage Logic", value: "Directional, focused suppression" },
    { label: "Frequency Coverage", value: "400 MHz – 6 GHz" },
    { label: "Band Structure", value: "Up to 15 configurable bands" },
    { label: "RF Output Power", value: "1000 W total output" },
    {
      label: "Antenna Type",
      value: "High-gain directional antenna with motorized rotation",
    },
    { label: "Power Supply", value: "220 VAC" },
    {
      label: "Effective Range",
      value: "Up to 20 km depending on environment and band",
    },
  ],

  whyThisProduct: [
    {
      title: "Built for Controlled Protection",
      description:
        "VEGA is designed for users who need targeted RF denial in high-value areas, not broad and inefficient omnidirectional effect.",
    },
    {
      title: "Stronger Perimeter Logic",
      description:
        "Its directional architecture supports earlier engagement against incoming threats before they reach critical assets.",
    },
    {
      title: "Better Fit for Strategic Sites",
      description:
        "It is especially suitable for airports, energy facilities, communication hubs, borders, and coastal protection roles.",
    },
  ],

  operationalAdvantages: [
    {
      title: "More Efficient Threat Engagement",
      description:
        "Power is concentrated where it matters most, improving denial effect in the threat corridor.",
    },
    {
      title: "Reduced Wide-Area Interference Logic",
      description:
        "Directional engagement supports more controlled protection in sensitive operational environments.",
    },
    {
      title: "Mission-Ready for Long Security Lines",
      description:
        "Well positioned for perimeter, border, airport, and coastal security concepts requiring standoff distance.",
    },
  ],

  missionFit: [
    {
      title: "Critical Infrastructure Operators",
      description:
        "Ideal for organizations protecting strategic facilities with exposed perimeter or approach corridors.",
    },
    {
      title: "Border and Coastal Security Units",
      description:
        "Suitable for teams that need long-range directional engagement against aerial and RF-based threats.",
    },
    {
      title: "Defense and Government Programs",
      description:
        "A strong fit for users requiring controlled, high-power counter-UAV protection within layered security planning.",
    },
  ],

  deploymentModels: [
    {
      title: "Fixed-Site Protection",
      description:
        "Appropriate for permanent deployment at strategic assets and protected infrastructure.",
    },
    {
      title: "Perimeter Defense",
      description:
        "Can be positioned to secure exposed sectors and long perimeter lines with directional standoff effect.",
    },
    {
      title: "Layered Security Role",
      description:
        "Can operate as one focused RF denial layer inside a broader protection architecture.",
    },
  ],

  decisionSupport: [
    {
      title: "Define the Threat Axis",
      description:
        "Start by identifying the likely approach direction, perimeter exposure, and required engagement distance.",
    },
    {
      title: "Match Frequency Needs",
      description:
        "Confirm which UAV, telemetry, GNSS, and communication bands are relevant to the mission region.",
    },
    {
      title: "Choose the Protection Model",
      description:
        "Determine whether the mission requires fixed-site defense, perimeter security, or layered integration.",
    },
  ],

  media: {
    hero: "/products/vega/images/vega-hero.webp",
    heroAlt: "VEGA multi-band directional jammer system",
    gallery: [
      {
        src: "/products/vega/images/vega-hero.webp",
        alt: "VEGA directional jammer hero view",
      },
      {
        src: "/products/vega/images/vega-critical-infrastructure.webp",
        alt: "VEGA protecting critical infrastructure",
      },
      {
        src: "/products/vega/images/vega-border-security.webp",
        alt: "VEGA border security deployment scenario",
      },
      {
        src: "/products/vega/images/vega-airport-security.webp",
        alt: "VEGA airport security deployment scenario",
      },
      {
        src: "/products/vega/images/vega-coastal-security.webp",
        alt: "VEGA coastal security deployment scenario",
      },
    ],
    videos: [
      {
        title: "VEGA Operational Overview",
        file: "/products/vega/videos/hero.mp4",
        poster: "/products/vega/images/vega-hero.webp",
        isHero: true,
      },
      {
        title: "System Demonstration Video",
        file: "/products/vega/videos/demo.mp4",
        poster: "/products/vega/images/vega-border-security.webp",
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
      "VEGA Directional Jammer | RDN Technology",
    description:
      "VEGA is a high-power directional jammer for long-range counter-UAV operations, perimeter defense, airport security, border security, and critical infrastructure protection.",
  },
};
