import { testimonials } from "@/lib/data";

function Stars() {
  return (
    <div className="flex gap-0.5 text-orange-500" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-zinc-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-6 text-zinc-600">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-zinc-950">
                {testimonial.name}
                <span className="block text-xs font-normal text-zinc-500">
                  Posted on Google
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
