"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="https://rapid-tyres.com/wp-content/uploads/2024/10/Rapid-Tyres.png"
            alt={siteConfig.name}
            width={1906}
            height={397}
            className="h-10 w-auto"
            preload
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
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
          className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 text-zinc-200 lg:hidden"
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
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-orange-500"
              >
                {link.label}
              </a>
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
