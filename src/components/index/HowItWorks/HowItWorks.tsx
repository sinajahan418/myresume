"use client";
import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "@/utils/animations";
import Image from "next/image";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding  py-10  px-5 bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div
          id="chip"
          className="flex items-center justify-center w-full my-20"
        >
          <Image src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title  text-3xl font-semibold text-center">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle text-gray font-semibold text-xl md:text-2xl py-6 text-center">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex items-center justify-center">
            <div className="overflow-hidden">
              <Image
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                loop
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container flex md:flex-row flex-col justify-between items-start gap-11">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn opacity-0 translate-y-[100px] text-gray text-xl font-normal md:font-semibold">
              A17 Pro is an entirely new className of iPhone chip that delivers
              our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn opacity-0 translate-y-[100px] text-gray text-xl font-normal md:font-semibold">
              Mobile{" "}
              <span className="text-white ">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text text-gray text-xl font-normal md:font-semibold">
              New
            </p>
            <p className="hiw-bigtext text-white text-3xl md:text-5xl font-normal md:font-semibold my-2">
              Pro-className GPU
            </p>
            <p className="hiw-text text-gray text-xl font-normal md:font-semibold">
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
