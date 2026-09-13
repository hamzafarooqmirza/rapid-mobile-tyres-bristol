import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-brockley")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Brockley | 24/7 Tyre Replacement",
  description:
    "Need mobile tyre fitting in Brockley? Get tyre assistance for flat or damaged tyres at home or roadside.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
