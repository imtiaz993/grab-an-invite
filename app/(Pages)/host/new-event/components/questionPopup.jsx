import React from "react";
import { Field } from "formik";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "@/components/common/customButton";

const QuestionPopup = ({ setShowPopup }) => {
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
        <div className="mx-6 mt-16">
          <p className="mt-4 text-lg font-medium">Add Question</p>
          <Field
            type="text"
            name="question"
            placeholder="Please type question"
            className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
          />
          <div className="mt-11 mb-7 flex gap-6 justify-center">
            <CustomButton
              width="w-28"
              text="Save"
              onClick={() => {
                closePopup();
              }}
            />
            <CustomButton
              width="w-28"
              outlined
              text="Cancel"
              onClick={() => {
                closePopup();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPopup;
