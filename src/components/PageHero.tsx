export default function PageHero({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: string;
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
        <p className="mt-3 text-sm text-zinc-400">{breadcrumb}</p>
      </div>
    </section>
  );
}
