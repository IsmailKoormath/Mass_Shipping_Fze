import React from "react";
import classes from "./OurServicesCard.module.css";

export const OurServicesCard = ({ icon, heading, para }) => {
  return (
    <div className={classes.ourServicesCard}>
      <div className={classes.icon_container}>
        <img src={icon} alt="icon" />
      </div>
      <h3 className={classes.heading}>{heading}</h3>
      <p className={classes.para}>{para}</p>
    </div>
  );
};
