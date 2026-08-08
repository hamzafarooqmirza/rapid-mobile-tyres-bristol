import { testimonials } from "@/lib/data";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Rapid+Mobile+Tyres+Bristol+reviews";

const avatarColors = [
  "#4285F4",
  "#EA4335",
  "#34A853",
  "#FBBC05",
  "#9C27B0",
  "#FF6D00",
  "#00ACC1",
  "#E91E63",
  "#43A047",
];

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57C21.36 18.1 22.56 15.4 22.56 12.25z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function Stars({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  const cls = size === "lg" ? "h-6 w-6" : size === "md" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#FBBC04" className={cls}>
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const cards = [...testimonials, ...testimonials];

  return (
    <section className="bg-zinc-950 py-20 sm:py-28">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
            Customer Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Trusted by Hundreds of Drivers Across Bristol
          </h2>

          {/* Aggregate rating badge */}
          <div className="mt-8 inline-flex items-center gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 px-7 py-4 shadow-lg">
            <GoogleG />
            <div className="h-10 w-px bg-zinc-700" />
            <div className="text-left">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">5.0</span>
                <Stars size="md" />
              </div>
              <p className="mt-0.5 text-xs text-zinc-500 uppercase tracking-wide">
                Based on Google Reviews
              </p>
            </div>
            <div className="h-10 w-px bg-zinc-700" />
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#4285F4] hover:underline whitespace-nowrap"
            >
              Read all reviews →
            </a>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-14 overflow-hidden">
        {/* Edge fades — dark to match section bg */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-zinc-950 to-transparent" />

        <div className="flex w-max gap-6 animate-marquee px-6">
          {cards.map((t, i) => {
            const color = avatarColors[i % avatarColors.length];
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <figure
                key={`${t.name}-${i}`}
                className="flex w-[320px] shrink-0 flex-col rounded-2xl bg-white p-6 shadow-xl"
              >
                {/* Quote mark */}
                <svg
                  viewBox="0 0 40 30"
                  fill="none"
                  className="h-7 w-7 text-orange-500/30"
                  aria-hidden
                >
                  <path
                    d="M0 30V18C0 7.611 6.5 2.056 19.5 0l1.5 3C14 4.778 10.167 8.278 9.5 13H16V30H0zm23 0V18C23 7.611 29.5 2.056 42.5 0L44 3c-7 1.778-10.833 5.278-11.5 10H39V30H23z"
                    fill="currentColor"
                  />
                </svg>

                {/* Review text */}
                <blockquote className="mt-3 flex-1 text-sm leading-7 text-zinc-700">
                  {t.text}
                </blockquote>

                {/* Stars */}
                <div className="mt-4">
                  <Stars size="sm" />
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: color }}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                      <p className="text-xs text-zinc-400">Google Review</p>
                    </div>
                  </div>
                  <GoogleG />
                </div>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-7 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
        >
          <GoogleG />
          View all reviews on Google
        </a>
      </div>
    </section>
  );
}
