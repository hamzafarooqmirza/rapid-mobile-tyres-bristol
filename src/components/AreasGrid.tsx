import { areasWeCoverDetails, siteConfig } from "@/lib/data";

export default function AreasGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Coverage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Where We Cover
          </h2>
          <p className="mt-4 text-zinc-600">
            We provide fast mobile tyre fitting, jump starts, and fuel
            delivery across Bristol and the surrounding areas — usually
            within 45-60 minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areasWeCoverDetails.map((area) => (
            <div
              key={area.name}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-6 w-6 text-orange-600"
                aria-hidden
              >
                <path
                  d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <h3 className="mt-3 text-lg font-semibold text-zinc-950">
                {area.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-zinc-600">
          Don&apos;t see your area listed? Call us on{" "}
          <a
            href={siteConfig.phoneHref}
            className="font-semibold text-orange-600 hover:text-orange-500"
          >
            {siteConfig.phone}
          </a>{" "}
          — we may still be able to help.
        </p>
      </div>
    </section>
  );
}
