"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Make Your Events
                </h1>

                <TypeAnimation
                  className="to-yellow-500 inline-block bg-gradient-to-r from-pink-500 via-red-500 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  sequence={[
                    "Unforgettable!",
                    1000,
                    "Unique!",
                    1000,
                    "Memorable!",
                    1000,
                    "Stand Out!",
                    1000,
                    "Impactful!",
                    1000,
                    "Engaging!",
                    1000,
                    "Legendary!",
                    1000,
                    "Timeless!",
                    1000,
                    "Celebrated!",
                    1000,
                    "Remarkable!",
                    1000,
                  ]}
                  speed={10}
                  repeat={Infinity}
                />
                <p className="mb-12 mt-5 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Apidon empowers event organizers with a seamless platform to
                  create and share unique digital collectibles, transforming
                  every event into a memorable experience that boosts guest
                  engagement, amplifies brand visibility, and leaves a lasting
                  impression on attendees.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://testflight.apple.com/join/AeCqrVcg"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Join Apidon Public Beta!
                  </Link>
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
