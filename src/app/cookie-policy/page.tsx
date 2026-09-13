import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookie Policy | Rapid Mobile Tyres",
  description:
    "Read the Rapid Mobile Tyres Cookie Policy to understand how cookies and similar technologies may be used when you visit our website",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rapid-tyres.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Cookie Policy" breadcrumb="Home / Cookie Policy" />
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">

            <p className="text-sm text-zinc-500">Last updated: 10 September 2026</p>

            <p className="mt-4 text-zinc-600 leading-7">
              This Cookie Policy explains how Rapid Mobile Tyres uses cookies and similar
              technologies when you visit{" "}
              <span className="font-medium text-zinc-800">rapid-tyres.com</span>. It should be
              read alongside our{" "}
              <Link href="/privacy-policy" className="text-orange-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>

            <div className="mt-12 space-y-10">

              {/* 1 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  1. What Are Cookies?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Cookies are small text files placed on your device (computer, tablet, or
                    smartphone) when you visit a website. They allow the website or third parties
                    to remember information — for example, to keep pages functioning correctly or
                    to identify returning visitors.
                  </p>
                  <p>
                    Cookies set by the website you are visiting are called first-party cookies.
                    Cookies set by other organisations whose content appears on the page are called
                    third-party cookies. Cookies may be session cookies (deleted when you close
                    your browser) or persistent cookies (remaining on your device for a set period
                    or until you delete them).
                  </p>
                  <p>
                    Similar technologies include local storage, pixels, scripts, and tags that can
                    store or access information on your device. This website currently uses one
                    such technology: our cookie preference choice is stored in your browser&apos;s
                    local storage so the website remembers it on future visits.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  2. How We Use Cookies
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    This website is built to minimise cookie use. Based on a full inspection
                    of the codebase and hosting infrastructure, the only technologies that
                    access information on your device are:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      <span className="font-medium text-zinc-800">Strictly necessary: </span>
                      Technical cookies set at the hosting infrastructure level by our hosting
                      provider (Vercel). These are required for the website to be delivered to
                      your browser.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Local storage (preference): </span>
                      We use your browser&apos;s local storage to remember your cookie consent
                      preference so you are not shown the consent banner on every visit.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Optional — Google Maps: </span>
                      Our homepage includes an embedded Google Maps iframe. When this iframe
                      loads, your browser connects to Google&apos;s servers and Google may set
                      third-party cookies. This only occurs after you accept optional cookies
                      or actively click &ldquo;Load Map&rdquo; on the placeholder.
                    </li>
                  </ul>
                  <p>
                    We do not use analytics cookies, advertising or marketing cookies, or any
                    other non-essential tracking technologies.
                  </p>
                  <p>
                    Our website fonts (Geist and Geist Mono) are downloaded and self-hosted at
                    build time by our hosting platform. No font requests reach Google servers
                    when you visit the site.
                  </p>
                  <p>
                    Our contact form uses a{" "}
                    <code className="rounded bg-zinc-100 px-1 text-xs text-zinc-700">mailto:</code>{" "}
                    link that opens your own email client. No data is submitted to our server
                    and no cookies are set through this process.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  3. Cookies and Technologies We Use
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  The table below covers every technology we can verify from the website
                  codebase and hosting setup. Google Maps cookies are only set if you
                  accept optional cookies or click &ldquo;Load Map&rdquo;.
                </p>

                <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200">
                  <table className="min-w-full divide-y divide-zinc-200 text-xs">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-800">
                          Name / Technology
                        </th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-800">
                          Provider
                        </th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-800">
                          Purpose
                        </th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-800">
                          Category
                        </th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-800">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 bg-white">
                      <tr>
                        <td className="px-4 py-3 align-top font-medium text-zinc-700">
                          Infrastructure cookies (if any)
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Vercel, Inc. (first-party hosting)
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Technical cookies set at the hosting and edge network level to deliver
                          the website and maintain security.
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Strictly Necessary
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Varies — see Vercel&apos;s Privacy Policy
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 align-top font-medium text-zinc-700">
                          rapid_tyres_consent (local storage)
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Rapid Mobile Tyres (first-party)
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Stores your cookie consent preference (&ldquo;accepted&rdquo; or
                          &ldquo;rejected&rdquo;) so the consent banner is not shown on
                          every visit.
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Strictly Necessary (consent record)
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Persistent (until you clear site data or withdraw consent)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 align-top font-medium text-zinc-700">
                          Various Google cookies (see Google&apos;s Cookie Policy)
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Google LLC (third-party)
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Set when the embedded Google Maps iframe loads on our homepage.
                          May be used by Google for preferences, security, and service
                          improvement. Only set after you accept optional cookies or click
                          &ldquo;Load Map&rdquo;.
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Optional (functional / third-party)
                        </td>
                        <td className="px-4 py-3 align-top text-zinc-600">
                          Varies — see Google&apos;s Cookie Policy
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  4. Third-Party Services
                </h2>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  4.1 Google Maps
                </h3>
                <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-600">
                  <p>
                    Our homepage includes an embedded Google Maps iframe that displays our
                    business location. When this iframe loads, your browser makes a direct
                    connection to Google&apos;s servers. Google may set cookies and access
                    information on your device in accordance with its own policies. These
                    cookies are outside our control.
                  </p>
                  <p>
                    To protect your privacy, the Google Maps iframe does not load
                    automatically. It is displayed as a placeholder with a &ldquo;Load
                    Map&rdquo; button. The map — and any cookies Google may set — only loads
                    if you accept optional cookies via our consent banner or actively click
                    &ldquo;Load Map&rdquo;. You are informed about this before clicking.
                  </p>
                  <p>
                    For details of cookies Google Maps may set, see{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Google&apos;s Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/technologies/cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Google&apos;s Cookie Policy
                    </a>
                    .
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  4.2 Hosting — Vercel
                </h3>
                <div className="mt-3 text-sm leading-7 text-zinc-600">
                  <p>
                    This website is hosted by Vercel, Inc. Vercel may set technical cookies
                    at the infrastructure level as part of normal hosting, security, and edge
                    network operations. These are not set by our application code and are not
                    used to identify or track you across other websites.
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  4.3 Facebook and WhatsApp
                </h3>
                <div className="mt-3 text-sm leading-7 text-zinc-600">
                  <p>
                    Our website contains plain links to our Facebook page and a WhatsApp
                    contact button. No Facebook SDK, Meta Pixel, or WhatsApp widget is
                    embedded. No Facebook or WhatsApp cookies are set on your device as a
                    result of visiting our website. If you follow those links, cookies may
                    be set by those platforms under their own policies.
                  </p>
                </div>
              </div>

              {/* 5 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  5. Your Cookie Choices
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    When you first visit this website, a consent banner gives you equal, clear
                    choices:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      <span className="font-medium text-zinc-800">Accept Optional: </span>
                      Google Maps will load automatically on our homepage.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Reject Optional: </span>
                      Google Maps will not load automatically. A placeholder is shown and you
                      can still load the map on demand by clicking &ldquo;Load Map&rdquo;,
                      having been informed of what will happen.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-800">Manage Preferences: </span>
                      Opens a preferences panel where you can enable or disable the Google Maps
                      category individually.
                    </li>
                  </ul>
                  <p>
                    No optional technologies are activated before you make a choice. Continuing
                    to browse without interacting with the banner does not constitute consent.
                    Strictly necessary infrastructure cookies may be set regardless of your
                    choice, as they are required to deliver the website.
                  </p>
                  <p>
                    Refusing optional cookies does not prevent access to any page or content on
                    this website.
                  </p>
                </div>
              </div>

              {/* 6 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  6. Changing or Withdrawing Your Choice
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    You can reopen the preferences panel at any time using the{" "}
                    <span className="font-medium text-zinc-800">Cookie Settings</span> link in
                    the footer of every page. From there you can change your choice or withdraw
                    consent for the Google Maps embed.
                  </p>
                  <p>
                    If you withdraw consent, the Google Maps iframe will revert to the
                    placeholder on your next visit or page load. Withdrawing consent does not
                    delete any cookies that Google may already have set; to remove those, use
                    your browser&apos;s cookie controls (see section 7).
                  </p>
                  <p>
                    Your preference is stored in your browser&apos;s local storage under the key{" "}
                    <code className="rounded bg-zinc-100 px-1 text-xs text-zinc-700">
                      rapid_tyres_consent
                    </code>
                    . Clearing your browser&apos;s site data will remove this record, and the
                    consent banner will appear again on your next visit.
                  </p>
                </div>
              </div>

              {/* 7 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  7. Browser Controls
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    You can also manage, block, or delete cookies through your browser
                    settings. Most browsers allow you to view cookies, block third-party
                    cookies, or clear all stored data. Common browser guides:
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
                    Browser controls are a useful secondary mechanism. For technologies
                    controlled by this website (such as whether Google Maps loads
                    automatically), the Cookie Settings link in our footer is the primary
                    mechanism and should be used first.
                  </p>
                </div>
              </div>

              {/* 8 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  8. Changes to This Cookie Policy
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We may update this Cookie Policy if we add new technologies to the website,
                    if our hosting arrangements change, or if legal requirements change. Any
                    updates will be published on this page with a revised &ldquo;Last
                    updated&rdquo; date. We encourage you to check this page from time to time.
                    If we add any technology that requires consent, we will update this policy
                    and implement an appropriate consent mechanism before any such cookies or
                    technologies are activated.
                  </p>
                </div>
              </div>

              {/* 9 */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  9. Contact Us
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
                  <p>
                    If you have any questions about this Cookie Policy or how we handle your
                    data, please contact us:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li>
                      <span className="font-semibold text-zinc-800">Business name: </span>
                      Rapid Mobile Tyres
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Address: </span>
                      Ryeleaze, Shirehampton, Bristol BS11 9FN, United Kingdom
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Phone: </span>
                      <a href={siteConfig.phoneHref} className="text-orange-600 hover:underline">
                        07494 247246
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
                  </ul>
                  <p className="pt-2">
                    You can also read our{" "}
                    <Link href="/privacy-policy" className="text-orange-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-and-conditions" className="text-orange-600 hover:underline">
                      Terms &amp; Conditions
                    </Link>
                    .
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
