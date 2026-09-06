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
                          <td className="px-4 py-3 align-top text-zinc-700">
                            Various (see Google&apos;s Cookie Policy)
                          </td>
                          <td className="px-4 py-3 align-top text-zinc-700">Google</td>
                          <td className="px-4 py-3 align-top text-zinc-700">
                            Set by the embedded Google Maps iframe on our homepage.
                            May be used by Google for preferences, security, and service
                            improvement purposes.
                          </td>
                          <td className="px-4 py-3 align-top text-zinc-700">
                            Third-party (functional / analytics)
                          </td>
                          <td className="px-4 py-3 align-top text-zinc-700">
                            Varies — see Google&apos;s Cookie Policy
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 align-top text-zinc-700">
                            Infrastructure cookies (if any)
                          </td>
                          <td className="px-4 py-3 align-top text-zinc-700">Vercel</td>
                          <td className="px-4 py-3 align-top text-zinc-700">
                            Technical cookies set at the hosting infrastructure level
                            to support website operation and security.
                          </td>
                          <td className="px-4 py-3 align-top text-zinc-700">
                            Strictly necessary
                          </td>
                          <td className="px-4 py-3 align-top text-zinc-700">
                            Varies — see Vercel&apos;s Privacy Policy
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
                  5. Third-Party Services and Embedded Content
                </h2>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  5.1 Google Maps
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Our homepage includes an embedded Google Maps iframe that displays our
                    business location. When this map loads, your browser makes a direct
                    connection to Google&apos;s servers, and Google may set third-party cookies
                    on your device in accordance with its own cookie and privacy policies.
                  </p>
                  <p>
                    These cookies are outside our direct control. They may include cookies
                    used by Google for preferences, security, and service improvement purposes.
                    For details of the cookies Google Maps may set, please refer to{" "}
                    <span className="font-medium text-zinc-800">Google&apos;s Privacy Policy</span>{" "}
                    and{" "}
                    <span className="font-medium text-zinc-800">Google&apos;s Cookie Policy</span>.
                  </p>
                  <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800">
                    <span className="font-semibold">Note: </span>
                    We are currently reviewing how the Google Maps embed interacts with our
                    cookie obligations under UK PECR. Until this is resolved, please be
                    aware that loading the map on our homepage may result in Google setting
                    third-party cookies on your device. If you wish to prevent this, you can
                    disable third-party cookies in your browser settings (see section 7).
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  5.2 Facebook and WhatsApp
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    This website contains links to our Facebook page and a WhatsApp contact
                    link. These are plain outbound links — no Facebook SDK, Meta Pixel, or
                    WhatsApp widget is embedded on this website. No Facebook or WhatsApp
                    cookies are set as a result of visiting our website.
                  </p>
                  <p>
                    If you follow these links, cookies may be set by those platforms in
                    accordance with their own privacy and cookie policies.
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  5.3 Google Search Console
                </h3>
                <div className="mt-3 text-sm leading-7 text-zinc-600">
                  <p>
                    This website is registered with Google Search Console. This involves a
                    static HTML verification file that Google&apos;s crawlers read to confirm
                    site ownership. It does not result in cookies being set on
                    visitors&apos; browsers.
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
                    The embedded Google Maps iframe on our homepage may cause Google to set
                    third-party cookies on your device when that section of the page loads.
                    These are not strictly necessary cookies. We are reviewing how to
                    implement an appropriate consent mechanism for this embed — for example,
                    replacing the auto-loading iframe with a click-to-load placeholder that
                    only connects to Google after you choose to view the map.
                  </p>
                  <p>
                    Until this is in place, if you wish to prevent Google Maps cookies from
                    being set, you can block third-party cookies in your browser settings
                    (see section 7 below), which will prevent the map from loading.
                  </p>
                  <p>
                    No analytics, advertising, or other non-essential cookies are set by
                    our application. If we add analytics or marketing tools in the future,
                    we will implement an appropriate consent mechanism before setting those
                    cookies, and update this policy accordingly.
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
              This website is designed to minimise cookie use. We are currently reviewing
              our Google Maps embed to implement an appropriate click-to-load consent
              mechanism. If any other non-essential cookies are added — for example,
              analytics tools — this policy will be updated and consent obtained before
              any such cookies are set.
            </p>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
