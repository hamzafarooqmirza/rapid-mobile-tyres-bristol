import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-chew-stoke")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Chew Stoke | 24/7 Tyre Service",
  description:
    "Need mobile tyre fitting in Chew Stoke? Get flat or damaged tyres replaced at home or a roadside location.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
