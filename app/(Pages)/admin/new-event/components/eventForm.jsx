"use client";
import React from "react";
import { Field, Form, Formik } from "formik";
import { Gallery } from "@/icons";
import Dropdown from "@/components/common/dropdown";
import CustomButton from "@/components/common/customButton";

const EventForm = () => {
  return (
    <div className="my-10">
      <Formik>
        <Form className="flex flex-col gap-10">
          <div className="w-full">
            <label htmlFor="" className="text-lg font-medium">
              Host
            </label>
            <Field
              type="text"
              name="host"
              placeholder="Search by name or email"
              className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-lg font-medium">
              Title
            </label>
            <Field
              type="text"
              name="title"
              placeholder="Please enter your event title"
              className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-lg font-medium">
              Add short detail about event
            </label>
            <Field
              type="text"
              name="detail"
              placeholder="Please enter your event detail"
              className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
            />
          </div>

          <div className="flex gap-11">
            <div className="w-full">
              <label htmlFor="" className="text-lg font-medium">
                Event Category
              </label>
              <Field
                type="text"
                name="address"
                placeholder="Enter location"
                className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="text-lg font-medium">
                Start date
              </label>
              <Dropdown box placeholder="select" />
            </div>
          </div>
          <div className="flex gap-11">
            <div className="w-full">
              <label htmlFor="" className="text-lg font-medium">
                Event Type
              </label>
              <Field
                type="text"
                name="address"
                placeholder="Enter location"
                className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="text-lg font-medium">
                End date
              </label>
              <Dropdown box placeholder="select" />
            </div>
          </div>

          <div className="flex gap-11">
            <div className="w-full">
              <label htmlFor="" className="text-lg font-medium">
                Add Image
              </label>
              <div className="mt-3 h-80 flex flex-col items-center justify-center focus:outline-none border border-dark border-opacity-20 overflow-hidden rounded-lg w-full placeholder:text-dark">
                <Gallery />
                <button className="mt-2 font-medium text-sm underline text-secondary border border-secondary rounded-lg px-4 py-[10px]">
                  Browse Image
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full">
                <label htmlFor="" className="text-lg font-medium">
                  Address Or Location
                </label>
                <Field
                  type="text"
                  name="address"
                  placeholder="Enter location"
                  className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
                />
              </div>
              <div className="mt-10 w-full">
                <label htmlFor="" className="text-lg font-medium">
                  City
                </label>
                <Dropdown box placeholder="select" />
              </div>
              <div className="mt-10 w-full">
                <label htmlFor="" className="text-lg font-medium">
                  Country
                </label>
                <Dropdown box placeholder="select" />
              </div>
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="" className="text-lg font-medium">
              Detail Description
            </label>
            <Field
              as="textarea"
              type="text"
              name="description"
              placeholder="Please enter your event title"
              className="mt-3 h-72 resize-none focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
            />
          </div>
          <CustomButton
            width="w-40"
            text="Create Event"
            onClick={() => {}}
            style={"mx-auto"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default EventForm;
