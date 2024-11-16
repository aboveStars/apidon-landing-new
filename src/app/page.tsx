import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Apidon • Make Every Event Unique",
  description: "Make Every Event Unique",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/images/android-icon-48x48.png",
      href: "/images/android-icon-48x48.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/images/android-icon-48x48.png",
      href: "/images/android-icon-48x48.png",
    },
  ],
  openGraph: {
    title: "Apidon • Make Every Event Unique",
    description: "Make Every Event Unique",
    url: "https://apidon.com",
    siteName: "Apidon",
    images: [
      {
        url: "https://apidon.com/images/og.png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY || ""}
      />

      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </>
  );
}
