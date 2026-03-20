import type { Product } from "../products";

export const alfaNavalJammer: Product = {
  slug: "alfa-naval",
  name: "ALFA NAVAL Drone-UAV Jammer System",
  category: "Electronic Warfare",
  productType: "Vessel-Mounted Marine Counter-UAV Jammer",

  tagline:
    "Vessel-integrated counter-UAV protection engineered for naval ships, patrol boats, and maritime platforms.",

  shortDescription:
    "A purpose-built marine drone-UAV jammer system designed for integration onto naval vessels and sea platforms, delivering 360° RF suppression against hostile UAVs in maritime patrol, coastal defense, and port security operations.",

  description:
    "ALFA NAVAL is a specialized electronic warfare system engineered for seamless integration with naval ships, patrol boats, and maritime platforms. Built on the proven ALFA jammer platform and adapted for the demanding marine environment, it delivers 500W RF suppression across 400 MHz to 6 GHz with full 360° coverage. The system neutralizes hostile UAVs used for aerial surveillance, loitering munition attacks, and coordinated drone operations in coastal and open-sea environments.",

  overview:
    "ALFA NAVAL transforms any vessel into a mobile electronic shield against UAV threats. Its weather-resistant marine-grade enclosure integrates directly onto ship decks and superstructures, operating continuously in salt air, high humidity, and open-sea conditions. With dual power compatibility (220V AC or optional 24V DC), the system works with both civilian vessels and military platforms. Optional integration with RF detection units and IR cameras enables automated threat identification and targeted jamming for complete maritime counter-UAV coverage.",

  featured: false,

  features: [
    {
      title: "Marine-Grade Vessel Integration",
      description:
        "Weather-resistant enclosure (800 × 1000 × 600 mm) designed for direct mounting on ship decks and superstructures, withstanding salt air, high humidity, and open-sea operating conditions.",
    },
    {
      title: "Dual Power Compatibility",
      description:
        "Operates on 220V AC ship power or optional 24V DC, enabling integration with both civilian maritime vessels and military naval platforms without additional power infrastructure.",
    },
    {
      title: "360° Omnidirectional Sea Coverage",
      description:
        "High-gain omnidirectional antennas (min. 9 dBi) with 60° elevation angle provide full-sphere protection around the vessel during patrol, transit, and stationary operations.",
    },
    {
      title: "Rapid 3-Second Activation",
      description:
        "Full jamming output within 3 seconds of activation, enabling immediate countermeasures against fast-approaching aerial threats in maritime scenarios.",
    },
    {
      title: "Anti-GNSS Protected Jamming",
      description:
        "Blocks GNSS modules protected by anti-jamming receivers, neutralizing GPS-guided loitering munitions and advanced drone navigation systems within effective range.",
    },
    {
      title: "Frequency Segmentation Architecture",
      description:
        "Per-band signal and power systems enable independent frequency control, allowing operators to target specific UAV bands without affecting vessel navigation and communication systems.",
    },
    {
      title: "Detection & Tracking Integration",
      description:
        "Integrates with RF detection units, IR cameras, and maritime threat tracking systems for automated identification, tracking, and targeted jamming in complex sea environments.",
    },
    {
      title: "Reduced Harmonic Propagation",
      description:
        "Integrated filter system minimizes RF harmonic emissions outside active bands, protecting vessel electronics, navigation equipment, and crew communications.",
    },
  ],

  useCases: [
    "Naval patrol vessel and warship protection",
    "Coast guard and maritime law enforcement",
    "Port and harbor security operations",
    "Offshore platform and energy facility defense",
    "Naval convoy and fleet escort protection",
    "Coastal defense and maritime border security",
    "VIP and high-value maritime asset escort",
    "Anti-piracy and maritime surveillance operations",
  ],

  specifications: [
    { label: "System Type", value: "Vessel-Mounted Marine Jammer" },
    { label: "Platform", value: "Naval vessel / patrol boat deck mount" },
    { label: "Operational Mode", value: "Mobile (underway) / Stationary" },
    { label: "Coverage", value: "360° omnidirectional, 60° elevation" },
    { label: "RF Output Frequencies", value: "400 MHz – 6 GHz" },
    { label: "RF Output Power", value: "500 W total output" },
    { label: "Power Supply", value: "220V AC – 50 Hz / 24 VDC (optional)" },
    { label: "Power Consumption", value: "≤ 2 kW" },
    { label: "Activation Time", value: "≤ 3 seconds to full output" },
    { label: "Dimensions", value: "800 mm × 1000 mm × 600 mm" },
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
      title: "Built for the Marine Environment",
      description:
        "Unlike land-based jammers adapted for sea use, ALFA NAVAL is purpose-engineered for the corrosive, high-humidity, and mechanically demanding conditions of maritime operations.",
    },
    {
      title: "Covers Both Military and Civilian Vessels",
      description:
        "Dual 220V AC / 24V DC power compatibility makes ALFA NAVAL suitable for coast guard vessels, naval warships, patrol boats, and commercial maritime security platforms.",
    },
    {
      title: "Complete Maritime Threat Coverage",
      description:
        "Addresses the full spectrum of maritime UAV threats — from surveillance drones and reconnaissance platforms to loitering munitions and coordinated drone swarm attacks.",
    },
  ],

  operationalAdvantages: [
    {
      title: "Protection at Sea and in Port",
      description:
        "Provides continuous counter-UAV coverage whether the vessel is underway, anchored, or docked — no operational mode changes required.",
    },
    {
      title: "No Interference with Navigation Systems",
      description:
        "Frequency segmentation and harmonic filtering protect vessel navigation, AIS, and communication equipment from jamming-related interference.",
    },
    {
      title: "Scalable Fleet Deployment",
      description:
        "Optional RMS software supports coordinated control across multiple vessels, enabling synchronized counter-UAV coverage for entire naval formations.",
    },
  ],

  missionFit: [
    {
      title: "Naval and Coast Guard Fleets",
      description:
        "Provides persistent counter-UAV protection for warships, patrol vessels, and coast guard platforms operating in UAV-contested maritime zones.",
    },
    {
      title: "Port and Harbor Security Operators",
      description:
        "Protects strategic port infrastructure, anchored vessels, and harbor facilities from aerial surveillance and attack drone threats.",
    },
    {
      title: "Offshore Energy and Maritime Infrastructure",
      description:
        "Defends offshore platforms, energy vessels, and critical maritime infrastructure against UAV-based surveillance and sabotage threats.",
    },
  ],

  deploymentModels: [
    {
      title: "Vessel Deck Integration",
      description:
        "Primary mode — mounted on ship deck or superstructure for continuous 360° coverage during patrol and transit operations.",
    },
    {
      title: "Port Security Fixed Deployment",
      description:
        "Can be deployed on dock infrastructure or stationary vessels for permanent port and harbor protection.",
    },
    {
      title: "Multi-Vessel Fleet Network",
      description:
        "Multiple units coordinated via RMS for overlapping maritime coverage across naval formations or patrol areas.",
    },
  ],

  decisionSupport: [
    {
      title: "Assess the Maritime Threat Environment",
      description:
        "Determine the primary threat types — surveillance drones, loitering munitions, or coordinated swarms — and the operational area range requirements.",
    },
    {
      title: "Confirm Vessel Power Compatibility",
      description:
        "Identify whether 220V AC ship power or 24V DC integration is required for the target platform.",
    },
    {
      title: "Evaluate Detection Integration Needs",
      description:
        "Consider whether RF detection or IR camera integration is needed for automated threat response in open-sea environments.",
    },
  ],

  media: {
    hero: "/products/alfa-naval/images/hero.webp",
    heroAlt: "ALFA NAVAL drone-UAV jammer system mounted on naval vessel",
    gallery: [
      {
        src: "/products/alfa-naval/images/hero.webp",
        alt: "ALFA NAVAL jammer system overview",
      },
      {
        src: "/products/alfa-naval/images/patrol-vessel-counter-uav-deployment.webp",
        alt: "ALFA NAVAL mounted on naval patrol vessel",
      },
      {
        src: "/products/alfa-naval/images/coastal-defense-maritime-jammer.webp",
        alt: "ALFA NAVAL coastal defense operation",
      },
      {
        src: "/products/alfa-naval/images/port-security-drone-protection.webp",
        alt: "ALFA NAVAL port and harbor security deployment",
      },
    ],
    videos: [
      {
        title: "ALFA NAVAL System Overview",
        file: "/products/alfa-naval/videos/hero.mp4",
        poster: "/products/alfa-naval/images/hero.webp",
        isHero: true,
      },
    ],
    documents: [
      {
        title: "Technical Specifications",
        file: "/products/alfa-naval/docs/datasheet.pdf",
        kind: "pdf",
      },
      {
        title: "Use Case & Advantages",
        file: "/products/alfa-naval/docs/use-case.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title:
      "ALFA NAVAL Drone-UAV Jammer | Vessel-Mounted Maritime Counter-UAV System",
    description:
      "ALFA NAVAL is a vessel-mounted drone-UAV jammer for naval ships, patrol boats, and maritime platforms. 500W RF output, 400 MHz–6 GHz, 360° coverage, 220V AC / 24V DC. Maritime counter-UAV protection.",
  },
};
