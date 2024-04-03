"use client";
import React, { useState } from "react";
import { Pencil, Delete } from "@/icons";
import AddFieldPopup from "./addFieldPopup";
import EntriesPerPage from "@/components/common/entriesPerPage";

const FieldsContainer = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <AddFieldPopup setShowPopup={setShowPopup} />}
      <div>
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Your Customer Field</h1>
          <button
            className="text-secondary underline text-xl font-bold"
            onClick={() => setShowPopup(true)}
          >
            Add New
          </button>
        </div>
        <div className="my-10 px-7 py-6 rounded-lg shadow-blog-card">
          <div className="flex justify-between items-center">
            <div>
              <button className="underline font-bold text-lg text-secondary">
                All fields
              </button>
              <button className="underline font-bold text-lg opacity-60 ml-10">
                Deleted fields
              </button>
            </div>
            <EntriesPerPage/>
          </div>
          <div className="mt-6 rounded-lg border border-[#1D1D1D33] overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#F5F5F5] text-secondary font-semibold">
                <tr className="h-14">
                  <th className="pl-7">Field Name</th>
                  <th> Category </th>
                  <th>Created On</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-20 border-t border-[#1D1D1D33]">
                  <td className="pl-7">Citywide</td>
                  <td>Music</td>
                  <td>03 Feb, 2024</td>
                  <td>
                    <div className="flex gap-3">
                      <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                        <Pencil color="#1C85A4" />
                      </div>
                      <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                        <Delete color="#FA4C20" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="h-20 border-t border-[#1D1D1D33]">
                  <td className="pl-7">Citywide</td>
                  <td>Music</td>
                  <td>03 Feb, 2024</td>
                  <td>
                    <div className="flex gap-3">
                      <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                        <Pencil color="#1C85A4" />
                      </div>
                      <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                        <Delete color="#FA4C20" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="h-20 border-t border-[#1D1D1D33]">
                  <td className="pl-7">Citywide</td>
                  <td>Music</td>
                  <td>03 Feb, 2024</td>
                  <td>
                    <div className="flex gap-3">
                      <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                        <Pencil color="#1C85A4" />
                      </div>
                      <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                        <Delete color="#FA4C20" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="h-20 border-t border-[#1D1D1D33]">
                  <td className="pl-7">Citywide</td>
                  <td>Music</td>
                  <td>03 Feb, 2024</td>
                  <td>
                    <div className="flex gap-3">
                      <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                        <Pencil color="#1C85A4" />
                      </div>
                      <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                        <Delete color="#FA4C20" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="h-20 border-t border-[#1D1D1D33]">
                  <td className="pl-7">Citywide</td>
                  <td>Music</td>
                  <td>03 Feb, 2024</td>
                  <td>
                    <div className="flex gap-3">
                      <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                        <Pencil color="#1C85A4" />
                      </div>
                      <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                        <Delete color="#FA4C20" />
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
      </div>
    </>
  );
};

export default FieldsContainer;
