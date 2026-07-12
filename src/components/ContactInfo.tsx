import { contactMethods, siteConfig } from "@/lib/data";

export default function ContactInfo() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Contact Rapid Mobile Tyres Bristol
          </h2>
          <p className="mt-4 text-zinc-600">
            Ready to book an appointment or need emergency roadside help?
            Reach out any way that suits you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-zinc-950">
                {method.title}
              </h3>
              {method.href ? (
                <a
                  href={method.href}
                  className="mt-2 block text-sm font-semibold text-orange-600 hover:text-orange-500"
                >
                  {method.value}
                </a>
              ) : (
                <p className="mt-2 text-sm font-semibold text-zinc-950">
                  {method.value}
                </p>
              )}
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-zinc-600 hover:text-orange-600"
          >
            Follow us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
