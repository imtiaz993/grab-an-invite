"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { ArrowDown } from "@/icons";
import { sidebarOptions } from "./sidebarOptions";

const Layout = ({ children }) => {
  const { data, status } = useSession();
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState();

  if (status !== "authenticated") {
    return <h2>Not Logged In</h2>;
  }
  if (status === "authenticated" && data.userType !== "host") {
    return <h2>Not Authorized</h2>;
  }

  return (
    <div className="flex">
      <div className="min-w-[21%] bg-primary min-h-screen text-white sticky top-0 bottom-0">
        <div className="pt-20 flex justify-center">
          <img src="/images/logo.png" alt="" className="w-44 h-6" />
        </div>
        <div className="mt-20">
          <ul>
            {sidebarOptions.map((item, index) =>
              item.route ? (
                <Link href={"/host" + item.route} key={index}>
                  <li
                    className={`flex gap-3 items-center h-16 w-full pl-[30%] cursor-pointer ${
                      pathname &&
                      pathname.includes(item.route) &&
                      `bg-secondary`
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={"/images/dashboardImages/" + item.image} alt="" />
                    {item.title}
                  </li>
                </Link>
              ) : (
                <li key={index}>
                  <div
                    className={`flex gap-3 items-center h-16 w-full pl-[30%] cursor-pointer ${
                      item.components.some(
                        (childRoute) =>
                          pathname && pathname.includes(childRoute.route)
                      ) && "bg-secondary"
                    }`}
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === index ? undefined : index
                      )
                    }
                  >
                    <img src={"/images/dashboardImages/" + item.image} alt="" />
                    <div className="flex justify-between items-center w-full pr-6">
                      <p>{item.title}</p>
                      <div>
                        <ArrowDown />
                      </div>
                    </div>
                  </div>

                  {(index === activeIndex ||
                    item.components.some(
                      (childRoute) =>
                        pathname && pathname.includes(childRoute.route)
                    )) &&
                    item.components?.map((i, ind) => (
                      <Link href={"/host" + i.route} key={ind}>
                        <p
                          className={`ml-[45%] font-medium px-3 py-4 ${
                            pathname &&
                            pathname.includes(i.route) &&
                            `opacity-50 `
                          }`}
                        >
                          {i.title}
                        </p>
                      </Link>
                    ))}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
