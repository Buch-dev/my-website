"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegularButton from "./RegularButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctaElement = ctaRef.current;

    gsap.fromTo(
      ctaElement,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaElement,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={ctaRef}
      className="px-8 mt-[51px] md:mt-[105px] lg:mt-[150px] lg:px-[165px] flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between"
    >
      {/* 
      <div className="bg-[#33323D]/20 h-[1px] w-full md:hidden" /> */}
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-8 lg:w-full">
        <h1 className="heading font-bold text-[#33323D] text-[40px] leading-[42px] tracking-[0.357px] text-center md:text-left md:w-[350px]">
          Interested in doing a project together?
        </h1>

        {/* Horizontal Line */}
        <div className="hidden md:block bg-[#33323D]/20 h-[1px] w-[113px] lg:w-[300px]" />
        <Link href={"/contact"}>
          <RegularButton
            className="px-8 py-[17px] border border-[#33323D] text-[#33323D] text-xs leading-normal tracking-[2px] w-fit hover:bg-[#33323D] hover:text-[#FAFAFA] transition-colors"
            aria-label="Contact me"
            type="button"
          >CONTACT ME</RegularButton>
        </Link>
      </div>
    </div>
  );
}
