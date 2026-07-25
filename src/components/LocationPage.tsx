import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceIntro from "@/components/ServiceIntro";
import LocationServices from "@/components/LocationServices";
import StepList from "@/components/StepList";
import LocationWhyChoose from "@/components/LocationWhyChoose";
import LocationAreasServed from "@/components/LocationAreasServed";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { locationHowItWorks, type LocationPageData } from "@/lib/locationsData";

export default function LocationPage({ location }: { location: LocationPageData }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title={`Mobile Tyre Fitting in ${location.name}`}
          breadcrumb={`Home / Areas We Cover / ${location.name}`}
          subtitle={location.tagline}
        />
        <ServiceIntro intro={location.intro} benefits={location.benefits} />
        <LocationServices />
        <StepList steps={locationHowItWorks} />
        <LocationWhyChoose town={location.name} />
        <LocationAreasServed town={location.name} areas={location.areasServed} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
