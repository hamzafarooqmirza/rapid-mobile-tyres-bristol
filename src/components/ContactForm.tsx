"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/data";

const services = [
  "Mobile Tyre Fitting",
  "Mobile Tyre Change",
  "Mobile Tyre Repair",
  "Emergency Tyre Service",
  "Breakdown Recovery",
  "Mobile Tyre",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postCode, setPostCode] = useState("");
  const [service, setService] = useState(services[0]);
  const [tyreSize, setTyreSize] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Enquiry from ${name || "website contact form"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Post Code: ${postCode}`,
      `Which Service: ${service}`,
      `Tyre Size: ${tyreSize}`,
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
                Full Name
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
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-zinc-800">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="postCode" className="text-sm font-medium text-zinc-800">
                Post Code
              </label>
              <input
                id="postCode"
                type="text"
                required
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
                className="mt-2 h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="text-sm font-medium text-zinc-800">
              Which Service
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-2 h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-orange-500"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="tyreSize" className="text-sm font-medium text-zinc-800">
              Tyre Size
            </label>
            <input
              id="tyreSize"
              type="text"
              placeholder="e.g. 205/55 R16"
              value={tyreSize}
              onChange={(e) => setTyreSize(e.target.value)}
              className="mt-2 h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-orange-500"
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
