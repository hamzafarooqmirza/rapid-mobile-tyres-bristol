import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StepList from "@/components/StepList";
import FeatureGrid from "@/components/FeatureGrid";
import TyreBrands from "@/components/TyreBrands";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { siteConfig, servicesFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Bridgewater - Rapid Mobile Tyres Bristol",
  description:
    "Fast, professional mobile tyre fitting in Bridgewater. We come to your home, workplace, or roadside — usually within 45-60 minutes. Callouts from £120. Call 07494 247246.",
};

const stats = [
  { value: "24/7", label: "Available, every day" },
  { value: "45-60 min", label: "Average arrival time" },
  { value: "From £120", label: "Callout price" },
  { value: "7+ yrs", label: "Serving the South West" },
];

const benefits = [
  "No towing, no garage waiting rooms",
  "Fitted at your home, workplace, or the roadside",
  "Fully-equipped mobile workshop on every van",
  "Fair, upfront pricing — no hidden extras",
];

const services = [
  {
    title: "Mobile Tyre Fitting",
    description:
      "Punctures, worn tread, or a full replacement — our technicians fit your new tyre on the spot, wherever you are in Bridgewater.",
    image: "https://rapid-tyres.com/wp-content/uploads/2024/12/mechanic-fixing-car-wheel-675fecc79140d.webp",
    href: "/mobile-tyre-fitting",
  },
  {
    title: "Jump Start",
    description:
      "Flat battery? Our technicians safely recharge your car and get you moving again, 24 hours a day.",
    image:
      "https://rapid-tyres.com/wp-content/uploads/2024/12/man-jumpstarting-car-battery-with-jumper-cables-675fed4fd0902.webp",
    href: "/jumpstarts",
  },
  {
    title: "Fuel Delivery",
    description:
      "Run out of petrol or diesel? We'll bring enough fuel to get you safely to the nearest station.",
    image: "https://rapid-tyres.com/wp-content/uploads/2024/12/man-refueling-car-at-gas-station-675fee0a7f233.webp",
    href: "/fuel-delivery",
  },
];

const steps = [
  {
    title: "Call or Book Online",
    description: "Give us your reg or tyre size and your location in Bridgewater — home, work, or roadside.",
  },
  {
    title: "We Come to You",
    description: "A fully-equipped mobile unit arrives at your chosen location, usually within 45-60 minutes.",
  },
  {
    title: "Fitted On the Spot",
    description: "Your technician fits the tyre there and then, checks everything's safe, and you're back on the road.",
  },
];

const gallery = [
  {
    src: "https://rapid-tyres.com/wp-content/uploads/2025/04/mobile-tyre-fitting-bmw-i3-rapid-tyres-service.webp",
    alt: "Mobile tyre fitting on a BMW i3",
  },
  {
    src: "https://rapid-tyres.com/wp-content/uploads/2025/04/seat-front-tyre-replacement-residential-street-rapid-tyres.webp",
    alt: "Front tyre replacement on a residential street",
  },
  {
    src: "https://rapid-tyres.com/wp-content/uploads/2025/04/mobile-tyre-fitting-volkswagen-tiguan-rapid-tyres.webp",
    alt: "Mobile tyre fitting on a Volkswagen Tiguan",
  },
  {
    src: "https://rapid-tyres.com/wp-content/uploads/elementor/thumbs/rapid-tyres-mobile-fleet-management-service-vans-r6r1i41kgy3gzqk6hc313be7q92b64bbidajxhcjre.webp",
    alt: "Rapid Mobile Tyres fleet of service vans",
  },
];

const whyChoose = [
  {
    title: "Flexible, Local Service",
    description: "We come to you anywhere in Bridgewater and the surrounding villages, saving you time and effort.",
  },
  {
    title: "Expert Technicians",
    description: "Highly trained, fully equipped professionals who treat your vehicle with care.",
  },
  {
    title: "Wide Tyre Selection",
    description: "From premium brands to budget-friendly options, sized to fit your car.",
  },
  {
    title: "Emergency Assistance",
    description: "Need help on short notice? Our rapid response team has you covered, day or night.",
  },
];

const areasServed = ["North Petherton", "Cannington", "Puriton", "Wembdon", "Chilton Trinity", "Taunton"];

export default function MobileTyreFittingBridgewaterPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div className="absolute inset-0">
            <Image
              src="https://rapid-tyres.com/wp-content/uploads/2025/04/seat-front-tyre-replacement-residential-street-rapid-tyres.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-45"
              preload
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-xl">
              <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Bridgewater &amp; Sedgemoor
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Tyre Fitting in Bridgewater
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Flat tyre, blowout, or just need a change? Our fully-equipped mobile unit comes straight to
                you in Bridgewater — home, work, or roadside — and fits your new tyre on the spot, usually
                within 45-60 minutes.
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
            </div>
          </div>
        </section>

        {/* Trust stats */}
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

        {/* Intro + image */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Why Bridgewater trusts us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                We bring the tyre shop to you
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                Rapid Mobile Tyres brings professional mobile tyre fitting straight to your door in
                Bridgewater. Whether you&apos;re at home, at work, or stopped on the roadside, our fully-equipped
                technicians fit your tyres quickly and safely — so you never have to waste time waiting at a
                garage.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange-600"
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

              <a
                href={siteConfig.phoneHref}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                Call {siteConfig.phone}
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-2xl">
                <Image
                  src="https://rapid-tyres.com/wp-content/uploads/2025/04/mobile-tyre-fitting-bmw-i3-rapid-tyres-service.webp"
                  alt="Rapid Mobile Tyres technician fitting a tyre"
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl sm:block">
                <p className="text-2xl font-bold text-orange-600">45-60 min</p>
                <p className="text-xs text-zinc-500">Average arrival time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Services We Provide
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Everything You Need, One Call Away
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-zinc-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StepList steps={steps} />

        {/* Recent work gallery */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Recent Work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Real Jobs, Real Results
              </h2>
              <p className="mt-4 text-zinc-600">
                A snapshot of our mobile tyre fitting technicians at work across Bridgewater and the South
                West.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200"
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
        </section>

        <FeatureGrid
          eyebrow="Why choose us"
          title="Why Choose Rapid Mobile Tyres in Bridgewater?"
          items={whyChoose}
          tone="dark"
        />

        <Testimonials />

        <TyreBrands />

        {/* Areas served */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">Coverage</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Areas Served Around Bridgewater
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {areasServed.map((area) => (
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
          </div>
        </section>

        <Faq items={[servicesFaqs[0], servicesFaqs[1], servicesFaqs[2], servicesFaqs[9], servicesFaqs[6]]} />

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
              Stuck with a tyre problem in Bridgewater?
            </h2>
            <p className="mt-4 text-zinc-300">
              Call now for a callout from £120 — our nearest technician will be with you in 45-60 minutes.
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
