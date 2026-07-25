import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AreasGrid from "@/components/AreasGrid";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Areas We Cover - Rapid Mobile Tyres Bristol",
  description:
    "Rapid Mobile Tyres Bristol covers Bristol, Bridgewater, Bath, Chepstow, Gloucestershire, Magor, Newport, and Weston-Super-Mare with 24/7 mobile tyre fitting.",
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
