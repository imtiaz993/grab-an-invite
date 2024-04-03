// 'use client'
import React from "react";

const CustomButton = ({
  text,
  style,
  width,
  onClick = () => {},
  type = "button",
  outlined = false,
  Icon,
  disabled,
}) => {
  return (
    <button
      className={`${width} h-12 font-bold rounded-full ${
        Icon && "flex items-center justify-center gap-2"
      } ${
        outlined
          ? "text-secondary border border-secondary"
          : "text-white bg-button-primary"
      } ${style}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {Icon && <Icon />} {text}
    </button>
  );
};

export default CustomButton;
