"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function HeroAntennaMotion({ src, alt }: Props) {
  const { scrollY } = useScroll();

  // scroll'a göre dönüş
  const rotate = useTransform(scrollY, [0, 600], [0, 12]);

  // hafif zoom (premium hissi)
  const scale = useTransform(scrollY, [0, 600], [1, 1.05]);

  return (
    <motion.div
      style={{ rotate, scale }}
      className="relative h-full w-full"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
