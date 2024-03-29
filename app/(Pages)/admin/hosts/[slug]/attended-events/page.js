import React from "react";
import EventsContainer from "./components/eventsContainer";

const AttendedEvents = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold mb-6">David Roy Attends Events</h1>
      <EventsContainer />
    </div>
  );
};

export default AttendedEvents;
