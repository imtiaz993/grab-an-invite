"use client";
import React from "react";
import { Field, Form, Formik } from "formik";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "@/components/common/customButton";

const InfoPopup = ({ setInfoPopup }) => {
  useLockBodyScroll();

  const closePopup = () => {
    setInfoPopup(false);
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
        <div className="mx-6 mt-12 mb-10">
          <h3 className="text-2xl font-bold">Info...</h3>
          <Formik>
            <Form>
              <div className="mt-10">
                <label htmlFor="" className="font-medium text-lg">
                  Your Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                />
              </div>
              <div className="mt-10">
                <label htmlFor="" className="font-medium text-lg">
                  Bio / About
                </label>
                <Field
                  type="text"
                  name="bio"
                  className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                />
              </div>
              <div className="text-center">
                <CustomButton
                  width="w-40"
                  text="Save"
                  onClick={() => {}}
                  style="mt-16"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
