"use client";

import React from "react";
import Image from "next/image";
import RegularButton from "./RegularButton";

export default function About() {
  const [mobile, setMobile] = React.useState<string | null>(null);

  React.useEffect(() => {
    const width = window.innerWidth;
    if (width <= 768) {
      setMobile("mobile");
    } else if (width > 768 && width <= 1024) {
      setMobile("tablet");
    } else {
      setMobile("desktop");
    }
  }, []);
  // const mobile = width <= 768 ? "mobile" : width <= 1024 ? "tablet" : "desktop";

  return (
    <div className="px-8 flex flex-col max-w-[1110px] mx-auto md:flex-row md:items-start md:justify-between lg:px-0 lg:justify-start lg:gap-[125px] border">
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

      <div className=" md:w-[339px]">
        {/* Horizontal Line */}
        <div className="bg-[#33323D]/20 h-[1px] w-full mt-8 md:mt-0" />

        <h2 className="heading mt-8 text-[#33323D] text-[40px] font-bold leading-[42px] tracking-[-0.357px]">
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

        <RegularButton
          className="px-8 py-[17px] border border-[#33323D] text-[#33323D] text-xs leading-normal tracking-[2px] mt-6 w-fit"
          children={"GO TO PORTFOLIO"}
          type="button"
        />
      </div>
    </div>
  );
}
