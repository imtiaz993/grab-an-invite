"use client";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import EventInfo from "./eventInfo";
import EventType from "./eventType";
import EventDetail from "./eventDetails";
import Fixtures from "./fixtures";
import OtherDetails from "./otherDetails";
import Questions from "./questions";
import CustomButton from "@/components/common/customButton";
import QrPopup from './qrPopup'

const EventForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {showPopup && <QrPopup setShowPopup={setShowPopup} />}
      <Formik initialValues={{ recurring: "", recurringType: "" }}>
        {({ values }) => (
          <Form>
            <div className="my-14 flex flex-col gap-14">
              <EventInfo
                recurring={values.recurring}
                recurringType={values.recurringType}
              />
              <EventType eventType={values.eventType} />
              <EventDetail />
              <Fixtures />
              <OtherDetails />
              <Questions />
              <CustomButton
                width="w-72"
                text="Create Event"
                onClick={() => setShowPopup(true)}
                style={"mx-auto"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventForm;
