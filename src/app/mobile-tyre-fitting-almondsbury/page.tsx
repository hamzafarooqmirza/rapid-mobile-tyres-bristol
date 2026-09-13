import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-almondsbury")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Almondsbury | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Almondsbury for flat, damaged and worn tyres. Get 24/7 tyre assistance at home, work or suitable roadside locations.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
