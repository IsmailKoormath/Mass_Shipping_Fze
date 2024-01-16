import React from "react";
import classes from "./Clients.module.css";
import ipsum from "../../assets/ipsum.png";

export const Clients = () => {
  return (
    <div className={classes.clients_main}>
      {Array.from({ length: 5 }).map((_, index) => (
        <img key={index} src={ipsum} alt={{ ipsum }} />
      ))}
    </div>
  );
};
