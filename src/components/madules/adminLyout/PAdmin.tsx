"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { IoMdClose, IoMdHelpCircle } from "react-icons/io";
import { MdDashboard, MdPayment } from "react-icons/md";
import { TbBrandProducthunt, TbMessageReport } from "react-icons/tb";
import AdminNav from "./AdminNav/AdminNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TiThMenuOutline } from "react-icons/ti";
import { SiShopware } from "react-icons/si";

const AdminLyout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  useGSAP(() => {
    gsap.to(".anim", {
      opacity: "1",
      delay: 1,
      direction: 1,
    });
  }, []);

  return (
    <div className="sm:mx-10 sm:m-5 flex flex-row gap-5">
      <div className="h-screen hidden sm:block rounded-l-2xl bg-zinc">
        <div className=" ">
          <div className="py-3 pl-3">
            <ul className="sidebarList">
              <div className="flex items-center justify-between p-4 ">
                <SiShopware /> <span>Shoppy</span>
              </div>
              <Link href="/P-User" className="bg-blue">
                <li
                  className={
                    pathname == "/P-Admin"
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
              <Link href="/P-Admin/users">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <FaUsers />
                  </p>
                  کاربر ها
                </li>
              </Link>
              <Link
                href="/P-Admin/products"
                className={
                  pathname == "/P-Admin/products" ? "bg-slate-950" : ""
                }
              >
                <li
                  className={
                    pathname == "/P-Admin/products"
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
              <Link href="/P-Admin/payment" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <MdPayment />
                  </p>
                  پرداخت ها
                </li>
              </Link>
              <Link href="/P-Admin/newProduct" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <TbBrandProducthunt />
                  </p>
                  ایجاد محصول
                </li>
              </Link>
              <Link href="/P-Admin/addCategory" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <BiCategoryAlt />
                  </p>
                  افزودن دسته بندی
                </li>
              </Link>
              <Link href="/P-Admin/report" className="link">
                <li className="flex p-4 items-center justify-between gap-5">
                  <p className="sidebarIcon">
                    <TbMessageReport />
                  </p>
                  ریپورت ها
                </li>
              </Link>
              <Link href="/P-Admin/userSetting" className="link">
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
              <Link href="/P-Admin/help">
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
      <div className="anim sm:hidden block rounded-l-2xl bg-zinc ">
        <div className=" h-screen overflow-y-auto  ">
          {menu ? (
            <div className=" ">
              <div className="py-3 pl-3">
                <ul className="sidebarList">
                  <div className="flex items-center justify-between p-4 ">
                    <IoMdClose onClick={() => setMenu(false)} />{" "}
                    <span>Shoppy</span>
                  </div>
                  <Link href="/P-User" className="bg-blue">
                    <li
                      className={
                        pathname == "/P-Admin"
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
                  <Link href="/P-Admin/users">
                    <li className="flex p-4 items-center justify-between gap-5">
                      <p className="sidebarIcon">
                        <FaUsers />
                      </p>
                      کاربر ها
                    </li>
                  </Link>
                  <Link
                    href="/P-Admin/products"
                    className={
                      pathname == "/dashbord/products" ? "bg-slate-950" : ""
                    }
                  >
                    <li
                      className={
                        pathname == "/P-Admin/products"
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
          ) : (
            <>
              <span
                onClick={() => setMenu(true)}
                className="text-2xl w-full flex items-center p-3"
              >
                <TiThMenuOutline />
              </span>
              <div className=" ">
                <div className="py-3 pl-3">
                  <ul className="sidebarList">
                    <Link href="/P-User" className="bg-blue">
                      <li
                        className={
                          pathname == "/P-Admin"
                            ? "flex py-4 pl-4 bg-black items-center  rounded-l-2xl shadow-xl justify-between gap-5"
                            : "flex p-4 items-center  justify-between gap-5"
                        }
                      >
                        <p className="sidebarIcon">
                          <MdDashboard />
                        </p>
                      </li>
                    </Link>
                    <Link href="/P-Admin/users">
                      <li className="flex p-4 items-center justify-between gap-5">
                        <p className="sidebarIcon">
                          <FaUsers />
                        </p>
                      </li>
                    </Link>
                    <Link
                      href="/P-Admin/products"
                      className={
                        pathname == "/dashbord/products" ? "bg-slate-950" : ""
                      }
                    >
                      <li
                        className={
                          pathname == "/P-Admin/products"
                            ? "bg-slate-950 flex p-4 items-center rounded-xl shadow-2xl justify-between gap-5"
                            : "flex p-4 items-center justify-between gap-5"
                        }
                      >
                        <p className="sidebarIcon">
                          <TbBrandProducthunt />
                        </p>
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
                      </li>
                    </Link>
                    <Link href="/dashbord/newProduct" className="link">
                      <li className="flex p-4 items-center justify-between gap-5">
                        <p className="sidebarIcon">
                          <TbBrandProducthunt />
                        </p>
                      </li>
                    </Link>
                    <Link href="/dashbord/addCategory" className="link">
                      <li className="flex p-4 items-center justify-between gap-5">
                        <p className="sidebarIcon">
                          <BiCategoryAlt />
                        </p>
                      </li>
                    </Link>
                    <Link href="/dashbord/report" className="link">
                      <li className="flex p-4 items-center justify-between gap-5">
                        <p className="sidebarIcon">
                          <TbMessageReport />
                        </p>
                      </li>
                    </Link>
                    <Link href="/dashbord/userSetting" className="link">
                      <li className="flex p-4 items-center justify-between gap-5">
                        <p className="sidebarIcon">
                          <GrUserSettings />
                        </p>
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
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-full">
        <nav className="w-full bg-[#333030] rounded-xl shadow-xl p-3">
          <AdminNav />
        </nav>
        {children}
      </div>
    </div>
  );
};

export default AdminLyout;
