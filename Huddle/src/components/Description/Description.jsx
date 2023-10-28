import React from "react";

import screens from "./screen-mockups.svg";

import people from "./people.svg";

import message from "./message.svg";

import curveOne from "./curve1.svg";

import curveOneDesktop from "./curve1desktop.svg";

import talking from "./talking.svg";

import curveTwo from "./curve2.svg";

import curveTwoDesktop from "./curve2desktop.svg";

import peopleTalking from "./people-conversation.svg";

import curveThree from "./curve3.svg";

import curveThreeDesktop from "./curve3desktop.svg";

import flowCustomers from "./flowCustomers.svg";

import curveFour from "./curve4.svg";

import curveFourDesktop from "./curve4desktop.svg";

export default function Description() {
  return (
    <>
      <div className="h-[calc(100vh-56px)] flex flex-col items-center justify-center gap-8 px-6 md:h-96 md:mt-10">
        <h1 className="text-4xl font-bold text-center font-poppins leading-10 md:w-9/12">
          Build The Community Your Fans Will Love
        </h1>

        <p className="font-poppins text-center leading-7 font-semibold md:w-9/12">
          Huddle re-imagines the way we build communities. You have a voice but
          so does your audience. Create connections with your users as you
          engage in genuine discussions.
        </p>

        <button className="text-white bg-[#ff8fd8] px-8 py-3 rounded-full font-poppins text-sm drop-shadow-3xl">
          Get Started For Free
        </button>
      </div>

      <div className="px-6 flex items-center justify-center ">
        <img src={screens} className="md:w-3/4" />
      </div>

      <div className="md:flex md:justify-center md:mt-6">
        <div className="md:flex md:w-3/4 md:justify-between">
          <div className="px-6 my-10 flex justify-center">
            <div className="flex flex-col items-start">
              <img src={people} width={50} />
              <h1 className="text-6xl font-black font-poppins">1.4k+</h1>
              <h6 className="text-md text-center w-full">Communities Formed</h6>
            </div>
          </div>

          <div className="px-6 my-10 flex justify-center">
            <div className="flex flex-col items-start">
              <img src={message} width={50} />
              <h1 className="text-6xl font-black font-poppins">2.7m+</h1>
              <h6 className="text-md text-center w-full">Messages Sent</h6>
            </div>
          </div>
        </div>
      </div>

      <div>
        <picture className="min-w-full">
          {/* Specify image sources and media conditions using <source> tags */}
          <source srcset={curveOne} media="(max-width: 600px)" />
          <source srcset={curveOneDesktop} media="(max-width: 1024px)" />
          <source srcset={curveOneDesktop} />

          {/* Provide a default <img> element as a fallback */}
          <img
            src={curveOneDesktop}
            className="min-w-full"
            alt="Description of the image"
          />
        </picture>

        <div className="flex flex-col md:flex-row-reverse md:bg-[#f5faff] md:items-center">
          <img src={talking} className="bg-[#f5faff] py-8 md:w-[50%]" />

          <div className="md:w-[50%] md:min-h-full">
            <h1 className="text-4xl font-extrabold font-poppins text-center bg-[#f5faff] px-6 pb-3 ">
              Grow Together
            </h1>

            <p className="text-sm font-thin font-poppins text-center bg-[#f5faff] px-6 pb-8">
              Generate a meaningful discussions with your audience and build a
              strong , loyal community. Think of the insightful conversation you
              miss out on with a feedback form
            </p>
          </div>
        </div>

        <picture className="min-w-full">
          {/* Specify image sources and media conditions using <source> tags */}
          <source srcset={curveTwo} media="(max-width: 600px)" />
          <source srcset={curveTwoDesktop} media="(max-width: 1024px)" />
          <source srcset={curveTwoDesktop} />

          {/* Provide a default <img> element as a fallback */}
          <img
            src={curveTwoDesktop}
            className="min-w-full"
            alt="Description of the image"
          />
        </picture>
      </div>

      <div className="my-16 flex flex-col md:flex-row md:items-center">
        <img src={peopleTalking} className="px-6 md:w-[50%]" />

        <div>
          <h1 className="text-3xl font-black text-center font-poppins px-6 my-4">
            Flowing Conversations
          </h1>

          <p className="text-md font-medium text-center font-poppins px-6">
            You would not paginate a conversation in real-life, so why do it
            online?
          </p>
        </div>
      </div>

      <div>
        <picture className="min-w-full">
          {/* Specify image sources and media conditions using <source> tags */}
          <source srcset={curveThree} media="(max-width: 600px)" />
          <source srcset={curveThreeDesktop} media="(max-width: 1024px)" />
          <source srcset={curveThreeDesktop} />

          {/* Provide a default <img> element as a fallback */}
          <img
            src={curveThreeDesktop}
            className="min-w-full"
            alt="Description of the image"
          />
        </picture>

        <div className="flex flex-col md:flex-row md:items-center md:bg-[#f5faff] md:px-6">
          <img src={flowCustomers} className=" bg-[#f5faff] md:max-w-[50%]" />

          <div className="md:min-w-[50%]">
            <h1 className="text-3xl font-black text-center font-poppins px-6 pt-8 pb-6 bg-[#f5faff]">
              Your Users
            </h1>

            <p className="bg-[#f5faff] text-md font-medium text-center font-poppins px-6 pb-6">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means once signed in to your app,
              your users can start chatting
            </p>
          </div>
        </div>

        <picture className="min-w-full">
          {/* Specify image sources and media conditions using <source> tags */}
          <source srcset={curveFour} media="(max-width: 600px)" />
          <source srcset={curveFourDesktop} media="(max-width: 1024px)" />
          <source srcset={curveFourDesktop} />

          {/* Provide a default <img> element as a fallback */}
          <img
            src={curveFourDesktop}
            className="min-w-full"
            alt="Description of the image"
          />
        </picture>

        {/* <img src={curveFour} className="min-w-full" /> */}
        
      </div>

      <div className="flex flex-col py-6">
        <h1 className="text-3xl font-black text-center font-poppins px-6 pt-8 pb-6">
          Ready to build your community
        </h1>

        <button className="w-48 h-12 rounded-full text-white self-center bg-[#ff52be] shadow-xl">
          Get Started For Free
        </button>
      </div>
    </>
  );
}
