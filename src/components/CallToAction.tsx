import { siteConfig } from "@/lib/data";

export default function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-950 py-20 text-zinc-50 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-600/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to experience the ultimate in tyre fitting convenience?
        </h2>
        <p className="mt-4 text-zinc-400">
          Get in touch with Rapid Mobile Tyres today to book your appointment
          or to learn more about our services.
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
  );
}
