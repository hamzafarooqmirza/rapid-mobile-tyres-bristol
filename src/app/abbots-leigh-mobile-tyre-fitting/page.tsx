import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "abbots-leigh-mobile-tyre-fitting")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Abbots Leigh | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Abbots Leigh for flat, damaged and worn tyres. Get 24/7 tyre assistance at home, work or suitable roadside locations.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
