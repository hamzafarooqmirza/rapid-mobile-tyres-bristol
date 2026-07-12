export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24 text-zinc-50 sm:px-10">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
      />

      <main className="relative flex w-full max-w-2xl flex-col items-center text-center">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 text-orange-500"
            aria-hidden
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M12 3v3.2M12 17.8V21M21 12h-3.2M6.2 12H3M18.2 5.8l-2.3 2.3M8.1 15.9l-2.3 2.3M18.2 18.2l-2.3-2.3M8.1 8.1 5.8 5.8"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Rapid Mobile Tyres Bristol
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          We&apos;re coming soon
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
          Fast, reliable mobile tyre fitting that comes straight to you,
          anywhere in Bristol. We&apos;re putting the finishing touches on our
          new site &mdash; check back shortly.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="tel:+441170000000"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
          >
            Call us
          </a>
          <a
            href="mailto:info@rapidmobiletyresbristol.co.uk"
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
          >
            Email us
          </a>
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          Bristol &amp; surrounding areas &middot; Tyres fitted at home or
          work
        </p>
      </main>

      <footer className="relative mt-16 text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} Rapid Mobile Tyres Bristol. All
        rights reserved.
      </footer>
    </div>
  );
}
