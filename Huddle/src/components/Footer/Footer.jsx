import React from "react";

import footerTop from "./footer-mobile-one.svg";

import footerTopDesktop from "./footer-desktop-one.svg";

import logo from "./Logo.svg";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";

import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div>
      <picture className="min-w-full mt-16">
        {/* Specify image sources and media conditions using <source> tags */}
        <source srcset={footerTop} media="(max-width: 600px)" />
        <source srcset={footerTopDesktop} media="(max-width: 1024px)" />
        <source srcset={footerTopDesktop} />

        {/* Provide a default <img> element as a fallback */}
        <img
          src={footerTopDesktop}
          className="min-w-full"
          alt="Description of the image"
        />
      </picture>

      <div className="md:flex md:flex-row-reverse md:items-center md:bg-[#00252e]">
        <div className="px-6 bg-[#00252e] text-white">
          <h1 className="text-3xl font-bold">NEWSLETTER</h1>

          <p className="text-base font-semibold py-6">
            To receive tips on how to grow your community, sign up to our weekly
            newsletter. We'll never send you spam or pass on your email address
          </p>

          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-[#fe52c0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#fe52c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-[#00252e] pt-16">
          <div className="flex px-6 gap-2 pb-4">
            <img src={logo} />

            <h1 className="text-3xl font-bold text-white">Huddle</h1>
          </div>

          <p className="px-6 text-white pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ea consectetur odit minima.
          </p>

          <div className="flex gap-2 px-6 items-center">
            <LocalPhoneIcon sx={{ color: "white" }} />

            <p className="text-white">Phone+1-234-567-890</p>
          </div>

          <div className="flex gap-2 px-6 py-6 items-center">
            <MarkEmailReadIcon sx={{ color: "white" }} />

            <p className="text-white">example@company.com</p>
          </div>

          <div className="px-6 pt-3 pb-5 flex gap-2">
            <FacebookIcon sx={{ color: "white", fontSize: "30px" }} />

            <InstagramIcon sx={{ color: "white", fontSize: "30px" }} />

            <TwitterIcon sx={{ color: "white", fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
