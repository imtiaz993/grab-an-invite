"use client";
import { SessionProvider } from "next-auth/react";
import {
  CustomToastContainer,
  toastOptions,
} from "@/components/customToastContainer";
import "react-toastify/dist/ReactToastify.css";

export default function RootWrapper({ children }) {
  return (
    <div>
      <SessionProvider>
        {children}
        <CustomToastContainer toastOptions={toastOptions} />
      </SessionProvider>
    </div>
  );
}
