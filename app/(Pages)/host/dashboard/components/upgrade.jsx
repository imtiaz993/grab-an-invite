"use client";
import React from "react";
import Link from "next/link";
import CustomButton from "@/components/common/customButton";

const Upgrade = () => {
  return (
    <div className="p-12 rounded-[20px] shadow-blog-card m-auto w-full flex flex-col items-center">
      <img src="/images/dashboardImages/heartBreak.png" alt="" className="" />
      <p className="w-3/5 text-center mt-2 text-2xl font-bold">
        You have only 3 request left, If you want more request
        <Link href={"/host/plans"} className="text-secondary">
          {" "}
          upgrade your plan
        </Link>
      </p>

      <CustomButton
        width="w-36"
        text="Find Events"
        onClick={() => {}}
        style="mt-6"
      />
    </div>
  );
};

export default Upgrade;
