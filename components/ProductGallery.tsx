"use client";

import { useState } from "react";

type ProductGalleryImage = {
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  images: ProductGalleryImage[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group card-premium overflow-hidden text-left"
          >
            <div className="relative aspect-[16/11] bg-slate-200">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent px-5 pb-5 pt-10">
                <div className="text-sm font-medium text-white">{image.alt}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-4 py-6"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-0 top-[-52px] rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Close
            </button>

            <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">
              <div className="aspect-[16/9] bg-slate-900">
                <img
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={showPrev}
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Previous
              </button>

              <div className="text-center text-sm text-slate-300">
                {images[activeIndex].alt}
              </div>

              <button
                type="button"
                onClick={showNext}
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
