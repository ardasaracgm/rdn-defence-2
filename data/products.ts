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

/* 🔥 IMPORTS */
import { alfa850vMobileJammer } from "./products/alfa-850v-mobile-jammer";
import { vegaDirectionalJammer } from "./products/vega-directional-jammer";
import { barracudaAirborneEw } from "./products/barracuda-airborne-ew";
import { evagateC4i } from "./products/evagate-c4i";
import { aiFaceRecognition } from "./products/ai-face-recognition";

/* 🔥 ARRAY */
export const products: Product[] = [
  alfa850vMobileJammer,
  vegaDirectionalJammer,
  barracudaAirborneEw,
  evagateC4i,
  aiFaceRecognition,
];
