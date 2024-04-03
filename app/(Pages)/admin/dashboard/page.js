import React from "react";
import StatsCards from "./components/statsCards";
import UpcomingEvents from "./components/upcomingEvents";
import TrafficChart from "./components/trafficChart";

const Dashboard = () => {
  return (
    <div className="text-dark my-20 mx-7">
      <StatsCards />
      <TrafficChart />
      <UpcomingEvents />
    </div>
  );
};

export default Dashboard;
