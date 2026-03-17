type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </div>
      ) : null}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
