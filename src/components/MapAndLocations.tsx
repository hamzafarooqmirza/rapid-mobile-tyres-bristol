import Link from "next/link";
import { allLocations } from "@/lib/locationsData";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0769111369978!2d-2.6754945234864858!3d51.482638712512035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e7905012dbc9%3A0x9f066a077fbfa6eb!2sRapid%20Mobile%20Tyres%20Bristol!5e1!3m2!1sen!2s!4v1786223129220!5m2!1sen!2s";

const sortedLocations = [...allLocations].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export default function MapAndLocations() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Find Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Our Location &amp; Service Areas
          </h2>
          <p className="mt-4 text-zinc-600">
            Based in Bristol, we cover a wide area across the South West and South Wales. Find your nearest service area below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            <iframe
              src={MAP_SRC}
              width="100%"
              height="500"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rapid Mobile Tyres Bristol on Google Maps"
            />
          </div>

          {/* Location pages list */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-zinc-900">
              All Service Locations
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Click any area to see dedicated coverage details.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
              {sortedLocations.map((loc) => (
                <li key={loc.path}>
                  <Link
                    href={`/${loc.path}`}
                    className="flex items-center gap-1.5 rounded-md px-1 py-1.5 text-sm text-zinc-700 transition-colors hover:text-orange-600"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3.5 w-3.5 shrink-0 text-orange-500"
                      aria-hidden
                    >
                      <path
                        d="M8 14s5-4.24 5-8a5 5 0 10-10 0c0 3.76 5 8 5 8z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
