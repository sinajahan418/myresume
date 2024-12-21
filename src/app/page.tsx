/* eslint-disable @typescript-eslint/no-explicit-any */

import Features from "@/components/index/Features/Features";
import Hero from "@/components/index/Hero/Hero";
import Highlights from "@/components/index/Highlights/Highlights";
import HomeProducts from "@/components/index/HomeProducts/HomeProducts";
import HowItWorks from "@/components/index/HowItWorks/HowItWorks";
import Model from "@/components/index/Model/Model";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Highlights />
      <HomeProducts />
      <Model />
      <Features />
      <HowItWorks />
    </div>
  );
}
