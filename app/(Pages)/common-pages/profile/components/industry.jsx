'use client'
import React, { useState } from "react";
import { Pencil } from "@/icons";
import IndustryPopup from "./popups/industryPopup";

const Industry = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <IndustryPopup setShowPopup={setShowPopup} />}

      <div className="py-16 border-b-2 border-dashed">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">Industry </p>
          <div
            className="rounded-full p-3 border border-secondary cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            <Pencil color="#1C85A4" />
          </div>
        </div>
        <div className="mt-6 flex gap-5">
          <img
            src="/images/nectarines.png"
            alt=""
            className="rounded-lg h-24 w-24 object-cover"
          />
          <div>
            <p className="font-semibold text-lg">Payload Studio</p>
            <p className="mt-3 font-medium">
              Function: <span className="text-secondary">IT</span>
            </p>
            <p className="mt-3 font-medium opacity-70">Owner ( Full Time )</p>
            <p className="mt-3 font-medium">
              Salary Range:{" "}
              <span className="opacity-70"> $50,000 - $99,999</span>
            </p>
            <p className="mt-3 font-medium">
              No of Employees: <span className="opacity-70"> 10 - 50</span>
            </p>
            <p className="mt-3 font-medium">
              Business Turnover:{" "}
              <span className="opacity-70"> $0 - $48,555</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
