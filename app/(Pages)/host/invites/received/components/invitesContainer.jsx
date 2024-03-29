"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CloseSimple, Tick } from "@/icons";
import YesNoPopup from "@/components/yesNoPopup";

const InvitesContainer = () => {
  const router = useRouter();
  const [showAcceptPopup, setShowAcceptPopup] = useState(false);
  const [showRejectPopup, setShowRejectPopup] = useState(false);

  return (
    <>
      {showAcceptPopup && (
        <YesNoPopup
          showPopup={showAcceptPopup}
          setShowPopup={setShowAcceptPopup}
          title="Do you want to accept the “Citywide Music Event” invitation?"
          onYes={() => {
            console.log("Accepted");
          }}
          onNo={() => {
            console.log("Cancelled");
          }}
        />
      )}
      {showRejectPopup && (
        <YesNoPopup
          showPopup={showRejectPopup}
          setShowPopup={setShowRejectPopup}
          title="Do you want to reject the “Citywide Music Event” invitation?"
          onYes={() => {
            console.log("Rejected");
          }}
          onNo={() => {
            console.log("Cancelled");
          }}
        />
      )}
      <div className="my-10 rounded-[8px] border border-dark20 overflow-hidden">
        <table className="w-full text-left">
          <thead className=" ">
            <tr className="h-14 border-b border-[#1D1D1D33] font-bold text-secondary">
              <th></th>
              <th>Title </th>
              <th>Location</th>
              <th>Expires In</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="h-20  cursor-pointer border-b border-[#1D1D1D33]"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">#01</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>2 hours 23 min</td>
              <td>
                <button
                  className="w-12 h-12 rounded-full border border-[#FA4C20] inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRejectPopup(true);
                  }}
                >
                  <CloseSimple color='#FA4C20' />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#1C85A414] ml-4 inline-flex items-center justify-center border border-[#1C85A4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAcceptPopup(true);
                  }}
                >
                  <Tick />
                </button>
              </td>
            </tr>
            <tr
              className="h-20  cursor-pointer border-b border-[#1D1D1D33]"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">#01</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>2 hours 23 min</td>
              <td>
                <button
                  className="w-12 h-12 rounded-full bg-[#FA4C20] inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRejectPopup(true);
                  }}
                >
                  <CloseSimple />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#1C85A414] ml-4 inline-flex items-center justify-center border border-[#1C85A4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAcceptPopup(true);
                  }}
                >
                  <Tick />
                </button>
              </td>
            </tr>
            <tr
              className="h-20  cursor-pointer border-b border-[#1D1D1D33]"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">#01</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>2 hours 23 min</td>
              <td>
                <button
                  className="w-12 h-12 rounded-full bg-[#FA4C20] inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRejectPopup(true);
                  }}
                >
                  <CloseSimple />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#1C85A414] ml-4 inline-flex items-center justify-center border border-[#1C85A4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAcceptPopup(true);
                  }}
                >
                  <Tick />
                </button>
              </td>
            </tr>
            <tr
              className="h-20  cursor-pointer border-b border-[#1D1D1D33]"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">#01</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>2 hours 23 min</td>
              <td>
                <button
                  className="w-12 h-12 rounded-full bg-[#FA4C20] inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRejectPopup(true);
                  }}
                >
                  <CloseSimple />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#1C85A414] ml-4 inline-flex items-center justify-center border border-[#1C85A4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAcceptPopup(true);
                  }}
                >
                  <Tick />
                </button>
              </td>
            </tr>
            <tr
              className="h-20  cursor-pointer border-b border-[#1D1D1D33]"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">#01</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>2 hours 23 min</td>
              <td>
                <button
                  className="w-12 h-12 rounded-full bg-[#FA4C20] inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRejectPopup(true);
                  }}
                >
                  <CloseSimple />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#1C85A414] ml-4 inline-flex items-center justify-center border border-[#1C85A4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAcceptPopup(true);
                  }}
                >
                  <Tick />
                </button>
              </td>
            </tr>
            <tr
              className="h-20  cursor-pointer border-b border-[#1D1D1D33]"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">#01</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>2 hours 23 min</td>
              <td>
                <button
                  className="w-12 h-12 rounded-full bg-[#FA4C20] inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRejectPopup(true);
                  }}
                >
                  <CloseSimple />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#1C85A414] ml-4 inline-flex items-center justify-center border border-[#1C85A4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAcceptPopup(true);
                  }}
                >
                  <Tick />
                </button>
              </td>
            </tr>
            <tr
              className="h-20  cursor-pointer border-b border-[#1D1D1D33]"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">#01</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>2 hours 23 min</td>
              <td>
                <button
                  className="w-12 h-12 rounded-full bg-[#FA4C20] inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRejectPopup(true);
                  }}
                >
                  <CloseSimple />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#1C85A414] ml-4 inline-flex items-center justify-center border border-[#1C85A4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAcceptPopup(true);
                  }}
                >
                  <Tick />
                </button>
              </td>
            </tr>
            <tr
              className="h-20  cursor-pointer"
              onClick={() => {
                router.push("/events/1", { scroll: false });
              }}
            >
              <td className="pl-7">#01</td>
              <td>Citywide Music Event</td>
              <td>Dreamland, Margate</td>
              <td>2 hours 23 min</td>
              <td>
                <button
                  className="w-12 h-12 rounded-full bg-[#FA4C20] inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRejectPopup(true);
                  }}
                >
                  <CloseSimple />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#1C85A414] ml-4 inline-flex items-center justify-center border border-[#1C85A4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAcceptPopup(true);
                  }}
                >
                  <Tick />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InvitesContainer;
