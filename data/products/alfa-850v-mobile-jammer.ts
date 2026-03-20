import type { Product } from "../products";

export const alfa850vMobileJammer: Product = {
  slug: "alfa-850v",
  name: "ALFA Drone-UAV Jammer System",
  category: "Electronic Warfare",
  productType: "Fixed-Type Omnidirectional Counter-UAV Jammer",

  tagline:
    "Fixed-site 360° counter-UAV protection with 24/7 continuous jamming capability.",

  shortDescription:
    "A fixed-type omnidirectional drone-UAV jammer system engineered for continuous 24/7 operation, delivering 360° RF suppression across all critical UAV control, GNSS, telemetry, and video frequencies.",

  description:
    "The ALFA Drone-UAV Jammer is a fixed-installation electronic warfare system designed to neutralize UAV and drone threats through broadband RF suppression. Built for permanent deployment at critical infrastructure, military installations, and sensitive facilities, the system operates continuously with rapid 3-second activation and covers all major UAV frequency bands including GNSS, control links, telemetry, and video transmission.",

  overview:
    "ALFA is best suited for organizations requiring around-the-clock counter-UAV protection at fixed sites. Its compact omnidirectional architecture provides full 360° coverage without directional adjustment, making it ideal for airports, energy facilities, military bases, ports, and critical public infrastructure. The system's analog operating principle enables significantly higher scanning speeds compared to digital alternatives, while its modular band structure allows customization to mission-specific frequency environments. Remote access management is available for centralized multi-site control.",

  featured: true,

  features: [
    {
      title: "24/7 Continuous Operation",
      description:
        "Engineered for uninterrupted outdoor deployment, the system operates day and night in all weather conditions without external cooling or heating requirements.",
    },
    {
      title: "360° Omnidirectional Coverage",
      description:
        "High-gain omnidirectional antennas (min. 4 dBi) with 60° elevation coverage provide full-sphere protection from a single installation point.",
    },
    {
      title: "Rapid 3-Second Activation",
      description:
        "The system produces and emits a jamming signal within 3 seconds of activation, ensuring near-instant protection when threats are detected.",
    },
    {
      title: "Anti-GNSS Protected Jamming",
      description:
        "Capable of suppressing encryption-protected GNSS modules and all GNSS transmitters within effective range, neutralizing even advanced drone navigation systems.",
    },
    {
      title: "High-Speed Analog Frequency Scanning",
      description:
        "Analog-based architecture scans all relevant frequency bands at 1 kHz resolution or below, providing faster threat identification than competing digital systems.",
    },
    {
      title: "Narrowband Telemetry & Video Blocking",
      description:
        "Suppresses narrowband telemetry and video transmission signals, preventing drones from relaying data or receiving remote commands.",
    },
    {
      title: "Reduced Harmonic Propagation",
      description:
        "Integrated filter system minimizes RF harmonic emissions outside target bands, allowing standard communications equipment to operate concurrently.",
    },
    {
      title: "Remote Access Management System",
      description:
        "Optional RMS software enables authorized users to monitor band status, power levels, temperatures, and VSWR values — and control individual frequency channels — from any networked location.",
    },
  ],

  useCases: [
    "Airport and airfield protection",
    "Military base and defense facility security",
    "Port and maritime infrastructure protection",
    "Power plant and energy facility defense",
    "Nuclear and industrial facility security",
    "Critical public building protection",
    "Border and perimeter fixed-site deployment",
    "Strategically important location coverage",
  ],

  specifications: [
    { label: "System Type", value: "Fixed-Type Omnidirectional Jammer" },
    { label: "Operational Role", value: "Counter-UAV / RF suppression" },
    { label: "Coverage", value: "360° omnidirectional, 60° elevation" },
    {
      label: "RF Output Frequencies",
      value: "430 MHz, 860 MHz, GNSS bands, 2.4 GHz, 5.8 GHz",
    },
    { label: "RF Output Power", value: "850 W total output" },
    { label: "RF Output Impedance", value: "50 Ohm" },
    { label: "Power Supply", value: "200–240 VAC, 50/60 Hz" },
    { label: "Power Consumption", value: "≤ 2 kW" },
    { label: "Activation Time", value: "3 seconds to full jamming output" },
    { label: "Dimensions", value: "65 × 65 × 65 cm" },
    { label: "Weight", value: "< 40 kg" },
    { label: "Operating Temperature", value: "-15°C to +65°C" },
    { label: "Operating Humidity", value: "10%–80% non-condensing" },
    { label: "Storage Temperature", value: "-20°C to +65°C" },
    {
      label: "Communication Interface",
      value: "RJ-45 Ethernet 100 Mbps / RS-232/422 (optional)",
    },
    { label: "Antenna Type", value: "High-gain omnidirectional (min. 4 dBi)" },
    { label: "Effective Range", value: "Up to 4 km radius (GNSS suppression)" },
  ],

  whyThisProduct: [
    {
      title: "Built for Permanent Site Protection",
      description:
        "Designed for organizations that need always-on counter-UAV coverage at strategic locations — not just temporary or mobile deployments.",
    },
    {
      title: "Faster Than Digital Competitors",
      description:
        "Analog-based scanning architecture delivers higher frequency sweep rates, enabling faster identification and suppression of emerging UAV threats.",
    },
    {
      title: "Minimal Collateral RF Interference",
      description:
        "Harmonic suppression filters allow phones, radios, and other communications equipment to remain operational while the jammer is active.",
    },
  ],

  operationalAdvantages: [
    {
      title: "No Directional Adjustment Required",
      description:
        "Full 360° omnidirectional coverage eliminates the need to orient the system toward the threat, reducing operator workload and response time.",
    },
    {
      title: "Scalable Multi-Site Management",
      description:
        "Optional RMS software supports centralized control of multiple jammer units across different sites from a single operator interface.",
    },
    {
      title: "Modular Frequency Configuration",
      description:
        "Band structure can be customized to regional frequency profiles and site-specific threat environments without hardware replacement.",
    },
  ],

  missionFit: [
    {
      title: "Critical Infrastructure Operators",
      description:
        "Ideal for airports, energy facilities, ports, and public buildings requiring permanent, unattended counter-UAV protection.",
    },
    {
      title: "Military and Government Installations",
      description:
        "Suitable for fixed-base defense programs where continuous 360° RF denial around high-value assets is a standing requirement.",
    },
    {
      title: "Industrial and Nuclear Facility Security",
      description:
        "Matches the needs of hazardous-site operators where persistent aerial threat suppression is essential and manual response is not practical.",
    },
  ],

  deploymentModels: [
    {
      title: "Fixed-Site Permanent Installation",
      description:
        "Primary deployment mode — installed at strategic locations for continuous, unattended counter-UAV coverage.",
    },
    {
      title: "Perimeter Defense Node",
      description:
        "Can be positioned as one node within a multi-point perimeter protection network, with coordinated control via RMS.",
    },
    {
      title: "Layered Security Integration",
      description:
        "Integrates with detection and imaging systems via Command and Control Software for a complete layered counter-UAV architecture.",
    },
  ],

  decisionSupport: [
    {
      title: "Assess the Protection Perimeter",
      description:
        "Determine the required effective radius, site geometry, and whether single or multi-unit deployment is needed.",
    },
    {
      title: "Confirm Frequency Requirements",
      description:
        "Identify UAV control, GNSS, telemetry, and video bands relevant to the threat environment in your region.",
    },
    {
      title: "Evaluate Integration Needs",
      description:
        "Consider whether centralized RMS control or integration with existing detection systems is required for your deployment.",
    },
  ],

  media: {
    hero: "/products/alfa-850v/images/hero.webp",
    heroAlt: "ALFA Drone-UAV Jammer fixed installation system",
    gallery: [
      {
        src: "/products/alfa-850v/images/hero.webp",
        alt: "ALFA Drone-UAV Jammer system overview",
      },
      {
        src: "/products/alfa-850v/images/field.webp",
        alt: "ALFA Jammer field deployment",
      },
      {
        src: "/products/alfa-850v/images/mobile.webp",
        alt: "ALFA Jammer mobile setup",
      },
      {
        src: "/products/alfa-850v/images/infrastructure.webp",
        alt: "ALFA Jammer protecting critical infrastructure",
      },
      {
        src: "/products/alfa-850v/images/tower.webp",
        alt: "ALFA Jammer tower installation",
      },
      {
        src: "/products/alfa-850v/images/military.jpg",
        alt: "ALFA Jammer military deployment",
      },
    ],
    videos: [
      {
        title: "ALFA System Overview",
        file: "/products/alfa-850v/videos/hero.mp4",
        poster: "/products/alfa-850v/images/hero.webp",
        isHero: true,
      },
      {
        title: "Operation Demonstration",
        file: "/products/alfa-850v/videos/operation.mp4",
        poster: "/products/alfa-850v/images/field.webp",
      },
      {
        title: "Technical Overview",
        file: "/products/alfa-850v/videos/technical.mp4",
        poster: "/products/alfa-850v/images/infrastructure.webp",
      },
    ],
    documents: [
      {
        title: "Technical Datasheet",
        file: "/products/alfa-850v/docs/datasheet.pdf",
        kind: "pdf",
      },
      {
        title: "User Manual",
        file: "/products/alfa-850v/docs/manuel.pdf",
        kind: "pdf",
      },
      {
        title: "Use Case Overview",
        file: "/products/alfa-850v/docs/use-case.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title:
      "ALFA Drone-UAV Jammer System | Fixed-Site 360° Counter-UAV Protection",
    description:
      "ALFA is a fixed-type omnidirectional drone-UAV jammer for 24/7 counter-UAV protection at airports, military bases, energy facilities, ports, and critical infrastructure. 850W RF output, 360° coverage, 4 km effective range.",
  },
};
