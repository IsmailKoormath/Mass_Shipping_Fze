import React from "react";
import classes from "./HowItWorks.module.css";
import {
  CustomHeading,
  CustomPara,
  CustomSubHeading,
} from "../CustomTexts/CustomTexts";
import worker from "../../assets/female-worker.png";
import packageIcon from "../../assets/package.svg";
import { WorkProcess } from "../WorkProcess/WorkProcess";

export const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: packageIcon,
      title: "Request a Quote",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
    {
      step: 2,
      icon: packageIcon,
      title: "Provide Details",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
    {
      step: 3,
      icon: packageIcon,
      title: "Schedule Pick-Up",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
  ];
  return (
    <div className={classes.howItWorks_main}>
      <div className={classes.first_section}>
        <div className={classes.image_container}>
          <img src={worker} alt="Worker" />
        </div>
        <div className={classes.text_section}>
          <CustomSubHeading>How It Works</CustomSubHeading>
          <CustomHeading className={classes.heading}>
            Simplify Your Shipping Experience with Our Easy Step Process
          </CustomHeading>
          <CustomPara className={classes.para}>
            we believe in providing our clients with personalized and efficient
            logistics solutions that meet their unique needs. With years of
            experience and a team of experts, we are dedicated to empowering
            your business with seamless shipping experiences.
          </CustomPara>
        </div>
      </div>
      <div className={classes.process_container}>
        {steps?.map((step) => (
          <WorkProcess
            key={step.step}
            step={step.step}
            icon={packageIcon}
            title={step.title}
            para={step.para}
          />
        ))}
      </div>
    </div>
  );
};
