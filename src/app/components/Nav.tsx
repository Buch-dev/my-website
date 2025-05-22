"use client";

import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { gsap } from "gsap";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      // Animate the menu in
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
    } else {
      // Animate the menu out
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isMenuOpen]);

  return (
    <div className="relative flex items-center justify-between p-8 lg:px-[165px]">
      <Logo width={60.082} height={32} color="#33323D" />
      <Hamburger
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <nav className="hidden md:flex items-center justify-between gap-[42px]">
        <Link
          href={"/"}
          className="text-[#33323D] text-xs font-normal tracking-[2px] hover:text-[#5FB4A2] transition-colors"
        >
          HOME
        </Link>
        <Link
          href={"/portfolio"}
          className="text-[#33323D] text-xs font-normal tracking-[2px] leading-0.5 hover:text-[#5FB4A2] transition-colors"
        >
          PORTFOLIO
        </Link>
        <Link
          href={"/contact"}
          className="text-[#33323D] text-xs font-normal tracking-[2px] leading-0.5 hover:text-[#5FB4A2] transition-colors"
        >
          CONTACT ME
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#33323D] text-white flex flex-col items-center justify-center gap-8 transform translate-x-full z-10 md:hidden`}
      >
        <Link
          href={"/"}
          className="text-white text-lg font-bold tracking-[2px] hover:text-[#5FB4A2] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          HOME
        </Link>
        <Link
          href={"/portfolio"}
          className="text-white text-lg font-bold tracking-[2px] hover:text-[#5FB4A2] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          PORTFOLIO
        </Link>
        <Link
          href={"/contact"}
          className="text-white text-lg font-bold tracking-[2px] hover:text-[#5FB4A2] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}

export default Header;
