import React from "react";
import classes from "./top.module.css";
const Top = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["team-first"]}>Man Utd</div>
      <div className={classes["middle"]}>MATCH EVENTS</div>
      <div className={classes["team-sec"]}>Liverpool</div>
    </div>
  );
};

export default Top;
