import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-bishopsworth")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Bishopsworth | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Bishopsworth for flat or damaged tyres. Get tyre replacement brought directly to you.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
