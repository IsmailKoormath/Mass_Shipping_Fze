import React from "react";
import classes from "./CustomTexts.module.css";

export const CustomSubHeading = ({ children, className }) => {
  return <h2 className={`${classes.sub_heading} ${className}`}>{children}</h2>;
};

export const CustomHeading = ({ children,className }) => {
  return <h1 className={`${classes.heading} ${className}`}>{children}</h1>;
};

export const CustomPara = ({ children,className }) => {
  return <p className={`${classes.para} ${className}`}>{children}</p>;
};
