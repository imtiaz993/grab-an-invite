'use client' // temporary resolve customButton issue without use client
import React from "react";
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
    </div>
  );
};

export default DashboardPage;
