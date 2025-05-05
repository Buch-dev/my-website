import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="border p-8">
      <Image
        src={"/images/homepage/mobile/image-homepage-hero@2x.jpg"}
        height={271}
        width={311}
        alt="alt"
        className="mx-auto mt-2"
      />
      <h1
        className="heading text-[40px] mt-6 text-[#33323D] font-bold leading-[42px] tracking-[-0.357px]"
      >
        Hey, I’m Daniel Okafor and I love building beautiful websites
      </h1>
    </div>
  );
}

export default Hero;
