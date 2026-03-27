import type { Product } from "../products";

export const alfa850vMobile: Product = {
  slug: "alfa-850v-mobile",
  name: "ALFA 850V Mobile Drone-UAV Jammer System",
  category: "Electronic Warfare",
  productType: "Vehicle-Mounted Mobile Counter-UAV Jammer",

  tagline:
    "Vehicle-mounted counter-UAV protection for mobile operations, convoys, and tactical deployments.",

  shortDescription:
    "A roof-mounted mobile electronic warfare system built into a tactical enclosure, delivering 360° RF suppression against UAV threats while the vehicle is stationary or in motion.",

  description:
    "The ALFA 850V Mobile is a vehicle-integrated drone-UAV jammer system housed in a ruggedized roof-mount enclosure. Designed for mobile operations and tactical deployments, it provides continuous counter-UAV protection across the 430 MHz to 6 GHz spectrum with 850W total RF output. The system mounts directly to vehicle roof racks, enabling protection during movement without compromising operational mobility.",

  overview:
    "ALFA 850V Mobile is built for organizations that require counter-UAV capability on the move. Integrated into tactical vehicles via a compact roof-box enclosure, the system deploys instantly and operates across all major UAV frequency bands. Its analog-based scanning architecture delivers faster frequency sweeps than digital competitors, while the modular per-band power structure allows mission-specific frequency configuration. Optional battery backup and remote management enable fully autonomous mobile operation.",

  featured: true,

  features: [
    {
      title: "Vehicle Roof-Mount Integration",
      description:
        "Housed in a ruggedized tactical enclosure that mounts to standard vehicle roof racks, enabling seamless integration into SUVs, pickups, and tactical vehicles without structural modification.",
    },
    {
      title: "360° Mobile Coverage",
      description:
        "High-gain omnidirectional antennas (min. 9 dBi) with 60° elevation coverage provide full-sphere protection while the vehicle is stationary or in motion.",
    },
    {
      title: "Rapid 3-Second Activation",
      description:
        "Emits jamming signal within 3 seconds of activation, ensuring near-instant protection in fast-developing threat scenarios.",
    },
    {
      title: "Broad Frequency Coverage",
      description:
        "Covers the full 430 MHz to 6 GHz spectrum with per-band power modules, targeting UAV control links, GNSS, telemetry, and video transmission simultaneously.",
    },
    {
      title: "Anti-GNSS Protected Jamming",
      description:
        "Blocks all GNSS transmitters and anti-jammer protected receivers, neutralizing advanced drone navigation systems within effective operational range.",
    },
    {
      title: "Frequency Segmentation Architecture",
      description:
        "Separate signal and power systems per frequency band allow independent band control and mission-specific configuration without system downtime.",
    },
    {
      title: "Reduced Harmonic Propagation",
      description:
        "Integrated filter system suppresses unwanted RF harmonics outside active bands, minimizing interference with vehicle electronics and communications equipment.",
    },
    {
      title: "Optional Battery & Remote Management",
      description:
        "Optional onboard battery system enables operation independent of vehicle power. Optional RMS software supports remote monitoring and multi-unit control from a central interface.",
    },
  ],

  useCases: [
    "Military convoy and vehicle column protection",
    "VIP and high-value asset escort operations",
    "Mobile patrol and rapid response deployments",
    "Border and perimeter security patrols",
    "Tactical field operations and forward deployments",
    "Event security and temporary site protection",
    "Urban counter-UAV operations",
  ],

  specifications: [
    { label: "System Type", value: "Vehicle-Mounted Mobile Jammer" },
    { label: "Platform", value: "Roof-mount enclosure (vehicle-integrated)" },
    { label: "Operational Mode", value: "Mobile / Stationary" },
    { label: "Coverage", value: "360° omnidirectional, 60° elevation" },
    { label: "RF Output Frequencies", value: "430 MHz – 6 GHz" },
    { label: "RF Output Power", value: "850 W total output" },
    { label: "Power Supply", value: "220V AC – 50 Hz / Optional battery" },
    { label: "Power Consumption", value: "≤ 2 kW" },
    { label: "Activation Time", value: "3 seconds to full jamming output" },
    { label: "Dimensions", value: "W: 90 cm × H: 45 cm × L: 152 cm" },
    { label: "Weight", value: "≤ 90 kg" },
    { label: "Antenna Type", value: "High-gain omnidirectional (min. 9 dBi)" },
    { label: "Operating Temperature", value: "-15°C to +65°C" },
    {
      label: "Communication Interface",
      value: "RJ-45 Ethernet 100 Mbps / RS-232/422 (optional)",
    },
  ],

  whyThisProduct: [
    {
      title: "Protection That Moves With You",
      description:
        "Unlike fixed-site jammers, ALFA 850V Mobile provides continuous counter-UAV coverage during vehicle movement, making it ideal for convoy and patrol missions.",
    },
    {
      title: "Discreet Tactical Profile",
      description:
        "The roof-box enclosure conceals the jamming system within a standard vehicle profile, reducing visual signature in sensitive operational environments.",
    },
    {
      title: "Faster Than Digital Competitors",
      description:
        "Analog-based scanning delivers higher frequency sweep rates, enabling faster detection and suppression of UAV threats during dynamic operations.",
    },
  ],

  operationalAdvantages: [
    {
      title: "No Fixed Infrastructure Required",
      description:
        "Deploys wherever the vehicle goes — no site preparation, power installation, or permanent mounting infrastructure needed.",
    },
    {
      title: "Per-Band Power Control",
      description:
        "Independent power modules per frequency band allow operators to activate only the bands relevant to the current threat environment.",
    },
    {
      title: "Rapid Redeployment",
      description:
        "Vehicle-integrated design enables rapid repositioning between operational areas without system teardown or reconfiguration.",
    },
  ],

  missionFit: [
    {
      title: "Military and Security Convoy Operations",
      description:
        "Designed for units requiring continuous counter-UAV coverage during vehicle movement through threat areas.",
    },
    {
      title: "VIP Protection and Escort Teams",
      description:
        "Provides persistent aerial RF denial around high-value individuals and assets during transit and events.",
    },
    {
      title: "Mobile Patrol and Rapid Response Units",
      description:
        "Enables patrol teams to bring counter-UAV capability to any location without advance site preparation.",
    },
  ],

  deploymentModels: [
    {
      title: "Vehicle-Integrated Mobile Operation",
      description:
        "Primary mode — mounted to the vehicle roof for continuous protection during movement and stationary operations.",
    },
    {
      title: "Temporary Fixed Deployment",
      description:
        "Can be removed from the vehicle and deployed at a temporary fixed location using the integrated stand system.",
    },
    {
      title: "Multi-Vehicle Network",
      description:
        "Multiple units can be coordinated via RMS for synchronized coverage across a vehicle column or operational area.",
    },
  ],

  decisionSupport: [
    {
      title: "Assess Mobility Requirements",
      description:
        "Determine whether protection needs to follow vehicle movement or can be provided from a fixed installation point.",
    },
    {
      title: "Confirm Frequency Priorities",
      description:
        "Identify the UAV control, GNSS, telemetry, and video bands most relevant to the operational environment.",
    },
    {
      title: "Evaluate Power Source Options",
      description:
        "Decide whether vehicle power is sufficient or whether optional battery backup is needed for off-grid deployments.",
    },
  ],

  media: {
    hero: "/products/alfa-850v-mobile/images/hero.webp",
    heroAlt: "ALFA 850V Mobile drone jammer system antenna array open enclosure",
    gallery: [
      {
        src: "/products/alfa-850v-mobile/images/hero.webp",
        alt: "ALFA 850V Mobile drone jammer system antenna array open enclosure",
      },
      {
        src: "/products/alfa-850v-mobile/images/vip-escort-urban-counter-uav-operation.webp",
        alt: "ALFA 850V Mobile VIP escort urban counter-UAV operation",
      },
      {
        src: "/products/alfa-850v-mobile/images/convoy-border-security-winter-deployment.webp",
        alt: "ALFA 850V Mobile convoy border security winter deployment",
      },
      {
        src: "/products/alfa-850v-mobile/images/critical-infrastructure-protection-mobile-jammer.webp",
        alt: "ALFA 850V Mobile critical infrastructure protection deployment",
      },
    ],
    videos: [
      {
        title: "ALFA 850V Mobile System Overview",
        file: "/products/alfa-850v-mobile/videos/hero.mp4",
        poster: "/products/alfa-850v-mobile/images/hero.webp",
        isHero: true,
      },
      {
        title: "Vehicle Integration Demo",
        file: "/products/alfa-850v-mobile/videos/operation.mp4",
        poster: "/products/alfa-850v-mobile/images/convoy-border-security-winter-deployment.webp",
      },
    ],
    documents: [
      {
        title: "Technical Specifications",
        file: "/products/alfa-850v-mobile/docs/datasheet.pdf",
        kind: "pdf",
      },
      {
        title: "Use Case & Advantages",
        file: "/products/alfa-850v-mobile/docs/use-case.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title:
      "ALFA 850V Mobile Drone Jammer | RDN Technology",
    description:
      "ALFA 850V Mobile is a vehicle roof-mounted drone-UAV jammer delivering 360° counter-UAV protection during mobile operations, convoy security, and tactical deployments. 850W RF output, 430 MHz–6 GHz coverage.",
  },
};
