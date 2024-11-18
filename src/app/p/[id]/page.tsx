import { Metadata } from "next";
import React from "react";

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

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-800 p-6 text-white">
      <div className="text-center">
        <div className="loader mb-6"></div>
        <h1 className="text-4xl font-extrabold text-indigo-400">
          Redirecting to Apidon App...
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          You&apos;ll be redirected to the app in a few seconds.
        </p>
        <p className="text-md mt-5 text-gray-400">
          If you&apos;re using an Android device, the app will become available soon.
          Stay tuned!
        </p>
      </div>
    </div>
  );
}
