import React from "react";
import RegularButton from "./RegularButton";

export default function CTA() {
  return (
    <div className="px-8 mt-[51px] md:mt-[105px] lg:mt-[150px] lg:px-[165px] flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
      {/* Horizontal Line */}
      <div className="bg-[#33323D]/20 h-[1px] w-full md:hidden" />
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-8 lg:w-full">
        <h1 className="heading font-bold text-[#33323D] text-[40px]  leading-[42px] tracking-[0.357px] text-center md:text-left md:w-[350px] mt-[115px] md:mt-0">
          Interested in doing a project together?
        </h1>

        {/* Horizontal Line */}
        <div className="hidden md:block bg-[#33323D]/20 h-[1px] w-[113px] lg:w-[300px]"  />

        <RegularButton
          className="px-8 py-[17px] border border-[#33323D] text-[#33323D] text-xs leading-normal tracking-[2px] w-fit"
          children={"CONTACT ME"}
          type="button"
        />
      </div>
    </div>
  );
}
