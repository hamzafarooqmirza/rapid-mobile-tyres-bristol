import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import AreasWeServe from "@/components/AreasWeServe";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <AreasWeServe />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
