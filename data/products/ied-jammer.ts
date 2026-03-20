import type { Product } from "../products";

export const iedJammer: Product = {
  slug: "ied-jammer",
  name: "IED Jammer Remote Controlled Bomb Devices Blocking System",
  category: "Electronic Warfare",
  productType: "IED and Remote-Controlled Bomb Blocking System",

  tagline:
    "Receiver-blind technology — neutralize remote-controlled IED triggers across all known threat frequencies without wide-band RF interference.",

  shortDescription:
    "An advanced IED blocking system that neutralizes remote-controlled bomb triggers across 315/433 MHz RF, LoRa, PMR/VHF/UHF, GSM, and GNSS frequencies. Unlike conventional jammers, it blinds only the receiver for extended range at lower power.",

  description:
    "The Alfasis IED Jammer is a purpose-built countermeasure system designed to neutralize remote-controlled and drone-triggered improvised explosive devices. Developed using real-world threat intelligence from operations in Turkey and Syria, it covers all known IED trigger frequencies including short-range RF, LoRa, PMR/VHF/UHF handheld radios, GSM, and GNSS. Its proprietary receiver-blinding technology — rather than broad RF jamming — delivers extended operational range at significantly lower power output while minimizing collateral RF interference.",

  overview:
    "The IED Jammer addresses the full spectrum of remote detonation methods documented in real operational environments: 315/433 MHz market-available RF controls, Alpha Fire and Arf-27 fireworks detonators, LoRa ISM system modules, DTMF-controlled VHF/UHF and PMR radios, GSM telephone triggers, and GNSS-location detonation systems. Unlike conventional jammers that pollute the entire RF spectrum, the Alfasis system blinds only the IED receiver — enabling longer effective range with lower power and reduced interference with friendly communications. Available in fixed, vehicle-mounted, and multiple portable configurations scalable from 100 m to 1 km.",

  featured: false,

  features: [
    {
      title: "Receiver-Blind Technology",
      description:
        "Rather than jamming both transmitter and receiver signals like conventional systems, the IED Jammer blinds only the IED receiver — achieving longer effective range at lower RF power with minimal collateral interference.",
    },
    {
      title: "Full IED Trigger Frequency Coverage",
      description:
        "Covers all documented IED trigger methods: 315/433 MHz RF controls, Alpha Fire, Arf-27, LoRa ISM modules, PMR/VHF/UHF handheld radios, DTMF-controlled systems, GSM telephone triggers, and GNSS detonation.",
    },
    {
      title: "Real-World Threat Intelligence",
      description:
        "System design is based on frequency and device data obtained directly from operations and seized IED components in Turkey and Syria, ensuring coverage of actual deployed threat methods.",
    },
    {
      title: "Programmable RF Band Blocking",
      description:
        "Supports programmed blocking of new and emerging threat RF bands, allowing the system to be updated as adversary IED triggering methods evolve.",
    },
    {
      title: "Multiple Deployment Configurations",
      description:
        "Available as a fixed facility protection system, vehicle roof-rack convoy system, and battery-powered portable units with ranges from 100 m to 1 km for operation and intervention teams.",
    },
    {
      title: "Low RF Pollution",
      description:
        "Receiver-blinding architecture avoids wide-band RF pollution, allowing friendly communications equipment to operate normally in the protection zone.",
    },
  ],

  useCases: [
    "Fixed building and facility IED protection",
    "Military convoy and vehicle column protection",
    "Special operations team portable protection",
    "VIP and high-value asset escort operations",
    "Border crossing and checkpoint security",
    "EOD and bomb disposal team protection",
    "Event security and public gathering protection",
    "Forward operating base perimeter defense",
  ],

  specifications: [
    { label: "System Type", value: "IED and Remote-Controlled Bomb Blocking System" },
    { label: "Technology", value: "Receiver-blinding (not broadband jamming)" },
    {
      label: "Covered Frequencies",
      value: "315/433 MHz RF, LoRa ISM, PMR/VHF/UHF, GSM, GNSS",
    },
    { label: "Power Supply", value: "220V AC / 50 Hz (fixed); battery (portable)" },
    { label: "Power Consumption", value: "2 kW maximum" },
    { label: "Dimensions", value: "W: 60 cm x L: 60 cm x D: 60 cm" },
    { label: "Weight", value: "40 kg maximum" },
    {
      label: "Deployment Variants",
      value: "Fixed / Vehicle roof-rack / Portable 1 km / Portable 250-300 m / Portable 100 m",
    },
    {
      label: "Communication Interface",
      value: "RJ-45 Ethernet 100 Mbps / RS-232/422 (optional)",
    },
  ],

  whyThisProduct: [
    {
      title: "Built from Real Threat Data",
      description:
        "Unlike systems built on theoretical threat models, the IED Jammer was designed using actual frequency and device intelligence from seized IED components in Turkey and Syria.",
    },
    {
      title: "More Range, Less Power",
      description:
        "Receiver-blinding technology achieves longer effective range than conventional jammers at significantly lower RF power output.",
    },
    {
      title: "Scalable Across All Mission Types",
      description:
        "From permanent facility protection to portable 100 m coverage for intervention teams, the system scales to fit any operational scenario.",
    },
  ],

  operationalAdvantages: [
    {
      title: "No Wide-Band RF Pollution",
      description:
        "Friendly communications, navigation, and electronics operate normally within the protection zone — critical for complex team operations.",
    },
    {
      title: "Covers Evolving Threat Methods",
      description:
        "Programmed RF band blocking allows the system to be updated as adversaries adopt new IED trigger technologies including IR, laser, and sensor-based methods.",
    },
    {
      title: "Flexible Power Options",
      description:
        "Fixed AC-powered units for facilities; battery-powered portable units for field teams operating without grid power.",
    },
  ],

  missionFit: [
    {
      title: "Military and Special Operations Units",
      description:
        "Provides scalable IED protection for fixed bases, convoys, and portable field use across all operational range requirements.",
    },
    {
      title: "EOD and Bomb Disposal Teams",
      description:
        "Protects personnel during approach, inspection, and neutralization of suspected IED devices by blinding remote trigger receivers.",
    },
    {
      title: "Critical Facility and Event Security",
      description:
        "Fixed and portable variants protect government buildings, public events, and high-value venues from remote-detonated explosive threats.",
    },
  ],

  deploymentModels: [
    {
      title: "Fixed Facility Protection",
      description:
        "Permanent installation at buildings, checkpoints, and facilities covering Arf-27, Alpha Fire, LoRa, PMR, VHF/UHF, GNSS, and GSM trigger methods.",
    },
    {
      title: "Vehicle Roof-Rack Convoy System",
      description:
        "Mounted to vehicle roof racks for continuous IED protection during convoy movement through threat areas.",
    },
    {
      title: "Portable Field Units",
      description:
        "Battery-powered units in three range classes: 1 km for operation teams, 250-300 m for tactical teams, and 100 m for close-range intervention.",
    },
  ],

  decisionSupport: [
    {
      title: "Identify the Primary Mission Type",
      description:
        "Determine whether the primary need is fixed facility protection, convoy protection, or portable team protection — each requires a different deployment variant.",
    },
    {
      title: "Assess the Threat Frequency Profile",
      description:
        "Confirm which IED trigger methods are most relevant to the operational environment to ensure correct band configuration.",
    },
    {
      title: "Define the Required Protection Range",
      description:
        "Select the appropriate portable variant (100 m, 250-300 m, or 1 km) based on operational standoff distance requirements.",
    },
  ],

  media: {
    hero: "/products/ied-jammer/images/hero.webp",
    heroAlt: "IED Jammer remote controlled bomb blocking system — product and road deployment scenario",
    gallery: [
      {
        src: "/products/ied-jammer/images/hero.webp",
        alt: "IED Jammer system overview with road IED blocking scenario",
      },
      {
        src: "/products/ied-jammer/images/facility-ied-protection-rf-blocking-dome.webp",
        alt: "IED Jammer facility and critical infrastructure RF shielding dome protection",
      },
    ],
    videos: [
      {
        title: "IED Jammer System Overview",
        file: "/products/ied-jammer/videos/hero.mp4",
        poster: "/products/ied-jammer/images/hero.webp",
        isHero: true,
      },
    ],
    documents: [
      {
        title: "Technical Specifications",
        file: "/products/ied-jammer/docs/datasheet.pdf",
        kind: "pdf",
      },
      {
        title: "Use Case & Advantages",
        file: "/products/ied-jammer/docs/use-case.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title:
      "IED Jammer | Remote Controlled Bomb Devices Blocking System",
    description:
      "The Alfasis IED Jammer neutralizes remote-controlled IED triggers across 315/433 MHz RF, LoRa, PMR/VHF/UHF, GSM, and GNSS. Receiver-blind technology for extended range. Fixed, vehicle, and portable variants.",
  },
};
