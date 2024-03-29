import EventCard from "@/components/eventCard";
import guitarBoy from "@/public/images/guitarBoy.png";

const PopularEvents = () => {
  return (
    <div className="text-dark">
      <div className="flex">
        <div className="w-[5px] bg-secondary mr-4 my-1"></div>
        <div>
          <h1 className="text-4xl font-bold">Popular Events</h1>
          <h6 className="mt-4 w-2/3 font-medium">
            <span className="opacity-70">
              Lorem Ipsum is simply dummy text of the printing and{" "}
            </span>
            <span className="text-secondary underline opacity-100">
              typesetting industry
            </span>
            <span className="opacity-70">
              . Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </h6>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-7 gap-y-16 mt-14">
        <EventCard
          imageSrc={guitarBoy.src}
          title="The Citywide Music Event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/nectarines.png"
          title="The Citywide Music Event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/nectarines.png"
          title="The Citywide Music Event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/nectarines.png"
          title="The Citywide Music Event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc={guitarBoy.src}
          title="The Citywide Music Event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
        <EventCard
          imageSrc="/images/nectarines.png"
          title="The Citywide Music Event"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="8 May"
          time="1pm - 4pm"
        />
      </div>
    </div>
  );
};

export default PopularEvents;
