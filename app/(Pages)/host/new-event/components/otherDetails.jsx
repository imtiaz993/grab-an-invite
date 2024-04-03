import React from "react";
import { Field } from "formik";
import { Gallery } from "@/icons";

const OtherDetails = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Other Details</h1>
      <div className="mt-6 flex gap-11">
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Detail Description
          </label>
          <Field
            as="textarea"
            type="text"
            name="description"
            placeholder="select"
            className="mt-3 h-80 resize-none focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Add Image
          </label>
          <div className="mt-3 h-80 flex flex-col items-center justify-center focus:outline-none border border-dark border-opacity-20 overflow-hidden rounded-lg w-full placeholder:text-dark">
            <Gallery />
            <button className="mt-2 font-medium text-sm underline text-secondary border border-secondary rounded-lg px-4 py-[10px]">
              Browse Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
