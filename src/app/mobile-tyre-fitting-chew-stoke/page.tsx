import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-chew-stoke")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Chew Stoke | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Chew Stoke for flat, damaged and worn tyres. Get 24/7 tyre assistance at your home or a suitable roadside location.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
