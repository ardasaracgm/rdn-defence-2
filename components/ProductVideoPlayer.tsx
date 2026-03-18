type ProductVideoPlayerProps = {
  title: string;
  file: string;
  poster?: string;
};

export default function ProductVideoPlayer({
  title,
  file,
  poster,
}: ProductVideoPlayerProps) {
  return (
    <div className="card-premium overflow-hidden">
      <div className="border-b border-slate-200 px-5 py-4">
        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
          Video
        </h4>
        <p className="mt-2 text-lg font-semibold text-slate-950">{title}</p>
      </div>

      <div className="bg-slate-950">
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="aspect-video w-full"
        >
          <source src={file} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
