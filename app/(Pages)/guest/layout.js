"use client";
import React, { useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { sidebarOptions } from "./sidebarOptions";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data, status } = useSession();

  const matchingRoute = sidebarOptions.find(
    (item) => pathname && pathname.includes(item.route)
  );

  useLayoutEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (status === "authenticated" && data.user.role !== "guest") {
      router.push("/");
    }
  }, [status]);

  return (
    <div className="flex">
      <div className="min-w-[21%] bg-primary h-screen text-white sticky top-0 overflow-auto">
        <div className="pt-20 flex justify-center">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="" className="w-44 h-6" />
          </Link>
        </div>
        <div className="mt-20">
          <ul>
            {sidebarOptions.map((item, index) => (
              <Link href={"/guest" + item.route} key={index}>
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
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
