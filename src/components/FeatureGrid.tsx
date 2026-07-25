interface FeatureGridItem {
  title: string;
  description: string;
}

export default function FeatureGrid({
  eyebrow,
  title,
  intro,
  items,
  tone = "dark",
  columns = 4,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: FeatureGridItem[];
  tone?: "dark" | "light";
  columns?: 2 | 3 | 4;
}) {
  const isDark = tone === "dark";
  const colsClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={isDark ? "bg-zinc-950 py-20 text-zinc-50 sm:py-28" : "bg-zinc-50 py-20 sm:py-28"}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.15em] ${
              isDark ? "text-orange-500" : "text-orange-600"
            }`}
          >
            {eyebrow}
          </p>
          <h2
            className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "" : "text-zinc-950"}`}
          >
            {title}
          </h2>
          {intro && <p className={`mt-4 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{intro}</p>}
        </div>

        <div className={`mt-14 grid gap-6 ${colsClass}`}>
          {items.map((item) => (
            <div
              key={item.title}
              className={
                isDark
                  ? "rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
                  : "rounded-2xl border border-zinc-200 bg-white p-6"
              }
            >
              <h3 className={`text-lg font-semibold ${isDark ? "text-zinc-50" : "text-zinc-950"}`}>
                {item.title}
              </h3>
              <p className={`mt-2 text-sm leading-6 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
