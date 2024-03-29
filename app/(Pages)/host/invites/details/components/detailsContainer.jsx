"use client";
import React, { useState } from "react";
import SendInvitePopup from "./sendInvitePopup";
import InviteListItem from "./inviteListItem";

const DetailsContainer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [list, setlist] = useState("accepted");
  return (
    <>
      {showPopup && <SendInvitePopup setShowPopup={setShowPopup} />}
      <div className="my-28 mx-8 text-dark">
        <div className="rounded-[20px] shadow-blog-card">
          <div>
            <div className="flex gap-7 p-10">
              <img
                src="/images/guitarBoy.png"
                alt=""
                className="w-96 h-60 object-cover"
              />
              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-2xl">Citywide music event</h3>
                  <p
                    className="text-secondary font-bold underline cursor-pointer"
                    onClick={() => setShowPopup(true)}
                  >
                    Send Invite
                  </p>
                </div>
                <p className="font-medium mt-3">Music</p>
                <p className="font-medium mt-3">Dreamland, Margate</p>
                <p className="mt-8 opacity-60 font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-12 border-b border-dark20">
                <button
                  className={`ml-10 pb-2 font-medium ${
                    list === "accepted"
                      ? "text-secondary border-b border-secondary"
                      : "opacity-60"
                  }`}
                  onClick={() => setlist("accepted")}
                >
                  Accepted Invite
                </button>
                <button
                  className={`pb-2 font-medium ${
                    list === "rejected"
                      ? "text-secondary border-b border-secondary"
                      : "opacity-60"
                  }`}
                  onClick={() => setlist("rejected")}
                >
                  Rejected Invite
                </button>
                <button
                  className={`pb-2 font-medium ${
                    list === "pending"
                      ? "text-secondary border-b border-secondary"
                      : "opacity-60"
                  }`}
                  onClick={() => setlist("pending")}
                >
                  Pending Invite
                </button>
                <button
                  className={`pb-2 font-medium ${
                    list === "expired"
                      ? "text-secondary border-b border-secondary"
                      : "opacity-60"
                  }`}
                  onClick={() => setlist("expired")}
                >
                  Expired Invite
                </button>
              </div>
              <div className="p-10">
                {list === "accepted" ? (
                  <div className="flex flex-wrap gap-6">
                    <InviteListItem type="accepted" />
                    <InviteListItem type="accepted" />
                  </div>
                ) : list === "rejected" ? (
                  <div className="flex flex-wrap gap-6">
                    <InviteListItem type="rejected" />
                    <InviteListItem type="rejected" />
                  </div>
                ) : list === "pending" ? (
                  <div className="flex flex-wrap gap-6">
                    <InviteListItem type="pending" />
                    <InviteListItem type="pending" />
                  </div>
                ) : (
                  list === "expired" && (
                    <div className="flex flex-wrap gap-6">
                      <InviteListItem type="expired" />
                      <InviteListItem type="expired" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsContainer;
