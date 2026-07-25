import { locationOtherServices } from "@/lib/locationsData";

export default function LocationAreasServed({ town, areas }: { town: string; areas: string[] }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">Coverage</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Areas Served Around {town}
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-700"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-orange-600" aria-hidden>
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

        <p className="mt-12 text-sm text-zinc-600">
          <span className="font-semibold text-zinc-950">Other services offered by Rapid Mobile Tyres:</span>{" "}
          {locationOtherServices.join(", ")}.
        </p>
      </div>
    </section>
  );
}
