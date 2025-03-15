"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "@/utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== "undefined"
      ? window.innerWidth < 760
        ? smallHeroVideo
        : heroVideo
      : ""
  );

  useEffect(() => {
    const handleVideoSrcSet = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };
    handleVideoSrcSet();
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("reisze", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center items-center justify-center flex-col">
        <p id="hero" className="hero-title text-center my-4">
          iPhone 15 Pro
        </p>
        <div className="">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            loop
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center pt-5 opacity-0 translate-y-20"
      >
        <a
          href="#highlights"
          className="bg-blue py-2 px-5 rounded-full shadow-xl hover:bg-black hover:text-white"
        >
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
