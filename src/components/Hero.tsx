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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-zinc-950 text-zinc-50"
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
          <p className="mb-4 inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
            {siteConfig.name}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            24/7 Emergency &amp; Non-Emergency Mobile Tyre Fitting &amp;
            Replacement
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            45-60 minutes arrival for roadside tyre changes. Fast, reliable
            mobile tyre fitting that comes straight to you, anywhere in
            Bristol and the surrounding areas.
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
              className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            >
              Our Services
            </Link>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
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
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
            <Image
              src="https://rapid-tyres.com/wp-content/uploads/2024/12/rapid-tyres-mobile-van-with-logo-675fe9eeb65ae.webp"
              alt="Rapid Mobile Tyres service van with logo"
              width={672}
              height={307}
              className="h-auto w-full"
              preload
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 shadow-xl sm:block">
            <p className="text-2xl font-bold text-orange-500">45-60 min</p>
            <p className="text-xs text-zinc-400">Average arrival time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
