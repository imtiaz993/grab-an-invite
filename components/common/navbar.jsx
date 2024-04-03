"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Search } from "@/icons";
import CustomButton from "./customButton";
import ProfileDropdown from "./profileDropdown";
import NotificationDropdown from "./notificationDropdown";
import CategoriesDropdown from "./categoriesDropdown";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  const router = useRouter();
  const { data, status } = useSession();

  return (
    <nav className="flex items-center justify-between py-[19px] text-white navbarHeader object-cover bg-no-repeat bg-cover px-[12%] absolute top-0 z-20 w-full">
      <Link href={"/"}>
        <img src={logo.src} alt="Logo" className="w-44 h-6" />
      </Link>
      <div>
        <CategoriesDropdown />
        <button className="w-11 h-5">Blogs</button>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-72 h-10 rounded-full border-[1px] border-white focus:border-white bg-transparent mr-8 p-5 "
          />
          <Link href={"/search"} className="absolute right-12">
            <Search />
          </Link>
        </div>
        {status === "authenticated" ? (
          <div className="flex">
            <NotificationDropdown />
            <ProfileDropdown data={data} />
          </div>
        ) : (
          <>
            <Link href="/signup" className="w-[60px] h-5 mr-4">
              Signup
            </Link>

            <CustomButton
              text="Login"
              width="w-32"
              onClick={() => router.push("/login")}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
