import { siteConfig } from "@/lib/data";

export default function ServiceIntro({
  intro,
  benefits,
}: {
  intro: string;
  benefits?: string[];
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
        <p className="text-zinc-600 leading-7">{intro}</p>

        {benefits && (
          <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" aria-hidden>
                  <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}

        <a
          href={siteConfig.phoneHref}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
        >
          Call {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}
