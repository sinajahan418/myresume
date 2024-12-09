/* eslint-disable @typescript-eslint/no-explicit-any */

import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import Model from "@/components/Model/Model";
import Features from "@/components/Features/Features";
import HowItWorks from "@/components/HowItWorks/HowItWorks";

// import { useRef } from "react";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// import Image from "next/image";

export default function Home() {
  // const scrollRef: any = useRef();

  // useGSAP(() => {
  //   const boxs = gsap.utils.toArray(scrollRef.current.children);
  //   boxs.forEach((box : any)=>{
  //     gsap.to(box , {
  //       x:150 * (boxs.indexOf(box) + 4),
  //       rotation:360,
  //       borderRadius: "100%",
  //       scale: 1.5,
  //       scrollTrigger:{
  //         trigger: box,
  //         start: "bottom bottom",
  //         end: "top 20%",
  //         scrub: true

  //       },
  //       ease: "power1.inOut"
  //     })
  //   })
  // }, {scope: scrollRef});

  return (
    <div className="flex flex-col">
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </div>
  );
}
