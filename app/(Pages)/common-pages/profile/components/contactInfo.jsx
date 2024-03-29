'use client'
import React, { useState } from "react";
import { Pencil } from "@/icons";
import ContactInfoPopup from "./popups/contactInfoPopup"

const ContactInfo = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <ContactInfoPopup setShowPopup={setShowPopup} />}
      <div className="py-16 border-b-2 border-dashed">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">Contact Info...</p>
          <div
            className="rounded-full p-3 border border-secondary cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            <Pencil color="#1C85A4" />
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Email</p>
          <p className="font-medium text-secondary">davidroy123@gmail.com</p>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Phone No</p>
          <p className="opacity-70 font-medium">000-000-0000</p>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Date of Birth</p>
          <p className="opacity-70 font-medium">03 Feb, 1998</p>
        </div>
        <div className="mt-5 flex gap-5">
          <p className="font-semibold w-36">Address</p>
          <p className="opacity-70 font-medium">
            123 House number, state, city, country
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
