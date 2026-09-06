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
  title: "Mobile Tyre Fitting in Bridgewater - Rapid Mobile Tyres Bristol",
  description:
    "Mobile tyre fitting in Bridgewater. We come to your home, workplace or roadside location — 24/7 emergency callouts and planned replacement. Call 07494 247246.",
};

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Bridgewater?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Bridgewater is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Bridgewater?",
    answer:
      "Our usual arrival time is around 45–60 minutes. The actual arrival time can vary depending on traffic, your exact location and technician availability.",
  },
  {
    question: "Can you replace a tyre at my home in Bridgewater?",
    answer:
      "Yes. Tyre replacement in Bridgewater can be carried out at suitable residential locations where there is enough safe working space around the vehicle.",
  },
  {
    question: "Can you help if I have a flat tyre near the M5?",
    answer:
      "We provide roadside tyre assistance around Bridgewater and nearby routes where safe access is available. Junction 23 of the M5 connects with the Dunball area north of Bridgwater. If you are stopped on the motorway, follow motorway safety guidance first.",
  },
  {
    question: "Do you provide roadside tyre assistance near the A38?",
    answer:
      "Yes. Our roadside tyre assistance in Bridgewater can attend suitable locations around the A38 and surrounding roads, provided it is safe and permitted to work there.",
  },
  {
    question: "Is emergency tyre fitting available late at night?",
    answer:
      "Yes. Emergency tyre fitting in Bridgewater is available 24/7, including nights and weekends, subject to technician and tyre availability.",
  },
  {
    question: "Do you offer mobile car tyre fitting in Bridgewater?",
    answer:
      "Yes. We provide mobile car tyre fitting for many common vehicle types and tyre sizes. Providing your tyre size when calling helps us check an appropriate replacement.",
  },
  {
    question: "Can you replace tyres on vans?",
    answer:
      "Yes. Our mobile van tyre fitting in Bridgewater covers suitable light commercial vehicles. Because van tyres can require specific load ratings, provide the full tyre specification where possible.",
  },
  {
    question: "Do you provide SUV tyre fitting?",
    answer:
      "Yes. SUV and 4x4 tyre fitting is available for suitable vehicles and tyre sizes, subject to stock availability.",
  },
  {
    question: "Can I arrange mobile tyre replacement without an emergency?",
    answer:
      "Yes. Mobile tyre replacement in Bridgewater can be arranged for planned tyre changes as well as punctures and emergency callouts.",
  },
  {
    question: "What details should I give you if I am near the M5 or A39?",
    answer:
      "Provide your road, direction of travel, nearest junction or landmark, tyre size and vehicle details. An accurate shared location can also make it easier to identify where you are.",
  },
  {
    question: "Do you cover locations outside Bridgewater?",
    answer:
      "Yes. Our wider mobile tyre service covers Bridgewater and surrounding parts of Somerset, subject to technician availability. Call with your postcode to confirm coverage for your exact location.",
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
      "Fitting for hatchbacks, saloons, estates and family cars at a suitable home, workplace or roadside location in Bridgewater.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
    href: "/mobile-tyre-fitting",
  },
  {
    title: "Mobile Van Tyre Fitting",
    description:
      "Tyre replacement brought directly to the vehicle. Van tyres can require specific load ratings — provide the current specification when calling.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
    href: "/mobile-tyre-fitting",
  },
  {
    title: "SUV and 4x4 Tyre Fitting",
    description:
      "Fitting for SUVs and 4x4s using larger tyres or different load and performance specifications, subject to availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
    href: "/mobile-tyre-fitting",
  },
  {
    title: "Emergency Tyre Fitting",
    description:
      "24/7 callouts for punctures, blowouts, sidewall damage and complete pressure loss — day or night across Bridgewater.",
    image: "/rapid-mobile-tyres-fleet-service-vans-bristol.webp",
    href: "/mobile-tyre-fitting",
  },
];

