import React from "react";
import RequestsContainer from "./components/requestsContainer";

const Requests = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold mb-6">Events Request</h1>
      <RequestsContainer />
    </div>
  );
};

export default Requests;
