"use client";
import AdminLyout from "@/components/madules/adminLyout/PAdmin";
import React, { useState } from "react";

const page = () => {
  const [description, setDescription] = useState("");

  return (
    <AdminLyout>
      <h2 className="w-full text-center text-blue">افزودن دسته بندی</h2>
      <form className="w-full m-8 flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          placeholder="نام دسته بندی"
          className="bg-zinc w-[40%] p-2 rounded-md"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="produtName"
          placeholder=" توضیحات دسته بندی "
          className="bg-zinc p-1 border rounded-2xl focus:outline-none outline-none w-[40%]"
        ></textarea>
        <button className="m-6 px-8 py-2 bg-blue rounded-xl">ثبت</button>
      </form>
    </AdminLyout>
  );
};

export default page;
