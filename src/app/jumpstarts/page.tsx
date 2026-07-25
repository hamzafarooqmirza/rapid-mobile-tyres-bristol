import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StepList from "@/components/StepList";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { siteConfig, jumpStartPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jump Start Service - Rapid Mobile Tyres Bristol",
  description:
    "Flat battery? Rapid Mobile Tyres Bristol offers fast, 24/7 mobile jump start assistance across Bristol and the surrounding areas.",
};

const stats = [
  { value: "24/7", label: "Available, every day" },
  { value: "30-60 min", label: "Average arrival time" },
  { value: "Expert", label: "Trained technicians" },
  { value: "5★", label: "Rated by customers" },
];

export default function JumpstartsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Full-bleed photo hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div className="absolute inset-0">
            <Image
              src="https://rapid-tyres.com/wp-content/uploads/2024/12/man-jumpstarting-car-battery-with-jumper-cables-675fed4fd0902.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-40"
              preload
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-xl">
              <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                24/7 Jump Start Service
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Dead Battery? We&apos;re There in 30-60 Minutes.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">{jumpStartPage.tagline}</p>
              <p className="mt-4 max-w-lg leading-7 text-zinc-400">{jumpStartPage.intro}</p>

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
                {jumpStartPage.openingHours}
              </p>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-zinc-200 bg-white py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:px-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-zinc-950 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-zinc-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <FeatureGrid
          eyebrow="Know the causes"
          title="Common Reasons for a Dead Battery"
          intro="Understanding why batteries fail helps you avoid being stranded — and know when to call us."
          items={jumpStartPage.commonReasons}
          tone="light"
          columns={3}
        />

        <StepList steps={jumpStartPage.steps} />

        <FeatureGrid
          eyebrow="Why choose us"
          title="Why Choose Rapid Mobile Tyres for a Jump Start?"
          items={jumpStartPage.whyChoose}
          tone="light"
        />

        {/* Prevention tips — compact dark checklist */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Prevention
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tips to Avoid a Dead Battery
              </h2>
              <p className="mt-4 text-zinc-400">
                Simple habits that keep your battery healthy and your car reliably starting.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {jumpStartPage.tips.map((tip) => (
                <li
                  key={tip.title}
                  className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-orange-500/40"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
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
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">{tip.title}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{tip.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Testimonials />

        <Faq items={jumpStartPage.faqs} />

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-50 sm:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://rapid-tyres.com/wp-content/uploads/2024/12/rapid-tyres-mobile-van-with-logo-675fe9eeb65ae.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stranded with a dead battery?
            </h2>
            <p className="mt-4 text-zinc-300">
              Call now — our nearest technician will be with you in 30-60 minutes, anywhere in Bristol
              and the surrounding areas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
