import type { MetadataRoute } from "next";
import { locationPages } from "@/lib/stubPages";

const BASE_URL = "https://rapid-tyres.com";

const corePages: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/mobile-tyre-fitting`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/jumpstarts`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/fuel-delivery`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/services`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/areas-we-cover`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/about-us`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/contact`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locationEntries: MetadataRoute.Sitemap = locationPages.map((page) => ({
    url: `${BASE_URL}/${page.path}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...corePages, ...locationEntries];
}
