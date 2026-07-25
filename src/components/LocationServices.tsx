import Link from "next/link";
import { locationServicesProvided } from "@/lib/locationsData";

export default function LocationServices() {
  return (
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

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {locationServicesProvided.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="block rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-orange-300"
            >
              <h3 className="text-lg font-semibold text-zinc-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
