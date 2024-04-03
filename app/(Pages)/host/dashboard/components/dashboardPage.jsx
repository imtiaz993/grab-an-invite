"use client"; // temporary resolve customButton issue without use client
import React from "react";
import CustomButton from "@/components/common/customButton";
import { Chart, Graph } from "@/icons/index";
import RecentEvents from "./recentEvents";

const DashboardPage = () => {
  const years = Array.from(
    { length: new Date().getFullYear() - 2015 },
    (_, index) => 2016 + index
  );

  return (
    <div className="my-20 px-8 w-full text-dark">
      <div className="p-12 rounded-[20px] shadow-blog-card m-auto w-full flex flex-col items-center">
        <img src="/images/dashboardImages/heartBreak.png" alt="" className="" />
        <p className="w-3/5 text-center mt-2 text-2xl font-bold">
          You have only 3 request left, If you want more request
          <span className="text-secondary"> upgrade your plan</span>
        </p>

        <CustomButton
          width="w-36"
          text="Find Events"
          onClick={() => {}}
          style="mt-6"
        />
      </div>
      <div className="mt-10 flex gap-7">
        <div>
          <div className="p-6 rounded-[20px] shadow-blog-card">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-lg">Ticket Sold Today</p>
                <p className="mt-3 font-bold text-4xl">10,252</p>
              </div>
              <div>
                <Chart />
                <p className="ml-4 font-medium text-lg">+4</p>
                <p className="ml-4 text-xs">Then last day</p>
              </div>
            </div>
            <div className="mt-5 w-full h-7 bg-secondary rounded-full"></div>
            <p className="mt-9 opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
          <div className="mt-10 p-7 shadow-blog-card rounded-[20px]">
            <div className="flex">
              <h1 className="font-bold text-2xl pr-5 border-r border-opacity-30 border-dark">
                Sales Revenue
              </h1>
              <select
                name="year"
                className="ml-4 w-20 outline-none font-medium text-lg"
              >
                {years && years.map((year) => <option>{year}</option>)}
              </select>
            </div>
            <div className="w-full h-52">
              <p className="text-center pt-20 font-bold text-3xl">Chart Here</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 shadow-blog-card rounded-[20px] p-6 pb-10 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl">Best Selling</h1>
            <p className="mt-4 text-secondary font-medium text-lg">This week</p>
            <p className="mt-5 opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="w-full h-80 bg-review">
            <p className="text-center pt-36 font-bold text-3xl">Graph Here</p>
          </div>
          <div className="p-4 rounded-lg shadow-blog-card flex justify-between">
            <p className="font-medium">Tickets Sales ( 72 )</p>
            <p className="font-bold">$1,254</p>
          </div>
        </div>
      </div>
      <RecentEvents/>
    </div>
  );
};

export default DashboardPage;
