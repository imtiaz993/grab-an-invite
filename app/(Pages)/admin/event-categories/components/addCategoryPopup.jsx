"use client";
import React from "react";
import { Field, Form, Formik } from "formik";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "@/components/common/customButton";

const AddCategoryPopup = ({setShowPopup}) => {
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
        <div className="mt-7 mb-6">
          <h3 className="text-2xl font-bold text-center">Add New Category</h3>
          <Formik>
            <Form>
              <div className="ml-28 mr-20 mt-10">
                <label htmlFor="" className="font-medium text-lg">
                  Category Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                  placeholder="Enter category"
                />
              </div>
              <div className="text-center">
                <CustomButton
                  width="w-40"
                  text="Save"
                  onClick={() => {}}
                  style="mt-10"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryPopup;
