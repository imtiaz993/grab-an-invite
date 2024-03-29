import React from "react";
import EventCard from "@/components/eventCard";

const EventHistory = () => {
  return (
    <div className="mx-8 text-dark">
      <h1 className="mt-20 text-4xl font-bold">Events History</h1>
      <div className="mt-10 grid grid-cols-3 gap-7">
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </div>
  );
};

export default EventHistory;
