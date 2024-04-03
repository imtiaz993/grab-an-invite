import React from "react";
import { Field } from "formik";
import Dropdown from "@/components/common/dropdown";

const EventType = ({ eventType }) => {
  const categories = ["Cinemas", "Sports", "Music", "Festival", "Theatres"];
  const subcategories = ["Hip hop", "Hip hop", "Hip hop", "Hip hop"];

  return (
    <div>
      <h1 className="font-bold text-2xl">Event Type</h1>
      <div className="mt-6 flex gap-11">
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Event Type
          </label>
          <Dropdown
            box
            placeholder="select"
            options={["free", "Minimum Spend"]}
            name="eventType"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Minimum Amount
          </label>
          <Field
            type="text"
            name="amount"
            placeholder="$0.00"
            className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
            disabled={eventType === "free" && true}
          />
        </div>
      </div>
      <div className="mt-6 flex gap-11">
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Event Category
          </label>
          <Dropdown box placeholder="select" options={categories}/>
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-lg font-medium">
            Subcategory
          </label>
          <Dropdown box placeholder="select" options={subcategories} />
        </div>
      </div>
    </div>
  );
};

export default EventType;
