'use client'
import React, { useState } from "react";
import { Pencil } from "@/icons";
import PersonalDetailsPopup from './popups/personalDetailsPopup'

const PersonalDetails = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PersonalDetailsPopup setShowPopup={setShowPopup} />}
      <div className="py-16 border-b-2 border-dashed">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">Personal Details</p>
          <div className="rounded-full p-3 border border-secondary cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            <Pencil color="#1C85A4" />
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Sex</p>
          <p className="opacity-70 font-medium">Male</p>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Marital Status</p>
          <p className="opacity-70 font-medium">Married</p>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Children</p>
          <p className="opacity-70 font-medium">2</p>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Child 1</p>
          <div className="opacity-70 font-medium w-1/2 flex justify-between">
            <p>Female </p> <p>DOB (03Feb, 2020)</p>
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Child 2</p>
          <p className="opacity-70 font-medium">Male</p>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
