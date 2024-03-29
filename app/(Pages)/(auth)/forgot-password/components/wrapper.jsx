"use client";
import { useState } from "react";
import Verify from "./verify";
import NewPassword from "./newPassword";

const Wrapper = () => {
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div>
      <h1 className="text-dark font-bold text-3xl">Forgot Password</h1>
      <div className="text-dark opacity-60 font-medium pt4 ">
        No worries, we’ll send you reset instruction
      </div>
      <div>
        {!isVerified ? (
          <Verify setIsVerified={setIsVerified} />
        ) : (
          <NewPassword />
        )}
      </div>
    </div>
  );
};

export default Wrapper;
