import React from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "../../../../../components/common/customButton";

const SuspendPopup = ({ setShowPopup }) => {
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
        <div className="mx-[20%] mt-20 mb-16">
          <h3 className="text-2xl font-bold text-center">
            Suspend “David Roy”
          </h3>
          <div className="mt-11 flex gap-6">
            <CustomButton width="w-28" text="For Day" onClick={() => {}} />
            <CustomButton
              width="w-32"
              outlined
              text="For Week"
              onClick={() => {}}
            />
            <CustomButton
              width="w-32"
              outlined
              text="For Month"
              onClick={() => {}}
            />
          </div>
          <div className="mt-6 gap-6 flex justify-center">
            <CustomButton
              width="w-28"
              outlined
              text="For Year"
              onClick={() => {}}
            />
            <CustomButton
              width="w-28"
              outlined
              text="For Lifetime"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspendPopup;
