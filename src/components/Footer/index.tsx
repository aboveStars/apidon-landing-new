"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col content-center items-center justify-center gap-4 bg-black py-8 text-sm">
        <div className="flex flex-col items-center">
          <text className="font-extrabold">
            Apidon © {new Date().getFullYear()}
          </text>
          <text className="italic">&quot;Make Your Events Unique.&quot;</text>
        </div>

        <div className="flex gap-x-5">
          <Link href="https://www.instagram.com/apidon_com/">
            <img src="/images/footer/ig.png" className="size-7" />
          </Link>
          <Link href="https://www.linkedin.com/company/apidon">
            <img src="/images/footer/linkedin.png" className="size-7" />
          </Link>

          <Link href="https://x.com/apidon_com">
            <img src="/images/footer/x.jpg" className="size-7" />
          </Link>
        </div>

        <Link
          href="https://support.apidon.com/privacy-policy"
          className="cursor-pointer underline"
        >
          Privacy Policy
        </Link>

        <text>Made with ❤️ in Istanbul</text>
      </div>
    </>
  );
};

export default Footer;
