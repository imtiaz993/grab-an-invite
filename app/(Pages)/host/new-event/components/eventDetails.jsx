import React from "react";
import { Field } from "formik";
import Dropdown from '@/components/common/dropdown'

const EventDetails = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Event Details</h1>
      <div className="mt-6 flex gap-11">
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Start date
          </label>
          <Field
            type="date"
            name="startDate"
            placeholder="select"
            className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            End date
          </label>
          <Field
            type="date"
            name="endDate"
            placeholder="select"
            className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
          />
        </div>
      </div>
      <div className="mt-6 flex gap-11">
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Address Or Location
          </label>
          <Field
            type="text"
            name="address"
            placeholder="Enter location"
            className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            State
          </label>
          <Dropdown box placeholder="select" />
        </div>
      </div>
      <div className="mt-6 flex gap-11">
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            City
          </label>
          <Dropdown box placeholder="select" />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Country
          </label>
          <Dropdown box placeholder="select" />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
