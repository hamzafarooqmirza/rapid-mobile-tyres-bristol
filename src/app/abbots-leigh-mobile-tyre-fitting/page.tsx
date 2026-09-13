import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "abbots-leigh-mobile-tyre-fitting")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Abbots Leigh | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Abbots Leigh for flat or damaged tyres. Get convenient tyre assistance at your location.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
