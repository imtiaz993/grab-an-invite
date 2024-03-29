"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Location, Clock } from "@/icons";
import EventReminder from "./eventReminder";
import CustomButton from "../../../../../components/common/customButton";

const EventCalendar = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <EventReminder setShowPopup={setShowPopup} />}
      <div className="mt-32 px-[9.3%] bg-primary h-[616px] text-white">
        <div className="flex flex-col items-center gap-4 pt-16 text-center">
          <h1 className="text-4xl font-bold">The citywide music event</h1>
          <h6 className="w-7/12 font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h6>
        </div>
        <div className="flex mt-11 gap-20">
          <div className="">
            <img
              src="/images/guitarBoy.png"
              alt=""
              className="object-cover w-[570px] h-80 rounded-[20px]"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Margate Summer Series</p>
            <h3 className="mt-4 text-4xl font-bold">
              Friday 6th February 2024
            </h3>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-12 h-12 bg-button-primary flex items-center justify-center rounded-full">
                <Location />
              </div>
              <h6 className="text-lg font-medium">Dreamland, Margate</h6>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-12 h-12 bg-button-primary flex items-center justify-center rounded-full">
                <Clock />
              </div>
              <h6 className="text-lg font-medium">
                Doors at 17:30 | Ends: 22:30
              </h6>
            </div>
            <CustomButton
              width="w-36"
              text="Book Tickets"
              onClick={() => router.push("/events/5/book")}
              style="mt-8"
            />
            <CustomButton
              width="w-36"
              text="Remind Me"
              onClick={() => setShowPopup(true)}
              style="mt-8 ml-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCalendar;
