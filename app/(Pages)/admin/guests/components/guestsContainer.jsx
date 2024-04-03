"use client";
import React, { useState } from "react";
import EntriesPerPage from "@/components/common/entriesPerPage";
import GuestInfoPopup from "./guestInfoPopup";

const GuestsContainer = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <GuestInfoPopup setShowPopup={setShowPopup} />}
      <div className="mt-10 px-7 py-6 rounded-lg shadow-blog-card">
        <EntriesPerPage/>
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
              <tr className="h-20 border-t border-[#1D1D1D33] cursor-pointer" onClick={()=> setShowPopup(true)}>
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <img
                    src="/images/dashboardImages/admin/unlock.png"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {}}
                  />
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33] cursor-pointer" onClick={()=> setShowPopup(true)}>
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <img
                    src="/images/dashboardImages/admin/unlock.png"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {}}
                  />
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33] cursor-pointer" onClick={()=> setShowPopup(true)}>
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <img
                    src="/images/dashboardImages/admin/unlock.png"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {}}
                  />
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33] cursor-pointer" onClick={()=> setShowPopup(true)}>
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <img
                    src="/images/dashboardImages/admin/unlock.png"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {}}
                  />
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33] cursor-pointer" onClick={()=> setShowPopup(true)}>
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <img
                    src="/images/dashboardImages/admin/unlock.png"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {}}
                  />
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33] cursor-pointer" onClick={()=> setShowPopup(true)}>
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <img
                    src="/images/dashboardImages/admin/unlock.png"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {}}
                  />
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33] cursor-pointer" onClick={()=> setShowPopup(true)}>
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <img
                    src="/images/dashboardImages/admin/unlock.png"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {}}
                  />
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33] cursor-pointer" onClick={()=> setShowPopup(true)}>
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <img
                    src="/images/dashboardImages/admin/unlock.png"
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {}}
                  />
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

export default GuestsContainer;
