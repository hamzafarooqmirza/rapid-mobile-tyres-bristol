import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const highlights = [
  "24/7 Emergency Tyre Assistance",
  "On-the-Spot Tyre Fitting and Repairs",
  "Fast Response, Minimal Downtime",
  "Affordable Mobile Tyre Solutions",
  "Expert Technicians at Your Service",
];

const googleReviewsUrl =
  "https://www.google.com/search?q=rapid+mobile+tyre+bristol&rlz=1C1AJCO_enPK1193PK1193&oq=rapid+mobile+tyre+bristol&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgYIAxBFGDsyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDzSAQg5NTY1ajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8#";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white text-zinc-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read 311 Google reviews for Rapid Mobile Tyres Bristol"
            className="group mb-5 inline-flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:border-orange-300 hover:shadow-md"
          >
            <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-zinc-900">
              {siteConfig.name}
            </span>
            <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <span className="font-bold" aria-label="Google">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
              <span className="font-extrabold text-zinc-900">5.0</span>
              <span
                aria-hidden="true"
                className="tracking-tight text-yellow-400"
              >
                ★★★★★
              </span>
              <span className="font-semibold text-zinc-600 underline decoration-zinc-300 underline-offset-2 transition group-hover:text-orange-600">
                311 Google reviews
              </span>
            </span>
          </a>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            24/7 Mobile Tyre Fitting &amp; Replacement In Bristol
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            <strong>Mobile tyre fitting and replacement in Bristol</strong> with
            45–60 minute arrival for roadside tyre changes. Fast, reliable
            mobile tyre fitting that comes straight to you, anywhere in Bristol
            and the surrounding areas.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Emergency Call: {siteConfig.phone}
            </a>
            <Link
              href="/services"
              className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
            >
              Our Services
            </Link>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                  aria-hidden
                >
                  <path
                    d="M4 10.5l3.5 3.5L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-2xl">
            <Image
              src="/rapid-mobile-tyres-service-van-bristol.webp"
              alt="Rapid Mobile Tyres 24/7 mobile service van in Bristol"
              width={672}
              height={307}
              className="h-auto w-full"
              preload
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl sm:block">
            <p className="text-2xl font-bold text-orange-500">45-60 min</p>
            <p className="text-xs text-zinc-500">Average arrival time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
