import { Field } from "formik";
import React from "react";
import { useState } from "react";
import QuestionPopup from "./questionPopup";

const Questions = () => {
  const [questions, setQuestions] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <QuestionPopup setShowPopup={setShowPopup} />}
      <div>
        <h1 className="font-bold text-2xl">Questions</h1>
        <div className="mt-6 w-full">
          <div className="flex justify-between items-center">
            <label htmlFor="" className="text-lg font-medium">
              Adds questions
            </label>
            <button
              className="text-lg font-medium text-secondary"
              // onClick={() => setQuestions((prev) => prev + 1)}
              onClick={() => setShowPopup(true)}
            >
              Adds New Question
            </button>
          </div>
          {Array.from({ length: questions }, (_, index) => (
            <Field
              type="text"
              key={index}
              // name="question"
              placeholder="Please type question"
              className="mt-3 focus:outline-none border border-dark border-opacity-20 p-3 pl-5 rounded-lg w-full placeholder:text-dark"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
