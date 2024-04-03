import React from "react";
import AuthSlider from "@/components/authSlider";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <AuthSlider />
        <div className="px-[7%] pt-20 pb-14 w-[50%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
