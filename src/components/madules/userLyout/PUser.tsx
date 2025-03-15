/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { yellowImg } from "@/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import swal from "sweetalert";
import { LuLogOut } from "react-icons/lu";

const UserLyout = () => {
  const userString =
    typeof window !== "undefined" ? localStorage.getItem("user") : "";
  const user = userString ? JSON.parse(userString) : null;

  const handelLogout = async () => {
    const res = await fetch("http://localhost:5000/api/v1/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (res.ok) {
      localStorage.removeItem("user");
      location.replace("/");
      swal({ title: "با موفقیت رفتی بیرون", icon: "success" });
    }
  };
  useEffect(() => {
    if (!userString) {
      location.replace("/");
    }
  }, []);

  return (
    <nav className=" flex items-center justify-center">
      <div className="flex w-[60%] bg-zinc rounded-3xl items-center justify-between px-4 p-2 sm:m-10">
        <div className="flex gap-10 w-full items-center justify-between px-4 p-2 ">
          <LuLogOut onClick={handelLogout} />
          <span>{user ? user.username : ""}</span>
        </div>
        <div>
          <Image
            src={yellowImg}
            alt=""
            width={30}
            height={10}
            className=" rounded-full h-5"
          />
        </div>
      </div>
    </nav>
  );
};

export default UserLyout;
