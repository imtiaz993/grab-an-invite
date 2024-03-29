"use client";
import React from "react";
import { useRouter } from "next/navigation";

const InvitesContainer = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="mt-10 rounded-lg border border-[#1D1D1D33] overflow-hidden">
        <table className="w-full text-left">
          <thead className="text-secondary font-semibold">
            <tr className="h-14">
              <th className="pl-7"></th>
              <th></th>
              <th> Event Title </th>
              <th>Location</th>
              <th>Publish Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="h-20 border-t border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/host/invites/details", { scroll: false });
              }}
            >
              <td className="pl-7">01</td>
              <td>
                <img
                  src="/images/guitarBoy.png"
                  alt=""
                  className="w-20 h-14 object-cover rounded-lg"
                />
              </td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
            </tr>
            <tr
              className="h-20 border-t border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/host/invites/details", { scroll: false });
              }}
            >
              <td className="pl-7">01</td>
              <td>
                <img
                  src="/images/guitarBoy.png"
                  alt=""
                  className="w-20 h-14 object-cover rounded-lg"
                />
              </td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
            </tr>
            <tr
              className="h-20 border-t border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/host/invites/details", { scroll: false });
              }}
            >
              <td className="pl-7">01</td>
              <td>
                <img
                  src="/images/guitarBoy.png"
                  alt=""
                  className="w-20 h-14 object-cover rounded-lg"
                />
              </td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
            </tr>
            <tr
              className="h-20 border-t border-[#1D1D1D33] cursor-pointer"
              onClick={() => {
                router.push("/host/invites/details", { scroll: false });
              }}
            >
              <td className="pl-7">01</td>
              <td>
                <img
                  src="/images/guitarBoy.png"
                  alt=""
                  className="w-20 h-14 object-cover rounded-lg"
                />
              </td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvitesContainer;
