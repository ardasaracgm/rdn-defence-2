type ProductDocumentCardProps = {
  title: string;
  file: string;
  kind?: "pdf" | "doc" | "other";
};

export default function ProductDocumentCard({
  title,
  file,
  kind = "pdf",
}: ProductDocumentCardProps) {
  const label =
    kind === "pdf" ? "PDF Document" : kind === "doc" ? "Document File" : "File";

  return (
    <div className="card-premium p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            {label}
          </div>
          <h4 className="mt-2 text-lg font-semibold text-slate-950">{title}</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Open the document in a new tab or download it for offline review.
          </p>
        </div>

        <div className="shrink-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
          {kind.toUpperCase()}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={file}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Preview
        </a>

        <a
          href={file}
          download
          className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
        >
          Download
        </a>
      </div>
    </div>
  );
}
