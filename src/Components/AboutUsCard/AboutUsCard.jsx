import React from "react";
import classes from "./AboutUsCard.module.css";

export const AboutUsCard = ({ number, text }) => {
  return (
    <div className={classes.aboutUsCard}>
      <span>{number}</span>
      {text}
    </div>
  );
};
