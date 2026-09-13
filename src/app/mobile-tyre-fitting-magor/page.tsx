import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-magor")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Magor | 24/7 Tyre Replacement",
  description:
    "Need mobile tyre fitting in Magor? Get flat or damaged tyres replaced at your home, workplace or roadside.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
