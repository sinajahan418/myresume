/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";

const UplodeProductBox = () => {
  const [productImg, setProductImg] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [baner, setBaner] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [description, setDescription] = useState("");
  const imageUrl = productImg ? URL.createObjectURL(productImg) : null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductImg(e.target.files[0]);
    } else {
      setProductImg(null);
    }
  };

  const uplodeProducts = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productsDeteales = {
      productName: name,
      brandName: baner,
      category,
      price,
      sellingPrice,
    };
    const res = await fetch("/api/upload-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productsDeteales),
    });
    if (res.status === 201) {
      swal({
        title: "Product upload successfully",
        buttons: ["ok"],
        icon: "success",
      });
      setName("");
      setBaner("");
      setCategory("");
      setPrice("");
      setSellingPrice("");
      setDescription("");
    }
  };
  return (
    <div className=" bg-slate-800  rounded-xl mt-8">
      <div className="p-3">
        <div className="flex justify-between items-center p-4">
          <h1>UPLODE Product</h1>
          <div className=" text-2xl hover:text-blue-300 ">
            <IoClose />
          </div>
        </div>
        <form onSubmit={uplodeProducts} className=" grid gap-3 ">
          <label htmlFor="produtName">produt Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="produtName"
            placeholder="  enter product name"
            className=" p-1 border rounded-2xl outline-none"
          />
          <label htmlFor="produtName">produt Banner:</label>
          <input
            value={baner}
            onChange={(e) => setBaner(e.target.value)}
            type="text"
            id="produtName"
            placeholder="  enter product Banner"
            className=" p-1 border rounded-2xl outline-none"
          />
          <label htmlFor="produtName">produt category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" p-1 border rounded-2xl outline-none"
          >
            {/* {productCategory.map((item) => (
              <option key={item.id}>{item.label}</option>
            ))} */}
          </select>
          <label htmlFor="produtName">produt img:</label>
          <div className=" w-full h-40 p-3 bg-gray-400  flex justify-center items-center flex-col ">
            <label htmlFor="uplodeProdute">
              <div className="flex justify-center items-center flex-col gap-2">
                <span className=" text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p>uplode Procuct img</p>
                <input
                  type="file"
                  id="uplodeProdute"
                  className=" opacity-0"
                  onChange={handleFileChange}
                />
              </div>
            </label>
          </div>
          <div>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="img"
                width={80}
                height={80}
                className=" bg-slate-500"
              ></Image>
            ) : (
              <p className=" text-red-600">CHOSE A image</p>
            )}
          </div>
          <label htmlFor="produtName">produt price:</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            id="produtName"
            placeholder="  enter product price"
            className=" p-1 border rounded-2xl outline-none"
          />
          <label htmlFor="produtName">selling price::</label>
          <input
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            type="text"
            id="produtName"
            placeholder="  enter product selling price"
            className=" p-1 border rounded-2xl outline-none"
          />
          <label htmlFor="description">description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="produtName"
            placeholder="  enter product selling price"
            className=" p-1 border rounded-2xl outline-none"
          ></textarea>
          <button className=" p-3 bg-slate-400 rounded-3xl">uplude</button>
        </form>
      </div>
    </div>
  );
};

export default UplodeProductBox;
