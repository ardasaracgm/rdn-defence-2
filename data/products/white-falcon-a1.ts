import type { Product } from "../products";

export const whiteFalconA1: Product = {
  slug: "white-falcon-a1",
  name: "WHITE FALCON A1",
  category: "Drone Systems",
  productType: "High-Speed FPV Attack UAV",

  tagline: "Precision Strike at 400+ km/h",

  shortDescription:
    "Compact high-speed FPV attack drone with AI guidance module, 1 kg payload capacity, and 400+ km/h top speed for precision strike missions.",

  description:
    "White Falcon A1 is a compact, high-speed FPV attack UAV engineered for precision strike operations. Built on a carbon fiber and CNC-machined aluminum alloy frame with a 3D-printed outer shell, it combines structural resilience with rapid deployment capability. The integrated AI guidance module with 50 Hz target tracking enables autonomous pursuit of moving targets at speeds exceeding 400 km/h.",

  overview:
    "White Falcon A1 is designed for operators requiring a fast, lightweight, and highly maneuverable strike platform. Its Betaflight open-source firmware provides maximum configurability for mission profiles, while the 8S high-discharge battery system delivers the power density needed for extreme acceleration. The dual video transmission architecture — 5.8 GHz digital and 915 MHz analog — ensures continuous situational awareness throughout the engagement. The AI guidance module maintains target lock even through evasive maneuvers.",

  featured: true,

  droneQuickStats: [
    { label: "Top Speed",  value: "400+", unit: "km/h" },
    { label: "Payload",    value: "1",    unit: "kg"   },
    { label: "Range",      value: "8",    unit: "km"   },
    { label: "Altitude",   value: "1000", unit: "m"    },
    { label: "Total Weight", value: "900", unit: "g"   },
  ],

  droneMissions: [
    {
      number: "01",
      tag: "PRECISION STRIKE",
      title: "High-Speed Target Engagement",
      description:
        "Engages ground and aerial targets at speeds exceeding 400 km/h. AI guidance module locks onto targets as small as 16×16 pixels and maintains pursuit through evasive movement at 50 Hz refresh rate.",
    },
    {
      number: "02",
      tag: "AI TRACKING",
      title: "Autonomous Target Pursuit",
      description:
        "Integrated AI guidance module provides autonomous target tracking with memory capability — maintains lock even when target temporarily leaves camera field. Tracks at ±32 pixels/frame at minimum 5% contrast.",
    },
    {
      number: "03",
      tag: "NIGHT OPS",
      title: "Low-Light Operations",
      description:
        "1200 TVL low-light night vision camera with 135° field of view and NTSC/PAL adjustable output enables full operational capability in darkness and adverse visibility conditions.",
    },
  ],

  droneFlightParams: [
    { name: "Top Speed",       value: "400+", unit: "km/h", fillPercent: 100 },
    { name: "Cruise Speed",    value: "40–50",unit: "km/h", fillPercent: 12  },
    { name: "Control Range",   value: "8",    unit: "km",   fillPercent: 16  },
    { name: "Max Altitude",    value: "1000", unit: "m",    fillPercent: 100 },
    { name: "Flight Duration", value: "3–5",  unit: "min",  fillPercent: 30  },
    { name: "Payload",         value: "1",    unit: "kg",   fillPercent: 10  },
  ],

  dronePayloads: [
    {
      capacity: "1",
      unit: "KG PAYLOAD",
      name: "Strike Payload",
      description:
        "Top or bottom mounted payload bay supports up to 1 kg mission load. Payload modules interchange without airframe modification. Flight time reduces by approximately 1 minute under full payload.",
    },
    {
      capacity: "AI",
      unit: "GUIDANCE MODULE",
      name: "Target Tracking System",
      description:
        "50 Hz refresh rate AI tracking. Minimum 5% contrast threshold, ±32 pixels/frame tracking speed. Target memory capability maintains lock through temporary obstruction. Tracks targets from 16×16 to 128×128 pixels.",
    },
    {
      capacity: "1200",
      unit: "TVL CAMERA",
      name: "Night Vision Camera",
      description:
        "Low-light night vision tracking camera. 6 mm lens, 135° FOV, NTSC/PAL adjustable, 5–40V input. 5.8 GHz 2W video transmission with 915 MHz backup receiver.",
    },
  ],

  features: [
    {
      title: "400+ km/h Top Speed",
      description:
        "High-speed engagement capability minimizes target reaction time and maximizes mission success probability against mobile targets.",
    },
    {
      title: "AI Guidance Module",
      description:
        "50 Hz autonomous tracking with target memory. Pursues targets from 16×16 pixels at minimum 5% contrast through evasive maneuvers.",
    },
    {
      title: "Night Vision Camera",
      description:
        "1200 TVL low-light camera with 135° field of view enables full operational capability in zero-light conditions.",
    },
    {
      title: "8 km Control Range",
      description:
        "915 MHz receiver provides 8 km reliable control range with dual video transmission for continuous situational awareness.",
    },
    {
      title: "Dual Video System",
      description:
        "5.8 GHz 2W digital transmitter combined with 915 MHz analog receiver provides redundant video link throughout the mission.",
    },
    {
      title: "Carbon Fiber Frame",
      description:
        "Carbon fiber structure with CNC-machined aluminum alloy components and 3D-printed outer shell — high strength with easy field maintenance.",
    },
    {
      title: "Betaflight Firmware",
      description:
        "Open-source BF firmware enables full mission configurability. Supports both digital and analog video transmission systems.",
    },
    {
      title: "Compact Form Factor",
      description:
        "314 mm outer diameter, 900 g total weight. Vertical takeoff and landing. Rapid field deployment from any terrain.",
    },
  ],

  useCases: [
    "High-speed precision strike",
    "Moving target engagement",
    "Night strike operations",
    "Anti-drone intercept missions",
    "Forward reconnaissance and strike",
    "Close air support",
  ],

  specifications: [
    { label: "Model",              value: "White Falcon A1" },
    { label: "Diameter",           value: "314 mm (motor wheelbase outer)" },
    { label: "Dimensions",         value: "300 mm length × 282 mm wheelbase" },
    { label: "Empty Weight",       value: "265 g" },
    { label: "Total Weight",       value: "approx. 900 g (all equipment)" },
    { label: "Max Speed",          value: "400+ km/h" },
    { label: "Cruise Speed",       value: "40–50 km/h" },
    { label: "Payload Capacity",   value: "1 kg (top or bottom mount)" },
    { label: "Flight Duration",    value: "3–5 minutes" },
    { label: "Control Range",      value: "8 km" },
    { label: "Max Altitude",       value: "1000 m" },
    { label: "Motor",              value: "T-Motor V2808 1500KV" },
    { label: "Flight Controller",  value: "H743 Dual BMI270 / Bluetooth H7BT" },
    { label: "ESC",                value: "8S 80A" },
    { label: "Battery",            value: "8S 1500 mAh ≥110C / 8S 1100 mAh" },
    { label: "Propeller",          value: "HQ 7×12×2" },
    { label: "Video TX",           value: "5.8 GHz 2W transmitter" },
    { label: "Receiver",           value: "915 MHz" },
    { label: "Camera",             value: "1200 TVL, 135° FOV, 6 mm lens, NTSC/PAL" },
    { label: "AI Module",          value: "50 Hz, ±32 px/frame, 5% min contrast" },
    { label: "Frame",              value: "Carbon fiber + CNC aluminum alloy" },
    { label: "Firmware",           value: "Betaflight (open-source)" },
    { label: "Takeoff Method",     value: "Vertical takeoff and landing (VTOL)" },
  ],

  media: {
    hero: "/products/white-falcon-a1/images/hero.webp",
    heroAlt: "White Falcon A1 High-Speed FPV Attack UAV",
    gallery: [
      { src: "/products/white-falcon-a1/images/frame.webp",     alt: "White Falcon A1 carbon fiber frame" },
      { src: "/products/white-falcon-a1/images/ai-module.webp", alt: "White Falcon A1 AI guidance module" },
      { src: "/products/white-falcon-a1/images/camera.webp",    alt: "White Falcon A1 night vision camera" },
    ],
    videos: [
      { title: "White Falcon A1 — Mission Overview", file: "/products/white-falcon-a1/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/white-falcon-a1/docs/datasheet.pdf", kind: "pdf" },
    ],
  },

  seo: {
    title: "White Falcon A1 High-Speed FPV Attack UAV | RDN Technology",
    description:
      "White Falcon A1 is a 400+ km/h FPV attack drone with AI target tracking, 1 kg payload, 8 km range, and 1200 TVL night vision for precision strike missions.",
  },
};
