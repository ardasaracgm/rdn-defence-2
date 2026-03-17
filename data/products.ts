export type ProductCategory =
  | "Electronic Warfare"
  | "Drone Systems"
  | "Airborne Systems"
  | "Detection Systems"
  | "Secure Communication"
  | "AI Systems";

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDocument = {
  title: string;
  url: string;
};

export type ProductVideo = {
  title: string;
  url: string;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  cover: string;
  featured?: boolean;

  overview?: string;
  tagline?: string;

  gallery?: string[];
  features?: ProductFeature[];
  useCases?: string[];
  specifications?: ProductSpec[];
  documents?: ProductDocument[];
  videos?: ProductVideo[];

  seo?: {
    title: string;
    description: string;
  };
};

export const products: Product[] = [
  {
    slug: "alfa-850v-mobile-jammer",
    name: "Mobile Drone UAV Jammer System",
    category: "Electronic Warfare",
    tagline: "Vehicle-mounted counter-UAV protection for mobile operations.",
    shortDescription:
      "Vehicle-mounted counter-UAV jammer for mobile and tactical missions.",
    description:
      "Advanced mobile jammer system designed for convoy protection, tactical deployment, and counter-UAV missions in dynamic operational environments.",
    overview:
      "The system is designed for mobile operational use where rapid deployment, platform integration, and wide-area RF suppression are required. It is suitable for tactical vehicles and mission-critical field environments.",
    cover: "/images/products/alfa-850v-mobile-jammer.jpg",
    gallery: [
      "/images/products/alfa-850v-mobile-jammer.jpg",
    ],
    featured: true,
    features: [
      {
        title: "Wide Frequency Coverage",
        description:
          "Supports broad-spectrum counter-UAV suppression for operational flexibility.",
      },
      {
        title: "Vehicle Integration",
        description:
          "Designed for platform-mounted deployment on mobile tactical vehicles.",
      },
      {
        title: "Rapid Deployment",
        description:
          "Suitable for field operations requiring fast readiness and active protection.",
      },
      {
        title: "360° Operational Protection",
        description:
          "Structured to support wide-area protection during movement and static deployment.",
      },
    ],
    useCases: [
      "Convoy protection",
      "Mobile tactical deployment",
      "Critical infrastructure security",
      "Operational field missions",
    ],
    specifications: [
      { label: "Platform Type", value: "Vehicle-mounted" },
      { label: "Deployment", value: "Mobile / Tactical" },
      { label: "Coverage", value: "Wide-area RF suppression" },
      { label: "Focus", value: "Counter-UAV missions" },
    ],
    documents: [
      { title: "Product Brochure", url: "#" },
    ],
    videos: [
      { title: "Operational Video", url: "#" },
    ],
    seo: {
      title: "Mobile Drone UAV Jammer System | DefenceTech",
      description:
        "Vehicle-mounted counter-UAV jammer system for tactical and mobile deployment.",
    },
  },
  {
    slug: "vega-directional-jammer",
    name: "VEGA Multi-Band Directional Jammer",
    category: "Electronic Warfare",
    tagline: "Long-range directional suppression against UAV and RF threats.",
    shortDescription:
      "High-power directional jammer for long-range electronic warfare missions.",
    description:
      "High-power modular jammer system with directional antenna architecture for long-range electronic warfare operations.",
    overview:
      "VEGA is positioned for advanced directional RF suppression where focused effect, modular architecture, and extended operational range are required.",
    cover: "/images/products/vega-directional-jammer.jpg",
    gallery: [
      "/images/products/vega-directional-jammer.jpg",
    ],
    featured: true,
    features: [
      {
        title: "Directional Antenna Array",
        description:
          "Focused suppression architecture for controlled long-range effect.",
      },
      {
        title: "Multi-Band Operation",
        description:
          "Built for broad electronic warfare scenarios with modular band structure.",
      },
      {
        title: "Long-Range Suppression",
        description:
          "Designed to extend operational reach in demanding RF environments.",
      },
      {
        title: "Mission-Specific Modularity",
        description:
          "Flexible architecture to support varying operational requirements.",
      },
    ],
    useCases: [
      "Counter-UAV operations",
      "Strategic site protection",
      "Field electronic warfare",
      "Mission-specific RF denial",
    ],
    specifications: [
      { label: "Architecture", value: "Directional / Modular" },
      { label: "Mission Type", value: "Long-range EW" },
      { label: "Deployment", value: "Field / Fixed / Mobile" },
      { label: "Focus", value: "RF and UAV suppression" },
    ],
    documents: [{ title: "Technical Overview", url: "#" }],
    videos: [{ title: "System Demonstration", url: "#" }],
    seo: {
      title: "VEGA Multi-Band Directional Jammer | DefenceTech",
      description:
        "High-power directional jammer system for long-range electronic warfare and RF suppression.",
    },
  },
  {
    slug: "barracuda-airborne-ew",
    name: "Barracuda Airborne EW UAV",
    category: "Airborne Systems",
    tagline: "Airborne electronic warfare platform with ISR capability.",
    shortDescription:
      "A modular VTOL UAV designed for airborne electronic warfare and ISR.",
    description:
      "Barracuda is a mission-adaptive VTOL airborne platform structured for electronic warfare, surveillance, and high-value operational flexibility.",
    overview:
      "Unlike ground-only suppression systems, airborne EW platforms extend operational reach and improve line-of-sight effectiveness in complex environments.",
    cover: "/images/products/barracuda-airborne-ew.jpg",
    gallery: [
      "/images/products/barracuda-airborne-ew.jpg",
    ],
    featured: true,
    features: [
      {
        title: "VTOL Platform",
        description:
          "Supports vertical take-off and landing in constrained deployment environments.",
      },
      {
        title: "ISR + EW Capability",
        description:
          "Combines surveillance and electronic warfare within a single airborne platform.",
      },
      {
        title: "Mission Modularity",
        description:
          "Adaptable structure for changing payload and mission requirements.",
      },
      {
        title: "High Endurance Architecture",
        description:
          "Designed for persistent operational presence and mission continuity.",
      },
    ],
    useCases: [
      "Airborne electronic warfare",
      "ISR missions",
      "Convoy overwatch",
      "Counter-UAV support operations",
    ],
    specifications: [
      { label: "Platform", value: "VTOL UAV" },
      { label: "Operational Role", value: "EW / ISR" },
      { label: "Deployment", value: "Airborne" },
      { label: "Focus", value: "Mission-adaptive operations" },
    ],
    documents: [{ title: "Product Information", url: "#" }],
    videos: [{ title: "Flight Demonstration", url: "#" }],
    seo: {
      title: "Barracuda Airborne EW UAV | DefenceTech",
      description:
        "Mission-adaptive VTOL UAV for airborne electronic warfare and ISR operations.",
    },
  },
  {
    slug: "evagate-c4i",
    name: "EvaGate Secure C4I System",
    category: "Secure Communication",
    tagline: "Integrated voice, data, radio, and video communication core.",
    shortDescription:
      "All-in-one secure communication and command platform for fixed and mobile environments.",
    description:
      "EvaGate is a unified command, communication, and network core for secure voice, data, radio, and video integration across tactical and institutional deployments.",
    overview:
      "The system is designed to solve communication fragmentation by bringing radio, PBX, secure data, streaming, and WAN management into a single structured platform.",
    cover: "/images/products/evagate-c4i.jpg",
    gallery: [
      "/images/products/evagate-c4i.jpg",
    ],
    featured: true,
    features: [
      {
        title: "AES-256 Secure Communication",
        description:
          "Supports resilient and protected communication infrastructure.",
      },
      {
        title: "RoIP / VoIP / Video Integration",
        description:
          "Brings radio, phone, and video systems into one communication core.",
      },
      {
        title: "Redundant WAN Architecture",
        description:
          "Structured for failover, secure routing, and operational continuity.",
      },
      {
        title: "Multi-Platform Deployment",
        description:
          "Suitable for vehicle, marine, portable, and fixed-site use.",
      },
    ],
    useCases: [
      "Mobile command vehicles",
      "Marine communication platforms",
      "Disaster response communication",
      "Secure tactical networking",
    ],
    specifications: [
      { label: "System Type", value: "C4I / Communication Core" },
      { label: "Security", value: "AES-256 / VPN" },
      { label: "Deployment", value: "Vehicle / Marine / Portable / Fixed" },
      { label: "Focus", value: "Unified secure communication" },
    ],
    documents: [{ title: "System Brochure", url: "#" }],
    videos: [{ title: "Use Case Video", url: "#" }],
    seo: {
      title: "EvaGate Secure C4I System | DefenceTech",
      description:
        "Integrated secure communication and command platform for voice, data, radio, and video.",
    },
  },
  {
    slug: "ai-face-recognition",
    name: "AI Face Recognition System",
    category: "AI Systems",
    tagline: "Real-time biometric identification in demanding conditions.",
    shortDescription:
      "Advanced facial recognition solution for defense, security, and access control.",
    description:
      "AI-powered facial recognition system designed for real-time identification, alerting, and situational awareness in security-sensitive environments.",
    overview:
      "The system is positioned for operational contexts where real-time recognition, difficult lighting conditions, and watchlist integration are mission-relevant.",
    cover: "/images/products/ai-face-recognition.jpg",
    gallery: [
      "/images/products/ai-face-recognition.jpg",
    ],
    featured: true,
    features: [
      {
        title: "Real-Time Recognition",
        description:
          "Supports immediate facial identification and alert workflows.",
      },
      {
        title: "Low-Light Performance",
        description:
          "Designed for demanding operational and environmental conditions.",
      },
      {
        title: "Crowd Analysis",
        description:
          "Suitable for high-density security monitoring scenarios.",
      },
      {
        title: "Watchlist Integration",
        description:
          "Supports threat monitoring and controlled identity workflows.",
      },
    ],
    useCases: [
      "Access control",
      "Critical facility security",
      "Public area surveillance",
      "AI-enhanced monitoring",
    ],
    specifications: [
      { label: "Technology", value: "AI / Biometric Recognition" },
      { label: "Operation", value: "Real-time monitoring" },
      { label: "Deployment", value: "Security / Defense / Access Control" },
      { label: "Focus", value: "Identity and situational awareness" },
    ],
    documents: [{ title: "Capability Overview", url: "#" }],
    videos: [{ title: "Demo Video", url: "#" }],
    seo: {
      title: "AI Face Recognition System | DefenceTech",
      description:
        "Real-time AI facial recognition solution for defense, security, and access control environments.",
    },
  },
];
