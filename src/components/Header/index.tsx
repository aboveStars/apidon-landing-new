"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pathName = usePathname();

  const handleLogo = () => {
    pathName === "/" ? handleScroll() : (window.location.href = "/");
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center justify-center ${
          sticky
            ? "fixed z-[9999] bg-black bg-opacity-50 py-5 backdrop-blur-sm transition "
            : "fixed bg-transparent py-5"
        }`}
      >
        <div className="container">
          <div className={`relative flex items-center justify-between`}>
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <button
                onClick={handleLogo}
                className={`header-logo block w-full`}
              >
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
              </button>
            </div>
            <div className="flex w-full items-center justify-between ">
              <div className="flex w-full items-center justify-end gap-x-10 lg:pr-0">
                <button
                  onClick={handleScroll}
                  className={`${sticky ? "text-black dark:text-white" : "text-white"} hidden rounded-full text-base font-medium md:block`}
                >
                  Sign In
                </button>

                <button
                  onClick={handleScroll}
                  className="dark:bg-primary-dark hidden rounded-full bg-primary py-2 text-base font-medium text-white shadow-md transition duration-300 hover:bg-opacity-90 hover:shadow-lg md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
