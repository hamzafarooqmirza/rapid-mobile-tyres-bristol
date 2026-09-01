import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rapid-tyres.com"),
  title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
  description:
    "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
  openGraph: {
    title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
    description:
      "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
    images: [{ url: "/rapid-mobile-tyres-open-graph.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
    description:
      "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
    images: ["/rapid-mobile-tyres-open-graph.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
