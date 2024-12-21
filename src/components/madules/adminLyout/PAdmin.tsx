"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { IoMdClose, IoMdHelpCircle } from "react-icons/io";
import { MdDashboard, MdPayment } from "react-icons/md";
import {
  TbBrandProducthunt,
  TbBuildingWarehouse,
  TbMessageReport,
} from "react-icons/tb";
import AdminNav from "./AdminNav/AdminNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TiThMenuOutline } from "react-icons/ti";
import { SiShopware } from "react-icons/si";
import Boxs from "@/components/template/Boxs/Boxs";
import { GiProfit } from "react-icons/gi";
import { User } from "@/type";
import { FaUser } from "react-icons/fa6";
import Chart from "@/components/template/Chart/Chart";

const AdminLyout = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [users, setUsers] = useState<User[] | undefined>([]);
  const [products, setProducts] = useState([]);
  const [loding, setLoding] = useState(false);
  console.log(users);

  useGSAP(() => {
    gsap.to(".anim", {
      opacity: "1",
      delay: 1,
      direction: 1,
    });
  }, []);

  const getAllProducts = async () => {
    setLoding(true);
    const res = await fetch("http://localhost:5000/api/v1/products/");
    const data = await res.json();
    setProducts(data);
    setLoding(false);
  };
  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/api/v1/auth/all-users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getAllProducts();
    getUsers();
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
      </div>
      <div className=" sm:hidden block rounded-l-2xl bg-zinc ">
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
        <section>
          {loding && <div>loding</div>}
          <div className=" grid grid-cols-3 gap-5 mt-5">
            <Boxs
              lenght={users ? users?.length : 0}
              Icon={FaUsers}
              title={"کاربران فعال"}
            />
            <Boxs
              lenght={products.length}
              Icon={TbBuildingWarehouse}
              title={"تعداد کل محصولات"}
            />
            <Boxs lenght={0} Icon={GiProfit} title={"سود ماهانه"} />
          </div>
          <div className="text-blue text-2xl font-bold m-4 flex items-center justify-center">
            کاربران جدید
          </div>
          <div className=" grid grid-cols-4 gap-5 mt-5">
            {users?.map((u) => (
              <div
                key={u._id}
                className="flex flex-col gap-3 items-center  bg-[#2a3133] m-4 p-3 rounded-2xl shadow-xl"
              >
                <span className="p-3 bg-blue rounded-full">
                  <FaUser />
                </span>
                <div className="text-2xl">{u.username}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="  text-black rounded-2xl shadow-2xl">
          <Chart />
        </section>
      </div>
    </div>
  );
};

export default AdminLyout;
