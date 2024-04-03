"use client";
import React from "react";
import { Field, Form, Formik } from "formik";
import { Close } from "@/icons";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import Dropdown from "@/components/common/dropdown";
import {
  functions,
  seniorityList,
  employmentTypes,
  salaryRangeList,
  numEmployeeList,
  businessTurnoverList,
} from "@/constants/industryLists";
import CustomButton from "@/components/common/customButton";

const IndustryPopup = ({ setShowPopup }) => {
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
            <h3 className="text-2xl font-bold">Industry Name</h3>
            <Formik>
              <Form>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Industry Name
                  </label>
                  <Field
                    type="text"
                    name="industrName"
                    className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Function
                  </label>
                  <Dropdown
                    type="text"
                    name="function"
                    options={["select", ...functions]}
                    box
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Seniority
                  </label>
                  <Dropdown
                    type="text"
                    name="seniority"
                    options={["select", ...seniorityList]}
                    box
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Employment Type
                  </label>
                  <Dropdown
                    type="text"
                    name="employmentType"
                    options={["select", ...employmentTypes]}
                    box
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Salary Range
                  </label>
                  <Dropdown
                    type="text"
                    name="salaryRange"
                    options={["select", ...salaryRangeList]}
                    box
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    No of Employee
                  </label>
                  <Dropdown
                    type="text"
                    name="numEmployee"
                    options={["select", ...numEmployeeList]}
                    box
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="" className="font-medium text-lg">
                    Business Turnover
                  </label>
                  <Dropdown
                    type="text"
                    name="businessTurnover"
                    options={["select", ...businessTurnoverList]}
                    box
                  />
                </div>

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

export default IndustryPopup;
