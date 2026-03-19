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


  media: ProductMedia;
  seo: ProductSeo;
};

import { alfa850vMobileJammer } from "./products/alfa-850v-mobile-jammer";
import { vegaDirectionalJammer } from "./products/vega-directional-jammer";
import { barracudaAirborneEw } from "./products/barracuda-airborne-ew";
import { evagateC4i } from "./products/evagate-c4i";
import { aiFaceRecognition } from "./products/ai-face-recognition";

export const products: Product[] = [
  alfa850vMobileJammer,
  vegaDirectionalJammer,
  barracudaAirborneEw,
  evagateC4i,
  aiFaceRecognition,
];
