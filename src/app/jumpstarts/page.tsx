import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceIntro from "@/components/ServiceIntro";
import StepList from "@/components/StepList";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { jumpStartPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jump Start Service - Rapid Mobile Tyres Bristol",
  description:
    "Flat battery? Rapid Mobile Tyres Bristol offers fast, 24/7 mobile jump start assistance across Bristol and the surrounding areas.",
};

export default function JumpstartsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Jump Start"
          breadcrumb="Home / Services / Jump Start"
          subtitle={jumpStartPage.tagline}
        />
        <ServiceIntro intro={jumpStartPage.intro} />
        <StepList steps={jumpStartPage.steps} />
        <Faq items={jumpStartPage.faqs} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
