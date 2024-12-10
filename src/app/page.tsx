/* eslint-disable @typescript-eslint/no-explicit-any */

import Features from "@/components/index/Features/Features";
import Hero from "@/components/index/Hero/Hero";
import Highlights from "@/components/index/Highlights/Highlights";
import HowItWorks from "@/components/index/HowItWorks/HowItWorks";
import Model from "@/components/index/Model/Model";



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
