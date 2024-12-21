"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { IoMdHelpCircle } from "react-icons/io";
import { MdDashboard, MdPayment } from "react-icons/md";
import { TbBrandProducthunt, TbMessageReport } from "react-icons/tb";

const UserLyout = () => {
  const pathname = usePathname();
  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="sm:mx-10 sm:m-5 flex flex-row gap-5">
      <div className="h-screen  bg-zinc">
        <div className="">
          <div className="py-3 pl-3">
            <ul className="sidebarList">
              <Link href="/P-User" className="bg-blue">
                <li
                  className={
                    pathname == "/P-User"
                      ? "flex py-4 pl-4 bg-black items-center  rounded-l-2xl shadow-xl justify-between gap-5"
                      : "flex p-4 items-center  justify-between gap-5"
                  }
                >
                  <p className="sidebarIcon">
                    <MdDashboard />
                  </p>
                  داشبورد
                </li>
              </Link>
              <Link href="/dashbord/users">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <FaUsers />
                  </p>
                  کاربر ها
                </li>
              </Link>
              <Link
                href="/dashbord/products"
                className={
                  pathname == "/dashbord/products" ? "bg-slate-950" : ""
                }
              >
                <li
                  className={
                    pathname == "/dashbord/products"
                      ? "bg-slate-950 flex p-4 items-center rounded-xl shadow-2xl justify-between gap-5"
                      : "flex p-4 items-center justify-between gap-5"
                  }
                >
                  <p className="sidebarIcon">
                    <TbBrandProducthunt />
                  </p>
                  محصولات
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <Link href="/dashbord/payment" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <MdPayment />
                  </p>
                  پرداخت ها
                </li>
              </Link>
              <Link href="/dashbord/newProduct" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <TbBrandProducthunt />
                  </p>
                  ایجاد محصول
                </li>
              </Link>
              <Link href="/dashbord/addCategory" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <BiCategoryAlt />
                  </p>
                  افزودن دسته بندی
                </li>
              </Link>
              <Link href="/dashbord/report" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <TbMessageReport />
                  </p>
                  ریپورت ها
                </li>
              </Link>
              <Link href="/dashbord/userSetting" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <GrUserSettings />
                  </p>
                  تنظیمات کاربر
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <Link href="/dashbord/help">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <IoMdHelpCircle />
                  </p>
                  کمک
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <nav>navbar</nav>
        <section>ss</section>
      </div>
    </div>
  );
};

export default UserLyout;
