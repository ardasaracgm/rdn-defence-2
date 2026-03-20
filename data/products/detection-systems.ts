import type { Product } from "../products";

/* ── Drone Jammer Systems ── */
export const droneJammer: Product = {
  slug: "drone-jammer",
  name: "DRONE JAMMER",
  category: "Detection Systems",
  productType: "Counter-UAV RF Jamming System",
  tagline: "Wide-Band UAV Neutralization System",
  shortDescription:
    "Counter-UAV jamming system that neutralizes drones by disrupting GPS, RF control signals, and video transmission across wide frequency bands.",
  description:
    "The Drone Jammer System neutralizes UAVs by jamming their GPS navigation, RF control links, and video transmission simultaneously across multiple frequency bands. Deployable in portable, vehicle-mounted, and fixed configurations, it provides effective counter-UAV protection at ranges covering critical infrastructure, military installations, and public safety perimeters.",
  overview:
    "The system is designed for organizations requiring immediate, non-kinetic UAV neutralization without collateral damage risk. Its wide-band simultaneous jamming approach forces drones into failsafe modes — hover, land, or return-to-home — depending on manufacturer programming. Remote control capability allows centralized management of multiple units across large protected areas.",
  featured: true,
  droneQuickStats: [
    { label: "GPS Block",  value: "ALL",  unit: "BANDS" },
    { label: "RF Jamming", value: "WIDE", unit: "BAND"  },
    { label: "Control",    value: "REM",  unit: "OTE"   },
    { label: "Deploy",     value: "FAST", unit: ""      },
    { label: "Mode",       value: "24/7", unit: ""      },
  ],
  droneMissions: [
    {
      number: "01",
      tag: "GPS BLOCKING",
      title: "GPS Signal Cutting",
      description:
        "Simultaneously suppresses all GNSS frequency bands — GPS, GLONASS, BeiDou, Galileo — forcing UAVs to lose navigation lock and enter failsafe mode.",
    },
    {
      number: "02",
      tag: "RF JAMMING",
      title: "RF Control Link Disruption",
      description:
        "Jams 2.4 GHz and 5.8 GHz UAV control frequencies across wide bands, severing the connection between drone and operator within effective range.",
    },
    {
      number: "03",
      tag: "VIDEO BLOCKING",
      title: "FPV & Telemetry Suppression",
      description:
        "Blocks FPV video transmission and telemetry links, preventing drones from relaying surveillance imagery or receiving updated targeting commands.",
    },
  ],
  droneFlightParams: [
    { name: "GPS Bands Covered",    value: "ALL",   unit: "GNSS",  fillPercent: 100 },
    { name: "RF Frequency Coverage",value: "WIDE",  unit: "BAND",  fillPercent: 90  },
    { name: "Activation Time",      value: "FAST",  unit: "DEPLOY",fillPercent: 95  },
    { name: "Operational Mode",     value: "24/7",  unit: "",       fillPercent: 100 },
  ],
  dronePayloads: [
    {
      capacity: "GPS",
      unit: "SIGNAL CUTTING",
      name: "GNSS Suppression",
      description: "Cuts all GNSS navigation signals — GPS, GLONASS, BeiDou, Galileo — across the protected zone.",
    },
    {
      capacity: "RF",
      unit: "SIGNAL JAMMING",
      name: "Control Link Jamming",
      description: "Wide-band RF jamming across 2.4 GHz and 5.8 GHz control and video frequencies.",
    },
    {
      capacity: "REM",
      unit: "REMOTE CONTROL",
      name: "Centralized Management",
      description: "Remote control capability for multi-unit deployment and centralized counter-UAV area management.",
    },
  ],
  features: [
    { title: "Wide Frequency Band Coverage",  description: "Simultaneously jams GPS, 2.4 GHz, 5.8 GHz, and additional UAV frequency bands in a single activation." },
    { title: "GPS Signal Cutting",            description: "Suppresses all GNSS navigation signals forcing UAVs into manufacturer-defined failsafe modes." },
    { title: "Remote Control Operation",      description: "Remotely operated from protected command positions for operator safety in high-threat environments." },
    { title: "Multiple Deployment Modes",     description: "Available in handheld, vehicle-mounted, and fixed installation configurations for flexible deployment." },
    { title: "Non-Kinetic Neutralization",    description: "Forces UAVs to land, hover, or return to operator without physical destruction — minimizing collateral risk." },
    { title: "24/7 Continuous Operation",     description: "Designed for sustained deployment at critical infrastructure and sensitive facilities." },
  ],
  useCases: [
    "Critical infrastructure protection",
    "Military base perimeter security",
    "VIP and convoy protection",
    "Airport and airspace security",
    "Public event security",
    "Border security operations",
  ],
  specifications: [
    { label: "System Type",          value: "Counter-UAV RF Jamming" },
    { label: "GPS Coverage",         value: "All GNSS bands" },
    { label: "RF Jamming Bands",     value: "Wide frequency band" },
    { label: "Control Frequencies",  value: "2.4 GHz, 5.8 GHz and additional" },
    { label: "Control Method",       value: "Remote control" },
    { label: "Deployment Modes",     value: "Handheld, vehicle-mounted, fixed" },
    { label: "Operation Mode",       value: "24/7 continuous" },
    { label: "Neutralization Method",value: "Non-kinetic RF suppression" },
  ],
  media: {
    hero: "/products/drone-jammer/images/hero.webp",
    heroAlt: "Drone Jammer System in operation",
    gallery: [
      { src: "/products/drone-jammer/images/deployment.webp",   alt: "Drone Jammer field deployment" },
      { src: "/products/drone-jammer/images/vehicle-mount.webp",alt: "Vehicle-mounted jammer configuration" },
    ],
    videos: [
      { title: "Drone Jammer — System Overview", file: "/products/drone-jammer/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/drone-jammer/docs/datasheet.pdf", kind: "pdf" },
      { title: "Use Case Overview",   file: "/products/drone-jammer/docs/use-case.pdf",   kind: "pdf" },
    ],
  },
  seo: {
    title: "Drone Jammer Counter-UAV System | RDN Technology",
    description:
      "Wide-band counter-UAV jamming system blocking GPS, RF control, and video transmission. Non-kinetic neutralization for critical infrastructure and military applications.",
  },
};

