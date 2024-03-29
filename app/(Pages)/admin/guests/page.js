import React from "react";
import GuestsContainer from "./components/guestsContainer";

const History = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold mb-6">Guests List </h1>
      <GuestsContainer />
    </div>
  );
};

export default History;
