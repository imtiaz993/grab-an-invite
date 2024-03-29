"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search } from "@/icons";
import { ArrowDown, Notification } from "../../icons";
import ProfileDropdown from "./profileDropdown";
import NotificationDropdown from "./notificationDropdown";
import CategoriesDropdown from "./categoriesDropdown";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [notificationMenu, setNotificationMenu] = useState(false);
  const [categoriesMenu, setCategoriesMenu] = useState(false);

  const profileDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const categoriesDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setProfileMenu(false);
    }
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target)
    ) {
      setNotificationMenu(false);
    }
    if (
      categoriesDropdownRef.current &&
      !categoriesDropdownRef.current.contains(event.target)
    ) {
      setCategoriesMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <nav className="flex items-center justify-between py-[19px] text-white bg-header-background object-cover bg-no-repeat bg-cover px-[12%] absolute top-0 z-20 w-full">
      <img
        src={logo.src}
        alt="Logo"
        className="w-44 h-6"
      />
      <div>
        <div className="inline relative" ref={categoriesDropdownRef}>
          <button
            className="w-[88px] h-5 mr-10"
            onClick={() => setCategoriesMenu((prev) => !prev)}
          >
            Categories
          </button>
          {categoriesMenu && (
            <div className="absolute top-9 -left-32">
              <CategoriesDropdown />
            </div>
          )}
        </div>

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

        {/* <button className="w-[60px] h-5 mr-4">
          <Link href="/signup">Signup</Link>
        </button>

        <button
          type="button"
          className="w-32 h-12 font-bold  text-white bg-button-primary rounded-full"
        >
          <Link href="/login">Login</Link>
        </button> */}

        <div className="flex">
          <div
            className="w-11 h-11 flex justify-center items-center border rounded-full mr-10 relative cursor-pointer"
            ref={notificationDropdownRef}
          >
            <div onClick={() => setNotificationMenu((prev) => !prev)}>
              <Notification />
            </div>
            {notificationMenu && (
              <div className="absolute top-12 right-0">
                <NotificationDropdown />
              </div>
            )}
          </div>
          <div
            className="font-bold flex items-center gap-3 relative cursor-pointer select-none"
            ref={profileDropdownRef}
          >
            <div
              onClick={() => setProfileMenu((prev) => !prev)}
              className="font-bold flex items-center gap-3 relative cursor-pointer select-none"
            >
              <p>DavidRay123</p>
              <ArrowDown />
            </div>
            {profileMenu && (
              <div className="absolute top-12 right-0">
                <ProfileDropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
