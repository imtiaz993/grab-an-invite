"use client";
import React, { useState } from "react";
import { Field } from "formik";
import Dropdown from "@/components/common/dropdown";
import { Delete, Pencil } from "@/icons/index";

const EventInfo = ({ recurring, recurringType }) => {
  const [recurringValue, setRecurringValue] = useState();

  const recurringTypes = [
    "Everyday",
    "Week Day",
    "Every Single Date Of Month",
    "Multiple Date Of Month",
  ];

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <h1 className="font-bold text-2xl">Event Info...</h1>
      <div className="mt-6">
        <label htmlFor="" className="text-lg font-medium">
          Title
        </label>
        <Field
          type="text"
          name="title"
          placeholder="Please enter your event title"
          className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
        />
      </div>
      <div className="mt-10">
        <label htmlFor="" className="text-lg font-medium">
          Add short detail about event{" "}
        </label>
        <Field
          type="text"
          name="details"
          placeholder="Please enter your event detail"
          className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
        />
      </div>
      <div className="mt-14 flex gap-2 items-center">
        <Field
          type="checkbox"
          name="recurring"
          className="accent-secondary w-5 h-5 bg-secondary cursor-pointer"
        />
        <label htmlFor="recurring" className="font-semibold cursor-pointer">
          Recurring Event
        </label>
      </div>
      {recurring && (
        <>
          <div className={`flex`}>
            <div className={`mr-11 w-full`}>
              <div
                className={`mt-6 ${recurringType === "" ? "w-1/2" : "w-full"}`}
              >
                <label htmlFor="" className="text-lg font-medium">
                  Recurring Type
                </label>
                <Dropdown
                  box
                  placeholder="select"
                  options={recurringTypes}
                  name="recurringType"
                />
              </div>
            </div>

            {recurringTypes &&
              recurringTypes.map(
                (type, index) =>
                  type === recurringType && (
                    <div className="mt-6 w-full" key={index}>
                      <label htmlFor="" className="text-lg font-medium">
                        {type}
                      </label>
                      <Dropdown
                        box
                        placeholder="select"
                        options={weekdays}
                        name={type}
                      />
                    </div>
                  )
              )}
          </div>
          {recurringType === "Multiple Date Of Month" && (
            <div>
              <div className="mt-14 rounded-lg border border-[#1D1D1D33] overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-[#F5F5F5] text-secondary font-semibold">
                    <tr className="h-14">
                      <th className="pl-7"></th>
                      <th> Type </th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-20 border-t border-[#1D1D1D33]">
                      <td className="pl-7">01</td>
                      <td>Multiple date of month</td>
                      <td>03 Feb, 2024</td>
                      <td>
                        <div className="flex gap-3">
                          <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                            <Pencil color="#1C85A4" />
                          </div>
                          <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                            <Delete color="#FA4C20" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-20 border-t border-[#1D1D1D33]">
                      <td className="pl-7">01</td>
                      <td>Multiple date of month</td>
                      <td>03 Feb, 2024</td>
                      <td>
                        <div className="flex gap-3">
                          <div className="h-9 w-9 flex items-center justify-center border border-[#1C85A4] rounded-full">
                            <Pencil color="#1C85A4" />
                          </div>
                          <div className="h-9 w-9 flex items-center justify-center border border-[#FA4C20] rounded-full">
                            <Delete color="#FA4C20" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EventInfo;
