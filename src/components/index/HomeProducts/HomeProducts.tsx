"use client";
import { Products } from "@/type";
import { yellowImg } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

const HomeProducts = () => {
  const [products, setProducts] = useState<Products[] | undefined>([]);
  const [loding, setLoding] = useState(false);
  const getAllProducts = async () => {
    setLoding(true);
    const res = await fetch("http://localhost:5000/api/v1/products/");
    const data = await res.json();
    setProducts(data);
    setLoding(false);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="w-full h-full ">
      <section className=" sm:grid flex gap-5 sm:grid-cols-4 overflow-x-auto ">
        {loding && <div>loding</div>}
        {products ? (
          products?.slice(0, 4).map((product) => (
            <Link
              href={`/product/${product._id}`}
              className="flex p-1 border-[1px] border-[#161515] rounded-xl shadow-2xl m-2 flex-col items-center justify-center"
              key={product._id}
            >
              <span className="w-full border-[1px] items-center justify-center flex bg-[#242020] py-3 rounded-2xl border-zinc">
                <Image
                  src={product.image ? product.image : yellowImg}
                  alt={product._id}
                  width={50}
                  height={50}
                  className=" rounded-xl"
                />
              </span>
              <div className="flex items-center justify-between w-full p-2">
                <span className="p-1 px-3 bg-[#3f3434] rounded-lg shadow-xl">
                  {product.name}
                </span>
                <span className="flex gap-2 items-center">
                  <FaStar className="text-yellow-500" />
                  <em>4.6</em>
                </span>
              </div>
              <p className="text-2xl font-bold p-4">{product.description}</p>
              <div className="h-[3px] bg-zinc w-full px-1"></div>
              <div className="w-full flex items-center justify-between p-3">
                <span>{product.price}$</span>
                <div className="flex items-center gap-3">
                  <span>مشاهده محصول</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default HomeProducts;
