import React from "react";
import { Pencil } from "@/icons";

const RecentEvents = () => {
  return (
    <div className="">
      <div className="mt-10">
        <h1 className="mt-9 mb-3 pl-3 font-bold text-2xl">Recently Created Events</h1>
        <table className="w-full text-left border-spacing-5 border-separate">
          <thead className="text-secondary font-semibold">
            <tr className="">
              <th className="pl-5"> Status </th>
              <th>Title</th>
              <th>Location</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="mt-5 h-14 text-[#1D1D1DB2] shadow-light rounded-lg hover:shadow-blog-card">
              <td className="pl-5">
                <div className="w-fit border-[6px] border-secondary border-opacity-35 rounded-full">
                  <div className="p-1 rounded-full bg-secondary"></div>
                </div>
              </td>
              <td className="text-dark font-semibold">Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>
                <div className="p-[6px] w-fit bg-secondary bg-opacity-70 border border-secondary rounded">
                  <Pencil />
                </div>
              </td>
            </tr>
            <tr className="mt-5 h-14 text-[#1D1D1DB2] shadow-light rounded-lg hover:shadow-blog-card">
              <td className="pl-5">
                <div className="w-fit border-[6px] border-[#FFAC30] border-opacity-35 rounded-full">
                  <div className="p-1 rounded-full bg-[#FFAC30]"></div>
                </div>
              </td>
              <td className="text-dark font-semibold">Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>
                <div className="p-[6px] w-fit bg-secondary bg-opacity-70 border border-secondary rounded">
                  <Pencil />
                </div>
              </td>
            </tr>
            <tr className="mt-5 h-14 text-[#1D1D1DB2] shadow-light rounded-lg hover:shadow-blog-card">
              <td className="pl-5">
                <div className="w-fit border-[6px] border-[#FFAC30] border-opacity-35 rounded-full">
                  <div className="p-1 rounded-full bg-[#FFAC30]"></div>
                </div>
              </td>
              <td className="text-dark font-semibold">Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>
                <div className="p-[6px] w-fit bg-secondary bg-opacity-70 border border-secondary rounded">
                  <Pencil />
                </div>
              </td>
            </tr>
            <tr className="mt-5 h-14 text-[#1D1D1DB2] shadow-light rounded-lg hover:shadow-blog-card">
              <td className="pl-5">
                <div className="w-fit border-[6px] border-[#FFAC30] border-opacity-35 rounded-full">
                  <div className="p-1 rounded-full bg-[#FFAC30]"></div>
                </div>
              </td>
              <td className="text-dark font-semibold">Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>
                <div className="p-[6px] w-fit bg-secondary bg-opacity-70 border border-secondary rounded">
                  <Pencil />
                </div>
              </td>
            </tr>
            <tr className="mt-5 h-14 text-[#1D1D1DB2] shadow-light rounded-lg hover:shadow-blog-card">
              <td className="pl-5">
                <div className="w-fit border-[6px] border-[#FFAC30] border-opacity-35 rounded-full">
                  <div className="p-1 rounded-full bg-[#FFAC30]"></div>
                </div>
              </td>
              <td className="text-dark font-semibold">Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>
                <div className="p-[6px] w-fit bg-secondary bg-opacity-70 border border-secondary rounded">
                  <Pencil />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentEvents;
