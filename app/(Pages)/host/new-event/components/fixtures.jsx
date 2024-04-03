import { Field } from "formik";
import React from "react";

const Fixtures = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Add Fixtures</h1>
        <button className="text-secondary text-lg font-medium">
          Add New Fixtures
        </button>
      </div>
      <div className="mt-6 flex gap-11">
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Team 1
          </label>
          <Field
            type="text"
            name="team1"
            placeholder="Team 1 "
            className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Team 2
          </label>
          <Field
            type="text  "
            name="team2"
            placeholder="Team 2"
            className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Date
          </label>
          <Field
            type="date"
            name="team2"
            placeholder="Date"
            className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
          />
        </div>
      </div>
      <div className="my-10 rounded-[8px] border border-dark20 overflow-hidden">
        <table className="w-full text-left">
          <thead className=" ">
            <tr className="h-14 border-b border-[#1D1D1D33] font-bold text-secondary">
              <th className="pl-7">Team 1</th>
              <th>Team 2 </th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-20  cursor-pointer border-b border-[#1D1D1D33]">
              {false ? (
                <>
                  <td className="pl-7"></td>
                  <td></td>
                  <td></td>
                </>
              ) : (
                <td colSpan={3} className="text-center">
                  No fixtures{" "}
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fixtures;
