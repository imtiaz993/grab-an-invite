import React from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";

const GuestInfoPopup = ({ setShowPopup }) => {
  useLockBodyScroll();

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute text-dark bg-white max-w-2xl w-full max-h-screen md:max-h-[90vh] overflow-auto z-10 rounded-[20px] flex flex-col justify-between">
        <div className="relative">
          <div
            className="absolute top-6 left-[91%] pb-1 cursor-pointer"
            onClick={closePopup}
          >
            <Close />
          </div>
        </div>
        <div className="mx-9 mt-7 mb-6">
          <h3 className="text-2xl font-bold">Guests Info...</h3>
          <div className="mt-5 font-medium text-lg">
            <div>
              <span className="inline-block w-28 text-left">Name:</span>
              <span className="opacity-60">David Roy</span>
            </div>
            <div className="mt-3">
              <span className="inline-block w-28 text-left">Email:</span>
              <span className="opacity-60">davidroy123@gmail.com</span>
            </div>
            <div className="mt-3">
              <span className="inline-block w-28 text-left">Phone No:</span>
              <span className="opacity-60">123-456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestInfoPopup;
