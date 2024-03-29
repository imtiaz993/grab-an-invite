"use client";
import React from "react";
import { Field, Form, Formik } from "formik";

const EventInfo = () => {
  return (
    <div className="mt-14">
      <h1 className="font-bold text-2xl">Event Info...</h1>
      <Formik>
        <Form>
          <div className="mt-6">
            <label htmlFor="" className="text-lg font-medium">Title</label>
            <Field
              type="text"
              name="title"
              placeholder="Please enter your event title"
              className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
            />
          </div>
          <div className="mt-10">
            <label htmlFor="" className="text-lg font-medium">Add short detail about event </label>
            <Field
              type="text"
              name="details"
              placeholder="Please enter your event detail"
              className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EventInfo;
