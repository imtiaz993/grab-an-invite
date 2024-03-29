"use client";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import InputField from "@/components/common/inputField";
import YesNoPopup from "@/components/yesNoPopup";
import CustomButton from "../../../../../components/common/customButton";

const ChangePasswordForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <YesNoPopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          title="Do you want to change your account password?"
          onYes={() => {
            console.log("Accepted");
          }}
          onNo={() => {
            console.log("Cancelled");
          }}
        />
      )}
      <div className="mt-10 px-10 py-14 rounded-[20px] shadow-blog-card">
        <div className="flex">
          <Formik>
            <Form className="w-full flex flex-col justify-center">
              <div className="flex gap-8">
                <div className="mt-20 w-full">
                  <label htmlFor="" className="opacity-60">
                    Old Password
                  </label>
                  <InputField
                    name="oldPassword"
                    type="password"
                    placeholder="Enter old Password"
                  />
                </div>
                <div className="mt-20 w-full">
                  <label htmlFor="" className="opacity-60">
                    New Password
                  </label>
                  <InputField
                    name="newPassword"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="mt-20 w-full">
                  <label htmlFor="" className="opacity-60">
                    Confirm password
                  </label>
                  <InputField
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter again new password"
                  />
                </div>
              </div>
              <CustomButton
                width="w-40"
                text="Save"
                onClick={() => setShowPopup(true)}
                style="mt-16 mx-auto"
              />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordForm;
