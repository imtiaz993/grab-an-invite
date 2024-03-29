import React from "react";

const EventCard = ({ imageSrc, title, description, date, time }) => {
  return (
    <div>
      <div className="relative rounded-[20px] overflow-hidden w-full h-64">
        <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        {date && time && (
          <div className="absolute top-0 left-0 z-50 flex m-2">
            <div className="bg-button-primary text-white rounded-full text-xs text-center px-4 h-6 flex items-center">
              {date}
            </div>
            <div className="ml-1 shadow-time bg-time text-white rounded-full text-xs text-center px-4 h-6 flex items-center">
              {time}
            </div>
          </div>
        )}
      </div>
      <h1 className="text-[22px] font-bold text-dark mt-6">{title}</h1>
      <h6 className="font-medium text-dark opacity-70 mt-[10px]">
        {description}
      </h6>
    </div>
  );
};

export default EventCard;
