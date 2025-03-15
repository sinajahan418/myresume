"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const user = { email, password };
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    setLoading(false);
    const userData = await res.json();
    if (res.status == 200) {
      swal({
        title: "login successfully",
        icon: "success",
      }).then(() => location.replace("/P-User"));
      setEmail("");
      setPassword("");
      localStorage.setItem("user", JSON.stringify(userData.user));
      //   setAuthUser(user);
    }
  };

  useGSAP(() => {
    gsap.to(".anim", {
      opacity: 1,
      delay: 0.2,
      y: 0,
      marginTop: "0px",
      duration: 1,
    });
  }, []);

  return (
    <div className=" opacity-0 mt-16 anim w-full h-full flex items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-[#181717] rounded-2xl  shadow-xl py-6 flex flex-col"
      >
        <div className="px-4 flex flex-col gap-2">
          <label htmlFor="">ایمیل</label>
          <div className=" flex items-center justify-between ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="username"
              required
              className="px-2 text-white p-1 focus:outline-none bg-zinc rounded-2xl shadow-lg"
            />
            <CiUser className=" text-2xl" />
          </div>
        </div>
        <div className="px-4 flex flex-col gap-2">
          <label htmlFor="">رمز عبور</label>
          <div className=" flex items-center justify-between ">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              required
              className="px-2 text-white p-1 bg-zinc rounded-2xl focus:outline-none shadow-lg"
            />
            <RiLockPasswordLine className=" text-2xl" />
          </div>
        </div>
        <div className="flex gap-2 px-4 pt-4 text-gray-600">
          <p>dont have accont?</p>
          <Link href="/signup">ثبت نام</Link>
        </div>
        <div className="flex flex-col items-center gap-2 px-4 pb-4">
          <Link href="" className="text-blue">
            فراموشی رمز عبور
          </Link>
          <Link href="" className="text-blue">
            بازگردانی رمز عبور
          </Link>
        </div>
        {loading ? (
          <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue rounded-3xl px-4 py-2 shadow-xl mx-[30%]"
          >
            ورود
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
