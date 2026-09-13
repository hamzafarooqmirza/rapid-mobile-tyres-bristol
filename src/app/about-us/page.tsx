import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import AboutWhyChooseUs from "@/components/AboutWhyChooseUs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Rapid Mobile Tyres | Mobile Tyre Fitters Bristol",
  description:
    "Learn about Rapid Mobile Tyres, providing 24/7 mobile tyre fitting and roadside tyre services across Bristol.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <WhoWeAre />
        <AboutWhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
