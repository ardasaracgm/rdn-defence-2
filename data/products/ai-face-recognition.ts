import type { Product } from "../products";

export const aiFaceRecognition: Product = {
  slug: "ai-face-recognition",
  name: "AI Face Recognition System",
  category: "AI Systems",
  tagline: "Real-time biometric identification in demanding conditions.",
  shortDescription:
    "Advanced facial recognition solution for defense, security, and access control.",
  description:
    "AI-powered facial recognition system designed for real-time identification, alerting, and situational awareness in security-sensitive environments.",
  overview:
    "The system is positioned for operational contexts where real-time recognition, difficult lighting conditions, watchlist integration, and large-scale security monitoring are mission-relevant. It is suitable for controlled access, surveillance, and critical facility environments.",
  cover: "/images/products/ai-face-recognition.jpg",
  gallery: ["/images/products/ai-face-recognition.jpg"],
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
    {
      title: "Operational Flexibility",
      description:
        "Applicable across defense, public safety, and critical infrastructure contexts.",
    },
    {
      title: "AI-Enhanced Monitoring",
      description:
        "Improves situational awareness by combining identification and alert support logic.",
    },
  ],
  useCases: [
    "Access control",
    "Critical facility security",
    "Public area surveillance",
    "AI-enhanced monitoring",
    "Watchlist-based alerting",
    "High-security environment monitoring",
  ],
  specifications: [
    { label: "Technology", value: "AI / Biometric Recognition" },
    { label: "Operation", value: "Real-time monitoring" },
    { label: "Deployment", value: "Security / Defense / Access Control" },
    {
      label: "Processing Logic",
      value: "Identification / alert / watchlist workflows",
    },
    { label: "Environment", value: "Indoor / outdoor security use cases" },
    { label: "Focus", value: "Identity and situational awareness" },
  ],
  documents: [{ title: "Capability Overview", url: "#" }],
  videos: [{ title: "Demo Video", url: "#" }],
  seo: {
    title: "AI Face Recognition System | DefenceTech",
    description:
      "Real-time AI facial recognition solution for defense, security, surveillance, and access control environments.",
  },
};
