"use client";
import React, { useState } from "react";
import { Delete } from "@/icons";
import { useRouter } from "next/navigation";

const HostsContainer = () => {
  const router = useRouter();
  return (
    <>
      <div className="my-10 px-7 py-6 rounded-lg shadow-blog-card">
        <div className="">
          <span>Show</span>
          <select
            name="numEntries"
            className="w-20 mx-3 p-2 border border-[#1D1D1D33] rounded-md"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span>Entires</span>
        </div>
        <div className="mt-7 rounded-lg border border-[#1D1D1D33] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#F5F5F5] text-secondary font-semibold">
              <tr className="h-14">
                <th></th>
                <th>Name </th>
                <th>Email</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer">
                      <img
                        src="/images/dashboardImages/admin/upcomingCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/upcoming-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/attendedCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/attended-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/celebrate.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer">
                      <img
                        src="/images/dashboardImages/admin/upcomingCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/upcoming-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/attendedCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/attended-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/celebrate.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer">
                      <img
                        src="/images/dashboardImages/admin/upcomingCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/upcoming-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/attendedCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/attended-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/celebrate.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer">
                      <img
                        src="/images/dashboardImages/admin/upcomingCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/upcoming-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/attendedCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/attended-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/celebrate.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer">
                      <img
                        src="/images/dashboardImages/admin/upcomingCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/upcoming-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/attendedCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/attended-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/celebrate.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer">
                      <img
                        src="/images/dashboardImages/admin/upcomingCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/upcoming-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/attendedCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/attended-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/celebrate.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer">
                      <img
                        src="/images/dashboardImages/admin/upcomingCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/upcoming-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/attendedCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/attended-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/celebrate.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer">
                      <img
                        src="/images/dashboardImages/admin/upcomingCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/upcoming-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/attendedCalender.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/attended-events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                      <img
                        src="/images/dashboardImages/admin/celebrate.png"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          router.push("/admin/hosts/1/events", {
                            scroll: false,
                          });
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p className="mt-7 font-medium">Showing 1 to 8 of 250 entries </p>
        </div>
      </div>
    </>
  );
};

export default HostsContainer;
