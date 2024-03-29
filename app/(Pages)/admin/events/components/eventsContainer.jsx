import React from "react";

const EventsContainer = () => {
  return (
    <>
      <div className="my-10 px-7 py-6 rounded-lg shadow-blog-card">
        <div>
          <div>
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
          <div className="mt-5 flex gap-6">
            <input
              type="text"
              className="rounded-full border border-dark20 placeholder:text-dark placeholder:text-opacity-60 px-5 py-[6px] w-36 outline-none"
              placeholder="Category"
            />
            <input
              type="text"
              className="rounded-full border border-dark20 placeholder:text-dark placeholder:text-opacity-60 px-5 py-[6px] w-48 outline-none"
              placeholder="Location"
            />
            <input
              type="date"
              className="rounded-full border border-dark20 placeholder:text-dark placeholder:text-opacity-60 px-5 py-[6px] w-60 outline-none"
              placeholder="Start Date"
            />
            <input
              type="date"
              className="rounded-full border border-dark20 placeholder:text-dark placeholder:text-opacity-60 px-5 py-[6px] w-60 outline-none"
              placeholder="End Date"
            />
          </div>
        </div>
        <div className="mt-7 rounded-lg border border-[#1D1D1D33] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#F5F5F5] text-secondary font-semibold">
              <tr className="h-14">
                <th></th>
                <th>Events Title </th>
                <th>Location</th>
                <th>Category</th>
                <th>Start to End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>Citywide Music Event</td>
                <td>Dreamland, Margate</td>
                <td>Music</td>
                <td>02 Feb,2024 - 06 Feb, 2024</td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>Citywide Music Event</td>
                <td>Dreamland, Margate</td>
                <td>Music</td>
                <td>02 Feb,2024 - 06 Feb, 2024</td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>Citywide Music Event</td>
                <td>Dreamland, Margate</td>
                <td>Music</td>
                <td>02 Feb,2024 - 06 Feb, 2024</td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>Citywide Music Event</td>
                <td>Dreamland, Margate</td>
                <td>Music</td>
                <td>02 Feb,2024 - 06 Feb, 2024</td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>Citywide Music Event</td>
                <td>Dreamland, Margate</td>
                <td>Music</td>
                <td>02 Feb,2024 - 06 Feb, 2024</td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>Citywide Music Event</td>
                <td>Dreamland, Margate</td>
                <td>Music</td>
                <td>02 Feb,2024 - 06 Feb, 2024</td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>Citywide Music Event</td>
                <td>Dreamland, Margate</td>
                <td>Music</td>
                <td>02 Feb,2024 - 06 Feb, 2024</td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>Citywide Music Event</td>
                <td>Dreamland, Margate</td>
                <td>Music</td>
                <td>02 Feb,2024 - 06 Feb, 2024</td>
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

export default EventsContainer;
