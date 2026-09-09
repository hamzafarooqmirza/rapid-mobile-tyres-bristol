import { testimonials } from "@/lib/data";
import ReviewCard from "@/components/ReviewCard";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Rapid+Mobile+Tyres+Bristol/@51.4826387,-2.6754945,17z/data=!4m8!3m7!1s0x4871e7905012dbc9:0x9f066a077fbfa6eb!8m2!3d51.4826387!4d-2.6729196!9m1!1b1!16s%2Fg%2F11t3nvhxkt";

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

const DEFAULT_VISIBLE_COUNT = 9;

export default function Testimonials({
  visibleCount = DEFAULT_VISIBLE_COUNT,
  columns = 3,
}: {
  visibleCount?: number;
  columns?: 3 | 4;
}) {
  const visibleReviews = testimonials.slice(0, visibleCount);
  const gridColumns = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section className="bg-zinc-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Heading */}
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

        {/* Static review grid */}
        <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${gridColumns}`}>
          {visibleReviews.map((t, i) => (
            <ReviewCard
              key={`${t.name}-${i}`}
              review={{ name: t.name, timeAgo: t.timeAgo, text: t.text }}
              color={avatarColors[i % avatarColors.length]}
              googleReviewsUrl={GOOGLE_REVIEWS_URL}
            />
          ))}
        </div>

        {/* More reviews CTA */}
        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:border-orange-500 hover:text-orange-600"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57C21.36 18.1 22.56 15.4 22.56 12.25z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
