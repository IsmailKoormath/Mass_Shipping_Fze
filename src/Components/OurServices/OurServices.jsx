import React from "react";
import classes from "./OurServices.module.css";
import packageIcon from "../../assets/package.svg";
import { CustomHeading, CustomSubHeading } from "../CustomTexts/CustomTexts";
import { OurServicesCard } from "../OurServicesCard/OurServicesCard";

export const OurServices = () => {
  const services = [
    {
      icon: packageIcon,
      heading: "Ocean Shipping",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
    {
      icon: packageIcon,
      heading: "Air Shipping",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
    {
      icon: packageIcon,
      heading: "Truck Shipping",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
    {
      icon: packageIcon,
      heading: "Custom Clearance",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
    {
      icon: packageIcon,
      heading: "Freight Forwarding",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
    {
      icon: packageIcon,
      heading: "Insurance",
      para: "we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
    },
  ];
  return (
    <div className={classes.ourServices_main}>
      <CustomSubHeading>Our Services</CustomSubHeading>
      <CustomHeading className={classes.heading}>
        Efficient and Reliable Shipping with FastGo
      </CustomHeading>
      <div className={classes.card_container}>
        {services?.map((service, index) => (
          <OurServicesCard
            key={index}
            icon={service.icon}
            heading={service.heading}
            para={service.para}
          />
        ))}
      </div>
    </div>
  );
};
