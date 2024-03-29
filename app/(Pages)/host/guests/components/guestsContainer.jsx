'use client'
import React, { useState } from "react";
import { Delete } from "@/icons";
import SuspendPopup from "./suspendPopup";
import ReviewPopup from "./reviewPopup";

const GuestsContainer = () => {
  const [suspendPopup, setSuspendPopup] = useState(false);
  const [reviewPopup, setReviewPopup] = useState(false);

  return (
    <>
      {suspendPopup && <SuspendPopup setShowPopup={setSuspendPopup} />}
      {reviewPopup && <ReviewPopup setShowPopup={setReviewPopup} />}

      <div className="mt-10 px-7 py-6 rounded-lg shadow-blog-card">
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
                  <div className="flex gap-6 items-center">
                    <img
                      src="/images/dashboardImages/thumbsupLikeIcon.png"
                      alt=""
                      className="cursor-pointer"
                      onClick={()=>setReviewPopup(true)}
                    />
                    <div
                      className="cursor-pointer"
                      onClick={() => setSuspendPopup(true)}
                    >
                      <Delete />
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
                  <div className="flex gap-6 items-center">
                    <img
                      src="/images/dashboardImages/thumbsupLikeIcon.png"
                      alt=""
                      className=""
                    />
                    <Delete />
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-6 items-center">
                    <img
                      src="/images/dashboardImages/thumbsupLikeIcon.png"
                      alt=""
                      className=""
                    />
                    <Delete />
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-6 items-center">
                    <img
                      src="/images/dashboardImages/thumbsupLikeIcon.png"
                      alt=""
                      className=""
                    />
                    <Delete />
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-6 items-center">
                    <img
                      src="/images/dashboardImages/thumbsupLikeIcon.png"
                      alt=""
                      className=""
                    />
                    <Delete />
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-6 items-center">
                    <img
                      src="/images/dashboardImages/thumbsupLikeIcon.png"
                      alt=""
                      className=""
                    />
                    <Delete />
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-6 items-center">
                    <img
                      src="/images/dashboardImages/thumbsupLikeIcon.png"
                      alt=""
                      className=""
                    />
                    <Delete />
                  </div>
                </td>
              </tr>
              <tr className="h-20 border-t border-[#1D1D1D33]">
                <td className="pl-7">01</td>
                <td>David Roy</td>
                <td>dav...............@gmail.com</td>
                <td>Dreamland, Margate</td>
                <td>
                  <div className="flex gap-6 items-center">
                    <img
                      src="/images/dashboardImages/thumbsupLikeIcon.png"
                      alt=""
                      className=""
                    />
                    <Delete />
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

export default GuestsContainer;
