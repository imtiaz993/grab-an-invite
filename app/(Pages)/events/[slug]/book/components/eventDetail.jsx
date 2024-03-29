"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { renderRating } from "@/utils/rating";
import { ChevronLeft, ChevronRight } from "@/icons";
import CustomButton from "@/components/common/customButton";
import YesNoPopup from "@/components/yesNoPopup";
import SendRequestPopup from "./sendRequestPopup";

const EventDetail = () => {
  const [notePopup, setNotePopup] = useState(false);
  const [requestPopup, setRequestPopup] = useState(false);

  return (
    <>
      {notePopup && (
        <YesNoPopup
          showPopup={notePopup}
          setShowPopup={setNotePopup}
          title="Serious Note"
          message="You have only 1 request left to join request to the event, would you
          like to send request to this event. If you want more request upgrade
          your plan"
          onYes={() => {
            setNotePopup(false);
            setRequestPopup(true);
          }}
          onNo={() => {
            setNotePopup(false);
          }}
        />
      )}
      {requestPopup && <SendRequestPopup setRequestPopup={setRequestPopup} />}
      <div className="text-dark">
        <div className="font-semibold">
          <span className="opacity-40 text-lg">
            Home <span className="mx-3">{">"}</span> Music
            <span className="mx-3">{">"}</span>
          </span>
          <span> Citywide music event</span>
        </div>
        <div className="mt-7 flex text-dark gap-32">
          <div className="w-full">
            <img
              src="/images/guitarBoy.png"
              alt=""
              className=" object-cover w-[570px] h-[447px] rounded-[20px]"
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold mt-6">
              The citywide music event
            </h1>
            <div className="flex mt-4 items-center">
              {renderRating(4)}
              <p className="text-[#FA4C20] font-medium h-7 ml-2">4.1</p>
            </div>
            <p className="mt-6 text-lg font-bold text-secondary">
              Minimum Spend
              <span className="text-3xl"> $230</span>
            </p>
            <p className="mt-7 pt-7 border-t-2 border-dashed border-[#C6CACC] font-medium opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Formik>
              <Form>
                <div>
                  <p className="font-semibold mt-6 mb-2">Date</p>
                  <Field
                    as="select"
                    type="text"
                    name="date"
                    className="w-full p-4 border border-[#1D1D1D33] rounded-[10px]"
                  >
                    <option value="03 Fab, 2024">03 Fab, 2024</option>
                  </Field>
                </div>
                <div className="mt-6 flex gap-14 select-none">
                  <div className="w-full">
                    <p className="mb-2 font-semibold">Tickets</p>
                    <div className="h-12 border border-[#1D1D1D33] rounded-[10px] flex">
                      <div className="w-1/6 h-full flex m-auto border-r border-[#1D1D1D33]">
                        <div className="m-auto">
                          <ChevronLeft
                            color="#1D1D1DB2"
                            height="10"
                            width="6"
                          />
                        </div>
                      </div>
                      <div className="w-full my-auto">
                        <p className="text-center opacity-70">1</p>
                      </div>
                      <div className="w-1/6 h-full flex m-auto border-l border-[#1D1D1D33]">
                        <div className="m-auto">
                          <ChevronRight
                            color="#1D1D1DB2"
                            height="10"
                            width="6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="mb-2 font-semibold">Three Days Pass</p>
                    <div className="h-12 border border-[#1D1D1D33] rounded-[10px] flex">
                      <div className="w-1/6 h-full flex m-auto border-r border-[#1D1D1D33]">
                        <div className="m-auto">
                          <ChevronLeft
                            color="#1D1D1DB2"
                            height="10"
                            width="6"
                          />
                        </div>
                      </div>
                      <div className="w-full my-auto">
                        <p className="text-center opacity-70  ">1</p>
                      </div>
                      <div className="w-1/6 h-full flex m-auto border-l border-[#1D1D1D33]">
                        <div className="m-auto">
                          <ChevronRight
                            color="#1D1D1DB2"
                            height="10"
                            width="6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CustomButton
                    width='w-40'
                    text="Send Request"
                  onClick={() => {
                    setNotePopup(true);
                  }}
                  style="mt-7 "
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
