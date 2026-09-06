import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import TyreBrands from "@/components/TyreBrands";
import Faq from "@/components/Faq";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Chewton Keynsham - Rapid Mobile Tyres Bristol",
  description:
    "Mobile tyre fitting in Chewton Keynsham. We come to your home, workplace or roadside location — emergency callouts and planned replacement, 24/7. Call 07494 247246.",
};

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Chewton Keynsham?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Chewton Keynsham is available day and night, subject to technician availability and the required tyre being in stock.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Chewton Keynsham?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival times depend on traffic, technician availability and your exact location.",
  },
  {
    question: "Can you replace a tyre at my home in Chewton Keynsham?",
    answer:
      "Yes. Tyre replacement in Chewton Keynsham can be carried out at suitable residential locations where there is enough safe space around the vehicle for the technician to work.",
  },
  {
    question: "Can you help if I have a flat tyre on Chewton Road?",
    answer:
      "Yes. We provide roadside tyre assistance in Chewton Keynsham at suitable locations around Chewton Road and nearby routes, provided there is safe and permitted access.",
  },
  {
    question: "Do you provide emergency tyre fitting at night?",
    answer:
      "Yes. Emergency tyre fitting in Chewton Keynsham is available 24/7, including nights and weekends, subject to technician and tyre availability.",
  },
  {
    question: "Do you offer mobile car tyre fitting?",
    answer:
      "Yes. We provide mobile car tyre fitting for many common vehicles and tyre sizes. Giving us your tyre size when you call helps us check the appropriate replacement.",
  },
  {
    question: "Can you replace tyres on vans?",
    answer:
      "Yes. Our mobile van tyre fitting in Chewton Keynsham covers suitable light commercial vehicles. Van tyres can require particular load ratings, so provide the complete tyre specification where possible.",
  },
  {
    question: "Do you provide SUV tyre fitting?",
    answer:
      "Yes. SUV and 4x4 tyre fitting is available for suitable vehicles and tyre specifications, subject to stock availability.",
  },
  {
    question: "Can I arrange mobile tyre replacement before my tyre becomes completely flat?",
    answer:
      "Yes. Mobile tyre replacement in Chewton Keynsham can be arranged for worn or damaged tyres as well as emergency callouts.",
  },
  {
    question: "Do you cover areas around Keynsham as well?",
    answer:
      "Our wider mobile tyre service covers Chewton Keynsham and surrounding areas. If you are in Keynsham or another nearby location, provide your postcode so availability can be checked.",
  },
  {
    question: "What details should I provide if I am on a rural road?",
    answer:
      "Your exact location is particularly useful. Give us the road name, postcode, nearby junction or shared map location together with your tyre size and vehicle details.",
  },
];

const stats = [
  { value: "24/7", label: "Available, every day" },
  { value: "45-60 min", label: "Average arrival time" },
  { value: "Affordable", label: "Callout rates" },
  { value: "5★", label: "Rated by customers" },
];

const vehicleTypes = [
  {
    title: "Mobile Car Tyre Fitting",
    description:
      "Fitting for hatchbacks, saloons, estates and family cars at a suitable home, workplace or roadside location.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
    href: "/mobile-tyre-fitting",
  },
  {
    title: "Mobile Van Tyre Fitting",
    description:
      "Replacement service for light commercial vehicles — brought directly to the van. Commercial tyres often require specific load ratings.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
    href: "/mobile-tyre-fitting",
  },
  {
    title: "SUV and 4x4 Tyre Fitting",
    description:
      "Fitting for larger vehicles and SUV-specific tyre specifications, subject to current stock availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
    href: "/mobile-tyre-fitting",
  },
  {
    title: "Emergency Tyre Fitting",
    description:
      "24/7 callouts for punctures, blowouts, sidewall damage and sudden pressure loss — day or night.",
    image: "/rapid-mobile-tyres-fleet-service-vans-bristol.webp",
    href: "/mobile-tyre-fitting",
  },
];

