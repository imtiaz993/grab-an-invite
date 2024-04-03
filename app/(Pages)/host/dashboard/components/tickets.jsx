import React from "react";
import { Chart } from "@/icons/index";

const Tickets = () => {
  return (
    <div className="p-6 rounded-[20px] shadow-blog-card">
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-lg">Ticket Sold Today</p>
          <p className="mt-3 font-bold text-4xl">10,252</p>
        </div>
        <div>
          <Chart />
          <p className="ml-4 font-medium text-lg">+4</p>
          <p className="ml-4 text-xs">Then last day</p>
        </div>
      </div>
      <div className="mt-5 w-full h-7 bg-secondary rounded-full"></div>
      <p className="mt-9 opacity-70">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type.
      </p>
    </div>
  );
};

export default Tickets;
