"use client";
import React from "react";
import { Field, Form, Formik } from "formik";
import { CloseSimple } from "@/icons";
import CustomButton from "@/components/common/customButton";

const Apply = () => {
  const items = [
    "cricket",
    "cricket",
    "cricket",
    "cricket",
    "cricket",
    "cricket",
    "cricket",
    "cricket",
    "cricket",
    "cricket",
  ];

  return (
    <div className="mt-24 mb-10 mx-8 text-dark">
      <div>
        <h1 className="font-bold text-4xl">Auto-Apply</h1>
      </div>
      <div className="mt-10 p-10 shadow-blog-card rounded-lg">
        <h3 className="font-bold text-2xl">Auto-Apply</h3>
        <h6 className="mt-5 font-medium text-opacity-70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </h6>
        <div className="mt-10 pb-10 border-b-2 border-dashed">
          <Formik>
            <Form className="flex gap-6 w-3/5 items-center">
              <Field
                type="text"
                name="add"
                placeholder="Typing"
                className={`focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-[calc(100%-184px)]`}
              />
              <CustomButton
              width="w-40"
              text="Add"
              onClick={() => {
              }}
            />
            </Form>
          </Formik>
        </div>
        <div className="mt-10 flex flex-wrap gap-5">
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="gap-6 flex items-center p-2 border border-[#1D1D1D33] text-dark rounded-md w-fit"
              >
                <p className="">{item} </p>
                <CloseSimple color="#1D1D1D" height="10" width="10" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Apply;
