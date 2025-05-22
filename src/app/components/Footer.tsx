"use client";

import React, { useRef } from "react";
import Logo from "./Logo";
import Link from "next/link";
import GithubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";
import LinkedinIcon from "./LinkedinIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  /* useEffect(() => {
    const footerElement = footerRef.current;

    gsap.fromTo(
      footerElement,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerElement,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []); */

  return (
    <div
      ref={footerRef}
      className="bg-[#33323D] mt-20 py-14 flex flex-col items-center justify-center gap-10 md:py-6 md:px-10 md:flex-row md:justify-between md:mt-[150px] lg:px-[165px]"
    >
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
        <Link href={"https://github.com/Buch-dev"}>
          <GithubIcon />
        </Link>
        <Link href={"https://twitter.com/bucheed"}>
          <TwitterIcon />
        </Link>
        <Link href={"https://www.linkedin.com/in/buchcodx/"}>
          <LinkedinIcon />
        </Link>
      </div>
    </div>
  );
}
