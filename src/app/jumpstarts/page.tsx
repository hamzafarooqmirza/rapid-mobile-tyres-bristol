import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceIntro from "@/components/ServiceIntro";
import FeatureGrid from "@/components/FeatureGrid";
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
          note={jumpStartPage.openingHours}
        />
        <ServiceIntro intro={jumpStartPage.intro} />
        <FeatureGrid
          eyebrow="Know the causes"
          title="Common Reasons for Needing a Jump Start"
          items={jumpStartPage.commonReasons}
          tone="light"
          columns={3}
        />
        <StepList steps={jumpStartPage.steps} />
        <FeatureGrid
          eyebrow="Why choose us"
          title="Why Choose Rapid Mobile Tyres for Jump Start?"
          items={jumpStartPage.whyChoose}
          tone="light"
        />
        <FeatureGrid
          eyebrow="Prevention"
          title="Tips to Avoid Needing a Jump Start"
          items={jumpStartPage.tips}
          tone="dark"
          columns={3}
        />
        <Faq items={jumpStartPage.faqs} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
