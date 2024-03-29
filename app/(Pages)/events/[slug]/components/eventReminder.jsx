import React from "react";
import { Field, Form, Formik } from "formik";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close } from "@/icons";
import InputField from "@/components/common/inputField";
import CustomButton from "@/components/common/customButton";

const EventReminder = ({ setShowPopup }) => {
  useLockBodyScroll();

  return (
    <div className="w-screen bg-overlay h-screen flex justify-end items-center fixed top-0 right-0 z-30">
      <div className="abosolute text-dark bg-white max-w-2xl w-full h-screen overflow-auto z-10 flex flex-col justify-between">
        <div className="relative">
          <div
            className="absolute top-6 left-[91%] pb-1 cursor-pointer"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            <Close />
          </div>
        </div>
        <div className="mx-12 h-full">
          <h1 className="mt-20 text-4xl font-bold">Event reminder</h1>
          <h6 className="mt-4 font-medium opacity-70">
            Enter your details here if you would like us to send you a reminder
            shortly before these The Last Dinner Party tickets go on sale, we
            can send you an email or text message (or both)
          </h6>
          <Formik>
            <Form>
              <div className="mt-20">
                <label htmlFor="" className="opacity-60">
                  Your Email
                </label>
                <InputField name="email" type="email" />
              </div>
              <div className="mt-16">
                <label htmlFor="" className="opacity-60">
                  Phone no.
                </label>
                <InputField name="phone" type="text" />
              </div>
              <div className="flex mt-20">
                <Field
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  className="accent-secondary w-5 h-5 mr-1 bg-secondary cursor-pointer"
                />
                <label
                  htmlFor="newsletter"
                  className="opacity-60 ml-2 cursor-pointer"
                >
                  Also sign me up to the Gigantic weekly newsletter
                </label>
              </div>
              <CustomButton
                width="w-52"
                text="Send Reminder"
                onClick={() => {}}
                style="mt-20 mb-10"
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EventReminder;
