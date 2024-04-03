import React from "react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="rounded-[20px] shadow-blog-card px-6 pt-9 pb-5">
        <div className="flex items-center justify-between ">
          <p className="font-bold text-2xl">10,252 </p>
          <div className="flex items-center">
            <div className="border-[6px] border-secondary border-opacity-35 rounded-full">
              <div className="p-1 rounded-full bg-secondary"></div>
            </div>

            <div className="ml-2 text-base font-medium text-secondary">
              In Feb
            </div>
          </div>
        </div>
        <p className="font-medium opacity-70">New Events</p>
      </div>
      <div className="rounded-[20px] shadow-blog-card px-6 pt-9 pb-5">
        <div className="flex items-center justify-between ">
          <p className="font-bold text-2xl">10,252 </p>
          <div className="flex items-center">
            <div className="border-[6px] border-[#FFAC30] border-opacity-35 rounded-full">
              <div className="p-1 rounded-full bg-[#FFAC30]"></div>
            </div>

            <div className="ml-2 text-base font-medium text-secondary">
              In Feb
            </div>
          </div>
        </div>
        <p className="font-medium opacity-70">New Events</p>
      </div>
      <div className="rounded-[20px] shadow-blog-card px-6 pt-9 pb-5">
        <div className="flex items-center justify-between ">
          <p className="font-bold text-2xl">10,252 </p>
          <div className="flex items-center">
            <div className="border-[6px] border-[#EF0909] border-opacity-35 rounded-full">
              <div className="p-1 rounded-full bg-[#EF0909]"></div>
            </div>

            <div className="ml-2 text-base font-medium text-secondary">
              In Feb
            </div>
          </div>
        </div>
        <p className="font-medium opacity-70">New Events</p>
      </div>
    </div>
  );
};

export default StatsCards;
