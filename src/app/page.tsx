import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import AreasWeServe from "@/components/AreasWeServe";
import MapAndLocations from "@/components/MapAndLocations";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { faqs, siteConfig } from "@/lib/data";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  url: "https://rapid-tyres.com",
  telephone: "+447494247246",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ryeleaze, Shirehampton",
    addressLocality: "Bristol",
    postalCode: "BS11 9FN",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4882,
    longitude: -2.6866,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    "Bristol",
    "Bath",
    "Bridgwater",
    "Newport",
    "Chepstow",
    "Weston-super-Mare",
    "Gloucester",
    "Magor",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Tyre & Roadside Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Tyre Fitting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Mobile Tyre Fitting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jump Start" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuel Delivery" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Van Tyre Fitting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SUV Tyre Fitting" } },
    ],
  },
  sameAs: ["https://www.facebook.com/rapidmobiletyresltd"],
  image: "https://rapid-tyres.com/rapid-mobile-tyres-open-graph.webp",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: "https://rapid-tyres.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://rapid-tyres.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <AreasWeServe />
        <MapAndLocations />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
