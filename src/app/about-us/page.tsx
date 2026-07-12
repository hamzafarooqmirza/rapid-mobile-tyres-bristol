import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import AboutWhyChooseUs from "@/components/AboutWhyChooseUs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Rapid Mobile Tyres Ltd - Trusted 24/7 Mobile Tyre Services",
  description:
    "Rapid Mobile Tyres Bristol brings professional tyre fitting and repair straight to your door, wherever you are across Bristol and the surrounding areas.",
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
