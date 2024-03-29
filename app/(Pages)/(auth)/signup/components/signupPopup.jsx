import { useState } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "@/components/common/customButton";
import PopupContent from "./popupContent";
import popupImg from "@/public/images/signupPopup.png";

const SignupPopup = ({ setOpen }) => {
  useLockBodyScroll();

  const [popupStep, setPopupStep] = useState(1);

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute bg-white max-w-2xl w-full max-h-screen md:max-h-[90vh] overflow-auto z-10 rounded-[40px] flex flex-col justify-between h-[605px]">
        <div className="relative">
          <div
            className="absolute top-6 left-[91%] pb-1 cursor-pointer"
            onClick={closePopup}
          >
            <Close />
          </div>
          <div className="flex justify-center pt-5 bg-[#F0F0F0]">
            <img src={popupImg.src} alt="Ticket in hands" className="" />
          </div>
          <div className=" ml-9">
            <PopupContent popupStep={popupStep} />
          </div>
        </div>
        <div className="flex justify-between items-center ml-9 mb-10 mr-8">
          <div className="w-28 h-[5px] flex gap-2">
            <div
              className={`w-full h-full bg-secondary ${
                popupStep !== 1 ? "opacity-40" : ""
              }`}
            ></div>
            <div
              className={`w-full h-full bg-secondary ${
                popupStep !== 2 ? "opacity-40" : ""
              }`}
            ></div>
            <div
              className={`w-full h-full bg-secondary ${
                popupStep !== 3 ? "opacity-40" : ""
              }`}
            ></div>
          </div>
          <div className="flex justify-end ml-8">
            <button
              type="button"
              className="font-bold  text-secondary mr-5"
              onClick={() =>
                setPopupStep((prev) => (prev !== 3 ? prev + 1 : 1))
              }
            >
              Skip
            </button>
            <CustomButton
              width="w-24"
              text="Next"
              onClick={() => {
                setPopupStep((prev) => (prev !== 3 ? prev + 1 : 1));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPopup;
