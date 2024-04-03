"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RequestsContainer = () => {
  const router = useRouter();
  return (
    <div className="px-7 py-6 rounded-lg shadow-blog-card">
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
            <tr className="h-14 border-b border-[#1D1D1D33]">
              <th></th>
              <th>Events Title </th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="h-20 border-b border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">01</td>
              <td>Citywide Music Event</td>
              <td>Lorem Ipsum is simply dummy text...</td>
              <td></td>
              <td>
                <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#35A600] mr-2"></span>
                Pending
              </td>
            </tr>
            <tr
              className="h-20 border-b border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/events/2", { scroll: false });
              }}
            >
              <td className="pl-7">02</td>
              <td>Citywide Music Event</td>
              <td>Lorem Ipsum is simply dummy text...</td>
              <td></td>
              <td>
                <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#FFAC30] mr-2"></span>
                Pending
              </td>
            </tr>
            <tr
              className="h-20 border-b border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/events/3", { scroll: false });
              }}
            >
              <td className="pl-7">03</td>
              <td>Citywide Music Event</td>
              <td>Lorem Ipsum is simply dummy text...</td>
              <td>
                {" "}
                <img src="/images/dashboardImages/qr.png" alt="" />
              </td>
              <td>
                <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#EF0909] mr-2"></span>
                Pending
              </td>
            </tr>

            <tr
              className="h-20 border-b border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/events/4", { scroll: false });
              }}
            >
              <td className="pl-7">04</td>
              <td>Citywide Music Event</td>
              <td>Lorem Ipsum is simply dummy text...</td>
              <td></td>
              <td>
                <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#FFAC30] mr-2"></span>
                Pending
              </td>
            </tr>

            <tr
              className="h-20 border-b border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/events/5", { scroll: false });
              }}
            >
              <td className="pl-7">05</td>
              <td>Citywide Music Event</td>
              <td>Lorem Ipsum is simply dummy text...</td>
              <td>
                {" "}
                <img src="/images/dashboardImages/qr.png" alt="" />
              </td>
              <td>
                <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#EF0909] mr-2"></span>
                Pending
              </td>
            </tr>
            <tr
              className="h-20 border-b border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/events/6", { scroll: false });
              }}
            >
              <td className="pl-7">06</td>
              <td>Citywide Music Event</td>
              <td>Lorem Ipsum is simply dummy text...</td>
              <td></td>
              <td>
                <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#FFAC30] mr-2"></span>
                Pending
              </td>
            </tr>
            <tr
              className="h-20 border-b border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/events/7", { scroll: false });
              }}
            >
              <td className="pl-7">07</td>
              <td>Citywide Music Event</td>
              <td>Lorem Ipsum is simply dummy text...</td>
              <td></td>
              <td>
                <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#FFAC30] mr-2"></span>
                Pending
              </td>
            </tr>
            <tr
              className="h-20 cursor-pointer"
              onClick={() => {
                router.push("/events/8", { scroll: false });
              }}
            >
              <td className="pl-7">08</td>
              <td>Citywide Music Event</td>
              <td>Lorem Ipsum is simply dummy text...</td>
              <td></td>
              <td>
                <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#FFAC30] mr-2"></span>
                Pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className="mt-7 font-medium">Showing 1 to 8 of 250 entries </p>
      </div>
    </div>
  );
};

export default RequestsContainer;
