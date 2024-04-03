import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="">
      <div className="mt-10 rounded-lg overflow-hidden shadow-blog-card">
        <h1 className="mt-9 mb-3 pl-6 font-bold text-2xl">Upcoming Events</h1>
        <table className="w-full text-left">
          <thead className="text-secondary font-semibold">
            <tr className="h-14">
              <th className="pl-6"> Title </th>
              <th>Location</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-20 border-t border-[#1D1D1D33] text-[#1D1D1DB2]">
              <td className="pl-7 text-dark font-semibold">
                Citywide Music Event
              </td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>Lorem Ipsum is simply dummy text... </td>
            </tr>
            <tr className="h-20 border-t border-[#1D1D1D33] text-[#1D1D1DB2]">
              <td className="pl-7 text-dark font-semibold">
                Citywide Music Event
              </td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>Lorem Ipsum is simply dummy text... </td>
            </tr>
            <tr className="h-20 border-t border-[#1D1D1D33] text-[#1D1D1DB2]">
              <td className="pl-7 text-dark font-semibold">
                Citywide Music Event
              </td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>Lorem Ipsum is simply dummy text... </td>
            </tr>
            <tr className="h-20 border-t border-[#1D1D1D33] text-[#1D1D1DB2]">
              <td className="pl-7 text-dark font-semibold">
                Citywide Music Event
              </td>
              <td>Dreamland, Margate</td>
              <td>03 Feb, 2024</td>
              <td>Lorem Ipsum is simply dummy text... </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingEvents;
