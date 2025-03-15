"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";

interface ModeProps {
  index: number;
  gsapType: string;
  item: {
    title: string;
    color: string[];
    img: StaticImageData;
  };
  size: string;
}

const ModelView = ({
  index,
  gsapType,
  item,
  size,
}: ModeProps) => {


  useGSAP(() => {
    if (size === "large") {
      gsap.to(gsapType, {
        opacity: 1,
        x: 0,
        delay: 1.5,
      });
    }

    if (size === "small") {
      gsap.to(`#${gsapType}`, {
        opacity: 1,
        x: 0,
        delay: 1.5,
      });
    }
  }, [size]);

  return (
    <div
      key={index}
      className={`w-full flex items-end justify-center py-5  h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {size === "large" ? (
        <div
          id={gsapType}
          className="flex items-center justify-center opacity-0"
        >
          <div className=" rounded-2xl">
            <Image
              src={item.img.src}
              className=" rounded-2xl"
              height={1896}
              width={240}
              alt=""
            />
          </div>
        </div>
      ) : size === "small" ? (
        <div id={gsapType} className=" opacity-0 ">
          <div className=" rounded-2xl">
            <Image
              src={item.img.src}
              className=" rounded-2xl"
              height={1796}
              width={190}
              alt=""
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ModelView;
