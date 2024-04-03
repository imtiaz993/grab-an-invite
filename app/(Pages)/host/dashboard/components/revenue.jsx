import React from "react";

const Revenue = () => {
  const years = Array.from(
    { length: new Date().getFullYear() - 2015 },
    (_, index) => 2016 + index
  );

  return (
    <div className="mt-10 p-7 shadow-blog-card rounded-[20px]">
      <div className="flex">
        <h1 className="font-bold text-2xl pr-5 border-r border-opacity-30 border-dark">
          Sales Revenue
        </h1>
        <select
          name="year"
          className="ml-4 w-20 outline-none font-medium text-lg"
        >
          {years &&
            years.map((year, index) => <option key={index}>{year}</option>)}
        </select>
      </div>
      <div className="w-full h-52">
        <p className="text-center pt-20 font-bold text-3xl">Chart Here</p>
      </div>
    </div>
  );
};

export default Revenue;
