'use client' // temporary resolve customButton issue without use client

import React from "react";
import { Tick } from "@/icons";
import CustomButton from "@/components/common/customButton";

const Subscriptions = () => {
  const features = [
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
  ];

  return (
    <div>
      <div className="absolute top-10 right-4">
        <img src="/images/stamp-logo.png" alt="" />
      </div>
      <div className="mt-28 pb-10 mx-[22%]">
        <h1 className="text-3xl font-bold text-center">
          Pay Only For What You Use
        </h1>
        <h1 className="mt-4 font-medium opacity-70 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </h1>
        <div className="mt-16 flex">
          <div className="mx-9 w-full">
            <img
              src="/images/envelope.png"
              alt=""
              className="px-[25%] h-52 object-contain"
            />
            {features &&
              features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mb-4"
                >
                  <Tick width="12" height="9" />
                  <p className="font-medium opacity-70 ml-2">{item}</p>
                </div>
              ))}
            <CustomButton
              width="w-full"
              text="Sign Up Free"
              outlined
              onClick={() => {}}
              style="mt-8"
            />
          </div>
          <div className="mx-9 w-full">
            <img
              src="/images/letter-box.png"
              alt=""
              className="px-[25%]  h-52 object-contain"
            />
            {features &&
              features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mb-4"
                >
                  <Tick width="12" height="9" />
                  <p className="font-medium opacity-70 ml-2">{item}</p>
                </div>
              ))}

            <CustomButton
              width="w-full"
              text="Sign Up in $215 / Monthly"
              onClick={() => {}}
              style="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