/* ── UAV Detection Radar ── */
export const uavRadar: Product = {
  slug: "uav-detection-radar",
  name: "UAV DETECTION RADAR",
  category: "Detection Systems",
  productType: "360° Counter-UAV Radar System",
  tagline: "Advanced Wide-Area UAV Detection Radar",
  shortDescription:
    "Advanced radar system capable of detecting small UAVs at extended ranges with 360° scanning, automatic tracking, and early warning capability.",
  description:
    "The UAV Detection Radar provides wide-area coverage with advanced radar technology capable of detecting even small-signature UAVs at extended ranges. 360-degree scanning with automatic target classification and tracking delivers early warning before threats reach the protected perimeter.",
  overview:
    "The system is designed for organizations requiring persistent, wide-area UAV detection without operator-intensive monitoring. Automatic target classification distinguishes UAVs from birds and other clutter, while the early warning function delivers timely alerts for engagement with counter-UAV effectors. Integration with jammer systems enables automatic detect-to-neutralize workflows.",
  featured: true,
  droneQuickStats: [
    { label: "Coverage", value: "360°", unit: ""     },
    { label: "Targets",  value: "SMALL",unit: "UAV"  },
    { label: "Warning",  value: "EARLY",unit: ""     },
    { label: "Tracking", value: "AUTO", unit: ""     },
    { label: "Mode",     value: "24/7", unit: ""     },
  ],
  droneMissions: [
    {
      number: "01",
      tag: "360° SCANNING",
      title: "Full Perimeter Coverage",
      description:
        "360-degree continuous radar scanning provides full perimeter coverage from a single installation point, detecting UAVs approaching from any direction.",
    },
    {
      number: "02",
      tag: "SMALL TARGET",
      title: "Micro-UAV Detection",
      description:
        "Advanced signal processing detects small-signature UAVs including micro and nano-class platforms that evade conventional radar systems.",
    },
    {
      number: "03",
      tag: "AUTO TRACKING",
      title: "Automatic Target Tracking",
      description:
        "Automatic target acquisition and tracking maintains continuous contact with detected UAVs, providing real-time trajectory data for engagement decision support.",
    },
  ],
  droneFlightParams: [
    { name: "Scan Coverage",      value: "360°", unit: "",       fillPercent: 100 },
    { name: "Target Class",       value: "MICRO",unit: "UAV",    fillPercent: 100 },
    { name: "Warning Speed",      value: "EARLY",unit: "",       fillPercent: 90  },
    { name: "Tracking Mode",      value: "AUTO", unit: "",       fillPercent: 100 },
  ],
  dronePayloads: [
    {
      capacity: "360°",
      unit: "SCAN COVERAGE",
      name: "Full Perimeter Radar",
      description: "Single-unit 360° radar coverage eliminates blind spots and reduces installation complexity.",
    },
    {
      capacity: "MICRO",
      unit: "UAV DETECTION",
      name: "Small Target Capability",
      description: "Advanced signal processing for detection of small and micro-class UAVs with low radar cross-section.",
    },
    {
      capacity: "AUTO",
      unit: "TRACKING",
      name: "Automatic Target Track",
      description: "Automatic UAV acquisition and continuous tracking with real-time trajectory data output.",
    },
  ],
  features: [
    { title: "360° Scanning Capacity",      description: "Full perimeter coverage from a single installation without sector gaps or dead zones." },
    { title: "Small Target Detection",       description: "Detects micro and nano-class UAVs that present minimal radar cross-section." },
    { title: "Early Warning System",         description: "Provides timely alerts before UAV threats reach the protected perimeter." },
    { title: "Automatic Tracking",           description: "Continuous target tracking provides real-time position and trajectory for engagement." },
    { title: "Effector Integration",         description: "Interfaces with jammer and kinetic counter-UAV systems for automated detect-to-neutralize workflow." },
    { title: "24/7 Persistent Operation",    description: "Continuous radar operation for uninterrupted perimeter surveillance." },
  ],
  useCases: [
    "Military base perimeter protection",
    "Airport UAV intrusion detection",
    "Critical infrastructure monitoring",
    "Naval base air surveillance",
    "VIP compound protection",
    "Border security radar coverage",
  ],
  specifications: [
    { label: "System Type",         value: "Counter-UAV detection radar" },
    { label: "Scanning Pattern",    value: "360° continuous" },
    { label: "Target Classes",      value: "Micro, small, and medium UAV" },
    { label: "Detection Capability", value: "Small-signature UAV" },
    { label: "Tracking",            value: "Automatic acquisition and tracking" },
    { label: "Warning Mode",        value: "Early warning with alert output" },
    { label: "Integration",         value: "Jammer and effector system compatible" },
    { label: "Operation",           value: "24/7 continuous" },
  ],
  media: {
    hero: "/products/uav-detection-radar/images/hero.webp",
    heroAlt: "UAV Detection Radar system installation",
    gallery: [
      { src: "/products/uav-detection-radar/images/installation.webp", alt: "Radar system installation" },
      { src: "/products/uav-detection-radar/images/display.webp",      alt: "Radar control display" },
    ],
    videos: [
      { title: "UAV Detection Radar — Overview", file: "/products/uav-detection-radar/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/uav-detection-radar/docs/datasheet.pdf", kind: "pdf" },
      { title: "Use Case Overview",   file: "/products/uav-detection-radar/docs/use-case.pdf",   kind: "pdf" },
    ],
  },
  seo: {
    title: "UAV Detection Radar System | RDN Technology",
    description:
      "360° counter-UAV radar with small target detection, automatic tracking, and early warning. Persistent wide-area coverage for military and critical infrastructure.",
  },
};

