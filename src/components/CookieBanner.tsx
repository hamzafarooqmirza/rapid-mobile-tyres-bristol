"use client";

import { useState, useEffect } from "react";

const CONSENT_KEY = "rapid_tyres_consent";

export type ConsentValue = "accepted" | "rejected";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const val = localStorage.getItem(CONSENT_KEY);
    if (val === "accepted" || val === "rejected") return val;
    return null;
  } catch {
    return null;
  }
}

function dispatchConsentChange(val: ConsentValue) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("rapid-consent-change", { detail: val }));
  }
}

function saveConsent(val: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, val);
  } catch {
    // localStorage unavailable — apply in-session only
  }
  dispatchConsentChange(val);
}

type View = "banner" | "preferences";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("banner");
  const [mapsEnabled, setMapsEnabled] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) {
      setOpen(true);
    }

    function openSettings() {
      const current = getStoredConsent();
      setMapsEnabled(current === "accepted");
      setView("preferences");
      setOpen(true);
    }

    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  function accept() {
    saveConsent("accepted");
    setOpen(false);
    setView("banner");
  }

  function reject() {
    saveConsent("rejected");
    setOpen(false);
    setView("banner");
  }

  function savePreferences() {
    saveConsent(mapsEnabled ? "accepted" : "rejected");
    setOpen(false);
    setView("banner");
  }

  function openPreferencesFromBanner() {
    setMapsEnabled(false);
    setView("preferences");
  }

  if (!open) return null;

  if (view === "preferences") {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="prefs-title"
        className="fixed inset-0 z-[150] flex items-end justify-center sm:items-center"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        />
        <div className="relative z-10 mx-4 mb-0 w-full max-w-lg rounded-t-2xl bg-white p-6 shadow-2xl sm:mx-auto sm:mb-auto sm:rounded-2xl">
          <h2
            id="prefs-title"
            className="text-lg font-bold text-zinc-950"
          >
            Manage Cookie Preferences
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Choose which optional technologies to enable. You can change your
            choice at any time using &ldquo;Cookie Settings&rdquo; in the footer.
          </p>

          <div className="mt-6 space-y-4">
            {/* Strictly necessary — locked on */}
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Strictly Necessary
                  </p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Required for the website to work correctly. These cannot be
                    disabled. Includes technical cookies from our hosting
                    provider (Vercel) for website operation and security.
                  </p>
                </div>
                <span className="mt-0.5 shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">
                  Always on
                </span>
              </div>
            </div>

            {/* Google Maps — optional */}
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-zinc-900">
                    Google Maps Embed
                  </p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Enables the embedded Google Maps on our homepage to load
                    automatically. When the map loads, your browser connects to
                    Google&apos;s servers and Google may set cookies on your
                    device. See{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Google&apos;s Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={mapsEnabled}
                  onClick={() => setMapsEnabled((v) => !v)}
                  className={`mt-0.5 relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                    mapsEnabled ? "bg-orange-500" : "bg-zinc-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      mapsEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                  <span className="sr-only">
                    {mapsEnabled ? "Disable" : "Enable"} Google Maps embed
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-lg border border-zinc-300 px-5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={savePreferences}
              className="flex h-11 items-center justify-center rounded-lg bg-orange-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      className="fixed bottom-0 left-0 right-0 z-[150] border-t border-zinc-200 bg-white shadow-2xl"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex-1">
            <p
              id="cookie-banner-title"
              className="text-sm font-bold text-zinc-950"
            >
              Your Privacy Choices
            </p>
            <p className="mt-1 text-xs leading-5 text-zinc-600">
              We use cookies and similar technologies to operate our website
              and, where applicable, understand how it is used. You can accept
              optional technologies, reject them, or manage your preferences.{" "}
              <a
                href="/cookie-policy"
                className="text-orange-600 hover:underline"
              >
                Cookie Policy
              </a>
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2 sm:flex-nowrap">
            <button
              type="button"
              onClick={openPreferencesFromBanner}
              className="flex h-10 items-center justify-center rounded-lg border border-zinc-300 px-4 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-400 sm:h-11 sm:text-sm"
            >
              Manage Preferences
            </button>
            <button
              type="button"
              onClick={reject}
              className="flex h-10 items-center justify-center rounded-lg border border-zinc-300 px-4 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-400 sm:h-11 sm:text-sm"
            >
              Reject Optional
            </button>
            <button
              type="button"
              onClick={accept}
              className="flex h-10 items-center justify-center rounded-lg bg-orange-500 px-4 text-xs font-semibold text-white transition-colors hover:bg-orange-600 sm:h-11 sm:text-sm"
            >
              Accept Optional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
