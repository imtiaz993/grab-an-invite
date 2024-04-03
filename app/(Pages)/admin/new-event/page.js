import React from "react";
import EventForm from "./components/eventForm";

const NewEvent = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold">Created a New Event</h1>
      <EventForm />
    </div>
  );
};

export default NewEvent;
