import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - Rapid Mobile Tyres Bristol",
  description:
    "Get in touch with Rapid Mobile Tyres Bristol — call, email, or send a message to book mobile tyre fitting, jump starts, or fuel delivery.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Contact Us" breadcrumb="Home / Contact" />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
