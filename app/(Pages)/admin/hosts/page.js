import React from "react";
import HostsContainer from "./components/hostsContainer";

const History = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold mb-6">Guests List </h1>
      <HostsContainer />
    </div>
  );
};

export default History;
