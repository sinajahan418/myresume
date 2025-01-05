"use client";
import { Products } from "@/type";
import { yellowImg } from "@/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Tabs from "../tabs/Tabs";
import { useBasket } from "@/stor/basket";

const ProductDiteals = () => {
  const { addBascetItems } = useBasket((state) => state.action);
  const [singleProduct, setSingleProduct] = useState<Products | null>(null);
  const [loding, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const { id } = useParams();

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/v1/products/${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setSingleProduct(data.data.product);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  };

  const sendProductToBasket = () => {
    if (singleProduct !== null) {
      addBascetItems(singleProduct, count);
    }
  };
  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  return (
    <>
      <section className="flex items-start justify-around w-full p-4 m-4 h-80 overflow-hidden">
        {loding && <>loding...</>}
        <div className="flex flex-col items-center p-5 gap-6 justify-start w-[50%]">
          <h1 className="bg-blue p-2 px-5 rounded-2xl shadow-2xl">
            {singleProduct?.name}
          </h1>
          <div className="flex items-center justify-between gap-3">
            <p>{singleProduct?._id}</p>
            <p>:</p>
            <span>شناسه</span>
          </div>
          <p>{singleProduct?.description}</p>
          <div className=" flex justify-between items-center gap-4">
            <span className="bg-[#2e2d2d] p-1 px-3 rounded-2xl">
              {singleProduct?.price && singleProduct?.price * count} تومان
            </span>
            <div className="flex items-center gap-3 text-2xl bg-zinc p-1 px-4 rounded-xl">
              <span>
                <CiCircleMinus
                  onClick={() => count > 1 && setCount((pre) => pre - 1)}
                />
              </span>
              <span>{count}</span>
              <span>
                <CiCirclePlus onClick={() => setCount((pre) => pre + 1)} />
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <em className="p-2 px-4 bg-zinc rounded-xl">
              {singleProduct?.category.name}
            </em>
            <span>دسته بندی </span>
          </div>
        </div>
        <div className="w-[50%]">
          <Image
            src={singleProduct?.image || yellowImg}
            alt=""
            width={400}
            height={200}
          />
        </div>
      </section>

      <section className="w-full flex items-center justify-center mt-5">
        <button
          onClick={sendProductToBasket}
          className="p-3 px-7 bg-blue rounded-lg"
        >
          افزودن به سبد خرید
        </button>
      </section>
      <Tabs />
    </>
  );
};

export default ProductDiteals;
