'use client' // temporary resolve customButton issue without use client

import React from "react";
import MinimalEventCard from "@/components/minimalEventCard";
import { Graph } from "@/icons";
import CustomButton from "@/components/common/customButton";

const DashboardPage = () => {
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
      <div className="flex gap-6 mt-14">
        <div className="w-full">
          <p className="text-2xl font-bold">Most popular event in your city</p>
          <div className="mt-5 shadow-blog-card rounded-[20px] h-96 flex flex-col">
            <div className="border-b border-[#1D1D1D33] h-full">
              <MinimalEventCard
                imageSrc="/images/guitarBoy.png"
                title="Citywide music event"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>
            <div className="border-b border-[#1D1D1D33] h-full">
              <MinimalEventCard
                imageSrc="/images/guitarBoy.png"
                title="Citywide music event"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>
            <div className="h-full">
              <MinimalEventCard
                imageSrc="/images/guitarBoy.png"
                title="Citywide music event"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-2xl font-bold">Trending events</p>
          <div className="mt-5 shadow-blog-card rounded-[20px] h-96 flex flex-col">
            <div className="h-full px-8 flex justify-between items-center border-b border-[#1D1D1D33]">
              <div className="flex items-center">
                <img
                  src="/images/guitarBoy.png"
                  alt=""
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <p className="text-lg font-semibold ml-3">
                  Citywide music event
                </p>
              </div>
              <div>
                <Graph />
              </div>
            </div>
            <div className="h-full px-8 flex justify-between items-center border-b border-[#1D1D1D33]">
              <div className="flex items-center">
                <img
                  src="/images/guitarBoy.png"
                  alt=""
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <p className="text-lg font-semibold ml-3">
                  Citywide music event
                </p>
              </div>
              <div>
                <Graph />
              </div>
            </div>
            <div className="h-full px-8 flex justify-between items-center border-b border-[#1D1D1D33]">
              <div className="flex items-center">
                <img
                  src="/images/guitarBoy.png"
                  alt=""
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <p className="text-lg font-semibold ml-3">
                  Citywide music event
                </p>
              </div>
              <div>
                <Graph />
              </div>
            </div>
            <div className="h-full px-8 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="/images/guitarBoy.png"
                  alt=""
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <p className="text-lg font-semibold ml-3">
                  Citywide music event
                </p>
              </div>
              <div>
                <Graph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
