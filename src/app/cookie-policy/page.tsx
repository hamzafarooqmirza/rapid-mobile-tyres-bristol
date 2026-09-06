import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookie Policy - Rapid Mobile Tyres Bristol",
  description:
    "Read the Cookie Policy for Rapid Mobile Tyres Bristol — how cookies and similar technologies are used on this website.",
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Cookie Policy" breadcrumb="Home / Cookie Policy" />
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <p className="text-zinc-600 leading-7">
              This Cookie Policy explains how Rapid Mobile Tyres Ltd (trading as{" "}
              <strong>Rapid Mobile Tyres Bristol</strong>) uses cookies and similar
              technologies on this website. It should be read alongside our{" "}
              <Link href="/privacy-policy" className="text-orange-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-and-conditions" className="text-orange-600 hover:underline">
                Terms &amp; Conditions
              </Link>
              .
            </p>

            <p className="mt-4 text-sm text-zinc-500">Last updated: September 2026</p>

            <div className="mt-12 space-y-10">

              {/* 1. What are cookies */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  1. What Are Cookies?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Cookies are small text files that a website places on your device (computer,
                    tablet, or smartphone) when you visit. They allow the website to remember
                    information about your visit — for example, to keep pages functioning
                    correctly or to identify returning visitors.
                  </p>
                  <p>
                    Cookies set by the website you are visiting are called &quot;first-party
                    cookies&quot;. Cookies set by other organisations whose content appears on
                    the page are called &quot;third-party cookies&quot;.
                  </p>
                  <p>
                    Cookies can be &quot;session cookies&quot; (deleted when you close your
                    browser) or &quot;persistent cookies&quot; (remaining on your device for a
                    set period or until you delete them).
                  </p>
                </div>
              </div>

              {/* 2. How we use cookies */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  2. How This Website Uses Cookies
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    This website is built to minimise cookie use. Based on a full inspection
                    of the codebase:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      We do not use analytics tracking cookies (no Google Analytics, Google Tag
                      Manager, Hotjar, Microsoft Clarity, or similar tools).
                    </li>
                    <li>
                      We do not use advertising or marketing cookies (no Facebook Pixel, Meta
                      SDK, or retargeting tools).
                    </li>
                    <li>
                      We do not use functional or preference cookies to remember your choices
                      on this website.
                    </li>
                    <li>
                      Our fonts are served directly from our own servers (via Next.js font
                      optimisation at build time) — no font requests reach Google at runtime.
                    </li>
                    <li>
                      Our contact form works by opening your email client — no data is
                      submitted to our server and no cookies are set through this process.
                    </li>
                  </ul>
                  <p>
                    The only cookies that may be present on this website are strictly
                    necessary technical cookies set by our hosting infrastructure (Vercel),
                    described in section 3 below.
                  </p>
                </div>
              </div>

              {/* 3. Cookies we use */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  3. Cookies on This Website
                </h2>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  3.1 Strictly Necessary Cookies
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Strictly necessary cookies are essential for the basic operation and
                    security of the website. They do not require your consent under the
                    Privacy and Electronic Communications Regulations (PECR).
                  </p>
                  <p>
                    This website is hosted by Vercel, Inc. Vercel may set technical cookies
                    at the infrastructure level as part of normal hosting, security, and edge
                    network operations. These cookies are not set by our application code and
                    are not used to identify or track you across other websites.
                  </p>
                  <p>
                    We are unable to confirm the exact names and durations of Vercel
                    infrastructure cookies from our application code, as they are managed at
                    the hosting provider level. For full details, please refer to{" "}
                    <span className="font-medium text-zinc-800">Vercel&apos;s Privacy Policy</span>.
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  3.2 Analytics and Performance Cookies
                </h3>
                <div className="mt-3 text-sm leading-7 text-zinc-600">
                  <p>
                    <strong>None.</strong> This website does not use analytics or performance
                    cookies. No Google Analytics, Google Tag Manager, or similar services are
                    installed.
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  3.3 Advertising and Marketing Cookies
                </h3>
                <div className="mt-3 text-sm leading-7 text-zinc-600">
                  <p>
                    <strong>None.</strong> This website does not use advertising or marketing
                    cookies. No tracking pixels, retargeting scripts, or advertising networks
                    are embedded on this website.
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  3.4 Functional and Preference Cookies
                </h3>
                <div className="mt-3 text-sm leading-7 text-zinc-600">
                  <p>
                    <strong>None.</strong> This website does not use functional or preference
                    cookies to store your settings or preferences.
                  </p>
                </div>
              </div>

              {/* 4. Cookie table */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  4. Cookie Summary Table
                </h2>
                <div className="mt-4 text-sm leading-7 text-zinc-600">
                  <p>
                    The table below summarises the cookies we can verify from the website
                    codebase. Infrastructure cookies set at the hosting level by Vercel are
                    not included as their names and durations cannot be confirmed from
                    application code.
                  </p>
                  <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200">
                    <table className="min-w-full divide-y divide-zinc-200 text-xs">
                      <thead className="bg-zinc-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-zinc-800">
                            Cookie Name
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-zinc-800">
                            Provider
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-zinc-800">
                            Purpose
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-zinc-800">
                            Category
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-zinc-800">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 bg-white">
                        <tr>
                          <td
                            colSpan={5}
                            className="px-4 py-4 text-center text-zinc-500 italic"
                          >
                            No application-level cookies have been identified from the
                            website codebase. Any cookies present are set at the hosting
                            infrastructure level by Vercel.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 5. Third-party services */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  5. Third-Party Links and Services
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    This website contains links to our Facebook page and a WhatsApp contact
                    link. These are plain outbound links — no Facebook SDK, Meta Pixel, or
                    WhatsApp widget is embedded on this website. No cookies are set by these
                    services as a result of visiting our website.
                  </p>
                  <p>
                    If you follow these links and visit those platforms, cookies may be set
                    by those platforms in accordance with their own privacy and cookie
                    policies.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Google Search Console: </span>
                    This website is registered with Google Search Console for website
                    performance monitoring. This involves a static verification file that
                    Google&apos;s crawlers read to confirm site ownership. It does not result
                    in any cookies being set on visitors&apos; browsers.
                  </p>
                </div>
              </div>

              {/* 6. Cookie consent */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  6. Cookie Consent and Compliance
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Under the UK Privacy and Electronic Communications Regulations (PECR),
                    consent is required before setting non-essential cookies (such as
                    analytics or advertising cookies). Strictly necessary cookies do not
                    require consent.
                  </p>
                  <p>
                    Because this website currently uses only strictly necessary hosting
                    infrastructure cookies (if any) and no analytics, advertising, or
                    functional cookies, no cookie consent banner is required at this time.
                  </p>
                  <p>
                    If we add any non-essential cookies in the future — for example, if we
                    install analytics tools — we will implement an appropriate cookie consent
                    mechanism before setting those cookies, and update this policy accordingly.
                  </p>
                </div>
              </div>

              {/* 7. Managing cookies */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  7. Managing and Controlling Cookies
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    You can control and manage cookies using your browser settings. Most
                    browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>View the cookies currently stored on your device</li>
                    <li>Block all or certain cookies</li>
                    <li>Delete cookies that have already been set</li>
                    <li>Set your browser to warn you when cookies are being placed</li>
                  </ul>
                  <p>
                    Instructions for managing cookies in common browsers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      <span className="font-medium text-zinc-800">Google Chrome: </span>
                      Settings → Privacy and security → Cookies and other site data
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Mozilla Firefox: </span>
                      Settings → Privacy &amp; Security → Cookies and Site Data
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Apple Safari: </span>
                      Preferences → Privacy → Manage Website Data
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Microsoft Edge: </span>
                      Settings → Cookies and site permissions → Cookies and site data
                    </li>
                  </ul>
                  <p>
                    For more information about cookies and how to manage them, visit{" "}
                    <span className="font-medium text-zinc-800">allaboutcookies.org</span>.
                  </p>
                </div>
              </div>

              {/* 8. Impact of disabling cookies */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  8. Impact of Disabling Cookies
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Because this website relies only on strictly necessary infrastructure
                    cookies (if any), blocking or deleting cookies should not affect your
                    ability to use this website or its core functionality. All pages,
                    services information, and contact methods will remain accessible.
                  </p>
                </div>
              </div>

              {/* 9. Updates */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  9. Updates to This Cookie Policy
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We may update this Cookie Policy from time to time — for example, if we
                    add new services or technologies to the website. Any changes will be
                    published on this page with a revised &quot;Last updated&quot; date. We
                    encourage you to review this page periodically.
                  </p>
                </div>
              </div>

              {/* 10. Contact */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  10. Contact Us
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    If you have any questions about this Cookie Policy or how we handle your
                    data, please contact us:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li>
                      <span className="font-semibold text-zinc-800">Phone: </span>
                      <a href={siteConfig.phoneHref} className="text-orange-600 hover:underline">
                        {siteConfig.phone}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Email: </span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-orange-600 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Address: </span>
                      {siteConfig.address}
                    </li>
                  </ul>
                  <p className="pt-2">
                    You can also read our{" "}
                    <Link href="/privacy-policy" className="text-orange-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-and-conditions" className="text-orange-600 hover:underline">
                      Terms &amp; Conditions
                    </Link>{" "}
                    for more information about how we handle your personal data and the
                    rules governing use of our services.
                  </p>
                </div>
              </div>

            </div>

            <p className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              This website is designed to minimise cookie use. If this changes — for
              example, if analytics tools are added — this policy will be updated and an
              appropriate consent mechanism will be put in place before any non-essential
              cookies are set.
            </p>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
