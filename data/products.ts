export type ProductCategory =
  | "Electronic Warfare"
  | "Drone Systems"
  | "Airborne Systems"
  | "Detection Systems"
  | "Secure Communication"
  | "AI Systems";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  cover: string;
  featured?: boolean;
  features?: string[];
};

export const products: Product[] = [
  {
    slug: "alfa-850v-mobile-jammer",
    name: "Mobile Drone UAV Jammer System",
    category: "Electronic Warfare",
    shortDescription: "Vehicle-mounted counter-UAV jammer for mobile operations.",
    description:
      "Advanced mobile jammer system designed for convoy protection, tactical deployment, and counter-UAV missions in dynamic operational environments.",
    cover: "/images/products/alfa-850v-mobile-jammer.jpg",
    featured: true,
    features: [
      "Wide frequency coverage",
      "Vehicle integration",
      "Rapid deployment",
      "360° operational protection",
    ],
  },
  {
    slug: "vega-directional-jammer",
    name: "VEGA Multi-Band Directional Jammer",
    category: "Electronic Warfare",
    shortDescription: "Long-range directional suppression against UAV and RF threats.",
    description:
      "High-power modular jammer system with directional antenna architecture for long-range electronic warfare missions.",
    cover: "/images/products/vega-directional-jammer.jpg",
    featured: true,
    features: [
      "Directional antenna array",
      "Up to 15 bands",
      "Long-range suppression",
      "Mission-specific modular architecture",
    ],
  },
  {
    slug: "barracuda-airborne-ew",
    name: "Barracuda Airborne EW UAV",
    category: "Airborne Systems",
    shortDescription: "Airborne electronic warfare platform with ISR capability.",
    description:
      "A modular VTOL UAV designed for airborne electronic warfare, ISR, and mission-adaptive suppression in contested airspace.",
    cover: "/images/products/barracuda-airborne-ew.jpg",
    featured: true,
    features: [
      "VTOL platform",
      "ISR + EW capability",
      "Mission modularity",
      "High endurance architecture",
    ],
  },
  {
    slug: "evagate-c4i",
    name: "EvaGate Secure C4I System",
    category: "Secure Communication",
    shortDescription: "Integrated voice, data, radio, and video communication core.",
    description:
      "All-in-one secure communication and command platform for fixed, mobile, and tactical command environments.",
    cover: "/images/products/evagate-c4i.jpg",
    featured: true,
    features: [
      "AES-256 secure communication",
      "RoIP / VoIP / Video integration",
      "Redundant WAN architecture",
      "Vehicle, marine, and portable deployment",
    ],
  },
  {
    slug: "ai-face-recognition",
    name: "AI Face Recognition System",
    category: "AI Systems",
    shortDescription: "Real-time biometric identification in demanding conditions.",
    description:
      "Advanced facial recognition solution for security, defense, access control, and high-risk operational environments.",
    cover: "/images/products/ai-face-recognition.jpg",
    featured: true,
    features: [
      "Real-time recognition",
      "Low-light performance",
      "Crowd analysis",
      "Watchlist and alert integration",
    ],
  },
];
