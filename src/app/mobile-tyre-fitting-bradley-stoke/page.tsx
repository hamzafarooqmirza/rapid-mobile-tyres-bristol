import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-bradley-stoke")!;

export const metadata: Metadata = {
  title: `Mobile Tyre Fitting in ${location.name} - Rapid Mobile Tyres Bristol`,
  description: `Fast, reliable mobile tyre fitting in ${location.name}. We come to your home, workplace, or roadside — usually within 45-60 minutes. Call 07494 247246.`,
};

export default function Page() {
  return <LocationPage location={location} />;
}
