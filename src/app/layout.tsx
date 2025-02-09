"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Roboto_Flex } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const font = Roboto_Flex({ subsets: ["latin"], weight: "variable" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Basic Metadata */}
        <title>Apidon • Make Every Event Unique</title>
        <meta name="description" content="Make Every Event Unique" />

        {/* Icons for Light and Dark Modes */}
        <link
          rel="icon"
          type="image/png"
          media="(prefers-color-scheme: light)"
          href="/images/android-icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          media="(prefers-color-scheme: dark)"
          href="/images/android-icon-48x48.png"
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Apidon • Make Every Event Unique" />
        <meta property="og:description" content="Make Every Event Unique" />
        <meta property="og:url" content="https://apidon.com" />
        <meta property="og:site_name" content="Apidon" />
        <meta property="og:image" content="https://apidon.com/images/og.png" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:type" content="website" />

        <meta name="apple-itunes-app" content="app-id=6737543465"></meta>
      </head>

      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY || ""}
      />

      <body className={`bg-black ${font.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "./providers";
