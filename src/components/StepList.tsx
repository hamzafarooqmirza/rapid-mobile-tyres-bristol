interface Step {
  title: string;
  description: string;
}

export default function StepList({ steps }: { steps: Step[] }) {
  const columns = Math.min(steps.length, 4);
  const colsClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  const lineInset = `${50 / columns}%`;

  return (
    <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Fast, Hassle-Free
          </h2>
        </div>

        <div className={`relative mt-16 grid gap-x-6 gap-y-10 ${colsClass}`}>
          {steps.length > 1 && (
            <div
              aria-hidden
              className="pointer-events-none absolute top-6 hidden h-px bg-zinc-800 sm:block"
              style={{ left: lineInset, right: lineInset }}
            />
          )}
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-start">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-600 text-base font-bold text-white ring-8 ring-zinc-950">
                {index + 1}
              </span>
              <div className="mt-5 w-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-orange-500/50">
                <h3 className="text-lg font-semibold text-zinc-50">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
