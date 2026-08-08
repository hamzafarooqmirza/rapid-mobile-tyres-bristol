import { testimonials } from "@/lib/data";
import ReviewCard from "@/components/ReviewCard";

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
          {cards.map((t, i) => (
            <ReviewCard
              key={`${t.name}-${i}`}
              review={{ name: t.name, timeAgo: t.timeAgo, text: t.text }}
              color={avatarColors[i % avatarColors.length]}
              googleReviewsUrl={GOOGLE_REVIEWS_URL}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
