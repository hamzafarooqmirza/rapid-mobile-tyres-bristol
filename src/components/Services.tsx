import Image from "next/image";
import Link from "next/link";
import { gridServices, highlightServices } from "@/lib/data";

const allHomeServices = [...highlightServices, ...gridServices];

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allHomeServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {service.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                    {service.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold text-orange-600">{service.tagline}</p>
                <h3 className="mt-1 text-lg font-bold text-zinc-950">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all">
                  Learn more
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
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
