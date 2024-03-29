import React, { useState } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import { changeRating } from "@/utils/rating";

const ReviewPopup = ({ setShowPopup }) => {
  useLockBodyScroll();

  const [ratings, setRating] = useState({
    communications: 0,
    Participations: 0,
    communication: 0,
    Participation: 0,
  });

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute text-dark bg-white max-w-2xl w-full max-h-screen md:max-h-[90vh] overflow-auto z-10 rounded-[20px] flex flex-col justify-between">
        <div className="relative">
          <div
            className="absolute top-6 left-[91%] pb-1 cursor-pointer"
            onClick={closePopup}
          >
            <Close />
          </div>
        </div>
        <div className="mx-6 mt-20 mb-16">
          <h3 className="mb-1 text-2xl font-bold text-center">
            Review to “David Roy”
          </h3>
          {Object.keys(ratings).map((ratingName, index) => (
            <div
              key={index}
              className="mx-auto mt-5 flex justify-between w-3/5"
            >
              <p className="font-medium capitalize">{ratingName}</p>
              <div className="flex items-center gap-2">
                {changeRating(ratings[ratingName], (i) => {
                  setRating((prev) => ({
                    ...prev,
                    [ratingName]: i + 1,
                  }));
                })}
              </div>
            </div>
          ))}
          <p className="mt-11 font-medium text-lg">Comment</p>
          <textarea
            name="comment"
            id=""
            rows="5"
            placeholder="Typing"
            className="mt-3 border border-dark20 w-full rounded-lg outline-none px-6 py-3 resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ReviewPopup;