export default function BridgewaterPage() {
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
                Bridgewater &amp; Surrounding Areas
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Tyre Fitting in Bridgewater
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                A tyre problem can bring your journey to a halt, whether you are travelling through
                town, heading towards the motorway or preparing to leave home. Our mobile tyre fitters
                come to your vehicle in Bridgewater — usually within 45–60 minutes.
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
                Tyre replacement without a garage visit
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Tyre Replacement Without Visiting a Tyre Centre
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                When a tyre is completely flat or badly damaged, travelling to a garage may not be
                practical. Our mobile tyre fitters in Bridgewater bring the fitting service to your
                location, allowing the vehicle to remain where it is while the replacement is carried
                out.
              </p>
              <p className="mt-4 text-zinc-600 leading-7">
                Instead of trying to drive on a flat or damaged tyre, you can arrange for a mobile
                technician to come to the vehicle with the equipment needed for the fitting. We provide
                assistance for cars, vans and SUVs, covering both unexpected tyre failures and planned
                replacement of worn tyres.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "We come to you — home, work, or roadside",
                  "Avoid the risk of driving on a damaged tyre",
                  "24/7 emergency callouts available",
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

        {/* Where we fit */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Where we attend
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Home, Workplace or Roadside
              </h2>
              <p className="mt-4 text-zinc-600">
                We can attend suitable residential properties, workplaces and roadside locations
                throughout the Bridgewater area.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Tyre Fitting at Your Home",
                  description:
                    "If you notice a puncture, damaged sidewall or worn tyre while your vehicle is parked at home, mobile fitting can save you from an unnecessary garage journey. Where there is enough safe working space, we can carry out tyre replacement on a driveway or suitable residential parking area — including planned changes before a tyre becomes an emergency.",
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
                  title: "Workplace Mobile Tyre Fitting",
                  description:
                    "A tyre problem during the working day can be especially disruptive when your vehicle is needed for commuting or business. Our mobile tyre service can attend suitable workplaces around Bridgewater and carry out the replacement while the vehicle remains parked — particularly useful for tradespeople, commuters and drivers who rely on their vehicle throughout the day.",
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
                    "A puncture or blowout while travelling can make it unsafe to continue driving. Our roadside tyre assistance in Bridgewater is available at suitable locations where there is enough safe and permitted access for the technician to work. If your vehicle is stopped somewhere hazardous or on a high-speed road, follow the relevant roadside safety guidance before arranging assistance.",
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
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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
                  Emergency Mobile Tyre Fitting in Bridgewater
                </h2>
                <p className="mt-4 text-zinc-600 leading-7">
                  Tyre damage can happen at any hour, not just when tyre centres are open. Rapid Mobile
                  Tyres provides emergency tyre fitting in Bridgewater 24 hours a day for unexpected
                  tyre problems.
                </p>
                <p className="mt-4 text-zinc-600 leading-7">
                  We can assist with punctures, blowouts, complete pressure loss, sidewall damage and
                  other situations where the tyre is no longer suitable for continued driving. Our usual
                  arrival time is around 45–60 minutes, depending on traffic, technician availability
                  and your exact location.
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
                Different vehicles require different tyre sizes and specifications. Providing the tyre
                size when you call helps us check suitable availability before the technician sets off.
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
                How to Arrange a Mobile Tyre Callout
              </h2>
              <p className="mt-4 text-zinc-600">
                A few details are usually enough for us to understand the problem and check the
                appropriate tyre.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Tell Us What Has Happened",
                  description:
                    "Explain whether the tyre is punctured, completely flat, blown out, damaged or simply worn and due for replacement.",
                },
                {
                  step: "2",
                  title: "Provide Your Tyre Information",
                  description:
                    "Check the size printed on the sidewall where possible. Your vehicle make, model or registration can also help identify the correct specification.",
                },
                {
                  step: "3",
                  title: "Give Us Your Exact Location",
                  description:
                    "Tell us whether the vehicle is at home, at work or stopped on the roadside. A postcode, road name or shared location can be particularly useful.",
                },
                {
                  step: "4",
                  title: "We Bring the Tyre Fitting Service to You",
                  description:
                    "Once the details are confirmed, a technician can attend with the equipment required to fit the replacement where conditions allow safe working.",
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

        {/* Local roads + journey types */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                  Local road network
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                  Mobile Tyre Assistance Around the A38, A39 and M5
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Bridgewater sits on an important Somerset road network. The A38 and A39 meet in the
                    town, while the Dunball area connects Bridgwater with Junction 23 of the M5. These
                    routes are used by commuters, commercial traffic and drivers travelling between
                    Somerset and the wider South West, so a tyre problem can quickly interrupt an
                    important journey.
                  </p>
                  <p>
                    Our mobile tyre service can attend suitable locations around Bridgewater and the
                    surrounding road network where access is safe and permitted. If you are stopped near
                    the motorway or another busy route, provide your direction of travel, nearest
                    junction or accurate shared location when requesting assistance.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                  Matching the right tyre to your journey
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                  Tyres for Town Driving, Commuting and Longer Journeys
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Vehicles around Bridgewater may be used for local journeys, daily commuting,
                    motorway travel and longer trips across Somerset. The replacement tyre therefore
                    needs to match the vehicle specification and intended use rather than simply fit the
                    wheel.
                  </p>
                  <p>
                    Our mobile tyre replacement in Bridgewater can include different tyre options
                    according to the required size, load rating, speed rating and current availability.
                    Providing the complete tyre details when booking helps us identify a suitable option
                    before travelling.
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
                Why Mobile Tyre Fitting Makes Sense in Bridgewater
              </h2>
              <p className="mt-4 text-zinc-400 leading-7">
                A flat tyre can leave a perfectly usable vehicle stuck simply because it cannot be
                driven safely to a tyre centre. Mobile fitting solves that problem by bringing the
                technician, tyre and fitting equipment directly to the vehicle.
              </p>
              <p className="mt-4 text-zinc-400 leading-7">
                Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Bridgewater, covering
                suitable homes, workplaces and roadside locations — for both urgent tyre failures and
                planned replacement when tyres are worn but the vehicle is still safely parked.
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
                Covering Bridgewater and Nearby Somerset Areas
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                Bridgewater is closely connected with surrounding communities including Dunball, Puriton
                and the wider Sedgemoor area, with Junction 23 of the M5 providing an important
                connection north and south. Our mobile tyre service can also assist drivers in
                surrounding locations, subject to technician availability.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                { label: "Bridgewater", href: null },
                { label: "Dunball", href: null },
                { label: "Puriton", href: null },
                { label: "North Petherton", href: null },
                { label: "Cannington", href: null },
                { label: "Wembdon", href: null },
                { label: "Chilton Trinity", href: null },
                { label: "Taunton", href: null },
                { label: "Weston-super-Mare", href: "/mobile-tyre-fitting-weston-super-mare" },
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
              If you are outside Bridgewater itself, provide your postcode or current location when
              calling so coverage can be checked.
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
                A tyre problem is only one of the reasons a vehicle can become stranded. We also
                provide jump start assistance and emergency fuel delivery for drivers in Bridgewater
                and surrounding areas.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Mobile Tyre Fitting",
                  href: "/mobile-tyre-fitting",
                  description:
                    "Emergency mobile tyre fitting, mobile car tyre fitting, van tyre fitting, SUV tyre fitting and tyre replacement at home.",
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
              Need Mobile Tyre Fitting in Bridgewater?
            </h2>
            <p className="mt-4 text-zinc-300">
              A puncture, blowout or badly worn tyre does not have to mean attempting to drive an
              unsafe vehicle to a tyre centre. Contact us with your location, vehicle details and tyre
              size, and we can check the appropriate tyre and technician availability for your callout.
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
