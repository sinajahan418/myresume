/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AdminLyout from "@/components/madules/adminLyout/PAdmin";
import React from "react";
import Boxs from "@/components/template/Boxs/Boxs";
import { useEffect, useState } from "react";
import { GiProfit } from "react-icons/gi";
import { User } from "@/type";
import { FaUser } from "react-icons/fa6";
import Chart from "@/components/template/Chart/Chart";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

const page = () => {
  const [users, setUsers] = useState<User[] | undefined >([]);
  const [products, setProducts] = useState([]);
  const [loding, setLoding] = useState(false);
  const getAllProducts = async () => {
    setLoding(true);
    const res = await fetch("http://localhost:5000/api/v1/products/");
    const data = await res.json();
    setProducts(data);
    setLoding(false);
  };
  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/api/v1/admin/", {
      method: "GET", // یا 'POST' یا هر روش دیگری
      headers: {
        "Content-Type": "application/json", // در صورتی که محتوای JSON ارسال می‌کنید
      },
      credentials: "include",
    });
    const data = await res.json();
    setUsers(data.data);
  };
  

  useEffect(() => {
    getAllProducts();
    getUsers();
  }, []);
  return (
    <>
      <AdminLyout>
        <section>
          {loding && <div>loding</div>}
          <div className=" grid grid-cols-3 gap-5 mt-5">
            <Boxs
              lenght={users ? users.length : 0}
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
            { users?.slice(0, 4).map((u) => (
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
      </AdminLyout>
      ;
    </>
  );
};

export default page;
