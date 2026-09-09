import Link from "next/link";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0769111369978!2d-2.6754945234864858!3d51.482638712512035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e7905012dbc9%3A0x9f066a077fbfa6eb!2sRapid%20Mobile%20Tyres%20Bristol!5e1!3m2!1sen!2s!4v1786223129220!5m2!1sen!2s";
const AREAS_PAGE_PATH = "/areas-we-cover";

export default function MapAndLocations() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Bristol Mobile Tyre Service
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            24/7 Tyre Assistance Across Bristol
          </h2>
          <p className="mt-4 text-zinc-600">
            Need help with a flat, damaged or worn tyre? Rapid Mobile Tyres provides 24/7 mobile
            tyre assistance across Bristol, with fitting available at your home, workplace or a
            suitable roadside location.
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

          {/* Bristol service information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
              Mobile Tyre Fitting from Our Bristol Base
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
              <p>
                Rapid Mobile Tyres is based in Shirehampton, Bristol, providing 24/7 mobile
                tyre fitting for drivers at home, work and suitable roadside locations across
                Bristol.
              </p>
              <p>
                From our Bristol base, our mobile tyre service helps with flat tyres,
                punctures, blowouts and replacement tyres for cars, vans and SUVs. Whether
                your vehicle is parked at home or you are unable to continue your journey, we
                bring the tyre fitting service directly to your location.
              </p>
              <p>
                Our usual roadside arrival time is around 45–60 minutes, depending on traffic,
                technician availability, tyre availability and your exact location.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                ["Based in Bristol", "Ryeleaze, Shirehampton, Bristol BS11 9FN"],
                ["24/7 Mobile Service", "Home, workplace and suitable roadside tyre fitting."],
                [
                  "45–60 Min Usual Arrival",
                  "Subject to traffic, tyre availability, technician availability and location.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                        <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.56a1 1 0 0 1-1.42 0l-3.5-3.53a1 1 0 1 1 1.42-1.408L8.5 12.14l6.79-6.844a1 1 0 0 1 1.414-.006Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-zinc-600">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <Link
                href={AREAS_PAGE_PATH}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                View All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
