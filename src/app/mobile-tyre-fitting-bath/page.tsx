import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-bath")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Bath | 24/7 Tyre Replacement",
  description:
    "Mobile tyre fitting in Bath for flat, damaged and worn tyres. Get 24/7 tyre replacement at home, work or a suitable roadside location.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
