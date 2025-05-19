"use client";

import React, { useState } from "react";
import GithubIcon from "../components/GithubIcon";
import TwitterIcon from "../components/TwitterIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import RegularButton from "../components/RegularButton";

function page() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let hasError = false;

    if (!name) {
      newErrors.name = "Name is required.";
      hasError = true;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }

    if (!message) {
      newErrors.message = "Message is required.";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Form submitted successfully!");
      form.reset();
      setErrors({ name: "", email: "", message: "" }); // Clear errors after successful submission
    }
  };

  return (
    <div className="flex flex-col gap-8 px-8 lg:px-[165px] md:mt-[62px]">
      <div className="flex flex-col gap-6 border border-[#33323D]/15 border-r-0 border-l-0 mt-8 pt-8 pb-[51px] lg:flex-row">
        <h2 className="heading text-[#33323D] text-[40px] font-bold leading-[42px] tracking-[-0.357px] w-[45%]">
          Get in Touch
        </h2>
        <div className="flex flex-col gap-6 w-[55%]">
          <p className="text-[#33323D]/80 text-[15px] leading-[30px] ">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunities
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className="flex w-[104px] justify-between items-center">
            <GithubIcon color="#33323D" />
            <TwitterIcon color="#33323D" />
            <LinkedinIcon color="#33323D" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Form */}
        <h2 className="heading text-[#33323D] text-[40px] font-bold leading-[42px] tracking-[-0.357px] lg:w-[45%]">
          Contact Me
        </h2>
        <form className="flex flex-col gap-6 lg:w-[55%]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[#33323D]/80 text-[13px] leading-[30px] font-bold "
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Daniel Okafor"
              className={`text-[13px] leading-[30px] text-[#33323D] py-1.5 px-4 bg-[#33323D]/10 focus:border-green-500 focus:outline-none ${
                errors.name ? "border border-red-500" : "border border-[#33323D]/30"
              }`}
            />
            {errors.name && <p className="text-red-500 text-[13px]">{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#33323D]/80 text-[13px] leading-[30px] font-bold "
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className={`text-[13px] leading-[30px] text-[#33323D] py-1.5 px-4 bg-[#33323D]/10 focus:border-green-500 focus:outline-none ${
                errors.email ? "border border-red-500" : "border border-[#33323D]/30"
              }`}
            />
            {errors.email && <p className="text-red-500 text-[13px]">{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[#33323D]/80 text-[13px] leading-[30px] font-bold "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="How can I help?"
              className={`text-[13px] leading-[30px] text-[#33323D] py-1.5 px-4 bg-[#33323D]/10 focus:border-green-500 focus:outline-none ${
                errors.message ? "border border-red-500" : "border border-[#33323D]/30"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-[13px]">{errors.message}</p>
            )}
          </div>
          <RegularButton
            children={"SEND MESSAGE"}
            type="submit"
            className="bg-[#203A4C] text-white w-[200px] h-12 text-xs tracking-[2px] cursor-pointer "
          />
        </form>
      </div>
    </div>
  );
}

export default page;
