export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-deepblue/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight text-deepblue md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-700">{description}</p> : null}
    </div>
  );
}
