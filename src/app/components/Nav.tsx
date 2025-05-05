import React from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between p-8">
      <Logo width={60.082} height={32} color="#33323D" />
      <Hamburger className="md:hidden" />
      <nav className="hidden md:flex items-center justify-between gap-[42px]">
        <Link href={"/"} className="text-[#33323D] text-xs font-normal tracking-[2px] hover:text-[#5FB4A2] transition-colors">
          HOME
        </Link>
        <Link href={"/about"} className="text-[#33323D] text-xs font-normal tracking-[2px] leading-0.5 hover:text-[#5FB4A2] transition-colors">
          PORTFOLIO
        </Link>
        <Link href={"/contact"} className="text-[#33323D] text-xs font-normal tracking-[2px] leading-0.5 hover:text-[#5FB4A2] transition-colors">
          CONTACT ME
        </Link>
      </nav>
      
    </div>
  );
}

export default Header;
