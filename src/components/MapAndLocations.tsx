import Link from "next/link";
import { siteConfig } from "@/lib/data";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0769111369978!2d-2.6754945234864858!3d51.482638712512035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e7905012dbc9%3A0x9f066a077fbfa6eb!2sRapid%20Mobile%20Tyres%20Bristol!5e1!3m2!1sen!2s!4v1786223129220!5m2!1sen!2s";

const bristolAreas = [
  "Clifton", "Redland", "Bishopston", "Southville", "Bedminster",
  "Knowle", "Brislington", "Fishponds", "Filton", "Horfield",
  "Westbury-on-Trym", "Shirehampton", "Avonmouth", "Sea Mills", "Henleaze",
  "Henbury", "Lockleaze", "Cotham", "Montpelier", "St Andrews",
];

export default function MapAndLocations() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Find Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Based in Bristol, Covering the South West
          </h2>
          <p className="mt-4 text-zinc-600">
            We operate from Shirehampton, Bristol and cover all of Bristol and the surrounding region — including Bath, Newport, Weston-super-Mare, and Chepstow.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Map — loads automatically */}
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

          {/* Bristol coverage info */}
          <div className="flex flex-col justify-between gap-8">
            {/* Contact block */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-lg font-bold text-zinc-900">Contact Us</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-orange-500" aria-hidden>
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>
                  </svg>
                  <a href={siteConfig.phoneHref} className="font-semibold text-orange-600 hover:underline">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-orange-500" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-orange-600 hover:underline">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="currentColor"/>
                  </svg>
                  <span>{siteConfig.address}</span>
                </li>
              </ul>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-orange-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Book a Visit
                </Link>
              </div>
            </div>

            {/* Bristol areas */}
            <div>
              <h3 className="text-base font-bold text-zinc-900">Bristol Areas We Cover</h3>
              <p className="mt-1 text-sm text-zinc-500">
                We serve all Bristol neighbourhoods. See our full{" "}
                <Link href="/areas-we-cover" className="font-medium text-orange-600 hover:underline">
                  areas page
                </Link>{" "}
                for the complete South West coverage.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bristolAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
