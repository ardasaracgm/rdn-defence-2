"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt: string;
};

export default function HeroAntennaMotion({ src, alt }: Props) {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 600], [0, 12]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.05]);

  return (
    <motion.div style={{ rotate, scale }} className="relative h-full w-full">
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </motion.div>
  );
}
