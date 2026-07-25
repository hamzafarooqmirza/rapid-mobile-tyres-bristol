import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import StepList from "@/components/StepList";
import TyreBrands from "@/components/TyreBrands";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { siteConfig, mobileTyreFittingPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting - Rapid Mobile Tyres Bristol",
  description:
    "Fast, professional mobile tyre fitting at your home, workplace, or roadside across Bristol and the surrounding areas — usually within 45-60 minutes.",
};

const gallery = [
  {
    src: "https://rapid-tyres.com/wp-content/uploads/2025/04/seat-front-tyre-replacement-residential-street-rapid-tyres.webp",
    alt: "Front tyre replacement on a residential street",
    large: true,
  },
  {
    src: "https://rapid-tyres.com/wp-content/uploads/2025/04/mobile-tyre-fitting-bmw-i3-rapid-tyres-service.webp",
    alt: "Mobile tyre fitting on a BMW i3",
  },
  {
    src: "https://rapid-tyres.com/wp-content/uploads/2025/04/mobile-tyre-fitting-volkswagen-tiguan-rapid-tyres.webp",
    alt: "Mobile tyre fitting on a Volkswagen Tiguan",
  },
];

export default function MobileTyreFittingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Split hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
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
                24/7 Mobile Tyre Fitting
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">Mobile Tyre Fitting</h1>

              <p className="mt-3 text-lg font-medium text-zinc-200">{mobileTyreFittingPage.tagline}</p>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">{mobileTyreFittingPage.intro}</p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {mobileTyreFittingPage.benefits.map((item) => (
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

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Emergency Call: {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                >
                  Book Online
                </Link>
              </div>

              <p className="mt-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-400">
                {mobileTyreFittingPage.openingHours}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
                <Image
                  src="https://rapid-tyres.com/wp-content/uploads/2024/12/mechanic-fixing-car-wheel-675fecc79140d.webp"
                  alt="Rapid Mobile Tyres technician fitting a tyre"
                  width={740}
                  height={493}
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

        <FeatureGrid
          eyebrow="What's included"
          title="Our Mobile Tyre Fitting Services"
          intro="Whether you need a quick puncture repair, a full tyre replacement, or a routine check, our expert technicians can handle it all at your preferred location."
          items={mobileTyreFittingPage.subServices}
          tone="light"
        />

        {/* Photo showcase */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">Gallery</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Fitted Wherever You Are
              </h2>
              <p className="mt-4 text-zinc-600">
                Home driveways, office car parks, or the roadside — our technicians bring the full workshop
                to you.
              </p>
            </div>

            <div className="mt-14 flex flex-col gap-4 lg:grid lg:h-[560px] lg:grid-cols-2">
              {gallery.map((photo) =>
                photo.large ? (
                  <div
                    key={photo.src}
                    className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 lg:aspect-auto lg:h-full"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null,
              )}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
                {gallery
                  .filter((photo) => !photo.large)
                  .map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 lg:aspect-auto lg:h-full"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <StepList steps={mobileTyreFittingPage.steps} />

        <FeatureGrid
          eyebrow="Why choose us"
          title="Why Choose Our Mobile Tyre Fitting Service?"
          items={mobileTyreFittingPage.whyChoose}
          tone="light"
        />

        <TyreBrands />

        <Testimonials />

        <Faq items={mobileTyreFittingPage.faqs} />

        {/* Split CTA */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for fast, professional tyre fitting?
              </h2>
              <p className="mt-4 max-w-md text-zinc-400">
                Call now for a callout from £120 — our nearest technician will be with you in 45-60 minutes,
                anywhere in Bristol and the surrounding areas.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Call {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
              <Image
                src="https://rapid-tyres.com/wp-content/uploads/2024/12/rapid-tyres-mobile-van-with-logo-675fe9eeb65ae.webp"
                alt="Rapid Mobile Tyres service van"
                width={672}
                height={307}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
