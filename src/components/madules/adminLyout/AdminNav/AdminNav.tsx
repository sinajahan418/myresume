/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";

const AdminNav = () => {
  return (
    <div className="w-full flex items-center justify-around">
      <div className="flex gap-4 items-center">
        <input
          type="text"
          className="bg-zinc px-2 py-1 rounded-xl shadow-2xl focus:outline-none outline-none text-gray-200"
        />
        <span>
          <FaSearch />
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <span>{}</span>
        <span>
          <IoNotificationsSharp />
        </span>
      </div>
    </div>
  );
};

export default AdminNav;