/* ── RF-Based UAV Detection ── */
export const rfDetection: Product = {
  slug: "rf-uav-detection",
  name: "RF UAV DETECTION",
  category: "Detection Systems",
  productType: "RF Spectrum UAV Detection System",
  tagline: "Passive Silent UAV Detection via RF Analysis",
  shortDescription:
    "Passive RF-based UAV detection system that identifies drones by analyzing their radio frequency emissions — silent, automatic, and real-time.",
  description:
    "The RF-Based UAV Detection System identifies and classifies UAVs by analyzing the radio frequency signatures they broadcast. Completely passive — emitting no detectable signals — it provides silent, covert protection with automatic UAV classification and real-time alerts. No radar emissions to betray the detection system's presence.",
  overview:
    "The system is best suited for organizations requiring covert UAV detection without revealing sensor positions through radar emissions. RF spectrum analysis identifies UAV control frequencies, video links, and telemetry signatures, enabling automatic classification of drone make and model in real time. Real-time alert output integrates with command and control systems for immediate operator notification.",
  featured: false,
  droneQuickStats: [
    { label: "Detection",  value: "PASS", unit: "IVE"  },
    { label: "Method",     value: "RF",   unit: "SPEC" },
    { label: "Signature",  value: "ZERO", unit: "EMIT" },
    { label: "Class",      value: "AUTO", unit: ""     },
    { label: "Alert",      value: "REAL", unit: "TIME" },
  ],
  droneMissions: [
    {
      number: "01",
      tag: "RF SPECTRUM",
      title: "Frequency Signature Analysis",
      description:
        "Continuously monitors the RF spectrum for UAV control, video, and telemetry frequencies. Identifies active drones by their unique RF emission signatures.",
    },
    {
      number: "02",
      tag: "SILENT DETECTION",
      title: "Covert Passive Operation",
      description:
        "Completely passive operation — no radar or RF emissions. The detection system's position remains undetectable to adversary electronic surveillance.",
    },
    {
      number: "03",
      tag: "AUTO CLASSIFICATION",
      title: "Real-Time UAV Classification",
      description:
        "Automatic classification identifies UAV make and model from RF signatures, enabling targeted counter-measures and threat prioritization.",
    },
  ],
  droneFlightParams: [
    { name: "Detection Method",      value: "PASSIVE", unit: "",        fillPercent: 100 },
    { name: "Emission Signature",    value: "ZERO",    unit: "",        fillPercent: 0   },
    { name: "Classification Speed",  value: "REAL",    unit: "TIME",    fillPercent: 95  },
    { name: "Alert Response",        value: "AUTO",    unit: "",        fillPercent: 100 },
  ],
  dronePayloads: [
    {
      capacity: "RF",
      unit: "SPECTRUM ANALYSIS",
      name: "Frequency Monitoring",
      description: "Continuous RF spectrum monitoring for UAV control, video, and telemetry frequency detection.",
    },
    {
      capacity: "0",
      unit: "EMISSIONS",
      name: "Silent Passive Operation",
      description: "Zero RF emissions — completely covert detection with no detectable sensor signature.",
    },
    {
      capacity: "AUTO",
      unit: "CLASSIFICATION",
      name: "Real-Time UAV ID",
      description: "Automatic UAV make and model classification from RF signatures with real-time alert output.",
    },
  ],
  features: [
    { title: "Passive RF Detection",          description: "Detects UAVs by their own RF emissions — no active radar or signal required." },
    { title: "Zero Emission Signature",       description: "Completely covert operation. The detection system is undetectable by enemy electronic surveillance." },
    { title: "Automatic Classification",      description: "Identifies UAV type and model automatically from RF signature database." },
    { title: "Real-Time Alert System",        description: "Instant alerts on UAV detection with classification data for immediate response." },
    { title: "Silent Detection",              description: "Operates without revealing sensor position — critical for military and sensitive facility applications." },
    { title: "C2 System Integration",         description: "Real-time data output integrates with command and control platforms for automated threat response." },
  ],
  useCases: [
    "Covert military base protection",
    "Intelligence facility perimeter security",
    "Forward operating base monitoring",
    "Embassy and diplomatic compound security",
    "Silent airspace monitoring",
    "Counter-drone intelligence gathering",
  ],
  specifications: [
    { label: "System Type",          value: "Passive RF spectrum UAV detection" },
    { label: "Detection Method",     value: "RF spectrum analysis" },
    { label: "Emissions",            value: "Zero — fully passive" },
    { label: "Classification",       value: "Automatic UAV type and model ID" },
    { label: "Alert Mode",           value: "Real-time automatic alert" },
    { label: "Frequency Coverage",   value: "Full UAV control and video band" },
    { label: "C2 Integration",       value: "Command and control system compatible" },
    { label: "Operation",            value: "Silent continuous monitoring" },
  ],
  media: {
    hero: "/products/rf-uav-detection/images/hero.webp",
    heroAlt: "RF-Based UAV Detection System",
    gallery: [
      { src: "/products/rf-uav-detection/images/antenna.webp",  alt: "RF detection antenna array" },
      { src: "/products/rf-uav-detection/images/spectrum.webp", alt: "RF spectrum analysis display" },
    ],
    videos: [
      { title: "RF UAV Detection — Overview", file: "/products/rf-uav-detection/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/rf-uav-detection/docs/datasheet.pdf", kind: "pdf" },
      { title: "Use Case Overview",   file: "/products/rf-uav-detection/docs/use-case.pdf",   kind: "pdf" },
    ],
  },
  seo: {
    title: "RF-Based UAV Detection System | RDN Technology",
    description:
      "Passive RF spectrum UAV detection with automatic classification and real-time alerts. Zero emissions — completely covert counter-drone surveillance.",
  },
};

