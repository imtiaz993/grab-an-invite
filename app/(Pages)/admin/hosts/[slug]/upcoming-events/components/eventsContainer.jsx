"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Eye, Pencil, PeopleGroup } from "@/icons";

const EventsContainer = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="mt-10 rounded-lg border border-[#1D1D1D33] overflow-hidden">
        <table className="w-full text-left">
          <thead className="text-secondary font-semibold">
            <tr className="h-14">
              <th className="pl-7">Publish Date</th>
              <th> Title </th>
              <th>Location</th>
              <th>Total Revenue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-20 border-t border-[#1D1D1D33]">
              <td className="pl-7">03 Feb, 2024</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>$460 </td>
              <td>
                <div className="flex gap-3">
                  <div
                    className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer"
                    onClick={() => {
                      router.push("/events/1", { scroll: false });
                    }}
                  >
                    <Eye />
                  </div>
                  <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                    <Pencil color="#1C85A4" />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="h-20 border-t border-[#1D1D1D33]">
              <td className="pl-7">03 Feb, 2024</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>$460 </td>
              <td>
                <div className="flex gap-3">
                  <div
                    className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer"
                    onClick={() => {
                      router.push("/events/1", { scroll: false });
                    }}
                  >
                    <Eye />
                  </div>
                  <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                    <Pencil color="#1C85A4" />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="h-20 border-t border-[#1D1D1D33]">
              <td className="pl-7">03 Feb, 2024</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>$460 </td>
              <td>
                <div className="flex gap-3">
                  <div
                    className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer"
                    onClick={() => {
                      router.push("/events/1", { scroll: false });
                    }}
                  >
                    <Eye />
                  </div>
                  <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                    <Pencil color="#1C85A4" />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="h-20 border-t border-[#1D1D1D33]">
              <td className="pl-7">03 Feb, 2024</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>$460 </td>
              <td>
                <div className="flex gap-3">
                  <div
                    className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer"
                    onClick={() => {
                      router.push("/events/1", { scroll: false });
                    }}
                  >
                    <Eye />
                  </div>
                  <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                    <Pencil color="#1C85A4" />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="h-20 border-t border-[#1D1D1D33]">
              <td className="pl-7">03 Feb, 2024</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>$460 </td>
              <td>
                <div className="flex gap-3">
                  <div
                    className="h-9 w-9 flex items-center justify-center border border-[#212972] rounded-full cursor-pointer"
                    onClick={() => {
                      router.push("/events/1", { scroll: false });
                    }}
                  >
                    <Eye />
                  </div>
                  <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                    <Pencil color="#1C85A4" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsContainer;
