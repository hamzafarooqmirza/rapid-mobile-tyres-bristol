import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";
import { locationPages } from "@/lib/stubPages";

const services = [
  { label: "Mobile Tyre Fitting", href: "/mobile-tyre-fitting" },
  { label: "Jump Start", href: "/jumpstarts" },
  { label: "Fuel Delivery", href: "/fuel-delivery" },
];

const featuredAreas = locationPages.slice(0, 8);

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16 text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="text-lg font-bold text-zinc-50">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-6">
            Fast, reliable mobile tyre fitting that comes straight to you,
            anywhere in Bristol and surrounding areas.
          </p>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-orange-500"
          >
            Facebook
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-50">
            Useful Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-orange-500">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/refund-policy" className="hover:text-orange-500">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-50">
            Our Services
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="hover:text-orange-500">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-50">
            Areas We Cover
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {featuredAreas.map((area) => (
              <li key={area.path}>
                <Link href={`/${area.path}`} className="hover:text-orange-500">
                  {area.title.replace("Mobile Tyre Fitting in ", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-50">
            More Info
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              Phone Number{" "}
              <a href={siteConfig.phoneHref} className="hover:text-orange-500">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              Email Address{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-orange-500"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>Location {siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-800 px-6 pt-6 text-xs text-zinc-500 sm:px-10">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
        reserved.
      </div>
    </footer>
  );
}
