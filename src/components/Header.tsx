"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, serviceMenuLinks, siteConfig } from "@/lib/data";
import { locationPages } from "@/lib/stubPages";

const Chevron = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function MegaMenu({ label, href, panel }: { label: string; href: string; panel: React.ReactNode }) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors hover:text-orange-600"
      >
        {label}
        <Chevron />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {panel}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/rapid-mobile-tyres-logo.webp"
            alt={siteConfig.name}
            width={1313}
            height={363}
            className="h-10 w-auto"
            preload
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <MegaMenu
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  panel={
                    <div className="w-56 rounded-xl border border-zinc-200 bg-white p-3 shadow-xl">
                      {serviceMenuLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-orange-600"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  }
                />
              );
            }

            if (link.label === "Areas We Serve") {
              return (
                <MegaMenu
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  panel={
                    <div className="grid w-[640px] grid-cols-3 gap-x-6 gap-y-1 rounded-xl border border-zinc-200 bg-white p-4 shadow-xl">
                      {locationPages.map((loc) => (
                        <Link
                          key={loc.path}
                          href={`/${loc.path}`}
                          className="rounded-md px-2 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-orange-600"
                        >
                          {loc.title.replace(/^Mobile Tyre Fitting in /, "")}
                        </Link>
                      ))}
                      <Link
                        href="/areas-we-cover"
                        className="col-span-3 mt-2 rounded-md border-t border-zinc-200 px-2 pt-3 text-sm font-semibold text-orange-600 hover:text-orange-500"
                      >
                        View All Areas
                      </Link>
                    </div>
                  }
                />
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-orange-600"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-orange-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
          >
            Emergency Call: {siteConfig.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-700 lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-orange-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={siteConfig.phoneHref}
            className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-orange-600 text-sm font-semibold text-white"
          >
            Emergency Call: {siteConfig.phone}
          </a>
        </div>
      )}
    </header>
  );
}
