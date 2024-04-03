import React from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "@/components/common/customButton";

const QrPopup = ({ setShowPopup }) => {
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
        <div className="mx-[12%]">
          <h3 className="mt-20 text-2xl font-bold text-center">
            Here a QR code generated according to your event details
          </h3>
          <img src="/images/dashboardImages/qr.png" alt="" className="mt-5 mx-auto h-36 w-36" />
          <div className="mt-11 mb-7 flex gap-6 justify-center">
            <CustomButton
              width="w-28"
              text="Print it"
              onClick={() => {
                closePopup();
              }}
            />
            <CustomButton
              width="w-44"
              outlined
              text="Download in PDF"
              onClick={() => {
                closePopup();
              }}
            />
            <button className="underline text-secondary font-bold">
            Ping Local
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrPopup;
