"use client";
import { useState } from "react";
import Link from "next/link";
import { Form, Formik } from "formik";
import CustomButton from "@/components/common/customButton";
import SignupSocials from "./signupSocials";
import SignupForm from "./signupForm";
import SignupFormSecond from "./signupFormSecond";
import SignupPopup from "./signupPopup";
import { register } from "../../../../services/auth";

const SignupWrapper = () => {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className="text-xl font-semibold text-dark opacity-60">
        Step {step} of 2
      </p>
      <h1 className="pt-4 text-dark font-bold text-3xl">Create An Account</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirm_password: "",
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          state: "",
          country: "",
          dobMonth: "",
          dobYear: "",
          checktc: "",
          check_share_data: "",
          locationPreference: "",
          eventPreference: "",
          emailUpdates: "",
        }}
        onSubmit={async (values) => {
          const response = await register(values);
        }}
      >
        {({ values }) => (
          <Form>
            {open && <SignupPopup setOpen={setOpen} />}
            {step === 1 && (
              <>
                <div className="mt-9">
                  <SignupSocials />
                </div>
                <div className="mt-16 flex items-center">
                  <div className="border-b-[1px] border-dark opacity-20 h-px w-[50%]"></div>
                  <div className="w-28 text-center opacity-60">Or</div>
                  <div className="border-b-[1px] border-dark opacity-20 h-px w-[50%]"></div>
                </div>
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-dark">Sign Up Now</h2>
                </div>
              </>
            )}

            <div className="flex mt-4">
              <div className="text-dark opacity-60 font-medium">
                Already have an account?
              </div>
              <span className="text-secondary font-semibold opacity-100 ml-1">
                <Link href="/login">Sign in</Link>
              </span>
            </div>
            {step === 1 ? (
              <div>
                <SignupForm />
                <div className="flex justify-end mt-6">
                  <CustomButton
                    width='w-32'
                    text="Continue"
                    onClick={() => {
                      setStep(2);
                    }}
                  />
                </div>
              </div>
            ) : (
              <div>
                <SignupFormSecond />
                <div className="flex justify-end mt-6">
                  <div>
                    <button
                      type="button"
                      className="font-bold  text-secondary underline mr-5"
                      onClick={() => setStep(1)}
                    >
                      Go Back
                    </button>
                    <CustomButton
                    width='w-32'
                    text="Sign up"
                      onClick={() => {
                        setOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupWrapper;
