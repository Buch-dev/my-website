"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegularButton from "./RegularButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = React.useState<string | null>(null);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 768) {
      setMobile("mobile");
    } else if (width > 768 && width <= 1024) {
      setMobile("tablet");
    } else {
      setMobile("desktop");
    }
  }, []);

  useEffect(() => {
    const aboutElement = aboutRef.current;

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
          start: "top 80%", // Start animation when the top of the element is 80% down the viewport
          end: "bottom 60%", // End animation when the bottom of the element is 60% down the viewport
          toggleActions: "play none none reverse", // Play animation on scroll down, reverse on scroll up
        },
      }
    );
  }, []);

  return (
    <div
      ref={aboutRef}
      className="px-8 mt-24 flex flex-col md:flex-row md:items-start md:justify-between lg:mt-[153px] lg:px-[165px] lg:justify-start lg:gap-[80px] "
    >
      {/* My Image */}
      <Image
        src={`/images/homepage/mobile/image-homepage-profile@2x.jpg`}
        width={311}
        height={1}
        alt="picture"
        className="h-auto w-auto mt-20 md:hidden"
      />
      <Image
        src={`/images/homepage/tablet/image-homepage-profile@2x.jpg`}
        width={311}
        height={1}
        alt="picture"
        className="hidden md:block h-auto w-auto mt-20 md:mt-0 lg:hidden"
      />
      <Image
        src={`/images/homepage/desktop/image-homepage-profile@2x.jpg`}
        width={540}
        height={600}
        alt="picture"
        className="hidden lg:block h-auto w-auto mt-20 md:mt-0"
      />

      <div className="md:w-[339px] lg:w-[350px] border border-[#33323D]/15 border-r-0 border-l-0 mt-8 pt-8 pb-[51px]">
        <h2 className="heading text-[#33323D] text-[40px] font-bold leading-[42px] tracking-[-0.357px]">
          About Me
        </h2>

        <p className="text-[#33323D]/80 text-base leading-[30px] mt-7">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>

        <Link href={"/portfolio"}>
          <RegularButton
            className="px-8 py-[17px] border border-[#33323D] text-[#33323D] text-xs leading-normal tracking-[2px] mt-6 w-fit hover:bg-[#33323D] hover:text-[#FAFAFA] transition-colors"
            children={"GO TO PORTFOLIO"}
            type="button"
          />
        </Link>
      </div>
    </div>
  );
}
