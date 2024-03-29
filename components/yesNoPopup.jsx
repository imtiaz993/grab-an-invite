import React from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "./common/customButton";

const YesNoPopup = ({
  setShowPopup,
  title,
  message,
  onYes = () => {},
  onNo = () => {},
}) => {
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
        <div className="mx-[13%]">
          <h3 className="mt-12 text-2xl font-bold text-center">{title}</h3>
          {message && (
            <p className="mt-4 text-lg font-medium text-center opacity-70">
              {message}
            </p>
          )}
          <div className="mt-11 mb-7 flex gap-6 justify-center">
            <CustomButton
              width="w-28"
              text="Yes"
              onClick={() => {
                onYes();
                closePopup();
              }}
            />
            <CustomButton
              width="w-28"
              outlined
              text="No"
              onClick={() => {
                onNo();
                closePopup();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YesNoPopup;
