import React from "react";
import EventInfo from './components/eventInfo'

const NewEvent = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold mb-10">Created a New Event</h1>
      <div className="font-medium px-6 py-2 bg-secondary bg-opacity-20 rounded">
        You have only 3 events left, if you want more events{" "}
        <span className="text-secondary underline"> upgrade your plan</span>
      </div>
      <EventInfo/>
    </div>
  );
};

export default NewEvent;
