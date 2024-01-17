import React from "react";
import classes from "./ContactUS.module.css";
import { CustomHeading, CustomSubHeading } from "../CustomTexts/CustomTexts";
import packageIcon from "../../assets/package.svg";
import { CustomButton } from "../CustomButton/CustomButton";

export const ContactUS = () => {
  const details = [
    { label: "Call Us", detail: "+2 333 000-0000" },
    { label: "Email", detail: "massshipping@mail.com" },
    { label: "Office", detail: "Anywhere Street, NY" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.contactUS_main}>
      <div className={classes.first_section}>
        <CustomSubHeading>Contact Us</CustomSubHeading>
        <CustomHeading>
          Take the First Step to Streamlined Shipping
        </CustomHeading>
        <div className={classes.details_container}>
          {details?.map((detail, index) => (
            <div key={index} className={classes.details_card}>
              <div className={classes.icon_container}>
                <img src={packageIcon} alt="Icon" />
              </div>
              <div className={classes.details}>
                <label htmlFor={detail.label}>{detail.label}</label>
                <span id={detail.label}>{detail.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.form_container}>
        <h3 className={classes.form_heading}>Request a Quote Today</h3>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" placeholder="Ex: Jhon Dee" />
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="Ex: jhondee@gmail.com" />
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="number" placeholder="Ex: +1 (333) 000-0000" />
          <label htmlFor="message">Message</label>
          <input
            id="message"
            type="text"
            placeholder="Writing your message here..."
          />
          <CustomButton className={classes.submit_btn}>
            Submit
          </CustomButton>
        </form>
      </div>
    </div>
  );
};
