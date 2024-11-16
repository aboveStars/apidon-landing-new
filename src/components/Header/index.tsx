"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 40) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center justify-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 py-4 backdrop-blur-sm transition dark:bg-gray-dark"
            : "fixed bg-transparent py-4"
        }`}
      >
        <div className="container">
          <div className={`relative flex items-center justify-between`}>
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className={`header-logo block w-full`}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <img
                    className="size-8 md:size-8"
                    src="/images/logo/logo.png"
                    alt="logo"
                  />
                  <text
                    className={`${sticky ? "text-black dark:text-white" : "text-white"} text-lg font-bold md:text-xl`}
                  >
                    APIDON
                  </text>
                </div>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div className="flex w-full items-center justify-end lg:pr-0">
                <Link
                  href={process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL}
                  className={`${sticky ? "text-black dark:text-white" : "text-white"} hidden rounded-full px-7 py-3 text-base font-medium  transition duration-300 hover:bg-gray-200 hover:opacity-80 dark:hover:bg-gray-700 md:block`}
                >
                  Sign In
                </Link>

                <Link
                  href={process.env.NEXT_PUBLIC_APPLE_TESTFLIGHT_URL}
                  className="dark:bg-primary-dark hidden rounded-full bg-primary px-8 py-3 text-base font-medium text-white shadow-md transition duration-300 hover:bg-opacity-90 hover:shadow-lg md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
