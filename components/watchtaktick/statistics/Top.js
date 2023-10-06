import React from "react";
import classes from "./top.module.css";
const Top = () => {
  return (
    <div className={classes["contianer"]}>
      <p className={classes["team-first"]}>
        <span></span>
        <p className={classes["team-first-name"]}>LA Lakers</p>
      </p>
      <p className={classes["middle"]}>Name</p>
      <p className={classes["team-sec"]}>
        <span></span>
        <p className={classes["team-first-name"]}>Chicago Bulls</p>
      </p>
    </div>
  );
};

export default Top;
