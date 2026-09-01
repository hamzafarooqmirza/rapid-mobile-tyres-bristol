import Image from "next/image";
import Link from "next/link";
import { gridServices, highlightServices } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {highlightServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-zinc-950">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all">
                  Learn more
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gridServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-zinc-950">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
