import Image from "next/image";
import Link from "next/link";
import { aboutContent, siteConfig } from "@/lib/data";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
      <div className="absolute inset-0">
        <Image
          src={aboutContent.heroImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          preload
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
          About Us
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {aboutContent.tagline}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-300">
          {aboutContent.intro}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
    </section>
  );
}
