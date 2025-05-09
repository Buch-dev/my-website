import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import GithubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";
import LinkedinIcon from "./LinkedinIcon";

export default function Footer() {
  return (
    <div className="bg-[#33323D] mt-20 py-14 flex flex-col items-center justify-center gap-10 md:py-6 md:px-10 md:flex-row md:justify-between md:mt-[150px] lg:px-[165px]">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-12">
        <Logo width={61} height={32} color="white" />
        <nav className="flex flex-col gap-8 items-center justify-center md:flex-row md:gap-[42px]">
          <Link
            href={"/"}
            className="text-white text-xs tracking-[2px] hover:text-[#5FB4A2] transition-colors"
          >
            HOME
          </Link>
          <Link
            href={"/about"}
            className="text-white text-xs tracking-[2px] hover:text-[#5FB4A2] transition-colors"
          >
            PORTFOLIO
          </Link>
          <Link
            href={"/contact"}
            className="text-white text-xs tracking-[2px] hover:text-[#5FB4A2] transition-colors"
          >
            CONTACT ME
          </Link>
        </nav>
      </div>

      <div className="flex w-[104px] justify-between items-center">
        <GithubIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
}
