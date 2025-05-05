"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
    <div className="border p-8">
      <div ref={imageRef}>
        <Image
          src={"/images/homepage/mobile/image-homepage-hero@2x.jpg"}
          height={271}
          width={311}
          alt="alt"
          className="mx-auto mt-2"
        />
      </div>
      <h1
        ref={headingRef}
        className="heading text-[40px] mt-6 text-[#33323D] font-bold leading-[42px] tracking-[-0.357px]"
      >
        Hey, I’m Daniel Okafor and I love building beautiful websites
      </h1>
    </div>
  );
}

export default Hero;
