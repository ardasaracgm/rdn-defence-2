"use client";

type Props = {
  video?: {
    file: string;
    poster?: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export default function ProductHeroMedia({ video, image }: Props) {
  if (video?.file) {
    return (
      <div className="relative aspect-[16/12] overflow-hidden bg-black">
        <video
          src={video.file}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        {/* overlay gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className="aspect-[16/12] bg-slate-200">
      import HeroAntennaMotion from "./HeroAntennaMotion";

{
  video ? (
    <video ... />
  ) : (
    <HeroAntennaMotion
      src={image.src}
      alt={image.alt}
    />
  );
}
    </div>
  );
}
