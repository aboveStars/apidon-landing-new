"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { TypeAnimation } from "react-type-animation";

//className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-black md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"

const TEXTS = [
  "Unforgettable!",
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

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <section
        id="home"
        className="to-yellow-100 relative z-10 h-screen w-full content-center
        overflow-hidden bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Make Your Events
                </h1>

                <TextTransition
                  springConfig={presets.wobbly}
                  className="justify-center overflow-hidden"
                >
                  <h1 className="to-yellow-500 inline-block bg-gradient-to-r from-pink-500 via-red-500 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                    {TEXTS[index % TEXTS.length]}
                  </h1>
                </TextTransition>

                <p className="my-10 text-base !leading-relaxed text-body-color dark:text-body-color-dark">
                  Apidon provides event organizers with a platform to create and
                  share unique digital collectibles, transforming events into
                  memorable experiences that boost engagement, enhance brand
                  visibility, and leave a lasting impact on attendees.
                </p>
                <button className="focus:ring-4focus:ring-blue-300 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-700">
                  <Link href="https://testflight.apple.com/join/AeCqrVcg">
                    Join Apidon Public Beta!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
