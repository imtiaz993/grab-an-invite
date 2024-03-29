"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarOptions } from "./sidebarOptions";

const Layout = ({ children }) => {

  const pathname = usePathname();

  const matchingRoute = sidebarOptions.find(
    (item) => pathname && pathname.includes(item.route)
  );

  return (
    <div className="flex">
      <div className="min-w-[21%] bg-primary h-screen text-white sticky top-0">
        <div className="pt-20 flex justify-center">
          <img src="/images/logo.png" alt="" className="w-44 h-6" />
        </div>
        <div className="mt-20">
          <ul>
            {sidebarOptions.map((item, index) => (
              <Link href={"/user" + item.route} key={index}>
                <li
                  className={`flex gap-3 items-center h-16 w-full pl-[30%] cursor-pointer ${
                    matchingRoute &&
                    matchingRoute.route === item.route &&
                    `bg-secondary`
                  }`}
                >
                  <img src={"/images/dashboardImages/" + item.image} alt="" />
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
