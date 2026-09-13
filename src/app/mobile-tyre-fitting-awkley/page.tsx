import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-awkley")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Awkley | 24/7 Tyre Replacement",
  description:
    "Mobile tyre fitting in Awkley for flat or damaged tyres. Get tyre assistance at home or a suitable roadside location.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
