import React from "react";
import { Field, Form, Formik } from "formik";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close, CloseSimple } from "@/icons";

const HobbiesPopup = ({ setShowPopup }) => {
  useLockBodyScroll();

  const hobbies = [
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
    "Football playing",
  ];

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute text-dark bg-white max-w-[48%] w-full max-h-screen md:max-h-[90vh] z-10 rounded-[20px] flex flex-col justify-between">
        <div className="relative">
          <div
            className="absolute top-6 left-[91%] pb-1 cursor-pointer"
            onClick={closePopup}
          >
            <Close />
          </div>
        </div>
        <div className="mx-6 mt-20 mb-9 overflow-auto">
          <h3 className="text-2xl font-bold">Hobbies or Favourites</h3>
          <Formik>
            <Form>
              <Field
                name="hobby"
                type="text"
                placeholder="Add Hobbies"
                className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full"
              />
            </Form>
          </Formik>
          <div className="mt-3 border rounded-lg border-dark border-opacity-20 py-5 px-4 flex flex-wrap gap-5">
            {hobbies &&
              hobbies.map((item, index) => (
                <div
                  key={index}
                  className="gap-6 flex items-center p-2 border border-dark border-opacity-20 text-dark rounded-md w-fit"
                >
                  <p className="">{item} </p>
                  <CloseSimple color="#1D1D1D" height="10" width="10" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbiesPopup;
