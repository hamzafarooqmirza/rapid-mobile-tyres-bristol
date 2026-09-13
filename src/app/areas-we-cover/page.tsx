import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AreasGrid from "@/components/AreasGrid";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Areas | Bristol & Nearby Locations",
  description:
    "Find mobile tyre fitting coverage across Bristol and nearby areas. Check your location for 24/7 tyre replacement and roadside tyre assistance.",
};

export default function AreasWeCoverPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Areas We Cover" breadcrumb="Home / Areas We Cover" />
        <AreasGrid />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
