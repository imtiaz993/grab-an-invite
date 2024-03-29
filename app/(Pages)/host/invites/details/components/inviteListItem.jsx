import React from "react";

const InviteListItem = ({ type }) => {
  return (
    <div
      className={`p-3 border rounded-md flex gap-1 items-center ${
        type === "accepted"
          ? "border-secondary text-secondary"
          : type === "rejected"
          ? "border-[#C53A23] text-[#C53A23]"
          : "border-[#1D1D1D66] text-[#1D1D1D66]"
      }`}
    >
      <img
        src="/images/dashboardImages/profile.png"
        alt=""
        className="h-8 w-8 object-cover rounded-full"
      />
      <p className="">Alexander James</p>
      {type === "pending" && (
        <p className="text-[#C53A23]"> (expires in 2 hr 23 min)</p>
      )}
    </div>
  );
};

export default InviteListItem;
