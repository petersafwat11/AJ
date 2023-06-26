import React from "react";
import classes from "./top.module.css";
const Top = () => {
  return (
    <div className={classes["container"]}>
      <p className={classes["place"]}>Premier League</p>
      <h3 className={classes["date"]}>20 June</h3>
    </div>
  );
};

export default Top;