/* ── Optical UAV Detection ── */
export const opticalDetection: Product = {
  slug: "optical-uav-detection",
  name: "OPTICAL UAV DETECTION",
  category: "Detection Systems",
  productType: "AI-Based Optical UAV Detection System",
  tagline: "AI-Powered Day & Night Visual UAV Detection",
  shortDescription:
    "High-resolution camera-based UAV detection system using artificial intelligence for automatic identification, tracking, and classification in day and night conditions.",
  description:
    "The Optical UAV Detection System combines high-resolution cameras with AI-based detection algorithms for automatic UAV identification, classification, and tracking. Day and night vision capability ensures 24/7 coverage, while high sensitivity optics detect small UAVs at extended visual ranges. Automatic tracking maintains continuous contact after initial detection.",
  overview:
    "The system is best suited for organizations requiring visual confirmation of UAV threats alongside RF or radar detection. AI-based classification distinguishes UAVs from birds, aircraft, and other airborne objects with high accuracy. Integration with existing surveillance camera infrastructure reduces installation cost for facilities with existing camera networks. Night vision capability extends operational coverage to zero-light conditions.",
  featured: false,
  droneQuickStats: [
    { label: "Vision",    value: "D/N",  unit: ""    },
    { label: "Detection", value: "AI",   unit: "PWR" },
    { label: "Tracking",  value: "AUTO", unit: ""    },
    { label: "Sensitivity",value: "HIGH",unit: ""    },
    { label: "Mode",      value: "24/7", unit: ""    },
  ],
  droneMissions: [
    {
      number: "01",
      tag: "AI DETECTION",
      title: "AI-Based UAV Identification",
      description:
        "Artificial intelligence algorithms automatically distinguish UAVs from birds, aircraft, and environmental clutter with high classification accuracy.",
    },
    {
      number: "02",
      tag: "NIGHT VISION",
      title: "Day and Night Coverage",
      description:
        "Day optical and night thermal/low-light camera systems provide 24/7 continuous visual coverage without degradation in zero-light conditions.",
    },
    {
      number: "03",
      tag: "AUTO TRACKING",
      title: "Automatic Target Tracking",
      description:
        "After initial detection, automatic tracking maintains continuous visual contact and provides real-time position data for counter-UAV engagement.",
    },
  ],
  droneFlightParams: [
    { name: "Detection Method",  value: "AI",   unit: "OPTICAL", fillPercent: 100 },
    { name: "Day Vision",        value: "HIGH", unit: "RES",     fillPercent: 100 },
    { name: "Night Vision",      value: "YES",  unit: "",        fillPercent: 100 },
    { name: "Tracking",          value: "AUTO", unit: "",        fillPercent: 100 },
  ],
  dronePayloads: [
    {
      capacity: "AI",
      unit: "DETECTION",
      name: "Artificial Intelligence",
      description: "AI algorithms for automatic UAV classification — distinguishes drones from birds and aircraft with high accuracy.",
    },
    {
      capacity: "D/N",
      unit: "VISION",
      name: "Day & Night Camera",
      description: "High-resolution day camera with night vision capability for 24/7 visual UAV detection coverage.",
    },
    {
      capacity: "AUTO",
      unit: "TRACKING",
      name: "Automatic Track System",
      description: "Automatic target acquisition and tracking after initial AI detection for continuous visual contact.",
    },
  ],
  features: [
    { title: "AI-Based Detection",          description: "Machine learning algorithms automatically classify UAVs with high accuracy, reducing false alarm rates." },
    { title: "Night Vision Capability",     description: "Day and night camera system provides 24/7 visual coverage regardless of lighting conditions." },
    { title: "Automatic Tracking",          description: "Maintains continuous visual track after detection for real-time position and trajectory data." },
    { title: "High Sensitivity Optics",     description: "Detects small UAVs at extended visual ranges using high-resolution imaging systems." },
    { title: "Camera Infrastructure Integration", description: "Compatible with existing surveillance camera networks for cost-effective facility upgrades." },
    { title: "Real-Time Alert Output",      description: "Immediate detection alerts with visual confirmation data for operator decision support." },
  ],
  useCases: [
    "Airport perimeter visual monitoring",
    "Military base optical surveillance",
    "Critical facility camera integration",
    "Night UAV intrusion detection",
    "Multi-sensor detection system integration",
    "Urban area drone monitoring",
  ],
  specifications: [
    { label: "System Type",         value: "AI-based optical UAV detection" },
    { label: "Detection Method",    value: "High-resolution camera + AI" },
    { label: "Day Vision",          value: "High-resolution optical" },
    { label: "Night Vision",        value: "Yes — low-light / thermal capable" },
    { label: "Classification",      value: "AI automatic — UAV vs bird vs aircraft" },
    { label: "Tracking",            value: "Automatic continuous tracking" },
    { label: "Sensitivity",         value: "High — small UAV capable" },
    { label: "Alert Mode",          value: "Real-time automatic alert" },
    { label: "Integration",         value: "Existing camera infrastructure compatible" },
    { label: "Operation",           value: "24/7 continuous" },
  ],
  media: {
    hero: "/products/optical-uav-detection/images/hero.webp",
    heroAlt: "Optical UAV Detection System with AI",
    gallery: [
      { src: "/products/optical-uav-detection/images/camera-array.webp", alt: "Optical detection camera array" },
      { src: "/products/optical-uav-detection/images/night-detection.webp", alt: "Night UAV detection in operation" },
    ],
    videos: [
      { title: "Optical UAV Detection — Overview", file: "/products/optical-uav-detection/videos/hero.mp4", isHero: true },
    ],
    documents: [
      { title: "Technical Datasheet", file: "/products/optical-uav-detection/docs/datasheet.pdf", kind: "pdf" },
      { title: "Use Case Overview",   file: "/products/optical-uav-detection/docs/use-case.pdf",   kind: "pdf" },
    ],
  },
  seo: {
    title: "Optical UAV Detection System | RDN Technology",
    description:
      "AI-powered optical UAV detection with day/night vision, automatic tracking, and high-sensitivity small drone identification for 24/7 counter-drone surveillance.",
  },
};
