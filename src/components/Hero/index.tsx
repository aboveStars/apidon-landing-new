"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import {
  ArrowDownCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import useScreenWidth from "@/hooks/useScreenWidth";
import { Stream } from "@cloudflare/stream-react";

const TEXTS = [
  "Unique!",
  "Memorable!",
  "Impactful!",
  "Stand Out!",
  "Engaging!",
  "Legendary!",
  "Timeless!",
  "Celebrated!",
  "Remarkable!",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const screenWidth = useScreenWidth();

  const isLG = screenWidth >= 992;

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLG && (
        <>
          <div className="absolute inset-0 h-screen w-screen overflow-hidden">
            <Stream
              src={process.env.NEXT_PUBLIC_CLOUDFLARE_HERO_VIDEO_ID}
              autoplay
              muted
              loop
              responsive={false}
              width="1920"
              height="1080"
            />
          </div>
          <div className="absolute inset-0 z-10 h-full w-full bg-black bg-opacity-70" />
          <div className="absolute bottom-20 z-20 flex w-screen content-center items-center justify-center">
            <ArrowDownCircleIcon
              onClick={handleScroll}
              className="size-10 animate-bounce cursor-pointer text-white"
            />
          </div>
        </>
      )}

      <section
        id="home"
        className={`${!isLG && "bg-gradient-to-b from-cyan-300 to-slate-50 dark:from-violet-950 dark:to-black"} relative z-10 w-full content-center overflow-hidden px-4 pt-20 lg:mt-0 lg:h-screen lg:py-0`}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] lg:text-center">
                <div className="my-3 mb-8 rounded-full bg-gradient-to-r from-violet-800 to-cyan-500 px-5 py-2.5 text-center text-xs font-bold lg:hidden">
                  <Link href={process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL}>
                    🚀 Apidon Public Beta is Now Live 🚀
                  </Link>
                </div>

                <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
                  Make Your Events
                </h1>

                <TextTransition
                  springConfig={presets.wobbly}
                  className="overflow-hidden lg:justify-center"
                >
                  <h1 className="to-yellow-500 inline-block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight">
                    {TEXTS[index % TEXTS.length]}
                  </h1>
                </TextTransition>

                <p className="my-10 hidden text-base !leading-relaxed text-body-color-dark lg:block">
                  Apidon provides event organizers with a platform to create and
                  share unique digital collectibles, transforming events into
                  memorable experiences that boost engagement, enhance brand
                  visibility, and leave a lasting impact on attendees.
                </p>

                <p className="my-10 mt-5 text-base !leading-relaxed text-body-color-dark lg:hidden">
                  Apidon offers event organizers a platform to create and share
                  digital collectibles, enhancing engagement, brand visibility,
                  and creating memorable experiences.
                </p>
                <Link
                  href={process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL}
                  className="relative hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:inline-block"
                >
                  Join Beta on TestFlight!
                  <span className="absolute inset-0 h-full w-full rounded-lg bg-white opacity-0 transition-opacity duration-300 ease-in-out"></span>
                </Link>

                <div className="mb-5 flex w-4/5 items-center justify-between rounded-lg border border-solid border-gray-700 px-5 py-3 lg:hidden">
                  <Link href={process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL}>
                    Join Beta on TestFlight!
                  </Link>
                  <ArrowRightIcon className="size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
