import { testimonials } from "@/lib/data";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Rapid+Mobile+Tyres+Bristol+reviews#lrd=0x48718e95ab3bd8cb:0x5e3a40ad0f5f8b8b,1";

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

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57C21.36 18.1 22.56 15.4 22.56 12.25z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#FBBC04" className="h-[18px] w-[18px]">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const cards = [...testimonials, ...testimonials];

  return (
    <section className="bg-zinc-50 py-20 sm:py-28">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Google Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="#FBBC04" className="h-5 w-5">
                  <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-zinc-800">5.0</span>
            <span className="text-sm text-zinc-500">·</span>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1a73e8] hover:underline"
            >
              See all reviews on Google
            </a>
          </div>
        </div>
      </div>

      {/* Infinite carousel */}
      <div className="relative mt-14 overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-50 to-transparent" />

        <div className="flex w-max gap-5 animate-marquee px-5">
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
                className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: color }}
                    >
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-zinc-500">Google Review</p>
                    </div>
                  </div>
                  <GoogleLogo />
                </div>

                {/* Stars */}
                <div className="mt-3 flex items-center gap-2">
                  <Stars />
                  <span className="text-xs text-zinc-400">· a week ago</span>
                </div>

                {/* Review text */}
                <blockquote className="mt-3 flex-1 text-sm leading-6 text-zinc-600 line-clamp-4">
                  {t.text}
                </blockquote>

                {/* Link */}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-[#1a73e8] hover:underline"
                >
                  View on Google
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                    <path d="M6.5 1H2a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V8.5M10 1h5m0 0v5m0-5L7 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
