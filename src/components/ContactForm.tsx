"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Enquiry from ${name || "website contact form"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="bg-zinc-100 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 sm:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
            Send a message
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Request a Callback
          </h2>
          <p className="mt-4 text-zinc-600">
            Fill in the form and it will open your email client with the
            details ready to send to us. For urgent roadside help, please
            call us directly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-zinc-800">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-zinc-800">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-zinc-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-zinc-800">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
