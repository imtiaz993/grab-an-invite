"use client"; // temporary resolve customButton issue without use client

import React from "react";
import EventCard from "@/components/eventCard";
import CustomButton from "@/components/common/customButton";

const SearchResults = () => {
  return (
    <div className="mx-36 mb-36 flex flex-col items-center">
      <h1 className="mt-36 text-4xl font-bold text-center">
        Find Event Related to Your Search
      </h1>
      <h6 className="mt-4 font-medium text-center w-1/2 opacity-70">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.{" "}
      </h6>
      <div className="mt-14 grid grid-cols-3 gap-x-7 gap-y-16 ">
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/guitarBoy.png"
          title="The citywide music event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
      </div>
      <CustomButton
        width="w-40"
        text="Load More"
        onClick={() => {}}
        style="mt-20"
      />
    </div>
  );
};

export default SearchResults;
