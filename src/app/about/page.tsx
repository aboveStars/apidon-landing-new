import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apidon",
  description: "Make Every Event Unforgettable",
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
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
