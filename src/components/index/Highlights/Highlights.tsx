"use client";
import React from "react";
import Image from "next/image";
import { rightImg, watchImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "../VideoCarsoul/VideoCarsoul";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: -16,
      delay: 1.5,
    });
    gsap.to(".link", {
      opacity: 1,
      y: -10,
      delay: 1.3,

      stagger: 0.25,
      direction: 2,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full p-9 bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1
            id="title"
            className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium  translate-y-20 opacity-0 pt-4"
          >
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
              Watch the film
              <Image src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
              Watch the event
              <Image src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
