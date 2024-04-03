import React from "react";
import RecentEvents from "./components/recentEvents";
import Upgrade from "./components/upgrade";
import Tickets from "./components/tickets";
import Revenue from "./components/revenue";
import BestSelling from "./components/bestSelling";

const Dashboard = () => {
  return (
    <div className="my-20 px-8 w-full text-dark">
      <Upgrade />
      <div className="mt-10 flex gap-7">
        <div>
          <Tickets />
          <Revenue />
        </div>
        <BestSelling />
      </div>
      <RecentEvents />
    </div>
  );
};

export default Dashboard;
