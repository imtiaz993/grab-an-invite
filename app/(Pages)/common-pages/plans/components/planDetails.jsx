"use client";
import React, { useState } from "react";
import YesNoPopup from "@/components/YesNoPopup";
import CustomButton from "@/components/common/customButton";

const PlanDetails = () => {
  const features = [
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [isUpgrade, setIsUpgrade] = useState(true);

  return (
    <>
      {showPopup && (
        <YesNoPopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          title={`Do you want to ${
            isUpgrade ? "upgrade" : "downgrade"
          } your plan?`}
          onYes={() => {
            isUpgrade ? console.log("Upgraded") : console.log("Downgrade");
          }}
          onNo={() => {
            console.log("Cancelled");
          }}
        />
      )}
      <div>
        <h1 className="text-4xl font-bold text-center text-dark">
          Update Your Plan
        </h1>
        <p
          className="underline text-secondary text-xs text-end cursor-pointer"
          onClick={() => setIsUpgrade((prev) => !prev)}
        >
          Want to {isUpgrade ? "Downgrade" : "Upgrade"}?
        </p>
        <h3 className="mt-4 text-lg font-semibold text-center">
          Current Plan: Free
        </h3>
        <h6 className="mt-8 font-medium text-center opacity-60">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </h6>
        <div className="mt-14 flex gap-[5%]">
          <p className="w-full text-center">
            <span className="text-secondary font-bold text-6xl">$215 </span>
            <span className="text-2xl font-medium opacity-60">/ Monthly</span>
          </p>
          <div className="w-full">
            {features &&
              features.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <span className="rounded-full min-h-5 min-w-5 bg-secondary mr-2"></span>
                  <span className="opacity-70 font-medium">{item}</span>
                </div>
              ))}
          </div>
        </div>
        <CustomButton
          text={isUpgrade ? "Upgrade Plan" : "Downgrade Plan"}
          onClick={() => {setShowPopup(true)}}
          style='mt-10 w-full'
        />
      </div>
    </>
  );
};

export default PlanDetails;
