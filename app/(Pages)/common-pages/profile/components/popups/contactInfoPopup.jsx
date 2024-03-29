import React from "react";
import { Field, Form, Formik } from "formik";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import CustomButton from "@/components/common/customButton";

const ContactInfoPopup = ({ setShowPopup }) => {
  useLockBodyScroll();

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute text-dark bg-white max-w-[48%] w-full max-h-screen md:max-h-[90vh] z-10 rounded-[20px] flex flex-col justify-between">
        <div className="relative">
          <div
            className="absolute top-6 left-[91%] pb-1 cursor-pointer"
            onClick={closePopup}
          >
            <Close />
          </div>
        </div>
        <div className="mx-6 mt-20 mb-9 overflow-auto">
          <h3 className="text-2xl font-bold">Contact Details</h3>
          <Formik>
            <Form>
              <div className="mt-10">
                <label htmlFor="" className="font-medium text-lg">
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                />
              </div>
              <div className="mt-10">
                <label htmlFor="" className="font-medium text-lg">
                  Phone No.
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                />
              </div>
              <div className="mt-10">
                <label htmlFor="" className="font-medium text-lg">
                  Date of Birth
                </label>
                <Field
                  type="text"
                  name="dob"
                  className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                />
              </div>
              <div className="mt-10">
                <label htmlFor="" className="font-medium text-lg">
                  Address
                </label>
                <Field
                  type="text"
                  name="address"
                  className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                />
              </div>
              <div className="flex gap-5">
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    State
                  </label>
                  <Field
                    type="text"
                    name="state"
                    className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                  />
                </div>

                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    City
                  </label>
                  <Field
                    type="text"
                    name="city"
                    className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                  />
                </div>

                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Country
                  </label>
                  <Field
                    type="text"
                    name="country"
                    className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                  />
                </div>
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

export default ContactInfoPopup;
