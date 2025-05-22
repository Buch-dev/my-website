"use client";

import React, { useState } from "react";
import Head from "next/head";
import GithubIcon from "../components/GithubIcon";
import TwitterIcon from "../components/TwitterIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import RegularButton from "../components/RegularButton";
import Link from "next/link";


function ContactPage() {
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(null);
    const form = e.target as HTMLFormElement;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = { name: "", email: "", message: "" };
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
      setLoading(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (res.ok) {
          setSuccess("Your message has been sent successfully!");
          form.reset();
          setErrors({ name: "", email: "", message: "" });
        } else {
          setSuccess("Something went wrong. Please try again later.");
        }
      } catch {
        setSuccess("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Daniel Okafor Portfolio</title>
        <meta
          name="description"
          content="Contact Daniel Okafor for web development opportunities or collaborations."
        />
        <meta
          property="og:title"
          content="Contact | Daniel Okafor Portfolio"
        />
        <meta
          property="og:description"
          content="Contact Daniel Okafor for web development opportunities or collaborations."
        />
      </Head>
      <main className="flex flex-col gap-8 px-8 lg:px-[165px] md:mt-[62px]">
        <section className="flex flex-col gap-6 border border-[#33323D]/15 border-r-0 border-l-0 mt-8 pt-8 pb-[51px] lg:flex-row">
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
            <nav className="flex w-[104px] justify-between items-center" aria-label="Social links">
              <Link
                href="https://github.com/Buch-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon color="#33323D" />
              </Link>
              <Link
                href="https://twitter.com/bucheed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon color="#33323D" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/buchcodx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon color="#33323D" />
              </Link>
            </nav>
          </div>
        </section>

        <section className="flex flex-col gap-6 lg:flex-row" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="heading text-[#33323D] text-[40px] font-bold leading-[42px] tracking-[-0.357px] lg:w-[45%]">
            Contact Me
          </h2>
          <form className="flex flex-col gap-6 lg:w-[55%]" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#33323D]/80 text-[13px] leading-[30px] font-bold ">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Daniel Okafor"
                autoComplete="name"
                className={`text-[13px] leading-[30px] text-[#33323D] py-1.5 px-4 bg-[#33323D]/10 border transition-colors duration-200
                  focus:border-green-500 focus:outline-none
                  ${errors.name ? "border-red-500" : "border-[#33323D]/30"}
                `}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <p id="name-error" className="text-red-500 text-[13px]">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#33323D]/80 text-[13px] leading-[30px] font-bold ">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                autoComplete="email"
                className={`text-[13px] leading-[30px] text-[#33323D] py-1.5 px-4 bg-[#33323D]/10 border transition-colors duration-200
                  focus:border-green-500 focus:outline-none
                  ${errors.email ? "border-red-500" : "border-[#33323D]/30"}
                `}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-[13px]">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#33323D]/80 text-[13px] leading-[30px] font-bold ">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="How can I help?"
                rows={5}
                className={`text-[13px] leading-[30px] text-[#33323D] py-1.5 px-4 bg-[#33323D]/10 border transition-colors duration-200
                  focus:border-green-500 focus:outline-none
                  ${errors.message ? "border-red-500" : "border-[#33323D]/30"}
                `}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && <p id="message-error" className="text-red-500 text-[13px]">{errors.message}</p>}
            </div>
            <RegularButton
              aria-label="Send message"
              type="submit"
              className="bg-[#203A4C] text-white w-[200px] h-12 text-xs tracking-[2px] cursor-pointer disabled:opacity-60"
              disabled={loading}
            >{loading ? "Sending..." : "SEND MESSAGE"}</RegularButton>
            {success && (
              <p className={`text-[15px] mt-2 ${success.includes("successfully") ? "text-green-600" : "text-red-500"}`}>
                {success}
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
