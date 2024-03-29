import React from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "@/components/common/customButton";

const SendRequestPopup = ({ setRequestPopup }) => {
  useLockBodyScroll();

  const closePopup = () => {
    setRequestPopup(false);
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
        <div className="mx-6 mb-6">
          <h3 className="mt-12 text-2xl font-bold text-center">
            Citywide Music Event
          </h3>
          <h6 className="mt-4 text-lg font-medium text-center opacity-70 w-3/4 m-auto">
            Would you like to send request to citywide music event
          </h6>
          <p className="mt-10 text-lg font-medium">It is a sample question</p>
          <textarea
            name="question"
            rows="3"
            className="w-full border border-[#1D1D1D33] rounded-[10px] py-4 px-6 mt-4 outline-none"
          ></textarea>
          <div className="text-center">
            <CustomButton
              width="w-40"
              text="Send Request"
              onClick={() => {}}
              style="mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendRequestPopup;
