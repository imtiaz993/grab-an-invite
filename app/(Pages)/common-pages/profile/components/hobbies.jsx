"use client";
import React, { useState } from "react";
import { Pencil } from "@/icons";
import HobbiesPopup from "./popups/hobbiesPopup";

const Hobbies = () => {
  const [showPopup, setShowPopup] = useState(false);
  const hobbies = [
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
  ];
  return (
    <>
      {showPopup && <HobbiesPopup setShowPopup={setShowPopup} />}

      <div className="py-16 border-b-2 border-dashed">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">Hobbies or Favourites </p>
          <div
            className="rounded-full p-3 border border-secondary cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            <Pencil color="#1C85A4" />
          </div>
        </div>
        {hobbies.length === 0 ? (
          <p className="mt-6 font-semibold underline text-secondary cursor-pointer">
            Add Hobbies
          </p>
        ) : (
          <div className="mt-5 flex flex-wrap gap-5">
            {hobbies.map((item, index) => (
              <p
                key={index}
                className="px-3 py-1 border border-[#1D1D1D33] text-dark text-opacity-60 rounded-md w-fit"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Hobbies;
