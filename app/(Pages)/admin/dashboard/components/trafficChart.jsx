import React from "react";
import { months, years } from "@/constants/monthsAndYears";

const TrafficChart = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = Array.from(
    { length: new Date().getFullYear() - 2015 },
    (_, index) => 2016 + index
  );

  return (
    <div className="mt-10 py-8 px-6 shadow-blog-card rounded-[20px]">
      <h1 className="font-bold text-2xl">Web Traffic</h1>
      <div className="flex justify-between">
        <div>
          <p className="mt-5 font-medium opacity-70">This Month</p>
          <p className="mt-1 font-semibold">21925</p>
        </div>
        <div>
          <select
            name="month"
            className="py-4 px-5 w-28 rounded-full shadow-blog-card outline-none text-[#1D1D1DB2]"
          >
            {months && months.map((month, index) => <option key={index}>{month}</option>)}
          </select>
          <select
            name="year"
            className="ml-4 py-4 px-5 w-28 rounded-full shadow-blog-card outline-none text-[#1D1D1DB2]"
          >
            {years && years.map((year, index) => <option key={index}>{year}</option>)}
          </select>
        </div>
      </div>
      <div className="w-full h-64">
        <p className="text-center pt-20 font-bold text-3xl">Chart Here</p>
      </div>
    </div>
  );
};

export default TrafficChart;
