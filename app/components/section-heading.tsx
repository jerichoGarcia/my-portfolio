type SectionHeadingProps = { eyebrow: string; title: string; description?: string; centered?: boolean };

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}><p className="section-eyebrow">{eyebrow}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--ink)] sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-[var(--muted)]">{description}</p>}</div>;
}
