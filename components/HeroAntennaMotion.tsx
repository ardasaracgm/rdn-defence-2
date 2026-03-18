"use client";

type HeroVideo = {
  file: string;
  poster?: string;
};

type HeroImage = {
  src: string;
  alt: string;
};

type Props = {
  video?: HeroVideo;
  image: HeroImage;
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
          preload="metadata"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/12] overflow-hidden bg-slate-200">
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
