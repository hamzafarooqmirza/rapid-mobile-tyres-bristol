import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceIntro from "@/components/ServiceIntro";
import StepList from "@/components/StepList";
import TyreBrands from "@/components/TyreBrands";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { mobileTyreFittingPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting - Rapid Mobile Tyres Bristol",
  description:
    "Fast, professional mobile tyre fitting at your home, workplace, or roadside across Bristol and the surrounding areas — usually within 45-60 minutes.",
};

export default function MobileTyreFittingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Mobile Tyre Fitting"
          breadcrumb="Home / Services / Mobile Tyre Fitting"
          subtitle={mobileTyreFittingPage.tagline}
        />
        <ServiceIntro intro={mobileTyreFittingPage.intro} benefits={mobileTyreFittingPage.benefits} />
        <StepList steps={mobileTyreFittingPage.steps} />
        <TyreBrands />
        <Faq items={mobileTyreFittingPage.faqs} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
