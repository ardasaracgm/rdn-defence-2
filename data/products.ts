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
export type ProductIntegrationItem = {
  title: string;
  description: string;
};
export type ProductDecisionSupportItem = {
  title: string;
  description: string;
};
export type ProductSupportItem = {
  title: string;
  description: string;
};
export type ProductDeploymentModel = {
  title: string;
  description: string;
};
export type ProductSpec = {
  label: string;
  value: string;
};
export type ProductDocument = {
  title: string;
  file: string;
  kind?: "pdf" | "doc" | "other";
};
export type ProductVideo = {
  title: string;
  file: string;
  poster?: string;
  isHero?: boolean;
};
export type ProductImage = {
  src: string;
  alt: string;
};
export type ProductMedia = {
  hero: string;
  heroAlt: string;
  gallery: ProductImage[];
  videos?: ProductVideo[];
  documents?: ProductDocument[];
};
export type ProductSeo = {
  title: string;
  description: string;
};
export type ProductValuePoint = {
  title: string;
  description: string;
};
export type ProductMissionFit = {
  title: string;
  description: string;
};
export type ProductOperationalAdvantage = {
  title: string;
  description: string;
};

/* ── Drone-specific types ── */
export type DroneQuickStat = {
  label: string;
  value: string;
  unit: string;
};
export type DroneMission = {
  number: string;
  tag: string;
  title: string;
  description: string;
};
export type DronePayload = {
  capacity: string;
  unit: string;
  name: string;
  description: string;
};
export type DroneFlightParam = {
  name: string;
  value: string;
  unit: string;
  fillPercent: number;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  productType?: string;

  tagline: string;
  shortDescription: string;
  description: string;
  overview?: string;

  featured?: boolean;

  features?: ProductFeature[];
  useCases?: string[];
  specifications?: ProductSpec[];
  whyThisProduct?: ProductValuePoint[];
  operationalAdvantages?: ProductOperationalAdvantage[];
  missionFit?: ProductMissionFit[];
  deploymentModels?: ProductDeploymentModel[];
  integrationCustomization?: ProductIntegrationItem[];
  programReadiness?: ProductSupportItem[];
  decisionSupport?: ProductDecisionSupportItem[];

  /* ── Drone-specific optional fields ── */
  droneQuickStats?: DroneQuickStat[];
  droneMissions?: DroneMission[];
  dronePayloads?: DronePayload[];
  droneFlightParams?: DroneFlightParam[];

  media: ProductMedia;
  seo: ProductSeo;
};

/* ── Electronic Warfare ── */
import { alfa850vMobileJammer } from "./products/alfa-850v-mobile-jammer";
import { alfa850vMobile } from "./products/alfa-850v-mobile";
import { alfaTankJammer } from "./products/alfa-tank-jammer";
import { alfaNavalJammer } from "./products/alfa-naval-jammer";
import { securadioRfShielding } from "./products/securadio-rf-shielding";
import { iedJammer } from "./products/ied-jammer";
import { vegaDirectionalJammer } from "./products/vega-directional-jammer";
import { barracudaAirborneEw } from "./products/barracuda-airborne-ew";
import { evagateC4i } from "./products/evagate-c4i";
import { aiFaceRecognition } from "./products/ai-face-recognition";

/* ── Drone Systems — Named Products ── */
import { atalay } from "./products/atalay";
import { yukbey } from "./products/yukbey";
import { alga } from "./products/alga";
import { safir } from "./products/safir";
import { talon } from "./products/talon";

/* ── Drone Systems — Special Production Series ── */
import {
  d1000,
  d1050,
  m1000,
  p5,
  p10,
  mp50,
  p100,
  k100,
  k400,
  k750,
  km1000,
  v2346,
} from "./products/special-uavs";

export const products: Product[] = [
  /* Electronic Warfare */
  alfa850vMobileJammer,
  alfa850vMobile,
  alfaTankJammer,
  alfaNavalJammer,
  securadioRfShielding,
  iedJammer,
  vegaDirectionalJammer,
  barracudaAirborneEw,
  evagateC4i,
  aiFaceRecognition,

  /* Drone Systems — Named */
  atalay,
  yukbey,
  alga,
  safir,
  talon,

  /* Drone Systems — Special Production */
  d1000,
  d1050,
  m1000,
  p5,
  p10,
  mp50,
  p100,
  k100,
  k400,
  k750,
  km1000,
  v2346,
];
