import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-brockley")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Brockley | 24/7 Tyre Replacement",
  description:
    "Mobile tyre fitting in Brockley for flat, damaged and worn tyres. Get 24/7 tyre replacement at home, work or suitable roadside locations.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
