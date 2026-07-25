import Link from "next/link";
import { areasServed } from "@/lib/data";

export default function AreasWeServe() {
  return (
    <section id="areas" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Coverage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Areas We Serve
          </h2>
          <p className="mt-4 text-zinc-600">
            We provide fast mobile tyre fitting across Bristol and the
            surrounding areas.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {areasServed.map((area) => (
            <span
              key={area}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-700"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 text-orange-600"
                aria-hidden
              >
                <path
                  d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              {area}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/areas-we-cover"
            className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
          >
            View All Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
