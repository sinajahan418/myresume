"use client";
import { appleImg, bagImg, searchImg } from "@/utils";
import { navLists } from "@/constants";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <div className=" flex items-center justify-between gap-6">
          <Link href="/">
            <Image src={appleImg} alt="Apple" width={14} height={18} />
          </Link>
          <Link href={user ? "/P-User" : "/login"}>
            <FaUser />
          </Link>
        </div>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image src={searchImg} alt="search" width={18} height={18} />
          <Link href="/basket">
            <Image src={bagImg} alt="bag" width={18} height={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
