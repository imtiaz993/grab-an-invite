import React from "react";
import { renderRating } from "@/utils/rating";

const Reviews = () => {
  return (
    <div>
      <div className="py-10 border-b-2 border-dashed">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">Reviews</p>
        </div>
        <div className="mt-8 flex gap-4">
          <img
            src="/images/dashboardImages/profile.png"
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <div>
            <p className="font-semibold">David Roy</p>
            <div className="flex mt-2 items-center">
              {renderRating(4)}
              <p className="text-[#FA4C20] font-medium h-7 ml-2">4.1</p>
              <p className="pl-4 ml-4 border-l border-[#1D1D1D33] text-[#1D1D1D99]">
                2 month ago
              </p>
            </div>
            <p className="mt-5 font-medium opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 border-b-2 border-dashed">
        <div className="flex gap-4">
          <img
            src="/images/dashboardImages/profile.png"
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <div>
            <p className="font-semibold">David Roy</p>
            <div className="flex mt-2 items-center">
              {renderRating(5)}
              <p className="text-[#FA4C20] font-medium h-7 ml-2">5</p>
              <p className="pl-4 ml-4 border-l border-[#1D1D1D33] text-[#1D1D1D99]">
                2 month ago
              </p>
            </div>
            <p className="mt-5 font-medium opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
