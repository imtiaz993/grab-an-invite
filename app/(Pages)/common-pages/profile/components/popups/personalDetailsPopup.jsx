"use client";
import React from "react";
import { Field, Form, Formik } from "formik";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import Dropdown from "@/components/common/dropdown";
import CustomButton from "@/components/common/customButton";

const PersonalDetailsPopup = ({ setShowPopup }) => {
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
        <div className="mt-20 mb-9 overflow-auto">
          <div className="mx-6">
            <h3 className="text-2xl font-bold">Personal Details</h3>
            <Formik>
              <Form>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Sex
                  </label>
                  <Dropdown
                    type="text"
                    name="sex"
                    options={[
                      "select",
                      ...["Male", "Female", "Prefer not to say"],
                    ]}
                    box
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Marital Status
                  </label>
                  <Dropdown
                    type="text"
                    name="maritalStatus"
                    options={[
                      "select",
                      ...[
                        "Single",
                        "Married",
                        "Co-habiting",
                        "Divorced / Separated",
                        "Widowed",
                        "Prefer not to say",
                      ],
                    ]}
                    box
                  />
                </div>
                {
                  <div>
                    <div className="mt-10">
                      <label htmlFor="" className="font-medium text-lg">
                        No of Children
                      </label>
                      <Field
                        type="text"
                        name="numChildren"
                        className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                      />
                    </div>
                    <div className="mt-10 flex gap-10 w-full">
                      <div className="w-full">
                        <label htmlFor="" className="font-medium text-lg">
                          Child 1
                        </label>
                        <Dropdown
                          type="text"
                          name="child"
                          options={[
                            "select",
                            ...["Male", "Female", "Prefer not to say"],
                          ]}
                          box
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="" className="font-medium text-lg">
                          Date of Birth
                        </label>
                        <Field
                          type="date"
                          name="salaryRange"
                          className="mt-3 text-base focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                        />
                      </div>
                    </div>
                  </div>
                }

                <div className="text-center">
                  <CustomButton
                    width="w-40"
                    text="Save"
                    onClick={() => {}}
                    style="mt-16 mb-1"
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsPopup;
