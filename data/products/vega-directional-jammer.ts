import type { Product } from "../products";

export const vegaDirectionalJammer: Product = {
  slug: "vega-directional-jammer",
  name: "VEGA Multi-Band Directional Jammer",
  category: "Electronic Warfare",
  productType: "Directional Electronic Warfare System",

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
    "Border security support",
    "Airport security operations",
    "Coastal security missions",
    "Military base and tactical site protection",
    "Mission-specific RF denial operations",
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
    { label: "Steering", value: "Motorized directional orientation" },
    { label: "Power Supply", value: "220 VAC" },
    {
      label: "Effective Range",
      value: "Up to 20 km depending on environment, band, and target conditions",
    },
  ],

  whyThisProduct: [
    {
      title: "Focused Effect Instead of Broad Waste",
      description:
        "VEGA uses directional suppression logic to concentrate RF effect on the threat axis, making it more suitable for controlled, high-value protection environments.",
    },
    {
      title: "Built for Long-Range Security Missions",
      description:
        "Its motorized directional structure and high-power architecture position VEGA for perimeter defense, strategic site protection, and long-range counter-UAV roles.",
    },
    {
      title: "Adaptable to Mission and Region",
      description:
        "The modular band structure allows the system to be aligned with regional frequencies, threat profiles, and deployment-specific operational needs.",
    },
  ],

  operationalAdvantages: [
  {
    title: "Better Control in Sensitive Areas",
    description:
      "Directional suppression helps reduce unnecessary wide-area RF impact and supports more controlled protection of strategic facilities and high-value zones.",
  },
  {
    title: "Long-Range Threat Denial",
    description:
      "VEGA is positioned for mission profiles where the threat must be engaged before it reaches the protected perimeter.",
  },
  {
    title: "Deployment Flexibility",
    description:
      "Its architecture supports use in fixed-site protection, border security, airport security, and coastal defense scenarios.",
  },
],
  missionFit: [
  {
    title: "Critical Infrastructure Operators",
    description:
      "Ideal for airports, energy facilities, communication hubs, and other strategic assets that require focused long-range RF denial capability.",
  },
  {
    title: "Border and Coastal Security Units",
    description:
      "Well suited for perimeter-oriented protection where directional engagement and extended standoff distance are mission priorities.",
  },
  {
    title: "Military and Government Security Programs",
    description:
      "Appropriate for defense and public security environments where controlled, high-power counter-UAV protection must be integrated into a larger security posture.",
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
      "VEGA Multi-Band Directional Jammer | Long-Range Counter UAV System",
    description:
      "VEGA is a high-power multi-band directional jammer designed for long-range counter-UAV, GNSS, telemetry, and RF suppression missions.",
  },
};
