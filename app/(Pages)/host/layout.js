"use client";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { ArrowDown } from "@/icons";
import { sidebarOptions } from "./sidebarOptions";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data, status } = useSession();
  const [activeIndex, setActiveIndex] = useState();

  useLayoutEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (status === "authenticated" && data.user.role !== "host") {
      router.push("/");
    }
  }, [status]);

  return (
    <div className="flex">
      <div className="w-80 bg-primary text-white h-screen overflow-auto">
        <div className="pt-20 flex justify-center  w-full">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="" className="w-44 h-6" />
          </Link>
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
            <li
              className={`flex gap-3 items-center h-16 w-full pl-[30%] cursor-pointer `}
              onClick={async () => {
                await signOut();
                router.push("/");
              }}
            >
              <img src={"/images/dashboardImages/logoutIcon.png"} alt="" />
              Logout
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[calc(100%-320px)] max-h-screen overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
