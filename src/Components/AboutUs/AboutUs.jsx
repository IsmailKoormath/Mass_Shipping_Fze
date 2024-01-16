import React from "react";
import classes from "./AboutUs.module.css";
import {
  CustomHeading,
  CustomPara,
  CustomSubHeading,
} from "../CustomTexts/CustomTexts";
import warehouse from "../../assets/warehouse-worker.png";
import ornament from "../../assets/ornament.svg";
import { CustomButton } from "../CustomButton/CustomButton";
import { AboutUsCard } from "../AboutUsCard/AboutUsCard";

export const AboutUs = () => {
  return (
    <div className={classes.aboutUs_main}>
      <div className={classes.first_section}>
        <div className={classes.text_section}>
          <CustomSubHeading>About Us</CustomSubHeading>
          <CustomHeading className={classes.heading}>
            Empowering Your Business with Tailored Logistics Solutions
          </CustomHeading>
          <CustomPara className={classes.para}>
            we believe in providing our clients with personalized and efficient
            logistics solutions that meet their unique needs. With years of
            experience and a team of experts, we are dedicated to empowering
            your business with seamless shipping experiences.
          </CustomPara>
          <CustomButton fontSize="1.125rem">Learn More</CustomButton>
        </div>
        <div className={classes.image_container}>
          <img
            src={warehouse}
            alt="warehouse workers"
            className={classes.background_image}
          />
          <div className={classes.ornament_card}>
            <img
              src={ornament}
              alt="ornament"
              className={classes.ornament_icon}
            />
            <h2 className={classes.count_text}>647 +</h2>
            <span className={classes.award_winning}>Awwards Winning</span>
          </div>
        </div>
      </div>
      <div className={classes.cards_container}>
        <AboutUsCard number="01" text="Expertise and Experience" />
        <AboutUsCard number="02" text="Committed to Quality" />
        <AboutUsCard number="03" text="Comprehensive Services" />
      </div>
    </div>
  );
};
