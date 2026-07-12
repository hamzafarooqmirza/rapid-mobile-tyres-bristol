import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesShowcase from "@/components/ServicesShowcase";
import TyreBrands from "@/components/TyreBrands";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { servicesFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services - Rapid Tyres Ltd | Mobile Tyre Fitting & More",
  description:
    "Car, SUV and van tyres, mobile tyre fitting, jump starts and fuel delivery — all fitted at your home, workplace, or roadside across Bristol and the South West.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Our Services" breadcrumb="Home / Services" />
        <ServicesShowcase />
        <TyreBrands />
        <Faq items={servicesFaqs} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
