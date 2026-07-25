export default function PageHero({
  title,
  breadcrumb,
  subtitle,
  note,
}: {
  title: string;
  breadcrumb: string;
  subtitle?: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16 text-zinc-50 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-zinc-300">{subtitle}</p>}
        <p className="mt-3 text-sm text-zinc-400">{breadcrumb}</p>
        {note && (
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-400">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
