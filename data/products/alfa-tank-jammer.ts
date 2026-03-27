import type { Product } from "../products";

export const alfaTankJammer: Product = {
  slug: "alfa-tank",
  name: "ALFA TANK Drone-UAV Jammer System",
  category: "Electronic Warfare",
  productType: "Armored Vehicle & Tank-Integrated Counter-UAV Jammer",

  tagline:
    "Tank-integrated counter-UAV protection engineered for armored platforms and frontline operations.",

  shortDescription:
    "A purpose-built drone-UAV jammer system designed for direct integration onto tanks and armored vehicles, delivering 360° RF suppression against hostile UAVs in active combat and high-threat environments.",

  description:
    "ALFA TANK is a specialized electronic warfare system custom-engineered for integration onto armored vehicles and main battle tanks. Drawing from the proven ALFA jammer platform, it is adapted for the extreme demands of armored operations — including DC 24V vehicle power, ruggedized enclosure, and 360° omnidirectional coverage. The system neutralizes hostile UAVs used for surveillance, target acquisition, and loitering munition attacks, transforming any armored platform into a mobile electronic shield.",

  overview:
    "ALFA TANK addresses the growing threat of UAV-based surveillance, loitering munitions, and coordinated drone attacks against armored formations. Its compact, low-profile enclosure integrates directly onto tank turrets and armored vehicle hulls without interfering with primary weapon systems or crew operations. With 3-second activation, 500W RF output across 400 MHz to 6 GHz, and optional integration with RF detection and IR tracking systems, ALFA TANK provides commanders with both passive protection and active electronic dominance on the battlefield.",

  featured: false,

  features: [
    {
      title: "Armored Platform Integration",
      description:
        "Compact ruggedized enclosure (60 × 60 × 60 cm) designed for direct mounting on tank turrets and armored vehicle hulls without structural modification or interference with primary systems.",
    },
    {
      title: "DC 24V Vehicle Power",
      description:
        "Powered directly from the armored vehicle's onboard 24V DC electrical system, eliminating the need for external power sources or generators in the field.",
    },
    {
      title: "360° Omnidirectional Coverage",
      description:
        "High-gain omnidirectional antennas (min. 9 dBi) with 60° elevation angle provide full-sphere protection around the vehicle while stationary or maneuvering.",
    },
    {
      title: "Rapid 3-Second Activation",
      description:
        "Full jamming output is reached within 3 seconds of activation, enabling immediate countermeasures in fast-developing combat scenarios.",
    },
    {
      title: "Anti-GNSS Protected Jamming",
      description:
        "Capable of blocking GNSS modules protected by anti-jamming receivers, neutralizing advanced drone navigation systems including GPS-guided loitering munitions.",
    },
    {
      title: "Frequency Segmentation Architecture",
      description:
        "Per-band signal and power systems enable independent frequency control, allowing operators to target specific UAV bands without affecting other electronic systems.",
    },
    {
      title: "Detection & Tracking System Integration",
      description:
        "Can be integrated with RF detection units, IR cameras, and other threat detection systems for automated identification, tracking, and targeted jamming.",
    },
    {
      title: "Reduced Harmonic Propagation",
      description:
        "Integrated filter system minimizes RF harmonic emissions outside active bands, protecting vehicle electronics and crew communications from interference.",
    },
  ],

  useCases: [
    "Main battle tank counter-UAV protection",
    "Armored personnel carrier and IFV integration",
    "Armored convoy and column protection",
    "Frontline and forward operating base defense",
    "Urban warfare and close-combat environments",
    "Loitering munition and kamikaze drone defense",
    "Reconnaissance and surveillance UAV denial",
    "Combined arms maneuver protection",
  ],

  specifications: [
    { label: "System Type", value: "Armored Vehicle / Tank-Integrated Jammer" },
    { label: "Platform", value: "Tank turret / armored vehicle hull mount" },
    { label: "Operational Mode", value: "Mobile / Stationary" },
    { label: "Coverage", value: "360° omnidirectional, 60° elevation" },
    { label: "RF Output Frequencies", value: "400 MHz – 6 GHz" },
    { label: "RF Output Power", value: "500 W total output" },
    { label: "Power Supply", value: "24 VDC (vehicle power)" },
    { label: "Power Consumption", value: "≤ 2 kW" },
    { label: "Activation Time", value: "≤ 3 seconds to full output" },
    { label: "Dimensions", value: "W: 60 cm × H: 60 cm × D: 60 cm" },
    { label: "Weight", value: "≤ 80 kg" },
    { label: "Antenna Type", value: "High-gain omnidirectional (min. 9 dBi)" },
    { label: "Operating Temperature", value: "-15°C to +65°C" },
    { label: "Operating Humidity", value: "10% – 80% non-condensing" },
    {
      label: "Communication Interface",
      value: "RJ-45 Ethernet 100 Mbps / RS-232/422 (optional)",
    },
  ],

  whyThisProduct: [
    {
      title: "Built for the Battlefield",
      description:
        "Unlike civilian or infrastructure-grade jammers, ALFA TANK is designed for the electrical, mechanical, and environmental demands of armored combat operations.",
    },
    {
      title: "Defends Against the Most Dangerous Threats",
      description:
        "Specifically addresses loitering munitions, kamikaze drones, and reconnaissance UAVs — the threat types that pose the highest risk to armored formations in modern warfare.",
    },
    {
      title: "No External Power Required",
      description:
        "Direct 24V DC integration means the system operates immediately from vehicle power with no generator, no delay, and no additional logistics burden.",
    },
  ],

  operationalAdvantages: [
    {
      title: "Electronic Dominance on the Battlefield",
      description:
        "Denies enemy UAVs the ability to operate near friendly forces, contributing to electronic superiority and improved situational awareness for commanders.",
    },
    {
      title: "On-the-Move Protection",
      description:
        "Unlike fixed systems, ALFA TANK provides continuous counter-UAV coverage during vehicle maneuver through high-risk zones and contested areas.",
    },
    {
      title: "Scalable Fleet Integration",
      description:
        "Optional RMS software supports coordinated control across multiple vehicles, enabling synchronized counter-UAV coverage for entire armored formations.",
    },
  ],

  missionFit: [
    {
      title: "Armored Unit Commanders",
      description:
        "Provides persistent counter-UAV protection for tank crews and armored formations operating in UAV-contested environments.",
    },
    {
      title: "Combined Arms and Maneuver Forces",
      description:
        "Integrates into combined arms formations to provide electronic protection alongside kinetic capabilities.",
    },
    {
      title: "Defense Procurement Programs",
      description:
        "Suitable for procurement programs seeking to retrofit existing armored fleets with counter-UAV capability without full vehicle modification.",
    },
  ],

  deploymentModels: [
    {
      title: "Tank Turret Integration",
      description:
        "Primary mode — mounted on the turret of main battle tanks for full 360° coverage during combat operations.",
    },
    {
      title: "Armored Vehicle Hull Mount",
      description:
        "Suitable for APCs, IFVs, and other armored vehicles where turret mounting is not available.",
    },
    {
      title: "Layered Armored Formation Defense",
      description:
        "Multiple units deployed across a vehicle formation with optional RMS coordination for overlapping coverage and gap elimination.",
    },
  ],

  decisionSupport: [
    {
      title: "Identify the Primary Threat Profile",
      description:
        "Determine whether the primary threat is surveillance UAVs, loitering munitions, or coordinated drone swarms — this affects band priority configuration.",
    },
    {
      title: "Assess Vehicle Compatibility",
      description:
        "Confirm mounting options, 24V DC power availability, and available hull/turret space on the target platform.",
    },
    {
      title: "Evaluate Detection Integration Needs",
      description:
        "Consider whether integration with RF detection or IR tracking systems is required for automated threat response.",
    },
  ],

  media: {
    hero: "/products/alfa-tank/images/hero.webp",
    heroAlt: "ALFA TANK armored vehicle counter-UAV jammer system unit",
    gallery: [
      {
        src: "/products/alfa-tank/images/hero.webp",
        alt: "ALFA TANK counter-UAV jammer system unit",
      },
      {
        src: "/products/alfa-tank/images/armored-column-counter-uav-rf-jamming.webp",
        alt: "ALFA TANK armored column counter-UAV RF jamming operation",
      },
      {
        src: "/products/alfa-tank/images/tank-counter-uav-rf-beam-night-operation.webp",
        alt: "ALFA TANK counter-UAV RF beam night battlefield operation",
      },
      {
        src: "/products/alfa-tank/images/tank-electronic-shield-drone-neutralization.webp",
        alt: "ALFA TANK electronic shield drone neutralization",
      },
      {
        src: "/products/alfa-tank/images/tank-360-protection-dome-desert-battlefield.webp",
        alt: "ALFA TANK 360 degree RF protection dome desert battlefield",
      },
    ],
    videos: [
      {
        title: "ALFA TANK System Overview",
        file: "/products/alfa-tank/videos/hero.mp4",
        poster: "/products/alfa-tank/images/hero.webp",
        isHero: true,
      },
    ],
    documents: [
      {
        title: "Technical Specifications",
        file: "/products/alfa-tank/docs/datasheet.pdf",
        kind: "pdf",
      },
      {
        title: "Use Case & Advantages",
        file: "/products/alfa-tank/docs/use-case.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title:
      "ALFA TANK Drone-UAV Jammer | RDN Technology",
    description:
      "ALFA TANK is a purpose-built drone-UAV jammer for tanks and armored vehicles. 500W RF output, 400 MHz–6 GHz, 24V DC integration, 360° coverage. Counter-UAV protection for frontline armored operations.",
  },
};
