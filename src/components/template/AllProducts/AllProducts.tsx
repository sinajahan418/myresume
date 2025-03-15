"use client";
import { Products } from "@/type";
import { yellowImg } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";

const AllProducts = () => {
  const [products, setProducts] = useState<Products[] | undefined>([]);
  const [loding, setLoding] = useState(false);
  const getAllProducts = async () => {
    try {
      setLoding(true);
      const res = await fetch("http://localhost:5000/api/v1/products/");
      const data = await res.json();
      setProducts(data);
      setLoding(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="bg-black w-full h-screen overflow-x-auto grid grid-cols-6 gap-4 p-4">
      {loding && <>... loding</>}
      {products ? (
        products?.map((product) => (
          <Link
            href={`/product/${product._id}`}
            className="flex p-1 bg-zinc rounded-xl shadow-2xl m-2 flex-col items-center justify-center"
            key={product._id}
          >
            <span className="w-full border-[1px] items-center justify-center flex bg-[#242020]  rounded-2xl border-zinc">
              <Image
                src={product.image ? product.image : yellowImg}
                alt={product._id}
                width={50}
                height={50}
                className=" rounded-xl"
              />
            </span>
            <div className="flex items-center justify-center w-full p-2">
              <span className="p-1 px-3 bg-[#3f3434] rounded-lg shadow-xl">
                {product.name}
              </span>
            </div>
            <div className="flex items-center justify-between w-full px-2 p-1 ">
              <span className="bg-blue rounded-full p-3 shadow-2xl">
                <CiEdit />
              </span>
              <span className="bg-black text-white px-3 p-1 rounded-xl m-2">
                حذف
              </span>
            </div>
          </Link>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default AllProducts;
