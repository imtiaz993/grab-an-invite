import React from "react";
import Navbar from "@/components/common/navbar";
import EventDetail from "./components/eventDetail";

const Book = () => {
  return (
    <div>
      <div className="h-20">
        <Navbar />
      </div>
      <div className="py-32 mx-36">
        <EventDetail />
      </div>
    </div>
  );
};

export default Book;
