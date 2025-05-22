"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegularButton from "./RegularButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  // Responsive image selection with resize listener
  useEffect(() => {
    const setDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 768) setDevice("mobile");
      else if (width <= 1024) setDevice("tablet");
      else setDevice("desktop");
    };
    setDeviceType();
    window.addEventListener("resize", setDeviceType);
    return () => window.removeEventListener("resize", setDeviceType);
  }, []);

  // GSAP scroll animation
  useEffect(() => {
    const aboutElement = aboutRef.current;
    if (!aboutElement) return;
    gsap.fromTo(
      aboutElement,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutElement,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Image sources and alt text for accessibility
  const imageProps =
    device === "mobile"
      ? {
          src: "/images/homepage/mobile/Buchi-tablet.jpeg",
          width: 311,
          height: 346,
          className: "h-auto w-auto mt-20 md:hidden",
        }
      : device === "tablet"
        ? {
            src: "/images/homepage/tablet/Buchi-tablet.jpeg",
            width: 311,
            height: 346,
            className: "hidden md:block h-auto w-auto mt-20 md:mt-0 lg:hidden",
          }
        : {
            src: "/images/homepage/desktop/Buchi-tablet.jpeg",
            width: 540,
            height: 600,
            className: "hidden lg:block h-auto w-auto mt-20 md:mt-0",
          };

  return (
    <section
      id="about-section"
      ref={aboutRef}
      className="px-8 mt-24 flex flex-col md:flex-row md:items-center md:justify-between lg:mt-[153px] lg:px-[165px] lg:justify-start lg:gap-[80px]"
      aria-labelledby="about-heading"
    >
      {/* Optimized Responsive Image */}
      <Image
        {...imageProps}
        alt="Portrait of Daniel Okafor"
        priority
        sizes="(max-width: 768px) 311px, (max-width: 1024px) 311px, 540px"
        style={{ borderRadius: "12px", transform: "scaleX(-1)" }} // <-- This flips the image horizontally
      />

      <div className="md:w-[339px] md:mt-0 lg:w-[350px] border border-[#33323D]/15 border-r-0 border-l-0 mt-8 pt-8 pb-[51px] bg-white/80 backdrop-blur-sm">
        <h2
          id="about-heading"
          className="heading text-[#33323D] text-[40px] font-bold leading-[42px] tracking-[-0.357px]"
        >
          About Me
        </h2>
        <p className="text-[#33323D]/80 text-base leading-[30px] mt-7">
          Frontend developer and Technical writer with a passion for creating
          beautiful and user-friendly web applications. I have a strong
          understanding of HTML, CSS, and JavaScript, and I am skilled in using
          modern frameworks and libraries such as React (Next.js), Vue
          (Nuxt.js). I am also proficient in using version control systems such
          as Git. I studied Industrial and Production Engineering. This gave me
          a strong foundation in problem-solving, process optimization, and data
          analysis. I use these skills in my work as a frontend developer and
          technical writer to create web appications that are both efficient and
          user-friendly.
          <br /> I am passionate about building web applications that are both
          visually appealing and easy to use. I believe that good design is
          about more than just aesthetics; it is also about creating a user
          experience that is both efficient and enjoyable. I am always looking
          for new ways to improve my skills and knowledge, and I am excited to
          learn new technologies and frameworks. I am looking for opportunities
          to work on challenging and innovative projects, and I am confident
          that my skills and experience can be a valuable asset to any team.
        </p>
        <Link
          href="/portfolio"
          aria-label="Go to Portfolio"
          className="block w-fit mt-6"
        >
          <RegularButton
            className="px-8 py-[17px] border border-[#33323D] text-[#33323D] text-xs leading-normal tracking-[2px] w-fit hover:bg-[#33323D] hover:text-[#FAFAFA] transition-colors"
            type="button"
          >
            GO TO PORTFOLIO
          </RegularButton>
        </Link>
      </div>
    </section>
  );
}
