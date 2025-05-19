"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegularButton from "../components/RegularButton";
import CTA from "../components/CTA";

gsap.registerPlugin(ScrollTrigger);

function page() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const portfolioData = [
    {
      id: "1",
      title: "Manage",
      description:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
      imageUrl: "/images/portfolio/tablet/image-portfolio-manage@2x.jpg",
      desktopImageUrl: "/images/portfolio/desktop/image-portfolio-manage@2x.jpg",
    },
    {
      id: "2",
      title: "Bookmark",
      description:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
      imageUrl: "/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg",
      desktopImageUrl: "/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg",
    },
    {
      id: "3",
      title: "Insure",
      description:
        "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
      imageUrl: "/images/portfolio/tablet/image-portfolio-insure@2x.jpg",
      desktopImageUrl: "/images/portfolio/desktop/image-portfolio-insure@2x.jpg",
    },
    {
      id: "4",
      title: "Fylo",
      description:
        "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
      imageUrl: "/images/portfolio/tablet/image-portfolio-fylo@2x.jpg",
      desktopImageUrl: "/images/portfolio/desktop/image-portfolio-fylo@2x.jpg",
    },
  ];

  useEffect(() => {
    const portfolioElements = portfolioRef.current?.querySelectorAll(".portfolio-item");

    if (portfolioElements) {
      portfolioElements.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item, // Trigger animation for each item individually
              start: "top 80%", // Start animation when the top of the item is 80% down the viewport
              end: "bottom 20%", // End animation when the bottom of the item is 20% down the viewport
              toggleActions: "play none none reverse", // Play animation on scroll down, reverse on scroll up
            },
          }
        );
      });
    }
  }, []);

  return (
    <div ref={portfolioRef} className="flex flex-col gap-[72px] md:mt-[62px]">
      {portfolioData.map((data) => (
        <div key={data.id} className="portfolio-item mt-2 flex flex-col">
          <div
            className={`${
              parseInt(data.id) % 2 === 0 ? "md:flex-row-reverse" : ""
            } flex flex-col md:flex-row items-center justify-between mx-8 lg:mx-[165px] gap-8 md:gap-[69px]`}
          >
            <Image
              width={311}
              height={288}
              src={data.imageUrl}
              alt={data.title}
              className="md:hidden"
            />
            <Image
              width={339}
              height={314}
              src={data.imageUrl}
              alt={data.title}
              className="hidden md:block lg:hidden"
            />
            <Image
              width={540}
              height={500}
              src={data.desktopImageUrl}
              alt={data.title}
              className="hidden lg:block"
            />

            <div className="flex flex-col gap-6 md:gap-0 mt-8 md:mt-0">
              {/* Horizontal Line */}
              <div className="bg-[#33323D]/20 h-[1px] w-full" />
              <h2 className="heading text-[40px] font-bold leading-[42px] tracking-[-0.357] text-[#33323D] md:mt-8 lg:mt-[103px]">
                {data.title}
              </h2>
              <p className="text-[#33323D] text-[15px] leading-[30px] md:mt-[29px] lg:mt-7">
                {data.description}
              </p>
              <Link href={`/portfolio/${data.id}`}>
                <RegularButton
                  className="px-8 py-[17px] border border-[#33323D] text-[#33323D] text-xs leading-normal tracking-[2px] w-fit hover:bg-[#33323D] hover:text-[#FAFAFA] transition-colors md:mt-[35px] lg:mt-6"
                  children={"VIEW PROJECT"}
                  type="button"
                />
              </Link>
              {/* Horizontal Line */}
              <div className="hidden md:block bg-[#33323D]/20 h-[1px] w-full md:mt-[50px] lg:mt-[103px]" />
            </div>
          </div>
        </div>
      ))}
      <CTA />
    </div>
  );
}

export default page;