import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceIntro from "@/components/ServiceIntro";
import FeatureGrid from "@/components/FeatureGrid";
import StepList from "@/components/StepList";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { fuelDeliveryPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Emergency Fuel Delivery - Rapid Mobile Tyres Bristol",
  description:
    "Run out of petrol or diesel? Rapid Mobile Tyres Bristol brings emergency fuel delivery straight to you, anywhere in Bristol and the surrounding areas.",
};

export default function FuelDeliveryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Fuel Delivery"
          breadcrumb="Home / Services / Fuel Delivery"
          subtitle={fuelDeliveryPage.tagline}
          note={fuelDeliveryPage.openingHours}
        />
        <ServiceIntro intro={fuelDeliveryPage.intro} />
        <StepList steps={fuelDeliveryPage.steps} />
        <FeatureGrid
          eyebrow="Why choose us"
          title="Why Choose Rapid Mobile Tyres for Fuel Delivery?"
          items={fuelDeliveryPage.whyChoose}
          tone="light"
          columns={3}
        />
        <Faq items={fuelDeliveryPage.faqs} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
