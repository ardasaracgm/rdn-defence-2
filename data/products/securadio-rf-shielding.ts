import type { Product } from "../products";

export const securadioRfShielding: Product = {
  slug: "securadio",
  name: "SECURADIO Advanced Radio Frequency Shielding System",
  category: "Electronic Warfare",
  productType: "Advanced Radio Frequency Shielding System",

  tagline:
    "Hertz-precision RF shielding for critical institutions — block unauthorized radio communication without disrupting legitimate signals.",

  shortDescription:
    "An advanced radio frequency shielding system designed to suppress unauthorized AM/FM and HF radio communication in critical facilities, with 1 Hz frequency precision and minimal bandwidth impact on legitimate channels.",

  description:
    "SECURADIO is a high-precision radio frequency shielding system developed by Alfasis for critical institutions requiring protection against unauthorized radio communication. Operating across the 5 MHz to 12 MHz frequency range with up to 35W RF output, it blocks specific broadcast channels at 1 Hz resolution — suppressing illegal or threat-carrying transmissions while leaving authorized frequencies fully operational. Its compact desktop form factor and indoor-deployable antenna eliminate the need for exposed external installations.",

  overview:
    "SECURADIO addresses a specific and underserved threat: unauthorized handheld radio use within critical institutions, and external RF transmissions carrying terrorist propaganda or covert messaging. Unlike broadband jammers, SECURADIO targets only the required frequency range with minimum bandwidth, preserving legitimate communications and maximizing energy efficiency. UPS and battery backup guarantee uninterrupted operation during power outages, while optional FM band blocking and remote monitoring extend its capability to a full-spectrum communication security platform.",

  featured: false,

  features: [
    {
      title: "1 Hz Frequency Precision",
      description:
        "Capable of blocking a range as narrow as a single Hertz — enabling surgical suppression of specific threat frequencies without affecting adjacent channels.",
    },
    {
      title: "Minimum Bandwidth Blocking",
      description:
        "Blocks only the required bandwidth for each target frequency, preventing unnecessary interference with neighboring channels and maximizing the usability of the RF spectrum.",
    },
    {
      title: "Indoor Antenna Deployment",
      description:
        "Short-range blocking capability eliminates the need for exposed outdoor antenna installations. The device and antenna can be positioned inside the building or on the rooftop.",
    },
    {
      title: "UPS & Battery Backup Operation",
      description:
        "220V AC operation with integrated UPS and battery support guarantees continuous shielding even during power outages — critical for facilities that cannot tolerate gaps in RF protection.",
    },
    {
      title: "Adjustable Frequency Selection",
      description:
        "Operators can manually configure specific frequency ranges to block, ensuring only targeted channels are suppressed while all other communications remain unaffected.",
    },
    {
      title: "AM & FM Band Coverage",
      description:
        "Blocks all AM radio broadcasts within specified frequencies. Optional FM band blocking extends coverage to the full broadcast radio spectrum.",
    },
    {
      title: "Energy-Optimized RF Architecture",
      description:
        "Optimized power consumption using only required bandwidth modulations reduces energy use while maintaining maximum shielding effectiveness.",
    },
    {
      title: "Remote Monitoring & Control",
      description:
        "Optional remote monitoring and control interface enables centralized management of the shielding system from a secure operator location.",
    },
  ],

  useCases: [
    "Prison and detention facility communication control",
    "Government and military headquarters RF protection",
    "Critical infrastructure and energy facility security",
    "Court and judicial facility communication shielding",
    "Intelligence and security agency premises protection",
    "High-security conference and diplomatic venue shielding",
    "Counter-propaganda RF blocking at sensitive installations",
    "Insider threat radio communication prevention",
  ],

  specifications: [
    { label: "System Type", value: "Advanced Radio Frequency Shielding System" },
    { label: "Operational Role", value: "Unauthorized radio communication suppression" },
    { label: "Frequency Range", value: "5,000 kHz (5 MHz) to 12,000 kHz (12 MHz)" },
    { label: "Frequency Precision", value: "1 Hz step resolution" },
    { label: "RF Output Power", value: "35 W maximum" },
    { label: "Power Supply", value: "220V AC / 50 Hz (UPS and battery backup included)" },
    { label: "Power Consumption", value: "1 kW maximum" },
    { label: "Dimensions", value: "W: 47.5 cm x H: 20.5 cm x D: 39.5 cm" },
    { label: "Weight", value: "8 kg maximum" },
    { label: "Antenna Deployment", value: "Indoor / rooftop (no outdoor installation required)" },
    { label: "Modulation", value: "AM (Amplitude Modulation); FM optional" },
    { label: "Optional Features", value: "FM Band Blocking, Remote Monitoring and Control Interface" },
  ],

  whyThisProduct: [
    {
      title: "Surgical Precision — Not Broad Jamming",
      description:
        "SECURADIO blocks only what needs to be blocked. Its 1 Hz resolution and minimum bandwidth approach preserve legitimate communications that broadband jammers would disrupt.",
    },
    {
      title: "No Outdoor Exposure Risk",
      description:
        "Indoor antenna deployment removes the security vulnerability of exposed external antenna installations, making the system safer and easier to deploy in sensitive environments.",
    },
    {
      title: "Uninterrupted Protection",
      description:
        "UPS and battery backup ensure zero coverage gaps — SECURADIO keeps shielding active even when facility power is interrupted.",
    },
  ],

  operationalAdvantages: [
    {
      title: "Stops Insider Threats at the Source",
      description:
        "Neutralizes unauthorized handheld radio use by personnel or visitors inside critical facilities before information can be extracted or redirected.",
    },
    {
      title: "Blocks External Propaganda Transmissions",
      description:
        "Effective against long-range radio broadcasts carrying terrorist propaganda or covert messages directed at individuals within the facility.",
    },
    {
      title: "Compact and Discreet",
      description:
        "Desktop form factor (8 kg maximum) allows installation in standard equipment rooms without dedicated infrastructure or specialized mounting.",
    },
  ],

  missionFit: [
    {
      title: "Prison and Detention Facility Operators",
      description:
        "Prevents unauthorized radio communication between inmates and external contacts, eliminating a critical security vulnerability.",
    },
    {
      title: "Government and Intelligence Agencies",
      description:
        "Protects classified premises from RF-based information extraction and external radio influence operations.",
    },
    {
      title: "Critical Infrastructure Security Teams",
      description:
        "Shields energy facilities, communication hubs, and strategic installations from unauthorized radio-based coordination and propaganda.",
    },
  ],

  deploymentModels: [
    {
      title: "Indoor Fixed Installation",
      description:
        "Primary mode — installed in equipment rooms or control centers with indoor antenna for building-wide RF shielding.",
    },
    {
      title: "Rooftop Antenna Deployment",
      description:
        "Antenna positioned on rooftop for expanded coverage area while keeping the main unit securely indoors.",
    },
    {
      title: "Multi-Unit Campus Coverage",
      description:
        "Multiple units with optional remote monitoring for coordinated RF shielding across large facility campuses.",
    },
  ],

  decisionSupport: [
    {
      title: "Identify the Target Frequency Threats",
      description:
        "Determine which specific frequency ranges require blocking — AM broadcast bands, HF transmissions, or unauthorized handheld radio channels.",
    },
    {
      title: "Assess Facility Coverage Needs",
      description:
        "Determine whether single-unit indoor deployment is sufficient or whether multi-unit configuration is needed for the facility footprint.",
    },
    {
      title: "Evaluate Optional Features",
      description:
        "Consider whether FM band blocking and remote monitoring are required based on the threat profile and operational management structure.",
    },
  ],

  media: {
    hero: "/products/securadio/images/hero.webp",
    heroAlt: "SECURADIO advanced radio frequency shielding system unit",
    gallery: [
      {
        src: "/products/securadio/images/hero.webp",
        alt: "SECURADIO advanced radio frequency shielding system",
      },
      {
        src: "/products/securadio/images/critical-facility-rf-shielding-dome-protection.webp",
        alt: "SECURADIO RF shielding dome protecting critical facilities from unauthorized radio signals",
      },
    ],
    videos: [
      {
        title: "SECURADIO System Overview",
        file: "/products/securadio/videos/hero.mp4",
        poster: "/products/securadio/images/hero.webp",
        isHero: true,
      },
      {
        title: "UHF/VHF Connection Blocker Demo",
        file: "/products/securadio/videos/uhf-vhf-blocker.mp4",
        poster: "/products/securadio/images/critical-facility-rf-shielding-dome-protection.webp",
      },
      {
        title: "Technical Overview",
        file: "/products/securadio/videos/technical.mp4",
        poster: "/products/securadio/images/hero.webp",
      },
    ],
    documents: [
      {
        title: "Technical Specifications",
        file: "/products/securadio/docs/datasheet.pdf",
        kind: "pdf",
      },
      {
        title: "Use Case & Advantages",
        file: "/products/securadio/docs/use-case.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title:
      "SECURADIO RF Shielding | RDN Technology",
    description:
      "SECURADIO is a precision radio frequency shielding system for critical institutions. 1 Hz blocking resolution, 5-12 MHz range, 35W RF output, indoor deployment. Stops unauthorized AM/FM radio communication.",
  },
};
