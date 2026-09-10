const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
          fill="currentColor"
        />
      </svg>
    ),
    value: "24/7",
    label: "Available",
    description: "Day or night, planned or emergency — we're always ready.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
          fill="currentColor"
        />
      </svg>
    ),
    value: "45–60",
    label: "Minute Usual Arrival",
    description: "Subject to traffic, tyre and technician availability.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
          fill="currentColor"
        />
      </svg>
    ),
    value: "Cars · Vans · SUVs",
    label: "Covered",
    description: "Replacement tyres for most common vehicle types.",
  },
];

export default function HomepageIntro() {
  return (
    <section className="bg-zinc-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Text column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
              Bristol Mobile Tyre Fitting
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Mobile Tyre Fitting Across Bristol
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-zinc-600">
              <p>
                Need a reliable mobile tyre fitting service in Bristol? Rapid Mobile Tyres brings
                tyre fitting directly to your location, whether you're at home, at work or safely
                parked at a suitable roadside location.
              </p>
              <p>
                Our mobile tyre fitters in Bristol can help with flat, damaged or worn tyres,
                including urgent tyre replacement when you need to get back on the road. We provide
                replacement options for cars, vans and SUVs, subject to tyre availability.
              </p>
              <p>
                Available 24 hours a day, 7 days a week, we provide planned and emergency mobile
                tyre fitting across Bristol. Our usual roadside arrival time is around 45–60
                minutes, depending on traffic, technician availability, tyre availability and your
                exact location.
              </p>
            </div>
          </div>

          {/* Highlights column */}
          <div className="flex flex-col gap-5">
            {highlights.map(({ icon, value, label, description }) => (
              <div
                key={label}
                className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  {icon}
                </span>
                <div>
                  <p className="text-xl font-bold text-zinc-950">
                    {value}{" "}
                    <span className="text-base font-semibold text-zinc-700">{label}</span>
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">{description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
