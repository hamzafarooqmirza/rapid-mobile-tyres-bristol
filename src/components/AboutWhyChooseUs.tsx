import { aboutWhyChooseUs } from "@/lib/data";

export default function AboutWhyChooseUs() {
  return (
    <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-zinc-400">{aboutWhyChooseUs.intro}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {aboutWhyChooseUs.items.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-orange-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
