import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { allLocations } from "@/lib/locationsData";

const location = allLocations.find((l) => l.path === "mobile-tyre-fitting-magor")!;

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Magor | 24/7 Tyre Replacement",
  description:
    "Mobile tyre fitting in Magor for flat, damaged and worn tyres. Get 24/7 tyre replacement at your home, workplace or suitable roadside location.",
};

export default function Page() {
  return <LocationPage location={location} />;
}
