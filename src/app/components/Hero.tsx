"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ButtonArrow from "./ButtonArrow";

function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="px-8 lg:px-[165px]">
      <div className="relative w-full h-[300px] md:h-[500px] grid place-items-center">
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src={"/images/homepage/mobile/image-homepage-hero@2x.jpg"}
            layout="fill"
            objectFit="cover"
            alt="alt"
            className="md:hidden"
          />
          <Image
            src={"/images/homepage/tablet/image-homepage-hero@2x.jpg"}
            layout="fill"
            objectFit="cover"
            alt="alt"
            className="hidden md:block"
          />
          <Image
            src={"/images/homepage/desktop/image-homepage-hero@2x.jpg"}
            layout="fill"
            objectFit="cover"
            alt="alt"
            className="hidden lg:block"
          />
        </div>

        <div className="absolute hidden md:block bottom-0 w-[514px] lg:w-[445px] left-0 z-10 bg-white bg-opacity-80 p-6 lg:pl-0 lg:pb-0 text-center md:text-left">
          <h1
            ref={headingRef}
            className="heading text-[40px] mt-6 text-[#33323D] font-bold leading-[42px] tracking-[-0.357px]"
          >
            Hey, I’m Daniel Okafor and I love building beautiful websites
          </h1>
          <button className="bg-[#203A4C] mt-8 hover:bg-[#5FB4A2] w-[200px] h-12 flex items-center justify-center text-white text-xs tracking-[2px] cursor-pointer">
            <ButtonArrow />
            <p className="w-full">ABOUT ME</p>
          </button>
        </div>
      </div>
      {/* Heading and text and button */}
      <div className="bg-white md:hidden">
        <h1
          ref={headingRef}
          className="heading text-[40px] mt-6 text-[#33323D] font-bold leading-[42px] tracking-[-0.357px]"
        >
          Hey, I’m Daniel Okafor and I love building beautiful websites
        </h1>

        <button
          className="bg-[#203A4C] mt-8 hover:bg-[#5FB4A2] w-[200px] h-12 flex items-center text-white text-xs tracking-[2px] cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById("about-section");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ButtonArrow />
          <p className="w-full">ABOUT ME</p>
        </button>
      </div>
    </div>
  );
}

export default Hero;
