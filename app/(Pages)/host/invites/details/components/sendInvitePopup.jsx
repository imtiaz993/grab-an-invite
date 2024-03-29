import React from "react";
import { Field, Form, Formik } from "formik";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Close, Search } from "@/icons";
import InviteListItem from "./inviteListItem";
import Dropdown from "@/components/common/dropdown";
import CustomButton from "@/components/common/customButton";

const SendInvitePopup = ({ setShowPopup }) => {
  useLockBodyScroll();

  const categories = ["Cinema", "Sports", "Music", "Festival", "Theatres"];
  const expiresAfter = [
    "Expires after 12 hr",
    "Expires after 6 hr",
    "Expires after 3 hr",
    "Expires after 1 hr",
  ];

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-screen bg-overlay h-screen flex justify-center items-center fixed top-0 right-0 z-10">
      <div className="abosolute text-dark bg-white max-w-2xl w-full max-h-screen md:max-h-[90vh] z-10 rounded-[20px] flex flex-col justify-between">
        <div className="relative">
          <div
            className="absolute top-6 left-[91%] pb-1 cursor-pointer"
            onClick={closePopup}
          >
            <Close />
          </div>
        </div>
        <div className="m-6 overflow-auto">
          <h3 className="text-2xl font-bold">Send invite to your friends</h3>
          <Formik>
            <Form>
              <div className="h-[calc(100%-132px)] overflow-auto">
                <div className="mt-6 relative">
                  <Field
                    type="text"
                    placeholder="Search by name"
                    className="w-full h-11 rounded-md border border-dark20 bg-[#F5F5F5] p-5 outline-none placeholder:text-dark"
                  />
                  <div className="absolute right-3 top-0 h-11 flex items-center">
                    <Search color="#1D1D1D" />
                  </div>
                </div>
                <div className="flex mt-4 gap-5">
                  <Field
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="w-36 h-11 rounded-md border border-dark20 bg-[#F5F5F5] p-5 outline-none placeholder:text-dark"
                  />
                  <Dropdown
                    type="text"
                    name="category"
                    options={categories}
                    className="w-40 h-11 rounded-md border border-dark20 bg-[#F5F5F5] p-5 outline-none placeholder:text-dark"
                  />
                  <Dropdown
                    type="text"
                    name="expiresAfter"
                    placeholder="Expires after 24 hr"
                    options={expiresAfter}
                    className="w-52 h-11 rounded-md border border-dark20 bg-[#F5F5F5] p-5 outline-none placeholder:text-dark"
                  />
                </div>
                <div className="mt-10 flex flex-wrap gap-6">
                  <InviteListItem type="accepted" />
                  <InviteListItem type="rejected" />
                  <InviteListItem type="pending" />
                  <InviteListItem type="expired" />
                  <InviteListItem type="accepted" />
                  <InviteListItem type="rejected" />
                  <InviteListItem type="pending" />
                  <InviteListItem type="expired" />
                </div>
                <div className="mt-6 text-center">
                  <CustomButton
                    width="w-32"
                    text="Send"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SendInvitePopup;
