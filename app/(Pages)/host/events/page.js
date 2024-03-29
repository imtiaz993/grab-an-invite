import React from "react";
import EventsContainer from "./components/eventsContainer";

const Events = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold mb-6">Manage Event</h1>
      <EventsContainer />
    </div>
  );
};

export default Events;
