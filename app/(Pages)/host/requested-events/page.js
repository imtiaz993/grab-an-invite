import React from "react";
import RequestsContainer from "./components/requestsContainer";

const RequestedEvents = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold">Requested Events</h1>
      <RequestsContainer />
    </div>
  );
};

export default RequestedEvents;
