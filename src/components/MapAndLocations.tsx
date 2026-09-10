"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getStoredConsent, type ConsentValue } from "@/components/CookieBanner";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0769111369978!2d-2.6754945234864858!3d51.482638712512035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e7905012dbc9%3A0x9f066a077fbfa6eb!2sRapid%20Mobile%20Tyres%20Bristol!5e1!3m2!1sen!2s!4v1786223129220!5m2!1sen!2s";

export default function MapAndLocations() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [loadedOnce, setLoadedOnce] = useState(false);

  useEffect(() => {
    setConsent(getStoredConsent());

    function handleConsentChange(e: Event) {
      setConsent((e as CustomEvent<ConsentValue>).detail);
    }
    window.addEventListener("rapid-consent-change", handleConsentChange);
    return () =>
      window.removeEventListener("rapid-consent-change", handleConsentChange);
  }, []);

  const showMap = consent === "accepted" || loadedOnce;

  return (
    <section className="bg-white py-14 sm:py-20">
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
          {/* Google Map */}
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            {showMap ? (
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
            ) : (
              <div className="flex h-[500px] flex-col items-center justify-center bg-zinc-50 px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 text-orange-600"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-semibold text-zinc-800">
                  Google Maps
                </p>
                <p className="mt-2 max-w-xs text-xs leading-5 text-zinc-500">
                  Clicking &ldquo;Load Map&rdquo; connects to Google&apos;s
                  servers. Google may set cookies on your device in accordance
                  with its own{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setLoadedOnce(true)}
                  className="mt-5 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Load Map
                </button>
                <p className="mt-3 text-xs text-zinc-400">
                  To always load maps automatically,{" "}
                  <button
                    type="button"
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent("open-cookie-settings"),
                      )
                    }
                    className="text-orange-600 hover:underline"
                  >
                    manage your cookie preferences
                  </button>
                  .
                </p>
              </div>
            )}
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
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
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
                href="/areas-we-cover"
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
