import React from "react";
import classes from "./CustomButton.module.css";

export const CustomButton = ({ children, onClick, fontSize ,className}) => {
  return (
    <button className={`${classes.customButton} ${className}`} style={{ fontSize: fontSize }}>
      {children}
    </button>
  );
};
