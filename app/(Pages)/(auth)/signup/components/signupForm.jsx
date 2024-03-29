"use client";
import { Field } from "formik";

const SignupForm = () => {
  return (
    <div>
      <div className="mt-12 text-dark font-medium ">
        <label
          className="block font-medium text-dark opacity-60"
        >
          Your Email
        </label>
        <Field
          type="text"
          name="email"
          className="mt-5 focus:outline-none border-b-[1px] border-dark border-opacity-20 pb-1 w-full"
        />
      </div>
      <div className="mt-12 text-dark font-medium ">
        <label
          className="block font-medium text-dark opacity-60"
        >
          Password
        </label>
        <Field
          type="password"
          name="password"
          className="mt-5 focus:outline-none border-b-[1px] border-dark border-opacity-20 pb-1 w-full"
        />
      </div>
      <div className="mt-12 text-dark font-medium ">
        <label
          className="block font-medium text-dark opacity-60"
        >
          Confirm Password
        </label>
        <Field
          type="password"
          name="confirm_password"
          className="mt-5 focus:outline-none border-b-[1px] border-dark border-opacity-20 pb-1 w-full"
        />
      </div>
    </div>
  );
};

export default SignupForm;
