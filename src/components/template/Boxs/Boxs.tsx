"use client"
import React from "react";
import { IconType } from "react-icons";

type BoxsType = {
  Icon: IconType;
  lenght: number;
  title: string;
};

const Boxs = ({ Icon, lenght, title }: BoxsType) => {
 
  
  return (
    <>
    <div className="flex flex-col items-center gap-4 px-4 p-2 bg-zinc rounded-xl shadow-2xl">
      <span className="p-3 bg-black rounded-full">
        <Icon className="text-2xl text-yellow-600"/>
      </span>
      <div className="flex items-center justify-between gap-3">
        <p>{title}:</p>
        <h2>{lenght}</h2>
      </div>
    </div>
  
    </>
  );
};

export default Boxs;
