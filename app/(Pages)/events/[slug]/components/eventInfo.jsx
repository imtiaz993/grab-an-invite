"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Share } from "@/icons";
import { renderRating } from "@/utils/rating";
import CustomButton from "@/components/common/customButton";
import SharePopup from "./sharePopup";

const EventInfo = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <SharePopup setShowPopup={setShowPopup} />}
      <div className=" flex text-dark gap-32">
        <div className="w-full">
          <div className="font-semibold">
            <span className="opacity-40 text-lg">
              Home <span className="mx-3">{">"}</span> Music
              <span className="mx-3">{">"}</span>
            </span>
            <span> Citywide music event</span>
          </div>
          <h1 className="text-4xl font-bold mt-6">The citywide music event</h1>
          <div className="flex mt-6 items-center">
            {renderRating(4)}
            <p className="text-[#FA4C20] font-medium h-7 ml-2">4.1</p>
          </div>
          <p className="mt-6 font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div className="flex gap-5 mt-7">
            <CustomButton
              width="w-32"
              text="Share"
              Icon={Share}
              onClick={() => setShowPopup(true)}
            />
            <CustomButton
              width="w-52"
              outlined
              text=" Request to Join Event"
              onClick={() => router.push("/")}
            />
          
          </div>
        </div>
        <div className="w-full">
          <img
            src="/images/guitarBoy.png"
            alt=""
            className="object-cover w-[570px]"
          />
        </div>
      </div>
    </>
  );
};

export default EventInfo;
