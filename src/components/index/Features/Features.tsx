"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { explore1Img, explore2Img, exploreVideo } from "@/utils";
import gsap from "gsap";
import Image from "next/image";
import { animateWithGsap } from "@/utils/animations";

const Features = () => {
  const videoRef = useRef<any>();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding   py-10  px-5 bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1
            id="features_title"
            className="section-heading text-gray lg:text-6xl md:text-5xl text-2xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mb-5">
            <h2 className="text-3xl lg:text-5xl font-semibold">iPhone.</h2>
            <h2 className="text-3xl lg:text-5xl font-semibold">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex justify-center items-center flex-col sm:p-5">
            <div className="relative h-[50vh]  shadow-xl w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover rounded-2xl object-center"
                preload="none"
                muted
                loop
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col mt-3 w-full relative">
              <div className="feature-video-container w-full flex flex-col md:flex-row gap-5 items-center">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <Image
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video rounded-2xl w-full h-full object-cover object-center scale-150 opacity-0 g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <Image
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video rounded-2xl w-full h-full object-cover object-center scale-150 opacity-0 g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container w-full flex items-center justify-center flex-col md:flex-row mt-10 md:mt-16 gap-5">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;