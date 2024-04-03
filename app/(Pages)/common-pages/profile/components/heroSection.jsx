"use client";
import React, { useState } from "react";
import { Pencil } from "@/icons";
import InfoPopup from "./popups/infoPopup";

const HeroSection = () => {
  const [infoPopup, setInfoPopup] = useState(false);

  return (
    <>
      {infoPopup && <InfoPopup setInfoPopup={setInfoPopup} />}
      <div className="pb-16 border-b-2 border-dashed">
        <div className="relative">
          <div className="bg-[#D9D9D9] rounded-[20px] w-full h-72"></div>
          <div className="absolute top-5 right-5 rounded-full p-3 bg-[#FFFFFF40]">
            <Pencil />
          </div>
          <div className="w-52 h-52 rounded-full border-[5px] border-white bg-[#D9D9D9] absolute -bottom-[102px] left-10 overflow-hidden">
            <img
              src="/images/dashboardImages/profile.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="font-bold text-2xl ml-10 pt-32">David Roy</p>
            <p className="text-opacity-70 ml-10 mt-2 font-medium w-4/5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mt-5 flex h-fit gap-20 items-center">
            <div className="flex">
              <p className="font-bold text-opacity-85 mr-6">
                Location Tracking
              </p>
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                className="accent-secondary w-5 h-5 bg-secondary cursor-pointer"
              />
            </div>
            <div className="inline-flex items-center">
              <img src="/images/dashboardImages/premiumCrown.png" alt="" />
              <p className="text-[#FFAD09] font-bold ml-3">Premium</p>
            </div>
            <div
              className="rounded-full p-3 border border-secondary w-fit cursor-pointer"
              onClick={() => setInfoPopup(true)}
            >
              <Pencil color="#1C85A4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
