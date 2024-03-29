import React from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import {
  FacbookSimple,
  InstagramSimple,
  LinkedinSimple,
  TwitterSimple,
  Close,
} from "@/icons";

const SharePopup = ({ setShowPopup }) => {
  useLockBodyScroll();

  const socialIcons = [
    <InstagramSimple key="instagram" color={"#1D1D1D"} />,
    <FacbookSimple key="facebook" color={"#1D1D1D"} />,
    <TwitterSimple key="twitter" color={"#1D1D1D"} />,
    <LinkedinSimple key="linkedin" color={"#1D1D1D"} />,
  ];

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
        <div className="my-12">
          <h3 className="font-medium text-lg text-center">
            Share this event with your friends and relatives:
          </h3>
          <div className="mt-6 flex justify-center gap-11">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-social cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
          <p className="mt-6 opacity-70 text-lg font-medium text-center">
            Or copy and paste this link
          </p>
          <div className="border rounded-[10px] border-[#1D1D1D33] mx-20 mt-4 flex flex-col items-center py-6">
            <p className="text-lg font-medium text-center">
              https://www.grabaninvite/citywide-music-event
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
