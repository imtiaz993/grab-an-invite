"use client";

import { useState } from "react";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import CustomButton from "@/components/common/customButton";

const FormLogin = () => {
  const { data, status } = useSession();
  const [step, setStep] = useState(1);

  return (
    <div>
      <h1 className="text-3xl  font-bold text-dark">Sign In</h1>
      <div className="flex mt-4 text-dark font-semibold">
        <p className=" opacity-60">New User? </p>
        <p className="text-secondary opacity-100 ml-1">
          <Link href="/signup">Create an Account</Link>
        </p>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          signIn("credentials", { ...values, redirect: false })
            .then(async (res) => {
              if (res.status === 200) {
                //navigate according to role returned from API
                console.log(data, status);
              }
              if (res.status === 401) {
                toast.error(res.error);
              }
            })
            .catch((e) => toast.error(e.error));
        }}
      >
        <Form>
          <div className="flex flex-col mt-12 text-dark font-medium ">
            {step === 1 ? (
              <>
                <label htmlFor="email" className="opacity-60">
                  Enter Your Username Or Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="mt-5 focus:outline-none border-b-[1px] border-dark border-opacity-20 pb-1"
                />
                <div className="flex justify-end mt-6">
                  <CustomButton
                    width="w-32"
                    text="Continue"
                    onClick={() => {
                      setStep(2);
                    }}
                  />
                </div>
              </>
            ) : (
              <>
                <label htmlFor="passaword" className="opacity-60">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="mt-5 focus:outline-none border-b-[1px] border-dark border-opacity-20 pb-1"
                />
                <div className="flex justify-between items-center mt-6">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-secondary"
                  >
                    Forgot Password?
                  </Link>
                  <div>
                    <button
                      type="button"
                      className="font-bold  text-secondary underline mr-5"
                      onClick={() => setStep(1)}
                    >
                      Go Back
                    </button>
                    <CustomButton
                      width="w-32"
                      text="Login"
                      type="submit"
                      onClick={() => {}}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-16 flex items-center">
            <div className="border-b-[1px] border-dark opacity-20 h-px w-[50%]"></div>
            <div className="w-28 text-center opacity-60">Or</div>
            <div className="border-b-[1px] border-dark opacity-20 h-px w-[50%]"></div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormLogin;
