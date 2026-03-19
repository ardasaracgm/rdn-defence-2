import type { Product } from "../products";

export const aiFaceRecognition: Product = {
  slug: "ai-face-recognition",
  name: "AI Face Recognition Platform",
  category: "AI Systems",
  productType: "Real-Time Biometric Security Platform",

  tagline:
    "Real-time biometric identification, watchlist alerting, and situational awareness for high-security environments.",

  shortDescription:
    "An AI-powered face recognition platform designed for real-time identification, threat alerting, and security operations across critical environments.",

  description:
    "The AI Face Recognition Platform is designed for real-time biometric identification, watchlist monitoring, and situational awareness in security-sensitive environments. Built for scalable deployment, it supports rapid face matching, alert workflows, and operational monitoring across fixed facilities, public spaces, and controlled access environments.",

  overview:
    "This platform is best suited for organizations that require more than basic camera analytics. It is positioned for high-security operations where identity verification, watchlist-based alerting, crowd monitoring, and low-light performance are operational priorities. The system supports defense, public safety, infrastructure, transportation, and institutional security use cases.",

  featured: true,

  features: [
    {
      title: "Real-Time Face Identification",
      description:
        "Performs fast biometric matching and identification in live operational environments.",
    },
    {
      title: "Watchlist Alerting",
      description:
        "Supports rule-based and watchlist-based alerts for individuals of interest in monitored zones.",
    },
    {
      title: "Low-Light and Challenging Scene Performance",
      description:
        "Designed for operational reliability in difficult lighting, dense environments, and dynamic movement scenarios.",
    },
    {
      title: "Crowd and Multi-Person Analysis",
      description:
        "Supports security monitoring in public spaces, entrances, checkpoints, and high-traffic environments.",
    },
    {
      title: "Access Control and Security Workflow Support",
      description:
        "Can be positioned within identity verification, entry control, and layered security operations.",
    },
    {
      title: "Scalable Platform Logic",
      description:
        "Suitable for multi-camera, multi-site, and enterprise-level deployment structures.",
    },
  ],

  useCases: [
    "Critical infrastructure security",
    "Airport and transportation hub monitoring",
    "Border and checkpoint identity verification",
    "Public safety surveillance",
    "Access control and secure entry points",
    "Watchlist-based security alerting",
  ],

  specifications: [
    { label: "System Type", value: "AI Biometric Security Platform" },
    { label: "Operational Role", value: "Identification / alerting / monitoring" },
    { label: "Recognition Logic", value: "Real-time face matching and watchlist analysis" },
    { label: "Deployment Scope", value: "Single-site to multi-site enterprise structure" },
    { label: "Environment", value: "Indoor / outdoor / controlled access / public security" },
    { label: "Core Capability", value: "Biometric identification and situational awareness" },
    { label: "Use Mode", value: "Live monitoring + alert workflow support" },
    { label: "Integration Logic", value: "Security, access, and operational workflow integration" },
  ],

  whyThisProduct: [
    {
      title: "Built for Security Operations, Not Just Analytics",
      description:
        "The platform is positioned for operational decision support, watchlist handling, and active security workflows rather than passive video review.",
    },
    {
      title: "Better Fit for High-Security Environments",
      description:
        "It supports use cases where identity confidence, low-light reliability, and alerting speed are more important than generic surveillance features.",
    },
    {
      title: "Enterprise-Ready Deployment Logic",
      description:
        "Suitable for institutions that need scalable deployment across entrances, facilities, checkpoints, and distributed locations.",
    },
  ],

  operationalAdvantages: [
    {
      title: "Faster Recognition-to-Response Flow",
      description:
        "Transforms visual detection into operational alerts, helping teams move from observation to action more quickly.",
    },
    {
      title: "Improved Monitoring in Dense Environments",
      description:
        "Supports security workflows in entrances, crowds, checkpoints, and public-facing environments where manual identification is limited.",
    },
    {
      title: "Stronger Identity Layer in Security Architecture",
      description:
        "Adds biometric context to existing surveillance and access systems, improving decision quality and control logic.",
    },
  ],

  missionFit: [
    {
      title: "Critical Facility Operators",
      description:
        "Ideal for operators securing airports, public infrastructure, energy facilities, government sites, and controlled-access environments.",
    },
    {
      title: "Security Teams Managing Identity Risk",
      description:
        "Suitable for organizations that need alert-based tracking of persons of interest and identity-focused operational visibility.",
    },
    {
      title: "Programs Requiring Scalable Security Intelligence",
      description:
        "A strong fit for deployments where biometric monitoring must scale across multiple cameras, entrances, or sites.",
    },
  ],

  deploymentModels: [
    {
      title: "Facility-Wide Monitoring",
      description:
        "Can be deployed across entrances, corridors, control points, and monitored zones within a single facility.",
    },
    {
      title: "Multi-Site Security Architecture",
      description:
        "Supports distributed deployment across multiple buildings, campuses, or operational locations.",
    },
    {
      title: "Access and Alert Layer Integration",
      description:
        "Can be positioned as a biometric layer within broader security, surveillance, and access control concepts.",
    },
  ],

  integrationCustomization: [
    {
      title: "Watchlist and Alert Rule Configuration",
      description:
        "Alert logic can be adapted according to threat categories, location sensitivity, and operational response structure.",
    },
    {
      title: "Camera and Site Integration Flexibility",
      description:
        "The platform can be aligned with different facility layouts, camera topologies, and site-specific monitoring needs.",
    },
    {
      title: "Program-Specific Security Positioning",
      description:
        "Configuration can be structured according to public safety, transportation, government, or critical infrastructure requirements.",
    },
  ],

  programReadiness: [
    {
      title: "Suitable for Institutional Rollout",
      description:
        "The platform can be evaluated as part of a broader digital security modernization program rather than as a standalone software tool.",
    },
    {
      title: "Supports Scalable Security Planning",
      description:
        "Its architecture fits programs where coverage, alerting logic, and biometric intelligence need to grow over time.",
    },
    {
      title: "Aligned with Security Operations Frameworks",
      description:
        "Well suited for users that assess technology by operational relevance, deployment fit, and long-term security value.",
    },
  ],

  decisionSupport: [
    {
      title: "Define the Monitoring Objective",
      description:
        "Start by clarifying whether the priority is watchlist alerting, secure access, public safety, or multi-site identity monitoring.",
    },
    {
      title: "Map the Operational Environment",
      description:
        "Review camera placement, lighting conditions, access points, traffic density, and monitored zones before deployment planning.",
    },
    {
      title: "Align Alerting with Response Workflow",
      description:
        "Determine how alerts should be escalated, verified, and acted upon within the broader security operation.",
    },
  ],

  media: {
    hero: "/products/ai-face-recognition/images/hero.webp",
    heroAlt: "AI face recognition platform security monitoring interface",

    gallery: [
      {
        src: "/products/ai-face-recognition/images/hero.webp",
        alt: "AI face recognition hero view",
      },
      {
        src: "/products/ai-face-recognition/images/control-room.webp",
        alt: "AI face recognition control room scenario",
      },
      {
        src: "/products/ai-face-recognition/images/checkpoint.webp",
        alt: "AI face recognition checkpoint deployment",
      },
      {
        src: "/products/ai-face-recognition/images/airport.webp",
        alt: "AI face recognition airport security scenario",
      },
      {
        src: "/products/ai-face-recognition/images/infrastructure.webp",
        alt: "AI face recognition critical infrastructure monitoring",
      },
    ],

    videos: [
      {
        title: "Platform Overview",
        file: "/products/ai-face-recognition/videos/hero.mp4",
        poster: "/products/ai-face-recognition/images/hero.webp",
        isHero: true,
      },
      {
        title: "Operational Demonstration",
        file: "/products/ai-face-recognition/videos/demo.mp4",
        poster: "/products/ai-face-recognition/images/checkpoint.webp",
      },
    ],

    documents: [
      {
        title: "Capability Overview",
        file: "/products/ai-face-recognition/docs/capability-overview.pdf",
        kind: "pdf",
      },
      {
        title: "Deployment Scenarios",
        file: "/products/ai-face-recognition/docs/deployment-scenarios.pdf",
        kind: "pdf",
      },
    ],
  },

  seo: {
    title: "AI Face Recognition Platform | Real-Time Biometric Security",
    description:
      "AI-powered face recognition platform for watchlist alerting, identity verification, access control, and critical security monitoring.",
  },
};
