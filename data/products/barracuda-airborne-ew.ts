import type { Product } from "../products";

export const barracudaAirborneEw: Product = {
  slug: "barracuda-airborne-ew",
  name: "Barracuda VTOL UAS",
  category: "Airborne Systems",
  productType: "VTOL Airborne ISR & EW Platform",

  tagline:
    "Airborne ISR and electronic warfare platform designed for extended-range tactical missions.",

  shortDescription:
    "A mission-adaptive VTOL unmanned aerial system built for ISR, airborne electronic warfare, and high-value tactical overwatch.",

  description:
    "Barracuda VTOL UAS is a next-generation airborne platform developed for intelligence, surveillance, reconnaissance, and electronic warfare missions in contested environments. By combining VTOL flexibility, fixed-wing endurance, payload modularity, and airborne RF mission capability, Barracuda extends operational reach beyond the limitations of ground-based systems.",

  overview:
    "Barracuda is positioned for missions where elevated awareness, runway-independent launch capability, and modular payload integration are critical. It can support ISR, precision mapping, directional airborne suppression, convoy overwatch, coastal observation, and tactical support missions from a single adaptable platform. Its hybrid VTOL architecture enables rapid deployment in remote terrain, tactical bases, industrial zones, and near-coastal environments without requiring a conventional runway.",

  featured: true,

  features: [
    {
      title: "VTOL + Fixed-Wing Efficiency",
      description:
        "Combines vertical take-off and landing capability with efficient forward flight, enabling runway-independent deployment and long-endurance airborne operations.",
    },
    {
      title: "Extended Mission Endurance",
      description:
        "Designed for long-duration missions with up to 8 hours of endurance, supporting persistent ISR, overwatch, and mission continuity.",
    },
    {
      title: "Mission-Adaptive Payload Architecture",
      description:
        "Supports EO/IR, mapping, LiDAR, SAR, and custom payload options, allowing the system to be configured for defense, industrial, and special mission needs.",
    },
    {
      title: "Airborne Electronic Warfare Capability",
      description:
        "Supports integration of compact directional jammer payloads for counter-UAV and electronic suppression missions from the air.",
    },
    {
      title: "Runway-Independent Deployment",
      description:
        "Launches and lands vertically, allowing use in complex terrain, tactical outposts, remote zones, and infrastructure-limited environments.",
    },
    {
      title: "Real-Time ISR Performance",
      description:
        "Provides live situational awareness, precision surveillance, object tracking, and intelligence collection across complex operational areas.",
    },
    {
      title: "Quiet and Compact Operational Profile",
      description:
        "Its low acoustic signature and compact field footprint support covert, tactical, and observation-heavy missions.",
    },
    {
      title: "Rapid Field Readiness",
      description:
        "Structured for fast deployment with a small operator footprint, enabling quick mission setup and flexible field use.",
    },
  ],

  useCases: [
    "Airborne ISR and surveillance missions",
    "Airborne electronic warfare support",
    "Counter-UAV overwatch operations",
    "Border and coastal security missions",
    "Convoy overwatch and force protection",
    "Critical infrastructure monitoring",
    "Precision mapping and industrial observation",
    "Special operations support",
  ],

  specifications: [
    { label: "Platform Type", value: "Hybrid VTOL Fixed-Wing UAS" },
    { label: "Operational Role", value: "ISR / EW / tactical airborne support" },
    { label: "Wingspan", value: "5200 mm" },
    { label: "Length", value: "2400 mm" },
    { label: "Height", value: "500 mm" },
    { label: "MTOW", value: "50 kg" },
    { label: "Payload Capacity", value: "Up to 10 kg" },
    { label: "Endurance", value: "Up to 8 hours (with reserve)" },
    { label: "Cruise Speed", value: "18–25 m/s" },
    { label: "Maximum Speed", value: "35 m/s" },
    { label: "Command Range", value: "10 km standard / up to 50 km with upgraded GCS" },
    { label: "Encryption", value: "AES-128 standard" },
    {
      label: "EW Payload Capability",
      value: "Directional airborne jammer integration, 400 MHz–6 GHz, up to 500 W RF output",
    },
    { label: "Deployment", value: "Runway-independent VTOL operation" },
  ],

  whyThisProduct: [
    {
      title: "Airborne Reach Beyond Ground Limits",
      description:
        "Barracuda brings ISR and EW capability above terrain obstacles, extending line-of-sight and operational awareness where ground systems are restricted.",
    },
    {
      title: "Runway-Independent Tactical Flexibility",
      description:
        "Its VTOL architecture allows rapid deployment from remote terrain, tactical sites, and coastal zones without requiring conventional runway infrastructure.",
    },
    {
      title: "One Platform, Multiple Mission Roles",
      description:
        "Barracuda combines endurance, payload flexibility, ISR capability, and airborne EW potential in a single adaptable platform.",
    },
  ],

  operationalAdvantages: [
  {
    title: "Above-Terrain Mission Reach",
    description:
      "Barracuda operates above terrain obstacles, improving line-of-sight awareness and extending tactical coverage over mountains, valleys, coastlines, and remote zones.",
  },
  {
    title: "Persistent Overwatch",
    description:
      "Its endurance and ISR capability allow longer airborne presence for convoy protection, infrastructure monitoring, and tactical reconnaissance.",
  },
  {
    title: "Mission Adaptation Without Platform Change",
    description:
      "The same platform can be positioned for ISR, EW support, mapping, or overwatch roles depending on payload and mission need.",
  },
],

missionFit: [
  {
    title: "Forces Operating in Complex Terrain",
    description:
      "Ideal for missions in mountainous, coastal, remote, or infrastructure-limited environments where runway-independent airborne support is required.",
  },
  {
    title: "Teams Requiring ISR and Airborne Support Together",
    description:
      "Well suited for organizations that need surveillance, overwatch, mapping, and airborne mission flexibility from a single platform.",
  },
  {
    title: "Programs Seeking Modular Tactical Air Capability",
    description:
      "Appropriate for defense, security, and industrial missions where payload flexibility and rapid role adaptation are operational priorities.",
  },
],

  deploymentModels: [
  {
    title: "Runway-Independent Field Launch",
    description:
      "Can be deployed directly from tactical terrain, remote staging points, and infrastructure-limited areas without requiring conventional runway support.",
  },
  {
    title: "Persistent Airborne Overwatch",
    description:
      "Suitable for long-duration ISR, convoy support, border monitoring, and infrastructure observation missions where continued aerial presence is required.",
  },
  {
    title: "Mission-Configurable Payload Use",
    description:
      "Supports different deployment profiles depending on ISR, mapping, observation, or airborne EW requirements through modular payload integration.",
  },
],

  integrationCustomization: [
  {
    title: "Payload-Level Mission Adaptation",
    description:
      "Barracuda supports mission-driven payload selection for ISR, observation, mapping, and airborne EW-related configurations.",
  },
  {
    title: "Ground Control and Operational Alignment",
    description:
      "The platform can be aligned with different mission workflows, operator structures, and communication/control concepts depending on deployment needs.",
  },
  {
    title: "Program-Specific Configuration Logic",
    description:
      "Barracuda can be positioned for defense, infrastructure, border, coastal, or industrial missions through platform and payload customization strategy.",
  },
],

  programReadiness: [
  {
    title: "Suitable for Capability Development Programs",
    description:
      "Barracuda can be positioned within ISR, airborne support, and mission-adaptive platform programs where flexibility and long-term capability growth matter.",
  },
  {
    title: "Prepared for Multi-Role Operational Planning",
    description:
      "Its VTOL architecture and payload flexibility support phased program use across surveillance, mapping, overwatch, and airborne EW mission sets.",
  },
  {
    title: "Supportable in Institutional Deployment Contexts",
    description:
      "The platform is well suited for defense, government, and industrial users that evaluate systems not only by performance, but also by operational fit and lifecycle relevance.",
  },
],
  decisionSupport: [
  {
    title: "Define the Mission Role",
    description:
      "Clarify whether the platform is needed for ISR, overwatch, airborne EW support, mapping, or a multi-role mission set.",
  },
  {
    title: "Assess the Operating Environment",
    description:
      "Review terrain, launch conditions, endurance expectations, payload needs, and communication range requirements before configuration planning.",
  },
  {
    title: "Align Payload and Deployment Logic",
    description:
      "Select the payload concept and operational model according to whether the priority is surveillance, precision observation, airborne EW, or mission adaptability.",
  },
],
  media: {
    hero: "/products/barracuda/images/hero.webp",
    heroAlt: "Barracuda VTOL UAS airborne mission hero view",

    gallery: [
      {
        src: "/products/barracuda/images/hero.webp",
        alt: "Barracuda VTOL UAS hero view",
      },
      {
        src: "/products/barracuda/images/isr.webp",
        alt: "Barracuda ISR surveillance mission scenario",
      },
      {
        src: "/products/barracuda/images/ew.webp",
        alt: "Barracuda airborne electronic warfare scenario",
      },
      {
        src: "/products/barracuda/images/tactical.webp",
        alt: "Barracuda tactical deployment scenario",
      },
      {
        src: "/products/barracuda/images/maritime.webp",
        alt: "Barracuda maritime operations scenario",
      },
    ],

    videos: [
      {
        title: "Barracuda Operational Overview",
        file: "/products/barracuda/videos/hero.mp4",
        poster: "/products/barracuda/images/hero.webp",
        isHero: true,
      },
      {
        title: "Operational Deployment",
        file: "/products/barracuda/videos/operational.mp4",
        poster: "/products/barracuda/images/tactical.webp",
      },
      {
        title: "Technical System Overview",
        file: "/products/barracuda/videos/technical.mp4",
        poster: "/products/barracuda/images/isr.webp",
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
    title:
      "Barracuda VTOL UAS | Airborne ISR & EW",
    description:
      "Barracuda VTOL UAS is a mission-adaptive airborne platform for ISR, airborne electronic warfare, convoy overwatch, coastal security, and tactical support operations.",
  },
};
