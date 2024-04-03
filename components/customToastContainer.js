import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastOptions = {
  // success: {
  //   className: "bg-evolve-purple",
  //   bodyClassName: "text-white",
  //   progressClassName: "bg-evolve-pink",
  // },
  // info: {
  //   className: "bg-evolve-light-green",
  //   bodyClassName: "text-white",
  //   progressClassName: "bg-evolve-pink",
  // },
  // warning: {
  //   className: "bg-evolve-yellow",
  //   bodyClassName: "text-evolve-black",
  //   progressClassName: "bg-evolve-pink",
  // },
  // default: {
  //   className: "bg-white",
  //   bodyClassName: "text-evolve-black",
  //   progressClassName: "bg-evolve-pink",
  // },
  // error: {
  //   className: "bg-evolve-red",
  //   bodyClassName: "text-white",
  //   progressClassName: "bg-evolve-pink",
  // },
};

export const CustomToastContainer = ({ children, toastOptions }) => (
  <ToastContainer {...toastOptions}>{children}</ToastContainer>
);

export const showToast = (message, type) => {
  toast[type](message, toastOptions[type]);
};
