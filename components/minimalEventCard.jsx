import React from "react";

const MinimalEventCard = ({ imageSrc, title, description }) => {
  return (
    <div className="px-4 flex items-center h-full">
      <img src={imageSrc} alt="" className="w-1/5 h-20 object-cover rounded-lg mr-5" />
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="opacity-60 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default MinimalEventCard;
