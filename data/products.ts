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
    slug: "alfa-850-mobile-jammer",
    name: "ALFA 850 Drone UAV Jammer System",
    category: "Electronic Warfare",
    tagline:
      "Compact anti-UAV jammer system for fixed-site and facility protection.",
    shortDescription:
      "A compact electronic warfare system designed to suppress UAV threats around critical facilities and fixed operational zones.",
    description:
      "ALFA 850 is a compact drone-UAV jammer system developed for fixed and semi-mobile protection scenarios. Its analog operating principle, narrow-band engagement structure, and modular design support high scanning speed and effective suppression against UAV control and navigation threats.",
    overview:
      "The system is positioned for organizations that require reliable counter-UAV protection at fixed sites such as airports, ports, refineries, military facilities, and strategic public infrastructure. Its compact form, high-power operation, and low harmonic distortion make it suitable for continuous protection missions.",
    cover: "/images/products/alfa-850v-mobile-jammer.jpg",
    gallery: ["/images/products/alfa-850v-mobile-jammer.jpg"],
    featured: false,
    features: [
      {
        title: "Analog Operating Principle",
        description:
          "Uses an analog architecture for higher scanning speed compared to many digital alternatives.",
      },
      {
        title: "Narrow-Band Engagement",
        description:
          "Focuses suppression power on likely threat frequencies to improve effectiveness.",
      },
      {
        title: "Low Harmonic Distortion",
        description:
          "Designed to reduce unnecessary interference and support cleaner operational use.",
      },
      {
        title: "GNSS Countermeasure Capability",
        description:
          "Includes dedicated modules against GNSS-based threats and anti-GNSS protection scenarios.",
      },
    ],
    useCases: [
      "Airport protection",
      "Port and coastal facility security",
      "Refineries and power plants",
      "Military units and defense facilities",
      "Critical public buildings",
      "Strategic site protection",
    ],
    specifications: [
      { label: "System Type", value: "Fixed / Facility Counter-UAV Jammer" },
      { label: "Architecture", value: "Analog narrow-band suppression" },
      { label: "Weight", value: "Approx. 90 kg" },
      { label: "Mobility", value: "Transportable by two people" },
      { label: "Integration", value: "Command and control software compatible" },
      { label: "Focus", value: "Counter-UAV / GNSS denial" },
    ],
    documents: [
      { title: "Technical Specifications", url: "#" },
      { title: "Use Cases & Advantages", url: "#" },
    ],
    videos: [{ title: "Operational Overview", url: "#" }],
    seo: {
      title: "ALFA 850 Drone UAV Jammer System | DefenceTech",
      description:
        "Compact fixed-site drone UAV jammer system for critical facility and infrastructure protection.",
    },
  },
  {
    slug: "alfa-850v-mobile-jammer",
    name: "ALFA 850V Mobile Drone UAV Jammer System",
    category: "Electronic Warfare",
    tagline:
      "Vehicle-mounted counter-UAV protection system for mobile and tactical operations.",
    shortDescription:
      "A mobile electronic warfare system designed to detect and suppress UAV threats in real-time across dynamic operational environments.",
    description:
      "ALFA 850V is a vehicle-mounted electronic warfare system engineered to provide real-time protection against UAV threats. Designed for mobile operations, convoy security, and tactical deployments, the system delivers wide-area RF suppression and operational flexibility in complex environments.",
    overview:
      "The ALFA 850V Mobile Jammer is built for missions where mobility, rapid deployment, and continuous protection are critical. Integrated into tactical vehicles, the system enables effective counter-UAV capability while maintaining operational movement. Its architecture supports wide-band RF suppression, making it suitable for modern asymmetric threat environments where drones are actively used.",
    cover: "/images/products/alfa-850v-mobile-jammer.jpg",
    gallery: ["/images/products/alfa-850v-mobile-jammer.jpg"],
    featured: true,
    features: [
      {
        title: "Wide-Band RF Suppression",
        description:
          "Covers multiple frequency ranges used by commercial and tactical UAV systems, ensuring effective disruption of control and navigation signals.",
      },
      {
        title: "Vehicle-Mounted Integration",
        description:
          "Designed for seamless integration into tactical and security vehicles, enabling protection during movement and field operations.",
      },
      {
        title: "Real-Time Threat Response",
        description:
          "Instant activation and response capability against UAV threats, minimizing risk in dynamic operational scenarios.",
      },
      {
        title: "360° Operational Coverage",
        description:
          "Provides all-direction protection to secure convoys, personnel, and critical assets during both stationary and mobile deployment.",
      },
      {
        title: "Rapid Deployment Capability",
        description:
          "Operational within minutes, supporting quick reaction missions and time-sensitive deployments.",
      },
      {
        title: "Mission-Ready Architecture",
        description:
          "Engineered for reliability in harsh environments, including urban, rural, and high-risk operational zones.",
      },
    ],
    useCases: [
      "Military convoy protection",
      "VIP and high-value asset security",
      "Border and perimeter security operations",
      "Critical infrastructure protection",
      "Urban tactical operations",
      "Counter-UAV field missions",
    ],
    specifications: [
      { label: "System Type", value: "Mobile Electronic Warfare System" },
      { label: "Platform", value: "Vehicle-mounted" },
      { label: "Operational Mode", value: "Mobile / Stationary" },
      { label: "Coverage", value: "360° protection" },
      { label: "Frequency Range", value: "430 MHz – 6 GHz" },
      { label: "RF Output Power", value: "850 W total output" },
      { label: "Power Supply", value: "220V AC / 50 Hz" },
      { label: "Weight", value: "≤ 90 kg" },
    ],
    documents: [
      { title: "Technical Specifications Document", url: "#" },
      { title: "Use Case & Operational Advantages", url: "#" },
    ],
    videos: [
      { title: "Operational Demonstration Video", url: "#" },
      { title: "Mobile Deployment Scenario", url: "#" },
    ],
    seo: {
      title:
        "ALFA 850V Mobile Drone Jammer | Vehicle-Mounted Counter UAV System",
      description:
        "ALFA 850V is a vehicle-mounted mobile jammer system designed for counter-UAV operations, convoy protection, and tactical electronic warfare missions.",
    },
  },
  {
    slug: "alfa-tank-jammer",
    name: "ALFA TANK Drone UAV Jammer System",
    category: "Electronic Warfare",
    tagline:
      "Armored vehicle integrated anti-drone protection for battlefield mobility.",
    shortDescription:
      "A tank and armored platform-mounted counter-UAV jammer system for frontline electronic protection.",
    description:
      "ALFA TANK is a specialized armored vehicle-integrated jammer system developed to neutralize hostile UAV threats while on the move or in static defensive positions. It supports tactical survivability through mobile RF denial and anti-FPV oriented protection.",
    overview:
      "This variant extends the ALFA counter-UAV family into armored combat environments. With compact dimensions, DC power compatibility, vibration-tolerant integration, and focused anti-UAV capability, it is suited for tanks, armored personnel carriers, and other military platforms requiring electronic protection against aerial threats.",
    cover: "/images/products/alfa-850v-mobile-jammer.jpg",
    gallery: ["/images/products/alfa-850v-mobile-jammer.jpg"],
    featured: false,
    features: [
      {
        title: "Armored Vehicle Integration",
        description:
          "Designed for installation on tanks and armored platforms used in tactical operations.",
      },
      {
        title: "Anti-FPV Protection",
        description:
          "Configured to address emerging FPV drone threats in battlefield environments.",
      },
      {
        title: "Compact and Rugged Form",
        description:
          "Reduced size and weight support vehicle integration without excessive platform burden.",
      },
      {
        title: "24V DC Operation",
        description:
          "Power architecture supports compatibility with military vehicle environments.",
      },
    ],
    useCases: [
      "Tank protection",
      "Armored personnel carriers",
      "Artillery unit support",
      "Frontline convoy movement",
      "Mobile battlefield electronic protection",
    ],
    specifications: [
      { label: "System Type", value: "Armored Vehicle Counter-UAV Jammer" },
      { label: "Frequency Range", value: "400 MHz – 6 GHz" },
      { label: "RF Output Power", value: "500 W total output" },
      { label: "Power Supply", value: "24 VDC" },
      { label: "Weight", value: "≤ 80 kg" },
      { label: "Form Factor", value: "Compact tank-mounted configuration" },
      { label: "Coverage", value: "360° with omnidirectional antenna support" },
      { label: "Focus", value: "Counter-UAV / FPV denial" },
    ],
    documents: [
      { title: "Technical Specifications", url: "#" },
      { title: "Use Cases & Advantages", url: "#" },
    ],
    videos: [{ title: "Operational Concept Video", url: "#" }],
    seo: {
      title: "ALFA TANK Counter UAV Jammer | Armored Vehicle EW System",
      description:
        "Tank-mounted counter-UAV jammer system for armored vehicles, FPV threat denial, and battlefield electronic protection.",
    },
  },
  {
    slug: "alfa-naval-jammer",
    name: "ALFA NAVAL Drone UAV Jammer System",
    category: "Electronic Warfare",
    tagline:
      "Marine platform integrated anti-drone protection for vessels and naval missions.",
    shortDescription:
      "A vessel-mounted counter-UAV jammer system designed for maritime and naval deployment environments.",
    description:
      "ALFA NAVAL is a maritime counter-UAV jammer system engineered for deployment on ships, patrol boats, and other naval platforms. It combines multi-band suppression with a ruggedized marine-suitable exterior to protect vessels and strategic maritime assets from hostile UAV activity.",
    overview:
      "Built for naval and coastal operational environments, ALFA NAVAL extends anti-UAV protection into marine domains where saltwater resistance, platform compatibility, and continuous operational readiness are essential. It supports both military and civilian vessel security missions.",
    cover: "/images/products/alfa-850v-mobile-jammer.jpg",
    gallery: ["/images/products/alfa-850v-mobile-jammer.jpg"],
    featured: false,
    features: [
      {
        title: "Marine Deployment Design",
        description:
          "Adapted for vessel-mounted use in maritime, coastal, and naval operating environments.",
      },
      {
        title: "Moisture and Salt Resistance",
        description:
          "Outer protection structure is designed to reduce environmental degradation from saltwater and humidity.",
      },
      {
        title: "Counter-UAV and FPV Capability",
        description:
          "Supports denial of UAV, FPV, and RF-based threats against vessels and maritime assets.",
      },
      {
        title: "Flexible Power Options",
        description:
          "Supports AC operation with optional DC compatibility depending on platform needs.",
      },
    ],
    useCases: [
      "Naval ship protection",
      "Patrol boat security",
      "Port and harbor operations",
      "Coastal defense missions",
      "Military and civilian marine vehicles",
    ],
    specifications: [
      { label: "System Type", value: "Marine Counter-UAV Jammer" },
      { label: "Frequency Range", value: "400 MHz – 6 GHz" },
      { label: "RF Output Power", value: "500 W total output" },
      { label: "Power Supply", value: "220V AC / Optional 24V DC" },
      { label: "Weight", value: "≤ 80 kg" },
      { label: "Coverage", value: "360° support" },
      { label: "Environment", value: "Marine / coastal deployment" },
      { label: "Focus", value: "Counter-UAV / maritime protection" },
    ],
    documents: [
      { title: "Technical Specifications", url: "#" },
      { title: "Use Cases & Advantages", url: "#" },
    ],
    videos: [{ title: "Marine Deployment Video", url: "#" }],
    seo: {
      title: "ALFA NAVAL Counter UAV Jammer | Maritime Electronic Warfare",
      description:
        "Marine vessel-mounted counter-UAV jammer system for naval ships, patrol boats, and maritime protection missions.",
    },
  },
  {
    slug: "vega-directional-jammer",
    name: "VEGA Multi-Band Directional Jammer",
    category: "Electronic Warfare",
    tagline:
      "Long-range directional suppression system for UAV, GNSS, and RF-based threats.",
    shortDescription:
      "A high-power directional electronic warfare system designed for long-range counter-UAV and RF suppression missions.",
    description:
      "VEGA is a multi-band directional jammer system developed for advanced electronic warfare operations. With high RF output, steerable directional antennas, and modular band architecture, the system is positioned to suppress UAV control links, GNSS signals, telemetry, video transmission, and other hostile RF activity across extended ranges.",
    overview:
      "Designed for mission environments where range, directional effect, and RF flexibility are critical, VEGA provides focused suppression against airborne and communication-based threats. Its modular architecture enables adaptation to different frequency requirements, while the directional antenna structure supports controlled long-range engagement in operationally demanding environments.",
    cover: "/images/products/vega-directional-jammer.jpg",
    gallery: ["/images/products/vega-directional-jammer.jpg"],
    featured: true,
    features: [
      {
        title: "Directional RF Suppression",
        description:
          "Uses a high-gain directional antenna structure to focus jamming power toward targeted threats with greater precision and range.",
      },
      {
        title: "Multi-Band Architecture",
        description:
          "Supports a wide operational frequency structure for disrupting UAV links, GNSS, telemetry, video transmission, and other RF-based threats.",
      },
      {
        title: "Long-Range Operational Effect",
        description:
          "Engineered for scenarios where extended suppression range and controlled directional coverage are operational priorities.",
      },
      {
        title: "Modular Band Configuration",
        description:
          "Mission-specific band configuration enables adaptation to different operational environments and regional threat profiles.",
      },
      {
        title: "Motorized Steering Capability",
        description:
          "Directional orientation can be aligned rapidly for more efficient targeting and field responsiveness.",
      },
      {
        title: "Field-Ready Reliability",
        description:
          "Designed for demanding deployment conditions where ruggedization, continuity, and mission adaptability are essential.",
      },
    ],
    useCases: [
      "Long-range counter-UAV operations",
      "Strategic site and perimeter protection",
      "Electronic warfare support missions",
      "Critical infrastructure defense",
      "Military and tactical field deployment",
      "Mission-specific RF denial operations",
    ],
    specifications: [
      { label: "System Type", value: "Directional Electronic Warfare System" },
      { label: "Frequency Coverage", value: "400 MHz – 6 GHz" },
      { label: "Band Structure", value: "Up to 15 bands" },
      { label: "RF Output Power", value: "1000 W total output" },
      { label: "Antenna Type", value: "High-gain directional antenna" },
      { label: "Steering", value: "Motorized directional orientation" },
      { label: "Power Supply", value: "220 VAC" },
      { label: "Effective Range", value: "Up to 20 km depending on environment and band" },
    ],
    documents: [
      { title: "Technical Specifications Document", url: "#" },
      { title: "Capability Overview", url: "#" },
    ],
    videos: [{ title: "System Demonstration Video", url: "#" }],
    seo: {
      title:
        "VEGA Multi-Band Directional Jammer | Long-Range Counter UAV System",
      description:
        "VEGA is a high-power multi-band directional jammer designed for long-range counter-UAV, GNSS, telemetry, and RF suppression missions.",
    },
  },
  {
    slug: "ied-jammer-system",
    name: "IED Bomb Blocker System",
    category: "Electronic Warfare",
    tagline:
      "Countermeasure system for remote-controlled and drone-triggered explosive threats.",
    shortDescription:
      "A scalable protection system designed to blind and neutralize RF-triggered bomb receivers and related remote detonation threats.",
    description:
      "The IED Bomb Blocker is a specialized protection system developed to counter remote-controlled and drone-triggered bomb threats. Rather than creating broad RF pollution, the system is designed to neutralize the receiver side, supporting longer effective protection with lower unnecessary interference.",
    overview:
      "The platform is suitable for fixed-site protection, convoy security, and portable field use. It addresses a wide range of triggers including RF, LoRa, PMR, VHF/UHF, GSM, and GNSS-related detonation mechanisms while supporting operational flexibility from facility protection to intervention team deployment.",
    cover: "/images/products/alfa-850v-mobile-jammer.jpg",
    gallery: ["/images/products/alfa-850v-mobile-jammer.jpg"],
    featured: false,
    features: [
      {
        title: "Receiver Neutralization Logic",
        description:
          "Structured to blind the receiving side instead of relying on broad-spectrum traditional jamming behaviour.",
      },
      {
        title: "Multi-Trigger Coverage",
        description:
          "Addresses RF, LoRa, PMR, VHF/UHF, GSM, and GNSS-related trigger types.",
      },
      {
        title: "Scalable Protection Formats",
        description:
          "Supports fixed, vehicle-mounted, and battery-powered portable deployment variants.",
      },
      {
        title: "Extended Protection with Lower RF Pollution",
        description:
          "Designed to improve effect range while limiting unnecessary wide-band interference.",
      },
    ],
    useCases: [
      "Building and facility protection",
      "Convoy protection systems",
      "Operation team support",
      "Intervention team deployment",
      "Field force security",
    ],
    specifications: [
      { label: "System Type", value: "IED / Bomb Receiver Blocking System" },
      { label: "Power Supply", value: "220V AC / 50 Hz" },
      { label: "Power Consumption", value: "≤ 2 kW" },
      { label: "Dimensions", value: "60 cm × 60 cm × 60 cm" },
      { label: "Weight", value: "≤ 40 kg" },
      { label: "Variants", value: "Fixed / Vehicle / Portable" },
      { label: "Protection Range", value: "Approx. 100 m to 1 km depending on variant" },
      { label: "Focus", value: "Remote-controlled explosive countermeasure" },
    ],
    documents: [
      { title: "Technical Specifications", url: "#" },
      { title: "Threat Coverage Overview", url: "#" },
    ],
    videos: [{ title: "System Use Case Video", url: "#" }],
    seo: {
      title: "IED Bomb Blocker System | RF Trigger Countermeasure",
      description:
        "Countermeasure system for remote-controlled and drone-triggered explosive threats with scalable fixed, vehicle, and portable deployment options.",
    },
  },
  {
    slug: "securadio-rf-shielding-system",
    name: "SECURADIO Advanced Radio Frequency Shielding System",
    category: "Electronic Warfare",
    tagline:
      "Precision radio frequency blocking for critical institutions and controlled environments.",
    shortDescription:
      "A radio frequency shielding and blocking system designed to neutralize unauthorized and harmful communications in controlled environments.",
    description:
      "SECURADIO is an advanced RF shielding system developed to block unauthorized radio communication and harmful frequency-based broadcasts in high-security environments. It is designed for precision frequency control, allowing targeted blocking without unnecessary disruption of surrounding channels.",
    overview:
      "The system is suited for prisons, detention centers, migration camps, and other controlled institutions where communication misuse may create security vulnerabilities. Fine-tuned frequency control, energy-efficient design, and indoor deployment flexibility support institutional communication security.",
    cover: "/images/products/evagate-c4i.jpg",
    gallery: ["/images/products/evagate-c4i.jpg"],
    featured: false,
    features: [
      {
        title: "Precision Frequency Tuning",
        description:
          "Supports highly precise blocking logic with narrow targeting capability down to very fine frequency steps.",
      },
      {
        title: "Targeted Shielding Logic",
        description:
          "Blocks specific threat frequencies while minimizing unnecessary impact on other channels.",
      },
      {
        title: "Indoor-Friendly Deployment",
        description:
          "Does not require the same exposed antenna placement profile often seen in conventional systems.",
      },
      {
        title: "Power Backup Support",
        description:
          "Can continue operating during outages with UPS and battery-supported continuity.",
      },
    ],
    useCases: [
      "Prisons and detention centers",
      "Migration camps",
      "Critical institutions",
      "Controlled-security facilities",
      "Anti-propaganda and communication restriction environments",
    ],
    specifications: [
      { label: "System Type", value: "RF Shielding / Radio Blocking System" },
      { label: "Frequency Range", value: "5 MHz – 12 MHz" },
      { label: "Power Supply", value: "220V AC / 50 Hz" },
      { label: "Power Consumption", value: "≤ 1 kW" },
      { label: "RF Output Power", value: "≤ 35 W" },
      { label: "Weight", value: "≤ 8 kg" },
      { label: "Optional Features", value: "FM band blocking / remote monitoring" },
      { label: "Focus", value: "Unauthorized radio communication suppression" },
    ],
    documents: [
      { title: "Technical Specifications", url: "#" },
      { title: "Institutional Use Cases", url: "#" },
    ],
    videos: [{ title: "System Overview Video", url: "#" }],
    seo: {
      title: "SECURADIO RF Shielding System | Precision Radio Blocking",
      description:
        "Advanced radio frequency shielding system for prisons, detention centers, and controlled institutions requiring precise communication blocking.",
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
      "Unlike ground-only suppression systems, airborne EW platforms extend operational reach and improve line-of-sight effectiveness in complex environments. Barracuda positions electronic warfare, ISR, and hard-kill support in one airborne architecture.",
    cover: "/images/products/barracuda-airborne-ew.jpg",
    gallery: ["/images/products/barracuda-airborne-ew.jpg"],
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
      {
        title: "Low-RCS Airframe Logic",
        description:
          "Positioned for improved survivability and reduced observability in contested environments.",
      },
      {
        title: "Airborne Spectrum Dominance",
        description:
          "Extends RF suppression into areas where terrain and urban density limit ground-based systems.",
      },
    ],
    useCases: [
      "Airborne electronic warfare",
      "ISR missions",
      "Convoy overwatch",
      "Counter-UAV support operations",
      "Mountainous and urban terrain missions",
      "Maritime convoy protection",
    ],
    specifications: [
      { label: "Platform", value: "VTOL UAV" },
      { label: "Operational Role", value: "EW / ISR / airborne support" },
      { label: "Endurance", value: "Up to 8 hours" },
      { label: "Payload Capacity", value: "Up to 10 kg" },
      { label: "Communication Range", value: "20 km standard / higher with upgraded setup" },
      { label: "Deployment", value: "Airborne" },
      { label: "Propulsion", value: "Hybrid fixed-wing + VTOL support" },
      { label: "Focus", value: "Mission-adaptive operations" },
    ],
    documents: [
      { title: "Technical Specifications", url: "#" },
      { title: "Capability Overview", url: "#" },
      { title: "Awards & Recognition", url: "#" },
    ],
    videos: [{ title: "Flight Demonstration", url: "#" }],
    seo: {
      title: "Barracuda Airborne EW UAV | DefenceTech",
      description:
        "Mission-adaptive VTOL UAV for airborne electronic warfare, ISR, and advanced anti-drone support operations.",
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
      "The system is designed to solve communication fragmentation by bringing radio, PBX, secure data, streaming, WAN management, and platform integration into a single structured platform. It supports vehicle, marine, trailer, and portable deployments.",
    cover: "/images/products/evagate-c4i.jpg",
    gallery: ["/images/products/evagate-c4i.jpg"],
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
      {
        title: "C4I-Oriented Integration",
        description:
          "Supports command and control use cases with unified operational communication logic.",
      },
      {
        title: "Open Integration Interfaces",
        description:
          "Prepared for third-party integration and platform-level interface requirements.",
      },
    ],
    useCases: [
      "Mobile command vehicles",
      "Marine communication platforms",
      "Disaster response communication",
      "Secure tactical networking",
      "Distributed site communication",
      "Field and HQ interoperability",
    ],
    specifications: [
      { label: "System Type", value: "C4I / Communication Core" },
      { label: "Security", value: "AES-256 / VPN" },
      { label: "Communication", value: "Voice / Data / Radio / Video / TV" },
      { label: "Deployment", value: "Vehicle / Marine / Portable / Fixed" },
      { label: "Routing", value: "Load balancing / failover / smart WAN" },
      { label: "Integration", value: "RoIP / PBX / IPTV / video streaming" },
      { label: "Power Profile", value: "Low-power operational architecture" },
      { label: "Focus", value: "Unified secure communication" },
    ],
    documents: [
      { title: "Core System Brochure", url: "#" },
      { title: "Use Cases Overview", url: "#" },
      { title: "Vehicle Configuration", url: "#" },
      { title: "Marine Configuration", url: "#" },
    ],
    videos: [{ title: "Use Case Video", url: "#" }],
    seo: {
      title: "EvaGate Secure C4I System | DefenceTech",
      description:
        "Integrated secure communication and command platform for voice, data, radio, and video across mobile and fixed environments.",
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
      { label: "Processing Logic", value: "Identification / alert / watchlist workflows" },
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
  },
];
