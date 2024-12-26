"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RedirectPageComponent() {
  const pathName = usePathname();

  const handleManualRedirect = () => {
    const appSlug = process.env.NEXT_PUBLIC_APP_SLUG;
    if (!appSlug) return;

    if (!pathName) return;

    // One slash is comes from the pathname.
    const deepLink = `${appSlug}:/${pathName}`;

    window.location.href = deepLink;
  };

  /**
   * bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
   */

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black p-8 text-center text-white">
      <div className="h-28 w-28 animate-spin rounded-full border-8 border-blue-500 border-t-transparent"></div>
      <h1 className="mb-5 mt-8 text-4xl font-bold">Hang Tight!</h1>
      <p>
        We&apos;re taking you to the app, where you can continue your
        exploration in just a moment.
      </p>
      <div
        className="mt-4 flex cursor-pointer items-center justify-center gap-1"
        onClick={handleManualRedirect}
      >
        <p className="text-base">Not redirected?</p>
        <p className="text-blue-500 underline">Click here</p>
      </div>

      <p className="mt-8 text-sm">
        Don't have the app yet? Download it from the links below to get started.
      </p>
      <div className="mt-1 flex items-center justify-center">
        <Link
          href={process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL}
          className="relative inline-block"
        >
          <Image src="/images/appstore.svg" width={175} height={175} alt="" />
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL}
          className="relative inline-block"
        >
          <Image
            src="/images/google-play-badge.png"
            width={210}
            height={1}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