export default function ChewtonKeynshamPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div className="absolute inset-0">
            <Image
              src="/mobile-tyre-fitting-technician-bristol.webp"
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
                Chewton Keynsham &amp; Surrounding Areas
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Tyre Fitting in Chewton Keynsham
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                A flat or damaged tyre can be difficult enough to deal with without having to find a
                garage. Our mobile unit comes straight to your home, workplace or roadside location
                in Chewton Keynsham — usually within 45–60 minutes.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Emergency Call: {siteConfig.phone}
                </a>
                <Link
                  href="/mobile-tyre-fitting"
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
                Mobile tyre fitting, Chewton Keynsham
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Tyre Fitting Where Your Vehicle Is Parked
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                Mobile tyre fitting is especially useful when the tyre problem itself makes travelling
                to a garage difficult or unsafe. Our mobile tyre fitters in Chewton Keynsham bring the
                fitting equipment and suitable replacement tyre to your location, removing the need to
                move the vehicle unnecessarily.
              </p>
              <p className="mt-4 text-zinc-600 leading-7">
                We can attend appropriate residential properties, workplaces and roadside locations,
                provided there is enough space to carry out the work safely. We assist cars, vans and
                SUVs with both emergency callouts and planned tyre replacement.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "We come to you — home, work, or roadside",
                  "Avoid the risk of driving on a damaged tyre",
                  "Emergency callouts available 24/7",
                  "Cars, vans and SUVs covered",
                ].map((item) => (
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
                  src="/mobile-car-tyre-fitting-bmw-i3-bristol.webp"
                  alt="Rapid Mobile Tyres technician fitting a tyre in Bristol"
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

        {/* Where we fit: home / workplace / roadside */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Where We Can Help
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Home, Workplace or Roadside
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Tyre Replacement at Home",
                  description:
                    "Discovering a flat tyre before leaving home does not have to mean arranging recovery. Where your vehicle is parked in a suitable working area, we can carry out tyre replacement on your driveway or residential parking space — including tyres that are worn or visibly damaged but have not yet failed completely.",
                  icon: (
                    <path
                      d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  title: "Mobile Fitting at Your Workplace",
                  description:
                    "A tyre problem during the working day can be particularly inconvenient when your car or van is needed later. Our mobile tyre service can attend suitable workplace locations around Chewton Keynsham, allowing the replacement to be completed while the vehicle remains parked.",
                  icon: (
                    <path
                      d="M2 7h20v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  title: "Roadside Tyre Assistance",
                  description:
                    "If a puncture, blowout or sudden pressure loss leaves you unable to continue safely, our roadside tyre assistance in Chewton Keynsham can attend suitable locations. The technician needs enough safe space to work around the vehicle — follow appropriate roadside guidance if stopped in a hazardous position.",
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path
                        d="M12 8v4l3 3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6 text-orange-600"
                      aria-hidden
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-zinc-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">
                <Image
                  src="/rapid-mobile-tyres-fleet-service-vans-bristol.webp"
                  alt="Rapid Mobile Tyres service van ready for emergency callout"
                  width={800}
                  height={560}
                  className="h-auto w-full"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                  Available day and night
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                  Emergency Mobile Tyre Fitting in Chewton Keynsham
                </h2>
                <p className="mt-4 text-zinc-600 leading-7">
                  Tyre failures do not follow garage opening hours. Rapid Mobile Tyres provides
                  emergency tyre fitting in Chewton Keynsham 24 hours a day for drivers facing
                  unexpected tyre problems.
                </p>
                <p className="mt-4 text-zinc-600 leading-7">
                  We can assist with punctures, blowouts, complete pressure loss, sidewall damage and
                  tyres that are no longer safe to continue driving on. Our usual arrival time is
                  around 45–60 minutes, depending on technician availability, traffic and your exact
                  location at the time of the call.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                  >
                    Call Now: {siteConfig.phone}
                  </a>
                  <Link
                    href="/mobile-tyre-fitting"
                    className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    Emergency Tyre Fitting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle types */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Every vehicle type
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Mobile Tyres for Cars, Vans and SUVs
              </h2>
              <p className="mt-4 text-zinc-600">
                Tyres vary significantly between vehicle types. Providing the correct tyre information
                when you call helps us identify a suitable replacement before attending.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {vehicleTypes.map((type) => (
                <Link
                  key={type.title}
                  href={type.href}
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-zinc-950">{type.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{type.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Booking steps */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                What to Tell Us When Booking a Tyre Callout
              </h2>
              <p className="mt-4 text-zinc-600">
                Having a few key details ready helps us understand what you need before the technician
                sets off.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Describe What Happened",
                  description:
                    "Tell us whether you have a puncture, flat tyre, blowout, visible damage or a tyre that is simply worn and ready for replacement.",
                },
                {
                  step: "2",
                  title: "Check Your Tyre Size",
                  description:
                    "The numbers printed on the sidewall tell us the tyre dimensions. If you cannot find them, your vehicle make, model or registration can also help.",
                },
                {
                  step: "3",
                  title: "Share Your Exact Location",
                  description:
                    "Let us know whether you are on Chewton Road, at a residential property, workplace or elsewhere. A postcode or shared map location is particularly useful on quieter local roads.",
                },
                {
                  step: "4",
                  title: "We Arrange the Mobile Fitting",
                  description:
                    "Once the required tyre and location have been confirmed, a technician travels to you with the necessary fitting equipment and carries out the replacement where it is safe to work.",
                },
              ].map((item) => (
                <div key={item.step} className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local roads */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                  Local road network
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                  Mobile Tyre Assistance Around Chewton Road and Wellsway
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Chewton Keynsham has a distinctive local road network centred around Chewton Road,
                    which connects towards Wellsway and the B3116. Redlynch Lane also runs through this
                    part of the area, while local roads continue towards Compton Dando and surrounding
                    rural communities.
                  </p>
                  <p>
                    These quieter routes can present a different problem from a busy city road: if a
                    tyre fails, a nearby tyre centre may not be immediately accessible. Our mobile tyre
                    service can attend suitable locations around Chewton Keynsham where access allows
                    the technician to work safely.
                  </p>
                  <p>
                    If you are stopped away from a clear street address, providing the road name, nearby
                    junction, postcode or shared location can make it easier to identify your position.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                  Covering the surrounding area
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                  Replacement Tyres for Local and Longer Journeys
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Drivers around Chewton Keynsham may use their vehicles for short journeys into
                    Keynsham as well as longer trips towards Bristol, Bath or other parts of Bath and
                    North East Somerset. The appropriate replacement tyre therefore needs to match the
                    vehicle specification rather than simply fit the wheel.
                  </p>
                  <p>
                    Our mobile tyre replacement in Chewton Keynsham can include different tyre options
                    depending on dimensions, load requirements and current availability. Providing the
                    full size and rating from the existing tyre sidewall helps us check a suitable
                    option before attending.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why mobile works here */}
        <section className="bg-zinc-950 py-20 sm:py-28 text-zinc-50">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Why it makes sense here
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Why Mobile Tyre Fitting Works Well in Chewton Keynsham
              </h2>
              <p className="mt-4 text-zinc-400 leading-7">
                Chewton Keynsham combines residential properties with quieter roads and rural
                surroundings, so getting a vehicle with an unusable tyre to a garage is not always
                straightforward. Mobile fitting reverses the normal process by bringing the tyre
                technician to the vehicle.
              </p>
              <p className="mt-4 text-zinc-400 leading-7">
                Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Chewton Keynsham for
                suitable homes, workplaces and roadside locations — both when a tyre fails unexpectedly
                and when a worn tyre needs replacing before it becomes an emergency.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "24/7", label: "Emergency callouts, every day" },
                { value: "45-60 min", label: "Typical arrival time" },
                { value: "Cars, Vans, SUVs", label: "All vehicle types" },
                { value: "Home or Roadside", label: "We come to you" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center"
                >
                  <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Covering Chewton Keynsham and Nearby Areas
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                Chewton Keynsham sits just outside Keynsham within the River Chew valley, with local
                road connections towards Keynsham, Compton Dando, Queen Charlton and the surrounding
                countryside. Our mobile service can assist across Chewton Keynsham and surrounding
                locations, subject to technician availability.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                { label: "Chewton Keynsham", href: null },
                { label: "Keynsham", href: null },
                { label: "Compton Dando", href: null },
                { label: "Queen Charlton", href: null },
                { label: "Bitton", href: "/mobile-tyre-fitting-bitton" },
                { label: "Chew Magna", href: "/mobile-tyre-fitting-chew-magna" },
                { label: "Chew Stoke", href: "/mobile-tyre-fitting-chew-stoke" },
                { label: "Brislington", href: "/mobile-tyre-fitting-brislington" },
                { label: "Bath", href: "/mobile-tyre-fitting-bath" },
              ].map((area) =>
                area.href ? (
                  <Link
                    key={area.label}
                    href={area.href}
                    className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-medium text-orange-600 transition-colors hover:border-orange-200 hover:bg-orange-50"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden>
                      <path
                        d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    {area.label}
                  </Link>
                ) : (
                  <span
                    key={area.label}
                    className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-700"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-orange-600" aria-hidden>
                      <path
                        d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    {area.label}
                  </span>
                )
              )}
            </div>

            <p className="mt-6 text-center text-sm text-zinc-500">
              If your location is outside the immediate village area, provide your postcode or shared
              location when calling so current coverage can be confirmed.
            </p>
          </div>
        </section>

        {/* More services */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Additional services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                More Than Mobile Tyre Replacement
              </h2>
              <p className="mt-4 text-zinc-600">
                Not every roadside problem is caused by the tyres. We also provide jump start
                assistance and emergency fuel delivery for drivers in Chewton Keynsham and surrounding
                areas.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Mobile Tyre Fitting",
                  href: "/mobile-tyre-fitting",
                  description:
                    "Emergency mobile tyre fitting, car tyre fitting, van tyre fitting, SUV tyre fitting and tyre replacement at home.",
                  image: "/mobile-tyre-fitting-technician-bristol.webp",
                },
                {
                  title: "Jump Start",
                  href: "/jumpstarts",
                  description:
                    "Flat battery? Our technicians safely recharge your car and get you moving again, 24/7.",
                  image: "/jump-start-service-dead-battery-bristol.webp",
                },
                {
                  title: "Fuel Delivery",
                  href: "/fuel-delivery",
                  description:
                    "Run out of petrol or diesel? We can bring enough fuel to get you to the nearest station.",
                  image: "/emergency-fuel-delivery-service-bristol.webp",
                },
              ].map((service) => (
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

        <Testimonials />

        <TyreBrands />

        <Faq items={faqs} />

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-50 sm:py-28">
          <div className="absolute inset-0">
            <Image
              src="/rapid-mobile-tyres-service-van-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need Mobile Tyre Fitting in Chewton Keynsham?
            </h2>
            <p className="mt-4 text-zinc-300">
              A puncture, blowout or worn tyre does not have to mean driving an unsafe vehicle to the
              nearest tyre centre. Contact us with your location, tyre size and vehicle details, and we
              can check availability and arrange a suitable mobile tyre callout.
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
